export default async function({addon:t,msg:a}){if(await t.tab.waitForElement(".activity-ul li"),document.querySelectorAll(".activity-ul li").length){let e=document.querySelector(".activity-ul").appendChild(document.createElement("div"))
e.classList.add("load-more-wh-container"),e.style.display="none"
let n=e.appendChild(document.createElement("button"))
n.className="load-more-wh button",n.innerText=a("load-more")
let o=5,c=[],l=[]
async function i(){c.length&&(l=c.slice(0,!t.self.disabled&&t.settings.get("whathappen")?o:5),await t.tab.redux.dispatch({type:"SET_ROWS",rowType:"activity",rows:l}),document.querySelector(".activity-ul").appendChild(e),o>c.length&&e.remove())}n.addEventListener("click",(async function(){if(o+=5,o>c.length){const a=await t.auth.fetchUsername(),i=await t.auth.fetchXToken()
await fetch(`\n          https://api.scratch.mit.edu/users/${a}/following/users/activity?limit=40&offset=${40*Math.floor(o/40)}`,{headers:{"X-Token":i}}).then((t=>t.json())).then((t=>{t.filter((t=>void 0===c.find((a=>a.id===t.id)))).forEach((t=>c.push(t)))}))}i()})),t.self.addEventListener("disabled",i),t.self.addEventListener("reenabled",i),t.settings.addEventListener("change",i)}}