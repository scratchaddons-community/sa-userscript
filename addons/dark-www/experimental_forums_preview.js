function r(r,a){const c=document.createElement("link")
return c.rel="stylesheet",c.href=r,a&&(c.disabled=1),c}function a(r,a){if(void 0===r)return
if(a.self.disabled){r.style.setProperty("--darkWww-page","#ffffff"),r.style.setProperty("--darkWww-page-scratchr2Text","#322f31"),r.style.setProperty("--darkWww-link-scratchr2","#1aa0d8"),r.style.setProperty("--darkWww-gray-scratchr2","#f7f7f7"),r.style.setProperty("--darkWww-gray-scratchr2Text","#322f31"),r.style.setProperty("--darkWww-border-15","#cccccc")
const a=r.querySelector("link[href$='dark-www/pygments.css']")
a&&(a.disabled=1)
const c=r.querySelector("link[href$='dark-www/scrollbar.css']")
return void(c&&(c.disabled=1))}r.style.setProperty("--darkWww-page",a.settings.get("box")),r.style.setProperty("--darkWww-page-scratchr2Text",c(a.settings.get("box"),"#322f31")),r.style.setProperty("--darkWww-link-scratchr2",s(a.settings.get("link"),{r:.66,b:.85})),r.style.setProperty("--darkWww-gray-scratchr2",c(a.settings.get("gray"),e(a.settings.get("gray"),{r:.62,g:.62,b:.62}),a.settings.get("gray"),241)),r.style.setProperty("--darkWww-gray-scratchr2Text",c(a.settings.get("gray"),"#322f31")),r.style.setProperty("--darkWww-border-15",e(a.settings.get("border"),{a:.94}))
const t=r.querySelector("link[href$='dark-www/pygments.css']")
t&&(t.disabled=!a.settings.get("darkForumCode"))
const o=r.querySelector("link[href$='dark-www/scrollbar.css']")
o&&(o.disabled=!a.settings.get("darkScrollbars"))}import{textColor as c,multiply as s,brighten as e}from"../../libraries/common/cs/text-color.esm.js"
export default async function({addon:c}){const s=await c.tab.waitForElement(".markItUpPreviewFrame")
let e
const t=new MutationObserver((function(t){for(let o of t)if("childList"===o.type)for(let t of o.addedNodes)"HTML"===t.tagName&&(a(t,c),e=t),"LINK"===t.tagName&&t.href.endsWith("djangobb_forum/css/pygments.css")&&(s.contentDocument.head.appendChild(r(c.self.dir+"/experimental_scratchr2.css")),s.contentDocument.head.appendChild(r(c.self.dir+"/pygments.css",!c.settings.get("darkForumCode"))),s.contentDocument.head.appendChild(r(c.self.dir+"/scrollbar.css",!c.settings.get("darkScrollbars"))))}))
for(t.observe(s.contentDocument,{subtree:1,childList:1}),c.settings.addEventListener("change",(()=>a(e,c))),c.self.addEventListener("disabled",(()=>a(e,c))),c.self.addEventListener("reenabled",(()=>a(e,c)));;)await new Promise((r=>s.addEventListener("load",r,{once:1}))),t.disconnect(),t.observe(s.contentDocument,{subtree:1,childList:1})}