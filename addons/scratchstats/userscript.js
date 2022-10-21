function t(t,o){const s=document.createElement("div"),e=document.createElement("div")
s.appendChild(e),e.className="sa-stats-number",e.innerText=t
const a=document.createElement("div")
return s.appendChild(a),a.innerText=o,s}function o(o,s,e){const a=s(o)
return t(void 0!==a?`#${a.toLocaleString()}`:"?",e)}function s(o,s,e,a){const n=s(o),c=void 0!==n?`#${n.toLocaleString()}`:"?",r=e(o)
return t(`${c} (${void 0!==r?`#${r.toLocaleString()}`:"?"})`,a)}export default async function({addon:e,msg:a}){const n=(e,{data:n,loading:c,error:r}={})=>{for(e.className="sa-stats-section "+(c||r?"sa-stats-placeholder":"");e.firstChild;)e.firstChild.remove()
const i=document.createElement("div")
e.appendChild(i),i.className="sa-stats-row",i.appendChild(function(o,s,e){const a=(t=>t?.statistics?.followers)(o)
return t(void 0!==a?a.toLocaleString():"?",e)}(n,0,a("followers"))),i.appendChild(o(n,(t=>t?.statistics?.ranks?.followers),a("most-followed-global"))),i.appendChild(o(n,(t=>t?.statistics?.ranks?.country?.followers),a("most-followed-location")))
const d=document.createElement("div")
e.appendChild(d),d.className="sa-stats-row",d.appendChild(s(n,(t=>t?.statistics?.ranks?.loves),(t=>t?.statistics?.ranks?.country?.loves),a("most-loves"))),d.appendChild(s(n,(t=>t?.statistics?.ranks?.favorites),(t=>t?.statistics?.ranks?.country?.favorites),a("most-favorites"))),d.appendChild(s(n,(t=>t?.statistics?.ranks?.views),(t=>t?.statistics?.ranks?.country?.views),a("most-views"))),c&&e.appendChild(Object.assign(document.createElement("div"),{className:"sa-spinner"})),r&&e.appendChild(Object.assign(document.createElement("div"),{className:"sa-stats-error",innerText:a("err")}))},c=location.pathname.split("/")[2]
if(!c)return
const r=await e.tab.waitForElement("#content"),i=await e.tab.waitForElement("#content > .box:not(#profile-data):not(.slider-carousel-container):not(#page-404)"),d=document.createElement("div")
r.insertBefore(d,i),e.tab.displayNoneWhileDisabled(d,{display:"block"}),d.className="box sa-stats slider-carousel-container"
const l=document.createElement("div")
d.appendChild(l),l.className="box-head"
const u=document.createElement("h4")
l.appendChild(u),u.innerText=a("title")
const m=document.createElement("a")
l.appendChild(m),m.innerText=a("view-more"),m.href="https://scratchstats.com/"+c
const h=document.createElement("img")
m.insertBefore(h,m.firstChild),h.src=e.self.dir+"/scratchstats.png"
const v=document.createElement("div")
d.appendChild(v),v.className="box-content"
const f=document.createElement("div")
v.appendChild(f),n(f,{loading:1})
const p=Object.assign(document.createElement("div"),{className:"sa-chart-section"})
v.appendChild(p)
const b=Object.assign(document.createElement("div"),{className:"sa-spinner"})
p.appendChild(b),fetch(`https://scratchdb.lefty.one/v3/user/info/${c}`).then((async function(t){const o=await t.json()
n(f,{data:o})})).catch((()=>n(f,{error:1}))),fetch(`https://scratchdb.lefty.one/v3/user/graph/${c}/followers?range=364&segment=6`).then((async t=>{const o=await t.json()
if(0===o.length)throw new Error("scratchstats: No history data")
b.remove(),await e.tab.loadScript(e.self.lib+"/thirdparty/cs/chart.min.js")
const s=document.createElement("canvas")
p.appendChild(s),s.id="sa-scratchstats-chart"
const n="#575e75",c="rgba(0, 0, 0, 0.1)",r=o.reduce(((t,s)=>t+s.value/o.length),0),i=Math.log10(r),d=Math.pow(10,Math.max(Math.round(i)-1,1))
new Chart(s,{type:"scatter",data:{datasets:[{data:o.map((t=>({x:Date.parse(t.date),y:t.value}))),fill:0,showLine:1,borderColor:"#4d97ff",lineTension:0}]},options:{responsive:1,maintainAspectRatio:0,scales:{x:{ticks:{callback(t){return new Date(t).toDateString()},color:n},grid:{borderColor:n,tickColor:n,color:c}},y:{ticks:{stepSize:d,color:n},grid:{borderColor:n,tickColor:n,color:c}}},plugins:{title:{display:1,text:a("followers-title"),color:n},tooltip:{callbacks:{label(t){return`${new Date(Number(t.raw.x)).toDateString()}: ${t.parsed.y}`}}},legend:{display:0}}}})})).catch((()=>{b.remove(),p.classList.add("sa-stats-placeholder"),p.appendChild(Object.assign(document.createElement("div"),{className:"sa-stats-error",innerText:a("err-chart")}))}))}