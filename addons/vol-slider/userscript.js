import{setup as e,setVol as t,getDefVol as n,setDefVol as a,isMuted as o}from"./module.js"
export default async function({addon:s}){const l=s.tab.traps.vm
let c=document.createElement("img")
c.loading="lazy",c.id="sa-vol-icon"
let d=document.createElement("input")
d.id="sa-vol-slider",d.type="range",d.min=0,d.max=1,d.step=.02
const i=document.createElement("div")
for(i.className="sa-volume",document.addEventListener("click",(e=>{e.target.closest("[class*='stage-header_stage-button-first']")?i.style.display="none":e.target.closest("[class*='stage-header_stage-button-last']")&&(i.style.display="inline-block")}),{capture:1}),s.self.addEventListener("disabled",(()=>{t(1)})),s.self.addEventListener("reenabled",(()=>{t(n())})),s.settings.addEventListener("change",(()=>{a(s.settings.get("defVol")/100)})),c.addEventListener("click",(function(){o()?t(n()):t(0)})),d.addEventListener("input",(function(){t(this.value)}));;)await s.tab.waitForElement("[class^='green-flag_green-flag']",{markAsSeen:1,reduxEvents:["scratch-gui/mode/SET_PLAYER","fontsLoaded/SET_FONTS_LOADED","scratch-gui/locales/SELECT_LOCALE"]}),s.tab.displayNoneWhileDisabled(i,{display:"inline-block"}),s.tab.appendToSharedSpace({space:"afterStopButton",element:i,order:0}),i.appendChild(c),i.appendChild(d),e(l),a(s.settings.get("defVol")/100),t(n())}