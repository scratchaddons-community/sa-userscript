import Addon from "../../addon-api/content-script/Addon.js";
import createConsole from "../../libraries/common/console.js";
import chrome from "../../libraries/common/chrome.js";

let console = createConsole("page");

export default async function runAddonUserscripts({ addonId, scripts, enabledLate = false }) {
  console = {
    ...console,
    log: console.logForAddon(addonId),
    dir: console.dirForAddon(addonId),
    warn: console.warnForAddon(addonId),
    error: console.errorForAddon(addonId),
  };
  const addonObj = new Addon({ id: addonId, enabledLate },console);
  addonObj.auth._update(scratchAddons.session);
  const globalObj = Object.create(null);
  for (const scriptInfo of scripts) {
    const { url: scriptPath, runAtComplete } = scriptInfo;
    const scriptUrl = chrome.runtime.getURL(`addons/${addonId}/${scriptPath}`);
    const loadUserscript = async () => {
      await scratchAddons.l10n.loadByAddonId(addonId);
      const module = await import(scriptUrl);
      const msg = (key, placeholders) =>
        scratchAddons.l10n.get(key.startsWith("/") ? key.slice(1) : `${addonId}/${key}`, placeholders);
      msg.locale = scratchAddons.l10n.locale;
      console.log(
        `Running ${scriptUrl}, runAtComplete: ${runAtComplete}, enabledLate: ${enabledLate}`
      );
      module.default({
        addon: addonObj,
        global: globalObj,
        console,
        msg,
        safeMsg: (key, placeholders) =>
          scratchAddons.l10n.escaped(key.startsWith("/") ? key.slice(1) : `${addonId}/${key}`, placeholders),
      });
    };
    if (runAtComplete && document.readyState !== "complete") {
      window.addEventListener("load", () => loadUserscript(), { once: true });
    } else {
      await loadUserscript();
    }
  }
}
