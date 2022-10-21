import t from"./DomHelpers.js"
import e from"./XML.js"
import s from"./UndoGroup.js"
export default class o{constructor(e,s,o){this.addon=e,this.msg=s,this.m=o,this.domHelpers=new t(e),this.codeTab=null,this.costTab=null,this.costTabBody=null,this.selVarID=null,this.floatInp=null,this.blockCursor=null,this.canShare=0,this.mouseXY={x:0,y:0}}async init(){for(this.addContextMenus();;){const t=await this.addon.tab.waitForElement("ul[class*=gui_tab-list_]",{markAsSeen:1,reduxEvents:["scratch-gui/mode/SET_PLAYER","fontsLoaded/SET_FONTS_LOADED","scratch-gui/locales/SELECT_LOCALE"],reduxCondition(t){return!t.scratchGui.mode.isPlayerOnly}})
this.initInner(t)}}async addContextMenus(){const t=await this.addon.tab.traps.getBlockly(),e=t.WorkspaceSvg.prototype.cleanUp,s=this
t.WorkspaceSvg.prototype.cleanUp=function(){s.addon.settings.get("enableCleanUpPlus")?s.doCleanUp():e.call(this)}
let o=t.Msg.CLEAN_UP
this.addon.settings.get("enableCleanUpPlus")&&(t.Msg.CLEAN_UP=this.m("clean-plus")),this.addon.settings.addEventListener("change",(()=>{t.Msg.CLEAN_UP=this.addon.settings.get("enableCleanUpPlus")?this.m("clean-plus"):o})),this.addon.tab.createBlockContextMenu((e=>(e.push({enabled:t.clipboardXml_,text:this.m("paste"),separator:1,_isDevtoolsFirstItem:1,callback:()=>{let t=this.getTopBlockIDs()
document.dispatchEvent(new KeyboardEvent("keydown",{keyCode:86,ctrlKey:1,griff:1})),setTimeout((()=>{this.beginDragOfNewBlocksNotInIDs(t)}),10)}}),e)),{workspace:1}),this.addon.tab.createBlockContextMenu(((t,e)=>(t.push({enabled:1,text:this.m("make-space"),_isDevtoolsFirstItem:1,callback:()=>{this.doCleanUp(e)},separator:1},{enabled:1,text:this.m("copy-all"),callback:()=>{this.eventCopyClick(e)},separator:1},{enabled:1,text:this.m("copy-block"),callback:()=>{this.eventCopyClick(e,1)}},{enabled:1,text:this.m("cut-block"),callback:()=>{this.eventCopyClick(e,2)}}),t)),{blocks:1}),this.addon.tab.createBlockContextMenu(((t,e)=>("data"!==e.getCategory()&&"data-lists"!==e.getCategory()||(this.selVarID=e.getVars()[0],t.push({enabled:1,text:this.m("swap",{var:"data"===e.getCategory()?this.m("variables"):this.m("lists")}),callback:()=>{let t=this.getWorkspace().getVariableById(this.selVarID),e=window.prompt(this.msg("replace",{name:t.name}))
e&&this.doReplaceVariable(this.selVarID,e,t.type)},separator:1})),t)),{blocks:1,flyout:1})}getWorkspace(){return Blockly.getMainWorkspace()}isScriptEditor(){return this.codeTab.className.indexOf("gui_is-selected")>=0}isCostumeEditor(){return this.costTab.className.indexOf("gui_is-selected")>=0}hideFloatDropDown(){clearTimeout(n),n=setTimeout((()=>this.reallyHideFloatDropDown()),50)}reallyHideFloatDropDown(t){if(!t&&this.floatInp===document.activeElement)return void this.hideFloatDropDown()
let e=document.getElementById("s3devFloatingBar")
e&&e.remove(),this.floatInp=null,n=0}dom_removeChildren(t){for(;t.firstChild;)t.removeChild(t.firstChild)}getTopBlocks(){let t=this.getOrderedTopBlockColumns().cols,e=[]
for(const s of t)e=e.concat(s.blocks)
return e}doCleanUp(t){let e=this.getWorkspace(),o=t&&t.getRootBlock()
s.startUndoGroup(e)
let i=this.getOrderedTopBlockColumns(1),l=i.cols,n=i.orphans.blocks.length
if(n>0&&!t){let t=this.msg("orphaned",{count:n})
if(confirm(t))for(const t of i.orphans.blocks)t.dispose()
else l.unshift(i.orphans)}let r=48,c=i.maxWidths
for(const t of l){let e=64,s=0
for(const i of t.blocks){let t=i===o?380:0,l=i===o?480:72,n=i.getRelativeToSurfaceXY()
r-n.x==0&&e-n.y==0||i.moveBy(r-n.x,e-n.y)
let a=i.getHeightWidth()
e+=a.height+l,s=Math.max(s,Math.max(a.width+t,c[i.id]||0))}r+=s+96}let a=e.getTopComments()
for(const t of a)t.setVisible&&(t.setVisible(0),t.needsAutoPositioning_=1,t.setVisible(1))
setTimeout((()=>{let t=this.getWorkspace(),e=t.getVariableMap(),o=e.getVariablesOfType(""),i=[]
for(const t of o)if(t.isLocal){let s=e.getVariableUsesById(t.getId())
s&&0!==s.length||i.push(t)}if(i.length>0){let e=this.msg("unused-var",{count:i.length})
for(let t=0;i.length>t;t++)t>0&&(e+=", "),e+=i[t].name
if(confirm(e))for(const e of i)t.deleteVariableById(e.getId())}let l=e.getVariablesOfType("list"),n=[]
for(const t of l)if(t.isLocal){let s=e.getVariableUsesById(t.getId())
s&&0!==s.length||n.push(t)}if(n.length>0){let e=this.msg("unused-list",{count:n.length})
for(let t=0;n.length>t;t++)t>0&&(e+=", "),e+=n[t].name
if(confirm(e))for(const e of n)t.deleteVariableById(e.getId())}s.endUndoGroup(t)}),100)}isBlockAnOrphan(t){return!!t.outputConnection}getOrderedTopBlockColumns(t){let e=this.getWorkspace(),s=e.getTopBlocks(),o={}
if(t){let t=e.getTopComments()
for(const e of t)if(e.setVisible){e.setVisible(0),e.needsAutoPositioning_=1,e.setVisible(1)
let t=e.getBoundingRectangle().bottomRight.x,s=e.block_.getRootBlock(),i=s.getBoundingRectangle().topLeft.x
o[s.id]=Math.max(t-i,o[s.id]||0)}}let l=[],n={x:-999999,count:0,blocks:[]}
for(const e of s){let s=e.getRelativeToSurfaceXY(),o=null,r=256
if(t&&this.isBlockAnOrphan(e))n.blocks.push(e)
else{for(const t of l){let e=Math.abs(s.x-t.x)
r>e&&(r=e,o=t)}o?(o.x=(o.x*o.count+s.x)/++o.count,o.blocks.push(e)):l.push(new i(s.x,1,[e]))}}l.sort(((t,e)=>t.x-e.x))
for(const t of l)t.blocks.sort(((t,e)=>t.getRelativeToSurfaceXY().y-e.getRelativeToSurfaceXY().y))
return{cols:l,orphans:n,maxWidths:o}}getVariableUsesById(t){let e=[],s=this.getTopBlocks(1)
for(const o of s){let s=o.getDescendants()
for(const o of s){let s=o.getVarModels()
if(s)for(const i of s)i.getId()===t&&e.push(o)}}return e}doReplaceVariable(t,e,o){let i=this.getWorkspace(),l=i.getVariable(e,o)
if(!l)return void alert(this.msg("var-not-exist"))
let n=l.getId()
s.startUndoGroup(i)
let r=this.getVariableUsesById(t)
for(const t of r)try{""===o?t.getField("VARIABLE").setValue(n):t.getField("LIST").setValue(n)}catch(t){}s.endUndoGroup(i)}getTopBlockIDs(){let t=this.getWorkspace().getTopBlocks(),e=new Set
for(const s of t)e.add(s.id)
return e}beginDragOfNewBlocksNotInIDs(t){if(!this.addon.settings.get("enablePasteBlocksAtMouse"))return
let e=this.getWorkspace().getTopBlocks()
for(const s of e)t.has(s.id)||this.domHelpers.triggerDragAndDrop(s.svgPath_,null,{x:this.mouseXY.x,y:this.mouseXY.y})}updateMousePosition(t){this.mouseXY.x=t.clientX,this.mouseXY.y=t.clientY}eventMouseMove(t){this.updateMousePosition(t)}eventKeyDown(t){const e=t=>{let e=this.costTabBody.querySelector("div[class*='sprite-selector-item_is-selected']"),s=t?e.parentNode.previousSibling:e.parentNode.nextSibling
if(s){let t=s.closest("div[class*=gui_flex-wrapper]")
s.querySelector("div[class^='sprite-selector-item_sprite-name']").click(),s.scrollIntoView({behavior:"auto",block:"center",inline:"start"}),t.scrollTop=0}}
if(0>=document.URL.indexOf("editor"))return
let s=t.ctrlKey||t.metaKey
if(" "===t.key&&s)return this.middleClickWorkspace(t),t.cancelBubble=1,t.preventDefault(),1
if(37===t.keyCode&&s){if("INPUT"===document.activeElement.tagName)return
if(this.isCostumeEditor())return e(1),t.cancelBubble=1,t.preventDefault(),1}if(39===t.keyCode&&s){if("INPUT"===document.activeElement.tagName)return
if(this.isCostumeEditor())return e(0),t.cancelBubble=1,t.preventDefault(),1}if(86===t.keyCode&&s&&!t.griff){let t=this.getTopBlockIDs()
setTimeout((()=>{this.beginDragOfNewBlocksNotInIDs(t)}),10)}}eventCopyClick(t,e){let o=this.getWorkspace()
if(t){t.select()
let i=e?t.getNextBlock():null
i&&i.unplug(0),document.dispatchEvent(new KeyboardEvent("keydown",{keyCode:67,ctrlKey:1})),(i||2===e)&&setTimeout((()=>{i&&o.undo(),2===e&&(s.startUndoGroup(o),t.dispose(1),s.endUndoGroup(o))}),0)}}eventMouseDown(t){if(this.updateMousePosition(t),this.floatInp&&!t.target.closest("#s3devIDDOut")&&(t.shiftKey&&(document.getElementsByClassName("injectionDiv")[0].contains(t.target)||t.target.classList.contains("blocklyHtmlInput"))&&!t.target.matches(".blocklyFlyoutButton, .blocklyFlyoutButton *, .blocklyTouchTargetBackground")||this.hideFloatDropDown()),1===t.button||t.shiftKey)try{this.middleClick(t)}catch(t){console.error(t)}}eventMouseUp(t){this.updateMousePosition(t),1===t.button&&t.target.closest("svg.blocklySvg")&&t.preventDefault()}middleClickWorkspace(t){if(!this.isScriptEditor())return
t.cancelBubble=1,t.preventDefault()
let e=document.getElementById("s3devFloatingBar")
e&&e.remove(),document.body.insertAdjacentHTML("beforeend",`\n            <div id="s3devFloatingBar" dir="${this.addon.tab.direction}">\n                <label class='title s3devLabel' id=s3devInsertLabel>\n                    <span style="display:none;">${this.m("insert")} </span>\n                    <span id=s3devInsert class="s3devWrap">\n                        <div id='s3devIDDOut' class="s3devDDOut">\n                            <input id='s3devIInp' class="${this.addon.tab.scratchClass("input_input-form",{others:"s3devInp"})}" type='search' placeholder='${this.m("start-typing")}' autocomplete='off'>\n                            <ul id='s3devIDD' class="s3devDD"></ul>\n                        </div>\n                    </span>\n                </label>\n            </div>\n        `),e=document.getElementById("s3devFloatingBar"),e.style.left=this.mouseXY.x+16+"px",e.style.top=this.mouseXY.y-8+"px",this.floatInp=document.getElementById("s3devIInp"),this.floatInp.focus(),this.buildFloatingFilterList(t,e),document.getElementById("s3devIDDOut").addEventListener("mousedown",((...t)=>this.dropDownFloatClick(...t))),this.floatInp.addEventListener("keyup",((...t)=>this.floatInputChange(...t))),this.floatInp.addEventListener("focus",((...t)=>this.floatInputChange(...t))),this.floatInp.addEventListener("keydown",((...t)=>this.floatInputKeyDown(...t)))}middleClick(t){t.target.closest("[data-id]")||t.target.closest("svg.blocklySvg")&&(this.blockCursor=null,this.middleClickWorkspace(t))}getEdgeTypeClass(t){switch(t.edgeShape_){case 1:return"boolean"
case 2:return"reporter"
default:return t.startHat_?"hat":"block"}}buildFloatingFilterList(t,e){let s=[],o=this.getWorkspace().getToolbox(),i=o.flyout_.getWorkspace().getTopBlocks(),n=Blockly.Xml.workspaceToDom(o.flyout_.getWorkspace())
const r={}
for(const t of n.children)"BLOCK"===t.tagName&&(r[t.getAttribute("id")]=t)
for(const t of i)this.getBlockText(t,s,r)
s.sort(((t,e)=>e.desc.length>t.desc.length?-1:t.desc.length>e.desc.length?1:t.desc.localeCompare(e.desc)))
const c=document.getElementById("s3devIDD")
let a=0
for(const t of s){const e=document.createElement("li"),s=t.desc
let o=this.getEdgeTypeClass(t.block)
a++,e.innerText=s,e.data={text:s,lower:" "+s.toLowerCase(),option:t}
let i=t.block.isScratchExtension?"pen":t.block.getCategory()
null===i&&(i="more"),e.className="var sa-block-color sa-block-color-"+({"data-lists":"data_lists",events:"event"}[i]||i)+" "+o,a>l&&(e.style.display="none"),c.appendChild(e)}document.getElementById("s3devIDDOut").classList.add("vis")}getBlockText(t,e,s){let o,i,l,n=s[t.id]
const r=t=>{for(const e of t.inputList){let t=e.fieldRow
for(const e of t){let t
i||"blocklyText blocklyDropdownText"!==e.className_?t=e.getText():(i=e.getOptions(),l=e.name,t=i&&i.length>0?"^^":e.getText()),o=(o?o+" ":"")+t}if(e.connection){let t=e.connection.targetBlock()
t&&r(t)}}}
if(r(t),i)for(const s of i){let i=s[1]
"string"==typeof i&&"DELETE_VARIABLE_ID"!==i&&"RENAME_VARIABLE_ID"!==i&&"NEW_BROADCAST_MESSAGE_ID"!==i&&"NEW_BROADCAST_MESSAGE_ID"!==i&&"createGlobalVariable"!==i&&"createLocalVariable"!==i&&"createGlobalList"!==i&&"createLocalList"!==i&&"createBroadcast"!==i&&e.push({desc:o.replace("^^",s[0]),block:t,dom:n,option:s,pickField:l})}else e.push({desc:o,block:t,dom:n})
return o}floatInputKeyDown(t){if(38===t.keyCode)return this.navigateFloatFilter(-1),void t.preventDefault()
if(40===t.keyCode)return this.navigateFloatFilter(1),void t.preventDefault()
if(13===t.keyCode)return document.getElementById("s3devIDD").querySelector(".sel")&&this.dropDownFloatClick(t),t.cancelBubble=1,void t.preventDefault()
if(27===t.keyCode){let e=document.getElementById("s3devIInp")
return e.value.length>0?(e.value="",this.floatInputChange(t)):this.reallyHideFloatDropDown(1),void t.preventDefault()}}navigateFloatFilter(t){let e,s=document.getElementById("s3devIDD"),o=s.getElementsByClassName("sel")
for(o.length>0&&"none"!==o[0].style.display?e=-1===t?o[0].previousSibling:o[o.length-1].nextSibling:(e=s.children[0],t=1);e&&"none"===e.style.display;)e=-1===t?e.previousSibling:e.nextSibling
if(e){for(const t of o)t.classList.remove("sel")
e.classList.add("sel")}}findNextHole(t,e){}dropDownFloatClick(t){t.cancelBubble=1,t.target.closest("input")||t.preventDefault()
let s=this.getWorkspace(),o=t&&t.target
if("B"===o.tagName&&(o=o.parentNode),t instanceof MouseEvent&&"LI"!==o.tagName)return
if(o&&o.data||(o=document.getElementById("s3devIDD").querySelector(".sel")),!o)return
let i=(new e).xmlDoc.firstChild,l=o.data.option
if(l.option){let t=l.dom.querySelector("field[name="+l.pickField+"]")
t.getAttribute("id")?(t.innerText=l.option[0],t.setAttribute("id",l.option[1]+"-"+l.option[0])):t.innerText=l.option[1],"other scripts in sprite"===l.option[1]&&l.dom.querySelector("mutation").setAttribute("hasnext","true")}i.appendChild(l.dom)
let n=Blockly.Xml.domToWorkspace(i,s)
t.shiftKey||this.reallyHideFloatDropDown(1)
let r=s.getBlockById(n[0])
if(this.blockCursor){let t=this.getEdgeTypeClass(l.block)
"boolean"===t?this.findNextHole(this.blockCursor,""):"reporter"===t&&this.findNextHole(this.blockCursor,t)}this.domHelpers.triggerDragAndDrop(r.svgPath_,null,{x:this.mouseXY.x,y:this.mouseXY.y},t.shiftKey),t.shiftKey&&document.getElementById("s3devIInp").focus(),this.blockCursor=r}floatInputChange(t){let e=(document.getElementById("s3devIInp").value||"").toLowerCase()
if(e===r)return
r=e
let s=document.getElementById("s3devIDD"),o=s.parentNode
s.remove()
let i=0,n=e.split(" "),c=s.getElementsByTagName("li")
for(const t of c){const e=t.data.text,s=t.data.lower
let o=0,r=[]
for(let t=0;n.length>t;t++){let e=" "+n[t],i=s.indexOf(e,o)
if(-1===i){r=null
break}r.push(i),o=i+e.length}if(l>i&&r){t.style.display="block",this.dom_removeChildren(t)
let s=0
for(let o=0;r.length>o;o++){let i=r[o]
i>s&&(t.appendChild(document.createTextNode(e.substring(s,i))),s=i)
let l=document.createElement("b"),c=n[o].length
l.appendChild(document.createTextNode(e.substr(s,c))),t.appendChild(l),s+=c}e.length>s&&t.appendChild(document.createTextNode(e.substr(s))),0===i?t.classList.add("sel"):t.classList.remove("sel"),i++}else t.style.display="none",t.classList.remove("sel")}o.append(s)}initInner(t){let e=t.childNodes
this.codeTab&&e[0]!==this.codeTab&&this.domHelpers.unbindAllEvents(),this.codeTab=e[0],this.costTab=e[1],this.costTabBody=document.querySelector("div[aria-labelledby="+this.costTab.id+"]"),this.domHelpers.bindOnce(document,"keydown",((...t)=>this.eventKeyDown(...t)),1),this.domHelpers.bindOnce(document,"mousemove",((...t)=>this.eventMouseMove(...t)),1),this.domHelpers.bindOnce(document,"mousedown",((...t)=>this.eventMouseDown(...t)),1),this.domHelpers.bindOnce(document,"mouseup",((...t)=>this.eventMouseUp(...t)),1)}}class i{constructor(t,e,s){this.x=t,this.count=e,this.blocks=s}}const l=25
let n=0,r=""
