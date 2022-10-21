export default async function({addon:e,console:n}){const t="sa-dragged-over",o=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set
document.addEventListener("dragover",(s=>{if(e.self.disabled)return
if(!s.dataTransfer.types.includes("Files"))return
let c,i
if((c=s.target.closest('div[class*="sprite-selector_sprite-selector"]'))||(c=s.target.closest('div[class*="stage-selector_stage-selector"]'))||(c=s.target.closest('div[class*="selector_wrapper"]'))?i=n=>{const t=e.settings.get("use-hd-upload")?"":":not(.sa-better-img-uploads-input)",o=c.querySelector('input[class*="action-menu_file-input"]'+t)
o.files=n,o.dispatchEvent(new Event("change",{bubbles:1}))}:!e.tab.redux.state.scratchGui.mode.isPlayerOnly&&(c=s.target.closest('div[class*="monitor_list-monitor"]'))?i=e=>{const t=document.querySelector("body > .react-contextmenu.react-contextmenu--visible")
c.dispatchEvent(new MouseEvent("contextmenu",{bubbles:1}))
const o=document.querySelector("body > .react-contextmenu.react-contextmenu--visible"),s=null===o?t:o
s.style.display="none"
const i=document.body.appendChild
document.body.appendChild=t=>{if(document.body.appendChild=i,!(t instanceof HTMLInputElement))return n.error('File input was not immediately given to appendChild upon clicking "Import"!'),i(t)
document.body.appendChild(t),t.click=()=>{},t.files=e,t.dispatchEvent(new Event("change")),window.requestAnimationFrame((()=>{window.requestAnimationFrame((()=>{s.style.display=null,s.style.opacity=0,s.style.pointerEvents="none"}))}))},s.children[0].click()}:(c=s.target.closest('div[class*="question_question-input"] > input[class*="input_input-form_l9eYg"]'))&&(i=async e=>{const n=(await Promise.all(Array.from(e,(e=>e.text())))).join("").replace(/[\r\n]+$/,"").replace(/\r?\n|\r/g," "),t=c.selectionStart;((e,n)=>{o.call(e,n),e.dispatchEvent(new Event("change",{bubbles:1}))})(c,c.value.slice(0,t)+n+c.value.slice(c.selectionEnd)),c.setSelectionRange(t,t+n.length)}),!c)return
if(s.preventDefault(),c.classList.contains(t))return
c.classList.add(t)
const r=e=>{e.preventDefault(),l(),e.dataTransfer.types.includes("Files")&&e.dataTransfer.files.length>0&&i(e.dataTransfer.files)},u=e=>{e.preventDefault(),e.dataTransfer.dropEffect="copy"}
s.dataTransfer.dropEffect="copy"
const a=e=>{e.preventDefault(),l()},l=()=>{c.classList.remove(t),c.removeEventListener("dragover",u),c.removeEventListener("dragleave",a),c.removeEventListener("drop",r)}
c.addEventListener("dragover",u),c.addEventListener("dragleave",a),c.addEventListener("drop",r)}),{useCapture:1})}