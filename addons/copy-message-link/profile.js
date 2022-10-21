export default async function({addon:o,msg:n}){let t=0,c=0
for(;;){const a=document.querySelectorAll("div.comment").length
t!==a&&(c++,t=a)
const i=await o.tab.waitForElement(`div.comment:not([data-sa-copy-link-pass='${c}'])`)
if(i.dataset.saCopyLinkPass=c,i.querySelector(".sa-copy-link-btn"))continue
const s=document.createElement("span")
o.tab.displayNoneWhileDisabled(s),s.className="actions report sa-copy-link-btn",s.textContent=n("copyLink"),s.onclick=()=>{let o="users"===location.pathname.split("/")[1]?`${location.origin}/users/${Scratch.INIT_DATA.PROFILE.model.id}/`:`${location.origin}${location.pathname}`
navigator.clipboard.writeText(`${o}#${i.id}`),s.textContent=n("copied"),s.style.fontWeight="bold",setTimeout((()=>{s.textContent=n("copyLink"),s.style.fontWeight=""}),5e3)},i.querySelector("div.actions-wrap").appendChild(s)}}