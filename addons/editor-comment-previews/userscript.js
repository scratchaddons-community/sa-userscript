export default async function({addon:e}){const n=e.tab.traps.vm,o=()=>{s.classList.toggle("sa-comment-preview-delay","none"!==e.settings.get("delay")),s.classList.toggle("sa-comment-preview-reduce-transparency",e.settings.get("reduce-transparency")),s.classList.toggle("sa-comment-preview-fade",!e.settings.get("reduce-animation"))}
let t=null,r=null,c=0,a=0,i=0
const l=document.createElement("div")
l.classList.add("sa-comment-preview-outer")
const s=document.createElement("div")
s.classList.add("sa-comment-preview-inner"),s.classList.add("sa-comment-preview-hidden"),o(),e.settings.addEventListener("change",o),l.appendChild(s),document.body.appendChild(l)
const d=e=>n.editingTarget.blocks.getBlock(e)||n.runtime.flyoutBlocks.getBlock(e),u=e=>e&&e.comment&&n.editingTarget.comments[e.comment],m=()=>{l.style.transform=`translate(${c+8}px, ${a+8}px)`},v=()=>{t&&(t=null,s.classList.add("sa-comment-preview-hidden"))}
document.addEventListener("mouseover",(o=>{if(e.self.disabled)return
if(clearTimeout(r),i)return
const c=o.target.closest(".blocklyBubbleCanvas > g, .blocklyBlockCanvas .blocklyDraggable[data-id]")
if(c===t)return
if(!c)return void v()
let a=null
if(e.settings.get("hover-view")&&o.target.closest(".blocklyBubbleCanvas > g")&&!o.target.closest("line")){if("none"!==c.querySelector("text.scratchCommentText").getAttribute("display")){const e=c.querySelector("textarea")
a=e.value}}else if(o.target.closest(".blocklyBlockCanvas .blocklyDraggable[data-id]")){const o=d(c.dataset.id),t=u(o)
if(e.settings.get("hover-view-block")&&t)a=t.text
else if(o&&"procedures_call"===o.opcode&&e.settings.get("hover-view-procedure")){const e=(e=>{const o=Object.values(n.editingTarget.blocks._blocks).find((n=>"procedures_prototype"===n.opcode&&n.mutation.proccode===e))
if(o){if(o.parent)return d(o.parent)
const e=o.id
return Object.values(n.editingTarget.blocks._blocks).find((n=>"procedures_definition"===n.opcode&&n.inputs.custom_block&&n.inputs.custom_block.block===e))}return null})(o.mutation.proccode),t=u(e)
t&&(a=t.text)}}null!==a&&""!==a.trim()?r=(n=>{if(!s.classList.contains("sa-comment-preview-hidden"))return void n()
const o=e.settings.get("delay")
return"long"===o?setTimeout(n,500):"short"===o?setTimeout(n,300):void n()})((()=>{t=c,(e=>{s.innerText=e,s.classList.remove("sa-comment-preview-hidden"),m()})(a)})):v()})),document.addEventListener("mousemove",(n=>{c=n.clientX,a=n.clientY,i=0,e.settings.get("follow-mouse")&&!s.classList.contains("sa-comment-preview-hidden")&&m()})),document.addEventListener("mousedown",(()=>{v(),i=1}),{capture:1})}