export default async function({addon:e,msg:a}){function n(){"editor"===e.tab.editorMode?(o(),r=setInterval(o,5e3)):e.tab.addEventListener("urlChange",(function a(){"editor"===e.tab.editorMode&&(o(),r=setInterval(o,5e3),e.tab.removeEventListener("urlChange",a))}))}const s=document.createElement("a")
s.href="/messages/",s.title=a("messages"),s.className=e.tab.scratchClass("menu-bar_menu-bar-item","menu-bar_hoverable",{others:"sa-editormessages"})
let t=document.createElement("span")
t.classList.add("sa-editormessages-count"),s.appendChild(t)
const o=async()=>{const a=Number(await e.account.getMsgCount())
t.innerText=a,t.setAttribute("style",0===a?"display: none;":"")}
let r
for(n(),e.self.addEventListener("disabled",(()=>{clearInterval(r)})),e.self.addEventListener("reenabled",n),e.tab.displayNoneWhileDisabled(s);;){let a=await e.tab.waitForElement("[class^='menu-bar_account-info-group'] > [href^='/my']",{markAsSeen:1,reduxEvents:["scratch-gui/mode/SET_PLAYER","fontsLoaded/SET_FONTS_LOADED","scratch-gui/locales/SELECT_LOCALE"],reduxCondition(e){return!e.scratchGui.mode.isPlayerOnly}})
document.querySelector("[class^='menu-bar_account-info-group']").insertBefore(s,a)}}