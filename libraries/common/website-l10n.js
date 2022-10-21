import s from"./cs/l10n.js"
export default class t extends s{async loadByAddonId(s){const t=await new Promise((t=>chrome.runtime.sendMessage({l10nAddonId:s},t)))
this.messages=Object.assign(t,this.messages),this._reconfigure()}}