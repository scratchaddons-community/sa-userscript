export default async function({}){function e(e,t,n,o){document.documentElement.style.setProperty("--featured-thumb",`url("${e}")`)
let r=document.querySelector("#profile-data .box-head")
""!==t&&(document.querySelector(".user-content .player .title a").innerText.replace(/\s/g,"").length>0&&(r.appendChild(document.createElement("div")).setAttribute("id","better-featured-project-name"),document.querySelector("#better-featured-project-name").appendChild(document.createElement("h2")),document.querySelector("#better-featured-project-name").appendChild(document.createElement("h3")),document.querySelector("#better-featured-project-name h2").innerText=n,document.querySelector("#better-featured-project-name h3").innerText=o),null!==document.querySelector('#featured-project [data-control="edit"]')&&(r.appendChild(document.createElement("div")).setAttribute("class","buttons"),document.querySelector("#profile-data .box-head .buttons").appendChild(document.createElement("button")).setAttribute("id","better-change-featured-project"),document.querySelector("#better-change-featured-project").innerText=document.querySelector('#featured-project [data-control="edit"]').innerText,document.querySelector("#better-change-featured-project").addEventListener("click",(function(){document.querySelector('#featured-project [data-control="edit"]').click()
let e=0
var t=setInterval((function(){e++,null!==document.querySelector("#featured-project-modal")?(clearInterval(t),document.querySelector("#featured-project-modal .btn.blue.btn-primary").addEventListener("click",(function(){let e=0,t=document.querySelector("#featured-project").href
var n=setInterval((function(){e++,e>1e3&&clearInterval(n),t!==document.querySelector("#featured-project").href&&(clearInterval(n),document.documentElement.style.setProperty("--featured-thumb",'url("")'),location.reload())}),10)}))):e>1e3&&clearInterval(t)}),10)}))),r.insertAdjacentElement("afterbegin",document.createElement("a")).setAttribute("id","better-featured-project-overlay"),document.querySelector("#better-featured-project-overlay").href=t),document.querySelector(".profile-details .location").insertAdjacentText("beforebegin",`(${document.querySelector(".profile-details span:nth-child(2)").title})`)}null!==document.querySelector(".user-content .stage")?e(document.querySelector(".user-content .stage img").src.replace(/[0-9]+x[0-9]+/,"480x360"),document.querySelector(".user-content .stage a").href,document.querySelector(".featured-project-heading").innerText,document.querySelector(".user-content .player .title a").innerText):null!==document.querySelector("#profile-avatar img")&&e(document.querySelector("#profile-avatar img").src,"","","")}