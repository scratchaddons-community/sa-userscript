export default async function({addon:t}){function e(t,e={}){const n={...e,languages:c,style:"scratch3",read:scratchblocks.read,parse:scratchblocks.parse,render:scratchblocks.render,document:e.doc||document}
Array.from(n.document.querySelectorAll(t)).forEach((t=>{if(t.classList.contains("rendered"))return
let e=t.innerText.replace(/<br>\s?|\n|\r\n|\r/gi,"\n"),c=n.parse(e,n),a=n.render(c,n)
!function(t){t.classList.contains("scaled")||(t.setAttribute("width",.75*t.getAttribute("width")),t.setAttribute("height",.75*t.getAttribute("height")),t.classList.add("scaled"))}(a)
let s=n.document.createElement("div")
s.className="scratchblocks3",s.appendChild(a),t.innerHTML="",t.classList.add("rendered"),t.appendChild(s)}))}window.scratchAddons._scratchblocks3Enabled=1
let c=["en"];(await t.tab.waitForElement("script[src$='scratchblocks.js']")).remove()
const[n,a]=await Promise.all([import(t.self.lib+"/thirdparty/cs/scratchblocks.min.es.js").then((t=>t.default)),import(t.self.lib+"/thirdparty/cs/translations-all-es.js").then((t=>t.default))])
window.scratchblocks=n,a(n),window.scratchblocks.renderMatching=e
const scratchblocks=Object.freeze(window.scratchblocks)
Object.defineProperty(window,"scratchblocks",{value:{...scratchblocks,replace(){},sa:1},writable:0}),await new Promise((t=>{"loading"!==document.readyState?t():window.addEventListener("DOMContentLoaded",t,{once:1})})),c=await async function(t){const e={13:"de",14:"es",15:"fr",17:"pl",18:"ja",19:"nl",20:"pt",21:"it",22:"he",23:"ko",24:"nb",25:"tr",26:"el",27:"ru",33:"ca",36:"id",59:"fa"}
if("settings"===location.pathname.split("/")[2])return["en"]
const c=await t.tab.waitForElement(".linkst li:nth-child(2) a"),n=/\d+/.exec(c.href)[0]
let a=["en"]
return e[n]&&(a=Array.isArray(e[n])?a.concat(e[n]):["en",e[n]]),a}(t)
const s=document.querySelectorAll("pre.blocks")
s.length>0&&await t.tab.waitForElement("pre.blocks[data-original]"),s.forEach((t=>{t.classList.remove("blocks"),t.classList.add("blocks3"),t.innerHTML="",t.innerText=t.getAttribute("data-original")})),e(".blockpost pre.blocks3"),await t.tab.waitForElement(".scratchblocks-button")
let o=0
for(;;){const c=await t.tab.waitForElement(".scratchblocks-button ul a[title]",{markAsSeen:1})
setTimeout((()=>{if(c.firstElementChild&&c.firstElementChild.classList.contains("scratchblocks"))c.firstElementChild.remove()
else if(c.firstElementChild&&c.firstElementChild.classList.contains("scratchblocks3"))return
c.innerHTML="",c.textContent=c.title,c.id=c.id||"block-"+ ++o,e(`#${c.id}`)}),200)}}