export default async function({addon:t,msg:n}){async function o(n){let o=document.querySelector(".my-ocular-span"),e=document.querySelector(".my-ocular-dot")
"others"===t.settings.get("show-status")&&a===await t.auth.fetchUsername()||0==t.settings.get("profile")||1==n?(o.style.display="none",e.style.display="none"):(o.style.display="inline-block",e.style.display="inline-block")}const a=document.querySelector("#profile-data > div.box-head > div > h2").innerText?.split("#")[0]
let e=document.querySelector(".location"),i=await async function(t){const n=await fetch(`https://my-ocular.jeffalo.net/api/user/${t}`),o=await n.json()
return{userStatus:o.status?.replace(/\n/g," "),color:o.color}}(a)
if(t.settings.addEventListener("change",o),t.self.addEventListener("disabled",(()=>o(1))),t.self.addEventListener("reenabled",(()=>o())),"string"!=typeof i.userStatus)return
let l=document.createElement("span")
l.title=n("status-hover"),l.innerText=i.userStatus,l.style.fontStyle="italic",l.style.setProperty("display","inline-block","important"),l.id="my-ocular-span"
let c=document.createElement("span")
c.title=n("status-hover"),c.classList.add("my-ocular-dot"),c.style.setProperty("display","inline-block","important"),c.style.backgroundColor=i.color
let s=document.createElement("span")
s.id="my-ocular-old-location",s.innerText=e.innerText,s.fontStyle="italic",e.innerText="","others"===t.settings.get("show-status")&&a===await t.auth.fetchUsername()&&(c.style.display="none",l.style.display="none"),e.appendChild(s),e.appendChild(l),e.appendChild(c)}