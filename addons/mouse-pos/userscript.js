export default async function({addon:t}){var e=document.createElement("div")
t.tab.displayNoneWhileDisabled(e,{display:"flex"})
var s=document.createElement("div"),a=document.createElement("span")
e.className="pos-container-container",s.className="pos-container",e.appendChild(s),s.appendChild(a)
const o=t.tab.traps.vm
o.runtime.ioDevices.mouse.__scratchX=o.runtime.ioDevices.mouse._scratchX,o.runtime.ioDevices.mouse.__scratchY=o.runtime.ioDevices.mouse._scratchY
var c=o.runtime.ioDevices.mouse.__scratchX?o.runtime.ioDevices.mouse.__scratchX:0,n=o.runtime.ioDevices.mouse.__scratchY?o.runtime.ioDevices.mouse.__scratchY:0
const r=()=>a.setAttribute("data-content",`${c}, ${n}`)
for(Object.defineProperty(o.runtime.ioDevices.mouse,"_scratchX",{get(){return this.__scratchX},set(t){c=t,r(),this.__scratchX=t}}),Object.defineProperty(o.runtime.ioDevices.mouse,"_scratchY",{get(){return this.__scratchY},set(t){n=t,r(),this.__scratchY=t}}),t.tab.redux.state&&"small"===t.tab.redux.state.scratchGui.stageSize.stageSize&&document.body.classList.add("sa-mouse-pos-small"),document.addEventListener("click",(t=>{t.target.closest("[class*='stage-header_stage-button-first']")?document.body.classList.add("sa-mouse-pos-small"):t.target.closest("[class*='stage-header_stage-button-last']")&&document.body.classList.remove("sa-mouse-pos-small")}),{capture:1});;)await t.tab.waitForElement('[class*="controls_controls-container"]',{markAsSeen:1,reduxEvents:["scratch-gui/mode/SET_PLAYER","fontsLoaded/SET_FONTS_LOADED","scratch-gui/locales/SELECT_LOCALE"]}),"editor"===t.tab.editorMode&&t.tab.appendToSharedSpace({space:"afterStopButton",element:e,order:1})}