import "../../libraries/thirdparty/cs/comlink.js";

const info = window.info ||
  (window !== window.parent && Comlink.wrap(Comlink.windowEndpoint(window.parent))) || {
    listeners: [],
    alarms: {},
    alarmListeners: [],
  };

let nextMsgId = 0,
  listenersReady = window === window.parent;

export function parseJson(res) {
  try {
    return typeof res === "string"
      ? res === "undefined" || res === "" || res.startsWith("[object ")
        ? null
        : JSON.parse(res)
      : res;
  } catch {
    return null;
  }
}

const promisify =
  (callbackFn) =>
  (...args) =>
    new Promise((resolve) => callbackFn(...args, resolve));

const storage = {
  async get(keys, callback) {
    const res = await Promise.all(
      (typeof keys === "string" ? [keys] : keys).map(async (key) => {
        // localStorage[key]
        return [key, parseJson(await promisify(sendMessage)({ getFromStorage: key }))];
      })
    );
    return callback(Object.fromEntries(res));
  },
  async set(keys, callback = () => {}) {
    await Promise.all(
      Object.entries(keys).map(
        async ([key, value]) => await promisify(sendMessage)({ setInStorage: [key, value] })
        // localStorage[key] = JSON.stringify(value);
      )
    );
    return callback();
  },
};

async function sendMessage(message, callback) {
  let called = false;
  if (!listenersReady) {
    window.parent.postMessage({ message: "areListenersReady" }, "*");

    await new Promise(function (resolve) {
      const listener = (e) => {
        if (e.source !== window.parent || e.data !== "listeners ready") return;

        listenersReady = true;
        resolve();
        window.removeEventListener("message", listener);
      };

      window.addEventListener("message", listener);
    });
  }

  const id = nextMsgId++;
  const length = await info.listeners.length;
  for (let i = 0; i < length; i++) {
    if (
      (await info.listeners[i](
        message,
        undefined,
        Comlink.proxy((...args) => {
          called = true;
          callback?.(...args);
        })
      )) ||
      called
    )
      return;
  }

  window.parent.postMessage({ id, message }, "*");

  const listener = (event) => {
    if (event.source === window.parent && event.data.reqId === id + "r") {
      window.removeEventListener("message", listener);
      called = true;
      callback?.(event.data.res);
    }
  };
  window.addEventListener("message", listener);
}

const ui = navigator.language.toLowerCase().split("-");

// Start with the chosen language
const locales = [ui[0] + (ui[1] ? "_" + ui[1].toUpperCase() : "")];

// Remove country code
if (ui[1]) locales.push(ui[0]);

// If non-Brazillian Portugese is chosen, add Brazilian as a fallback.
if (ui[0] === "pt" && ui[1] !== "br") locales.push("pt_BR");

// Add English as a fallback
if (!locales.includes("en")) locales.push("en");
locales.splice(locales.indexOf("en") + 1);

const localePromises = locales
  .map(async (locale) => {
    const resp = await fetch(getURL("_locales/" + locale + "/messages.json"));
    return resp.status === 200 ? await resp.json() : {};
  })
  .reverse();

const messages = Object.assign({}, ...(await Promise.all(localePromises)));

const response = await fetch(getURL("manifest.json"));
const manifest = {
  ...(await response.json()),
  name: getMessage("extensionName"),
  description: getMessage("extensionDescription"),
};

function getMessage(message, placeholders = []) {
  if (typeof placeholders === "string") placeholders = [placeholders];

  const string = messages[message]?.message;

  if (typeof string !== "string") throw new ReferenceError("Could not find message with key", message);

  return string.replace(/\$(\d+)/g, (_, dollar) => placeholders[dollar - 1]);
}

/** @type {typeof chrome} */
export default {
  ...(window.browser || {}),
  ...(window.chrome || {}),
  pollyfilled: true,
  storage: { sync: storage, local: storage },
  runtime: {
    getManifest() {
      return manifest;
    },
    reload() {
      sendMessage("reload page");
    },
    getURL,
    sendMessage,
    onMessage: {
      async addListener(callback) {
        console.log(location.href);
        await info.listeners.push(callback);
      },
    },
    lastError: undefined,
    openOptionsPage() {
      sendMessage({ updatePageUrl: "https://scratch.mit.edu/scratch-addons-extention/settings" });
      window.location.href = "https://scratch.mit.edu/scratch-addons-extention/settings";
    },
  },
  i18n: {
    getUILanguage() {
      return navigator.language;
    },
    getMessage,
  },
  permissions: {
    contains(_, callback) {
      callback?.(false);
    },
    getAll(callback) {
      callback?.({ origins: ["https://scratch.mit.edu/*"], permissions: ["cookies", "storage", "clipboardWrite"] });
    },
    remove(_, callback) {
      callback?.(true);
    },
    request(_, callback) {
      callback?.(false);
    },
    onAdded: { addListener() {} },
    onRemoved: { addListener() {} },
  },
  alarms: {
    clear(name = "", callback) {
      info.alarms[name] = undefined;
      callback?.(true);
    },
    clearAll(callback) {
      info.alarms = {};
      callback?.(true);
    },
    create(name = "", alarmInfo) {
      async function loop() {
        const length = await info.alarmListeners.length;
        for (let i = 0; i < length; i++) {
          if (await info.alarmListeners[i](name)) return;
        }
      }

      const fun = async () => {
        await loop();
        if (alarmInfo.periodInMinutes) info.alarms[name] = setInterval(() => loop(), alarmInfo.periodInMinutes);
      };

      const initDelay = alarmInfo.delayInMinutes * 60_000 || alarmInfo.when - Date.now() || 0;
      if (initDelay > 60_000) info.alarms[name] = setTimeout(fun, initDelay);
      else fun();
    },
    get(name = "", callback) {
      callback?.({ name });
    },
    async getAll(callback) {
      callback?.(Object.keys(await info.alarms).map((name) => ({ name })));
    },
    onAlarm: {
      async addListener(callback) {
        await info.alarmListeners.push(callback);
      },
    },
  },
  tabs: {
    create(createProperties) {
      if (createProperties.url) window.location.href = createProperties.url;
    },
    query(_, callback) {
      callback?.([]);
    },
  },
};

function getURL(url) {
  const { href } = new URL("../../" + (url.startsWith("/") ? url.substring(1) : url), import.meta.url);
  return href;
}

window.__scratchAddonsChrome = chrome;

window.info = info;

const iframe = document.querySelector("iframe");

if (iframe) Comlink.expose(info, Comlink.windowEndpoint(iframe.contentWindow));
