import{insert as t}from"../../libraries/thirdparty/cs/text-field-edit.js"
export default async function({addon:e,msg:a,console:r}){function o(){m.addEventListener("click",l),s.addEventListener("change",p),i.addEventListener("paste",g),i.addEventListener("dragenter",f),i.addEventListener("dragover",k),i.addEventListener("dragleave",h),i.addEventListener("dragend",h),i.addEventListener("drop",y)}async function n(e){const o=e.name.split(".").pop().toLowerCase()
e.arrayBuffer().then((e=>async function(e,o){c=d.appendChild(document.createElement("li")),c.className="uploadStatus"
const n=SparkMD5.ArrayBuffer.hash(e)
c.innerText=a("uploading")
try{const r=await fetch(`https://assets.scratch.mit.edu/${n}.${o}`,{body:e,method:"POST",mode:"cors",credentials:"include"}),d=await r.json()
"ok"===d.status?t(i,`[img]https://assets.scratch.mit.edu/get_image/.%2E/${d["content-name"]}[/img]`):(c?.remove(),alert(a("upload-error"))),c.remove()}catch(t){r.log("Error encountered while uploading image:",t),c?.remove(),alert(a("upload-error"))}}(e,o))).catch((t=>{r.error("Error when reading file:",t),alert(a("load-error")),c?.remove()}))}await e.tab.loadScript(e.self.lib+"/thirdparty/cs/spark-md5.min.js")
const d=document.querySelector("#markItUpId_body > div > div.markItUpHeader > ul")||document.querySelector("#markItUpId_signature > div > div.markItUpHeader > ul"),i=document.querySelector("#id_body")||document.querySelector("#id_signature")
if(!i)return
let c
const s=document.createElement("input")
s.className="sa-image-upload-input",s.type="file",s.accept="image/*"
const u=document.createElement("li")
e.tab.displayNoneWhileDisabled(u),u.className="markItUpButton markItUpButton17"
const m=document.createElement("a")
m.className="sa-image-upload-button",m.title=a("upload-image"),u.appendChild(m),e.tab.appendToSharedSpace({space:"forumToolbarLinkDecoration",element:u,order:1}),document.body.appendChild(s)
const l=()=>s.click(),p=()=>{n(s.files[0])},g=async t=>{const e=await async function(t){if(!t.clipboardData)return
const{items:e}=t.clipboardData
if(!e)return
const a=[]
for(const t of e)t.type.includes("image")&&a.push(t.getAsFile())
return a}(t)
for(const t of e)n(t)},f=()=>{i.style.backgroundColor="rgba(0, 0, 0, 0.1)"},h=()=>{i.style.backgroundColor=""},k=t=>{t.preventDefault(),t.dataTransfer.dropEffect="copy"},y=t=>{i.style.backgroundColor=""
const{files:e}=t.dataTransfer
e.length>0&&(t.preventDefault()||t.stopPropagation())
for(const t of e)n(t)}
o(),e.self.addEventListener("disabled",(()=>{m.removeEventListener("click",l),s.removeEventListener("change",p),i.removeEventListener("paste",g),i.removeEventListener("dragenter",f),i.removeEventListener("dragover",k),i.removeEventListener("dragleave",h),i.removeEventListener("dragend",h),i.removeEventListener("drop",y)})),e.self.addEventListener("reenabled",o)}