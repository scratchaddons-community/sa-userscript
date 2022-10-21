export default async function({addon:a}){if("scratchr2"===a.tab.clientVersion)return
let n
const t=async t=>{if(await a.auth.fetchIsLoggedIn()){const c=await a.auth.fetchUsername(),e=await a.tab.waitForElement(".dropdown")
if(!t)return n?.remove(),void(n=null)
n=e.childNodes[0].childNodes[0].appendChild(document.createElement("span")),n.className="sa-profile-name",n.textContent=c}}
a.settings.get("compact-nav")&&t(1),a.settings.addEventListener("change",(()=>{t(a.settings.get("compact-nav"))})),a.self.addEventListener("disabled",(()=>t(0))),a.self.addEventListener("reenabled",(()=>{t(a.settings.get("compact-nav"))}))}