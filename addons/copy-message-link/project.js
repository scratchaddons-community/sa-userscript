export default async function({addon:n,msg:o}){for(;;){const t=await n.tab.waitForElement("div.comment",{markAsSeen:1,reduxCondition(n){return n.scratchGui?n.scratchGui.mode.isPlayerOnly:1}})
if(t.querySelector("form"))continue
const e=document.createElement("span")
n.tab.displayNoneWhileDisabled(e),e.className="comment-delete sa-comment-link",e.textContent=o("copyLink"),e.onclick=()=>{let n=`${location.origin}${location.pathname}`
"/"!==n[n.length-1]&&(n+="/"),navigator.clipboard.writeText(`${n}#${t.id}`),e.textContent=o("copied"),e.style.fontWeight="bold",setTimeout((()=>{e.textContent=o("copyLink"),e.style.fontWeight=""}),5e3)},(await n.tab.waitForElement("div.action-list",{markAsSeen:1,elementCondition(n){return t.contains(n)}})).prepend(e)}}