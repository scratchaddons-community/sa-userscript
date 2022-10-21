import{emojis as o,unicodeEmojis as t}from"./emojis.js"
export default async function({addon:e,msg:n}){let c=null
const i=function(){m.classList.remove("sa-emoji-picker-offscreen")
const o="scratchr2"===e.tab.clientVersion?document.querySelector("#pagewrapper"):document.body
m.getBoundingClientRect().bottom>o.getBoundingClientRect().bottom-48&&m.classList.add("sa-emoji-picker-offscreen")},s=function(o){o.target.classList.contains("sa-emoji-button")&&(a.style.display="none",u.style.display="none",c!==this?(d(),this.appendChild(m),i()):c=null)}
document.addEventListener("mouseup",(function(o){m.contains(o.target)||(c=m.parentElement,m.remove())}))
const r=function(){const o="scratch-www"===e.tab.clientVersion?this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('textarea[id*="frc-compose-comment"]'):this.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(".control-group.tooltip.right > textarea")
!function(o,t){t.selectionStart===t.value.length&&t.selectionEnd===t.value.length?(" "!==t.value[t.value.length-1]&&void 0!==t.value[t.value.length-1]&&(o=" "+o),t.value+=o):(" "!==t.value[t.selectionStart]&&(o=" "+o)," "!==t.value[t.selectionEnd-1]&&(o+=" "),t.value=t.value.substring(0,t.selectionStart)+o+t.value.substring(t.selectionEnd-1,t.value.length))}(this.dataset.text,o),o.dispatchEvent(new Event("input",{bubbles:1}))},m=document.createElement("div")
m.className="sa-emoji-picker",e.tab.displayNoneWhileDisabled(m,{display:"inline-block"}),o.forEach((o=>{const t=document.createElement("span")
t.classList.add("sa-emoji-picker-item"),t.dataset.text=o.text,t.title=o.text,t.onclick=r
const n=document.createElement("img")
n.src="scratch-www"===e.tab.clientVersion?o.image:o.imager2,n.classList.add("scratch-www"===e.tab.clientVersion?"emoji":"easter-egg","sa-emoji-picker-item-inner"),t.appendChild(n),m.appendChild(t)}))
const a=document.createElement("div")
a.classList.add("sa-emoji-picker-unicode")
const u=document.createElement("div")
u.classList.add("sa-emoji-picker-divider"),u.style.display="none",m.appendChild(u),t.forEach((o=>{if("br"===o){const o=document.createElement("br")
o.classList.add("sa-emoji-picker-break"),a.appendChild(o)}else{const t=document.createElement("span")
t.classList.add("sa-emoji-picker-item"),t.dataset.text=o,t.onclick=r
const e=document.createElement("span")
e.textContent=o,e.classList.add("sa-emoji-picker-item-inner"),t.appendChild(e),a.appendChild(t)}})),a.style.display="none",m.appendChild(a)
const p=document.createElement("button")
p.type="button",p.classList.add("sa-emoji-picker-see-more","button","small")
const d=function(){p.textContent=n("none"===a.style.display?"show-more":"show-less")}
for(p.onclick=function(){a.style.display="none"===a.style.display?"block":"none",u.style.display=a.style.display,d(),i()},d(),m.appendChild(p);;){const o=("scratch-www"===e.tab.clientVersion?await e.tab.waitForElement('textarea[id*="frc-compose-comment"]',{markAsSeen:1,reduxCondition(o){return o.scratchGui?o.scratchGui.mode.isPlayerOnly:1}}):await e.tab.waitForElement("form > .control-group.tooltip.right > textarea",{markAsSeen:1})).parentElement.parentElement.parentElement.querySelector(".compose-limit, .control-group.tooltip.right + .control-group"),t=document.createElement("div")
let n
t.classList.add("sa-emoji-button-container"),"scratchr2"===e.tab.clientVersion?t.classList.add("button","small","sa-emoji-button-r2"):t.classList.add("sa-emoji-button-www"),t.onclick=s,"scratch-www"===e.tab.clientVersion?(n=document.createElement("button"),n.classList.add("button")):n=document.createElement("a"),n.textContent="🙂︎",n.classList.add("sa-emoji-button"),t.appendChild(n),e.tab.displayNoneWhileDisabled(t,{display:"inline-block"}),o.appendChild(t)}}