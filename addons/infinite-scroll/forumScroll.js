export default async function({console:t,msg:e}){let o,n,c=document.getElementById("vf")
c&&(o=document.createElement("tr"),n=document.createElement("th"),n.className="tcl",n.scope="col",n.colSpan=4,o.appendChild(n))
let l=1,a=0
const d=()=>{if(window.scrollY+window.innerHeight>=document.getElementById("djangobbindex").offsetHeight-document.getElementById("footer").offsetHeight&&!a){let d
if(a=1,l++,location.search){let t=location.search.replace(/(&|\?)page=[0-9]+/,"")
d=`https://scratch.mit.edu${location.pathname}${t}&page=${l}`}else d=`https://scratch.mit.edu${location.pathname}?page=${l}`
window.fetch(d).catch((()=>{t.log("Unable to fetch the page!")})).then((t=>t.text())).then((t=>{let d,i,s=(new DOMParser).parseFromString(t,"text/html")
c?(d=c.getElementsByTagName("tbody")[0],i=s.getElementById("vf").getElementsByTagName("tr"),n.textContent=e("page-num",{page:l}),d.appendChild(o.cloneNode(1))):(d=document.getElementById("djangobbindex"),i=s.getElementById("djangobbindex").getElementsByClassName("blockpost"))
const p=Array.from(i)
for(let t=1;p.length>t;t++)if(c)d.appendChild(p[t])
else{let e=d.querySelector(".linksb")
e||(e=d.querySelector(".postlinksb")),d.insertBefore(p[t],e)}a=0}))}}
window.addEventListener("scroll",(()=>d()),{passive:1}),d()}