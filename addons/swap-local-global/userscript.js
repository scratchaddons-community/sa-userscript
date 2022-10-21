export default async function({addon:t,msg:o}){const e=await t.tab.traps.getBlockly(),n=t.tab.traps.vm,i=t=>t.isStage?e.ScratchMsgs.translate("SENSING_OF_STAGE","Stage"):t.getName(),s=t=>n.editingTarget.lookupVariableById(t),c=()=>n.editingTarget.isStage,a=(t,o)=>{"string"==typeof o&&(o=t.getVariableById(o)),t.variableMap_.deleteVariable(o)}
let l=null
const r=()=>{l&&(l(),l=null)},u=function(t){const o=this.getEventWorkspace_()
t?(l=f(o,this.varId),a(o,this.varId)):(o.createVariable(this.varName,this.varType,this.varId,this.isLocal,this.isCloud),r())},d=function(t){const o=this.getEventWorkspace_()
t?(o.createVariable(this.varName,this.varType,this.varId,this.isLocal,this.isCloud),r()):(l=f(o,this.varId),a(o,this.varId))},p=()=>e.Events.fireNow_(),f=(t,o)=>{const e=n.runtime._monitorState.get(o),i=s(o)
return()=>{p()
const c=s(o)
if(c&&(c.value=i.value),e){e.visible&&n.runtime.monitorBlocks.changeBlock({id:o,element:"checkbox",value:1})
const t=!n.runtime.getTargetForStage().variables[o]
let s=e
if(t){const t=n.editingTarget
s=s.set("targetId",t.id),s=s.set("spriteName",t.getName())}else s=s.set("targetId",null),s=s.set("spriteName",null)
if(c.name!==i.name){const t=n.runtime.monitorBlocks,e=t.getBlock(o)
e&&(s=s.set("params",t._getBlockParams(e)))}n.runtime.requestAddMonitor(s)}c.name!==i.name&&((t,o)=>{const e=t.getVariableById(o)
for(const o of t.getAllBlocks())o.updateVarName(e)})(t,o)}},b=(t,s,l)=>{const r="☁ ",b=t.name,h=t.getId(),m=t.type,g=t.isLocal,v=t.isCloud
if(g===s&&v===l)return
if(l&&s)return void alert(o("cant-convert-cloud"))
const _=n.editingTarget
if(g!==s)if(s){if(c())return void alert(o("cant-convert-stage"))
const t=(t=>n.runtime.targets.filter((t=>t.isOriginal)).filter((o=>Object.values(o.blocks._blocks).find((o=>o.fields.LIST&&o.fields.LIST.id===t||o.fields.VARIABLE&&o.fields.VARIABLE.id===t)))))(h)
if(!t.every((t=>t===_)))return void(t.length>1?alert(o("cant-convert-to-local",{sprites:t.map(i).join(", ")})):alert(o("cant-convert-used-elsewhere",{sprite:i(t[0])})))}else{const t=((t,o)=>n.runtime.targets.filter((e=>e.isOriginal&&e.lookupVariableByNameAndType(t,o,1))))(b,m).filter((t=>t!==_))
if(t.length>0)return void alert(o("cant-convert-conflict",{sprites:t.map(i).join(", ")}))}let S=b
v!==l&&(l?S=r+b:b.startsWith(r)&&(S=b.replace(r,"")))
const O=t.workspace,x=f(O,h)
e.Events.setGroup(1)
try{a(O,t),O.createVariable(S,m,h,s,l)}finally{e.Events.setGroup(0)}p()
const y=O.undoStack_,k=y[y.length-1],A=y[y.length-2]
k instanceof e.Events.VarCreate&&A instanceof e.Events.VarDelete&&(k.run=d,A.run=u),x()},h=e.Variables.renameVariable
e.Variables.renameVariable=function(e,i,s){const a=h.call(this,e,i,((...o)=>{s&&s(...o),!t.self.disabled&&l&&b(i,l.isLocal(),l.isCloud())})),l=(e=>{if(t.self.disabled)return
const i=document.querySelector('[class^="prompt_body_"]')
if(!i)return
const s=i.parentElement.querySelector('[class^="modal_header-item_"]')
s&&(s.textContent=o(""===e.type?"edit-variable-header":"edit-list-header"))
const a=document.createElement("div")
t.tab.displayNoneWhileDisabled(a)
const l=(t,o)=>{const e=document.createElement("label"),n=document.createElement("input")
"checkbox"===o?n.type="checkbox":(n.name="variableScopeOption",n.type="radio",n.value=o),e.appendChild(n)
const i=document.createElement("span")
return i.textContent=t,e.appendChild(i),{outer:e,label:i,input:n}},r=t.tab.scratchClass("prompt_disabled-label"),u=document.createElement("div")
u.className=t.tab.scratchClass("prompt_info-message","prompt_cloud-option",{others:"sa-swap-local-global-stage"}),u.appendChild(Object.assign(document.createElement("span"),{textContent:t.tab.scratchMessage("gui.gui.variablePromptAllSpritesMessage")}))
const d=document.createElement("div")
d.className=t.tab.scratchClass("prompt_options-row","prompt_cloud-option")
const p=l(t.tab.scratchMessage("gui.gui.variableScopeOptionAllSprites"),"global"),f=l(t.tab.scratchMessage("gui.gui.variableScopeOptionSpriteOnly"),"local")
p.input.checked=!e.isLocal,f.input.checked=e.isLocal,d.appendChild(p.outer),d.appendChild(f.outer)
const b=document.createElement("div")
b.className=t.tab.scratchClass("prompt_cloud-option")
const h=l(t.tab.scratchMessage("gui.gui.cloudVariableOption"),"checkbox")
h.input.checked=e.isCloud,n.runtime.canAddCloudVariable()||e.isCloud||(h.input.disabled=1,b.classList.add(r)),b.appendChild(h.outer)
const m=()=>{const t=h.input.checked
f.input.disabled=t,f.label.classList.toggle(r,t),t&&p.input.click()}
h.input.addEventListener("change",m),m()
let g=0
return c()?a.appendChild(u):(g=1,a.appendChild(d)),""===e.type&&(()=>{const o=document.querySelector('[class^="gui_blocks-wrapper_"]')
let e=o[t.tab.traps.getInternalKey(o)]
for(;;){if(!e)return 0
const t=e.stateNode?.props?.canUseCloud
if("boolean"==typeof t)return t
e=e.child}})()&&(g=1,a.appendChild(b)),g&&a.prepend(Object.assign(document.createElement("div"),{textContent:o("edit"),className:"sa-swap-local-global-hint"})),i.insertBefore(a,i.lastChild),{isLocal:()=>f.input.checked,isCloud:()=>h.input.checked}})(i)
return a},t.tab.createBlockContextMenu(((n,i)=>{if(!t.self.disabled&&("data"===i.getCategory()||"data-lists"===i.getCategory())){const t=i.workspace.getVariableById(i.getVars()[0])
t&&(n.length>0&&(n[0].text===e.ScratchMsgs.translate("RENAME_VARIABLE")?n[0].text=o("edit-variable-option"):n[0].text===e.ScratchMsgs.translate("RENAME_LIST")&&(n[0].text=o("edit-list-option"))),n.push({enabled:1,separator:1,text:o("to-"+(t.isLocal?"global":"local")),callback(){return b(t,!t.isLocal,t.isCloud)}}))}return n}),{flyout:1,blocks:1})}