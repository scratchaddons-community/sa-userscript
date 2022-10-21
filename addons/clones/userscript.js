export default async function({addon:n,msg:o}){function e(e){const a=t.runtime._cloneCounter;(a!==d||e)&&(s.dataset.count=d=a,l.dataset.str=c?a:u[a]||o("clones",{cloneCount:a}),0===a?s.style.display="none":n.tab.displayNoneWhileDisabled(s,{display:"flex"}))}const t=n.tab.traps.vm
let c=n.settings.get("showicononly")
n.tab.redux.state&&"small"===n.tab.redux.state.scratchGui.stageSize.stageSize&&document.body.classList.add("sa-clones-small"),document.addEventListener("click",(n=>{n.target.closest("[class*='stage-header_stage-button-first']")?document.body.classList.add("sa-clones-small"):n.target.closest("[class*='stage-header_stage-button-last']")&&document.body.classList.remove("sa-clones-small")}),{capture:1})
let s=document.createElement("div"),a=document.createElement("div"),l=document.createElement("span"),r=document.createElement("span")
s.className="clone-container-container",a.className="clone-container",l.className="clone-count",r.className="clone-icon",s.appendChild(r),s.appendChild(a),a.appendChild(l)
let d=0
const u=Array(301).fill().map(((n,e)=>o("clones",{cloneCount:e})))
n.settings.addEventListener("change",(()=>{c=n.settings.get("showicononly"),e(1)})),t.runtime.on("targetWasRemoved",(n=>{n.isOriginal&&t.runtime.changeCloneCounter(1)}))
const i=t.runtime._step
for(t.runtime._step=function(...n){const o=i.call(this,...n)
return e(),o};;)await n.tab.waitForElement('[class*="controls_controls-container"]',{markAsSeen:1,reduxEvents:["scratch-gui/mode/SET_PLAYER","fontsLoaded/SET_FONTS_LOADED","scratch-gui/locales/SELECT_LOCALE"]}),"editor"===n.tab.editorMode&&n.tab.appendToSharedSpace({space:"afterStopButton",element:s,order:2})}