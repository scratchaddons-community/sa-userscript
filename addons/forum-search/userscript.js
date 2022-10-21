function t(t){const e=(new DOMParser).parseFromString(t,"text/html"),o=t=>{if(!(t instanceof Element))return
const e=u[t.tagName]
if(!e)throw new m(`forum-search: Warning: Potential XSS attempt found: ${t.tagName} is not allowed`);[].forEach.call(t.attributes,(o=>{if(!e.includes(o.name))throw new m(`forum-search: Warning: Potential XSS attempt found: ${o.name} is not allowed for ${t.tagName}`)
if("href"===o.name&&"https:"!==t.protocol&&"http:"!==t.protocol)throw new m(`forum-search: Warning: Potential XSS attempt found: protocol ${t.protocol} is not allowed`)})),[].forEach.call(t.children,o)}
try{[].forEach.call(e.body.children,o)}catch(t){if(!(t instanceof m))throw t
return console.warn(t.message),[document.createTextNode(e.body.innerHTML)]}return e.body.cloneNode(1).childNodes}function e(t,e,c,r){for(t.classList.add("show");t.firstChild;)t.removeChild(t.firstChild)
n=e,o(t,e,0,c,r)}function o(o,n,u,m,a){if(50*u>s)return 0
c=1
let l=document.createTextNode(a("loading"))
r=u,o.appendChild(l),window.fetch(`https://scratchdb.lefty.one/v3/forum/search?q=${encodeURIComponent(n)}&page=${u}&o=${m}`).catch((()=>{o.removeChild(o.lastChild),o.appendChild(document.createTextNode(a("error")))})).then((t=>t.json())).then((n=>{if(s=n.hits,0===s)return o.removeChild(o.lastChild),void o.appendChild(document.createTextNode(a("none")))
o.removeChild(o.lastChild)
for(let m of n.posts){function r(t,e,o){let n=document.createElement("span")
n.classList=e,n.appendChild(document.createTextNode(t))
for(let t=0;o>t;t++)n.appendChild(document.createElement("br"))
return n}function u(t){let e=document.createElement("div"),o=document.createElement("strong")
return e.appendChild(o),o.innerText=t,e}let l=document.createElement("div")
l.classList="blockpost roweven firstpost"
let i=document.createElement("div")
i.classList=["box"],l.appendChild(i)
let f=document.createElement("div")
f.classList=["box-head"],i.appendChild(f)
let h=document.createElement("a")
h.setAttribute("href",`https://scratch.mit.edu/discuss/post/${m.id}`),h.appendChild(document.createTextNode(`${m.topic.category} » ${m.topic.title}`)),f.appendChild(h)
let p=document.createElement("span")
p.classList="conr"
const w=scratchAddons.l10n.datetime(new Date(m.time.posted))
p.appendChild(document.createTextNode(w)),f.appendChild(p)
let b=document.createElement("div")
b.classList="box-content",i.appendChild(b)
let v=document.createElement("div")
v.classList="postleft",b.appendChild(v)
let g=document.createElement("dl")
v.appendChild(g),g.appendChild(u(a("username")))
let y=document.createElement("a")
if(y.setAttribute("href",`https://scratch.mit.edu/users/${m.username}`),y.appendChild(document.createTextNode(m.username)),g.appendChild(y),g.appendChild(document.createElement("br")),g.appendChild(document.createElement("br")),""!==d){let D=document.createElement("a")
D.appendChild(document.createTextNode(a("posts-here"))),D.addEventListener("click",(()=>{document.getElementById("forum-search-input").value=`+username:"${m.username}" ${d}`,e(document.getElementById("forum-search-list"),document.getElementById("forum-search-input").value,document.getElementById("forum-search-dropdown").value,a)})),g.appendChild(D),g.appendChild(document.createElement("br"))}let k=document.createElement("a")
k.appendChild(document.createTextNode(a("posts-sitewide"))),k.addEventListener("click",(()=>{document.getElementById("forum-search-input").value=`+username:"${m.username}"`,e(document.getElementById("forum-search-list"),document.getElementById("forum-search-input").value,document.getElementById("forum-search-dropdown").value,a)})),g.appendChild(k),g.appendChild(document.createElement("br")),g.appendChild(document.createElement("br")),g.appendChild(u(a("first-checked"))),g.appendChild(r(scratchAddons.l10n.datetime(new Date(m.time.first_checked)),"",2)),g.appendChild(u(a("last-checked"))),g.appendChild(r(scratchAddons.l10n.datetime(new Date(m.time.html_last_checked)),"",2))
let x=document.createElement("div")
x.classList="postright",b.appendChild(x)
let P=document.createElement("div")
P.classList="postmsg",x.appendChild(P)
let S=document.createElement("div")
if(S.classList="post_body_html",S.append(...t(m.content.html)),P.appendChild(S),m.editor){let E=document.createElement("p")
E.classList="postedit"
let I=document.createElement("em")
I.classList="posteditmessage",I.appendChild(document.createTextNode(a("last-edited-by",{username:m.editor,datetime:scratchAddons.l10n.datetime(new Date(m.time.edited))}))),E.appendChild(I),P.appendChild(E)}let A=document.createElement("div")
A.classList="clearer",b.appendChild(A),o.appendChild(l)}scratchblocks.renderMatching(".forum-search-list pre.blocks"),c=0}))}let n,c=0,r=0,s=1e4,d=""
const u={A:["href"],BR:[],BLOCKQUOTE:[],DIV:["class","style"],IMG:["src"],LI:[],OL:["style"],P:["class"],PRE:["class"],SPAN:["class","style"],UL:[]}
class m extends Error{}export default async function({addon:t,msg:s}){window.scratchAddons._scratchblocks3Enabled||(window.scratchblocks=(await import(t.self.lib+"/thirdparty/cs/scratchblocks.min.es.js")).default)
let u=document.createElement("form")
t.tab.displayNoneWhileDisabled(u,{display:"flex"}),u.id="forum-search-form"
let m=document.createElement("input")
m.id="forum-search-input",m.setAttribute("type","text")
let a=window.location.pathname.split("/"),l=s("placeholder")
if("settings"!==a[2])switch(a.length){case 5:{let t=document.getElementsByClassName("linkst")[0].getElementsByTagName("li")[2].innerText.substring(2).trim()
d=` +topic:${a[3]}`,l=s("search-topic",{topic:t})
break}case 4:{let t=document.getElementsByClassName("box-head")[1].getElementsByTagName("span")[0].textContent
d=` +category:"${t}"`,l=s("search-cat",{cat:t})
break}}m.setAttribute("placeholder",l),u.appendChild(m)
let i=document.createElement("select")
i.id="forum-search-dropdown"
let f=["relevance","newest","oldest"]
for(let t of f){let e=document.createElement("option")
e.value=t,e.appendChild(document.createTextNode(s(t))),i.appendChild(e)}u.appendChild(i)
let h=document.createElement("div")
h.addEventListener("scroll",(t=>{let e=t.target
e.scrollHeight-e.scrollTop===e.clientHeight&&(c||o(h,n,r+1,"relevance",s))})),h.classList="forum-search-list",h.id="forum-search-list",h.style.display="none"
let p=document.querySelector("#brdmenu")
p.after(h),p.after(u),u.addEventListener("submit",(t=>{e(h,m.value+d,i.value,s),t.preventDefault()})),i.addEventListener("change",(()=>{""!==m.value&&e(h,m.value+d,i.value,s)}))}