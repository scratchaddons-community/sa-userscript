import chrome from "../libraries/common/chrome.js";
import LocalizationProvider from "../libraries/common/cs/l10n.js";

export default class BackgroundLocalizationProvider extends LocalizationProvider {
  constructor() {
    super();
    this.loaded = [];
  }

  async load(addonIds) {
    const ui = chrome.i18n.getUILanguage().toLowerCase();
    const locales = [ui];
    if (ui.includes("-")) locales.push(ui.split("-")[0]);
    if (ui.startsWith("pt") && ui !== "pt-br") locales.push("pt-br");
    if (!locales.includes("en")) locales.push("en");

    for (const locale of locales) {
      const url = chrome.runtime.getURL(`/addons-l10n/${locale}.json`);
      try {
        const resp = await fetch(url);
        const messages = await resp.json();
        this.messages = Object.assign(messages, this.messages);
      } catch (_) {
        continue;
      }
    }
    this._reconfigure();
    this.loaded = this.loaded.concat(addonIds);
  }
}
