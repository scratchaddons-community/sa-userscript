import{linkifyTextNode as e,linkifyTag as t}from"../../libraries/common/cs/fast-linkify.js"
export default async function({addon:n}){function o(t){return a.push({element:t,original:t.innerHTML,type:"node"}),e(t)}const r=document.location.pathname.substring(1).split("/")[0],a=[]
switch(n.self.addEventListener("disabled",(()=>{for(const{element:e,original:t}of a)e.innerHTML=t})),n.self.addEventListener("reenabled",(()=>{for(const{element:n,constructor:o,type:r}of a)"tag"===r?t(n,o):e(n)})),r){case"users":document.querySelectorAll("p.overview").forEach((e=>o(e)))
break
case"projects":(async()=>{for(;;){let e=await n.tab.waitForElement(".project-description",{markAsSeen:1,reduxCondition(e){return e.scratchGui?e.scratchGui.mode.isPlayerOnly:1}})
document.querySelectorAll(".project-description a").forEach((e=>{/^#\d+$/.test(e.textContent)&&e.previousSibling instanceof Text&&(e.previousSibling.textContent+=e.textContent,e.remove())})),e.normalize(),o(e)}})()
break
case"studios":{const e=document.querySelector("div.studio-description")
if(!e)break
o(e)
break}}(async()=>{if("scratchr2"===n.tab.clientVersion)for(;;)o(await n.tab.waitForElement(".comment .content",{markAsSeen:1}))
else for(;;)e=await n.tab.waitForElement("span.comment-content",{markAsSeen:1,reduxCondition(e){return e.scratchGui?e.scratchGui.mode.isPlayerOnly:1}}),r=HTMLSpanElement,a.push({element:e,original:e.innerHTML,type:"tag",constructor:r}),t(e,r)
var e,r})()}