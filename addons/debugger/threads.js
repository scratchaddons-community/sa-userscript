import{onPauseChanged as t,isPaused as e,singleStep as n,onSingleStep as o,getRunningThread as r}from"./module.js"
import s from"./log-view.js"
import d from"../editor-stepping/highlighter.js"
const c=(t,e)=>{for(const n of e)t.push(n)}
export default async function a({debug:a,addon:i,msg:g}){const u=i.tab.traps.vm,h=a.createHeaderTab({text:g("tab-threads"),icon:i.self.dir+"/icons/threads.svg"}),f=new s
f.canAutoScrollToEnd=0,f.outerElement.classList.add("sa-debugger-threads"),f.placeholderElement.textContent=g("no-threads-running")
const l=new d(10,"#ff0000")
f.generateRow=t=>{const e=document.createElement("div")
e.className="sa-debugger-log"
const n="thread-header"===t.type,o=document.createElement("div")
if(o.className="sa-debugger-thread-indent",o.style.setProperty("--level",n?t.depth:t.depth+1),e.appendChild(o),n){if(e.classList.add("sa-debugger-thread-title"),t.depth>0){const t=document.createElement("div")
t.className="sa-debugger-log-icon",e.appendChild(t)}const n=document.createElement("div")
n.textContent=t.targetName,n.className="sa-debugger-thread-target-name",e.appendChild(n)
const o=document.createElement("div")
o.className="sa-debugger-thread-id",o.textContent=g("thread",{id:t.id}),e.appendChild(o)}if("thread-stack"===t.type){const n=a.createBlockPreview(t.targetId,t.blockId)
n&&e.appendChild(n)}return t.targetId&&t.blockId&&e.appendChild(a.createBlockLink(a.getTargetInfoById(t.targetId),t.blockId)),{root:e}},f.renderRow=(t,e)=>{const{root:n}=t
n.classList.toggle("sa-debugger-thread-running",!!e.running)}
let p=new WeakMap
const m=new WeakMap
let b=1
const v=()=>{if(!f.visible)return
const t=[],e=u.runtime.threads,n=new Set,o=(t,e)=>{if(n.has(t))return[]
n.add(t)
const s=(t=>(m.has(t)||m.set(t,b++),m.get(t)))(t),d=t.target
p.has(t)||p.set(t,{headerItem:{type:"thread-header",depth:e,targetName:d.getName(),id:s},blockCache:new WeakMap})
const i=p.get(t),g=r(),u=(n,r)=>{const s=n.id
if(!n)return
const a=t.stackFrames[r]
i.blockCache.has(n)||i.blockCache.set(n,{})
const u=i.blockCache.get(n)
let h=u[r]
h||(h=u[r]={type:"thread-stack",depth:e,targetId:d.id,blockId:s}),h.running=t===g&&s===g.peekStack()&&r===g.stackFrames.length-1
const f=[h]
if(a&&a.executionContext&&a.executionContext.startedThreads)for(const t of a.executionContext.startedThreads)c(f,o(t,e+1))
return f},h=a.getBlock(t.target,t.topBlock),f=[i.headerItem]
if(h){c(f,u(h,0))
for(let e=0;t.stack.length>e;e++){const n=t.stack[e]
if(n===h.id)continue
const o=a.getBlock(t.target,n)
o&&c(f,u(o,e))}}return f}
for(let n=0;e.length>n;n++){const r=e[n]
r.updateMonitor||c(t,o(r,0))}f.rows=t,f.queueUpdateContent()}
a.addAfterStepCallback((()=>{v()
const t=r()
l.setGlowingThreads(t?[t]:[])}))
const k=a.createHeaderButton({text:g("step"),icon:i.self.dir+"/icons/step.svg",description:g("step-desc")})
k.element.addEventListener("click",(()=>{n()}))
const w=t=>{k.element.style.display=t?"":"none",v()}
return w(e()),t(w),o(v),{tab:h,content:f.outerElement,buttons:[k],show(){f.show(),v()},hide(){f.hide()}}}