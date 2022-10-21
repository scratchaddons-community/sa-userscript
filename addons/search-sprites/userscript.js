export default async function({addon:e,msg:s}){let t,o
const r=document.createElement("div")
r.className="sa-search-sprites-container",e.tab.displayNoneWhileDisabled(r,{display:"flex"})
const c=document.createElement("input")
c.className="sa-search-sprites-box",c.placeholder=s("placeholder"),c.autocomplete="off",c.type="text"
const n=e=>{if(!t)return
e=e.toLowerCase()
const s=s=>s.toLowerCase().includes(e)
for(const o of t.children){const t=!e||s(o.children[0].children[1].innerText)||s(o.children[0].children[2].children[0].innerText)&&o.children[0].classList.contains("sa-folders-folder")
o.style.display=t?"":"none"}}
c.addEventListener("input",(e=>{n(e.target.value)}))
const a=()=>{n(""),c.value=""},i=document.createElement("button")
for(i.className="sa-search-sprites-reset",i.addEventListener("click",a),i.textContent="×",e.self.addEventListener("disabled",a),r.appendChild(c),r.appendChild(i);;)await e.tab.waitForElement("div[class^='sprite-selector_items-wrapper']",{markAsSeen:1,reduxEvents:["scratch-gui/mode/SET_PLAYER","fontsLoaded/SET_FONTS_LOADED","scratch-gui/locales/SELECT_LOCALE"],reduxCondition(e){return!e.scratchGui.mode.isPlayerOnly}}),t=document.querySelector('[class^="sprite-selector_items-wrapper"]'),o=document.querySelector('[class^="sprite-selector_scroll-wrapper"]'),o.insertBefore(r,t),a()}