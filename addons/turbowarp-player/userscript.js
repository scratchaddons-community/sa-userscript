export default async function({addon:t,msg:e}){const o=t.settings.get("action")
let n,r=0,a=document.createElement("div")
a.className="sa-tw-iframe-container"
let c=document.createElement("iframe")
c.setAttribute("allowtransparency","true"),c.setAttribute("allowfullscreen","true"),c.setAttribute("allow","autoplay *; camera https://turbowarp.org; document-domain 'none'; fullscreen *; gamepad https://turbowarp.org; microphone https://turbowarp.org;"),c.className="sa-tw-iframe",a.appendChild(c)
const s=document.createElement("button")
s.className="button sa-tw-button",s.title="TurboWarp",s.onclick=async()=>{let e=""
if(0==t.tab.redux.state?.preview?.projectInfo?.public&&t.tab.redux.state.preview.projectInfo.project_token&&(e=`#?token=${t.tab.redux.state.preview.projectInfo.project_token}`),"player"===o)if(r=!r,r){const o=await t.auth.fetchUsername(),r=new URLSearchParams
r.set("settings-button","1"),o&&r.set("username",o)
const i=window.location.pathname.split("/")[2]
if(t.settings.get("addons")){const e=await t.self.getEnabledAddons("editor")
r.set("addons",e.join(","))}const u=`https://turbowarp.org/${i}/embed?${r}${e}`
c.src="",n.parentElement.prepend(a),c.contentWindow.location.replace(u),n.style.display="none",s.classList.add("scratch"),s.title="Scratch",t.tab.traps.vm.stopAll()}else a.remove(),n.style.display="",s.classList.remove("scratch"),r=0,s.title="TurboWarp"
else window.open(`https://turbowarp.org/${window.location.pathname.split("/")[2]}${e}`,"_blank","noopener,noreferrer")}
let i=1
for(;;)(await t.tab.waitForElement(".see-inside-button",{markAsSeen:1,reduxCondition(t){return t.scratchGui.mode.isPlayerOnly}})).addEventListener("click",(function(t){r&&i&&(confirm(e("confirmation"))?i=0:t.stopPropagation())})),t.tab.appendToSharedSpace({space:"beforeRemixButton",element:s,order:1}),n=document.querySelector(".guiPlayer")}