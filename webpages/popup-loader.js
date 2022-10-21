function e(e,t,n){return new Promise((o=>{chrome.cookies.get({url:"https://scratch.mit.edu/",name:e,storeId:n},(e=>{o(e&&e.value?t?e:e.value:null)}))}))}async function t(t=1){if(t)try{await fetch("https://scratch.mit.edu/csrf_token/")}catch(e){return console.error(e),void(scratchAddons.cookieFetchingFailed=1)}const n=await async function(){return(await c(chrome.tabs.getCurrent.bind(chrome.tabs))())?.cookieStoreId||void 0}(),o=await e("scratchlanguage",0,n)||navigator.language,a=await e("scratchcsrftoken",1,n)
scratchAddons.cookieStoreId=n||a.storeId,scratchAddons.cookies.set("scratchlanguage",o),scratchAddons.cookies.set("scratchcsrftoken",a.value)}async function n(e){let t,n
if(!scratchAddons.isFetchingSession){scratchAddons.isFetchingSession=1,e.auth._refresh()
try{t=await fetch("https://scratch.mit.edu/session/",{headers:{"X-Requested-With":"XMLHttpRequest"}}),n=await t.json()}catch(o){n={},console.warn("Session fetch failed: ",o),(t&&!t.ok||!t)&&setTimeout((()=>this.refetchSession(e)),6e4)}scratchAddons.session=n,e.auth._update(n),scratchAddons.isFetchingSession=0}}import"./set-lang.js"
import o from"../addon-api/popup/Addon.js"
import a from"../libraries/common/website-l10n.js"
import s from"../../libraries/common/global-theme.js"
const scratchAddons=window.scratchAddons={}
scratchAddons.eventTargets={auth:[],settings:[],self:[]},scratchAddons.localEvents=new EventTarget,scratchAddons.globalState={},scratchAddons.methods={},scratchAddons.l10n=new a,scratchAddons.isLightMode=0,scratchAddons.cookieFetchingFailed=0,scratchAddons.cookies=new Map
const c=e=>(...t)=>new Promise((n=>e(...t,n)));(async()=>{const e=location.pathname.split("/")[2],a=c(chrome.runtime.sendMessage.bind(chrome.runtime)),s=await a({requestPopupInfo:{addonId:e}})
scratchAddons.globalState={addonSettings:s.settings}
const i=chrome.runtime.connect(void 0,{name:e})
await new Promise((e=>{i.onMessage.addListener((t=>{"ping"===t&&e()}))})),scratchAddons.methods.getMsgCount=()=>{throw new Error("Unimplemented; fetch from IndexedDB or call MessageCache.fetchMessageCount instead")},scratchAddons.methods.getEnabledAddons=e=>a({getEnabledAddons:{tag:e}}),await t()
const r=new o({id:e})
i.onMessage.addListener((o=>{o.newGlobalState?scratchAddons.globalState=o.newGlobalState:o.fireEvent&&o.fireEvent.addonId===e?scratchAddons.eventTargets[o.fireEvent.target]?.forEach((e=>e.dispatchEvent(new CustomEvent(o.fireEvent.name)))):o.refetchSession&&t(0).then((()=>n(r)))}))
const m=Object.create(null)
await scratchAddons.l10n.loadByAddonId(e),n(r)
const d=(t,n)=>scratchAddons.l10n.get(t.startsWith("/")?t.slice(1):`${e}/${t}`,n)
d.locale=scratchAddons.l10n.locale
const l=s.popup.script;(await import(chrome.runtime.getURL(`/popups/${e}/${l}`))).default({addon:r,global:m,console,msg:d,safeMsg(t,n){return scratchAddons.l10n.escaped(t.startsWith("/")?t.slice(1):`${e}/${t}`,n)}})})(),s().then((({theme:e})=>{scratchAddons.isLightMode=e})),window.parent===window&&(document.body.classList.add("fullscreen"),document.documentElement.classList.add("fullscreen")),document.head.appendChild(Object.assign(document.createElement("link"),{rel:"icon",href:chrome.runtime.getManifest().version_name.endsWith("-prerelease")?"../../images/icon-blue.png":"../../images/icon.png",id:"favicon"}))
