import t from"../../libraries/common/cs/download-blob.js"
import e from"./log-view.js"
export default async function o({debug:o,addon:n,msg:s}){const r=n.tab.traps.vm,c=o.createHeaderTab({text:s("tab-logs"),icon:n.self.dir+"/icons/logs.svg"}),i=new e
i.placeholderElement.textContent=s("no-logs"),i.generateRow=t=>{const e=document.createElement("div")
e.className="sa-debugger-log",t.internal&&e.classList.add("sa-debugger-log-internal"),e.dataset.type=t.type
const n=document.createElement("div")
n.className="sa-debugger-log-icon","warn"!==t.type&&"error"!==t.type||(n.title=s("icon-"+t.type)),e.appendChild(n)
const c=document.createElement("div")
if(c.className="sa-debugger-log-repeats",c.style.display="none",e.appendChild(c),t.preview&&t.blockId&&t.targetInfo){const n=t.targetInfo.originalId,s=((t,e)=>{const n=r.runtime.getTargetById(t)
if(!n)return null
const s=o.getBlock(n,e)
return s?Object.values(s.inputs)[0]?.block:null})(n,t.blockId)
if(s){const t=o.createBlockPreview(n,s)
t&&e.appendChild(t)}}const i=document.createElement("div")
return i.className="sa-debugger-log-text",0===t.text.length?(i.classList.add("sa-debugger-log-text-empty"),i.textContent=s("empty-string")):(i.textContent=t.text,i.title=t.text),e.appendChild(i),t.targetInfo&&t.blockId&&e.appendChild(o.createBlockLink(t.targetInfo,t.blockId)),{root:e,repeats:c}},i.renderRow=(t,e)=>{const{repeats:o}=t
e.count>1&&(o.style.display="",o.textContent=e.count)}
const a=o.createHeaderButton({text:s("export"),icon:n.self.dir+"/icons/download-white.svg",description:s("export-desc")})
a.element.addEventListener("click",(async e=>{const o="{sprite}: {content} ({type})",r=e.shiftKey?await n.tab.prompt(s("export"),s("enter-format"),o,{useEditorClasses:1}):o
if(!r)return
const c=i.rows.map((({text:t,targetInfo:e,type:o,count:n})=>(r.replace(/\{(sprite|type|content)\}/g,((n,r)=>({sprite:e?e.name:s("unknown-sprite"),type:o,content:t}[r])))+"\n").repeat(n))).join("")
t("logs.txt",new Blob([c],{type:"text/plain"}))}))
const g=o.createHeaderButton({text:s("clear"),icon:n.self.dir+"/icons/delete.svg"})
g.element.addEventListener("click",(()=>{l()}))
const l=()=>{i.clear()}
return{tab:c,content:i.outerElement,buttons:[a,g],show(){i.show(),o.setHasUnreadMessage(0)},hide(){i.hide()},addLog(t,e,n){const s={text:t,type:n,count:1,preview:1}
if(e){s.blockId=e.peekStack()
const t=e.target.id
s.targetId=t,s.targetInfo=o.getTargetInfoById(t)}"internal"===n&&(s.internal=1,s.preview=0,s.type="log"),"internal-warn"===n&&(s.internal=1,s.type="warn")
const r=i.rows[i.rows.length-1]
var c,a
r&&(c=s).text===(a=r).text&&c.type===a.type&&c.internal===a.internal&&c.blockId===a.blockId&&c.targetId===a.targetId?(r.count++,i.queueUpdateContent()):i.append(s),i.visible||s.internal||o.setHasUnreadMessage(1)},clearLogs:l}}