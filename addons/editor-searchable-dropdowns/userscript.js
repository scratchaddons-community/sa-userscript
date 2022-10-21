export default async function({addon:t,msg:e}){function o(t,e){t.dispatchEvent(new MouseEvent("mousedown",{relatedTarget:t,bubbles:1})),e&&t.dispatchEvent(new MouseEvent("mouseup",{relatedTarget:t,bubbles:1}))
const o=t.offsetTop,n=o+t.offsetHeight,r=l.scrollTop,a=l.offsetHeight,c=r+a
r>o?l.scrollTop=o:n>c&&(l.scrollTop=n-a)}function n(){const t=b
b=function(){const t=d.value.toLowerCase().trim(),e=(e,o)=>{const n=h[o]
if(s.includes(n[1]))return t?-1:0
if(i.includes(n[1]))return e.element.lastChild.lastChild.textContent=a(n[1])[0],t?0:-1
const r=e.text.toLowerCase()
return t===r?2:r.startsWith(t)?1:r.includes(t)?0:-1}
return f.map(((t,o)=>({item:t,score:e(t,o)}))).sort((({score:t},{score:e})=>Math.max(0,e)-Math.max(0,t)))}()
let e=t.length!==b.length
if(!e)for(let o=0;b.length>o;o++)if(b[o].item!==t[o].item){e=1
break}if(e&&t.length>0){for(const{item:e}of t)e.element.remove()
for(const{item:t}of b)u.appendChild(t.element)}for(const{item:t,score:e}of b)t.element.hidden=0>e}function r(t){if("Enter"===t.key){t.stopPropagation(),t.preventDefault()
const e=document.querySelector(".goog-menuitem-highlight")
if(e&&!e.hidden)return void o(e,1)
const n=Blockly.selected
if(""===d.value&&n&&("event_broadcast"===n.type||"event_broadcastandwait"===n.type||"event_whenbroadcastreceived"===n.type))return void Blockly.DropDownDiv.hide()
for(const{item:t}of b)if(!t.element.hidden){o(t.element,1)
break}}else if("Escape"===t.key)Blockly.DropDownDiv.hide()
else if("ArrowDown"===t.key||"ArrowUp"===t.key){t.preventDefault(),t.stopPropagation()
const e=b.filter((t=>t.score>=0)).map((t=>t.item))
if(0===e.length)return
let n=-1
for(let t=0;e.length>t;t++)if(e[t].element.classList.contains("goog-menuitem-highlight")){n=t
break}const r=e.length-1
let a=0
a="ArrowDown"===t.key?-1===n||n===r?0:n+1:-1===n||0===n?r:n-1,o(e[a].element,0)}}function a(t){return[e(t,{name:d?.value||""}),t]}const Blockly=await t.tab.traps.getBlockly(),c=t.tab.traps.vm,s=["RENAME_VARIABLE_ID","DELETE_VARIABLE_ID","NEW_BROADCAST_MESSAGE_ID"],i=["createGlobalVariable","createLocalVariable","createGlobalList","createLocalList","createBroadcast"]
let l=null,u=null,d=null,f=[],b=[],h=[],m=[]
const v=Blockly.DropDownDiv.show
Blockly.DropDownDiv.show=function(...e){if(u=document.querySelector(".blocklyDropdownMenu"),!u)return v.call(this,...e)
u.focus=()=>{},d=document.createElement("input"),t.tab.displayNoneWhileDisabled(d,{display:"flex"}),d.type="text",d.addEventListener("input",n),d.addEventListener("keydown",r),d.classList.add("u-dropdown-searchbar"),u.insertBefore(d,u.firstChild),f=Array.from(u.children).filter((t=>"INPUT"!==t.tagName)).map((t=>({element:t,text:t.textContent}))),h=m,n()
const o=v.call(this,...e)
return l=Blockly.DropDownDiv.getContentDiv(),l.style.width=getComputedStyle(l).width,l.style.height=getComputedStyle(l).height,u.insertBefore(d,u.firstChild),d.focus(),o}
const w=Blockly.DropDownDiv.clearContent
Blockly.DropDownDiv.clearContent=function(){w.call(this),f=[],b=[],Blockly.DropDownDiv.content_.style.height=""}
const L=Blockly.FieldDropdown.prototype.getOptions
Blockly.FieldDropdown.prototype.getOptions=function(){const t=L.call(this),e=this.sourceBlock_,o=c.editingTarget&&c.editingTarget.isStage
return e&&("data"===e.category_?(t.push(a("createGlobalVariable")),o||t.push(a("createLocalVariable"))):"data-lists"===e.category_?(t.push(a("createGlobalList")),o||t.push(a("createLocalList"))):"event_broadcast_menu"!==e.type&&"event_whenbroadcastreceived"!==e.type||t.push(a("createBroadcast"))),m=t,t}
const g=Blockly.FieldVariable.prototype.onItemSelected
Blockly.FieldVariable.prototype.onItemSelected=function(t,e){const o=this.sourceBlock_
if(o&&o.workspace&&0!==d.value.length){const t=o.workspace
switch(e.getValue()){case"createGlobalVariable":{Blockly.Events.setGroup(1)
const e=t.createVariable(d.value)
return this.sourceBlock_&&this.setValue(e.getId()),void Blockly.Events.setGroup(0)}case"createLocalVariable":{Blockly.Events.setGroup(1)
const e=t.createVariable(d.value,"",null,1)
return this.sourceBlock_&&this.setValue(e.getId()),void Blockly.Events.setGroup(0)}case"createGlobalList":{Blockly.Events.setGroup(1)
const e=t.createVariable(d.value,"list")
return this.sourceBlock_&&this.setValue(e.getId()),void Blockly.Events.setGroup(0)}case"createLocalList":{Blockly.Events.setGroup(1)
const e=t.createVariable(d.value,"list",null,1)
return this.sourceBlock_&&this.setValue(e.getId()),void Blockly.Events.setGroup(0)}case"createBroadcast":{Blockly.Events.setGroup(1)
const e=t.createVariable(d.value,"broadcast_msg")
return this.setValue(e.getId()),void Blockly.Events.setGroup(0)}}}return g.call(this,t,e)}}