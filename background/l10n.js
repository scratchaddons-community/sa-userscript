import LocalizationProvider from "../libraries/common/cs/l10n.js";
import chrome from "../libraries/common/chrome.js";

const ui = chrome.i18n.getUILanguage().toLowerCase();
const locales = [ui];
if (ui.includes("-")) locales.push(ui.split("-")[0]);
if (ui.startsWith("pt") && ui !== "pt-br") locales.push("pt-br");
if (!locales.includes("en")) locales.push("en");
locales.splice(locales.indexOf("en") + 1);

export default class BackgroundLocalizationProvider extends LocalizationProvider {
  constructor() {
    super();
    this.loaded = [];
  }

  async load(addonIds) {
    addonIds = addonIds.filter((addonId) => !addonId.startsWith("//") && !this.loaded.includes(addonId));

    const localePromises = locales.map(async (locale) => {
      const url = chrome.runtime.getURL(`addons-l10n/${locale}/_general.json`);
      const general = await fetch(url).then((res) => {
        if (res.status === 200) return res.json();
      });

      const messagePromises = general
        ? addonIds.map(async (addonId) => {
            const url = chrome.runtime.getURL(`addons-l10n/${locale}/${addonId}.json`);

            return fetch(url).then((res) => (res.status === 200 ? res.json() : {}));
          })
        : [];

      return Object.assign({}, general, ...(await Promise.all(messagePromises)));
    });

    this.messages = Object.assign({}, ...(await Promise.all(localePromises)).reverse());

    this._reconfigure();
    this.loaded = this.loaded.concat(addonIds);
  }
}
