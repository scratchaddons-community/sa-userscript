let t=0,e=0,n=[]
const o=function(t){if(!t.target)return
const o=t.target.closest(".react-contextmenu-wrapper")
if(!o)return
let c,i=o.querySelector("nav.react-contextmenu")
const r={}
if(!i&&o.closest(".monitor-overlay")){const t=o[this.traps.getInternalKey(o)]?.return?.stateNode?.props?.id
if(!t)return
if(i=[].find.call(document.querySelectorAll("body > nav.react-contextmenu"),(e=>e[this.traps.getInternalKey(e)]?.return?.stateNode?.props?.id===t)),!i)return
const e=o[this.traps.getInternalKey(o)]?.return?.return?.return?.stateNode?.props
if(!e)return
r.monitorParams=e.params,r.opcode=e.opcode,r.itemId=e.id,r.targetId=e.targetId,c=`monitor_${e.mode}`}else{if(!o[this.traps.getInternalKey(o)]?.return?.return?.return?.stateNode?.props?.dragType)return
{const t=o[this.traps.getInternalKey(o)].return.return.return.stateNode.props
c=t.dragType.toLowerCase(),r.name=t.name,r.itemId=t.id,r.index=t.index}}const u={menuItem:i,target:o,type:c,...r}
Array.from(i.children).forEach((t=>{t.classList.contains("sa-ctx-menu")&&t.remove()}))
for(const t of e?n.flatMap((t=>"function"==typeof t?t(c,u):t)):n){if(!t)continue
if(t.types&&!t.types.some((t=>c===t)))continue
if(t.condition&&!t.condition(u))continue
const e=document.createElement("div"),n=["context-menu_menu-item"]
t.border&&n.push("context-menu_menu-item-bordered"),t.dangerous&&n.push("context-menu_menu-item-danger"),e.className=this.scratchClass(...n,{others:["react-contextmenu-item","sa-ctx-menu",t.className||""]})
const o=document.createElement("span")
o.textContent=t.label,e.append(o),this.displayNoneWhileDisabled(e,{display:"block"}),e.addEventListener("click",(e=>{e.stopPropagation(),window.dispatchEvent(new CustomEvent("REACT_CONTEXTMENU_HIDE",{detail:{action:"REACT_CONTEXTMENU_HIDE"}})),t.callback(u)})),this.appendToSharedSpace({space:t.position,order:t.order,scope:i,element:e})}},c=e=>{t||(t=1,e.waitForElement("body").then((t=>t.addEventListener("contextmenu",(t=>o.call(e,t)),{capture:1}))))}
export const addContextMenu=(t,o,i)=>{void 0===i?(n.push(o),e=1):n.push({...i,callback:o}),c(t)}
