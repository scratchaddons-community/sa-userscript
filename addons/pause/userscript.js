import{isPaused as e,setPaused as a,onPauseChanged as s,setup as o}from"../debugger/module.js"
export default async function({addon:t,msg:c}){o(t.tab.traps.vm)
const n=document.createElement("img")
n.className="pause-btn",n.draggable=0,n.title=c("pause")
const r=()=>n.src=t.self.dir+(e()?"/play.svg":"/pause.svg")
for(n.addEventListener("click",(()=>a(!e()))),t.tab.displayNoneWhileDisabled(n),t.self.addEventListener("disabled",(()=>a(0))),r(),s(r);;)await t.tab.waitForElement("[class^='green-flag']",{markAsSeen:1,reduxEvents:["scratch-gui/mode/SET_PLAYER","fontsLoaded/SET_FONTS_LOADED","scratch-gui/locales/SELECT_LOCALE"]}),t.tab.appendToSharedSpace({space:"afterGreenFlag",element:n,order:0})}