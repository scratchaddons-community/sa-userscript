export default async function({msg:t}){let e=document.querySelectorAll(".activity-stream li")
if(e.length){let c=document.querySelector(".activity-stream").appendChild(document.createElement("div"))
c.classList.add("load-more-wibd-container"),c.style.display="none"
let i=c.appendChild(document.createElement("button"))
i.classList.add("load-more-wibd"),i.innerText=t("load-more")
let n=6
i.addEventListener("click",(function(){i.style.visibility="hidden",fetch(`\n        https://scratch.mit.edu/messages/ajax/user-activity/?user=${Scratch.INIT_DATA.PROFILE.model.id}&max=1000000`).then((t=>t.text())).then((t=>{let c=(new DOMParser).parseFromString(t,"text/html")
const a=function(){let t=document.querySelector(".activity-stream").scrollTop
c.querySelectorAll("ul > li").forEach(((t,c)=>{c>n&&n+6>c&&e[e.length-1].append(t)})),n+=6,document.querySelector(".activity-stream").scrollTop=t,n<c.querySelectorAll("ul > li").length||i.remove()}
a(),i.style.visibility="visible",i.addEventListener("click",a)}))}),{once:1})}}