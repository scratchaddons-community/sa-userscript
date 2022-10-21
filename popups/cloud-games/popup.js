import{HTTPError as t}from"../../libraries/common/message-cache.js"
const e=t=>{if(!t)return{}
const e=t.match(/^(?:(?:https?:\/\/scratch\.mit\.edu\/)?(project|studio)s\/)?(\d+)/)
if(!e)return{}
const r=e[1]||"project",s=e[2]
return isNaN(s)?{}:{id:+s,type:r}}
export default async({addon:r,msg:s,safeMsg:o})=>{const i=r.settings.get("displayedGames").map((({url:t})=>t)).map(e)
window.vue=new Vue({el:"body",data:{projects:[],projectsVisible:0,messages:{loadingMsg:s("loading"),noUsersMsg:s("no-users"),addProject:s("add-project"),addProjectDescription:s("add-project-desc"),addStudio:s("add-studio"),addStudioDescription:s("add-studio-desc"),added:s("added"),changeDisplay2:s("change-display-2")},projectsChecked:0,error:null,selectedTabUrl:null,selectedTabId:null,addButtonUsed:0},computed:{projectsSorted(){return this.projects.sort(((t,e)=>t.id===e.id?0:t.id===this.selectedTabId?-1:e.id===this.selectedTabId?1:t.online&&!e.online?-1:e.online&&!t.online?1:t.amt!==e.amt?e.amt-t.amt:e.timestamp-t.timestamp))},errorMessage(){return this.error&&s(this.error)},addButtonType(){if(0===this.projects.length&&"no-projects"!==this.error)return null
if(this.projectsChecked!==this.projects.length)return null
const{id:t,type:r}=e(this.selectedTabUrl)
return!t||this.projects.some((e=>e.id===t))?null:r},clickButtonToAddDisplayMessage(){return s("change-display-open",{buttonName:s(`add-${this.addButtonType}`)})}},methods:{setCloudDataForProject(e,o){return new Promise((i=>{setTimeout((async()=>{const o=()=>{this.projectsChecked++,this.projectsChecked/this.projects.length>.5&&(this.projectsVisible=1),i()}
let n,c=await r.auth.fetchUsername()
try{const r=await fetch(`https://clouddata.scratch.mit.edu/logs?projectid=${e.id}&limit=40&offset=0`)
if(r.status>=400)throw 500>r.status||(e.errorMessage=s("server-error")),t.fromResponse(`Error when fetching cloud data for ${e.id}`,r)
n=await r.json()}catch(t){return console.warn("Error when fetching cloud data",t),e.error=s("fetch-error"),e.errorMessage||(e.errorMessage=String(t)),void o()}const d=Date.now(),a=new Set
e.online=0
for(const t of n){if(d-t.timestamp>6e4)break
t.user===c&&(e.online=1),a.add(t.user)}e.timestamp=n[0]?.timestamp||0,e.amt=a.size,e.users=Array.from(a),o()}),125*o)}))},settingsHTML(){const t=document.createElement("a")
return t.target="_blank",t.href=chrome.runtime.getURL("/webpages/settings/index.html#addon-cloud-games"),t.textContent=s("addon-settings"),o("change-display",{settings:t.outerHTML})},addFromSelectedTab(){this.addButtonUsed=1
const{id:t,type:s}=e(this.selectedTabUrl),o=`https://scratch.mit.edu/${s}s/${t}`
r.popup.changeSettings({displayedGames:[...r.settings.get("displayedGames"),{url:o}]}),setTimeout((()=>location.reload()),1500)}},async created(){let o
document.title=s("popup-title"),r.popup.getSelectedTabUrl().then((t=>{this.selectedTabUrl=t
const{id:r}=e(t)
this.selectedTabId=r}))
try{o=await(async(e,r)=>Promise.all(r.map((async({id:e,type:r})=>{if(!e)return
if("studio"===r)return await(async e=>{let r
try{r=await fetch(`https://api.scratch.mit.edu/studios/${e}/projects/?limit=40`)}catch(e){throw console.warn("Error when fetching studio: ",e),new t(`Error when fetching studio: ${e}`,500)}if(r.status>=400)throw console.warn("Error when fetching studio: ",r.status),t.fromResponse("Error when fetching studio",r)
return r.json().catch((t=>{throw console.warn("Error when fetching studio JSON: ",t),t}))})(e)
let s
try{s=await fetch(`https://api.scratch.mit.edu/projects/${e}`)}catch(t){return console.warn("Error when fetching project: ",t),null}return 400>s.status?s.json().catch((t=>(console.warn("Error when fetching project JSON: ",t),null))):(console.warn("Error when fetching project: ",s.status),null)}))).then((t=>{t=t.flat()
const e=[],r=new Set
for(const s of t)s&&!r.has(s.id)&&(r.add(s.id),e.push(s))
return e})))(0,i)}catch(e){if(e instanceof t){const t=e.code
return void(500>t?400>t||(this.error="general-error"):this.error="server-error")}throw e}0!==o.length?(this.projects=o.map((t=>({title:t.title,id:t.id,amt:0,users:[],online:t.online,extended:1,error:null,errorMessage:""}))).reverse(),await Promise.all(this.projects.map(((t,e)=>this.setCloudDataForProject(t,e))))):this.error="no-projects"}})}
