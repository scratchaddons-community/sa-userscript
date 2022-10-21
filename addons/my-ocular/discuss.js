export default async function({addon:t,msg:n}){async function o(t){const n=await fetch(`https://my-ocular.jeffalo.net/api/user/${t}`),o=await n.json()
return{userStatus:o.status?.replace(/\n/g," "),color:o.color}}let e=document.querySelectorAll(".blockpost"),s=Object.create(null)
for(const a of e){let e=a.querySelector(".username").innerText,c=a.querySelector(".postleft").children[0]
const{userStatus:l,color:u}=await(s[e]||(s[e]=o(e)))
if("string"!=typeof l)continue
let i=document.createElement("br")
t.tab.displayNoneWhileDisabled(i)
let r=document.createElement("span")
t.tab.displayNoneWhileDisabled(r),r.title=n("status-hover"),r.innerText=l,r.style.fontStyle="italic",t.tab.displayNoneWhileDisabled(r,{display:"inline-block"})
let f=document.createElement("span")
t.tab.displayNoneWhileDisabled(f,{display:"inline-block"}),f.title=n("status-hover"),f.className="my-ocular-dot",f.style.backgroundColor=u,"others"===t.settings.get("show-status")&&e===await t.auth.fetchUsername()&&(r.style.display="none",f.style.display="none"),c.appendChild(i),c.appendChild(r),u&&c.appendChild(f)}t.settings.addEventListener("change",(async function(){for(const n of e){let o=n.querySelector(".postleft").children[0],e=o.querySelector(".username").innerText,s=o.querySelector("span"),a=n.querySelector(".my-ocular-dot"),c="others"===t.settings.get("show-status")&&e===await t.auth.fetchUsername()
e&&a&&(c||0==t.settings.get("discuss")?(s.style.display="none",a.style.display="none"):(s.style.display="inline-block",a.style.display="inline-block"))}}))}