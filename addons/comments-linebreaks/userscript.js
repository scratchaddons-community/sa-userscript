import o from"../../libraries/common/cs/format-profile-comments.js"
export default async function({addon:e}){function n(n){if(!e.self.disabled){if(e.settings.get("scrollbars")){let o=20*e.settings.get("height")+"px"
n.style.maxHeight=o,n.style.overflow="auto"}else n.style.maxHeight="none"
n.style.whiteSpace="break-spaces",o(n)}}const t=new Map
for(e.self.addEventListener("disabled",(()=>{t.forEach(((o,e)=>{e.innerHTML="",e.style.whiteSpace="nowrap"
for(const n of o.childNodes){const o=n.cloneNode(1)
e.appendChild(o)}}))})),e.self.addEventListener("reenabled",(()=>{t.forEach(((o,e)=>{n(e)}))})),e.settings.addEventListener("change",(()=>{t.forEach(((o,e)=>{n(e)}))}));;){const o=await e.tab.waitForElement(".comment .content",{markAsSeen:1})
t.set(o,o.cloneNode(1)),n(o)}}