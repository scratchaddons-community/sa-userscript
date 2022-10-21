export default async function({addon:o}){let t="scratchr2"===o.tab.clientVersion,e=t?"textarea[name='content']":"[name='compose-comment']"
for(;;){let a=await o.tab.waitForElement(e,{markAsSeen:1,reduxCondition(o){return o.scratchGui?o.scratchGui.mode.isPlayerOnly:1}})
var n
n=t?a.parentNode.parentNode.querySelector(".control-group:not(.tooltip) div[data-control='post'] a"):a.parentNode.parentNode.parentNode.querySelector(".compose-bottom-row .compose-post"),a.addEventListener("keydown",(t=>{o.self.disabled||!t.ctrlKey&&!t.metaKey||"Enter"!==t.code&&"NumpadEnter"!==t.code||n.click()}))}}