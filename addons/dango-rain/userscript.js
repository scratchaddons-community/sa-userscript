let t,e,n,o,a=0
const r=()=>document.createElement("div"),c=r()
c.className="sa-dango-notice"
const d=n=>{if(!n.toLowerCase().includes("dango"))return a&&t&&(t?.remove(),e?.remove(),c?.remove()),void(a=0)
if(!a){a=1,t=r(),t.className="sa-dangos-left"
for(let e=0;20>e;e++){const n=r()
n.className="sa-dango",n.style.left=e%10*10+"%",n.style.animationDelay=`${8*Math.random()}s, ${8*Math.random()}s`,t.append(n)}s(t),e=t.cloneNode(1),e.className="sa-dangos-right",document.querySelector("#content").append(t,e)}},s=t=>{if(!t)return
let e=(document.body.clientWidth-document.querySelector("#profile-data").clientWidth)/2
e-=25,t.style.width=e+"px",n=e>0,n?clearTimeout(o):(clearTimeout(o),o=setTimeout((()=>{c?.remove()}),1e3))}
addEventListener("resize",(()=>{s(t),s(e)}))
export default async function({}){const t=Object.assign(document.createElement("span"),{style:"\n    float: right;\n    cursor:pointer;\n    background-color: #ffffff26;\n    line-height: 10px;\n    width: 10px;\n    text-align: center;\n    padding:5px;\n    border-radius: 50%;",textContent:"x"})
t.onclick=()=>{c.style.display="none",localStorage.setItem("scratchAddonsAprilFoolsModal2021","true")},c.appendChild(t)
const e=document.createElement("span")
e.innerText="",e.style.fontWeight="bold",c.appendChild(e)
const n=document.createElement("span")
n.innerText="",c.appendChild(n)
const o=()=>{if(document.querySelector("textarea[name=bio]"))return`${document.querySelector("textarea[name=bio]").value}/${document.querySelector("textarea[name=status]").value}`
{const t=document.querySelectorAll("p.overview")
return`${t[0].textContent}/${t[1].textContent}`}}
d(o()),document.querySelector("textarea[name=bio]")&&(document.querySelector("textarea[name=bio]").addEventListener("input",(()=>d(o()))),document.querySelector("textarea[name=status]").addEventListener("input",(()=>d(o()))))}