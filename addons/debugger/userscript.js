import{isPaused as e,setPaused as t,onPauseChanged as n,setup as o}from"./module.js"
import a from"./logs.js"
import s from"./threads.js"
import c from"./performance.js"
import r from"../find-bar/blockly/Utils.js"
const l=e=>{for(;e.firstChild;)e.removeChild(e.firstChild)}
export default async function({addon:i,console:d,msg:u}){let g
o(i.tab.traps.vm)
const m=[],b=(...e)=>{g?g.addLog(...e):m.push(e)}
let f=0
const _=(e,n)=>{i.tab.redux.state.scratchGui.mode.isPlayerOnly?f||(b(u("cannot-pause-player"),n,"error"),f=1):(t(1),S(1))}
i.tab.addBlock("sa-pause",{args:[],callback:_,hidden:1}),i.tab.addBlock("​​breakpoint​​",{args:[],displayName:u("block-breakpoint"),callback:_}),i.tab.addBlock("​​log​​ %s",{args:["content"],displayName:u("block-log"),callback({content:e},t){b(e,t,"log")}}),i.tab.addBlock("​​warn​​ %s",{args:["content"],displayName:u("block-warn"),callback({content:e},t){b(e,t,"warn")}}),i.tab.addBlock("​​error​​ %s",{args:["content"],displayName:u("block-error"),callback({content:e},t){b(e,t,"error")}})
const p=i.tab.traps.vm
await new Promise((e=>{if(p.editingTarget)return e()
p.runtime.once("PROJECT_LOADED",e)}))
const h=await i.tab.traps.getBlockly(),k=document.createElement("div")
k.className="sa-debugger-container"
const v=document.createElement("div")
v.className=i.tab.scratchClass("button_outlined-button","stage-header_stage-button")
const w=document.createElement("div")
w.className=i.tab.scratchClass("button_content")
const x=document.createElement("img")
x.className=i.tab.scratchClass("stage-header_stage-button-icon"),x.draggable=0,x.src=i.self.dir+"/icons/debug.svg",w.appendChild(x),v.appendChild(w),k.appendChild(v),v.addEventListener("click",(()=>S(1)))
const O=Object.assign(document.createElement("div"),{className:i.tab.scratchClass("card_card",{others:"sa-debugger-interface"})}),j=Object.assign(document.createElement("div"),{className:i.tab.scratchClass("card_header-buttons")}),E=Object.assign(document.createElement("ul"),{className:"sa-debugger-tabs"}),N=Object.assign(document.createElement("div"),{className:i.tab.scratchClass("card_header-buttons-right",{others:"sa-debugger-header-buttons"})}),T=Object.assign(document.createElement("div"),{className:"sa-debugger-tab-content"})
let y=0
const S=e=>{y=e,O.style.display=y?"flex":"",y?Q.show():Q.hide()}
let I=0,L=0,A=0,C=0
const B=()=>{document.removeEventListener("mouseup",B),document.removeEventListener("mousemove",M)},D=(e,t)=>{A=e,C=t
const n=(document.documentElement.clientWidth||document.body.clientWidth)-1,o=(document.documentElement.clientHeight||document.body.clientHeight)-1,a=Math.max(0,Math.min(e-I,n-O.offsetWidth)),s=Math.max(0,Math.min(t-L,o-O.offsetHeight))
O.style.left=a+"px",O.style.top=s+"px"},M=e=>{e.preventDefault(),D(e.clientX,e.clientY)}
window.addEventListener("resize",(()=>{D(A,C)})),j.addEventListener("mousedown",(e=>{e.preventDefault(),I=e.clientX-O.offsetLeft,L=e.clientY-O.offsetTop,A=e.clientX,C=e.clientY,document.addEventListener("mouseup",B),document.addEventListener("mousemove",M)})),j.append(E,N),O.append(j,T),document.body.append(O)
const P=({text:e,icon:t,description:n})=>{const o=Object.assign(document.createElement("div"),{className:i.tab.scratchClass("card_shrink-expand-button"),draggable:0})
n&&(o.title=n)
const a=Object.assign(document.createElement("img"),{src:t,draggable:0}),s=Object.assign(document.createElement("span"),{textContent:e})
return o.appendChild(a),o.appendChild(s),{element:o,image:a,text:s}},R=P({text:u("unpause"),icon:i.self.dir+"/icons/play.svg"})
R.element.classList.add("sa-debugger-unpause"),R.element.addEventListener("click",(()=>t(0)))
const H=e=>{R.element.style.display=e?"":"none"}
H(e()),n(H)
const U=P({text:u("close"),icon:i.self.dir+"/icons/close.svg"})
U.element.addEventListener("click",(()=>S(0)))
const F=p.runtime._step,z=[]
p.runtime._step=function(...e){const t=F.call(this,...e)
for(const e of z)e()
return t}
const J=(e,t)=>e.blocks.getBlock(t)||p.runtime.flyoutBlocks.getBlock(t),V=e=>e.replace(/%[nbs]/g,"()"),Y={debug:{createHeaderButton:P,createHeaderTab({text:e,icon:t}){const n=document.createElement("li"),o=Object.assign(document.createElement("img"),{src:t,draggable:0}),a=Object.assign(document.createElement("span"),{textContent:e})
return n.appendChild(o),n.appendChild(a),{element:n,image:o,text:a}},setHasUnreadMessage(e){w.classList.toggle("sa-debugger-unread",e)},addAfterStepCallback(e){z.push(e)},getBlock:J,getTargetInfoById(e){const t=p.runtime.getTargetById(e)
if(t){let e=t.getName(),n=t
return t.isOriginal||(e=u("clone-of",{sprite:e}),n=t.sprite.clones[0]),{exists:1,originalId:n.id,name:e}}return{exists:0,original:null,name:u("unknown-sprite")}},createBlockLink(e,t){const n=document.createElement("a")
n.className="sa-debugger-log-link"
const{exists:o,name:a,originalId:s}=e
return n.textContent=a,o?n.addEventListener("mousedown",(()=>{var e;(e=s)!==p.editingTarget.id&&p.runtime.getTargetById(e)&&p.setEditingTarget(e),(()=>{const e=i.tab.redux
0!==e.state.scratchGui.editorTab.activeTabIndex&&e.dispatch({type:"scratch-gui/navigation/ACTIVATE_TAB",activeTabIndex:0})})(),(e=>{const t=Blockly.getMainWorkspace().getBlockById(e)
t&&(t.workspace.isFlyout||new r(i).scrollBlockIntoView(e))})(t)})):n.classList.add("sa-debugger-log-link-unknown"),n},createBlockPreview(e,t){const n=p.runtime.getTargetById(e)
if(!n)return null
const o=J(n,t)
if(!o||"text"===o.opcode)return null
let a,s,c
if("data_variable"===o.opcode||"data_listcontents"===o.opcode||"argument_reporter_string_number"===o.opcode||"argument_reporter_boolean"===o.opcode)a=Object.values(o.fields)[0].value,s="data_variable"===o.opcode?"data":"data_listcontents"===o.opcode?"list":"more",c="round"
else if("procedures_call"===o.opcode){const e=o.mutation.proccode
a=V(e),s=i.tab.getCustomBlock(e)?"addon-custom-block":"more"}else if("procedures_definition"===o.opcode){const e=J(n,o.inputs.custom_block.block).mutation.proccode
a=h.ScratchMsgs.translate("PROCEDURES_DEFINITION","define %1").replace("%1",V(e)),s="more"}else{var r
const e={jsonInit(e){r=e}},t=h.Blocks[o.opcode]
if(t)try{t.init.call(e)}catch(e){}if(!r)return null
if(a=(e=>{const t=t=>{const n=e[`message${t}`],o=e[`args${t}`]
if(!n)return null
const a=n.split(/%\d+/g)
let s=""
for(let e=0;a.length>e;e++){s+=a[e]
const t=o&&o[e]
if(t){const e=t.type
if("field_vertical_separator"===e);else if("field_image"===e){const e=t.src
e.endsWith("rotate-left.svg")?s+="↩":e.endsWith("rotate-right.svg")&&(s+="↪")}else s+="()"}}return s},n=[]
let o=0
for(;;){const e=t(o)
if(!e)break
n.push(e),o++}return n.join(" ")})(r),!a)return null
s=r.extensions.includes("scratch_extension")?"pen":r.category,c=r.extensions&&(r.extensions.includes("shape_statement")||r.extensions.includes("shape_hat")||r.extensions.includes("shape_end"))||"previousStatement"in r||"nextStatement"in r?"stacked":"round"}if(!a||!s)return null
const l=document.createElement("span")
return l.className="sa-debugger-block-preview sa-block-color",l.textContent=a,l.dataset.shape=c,l.classList.add(`sa-block-color-${{"addon-custom-block":"sa","data-lists":"data_lists",list:"data_lists",events:"event"}[s]||s}`),l}},addon:i,msg:u,console:d}
g=await a(Y)
const q=await s(Y),G=await c(Y),K=[g,q,G]
for(const e of m)g.addLog(...e)
let Q
m.length=0
const W=e=>{if(e===Q)return
const t="sa-debugger-tab-selected"
Q&&(Q.hide(),Q.tab.element.classList.remove(t)),e.tab.element.classList.add(t),Q=e,l(T),T.appendChild(e.content),l(N),N.appendChild(R.element)
for(const t of e.buttons)N.appendChild(t.element)
N.appendChild(U.element),y&&Q.show()}
for(const e of K)e.tab.element.addEventListener("click",(()=>{W(e)})),E.appendChild(e.tab.element)
W(K[0]),i.tab.redux.state&&"small"===i.tab.redux.state.scratchGui.stageSize.stageSize&&document.body.classList.add("sa-debugger-small"),document.addEventListener("click",(e=>{e.target.closest("[class*='stage-header_stage-button-first']:not(.sa-hide-stage-button)")?document.body.classList.add("sa-debugger-small"):(e.target.closest("[class*='stage-header_stage-button-last']")||e.target.closest(".sa-hide-stage-button"))&&document.body.classList.remove("sa-debugger-small")}),{capture:1})
const X=p.runtime.greenFlag
p.runtime.greenFlag=function(...e){return i.settings.get("log_clear_greenflag")&&g.clearLogs(),i.settings.get("log_greenflag")&&g.addLog(u("log-msg-flag-clicked"),null,"internal"),X.call(this,...e)}
const Z=p.runtime.targets[0].constructor.prototype.makeClone
p.runtime.targets[0].constructor.prototype.makeClone=function(...e){i.settings.get("log_failed_clone_creation")&&!p.runtime.clonesAvailable()&&g.addLog(u("log-msg-clone-cap",{sprite:this.getName()}),p.runtime.sequencer.activeThread,"internal-warn")
var t=Z.call(this,...e)
return i.settings.get("log_clone_create")&&t&&g.addLog(u("log-msg-clone-created",{sprite:this.getName()}),p.runtime.sequencer.activeThread,"internal"),t}
const ee=p.runtime.startHats
p.runtime.startHats=function(e,t,...n){return i.settings.get("log_broadcasts")&&"event_whenbroadcastreceived"===e&&g.addLog(u("log-msg-broadcasted",{broadcast:t.BROADCAST_OPTION}),p.runtime.sequencer.activeThread,"internal"),ee.call(this,e,t,...n)}
const te=p.runtime._primitives.data_addtolist
p.runtime._primitives.data_addtolist=function(e,t){if(i.settings.get("log_max_list_length")){const n=t.target.lookupOrCreateList(e.LIST.id,e.LIST.name)
2e5>n.value.length||g.addLog(u("log-msg-list-append-too-long",{list:n.name}),t.thread,"internal-warn")}te.call(this,e,t)}
const ne=p.runtime._primitives.data_insertatlist
p.runtime._primitives.data_insertatlist=function(e,t){if(i.settings.get("log_max_list_length")){const n=t.target.lookupOrCreateList(e.LIST.id,e.LIST.name)
2e5>n.value.length||g.addLog(u("log-msg-list-insert-too-long",{list:n.name}),t.thread,"internal-warn")}ne.call(this,e,t)}
const oe=p.runtime._primitives.data_setvariableto
for(p.runtime._primitives.data_setvariableto=function(e,t){if(i.settings.get("log_invalid_cloud_data")){const n=t.target.lookupOrCreateVariable(e.VARIABLE.id,e.VARIABLE.name)
if(n.isCloud){const o=e.VALUE.toString()
isNaN(o)?g.addLog(u("log-cloud-data-nan",{var:n.name}),t.thread,"internal-warn"):o.length>256&&g.addLog(u("log-cloud-data-too-long",{var:n.name}),t.thread,"internal-warn")}}oe.call(this,e,t)};;)await i.tab.waitForElement('[class*="stage-header_stage-size-row"]',{markAsSeen:1,reduxEvents:["scratch-gui/mode/SET_PLAYER","scratch-gui/mode/SET_FULL_SCREEN","fontsLoaded/SET_FONTS_LOADED","scratch-gui/locales/SELECT_LOCALE"]}),"editor"===i.tab.editorMode?i.tab.appendToSharedSpace({space:"stageHeader",element:k,order:0}):S(0)}