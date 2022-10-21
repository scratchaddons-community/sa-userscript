export default async function({addon:t,msg:e}){function c(){let c=t.settings.get("show"),o=(()=>{let t=0,e=0,c=new Set(n.runtime.targets.map((t=>t.sprite.blocks._blocks)))
return c.forEach((c=>{e+=Object.values(c).filter((t=>!t.parent)).length,t+=Object.values(c).filter((t=>!t.shadow)).length})),{blockCount:t,scriptCount:e,spriteCount:c.size-1}})()
document.querySelector("#spriteLabel").innerText="icon"===c?o.spriteCount:e("sprite",{num:o.spriteCount}),document.querySelector("#scriptLabel").innerText="icon"===c?o.scriptCount:e("script",{num:o.scriptCount})}const n=t.tab.traps.vm,o=async()=>{for(;;){await t.tab.waitForElement(".preview .project-buttons",{markAsSeen:1,reduxEvents:["scratch-gui/mode/SET_PLAYER","fontsLoaded/SET_FONTS_LOADED","scratch-gui/locales/SELECT_LOCALE"],reduxCondition(t){return t.scratchGui.mode.isPlayerOnly}})
const e=document.createElement("div")
e.className="sa-project-info",t.tab.displayNoneWhileDisabled(e,{display:"inline-block"}),t.tab.appendToSharedSpace({space:"beforeRemixButton",element:e,order:0})
let n=document.createElement("img")
n.setAttribute("src","https://scratch.mit.edu/svgs/project/sprite-count.svg"),e.appendChild(n)
let o=document.createElement("span")
o.id="spriteLabel",e.appendChild(o),e.appendChild(document.createElement("br"))
let s=document.createElement("img")
s.setAttribute("src","https://scratch.mit.edu/svgs/project/block-count.svg"),e.appendChild(s)
let r=document.createElement("span")
r.id="scriptLabel",e.appendChild(r),c()}}
n.runtime.on("PROJECT_LOADED",(async()=>o())),t.tab.addEventListener("urlChange",(()=>o())),t.self.enabledLate&&o(),t.settings.addEventListener("change",(()=>c()))}