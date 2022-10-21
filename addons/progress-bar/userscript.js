export default async function({addon:t,msg:s}){function e(t){0>t&&(t=0),t>1&&(t=1),a?(u.style.width=10+90*t+"%",1===t?(c.style.opacity="0",clearTimeout(f),f=setTimeout(r,500)):c.style.opacity="1"):(u.style.width=100*t+"%",m===p&&(b.innerText=s("loading-assets",{loaded:l,loading:g}))),1===t&&(m=d,a||R.disconnect())}function n(s){m!==s&&(m=s,e(0),i(),async function(){a||(await t.tab.waitForElement("body"),i(),R.observe(document.body,{childList:1,subtree:1}))}(),g=0,l=0)}function o(){e(l/g)}function r(){u.style.width="0"}function i(){if(document.querySelector(".u-progress-bar-outer"))return
const t=document.querySelector('[class^="loader_message-container-outer"]')
if(t)return t.hidden=1,t.parentElement.appendChild(b),void t.parentElement.appendChild(c)
const s=document.querySelector('[class^="inline-message_spinner"]')
if(s)return void s.parentElement.querySelector("span").appendChild(c)
const e=document.querySelector(".remix-button.remixing")
if(e)return void e.appendChild(c)
const n=document.querySelector('[class^="alert_alert-message"] span')
n&&n.appendChild(c)}const a=t.settings.get("topbar"),c=document.createElement("div")
c.className="u-progress-bar-outer"
const u=document.createElement("div")
u.className="u-progress-bar-inner",c.appendChild(u),a?(c.classList.add("u-progress-bar-top"),c.style.opacity="0",t.tab.waitForElement("body").then((()=>document.body.appendChild(c)))):c.classList.add("u-progress-bar-integrated"),t.tab.displayNoneWhileDisabled(c,{display:"flex"})
const d="none",p="load-assets"
let f,m=d,g=0,l=0
const b=document.createElement("div")
b.innerText=s("loading-project"),b.className="u-progress-bar-caption"
const y=/^https:\/\/projects\.scratch\.mit\.edu\/\d+/,h=/^https:\/\/assets\.scratch\.mit\.edu\//,w=window.fetch
window.fetch=(s,r)=>{if(!t.self.disabled&&"string"==typeof s&&r&&"string"==typeof r.method){if("get"===r.method.toLowerCase()&&y.test(s))return n("load-json"),new Promise(((t,n)=>{const o=new XMLHttpRequest
o.responseType="blob",o.onload=()=>t(new Response(o.response,{status:o.status,statusText:o.statusText})),o.onerror=()=>n(new Error("xhr failed")),o.onloadend=()=>e(1),o.onprogress=t=>{t.lengthComputable&&e(t.loaded/t.total)},o.open("GET",s),o.send()}))
if("post"===r.method.toLowerCase()&&h.test(s))return n("save-assets"),g++,o(),w(s,r).then((t=>(l++,o(),t)))}return w(s,r)}
const v=XMLHttpRequest.prototype.open
XMLHttpRequest.prototype.open=function(...s){const o=s[0],r=s[1]
if(!t.self.disabled&&"string"==typeof o&&"string"==typeof r&&("put"===o.toLowerCase()||"post"===o.toLowerCase())&&y.test(r)){const t=new URLSearchParams(r)
t.has("is_remix")?n("remix"):t.has("is_copy")?n("copy"):n("save-json"),this.upload.addEventListener("loadend",(()=>{e(1)})),this.upload.addEventListener("progress",(t=>{t.lengthComputable&&e(t.loaded/t.total)}))}v.apply(this,s)}
let x=0
const L=Worker.prototype.postMessage
Worker.prototype.postMessage=function(s,e){!t.self.disabled&&s&&"string"==typeof s.id&&"string"==typeof s.url&&(n(p),g++,o(),x||(x=1,this.addEventListener("message",(t=>{const s=t.data
Array.isArray(s)&&(l+=s.length,o())})))),L.call(this,s,e)}
const R=new MutationObserver(i)}