export default async function({addon:t,msg:o}){async function e(n){if(d)return
if(l[n].fetchedAll)return
l[n].moreButton&&l[n].moreButton.classList.add("mod-mutating"),d=1
const c=await fetch(`https://api.scratch.mit.edu/users/${i}/${n}?offset=${l[n].offset+=28}&limit=28`)
if(!c.ok)return void setTimeout((()=>d=0),1e3)
const a=await c.json(),r=a.map((e=>{const c=Object.assign(document.createElement("div"),{className:"mod-clickable studio-project-tile studio-follower",tabindex:"0",role:"button"}),i=Object.assign(document.createElement("img"),{className:"studio-project-image",src:`https://uploads.scratch.mit.edu/get_image/user/${e.id}_90x90.png`,draggable:0})
c.appendChild(i)
const a=Object.assign(document.createElement("div"),{className:"studio-project-bottom"}),d=Object.assign(document.createElement("div"),{className:"studio-project-title",innerText:e.username,title:e.username})
a.appendChild(d)
const r=Object.assign(document.createElement("div"),{className:"studio-tile-dynamic-add"}),u=Object.assign(document.createElement("img"),{className:"studio-project-add-remove-image",src:t.self.dir+"/add.svg",draggable:0})
r.appendChild(u)
const m=async()=>{r.classList.remove("mod-clickable"),r.classList.add("mod-mutating"),await async function(e){const n=await fetch(`/site-api/users/curators-in/${s.state.studio.id}/invite_curator/?usernames=${e}`,{headers:{"x-csrftoken":t.auth.csrfToken,"x-requested-with":"XMLHttpRequest"},method:"PUT",credentials:"include"})
return await n.body.cancel(),200!==n.status?alert(o("fetch-error")):1}(e.username),r.classList.remove("mod-mutating"),c.classList.add("studio-follower-added"),r.classList.add("studio-tile-dynamic-add"),r.classList.add("studio-tile-dynamic-remove"),u.src=t.self.dir+"/tick.svg",c.removeEventListener("click",m)}
return[...s.state.managers.items,...s.state.curators.items].map((t=>t.username)).includes(e.username)?(r.classList.remove("mod-mutating","studio-tile-dynamic-remove"),c.classList.add("studio-follower-added"),u.src=t.self.dir+"/tick.svg"):c.addEventListener("click",m),a.appendChild(r),c.appendChild(a),l[n].grid.appendChild(c),e.username}))
if(l[n].moreButton&&l[n].moreButton.remove(),28>a.length)l[n].fetchedAll=1
else if("true"!==l[n].grid.parentNode.getAttribute("data-scrollable")){const o=document.createElement("div")
l[n].moreButton=o,l[n].grid.appendChild(o),o.className="studio-grid-load-more"
const c=document.createElement("button")
o.appendChild(c),c.className="button",c.innerText=t.tab.scratchMessage("general.loadMore"),c.addEventListener("click",(t=>{e(n),t.stopPropagation()}))}return d=0,r}function n(t,n){const c=document.createElement("button")
return c.className=n?"active":"",c.innerText=o(t),c.addEventListener("click",(()=>{a!==t&&(l[t].button.classList.add("active"),l[a].button.classList.remove("active"),l[a].gridScrollPosition=l[a].grid.parentElement.scrollTop,l[t].grid.style.display=null,l[t].grid.parentElement.scrollTop=l[t].gridScrollPosition,l[t].activated||(l[t].activated=1,e(t)),l[a].grid.style.display="none",a=t)})),g.appendChild(c),c}function c(){if("curators"===location.pathname.split("/")[3])!async function(){let n=document.getElementById("sa-studio-followers-button")
n?n.classList.remove("hidden"):(n=document.createElement("button"),n.className="button",n.id="sa-studio-followers-button",n.innerText=o("button"),t.tab.displayNoneWhileDisabled(n),n.addEventListener("click",(()=>{r.style.display="none"===r.style.display?null:"none",l[a].activated||(l[a].activated=1,e(a))})),t.tab.appendToSharedSpace({space:"studioCuratorsTab",element:n,order:0}))}()
else{const t=document.getElementById("sa-studio-followers-button")
t&&t.classList.add("hidden")}}const{redux:s}=t.tab
await s.waitForState((t=>"object"==typeof t.session.session?.user))
const i=await t.auth.fetchUsername()
if(await s.waitForState((t=>"FETCHED"===t.studio?.infoStatus&&"FETCHED"===t.studio?.rolesStatus),{actions:["SET_INFO","SET_ROLES"]}),!s.state.studio.manager&&(s.state.studio.host||s.state.studio.owner)!==s.state.session.session?.user?.id)return
const l={followers:{offset:-28,activated:0,grid:null,gridScrollPosition:0,moreButton:null,fetchedAll:0,button:null},following:{offset:-28,activated:0,grid:null,gridScrollPosition:0,moreButton:null,fetchedAll:0,button:null}}
let a="followers",d=0
const{backdrop:r,container:u,content:m,closeButton:f,close:b}=t.tab.createModal(o("modal-title"),{useSizesClass:0})
u.classList.add("user-projects-modal","sa-followers-main"),m.classList.add("user-projects-modal-content"),u.querySelector(".modal-header").classList.add("user-projects-modal-title"),r.addEventListener("click",b),f.addEventListener("click",b)
const g=document.createElement("div")
g.className="sub-nav user-projects-modal-nav sub-nav-align-left",l.followers.button=n("followers",1),l.following.button=n("following",0),m.parentElement.insertBefore(g,m)
const v=l.followers.grid=document.createElement("div")
v.className="user-projects-modal-grid sa-followers-modal-grid"
const p=l.following.grid=document.createElement("div")
p.className="user-projects-modal-grid sa-followers-modal-grid",p.style.display="none",m.appendChild(v),m.appendChild(p)
const w=document.createElement("div")
w.className="studio-projects-done-row"
const j=document.createElement("button")
j.className="button",j.innerText=t.tab.scratchMessage("general.done"),j.addEventListener("click",b),w.appendChild(j),m.parentElement.appendChild(w),t.tab.addEventListener("urlChange",c)
const h=l.followers.grid.parentNode
h.addEventListener("scroll",(()=>{const t=Array.from(l[a].grid.childNodes);(function(t,o){const{bottom:e,height:n,top:c}=t.getBoundingClientRect(),s=o.getBoundingClientRect()
return c>s.top?n>=e-s.bottom:n>=s.top-c})(t[t.length-1],h)&&"true"===h.getAttribute("data-scrollable")&&e(a)}),{passive:1}),t.self.addEventListener("disabled",(()=>b())),c()}