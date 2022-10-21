export default async({addon:e,msg:t})=>{const{redux:n}=e.tab
await n.waitForState((e=>"FETCHED"===e.studio?.infoStatus&&"FETCHED"===e.studio?.rolesStatus),{actions:["SET_INFO","SET_ROLES"]})
const o=n.state.studio.id
let a=0,s=0,r=0,c=0
const d=()=>{a=(n.state.studio.host||n.state.studio.owner)===n.state.session.session?.user?.id,s=n.state.studio.manager||a,r=n.state.studio.curator,c=(r||s)&&!a}
d()
const i=(n,o,a,s)=>{const r=s&&s(),c=document.createElement("div")
c.className="studio-adder-section",e.tab.displayNoneWhileDisabled(c)
const d=document.createElement("h3"),i=document.createElement("span")
i.textContent=t(n),d.appendChild(i),c.appendChild(d)
const u=document.createElement("div")
u.className="studio-adder-row"
const l=document.createElement("input")
l.type="text",l.placeholder=e.tab.scratchMessage("studio.inviteCuratorPlaceholder"),u.appendChild(l)
const m=document.createElement("button")
m.className="button",m.title=t("added-by")
const b=document.createElement("span")
return b.textContent=t(o),m.addEventListener("click",(()=>{l.setAttribute("disabled",1),a(l.value.trim()),l.removeAttribute("disabled")})),r&&(l.setAttribute("disabled",1),m.setAttribute("disabled",1),l.title=r),m.appendChild(b),u.appendChild(m),c.appendChild(u),c},u=(e,n)=>{let o=""
switch(500>e.status?300>e.status||(o="unknown-error"):o="server-down",e.status){case 404:o="not-curator"
break
case 401:case 403:o="401"
break
case 400:if("too many owners"===n?.message){o="too-many-managers"
break}}return o?(alert(t(o)),0):1}
let l=null,m=null,b=null
const w=()=>{l?.remove(),m?.remove(),b?.remove()
const a=location.pathname.split("/")[3]
if(s&&"curators"===a&&(m=i("promote-new","promote-btn",(async n=>{if(!/^[\w-]{3,20}$/g.test(n))return alert(t("invalid-username"))
const a=await fetch(`/site-api/users/curators-in/${o}/promote/?usernames=${n}`,{method:"PUT",credentials:"include",headers:{"X-CSRFToken":e.auth.csrfToken}})
let s=await a.text()
try{s=JSON.parse(s)}catch(e){}u(a,s)&&(alert(t("promoted",{username:n})),location.reload())}),(()=>40>n.state.studio.managers?null:t("max-managers-reached",{max:40}))),b=i("remove-new","remove-btn",(async n=>{if(!/^[\w-]{3,20}$/g.test(n))return alert(t("invalid-username"))
const a=await fetch(`/site-api/users/curators-in/${o}/remove/?usernames=${n}`,{method:"PUT",credentials:"include",headers:{"X-CSRFToken":e.auth.csrfToken}})
u(a)&&(alert(t("removed",{username:n})),location.reload())})),e.tab.appendToSharedSpace({space:"studioCuratorsTab",element:m,order:1}),e.tab.appendToSharedSpace({space:"studioCuratorsTab",element:b,order:2})),c){l=document.createElement("div"),l.className="studio-info-section sa-leave-section"
let n=document.createElement("button")
n.className="button sa-leave-button",n.title=t("added-by"),l.appendChild(n)
const a=document.createElement("span")
a.textContent=t("leave-new"),n.appendChild(a),n.addEventListener("click",(async()=>{if(!await e.tab.confirm(t("leave-new"),t("leave-confirm")))return
const n=await e.auth.fetchUsername(),a=await fetch(`/site-api/users/curators-in/${o}/remove/?usernames=${n}`,{method:"PUT",credentials:"include",headers:{"X-CSRFToken":e.auth.csrfToken}})
u(a)&&location.reload()}))
const s=document.querySelector(".studio-info"),r=document.querySelector(".studio-follow-button")
s.insertBefore(l,r.parentNode.nextSibling),e.tab.displayNoneWhileDisabled(l)}}
w(),e.tab.addEventListener("urlChange",w),n.initialize(),n.addEventListener("statechanged",(e=>{("SET_ROLES"===e.detail.action.type||"SET_INFO"===e.detail.action.type&&(e.detail.action.info.host||e.detail.action.info.owner))&&(d(),w())}))}
