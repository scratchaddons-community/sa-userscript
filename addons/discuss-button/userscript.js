export default async function({addon:e}){let a=[]
for(;;){const o=await e.tab.waitForElement(".search",{markAsSeen:1,reduxCondition(e){return e.scratchGui?e.scratchGui.mode.isPlayerOnly:1}}),s=document.querySelector(".site-nav")
function t({name:a,url:t,extraClass:n},r){const o=document.createElement("li")
o.className="link",r&&o.classList.add("last"),"scratchr2"!==e.tab.clientVersion&&"string"==typeof n&&o.classList.add(n)
const l=document.createElement("a"),c=new URL(t,location.origin)
l.href=["http:","https:"].includes(c.protocol)?c.toString():"",o.append(l),s&&(l.id="project-create")
const u=document.createElement("span")
return u.innerText=a,l.append(u),o}function n(){if(s)for(4>a.length&&a.push(...[].map.call(s.children,(e=>({name:e.innerText,url:e.firstChild.href}))));s.firstChild;)s.removeChild(s.lastChild)
else for(;!o.previousSibling.classList.contains("logo");)o.previousSibling.remove()}function r(){n()
const r=e.self.disabled?0===a.length?a=[{name:e.tab.scratchMessage("general.create"),url:"/projects/editor/",extraClass:"create"},{name:e.tab.scratchMessage("general.explore"),url:"/explore/projects/all",extraClass:"explore"},{name:e.tab.scratchMessage("general.ideas"),url:"/ideas",extraClass:"ideas"},{name:e.tab.scratchMessage("general.about"),url:"/about",extraClass:"about"}]:a:e.settings.get("items")
r.forEach(((e,a)=>{s?s.append(t(e,a+1===r.length)):o.parentElement.insertBefore(t(e),o)}))}r(),e.settings.addEventListener("change",r),e.self.addEventListener("disabled",r),e.self.addEventListener("reenabled",r)}}