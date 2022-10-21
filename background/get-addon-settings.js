import chrome from"../libraries/common/chrome.js"
import o from"../libraries/common/minify-settings.js"
const e=(o,e,t=null,d=null)=>{if(e>(o._version||0)){if(o._version=e,null===d)return
const n={}
for(const e of Object.keys(t)){if(o[e]!==t[e])return
n[e]=d.values[e]}Object.assign(o,n)}}
chrome.storage.sync.get(["addonSettings","addonsEnabled"],(({addonSettings:t={},addonsEnabled:d={}})=>{const n=()=>{let n=0
1==d["editor-devtools"]&&void 0===d["move-to-top-bottom"]&&(d["move-to-top-bottom"]=1,n=1),1==t["editor-dark-mode"]?.textShadow&&void 0===d["custom-block-text"]&&(n=1,delete t["editor-dark-mode"].textShadow,d["custom-block-text"]=d["editor-dark-mode"],t["custom-block-text"]={shadow:1}),0==d["editor-devtools"]&&(void 0===d["find-bar"]&&(n=1,d["find-bar"]=0),void 0===d["jump-to-def"]&&(n=1,d["jump-to-def"]=0))
for(const{manifest:o,addonId:s}of scratchAddons.manifests){const i=t[s]||{}
let r=0
if("editor-dark-mode"===s&&void 0!==i.palette&&7===i.palette.length&&(i.palette+="cc",n=r=1),o.settings){for(const e of o.settings)if(void 0===i[e.id])r=1,n=1,i[e.id]=JSON.parse(JSON.stringify(e.default))
else if("positive_integer"===e.type||"integer"===e.type){if("number"!=typeof i[e.id]){r=1,n=1
const o=Number(i[e.id]),t=Number.isNaN(o)?e.default:o
i[e.id]=t}}else if("table"===e.type){const o=e.row.map((o=>o.id))
i[e.id].forEach(((t,d)=>{e.row.forEach((o=>{void 0===t[o.id]&&(r=1,n=1,t[o.id]=e.default[d][o.id])}))
for(const e in t)o.includes(e)||(r=1,n=1,delete t[e])}))}if("dark-www"===s){const e=t.scratchr2||{};("string"==typeof e.primaryColor&&"#4d97ff"!==e.primaryColor||"string"==typeof e.linkColor&&"#4d97ff"!==e.linkColor)&&(1!=d["dark-www"]&&(d["dark-www"]=1==d.scratchr2,Object.assign(i,o.presets.find((o=>"scratch"===o.id)).values)),n=r=1,"string"==typeof e.primaryColor&&(i.navbar=i.button=e.primaryColor),"string"==typeof e.linkColor&&(i.link=e.linkColor),delete e.primaryColor,delete e.linkColor)}"editor-dark-mode"===s&&e(i,2)}void 0===d[s]&&(d[s]=!!o.enabledByDefault),r&&(console.log(`Changed settings for addon ${s}`),t[s]=i)}const s=chrome.runtime.getManifest().version_name.endsWith("-prerelease")
n&&chrome.storage.sync.set({addonSettings:o(t,s?null:scratchAddons.manifests),addonsEnabled:d}),scratchAddons.globalState.addonSettings=t,scratchAddons.localState.addonsEnabled=d,scratchAddons.localState.ready.addonSettings=1}
scratchAddons.localState.ready.manifests?n():scratchAddons.localEvents.addEventListener("manifestsReady",n)}))
