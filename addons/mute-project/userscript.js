import{setup as e,isMuted as t,setVol as o,getDefVol as n}from"../vol-slider/module.js"
export default async function({addon:a}){const c=a.tab.traps.vm
let s=document.createElement("img")
s.src="/static/assets/e21225ab4b675bc61eed30cfb510c288.svg",s.loading="lazy",s.style.display="none",s.className="sa-mute-icon"
const l=e=>{a.self.disabled||!e.ctrlKey&&!e.metaKey||(e.cancelBubble=1,e.preventDefault(),t()?(o(n()),s.style.display="none"):(o(0),s.style.display="block"))}
for(a.self.addEventListener("disabled",(()=>{o(1),s.style.display="none"}));;){let t=await a.tab.waitForElement("[class^='green-flag_green-flag']",{markAsSeen:1,reduxEvents:["scratch-gui/mode/SET_PLAYER","fontsLoaded/SET_FONTS_LOADED","scratch-gui/locales/SELECT_LOCALE"]})
a.tab.appendToSharedSpace({space:"afterStopButton",element:s,order:0}),e(c),t.addEventListener("click",l),t.addEventListener("contextmenu",l)}}