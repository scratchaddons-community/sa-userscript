import e from"./gamepadlib.js"
export default async function({addon:t,console:n,msg:o}){const a=t.tab.traps.vm
await new Promise((e=>{if(a.editingTarget)return e()
a.runtime.once("PROJECT_LOADED",e)}))
const s=()=>null!==a.runtime._steppingInterval,r=e=>{switch(e){case"right arrow":return"ArrowRight"
case"up arrow":return"ArrowUp"
case"left arrow":return"ArrowLeft"
case"down arrow":return"ArrowDown"
case"enter":return"Enter"
case"space":return" "}return e.toLowerCase().charAt(0)},c=()=>{const e=[a.runtime.getTargetForStage(),...a.runtime.targets].filter((e=>e.isOriginal)).map((e=>e.blocks)),t=new Set
for(const n of e)for(const e of Object.values(n._blocks))if("event_whenkeypressed"===e.opcode||"sensing_keyoptions"===e.opcode){if("sensing_keyoptions"===e.opcode&&!e.parent)continue
t.add(r(e.fields.KEY_OPTION.value))}return t},d=" // _gamepad_",u=()=>{const e=a.runtime.getTargetForStage().comments
for(const t of Object.values(e))if(t.text.includes(d))return t
return null}
e.setConsole(n)
const i=new e
i.getHintsLazily=()=>{const e=(()=>{const e=u()
if(!e)return null
const t=e.text.split("\n").find((e=>e.endsWith(d)))
if(!t)return n.warn("Gamepad comment does not contain valid line"),null
const o=t.substr(0,t.length-d.length)
let a
try{if(a=JSON.parse(o),!a||"object"!=typeof a||!Array.isArray(a.buttons)||!Array.isArray(a.axes))throw new Error("Invalid data")}catch(e){return n.warn("Gamepad comment has invalid JSON",e),null}return a})()
return e?{importedSettings:e}:{usedKeys:c()}},a.runtime.on("PROJECT_LOADED",(()=>{i.resetControls()})),t.settings.get("hide")&&await new Promise((e=>{const n=()=>{t.settings.removeEventListener("change",o),e()},o=()=>{t.settings.get("hide")||n()}
i.gamepadConnected().then(n),t.settings.addEventListener("change",o)}))
const m=a.runtime.renderer,l=m._xRight-m._xLeft,p=m._yTop-m._yBottom,g=m.canvas,w=document.createElement("div")
w.className="sa-gamepad-container",t.tab.displayNoneWhileDisabled(w,{display:"flex"})
const h=document.createElement("span")
h.className=t.tab.scratchClass("button_outlined-button","stage-header_stage-button")
const f=document.createElement("div")
f.className=t.tab.scratchClass("button_content")
const b=document.createElement("img")
let _
b.className=t.tab.scratchClass("stage-header_stage-button-icon"),b.draggable=0,b.src=t.self.dir+"/gamepad.svg",f.appendChild(b),h.appendChild(f),w.appendChild(h)
let E=0
const k=()=>{a.runtime.emitProjectChanged(),a.editingTarget===a.runtime.getTargetForStage()&&a.emitWorkspaceUpdate()},v=()=>{const e=_.export()
if(!e)return void n.warn("Could not export gamepad settings")
const t=`${o("config-header")}\n${JSON.stringify(e)} // _gamepad_`,s=u()
s?s.text=t:a.runtime.getTargetForStage().createComment(Math.random()+"",null,t,50,50,350,150,0),k()},y=()=>{E&&v()},O=e=>{E=!!e.target.checked,E?v():(()=>{const e=u()
e&&(delete a.runtime.getTargetForStage().comments[e.id],k())})()},S=()=>{document.body.classList.toggle("sa-gamepad-has-controller",_.hasControllerSelected()),y()}
h.addEventListener("click",(()=>{_||(_=i.editor(),_.msg=o,_.addEventListener("mapping-changed",y),_.addEventListener("gamepad-changed",S))
const n=_.generateEditor()
S()
const{backdrop:a,container:s,content:r,closeButton:c,remove:d}=t.tab.createModal(o("settings"),{isOpen:1,useEditorClasses:1})
if(a.addEventListener("click",d),window.addEventListener("keydown",(e=>{"Escape"!==e.key||e.target.closest("[data-accepting-input]")||d()})),t.self.addEventListener("disabled",d),a.classList.add("sa-gamepad-popup-outer"),s.classList.add("sa-gamepad-popup"),c.tabIndex="0",c.setAttribute("role","button"),c.addEventListener("click",d),c.addEventListener("keydown",(e=>{"Enter"!==e.key&&" "!==e.key||d()})),r.classList.add("sa-gamepad-popup-content"),e.browserHasBrokenGamepadAPI()){const e=document.createElement("div")
e.textContent=o("browser-support"),e.className="sa-gamepad-browser-support-warning",r.appendChild(e)}r.appendChild(n)
const u=document.createElement("div")
u.className="sa-gamepad-extra-options",r.appendChild(u)
const m=()=>{_.updateAllContent(),w.checked=0,E=0},l=document.createElement("button")
l.className="sa-gamepad-reset-button",l.textContent=o("reset"),l.addEventListener("click",(()=>{i.resetControls(),m()})),u.appendChild(l)
const p=document.createElement("button")
p.className="sa-gamepad-reset-button",p.textContent=o("clear"),p.addEventListener("click",(()=>{i.clearControls(),m()})),u.appendChild(p)
const g=document.createElement("label")
g.className="sa-gamepad-store-settings",g.textContent=o("store-in-project")
const w=document.createElement("input")
w.type="checkbox",w.checked=E,w.addEventListener("change",O),g.prepend(w),u.appendChild(g),_.focus()})),t.tab.redux.state&&"small"===t.tab.redux.state.scratchGui.stageSize.stageSize&&document.body.classList.add("sa-gamepad-small"),document.addEventListener("click",(e=>{e.target.closest("[class*='stage-header_stage-button-first']:not(.sa-hide-stage-button)")?document.body.classList.add("sa-gamepad-small"):(e.target.closest("[class*='stage-header_stage-button-last']")||e.target.closest(".sa-hide-stage-button"))&&document.body.classList.remove("sa-gamepad-small")}),{capture:1})
const A=document.createElement("img")
let L
A.hidden=1,A.className="sa-gamepad-cursor",A.src=t.self.dir+"/cursor.png",t.self.addEventListener("disabled",(()=>{A.hidden=1}))
const D=e=>{A.hidden=!e,clearTimeout(L),e&&(document.body.classList.add("sa-gamepad-hide-cursor"),L=setTimeout(x,8e3))},x=()=>{D(0)},T=e=>{D(1),A.classList.toggle("sa-gamepad-cursor-down",e)}
let C
if(document.addEventListener("mousemove",(()=>{D(0),document.body.classList.remove("sa-gamepad-hide-cursor")})),window.ResizeObserver){let e=l,t=p
new ResizeObserver((n=>{for(const o of n)e=o.contentRect.width,t=o.contentRect.height})).observe(g),C=()=>[e,t]}else C=()=>{const e=g.getBoundingClientRect()
return[e.width,e.height]}
let R=0,j=0
const J=e=>{if(t.self.disabled||!s())return
const[n,o]=C()
a.postIOData("mouse",{...e,canvasWidth:n,canvasHeight:o,x:(R+l/2)*(n/l),y:o/p*(p/2-j)})},N=(e,n)=>{!t.self.disabled&&s()&&a.postIOData("keyboard",{key:e,isDown:n})}
for(i.virtualCursor.maxX=m._xRight,i.virtualCursor.minX=m._xLeft,i.virtualCursor.maxY=m._yTop,i.virtualCursor.minY=m._yBottom,i.addEventListener("keydown",(e=>N(e.detail,1))),i.addEventListener("keyup",(e=>N(e.detail,0))),i.addEventListener("mousedown",(()=>{T(1),J({isDown:1})})),i.addEventListener("mouseup",(()=>{T(0),J({isDown:0})})),i.addEventListener("mousemove",(e=>{var t,n
R=e.detail.x,j=e.detail.y,t=R,n=j,D(1),A.style.transform=`translate(${l/2+t-3}px, ${p/2-n-3}px)`,J({})}));;){const e=await t.tab.waitForElement('[class^="stage-header_stage-size-row"], [class^="stage-header_stage-menu-wrapper"] > [class^="button_outlined-button"]',{markAsSeen:1,reduxEvents:["scratch-gui/mode/SET_PLAYER","scratch-gui/mode/SET_FULL_SCREEN","fontsLoaded/SET_FONTS_LOADED","scratch-gui/locales/SELECT_LOCALE"]})
w.dataset.editorMode=t.tab.editorMode,e.className.includes("stage-size-row")?t.tab.appendToSharedSpace({space:"stageHeader",element:w,order:1}):t.tab.appendToSharedSpace({space:"fullscreenStageHeader",element:w,order:0}),document.querySelector("[class^='monitor-list_monitor-list-scaler']").appendChild(A)}}