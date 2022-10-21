import chrome from"../libraries/common/chrome.js"
import t from"../libraries/common/cs/l10n.js"
export default class s extends t{constructor(){super(),this.loaded=[]}async load(t){const s=chrome.i18n.getUILanguage().toLowerCase(),o=[s]
s.includes("-")&&o.push(s.split("-")[0]),s.startsWith("pt")&&"pt-br"!==s&&o.push("pt-br"),o.includes("en")||o.push("en")
for(const t of o){const s=chrome.runtime.getURL(`/addons-l10n/${t}.json`)
try{const t=await fetch(s),o=await t.json()
this.messages=Object.assign(o,this.messages)}catch(t){continue}}this._reconfigure(),this.loaded=this.loaded.concat(t)}}