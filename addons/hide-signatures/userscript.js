export default async function({addon:o,msg:e}){const t=document.querySelectorAll(".blockpost")
for(const n of t){const t=n.querySelector(".postfootright"),c=n.querySelector(".postsignature")
if(!c)continue
const s=document.createElement("li"),d=document.createElement("a")
d.href="#hide",d.innerText=e("hide")
let i=!o.settings.get("hide")
c.style.display=i?"block":"none",d.innerText=e(i?"hide":"show"),d.addEventListener("click",(o=>{o.preventDefault(),o.stopPropagation(),i=!i,c.style.display=i?"block":"none",d.innerText=e(i?"hide":"show")})),o.self.addEventListener("disabled",(()=>{i=1,c.style.display="block",d.innerText=e("hide")})),s.appendChild(d),o.tab.appendToSharedSpace({space:"forumsBeforePostReport",element:s,scope:t,order:9}),o.tab.displayNoneWhileDisabled(s)}}