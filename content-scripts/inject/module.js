function t(){const t=location.pathname.toLowerCase().split("/").filter(Boolean)
t[0]&&"projects"===t[0]&&(t.includes("editor")||t.includes("fullscreen")?document.body.classList.add("sa-body-editor"):document.body.classList.remove("sa-body-editor"))}function o(){scratchAddons.classNames.arr=[...new Set([...document.styleSheets].filter((t=>!(t.ownerNode.textContent.startsWith("/* DO NOT EDIT\n@todo This file is copied from GUI and should be pulled out into a shared library.")&&(t.ownerNode.textContent.includes("input_input-form")||t.ownerNode.textContent.includes("label_input-group_"))))).map((t=>{try{return[...t.cssRules]}catch(t){return[]}})).flat().map((t=>t.selectorText)).filter((t=>t)).map((t=>t.match(/(([\w-]+?)_([\w-]+)_([\w\d-]+))/g))).filter((t=>t)).flat())],scratchAddons.classNames.loaded=1
const t=()=>document.querySelectorAll("[class*='scratchAddonsScratchClass/']").forEach((t=>{[...t.classList].filter((t=>t.startsWith("scratchAddonsScratchClass"))).map((t=>t.substring(t.indexOf("/")+1))).forEach((o=>t.classList.replace(`scratchAddonsScratchClass/${o}`,scratchAddons.classNames.arr.find((t=>t.startsWith(o+"_")&&t.length===o.length+6))||`scratchAddonsScratchClass/${o}`)))}))
t(),new MutationObserver((()=>t())).observe(document.documentElement,{attributes:0,childList:1,subtree:1})}import s from"./run-userscript.js"
import e from"./l10n.js"
scratchAddons.classNames={loaded:0},scratchAddons.eventTargets={auth:[],settings:[],tab:[],self:[]},scratchAddons.session={},scratchAddons.loadedScripts={}
const n=(t="[page]")=>[`%cSA%c${t}%c`,"background:  #ff7b26; color: white; border-radius: 0.5rem 0 0 0.5rem; padding: 0 0.5rem","background: #222; color: white; border-radius: 0 0.5rem 0.5rem 0; padding: 0 0.5rem; font-weight: bold",""]
scratchAddons.console={log:_realConsole.log.bind(_realConsole,...n()),warn:_realConsole.warn.bind(_realConsole,...n()),error:_realConsole.error.bind(_realConsole,...n()),logForAddon(t){return _realConsole.log.bind(_realConsole,...n(t))},warnForAddon(t){return _realConsole.warn.bind(_realConsole,...n(t))},errorForAddon(t){return _realConsole.error.bind(_realConsole,...n(t))}}
const c={msgCount:[]},r=document.getElementById("scratchaddons-iframe-1"),d=document.getElementById("scratchaddons-iframe-2"),a=document.getElementById("scratchaddons-iframe-3"),i=document.getElementById("scratchaddons-iframe-4"),l=Comlink.wrap(Comlink.windowEndpoint(d.contentWindow,r.contentWindow)),h={_globalState:null,get globalState(){return this._globalState},set globalState(t){this._globalState=scratchAddons.globalState=t},l10njson:null,addonsWithUserscripts:null,_dataReady:0,get dataReady(){return this._dataReady},set dataReady(t){this._dataReady=t,function(){const t=h.addonsWithUserscripts
scratchAddons.l10n=new e(h.l10njson),scratchAddons.methods={},scratchAddons.methods.getMsgCount=()=>{let t
const o=new Promise((o=>t=o))
return c.msgCount.push(t),1===c.msgCount.length&&async function(){let t=null
if(scratchAddons.session.user?.username){const o=scratchAddons.session.user.username
try{const s=await fetch(`https://api.scratch.mit.edu/users/${o}/messages/count`)
t=(await s.json()).count||0}catch(t){scratchAddons.console.warn("Could not fetch message count: ",t)}}c.msgCount.forEach((o=>o(t))),c.msgCount=[]}(),o},scratchAddons.methods.copyImage=async t=>l.copyImage(t),scratchAddons.methods.getEnabledAddons=t=>l.getEnabledAddons(t),scratchAddons.sharedObserver=new u
const o=()=>{for(const o of t)o.scripts.length&&s(o)}
if(document.head)o()
else{const t=new MutationObserver((()=>{document.head&&(o(),t.disconnect())}))
t.observe(document.documentElement,{subtree:1,childList:1})}}(),this.refetchSession()},runAddonUserscripts:s,fireEvent(t){if(t.addonId){"disabled"===t.name?document.documentElement.style.setProperty(`--${t.addonId.replace(/-([a-z])/g,(t=>t[1].toUpperCase()))}-_displayNoneWhileDisabledValue`,"none"):"reenabled"===t.name&&document.documentElement.style.removeProperty(`--${t.addonId.replace(/-([a-z])/g,(t=>t[1].toUpperCase()))}-_displayNoneWhileDisabledValue`)
const o=scratchAddons.eventTargets[t.target].find((o=>o._addonId===t.addonId))
o&&o.dispatchEvent(new CustomEvent(t.name))}else scratchAddons.eventTargets[t.target].forEach((o=>o.dispatchEvent(new CustomEvent(t.name))))},isFetching:0,async refetchSession(){let t,o
if(!this.isFetching){this.isFetching=1,scratchAddons.eventTargets.auth.forEach((t=>t._refresh()))
try{t=await fetch("https://scratch.mit.edu/session/",{headers:{"X-Requested-With":"XMLHttpRequest"}}),o=await t.json()}catch(s){o={},scratchAddons.console.warn("Session fetch failed: ",s),(t&&!t.ok||!t)&&setTimeout((()=>this.refetchSession()),6e4)}scratchAddons.session=o,scratchAddons.eventTargets.auth.forEach((t=>t._update(o))),this.isFetching=0}}}
Comlink.expose(h,Comlink.windowEndpoint(i.contentWindow,a.contentWindow))
class u{constructor(){this.inactive=1,this.pending=new Set,this.observer=new MutationObserver((()=>{for(const t of this.pending)if(!t.condition||t.condition())for(const o of document.querySelectorAll(t.query))if(!t.seen?.has(o)&&(!t.elementCondition||t.elementCondition(o))){t.seen?.add(o),this.pending.delete(t),t.resolve(o)
break}0===this.pending.size&&(this.inactive=1,this.observer.disconnect())}))}watch(t){return this.inactive&&(this.inactive=0,this.observer.observe(document.documentElement,{subtree:1,childList:1})),new Promise((o=>this.pending.add({resolve:o,...t})))}}document.body?t():document.addEventListener("DOMContentLoaded",t)
const m=history.replaceState
history.replaceState=function(o,s,e){const n=location.href,c=e?new URL(e,document.baseURI).href:n,r=m.apply(history,arguments)
l.url=c
for(const t of scratchAddons.eventTargets.tab)t.dispatchEvent(new CustomEvent("urlChange",{detail:{oldUrl:n,newUrl:c}}))
return t(),r}
const f=history.pushState
if(history.pushState=function(o,s,e){const n=location.href,c=e?new URL(e,document.baseURI).href:n,r=f.apply(history,arguments)
l.url=c
for(const t of scratchAddons.eventTargets.tab)t.dispatchEvent(new CustomEvent("urlChange",{detail:{oldUrl:n,newUrl:c}}))
return t(),r},window.addEventListener("popstate",(()=>{const o=l.url=location.href
for(const t of scratchAddons.eventTargets.tab)t.dispatchEvent(new CustomEvent("urlChange",{detail:{oldUrl:"",newUrl:o}}))
t()})),document.querySelector("title"))o()
else{const t=new MutationObserver((()=>{document.querySelector("title")&&(t.disconnect(),o())}))
t.observe(document.documentElement,{childList:1,subtree:1})}if("/discuss/3/topic/add/"===location.pathname){const t=()=>{if(!window.mySettings)return 0
const t=window.mySettings.markupSet.find((t=>t.className))
t.openWith=window._simple_http_agent=t.openWith.replace("version","versions")
const o=document.getElementById("id_body")
return o?.value?(o.value=t.openWith,1):void 0}
t()||window.addEventListener("DOMContentLoaded",(()=>t()),{once:1})}