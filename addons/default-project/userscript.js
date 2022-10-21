export default async function({addon:e,console:t}){const a=fetch(`${e.self.dir}/default.json`).then((e=>e.text()))
let c=0,o=Boolean(e.tab.redux.state)
for(;!o;)await new Promise((t=>{setTimeout((()=>{o=Boolean(e.tab.redux.state),t()}),0)}))
e.tab.redux.initialize()
let n=0
e.tab.redux.addEventListener("statechanged",(async o=>{if("scratch-gui/project-state/DONE_LOADING_VM_WITHOUT_ID"===o.detail.action.type){if(c)return void t.log("Pending replacement")
c=1
let o=0
setTimeout((()=>o=1),1e4),await e.auth.fetchIsLoggedIn()&&(await e.tab.redux.waitForState((e=>"CREATING_NEW"===e.scratchGui.projectState.loadingState)),await e.tab.redux.waitForState((e=>"SHOWING_WITH_ID"===e.scratchGui.projectState.loadingState)),await e.tab.redux.waitForState((e=>"AUTO_UPDATING"===e.scratchGui.projectState.loadingState)),await e.tab.redux.waitForState((e=>"SHOWING_WITH_ID"===e.scratchGui.projectState.loadingState)))
const r=Number(e.settings.get("projectId"))
if(!o&&!n)switch(r){case 510186917:break
case 556445222:a.then((t=>e.tab.traps.vm.loadProject(t)))
break
default:"function"==typeof e.tab.traps.vm.runtime?.storage?.setProjectToken?e.auth.fetchXToken().then((e=>fetch(`https://api.scratch.mit.edu/projects/${r}`,{headers:{"x-token":e},credentials:"include"}))).then((e=>{if(!e.ok)throw new Error(`HTTP status code ${e.status} returned`)
return e.json()})).catch((e=>t.error(`Fetching default project ${r} 's token failed`,e))).then((t=>{t?.project_token&&e.tab.traps.vm.runtime.storage.setProjectToken(t.project_token),e.tab.traps.vm.downloadProjectId(r)})):e.tab.traps.vm.downloadProjectId(r)}c=0,n=0}else"scratch-gui/project-state/START_LOADING_VM_FILE_UPLOAD"===o.detail.action.type&&(n=1)}))}