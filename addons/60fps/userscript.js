export default async function({addon:t}){let e=30
const n=t.tab.traps.vm
let a=0,r=0
for(;;){let s=await t.tab.waitForElement("[class^='green-flag_green-flag']",{markAsSeen:1,reduxEvents:["scratch-gui/mode/SET_PLAYER","fontsLoaded/SET_FONTS_LOADED","scratch-gui/locales/SELECT_LOCALE"]})
const o=()=>{s.style.filter=a?"hue-rotate(90deg)":""},c=(e=!a)=>{if(a=e,a){if(l(t.settings.get("framerate")),!r){const e=n.listeners("MONITORS_UPDATE").find((t=>"onMonitorsUpdate"===t.name))
e&&n.removeListener("MONITORS_UPDATE",e),n.on("MONITORS_UPDATE",(e=>t.tab.redux.dispatch({type:"scratch-gui/monitors/UPDATE_MONITORS",monitors:e}))),r=1}}else l(30)
o()},i=e=>{if(t.self.disabled)return
const n="click"===e.type&&e.altKey,a=navigator.userAgent.includes("CrOS")&&"contextmenu"===e.type;(n||a)&&(e.cancelBubble=1,e.preventDefault(),c())}
s.addEventListener("click",i),s.addEventListener("contextmenu",i)
const l=a=>{e=t.self.disabled?30:a,clearInterval(n.runtime._steppingInterval),n.runtime._steppingInterval=null,n.runtime.start()}
t.settings.addEventListener("change",(()=>{n.runtime._steppingInterval&&l(t.settings.get("framerate"))})),t.self.addEventListener("disabled",(()=>c(0))),n.runtime.start=function(){if(this._steppingInterval)return
let t=1e3/e
this.currentStepTime=t,this._steppingInterval=setInterval((()=>{this._step()}),t),this.emit("RUNTIME_STARTED")},o()}}