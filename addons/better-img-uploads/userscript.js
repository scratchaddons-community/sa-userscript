export default async function({addon:t,msg:e}){async function n(t,e){let n=e,a=t.target,s=Array.from(a.files),r=new Array
for(let c of s){if(c.type.includes("svg")){r.push(c)
continue}let u=await new Promise((t=>{let e=new FileReader
e.addEventListener("load",(()=>t(e.result))),e.readAsDataURL(c)})),m=new Image
m.src=u,await new Promise((t=>{m.onload=t}))
let d={width:m.width,height:m.height}
const g=JSON.parse(JSON.stringify(d))
function l(t,e){const n=479,i=360
if(n>=t&&i>=e)return{width:t,height:e}
if(n>=t&&i>=e)return{width:t,height:e}
const o=t/e
return 1.3305555555555555>o?{width:Math.floor(i*o),height:i}:{width:n,height:Math.floor(n/o)}}"fit"===o?d=l(d.width,d.height):"fill"===o&&(d.height=d.height/d.width*480,d.width=480,360>d.height&&(d.width=d.width/d.height*360,d.height=360),480>d.width&&(d.height=d.height/d.width*480,d.width=480)),r.push(new File([`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewbox="0,0,${d.width},${d.height}" width="${d.width}" height="${d.height}">\n        <g>\n          <g\n              data-paper-data='{"isPaintingLayer":true}'\n              fill="none"\n              fill-rule="nonzero"\n              stroke="none"\n              stroke-width="0.5"\n              stroke-linecap="butt"\n              stroke-linejoin="miter"\n              stroke-miterlimit="10"\n              stroke-dasharray=""\n              stroke-dashoffset="0"\n              style="mix-blend-mode: normal;"\n          >\n            <image\n                width="${g.width}"\n                height="${g.height}"\n\t\t\t\ttransform="scale(${d.width/g.width},${d.height/g.height})"\n                xlink:href="${u}"\n            />\n          </g>\n        </g>\n      </svg>`],`${c.name.replace(/(.*)\..*/,"$1")}.svg`,{type:"image/svg+xml"}))}(a=document.getElementById(n).nextElementSibling.querySelector("input")).files=new i(r),a.dispatchEvent(new t.constructor(t.type,t))}function i(t=[]){let e=new DataTransfer
for(let n of t)e.items.add(n)
return e.files}let o=t.settings.get("fitting")
t.settings.addEventListener("change",(()=>{o=t.settings.get("fitting")}))
const a=(n,i)=>{const o=e("upload"),a=Object.assign(document.createElement("div"),{id:n}),s=Object.assign(document.createElement("button"),{className:`${t.tab.scratchClass("action-menu_button")} ${t.tab.scratchClass("action-menu_more-button")} sa-better-img-uploads-btn`,currentitem:"false"})
s.dataset.for=`sa-${n}-HD Upload`,s.dataset.tip=o
const r=Object.assign(document.createElement("img"),{className:`${t.tab.scratchClass("action-menu_more-icon")} sa-better-img-uploader`,draggable:"false",src:`${t.self.dir}/icon.svg`,height:"10",width:"10"})
s.append(r)
const l=Object.assign(document.createElement("input"),{accept:".svg, .png, .bmp, .jpg, .jpeg",className:`${t.tab.scratchClass("action-menu_file-input")} sa-better-img-uploads-input`,multiple:"true",type:"file"})
s.append(l),a.append(s)
const c=Object.assign(document.createElement("div"),{className:`__react_component_tooltip place-${i?"left":"right"} type-dark ${t.tab.scratchClass("action-menu_tooltip")} sa-better-img-uploads-tooltip`,id:`sa-${n}-HD Upload`,textContent:o})
return c.dataset.id="tooltip",a.append(c),t.tab.displayNoneWhileDisabled(a),[a,s,l,c]}
for(;;){let r=await t.tab.waitForElement('[class*="sprite-selector_sprite-selector_"] [class*="action-menu_more-buttons_"], [data-tabs] > :nth-child(3) [class*="action-menu_more-buttons_"]',{markAsSeen:1}),l=r.parentElement.previousElementSibling.previousElementSibling,c=l.getAttribute("aria-label").replace(/\s+/g,"_"),u=l.parentElement.classList.contains(t.tab.scratchClass("sprite-selector_add-button"))||l.parentElement.classList.contains(t.tab.scratchClass("stage-selector_add-button"))
u&&(c+="_right")
const[m,d,g,h]=a(c,u)
function s(t,e,n,i){let o=n.getBoundingClientRect()
h.style.top=o.top+2+"px",h.style[i?"right":"left"]=i?window.innerWidth-o.right+o.width+10+"px":o.left+o.width+"px"}r.prepend(m),d.addEventListener("click",(()=>{g.files=new i,g.click()})),g.addEventListener("change",(t=>{n(t,c)})),new MutationObserver((()=>s(0,0,m,u))).observe(r,{attributes:1,subtree:1})}}