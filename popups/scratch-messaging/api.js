import{HTTPError as e}from"../../libraries/common/message-cache.js"
const t=new DOMParser
export{e as HTTPError}
export class DetailedError extends Error{constructor(e,t){super(e),this.details=t}}export async function deleteComment(t,{resourceType:n,resourceId:r,commentId:c}){if("user"===n)return o(t,{resourceType:n,resourceId:r,commentId:c})
const s="project"===n?"project":"studio",a=await t.auth.fetchXToken()
return fetch(`https://api.scratch.mit.edu/proxy/comments/${s}/${r}/comment/${c}?sareferer`,{headers:{"content-type":"application/json","x-csrftoken":t.auth.csrfToken,"x-token":a},method:"DELETE"}).then((t=>{if(!t.ok)throw e.fromResponse(`Deleting ${s} comment ${c} of ${r} failed`,t)}))}const o=async(t,{resourceType:o,resourceId:n,commentId:r})=>fetch(`https://scratch.mit.edu/site-api/comments/${o}/${n}/del/?sareferer`,{headers:{"content-type":"application/json","x-csrftoken":t.auth.csrfToken,"x-requested-with":"XMLHttpRequest"},body:JSON.stringify({id:String(r)}),method:"POST"}).then((t=>{if(!t.ok)throw e.fromResponse(`Deleting ${o} comment ${r} of ${n} failed`,t)}))
export async function dismissAlert(t,o){return fetch("https://scratch.mit.edu/site-api/messages/messages-delete/?sareferer",{headers:{"content-type":"application/json","x-csrftoken":t.auth.csrfToken,"x-requested-with":"XMLHttpRequest"},body:JSON.stringify({alertType:"notification",alertId:o}),method:"POST"}).then((t=>{if(!t.ok)throw e.fromResponse(`Dismissing alert ${o} failed`,t)}))}export async function sendComment(e,{resourceType:t,resourceId:o,content:n,parentId:r,commenteeId:c}){return"user"===t?sendLegacyComment(e,{resourceType:t,resourceId:o,content:n,parentId:r,commenteeId:c}):sendMigratedComment(e,{resourceType:t,resourceId:o,content:n,parentId:r,commenteeId:c})}export async function sendMigratedComment(t,{resourceType:o,resourceId:n,content:r,parentId:c,commenteeId:s}){const a="project"===o?"project":"studio",i=await t.auth.fetchXToken()
return fetch(`https://api.scratch.mit.edu/proxy/comments/${a}/${n}?sareferer`,{headers:{"content-type":"application/json","x-csrftoken":t.auth.csrfToken,"x-token":i},body:JSON.stringify({content:r,parent_id:c,commentee_id:s}),method:"POST"}).then((t=>{if(!t.ok)throw e.fromResponse(`Sending ${a} comment on ${n} failed`,t)
return t.json()})).then((e=>{if(e.rejected)throw new DetailedError(`Server rejected sending ${a} comment`,{error:e.rejected,muteStatus:e.status?.mute_status||null})
return{id:e.id,content:e.content}}))}export async function sendLegacyComment(o,{resourceType:n,resourceId:r,content:c,parentId:s,commenteeId:a}){return fetch(`https://scratch.mit.edu/site-api/comments/${n}/${r}/add/?sareferer`,{headers:{"content-type":"application/json","x-csrftoken":o.auth.csrfToken,"x-requested-with":"XMLHttpRequest"},method:"POST",body:JSON.stringify({content:c,parent_id:s,commentee_id:a})}).then((t=>{if(!t.ok)throw e.fromResponse(`Sending ${n} comment on ${r} failed`,t)
return t.text()})).then((e=>{const o=t.parseFromString(e,"text/html"),r=o.querySelector(".comment"),c=o.querySelector("script#error-data")
if(r)return{id:Number(r.getAttribute("data-comment-id")),content:o.querySelector(".content")}
if(c){const e=JSON.parse(c.textContent)
throw new DetailedError(`Server rejected sending ${n} comment`,{error:e.error,muteStatus:e.status?.mute_status||null})}throw console.warn("Unexpected state while sending legacy comment: ",e),new Error("Unexpected state while sending legacy comment, see logs")}))}export async function fetchComments(e,{resourceType:t,resourceId:o,commentIds:n,page:r=1,commentsObj:c={}}){return"user"===t?fetchLegacyComments(e,{resourceType:t,resourceId:o,commentIds:n,page:r,commentsObj:c}):fetchMigratedComments(e,{resourceType:t,resourceId:o,commentIds:n,page:r,commentsObj:c})}export async function fetchMigratedComments(t,{resourceType:o,resourceId:n,commentIds:r,page:c=1,commentsObj:s={}}){let a
if("project"===o){const e=await fetch(`https://api.scratch.mit.edu/projects/${n}`)
if(!e.ok)return s
const t=await e.json()
a=t.author.username}const i=e=>"project"===o?`https://api.scratch.mit.edu/users/${a}/projects/${n}/comments/${e}`:`https://api.scratch.mit.edu/studios/${n}/comments/${e}`,m=(e,t)=>"project"===o?`https://api.scratch.mit.edu/users/${a}/projects/${n}/comments/${e}/replies?offset=${t}&limit=40&nocache=${Date.now()}`:`https://api.scratch.mit.edu/studios/${n}/comments/${e}/replies?offset=${t}&limit=40&nocache=${Date.now()}`
for(const t of r){if(s[`${o[0]}_${t}`])continue
const r=await fetch(i(t))
if(!r.ok){if(404===r.status)continue
throw e.fromResponse(`Error when fetching comment ${o}/${t}`,r)}const c=await r.json()
if(null===c)continue
const d=c.parent_id||t,u={}
let p
if(c.parent_id){const n=await fetch(i(d))
if(!n.ok)throw e.fromResponse(`Error when fetching parent ${d} for comment ${o}/${t}`,n)
const r=await n.json()
if(null===r)continue
p=r}else p=c
const h=async n=>{const r=await fetch(m(d,n))
if(!r.ok){if(404===r.status)return
throw e.fromResponse(`Ignoring comment ${o}/${t}`,r)}return await r.json()},f=[]
let l=40,y=0
if(p.reply_count>0)for(;40===l;){const e=await h(y)
e.forEach((e=>f.push(e))),l=e.length,y+=40}c.parent_id&&0===f.length&&(console.error(`No replies found on comment ${o}/${n}/${t} with parents ${c.parent_id}`),f.push(c))
for(const e of f){const t=f.find((t=>t.author.id===e.commentee_id))
u[`${o[0]}_${e.id}`]={author:e.author.username,authorId:e.author.id,content:e.content,date:e.datetime_created,children:null,childOf:`${o[0]}_${d}`,replyingTo:t?t.author.username:p.author.username,scratchTeam:e.author.scratchteam,projectAuthor:a}}for(const e of Object.keys(u))s[e]=u[e]
s[`${o[0]}_${d}`]={author:p.author.username,authorId:p.author.id,content:p.content,date:p.datetime_created,children:Object.keys(u),childOf:null,replyingTo:"",scratchTeam:p.author.scratchteam,projectAuthor:a}}return s}export async function fetchLegacyComments(e,{resourceType:o,resourceId:n,commentIds:r,page:c=1,commentsObj:s={}}){const a=await fetch(`https://scratch.mit.edu/site-api/comments/${o}/${n}/?page=${c}&nocache=${Date.now()}`,{credentials:"omit"})
if(!a.ok)return console.warn(`Ignoring comments ${o}/${n} page ${c}, status ${a.status}`),s
const i=await a.text(),m=t.parseFromString(i,"text/html")
for(const e of m.querySelectorAll(".top-level-reply:not(.removed)")){if(0===r.length)return s
let t=0
const n=e.querySelector("div"),c=Number(n.getAttribute("data-comment-id")),a={},i=e.querySelectorAll("li.reply:not(.removed)")
for(const e of i){const n=Number(e.querySelector("div").getAttribute("data-comment-id"))
r.includes(n)&&(t=1,r.splice(r.findIndex((e=>e===n)),1))
const s=e.querySelector(".name").textContent.trim()
a[`${o[0]}_${n}`]={author:s.replace(/\*/g,""),authorId:Number(e.querySelector(".reply").getAttribute("data-commentee-id")),content:e.querySelector(".content"),date:e.querySelector(".time").getAttribute("title"),children:null,childOf:`${o[0]}_${c}`,scratchTeam:s.includes("*")}}if(r.includes(c)&&(t=1,r.splice(r.findIndex((e=>e===c)),1)),t){const e=n.querySelector(".name").textContent.trim()
s[`${o[0]}_${c}`]={author:e.replace(/\*/g,""),authorId:Number(n.querySelector(".reply").getAttribute("data-commentee-id")),content:n.querySelector(".content"),date:n.querySelector(".time").getAttribute("title"),children:Object.keys(a),childOf:null,scratchTeam:e.includes("*")}
for(const e of Object.keys(a))s[e]=a[e]}}return 3>c?await fetchLegacyComments(e,{resourceType:o,resourceId:n,commentIds:r,page:c+1,commentsObj:s}):(console.log("Could not find all comments for ",o," ",n,", remaining ids: ",JSON.parse(JSON.stringify(r))),s)}export async function fetchAlerts(t){const o=await t.auth.fetchUsername(),n=await t.auth.fetchXToken()
return fetch(`https://api.scratch.mit.edu/users/${o}/messages/admin`,{headers:{"x-token":n}}).then((t=>{if(!t.ok)throw e.fromResponse("Fetching alerts failed",t)
return t.json()}))}