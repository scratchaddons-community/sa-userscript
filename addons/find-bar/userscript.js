import t from"./blockly/BlockItem.js"
import s from"./blockly/BlockInstance.js"
import i from"./blockly/Utils.js"
export default async function({addon:e,msg:n,console:o}){if(!e.self._isDevtoolsExtension&&window.initGUI)return o.log("Extension running, stopping addon"),window._devtoolsAddonEnabled=1,void window.dispatchEvent(new CustomEvent("scratchAddonsDevtoolsAddonStopped"))
const Blockly=await e.tab.traps.getBlockly()
class h{constructor(t){this.utils=t,this.el=null,this.items=[],this.selected=null,this.carousel=new r(this.utils)}get workspace(){return Blockly.getMainWorkspace()}createDom(){return this.el=document.createElement("ul"),this.el.className="sa-find-dropdown",this.el}inputKeyDown(t){return 38===t.keyCode?(this.navigateFilter(-1),void t.preventDefault()):40===t.keyCode?(this.navigateFilter(1),void t.preventDefault()):13===t.keyCode?(this.selected&&this.navigateFilter(1),void t.preventDefault()):void this.carousel.inputKeyDown(t)}navigateFilter(t){let s
for(this.selected&&"none"!==this.selected.style.display?s=-1===t?this.selected.previousSibling:this.selected.nextSibling:(s=this.items[0],t=1);s&&"none"===s.style.display;)s=-1===t?s.previousSibling:s.nextSibling
s&&this.onItemClick(s)}addItem(t){const s=document.createElement("li")
return s.innerText=t.procCode,s.data=t,s.className="flag"===t.cls?"sa-find-flag":`sa-block-color sa-block-color-${{receive:"event",event:"event",define:"more",var:"data",VAR:"data",list:"data_lists",LIST:"data_lists",costume:"looks",sound:"sounds"}[t.cls]}`,s.addEventListener("mousedown",(t=>(this.onItemClick(s),t.preventDefault(),t.cancelBubble=1,0))),this.items.push(s),this.el.appendChild(s),s}onItemClick(t,s){this.selected&&this.selected!==t&&(this.selected.classList.remove("sel"),this.selected=null),this.selected!==t&&(t.classList.add("sel"),this.selected=t)
let i=t.data.cls
if("costume"===i||"sound"===i){const s=document.querySelector("[class^=asset-panel_wrapper]")
s&&(s[e.tab.traps.getInternalKey(s)].pendingProps.children[0].props.onItemClick(t.data.y),s.firstChild.firstChild.children[t.data.y].scrollIntoView({behavior:"auto",block:"center",inline:"start"}),s.closest("div[class*=gui_flex-wrapper]").scrollTop=0)}else if("var"===i||"VAR"===i||"list"===i||"LIST"===i){let i=this.getVariableUsesById(t.data.labelID)
this.carousel.build(t,i,s)}else if("define"===i){let i=this.getCallsToProcedureById(t.data.labelID)
this.carousel.build(t,i,s)}else if("receive"===i){let i=this.getCallsToEventsByName(t.data.eventName)
if(!s){const t=this.utils.getEditingTarget().id
for(const e of i)if(e.targetId===t){s=e
break}}this.carousel.build(t,i,s)}else if(t.data.clones){let i=[this.workspace.getBlockById(t.data.labelID)]
for(const s of t.data.clones)i.push(this.workspace.getBlockById(s))
this.carousel.build(t,i,s)}else this.utils.scrollBlockIntoView(t.data.labelID),this.carousel.remove()}getVariableUsesById(t){let s=[],i=this.workspace.getTopBlocks()
for(const e of i){let i=e.getDescendants()
for(const e of i){let i=e.getVarModels()
if(i)for(const n of i)n.getId()===t&&s.push(e)}}return s}getCallsToProcedureById(t){let s=this.workspace.getBlockById(t),i=s.getChildren()[0].getProcCode(),e=[s],n=this.workspace.getTopBlocks()
for(const t of n){let s=t.getDescendants()
for(const t of s)"procedures_call"===t.type&&t.getProcCode()===i&&e.push(t)}return e}getCallsToEventsByName(t){let i=[]
const n=e.tab.traps.vm.runtime.targets
for(const e of n){if(!e.isOriginal)continue
const n=e.blocks
if(n._blocks)for(const o of Object.keys(n._blocks)){const h=n._blocks[o]
if("event_broadcast_menu"===h.opcode&&h.fields.BROADCAST_OPTION.value===t){const t=n.getBlock(h.parent)
i.push(new s(e,t))}else"event_whenbroadcastreceived"===h.opcode&&h.fields.BROADCAST_OPTION.value===t&&i.push(new s(e,h))}}return i}empty(){for(const t of this.items)this.el.contains(t)&&this.el.removeChild(t)
this.items=[],this.selected=null}}class r{constructor(t){this.utils=t,this.el=null,this.count=null,this.blocks=[],this.idx=0}build(t,s,i){if(this.el&&this.el.parentNode===t)this.navRight()
else{if(this.remove(),this.blocks=s,t.appendChild(this.createDom()),this.idx=0,i)for(const t of Object.keys(this.blocks))if(this.blocks[t].id===i.id){this.idx=Number(t)
break}this.blocks.length>this.idx&&this.utils.scrollBlockIntoView(this.blocks[this.idx])}}createDom(){this.el=document.createElement("span"),this.el.className="sa-find-carousel"
const t=this.el.appendChild(document.createElement("span"))
t.className="sa-find-carousel-control",t.textContent="◀",t.addEventListener("mousedown",(t=>this.navLeft(t))),this.count=this.el.appendChild(document.createElement("span")),this.count.innerText=this.blocks.length>0?this.idx+1+" / "+this.blocks.length:"0"
const s=this.el.appendChild(document.createElement("span"))
return s.className="sa-find-carousel-control",s.textContent="▶",s.addEventListener("mousedown",(t=>this.navRight(t))),this.el}inputKeyDown(t){37===t.keyCode&&this.el&&this.blocks&&this.navLeft(t),39===t.keyCode&&this.el&&this.blocks&&this.navRight(t)}navLeft(t){return this.navSideways(t,-1)}navRight(t){return this.navSideways(t,1)}navSideways(t,s){this.blocks.length>0&&(this.idx=(this.idx+s+this.blocks.length)%this.blocks.length,this.count.innerText=this.idx+1+" / "+this.blocks.length,this.utils.scrollBlockIntoView(this.blocks[this.idx])),t&&(t.cancelBubble=1,t.preventDefault())}remove(){this.el&&(this.el.remove(),this.blocks=[],this.idx=0)}}const l=new class{constructor(){this.utils=new i(e),this.prevValue="",this.findLabel=null,this.findWrapper=null,this.findInput=null,this.dropdownOut=null,this.dropdown=new h(this.utils)}get workspace(){return Blockly.getMainWorkspace()}createDom(t){const s=t.appendChild(document.createElement("div"))
s.className="sa-find-bar",e.tab.displayNoneWhileDisabled(s,{display:"flex"}),this.findLabel=s.appendChild(document.createElement("label")),this.findLabel.htmlFor="sa-find-input",this.findLabel.textContent=n("find"),this.findWrapper=s.appendChild(document.createElement("span")),this.findWrapper.className="sa-find-wrapper",this.dropdownOut=this.findWrapper.appendChild(document.createElement("label")),this.dropdownOut.className="sa-find-dropdown-out",this.findInput=this.dropdownOut.appendChild(document.createElement("input")),this.findInput.className=e.tab.scratchClass("input_input-form",{others:"sa-find-input"}),this.findInput.type="search",this.findInput.placeholder=n("find-placeholder"),this.findInput.autocomplete="off",this.dropdownOut.appendChild(this.dropdown.createDom()),this.bindEvents()}bindEvents(){this.findInput.addEventListener("focus",(()=>this.inputChange())),this.findInput.addEventListener("keydown",(t=>this.inputKeyDown(t))),this.findInput.addEventListener("keyup",(()=>this.inputChange())),this.findInput.addEventListener("focusout",(()=>this.hideDropDown())),document.addEventListener("keydown",(t=>this.eventKeyDown(t)),1)}inputChange(){this.showDropDown()
let t=(this.findInput.value||"").toLowerCase()
if(t===this.prevValue)return
this.prevValue=t,this.dropdown.blocks=null
let s=this.dropdown.items
for(const i of s){let s=i.data.procCode,e=i.data.lower.indexOf(t)
if(0>e)i.style.display="none"
else{for(i.style.display="block";i.firstChild;)i.removeChild(i.firstChild)
e>0&&i.appendChild(document.createTextNode(s.substring(0,e)))
let n=document.createElement("b")
n.appendChild(document.createTextNode(s.substr(e,t.length))),i.appendChild(n),s.length>e+t.length&&i.appendChild(document.createTextNode(s.substr(e+t.length)))}}}inputKeyDown(t){if(this.dropdown.inputKeyDown(t),13!==t.keyCode)return 27===t.keyCode?(this.findInput.value.length>0?(this.findInput.value="",this.inputChange()):this.findInput.blur(),void t.preventDefault()):void 0
this.findInput.blur()}eventKeyDown(t){if(e.self.disabled)return
let s=t.ctrlKey||t.metaKey
if("f"===t.key&&s&&!t.shiftKey)return this.findInput.focus(),this.findInput.select(),t.cancelBubble=1,t.preventDefault(),1
if(37===t.keyCode&&s){if("INPUT"===document.activeElement.tagName)return
if(0===this.selectedTab)return this.utils.navigationHistory.goBack(),t.cancelBubble=1,t.preventDefault(),1}if(39===t.keyCode&&s){if("INPUT"===document.activeElement.tagName)return
if(0===this.selectedTab)return this.utils.navigationHistory.goForward(),t.cancelBubble=1,t.preventDefault(),1}}showDropDown(t,s){if(!t&&this.dropdownOut.classList.contains("visible"))return
this.prevValue=t?"":null,this.dropdownOut.classList.add("visible")
let i=0===this.selectedTab?this.getScratchBlocks():1===this.selectedTab?this.getScratchCostumes():2===this.selectedTab?this.getScratchSounds():[]
this.dropdown.empty()
for(const e of i){let i=this.dropdown.addItem(e)
t&&(e.matchesID(t)?this.dropdown.onItemClick(i,s):i.style.display="none")}this.utils.offsetX=this.dropdownOut.getBoundingClientRect().right-this.findLabel.getBoundingClientRect().left+26,this.utils.offsetY=32}hideDropDown(){this.dropdownOut.classList.remove("visible")}get selectedTab(){return e.tab.redux.state.scratchGui.editorTab.activeTabIndex}getScratchBlocks(){function s(s,i,o){let h=o.id?o.id:o.getId?o.getId():null,r=n[i]
if(r)return r.clones||(r.clones=[]),r.clones.push(h),r
let l=new t(s,i,h,0)
return l.y=o.getRelativeToSurfaceXY?o.getRelativeToSurfaceXY().y:null,e.push(l),n[i]=l,l}function i(t){let s,i=t.inputList[0]
for(const t of i.fieldRow)s=(s?s+" ":"")+t.getText()
return s}let e=[],n={},o=this.workspace.getTopBlocks()
for(const t of o)if("procedures_definition"!==t.type)if("event_whenflagclicked"!==t.type)if("event_whenbroadcastreceived"!==t.type)"event_when"!==t.type.substr(0,10)&&"control_start_as_clone"!==t.type||s("event",i(t),t)
else{let i=t.inputList[0].fieldRow.find((t=>"BROADCAST_OPTION"===t.name)).getText()
s("receive","event "+i,t).eventName=i}else s("flag",i(t),t)
else{const i=t.getChildren()[0].getProcCode()
if(!i)continue
const e=t.inputList.findIndex((t=>t.fieldRow.length>0))
if(-1===e)continue
const n=t.inputList[e].fieldRow[0].getText()
s("define",0===e?`${n} ${i}`:`${i} ${n}`,t)}let h=this.workspace.getVariableMap(),r=h.getVariablesOfType("")
for(const t of r)s(t.isLocal?"var":"VAR",(t.isLocal?"var ":"VAR ")+t.name,t)
let l=h.getVariablesOfType("list")
for(const t of l)s(t.isLocal?"list":"LIST",(t.isLocal?"list ":"LIST ")+t.name,t)
const c=this.getCallsToEvents()
for(const t of c)s("receive","event "+t.eventName,t.block).eventName=t.eventName
const a={flag:0,receive:1,event:2,define:3,var:4,VAR:5,list:6,LIST:7}
return e.sort(((t,s)=>{let i=a[t.cls]-a[s.cls]
return 0!==i?i:s.lower>t.lower?-1:t.lower>s.lower?1:t.y-s.y})),e}getScratchCostumes(){let s=this.utils.getEditingTarget().getCostumes(),i=[],e=0
for(const n of s){let s=new t("costume",n.name,n.assetId,e)
i.push(s),e++}return i}getScratchSounds(){let s=this.utils.getEditingTarget().getSounds(),i=[],e=0
for(const n of s){let s=new t("sound",n.name,n.assetId,e)
i.push(s),e++}return i}getCallsToEvents(){const t=[],s={}
let i=this.workspace.getTopBlocks()
for(const e of i){let i=e.getDescendants()
for(const e of i)if("event_broadcast"===e.type||"event_broadcastandwait"===e.type){const i=e.getChildren()[0].inputList[0].fieldRow[0].getText()
s[i]||(s[i]=e,t.push({eventName:i,block:e}))}}return t}},c=Blockly.Gesture.prototype.doBlockClick_
for(Blockly.Gesture.prototype.doBlockClick_=function(){if(!e.self.disabled&&(1===this.mostRecentEvent_.button||this.mostRecentEvent_.shiftKey)){let t=this.startBlock_
for(;t;t=t.getSurroundParent()){if("procedures_definition"===t.type||!this.jumpToDef&&"procedures_call"===t.type){let s=t.id?t.id:t.getId?t.getId():null
return l.findInput.focus(),void l.showDropDown(s)}if("data_variable"===t.type||"data_changevariableby"===t.type||"data_setvariableto"===t.type){let s=t.getVars()[0]
return l.findInput.focus(),l.showDropDown(s,t),void(l.selVarID=s)}if("event_whenbroadcastreceived"===t.type||"event_broadcastandwait"===t.type||"event_broadcast"===t.type){let s=t.id
return l.findInput.focus(),l.showDropDown(s,t),void(l.selVarID=s)}}}c.call(this)};;){const t=await e.tab.waitForElement("ul[class*=gui_tab-list_]",{markAsSeen:1,reduxEvents:["scratch-gui/mode/SET_PLAYER","fontsLoaded/SET_FONTS_LOADED","scratch-gui/locales/SELECT_LOCALE"],reduxCondition(t){return!t.scratchGui.mode.isPlayerOnly}})
l.createDom(t)}}