// ==UserScript==
// @name        __MSG_extensionName__
// @description __MSG_extensionDescription__
// @author      scratchaddons.com
// @version     __MSG_extensionVersionName__
// @icon        __MSG_extensionIcon__
// @homepage    https://scratchaddons.com
// @supportURL  https://scratchaddons.com/feedback
// @updateURL   https://sa-userscript-dev.cf/userscript/script.user.js
// @downloadURL https://sa-userscript-dev.cf/userscript/script.user.js
// @match       https://scratch.mit.edu/*
// @run-at      document-start
// @weight      999
// @require     https://sa-userscript-dev.cf/content-scripts/load-redux.js
// @require     https://sa-userscript-dev.cf/content-scripts/prototype-handler.js
// @require     https://sa-userscript-dev.cf/content-scripts/fix-console.js
// @require     https://sa-userscript-dev.cf/libraries/common/cs/text-color.js
// @grant       none
// @namespace   https://scratchaddons.com/
// ==/UserScript==

function updateAttrs(target, source) {
  Array.from(target.attributes).forEach((attr) => target.removeAttribute(attr.name));

  Array.from(source.attributes).forEach((attr) => target.setAttribute(attr.name, attr.value));
}

if (/^\/(scratch\-addons\-extension|scratch-addons|)\/settings\/?$/i.test(location.pathname)) {
  fetch("https://sa-userscript-dev.cf/webpages/settings/scratch.html")
    .then((r) => r.text())
    .then(async (html) => {
      const dom = new DOMParser().parseFromString(html, "text/html");
      window.stop();

      updateAttrs(document.documentElement, dom.documentElement);

      if (!document.head) document.documentElement.append(document.createElement("head"));
      updateAttrs(document.head, dom.head);
      document.head.innerHTML = "";
      const deferred = [];
      for (const element of [...dom.head.children]) {
        if (element.tagName === "SCRIPT") {
          const run = async () => {
            const load = async () => {
              return await import(
                element.src
                  ? new URL(element.src, document.baseURI).href
                  : "data:text/javascript," + element.textContent
              );
            };
            if (element.async) setTimeout(async () => await load(), 0);
            else await load();
          };

          if (element.defer) deferred.push(run);
          else await run();
        } else {
          document.head.append(element.cloneNode(true));
        }
      }

      if (!document.body) document.documentElement.append(document.createElement("body"));
      updateAttrs(document.body, dom.body);
      document.body.innerHTML = dom.body.innerHTML;

      for (const run of deferred) await run();
    });
} else {
  document.documentElement.append(
    Object.assign(document.createElement("script"), {
      src: "https://sa-userscript-dev.cf/content-scripts/cs.js",
      type: "module",
    })
  );
}
