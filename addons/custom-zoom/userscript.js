export default async function({addon:o}){function n(){if(document.removeEventListener("mousemove",t),"editor"!==o.tab.editorMode)return
Blockly.getMainWorkspace().options.zoomOptions.maxScale=o.settings.get("maxZoom")/100,Blockly.getMainWorkspace().options.zoomOptions.minScale=o.settings.get("minZoom")/100,Blockly.getMainWorkspace().options.zoomOptions.startScale=o.settings.get("startZoom")/100,Blockly.getMainWorkspace().options.zoomOptions.scaleSpeed=1+o.settings.get("zoomSpeed")/100*.2
const n=e(),s=o.settings.get("autohide")
n&&n.classList.toggle("sa-custom-zoom-hidden",s),s&&(document.querySelector(".injectionDiv").appendChild(u),c(),document.addEventListener("mousemove",t))}function e(){const o=Blockly.getMainWorkspace().zoomControls_
return o?o.svgGroup_:null}function t(n){const t=n.x>s.left&&s.right>n.x&&n.y>s.top&&s.bottom>n.y
if(t!==a){a=t
const n=e()
n&&(n.style.setProperty("--sa-custom-zoom-speed",i[o.settings.get("speed")]),n.classList.toggle("sa-custom-zoom-hidden",!t))}}function c(){s=u.getBoundingClientRect()}let s
await o.tab.traps.getBlockly()
let a=0
const i={none:"0s",short:"0.25s",default:"0.5s",long:"1s"},u=document.createElement("div")
u.className="sa-custom-zoom-area",await o.tab.waitForElement(".blocklyZoom"),document.querySelector('[class^="backpack_backpack-container"]')&&window.dispatchEvent(new Event("resize")),n(),o.tab.addEventListener("urlChange",n),o.settings.addEventListener("change",n),window.addEventListener("resize",(function(){"editor"===o.tab.editorMode&&o.settings.get("autohide")&&c()}))}