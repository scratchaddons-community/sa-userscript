export default async function({addon:t}){const{redux:e}=t.tab
await e.waitForState((t=>"object"==typeof t.session.session?.user))
const o=await t.auth.fetchUsername()
for(await e.waitForState((t=>"FETCHED"===t.preview.status.project&&t.preview.projectInfo.author?.username===o));;){await t.tab.waitForElement(".project-buttons .see-inside-button",{markAsSeen:1,reduxCondition(t){return t.scratchGui?t.scratchGui.mode.isPlayerOnly:1}})
const o=document.createElement("button")
o.className="button remix-button sa-remix-button"
const n=t.tab.scratchMessage("project.remixButton.altText")
o.setAttribute("title",n),o.setAttribute("alt",n),o.addEventListener("click",(()=>{e.dispatch({type:"scratch-gui/project-state/START_REMIXING"}),e.dispatch({type:"RESET_COMMENTS"}),o.classList.add("remixing","disabled")}))
const a=document.createElement("span")
a.innerText=t.tab.scratchMessage("project.remixButton"),o.append(a),t.tab.appendToSharedSpace({space:"beforeRemixButton",element:o,order:9}),t.tab.displayNoneWhileDisabled(o)}}