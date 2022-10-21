export default async function({addon:o}){async function t(){for(;;)await o.tab.waitForElement(".remix-credit",{markAsSeen:1,reduxCondition(o){return o.scratchGui.mode.isPlayerOnly}}),e.insertBefore(n,e.querySelector(".description-block"))}let e,n
for(;;){e=await o.tab.waitForElement(".project-notes",{markAsSeen:1,reduxCondition(o){return o.scratchGui.mode.isPlayerOnly}})
const i=document.querySelectorAll(".project-textlabel"),r=document.querySelectorAll(".description-block"),d=[],s=r.length
for(const a of i)a.remove()
n=e.insertBefore(document.createElement("div"),e.querySelector(".description-block")),n.classList.add("tabs-sa"),t.run||(t.run=1,t())
for(let u=0;s>u;u++){const l=document.createElement("div")
l.classList.add("tab-choice-sa")
const f=document.createElement("span")
f.innerText=i[u].innerText,l.appendChild(f),l.addEventListener("click",(()=>c(u))),d.push(l),n.appendChild(l)}function c(o){for(let t=0;s>t;t++){const e=t===o
d[t].classList.toggle("tab-choice-selected-sa",e),r[t].style.display=e?"":"none"}}c(0)}}