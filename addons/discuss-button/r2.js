export default async function({addon:n}){if("scratch-www"===n.tab.clientVersion)return
let a
const c=async()=>{if(!a&&await n.auth.fetchIsLoggedIn()){const c=await n.auth.fetchUsername(),o=document.querySelector(".dropdown"),t=o.querySelector(".dropdown-menu .user-nav")
a=t.childNodes[0].childNodes[0].appendChild(document.createElement("span")),a.className="sa-profile-name",a.textContent=c,o.firstChild.childNodes[1].textContent=""}},o=async()=>{const c=document.querySelector(".dropdown")
if(c){const a=await n.auth.fetchUsername()
c.firstChild.childNodes[1].textContent=a}a?.remove(),a=null}
n.settings.get("compact-nav")&&c(),n.settings.addEventListener("change",(()=>{n.settings.get("compact-nav")?c():o()})),n.self.addEventListener("disabled",(()=>o())),n.self.addEventListener("reenabled",(()=>{n.settings.get("compact-nav")?c():o()}))}