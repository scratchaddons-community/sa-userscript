import t from"../../libraries/common/cs/thumb-setter.js"
import e from"../../libraries/common/cs/data-url-to-blob.js"
import{init as o,saveConfig as a,isOverwritingEnabled as n,blockOverwriting as s}from"./persistent-thumb.js"
export default async function({addon:c,console:u,msg:m}){o(u)
let i=location.href.match(/\d+/)?.[0]
i&&s(n(i))
const b=()=>{let o=0
const{backdrop:n,container:s,content:u,closeButton:b,remove:d}=c.tab.createModal(m("set-thumbnail"),{isOpen:1})
s.classList.add("sa-animated-thumb-popup"),u.classList.add("sa-animated-thumb-popup-content"),u.appendChild(Object.assign(document.createElement("p"),{textContent:m("description"),className:"sa-animated-thumb-text"}))
const r=Object.assign(document.createElement("div"),{className:"flex-row action-buttons sa-animated-thumb-popup-actions"}),l=Object.assign(document.createElement("button"),{textContent:m("select-file"),className:"button action-button sa-animated-thumb-popup-action"}),p=Object.assign(document.createElement("button"),{textContent:m("use-stage"),className:"button action-button sa-animated-thumb-popup-action"})
r.appendChild(l),r.appendChild(p),u.appendChild(r)
const h=Object.assign(document.createElement("p"),{className:"sa-animated-thumb-text"}),f=Object.assign(document.createElement("input"),{type:"checkbox",checked:1,id:"sa-animated-thumb-stop-overwrite"}),j=Object.assign(document.createElement("label"),{textContent:m("keep-thumb"),htmlFor:"sa-animated-thumb-stop-overwrite"})
h.appendChild(f),h.appendChild(j),u.appendChild(h),u.appendChild(Object.assign(document.createElement("p"),{textContent:m("keep-thumb-desc"),className:"sa-animated-thumb-text"}))
const x=Object.assign(document.createElement("div"),{className:"sa-animated-thumb-popup-result",hidden:1})
u.appendChild(x),u.appendChild(Object.assign(document.createElement("p"),{textContent:m("successful"),className:"sa-animated-thumb-text sa-animated-thumb-show-on-success"}))
const w=Object.assign(document.createElement("img"),{alt:"",width:320,height:240}),O=Object.assign(document.createElement("p"),{className:"sa-animated-thumb-show-on-success sa-animated-thumb-uploaded-thumb"})
O.appendChild(w),u.appendChild(O),u.appendChild(Object.assign(document.createElement("p"),{textContent:m("if-unsuccessful"),className:"sa-animated-thumb-text sa-animated-thumb-show-on-success"}))
const g=new t(null,(t=>"image/gif"!==t.type||confirm(m("gif"))?Promise.resolve():Promise.reject("Aborted")))
let k
const N=()=>{g.removeFileInput(),d()}
k=()=>{o||N()},n.addEventListener("click",k),b.addEventListener("click",k)
const v=Object.assign(document.createElement("div"),{className:"flex-row action-buttons sa-animated-thumb-popup-buttons"}),C=Object.assign(document.createElement("button"),{textContent:m("close"),className:"button action-button close-button white"})
C.addEventListener("click",N,{once:1}),v.appendChild(C),u.appendChild(v),g.onFinished=t=>t.then((t=>{t||(w.src=`https://uploads.scratch.mit.edu/get_image/project/${i}_480x360.png?nocache=${Date.now()}`,u.classList.add("sa-animated-thumb-successful"),a(i,f.checked))}),(t=>{switch(x.hidden=0,t){case 503:case 500:x.textContent=m("server-error")
break
case 413:x.textContent=m("too-big")
break
default:x.textContent=m("error")}})).finally((()=>{o=0,l.removeAttribute("disabled"),p.removeAttribute("disabled")}))
const P=()=>{x.className="sa-animated-thumb-popup-result sa-animated-thumb-popup-result-none",l.setAttribute("disabled","true"),p.setAttribute("disabled","true")}
l.addEventListener("click",(()=>{P(),g.addFileInput(),o=1,g.showInput()})),p.addEventListener("click",(()=>{P(),c.tab.traps.vm.postIOData("video",{forceTransparentPreview:1}),c.tab.traps.vm.renderer.requestSnapshot((t=>{c.tab.traps.vm.postIOData("video",{forceTransparentPreview:0}),g.upload(e(t))})),c.tab.traps.vm.renderer.draw()}))}
for(c.tab.addEventListener("urlChange",(()=>{i=location.href.match(/\d+/)?.[0]||i,i&&s(n(i))})),localStorage.removeItem("saAnimatedThumbShowTooltip");;){if(await c.tab.waitForElement(".flex-row.subactions > .flex-row.action-buttons",{markAsSeen:1,reduxCondition(t){return t.scratchGui.mode.isPlayerOnly}}),!document.querySelector(".form-group.project-title"))continue
const t=Object.assign(document.createElement("button"),{textContent:m("set-thumbnail"),className:"button action-button sa-set-thumbnail-button",title:m("added-by")})
c.tab.displayNoneWhileDisabled(t),t.addEventListener("click",(()=>b())),c.tab.appendToSharedSpace({space:"beforeProjectActionButtons",order:0,element:t})}}