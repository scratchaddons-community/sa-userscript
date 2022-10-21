import chrome from"./chrome.js"
export class HTTPError extends Error{constructor(t,e){super(t),this.code=e}static fromResponse(t,e){return new HTTPError(`${t}: status ${e.status}`,e.status)}}class t{constructor(t,e){this.db=t,this.stores=e}objectStore(t){return{put:e=>this.db.put(t,e)}}get done(){return null}}class e{constructor(){this.messages=[],this.msgCount=0}get(t){switch(t){case"cache":return this.messages.slice()
case"count":return this.msgCount}}put(t,e){switch(t){case"cache":return void(this.messages=e)
case"count":return void(this.msgCount=e)}}close(){}transaction(e){return new t(this,e)}static isIncognito(){return chrome.extension.inIncognitoContext}}const a=new e
export async function fetchMessageCount(t){const e=await fetch(`https://api.scratch.mit.edu/users/${t}/messages/count?timestamp=${Date.now()}`)
return(await e.json()).count||0}export async function fetchMessages(t,e,a){const s=await fetch(`https://api.scratch.mit.edu/users/${t}/messages?limit=40&offset=${a}`,{headers:{"x-token":e}})
if(!s.ok){if(404===s.status)return[]
throw HTTPError.fromResponse(`Fetching message offset ${a} for ${t} failed`,s)}return s.json()}export async function openDatabase(){return e.isIncognito()?a:idb.openDB("messaging",1,{upgrade(t){t.createObjectStore("cache"),t.createObjectStore("lastUpdated"),t.createObjectStore("count")}})}export async function openMessageCache(t,a){const s=await openDatabase()
if(!(s instanceof e))try{const e=await s.transaction(["cache","lastUpdated","count"],"readwrite"),r=await e.objectStore("lastUpdated").get(t);(void 0===r||a||r+432e5<Date.now())&&(await e.objectStore("cache").put([],t),await e.objectStore("count").put(0,t)),await e.done}finally{await s.close()}}export async function updateMessages(t,e,a,s){if(await openMessageCache(t,e),null===a)return[]
const r=await fetchMessageCount(a),c=Math.min(Math.ceil(r/40)+1,25),n=await openDatabase()
try{const e=await n.get("cache",t),i=e[0]?new Date(e[0].datetime_created).getTime():0,o=[],u=new Set
t:for(let t=0;c>t;t++){const e=await fetchMessages(a,s,40*t)
for(const t of e){if(new Date(t.datetime_created).getTime()<=i)break t
u.has(t.id)||(o.push(t),u.add(t.id))}}e.unshift(...o),e.length=Math.min(e.length,40*c),o.length=Math.min(o.length,r)
const h=await n.transaction(["cache","lastUpdated","count"],"readwrite")
return await h.objectStore("cache").put(e,t),await h.objectStore("lastUpdated").put(Date.now(),t),await h.objectStore("count").put(r,t),await h.done,o}finally{await n.close()}}export function markAsRead(t){return fetch("https://scratch.mit.edu/site-api/messages/messages-clear/?sareferer",{method:"POST",headers:{"x-csrftoken":t,"x-requested-with":"XMLHttpRequest"}}).then((t=>{if(!t.ok)throw HTTPError.fromResponse("Marking messages as read failed: ",t)}))}