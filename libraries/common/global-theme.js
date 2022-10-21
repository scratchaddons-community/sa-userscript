import chrome from"../../../libraries/common/chrome.js"
export default function(){if(chrome.runtime.getManifest().version_name.includes("-prerelease")){const e=getComputedStyle(document.documentElement).getPropertyValue("--blue")
document.documentElement.style.setProperty("--brand-orange",e)
const o=document.getElementById("favicon")
o&&(o.href=chrome.runtime.getURL("/images/icon-blue.png"))}const e=document.createElement("link")
return e.setAttribute("rel","stylesheet"),e.setAttribute("href",chrome.runtime.getURL("/webpages/styles/colors-light.css")),e.setAttribute("data-below-vue-components",""),e.media="not all",document.head.appendChild(e),new Promise((o=>{chrome.storage.sync.get(["globalTheme"],(({globalTheme:t=0})=>{1==t&&e.removeAttribute("media")
let l=t
o({theme:t,setGlobalTheme(o){o!==l&&(chrome.storage.sync.set({globalTheme:o},(()=>{1==o?e.removeAttribute("media"):e.media="not all"})),l=o)}})}))}))}