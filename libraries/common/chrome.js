async function e(e,t){let n=0
i||(window.parent.postMessage({message:"areListenersReady"},"*"),await new Promise((function(e){const t=n=>{n.source===window.parent&&"listeners ready"===n.data&&(i=1,e(),window.removeEventListener("message",t))}
window.addEventListener("message",t)})))
const o=a++,r=await s.listeners.length
for(let a=0;r>a;a++)if(await(s.listeners[a]?.(e,void 0,Comlink.proxy(((...e)=>{n=1,t?.(...e)}))))||n)return
if(e.getFromStorage)return t(window.localStorage[`SCRATCHADDONS__${e.getFromStorage}`])
if(e.setInStorage)return window.localStorage[`SCRATCHADDONS__${e.setInStorage[0]}`]=JSON.stringify(e.setInStorage[1]),t()
if("reload page"===e)return location.reload()
window.parent.postMessage({id:o,message:e},"*")
const c=e=>{e.source===window.parent&&e.data.reqId===o+"r"&&(window.removeEventListener("message",c),n=1,t?.(e.data.res))}
window.addEventListener("message",c)}function t(e,t=[]){"string"==typeof t&&(t=[t])
const n=l[e]?.message
if("string"!=typeof n)throw new ReferenceError("Could not find message with key",e)
return n.replace(/\$(\d+)/g,((e,n)=>t[n-1]))}function n(e){const{href:t}=new URL("../../"+(e.startsWith("/")?e.substring(1):e),import.meta.url)
return t}import"../../libraries/thirdparty/cs/comlink.js"
const s=window.__scratchAddonsChromeInfo||window!==window.parent&&Comlink.wrap(Comlink.windowEndpoint(window.parent))||{listeners:[],alarms:{},alarmListeners:[]}
let a=0,i=window===window.parent
export function parseJson(e){try{return"string"==typeof e?"undefined"===e||""===e||e.startsWith("[object ")?null:JSON.parse(e):e}catch{return null}}const o=e=>(...t)=>new Promise((n=>e(...t,n))),r={async get(t,n){const s=await Promise.all(("string"==typeof t?[t]:t).map((async t=>[t,parseJson(await o(e)({getFromStorage:t}))])))
return n(Object.fromEntries(s))},set:async(t,n=(()=>{}))=>(await Promise.all(Object.entries(t).map((async([t,n])=>await o(e)({setInStorage:[t,n]})))),n())},c=navigator.language.toLowerCase().split("-"),d=[c[0]+(c[1]?"_"+c[1].toUpperCase():"")]
c[1]&&d.push(c[0]),"pt"===c[0]&&"br"!==c[1]&&d.push("pt_BR"),d.includes("en")||d.push("en"),d.splice(d.indexOf("en")+1)
const w=d.map((async e=>{const t=await fetch(n("_locales/"+e+"/messages.json"))
return 200===t.status?await t.json():{}})).reverse(),l=Object.assign({},...await Promise.all(w)),m=await fetch(n("manifest.json")),g={...await m.json(),name:t("extensionName"),description:t("extensionDescription")}
export default{...window.browser||{},...window.chrome||{},pollyfilled:1,storage:{sync:r,local:r},runtime:{getManifest:()=>g,reload(){e("reload page")},getURL:n,sendMessage:e,onMessage:{async addListener(e){await s.listeners.push(e)},async removeListener(e){const t=await s.listeners.indexOf(e)
t>-1&&(s.listeners[t]=void 0)}},lastError:void 0,openOptionsPage(){e({updatePageUrl:"https://scratch.mit.edu/scratch-addons-extention/settings"}),window.location.href="https://scratch.mit.edu/scratch-addons-extention/settings"}},i18n:{getUILanguage:()=>navigator.language,getMessage:t},permissions:{contains(e,t){t?.(0)},getAll(e){e?.({origins:["https://scratch.mit.edu/*"],permissions:["cookies","storage","clipboardWrite"]})},remove(e,t){t?.(1)},request(e,t){t?.(0)},onAdded:{addListener(){}},onRemoved:{addListener(){}}},alarms:{clear(e="",t){s.alarms[e]=void 0,t?.(1)},clearAll(e){s.alarms={},e?.(1)},create(e="",t){async function n(){const t=await s.alarmListeners.length
for(let n=0;t>n;n++)if(await s.alarmListeners[n](e))return}const a=async()=>{await n(),t.periodInMinutes&&(s.alarms[e]=setInterval((()=>n()),t.periodInMinutes))},i=6e4*t.delayInMinutes||t.when-Date.now()||0
i>6e4?s.alarms[e]=setTimeout(a,i):a()},get(e="",t){t?.({name:e})},async getAll(e){e?.(Object.keys(await s.alarms).map((e=>({name:e}))))},onAlarm:{async addListener(e){await s.alarmListeners.push(e)}}},tabs:{create(e){e.url&&(window.location.href=e.url)},query(e,t){t?.([])}},webRequest:{onBeforeRequest:{addListener(){}},onResponseStarted:{addListener(){}}}}
window.__scratchAddonsChromeInfo=s
const u=document.querySelector("iframe")
u&&Comlink.expose(s,Comlink.windowEndpoint(u.contentWindow))
