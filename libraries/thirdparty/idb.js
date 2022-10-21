var e,n
e=this,n=function(e){function n(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(s||(s=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...n){return e.apply(D(this),n),r(c.get(this))}:function(...n){return r(e.apply(D(this),n))}:function(n,...t){const o=e.call(D(this),n,...t)
return u.set(o,n.sort?n.sort():[n]),r(o)}}function t(e){return"function"==typeof e?n(e):(e instanceof IDBTransaction&&function(e){if(a.has(e))return
const n=new Promise(((n,t)=>{const r=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",i),e.removeEventListener("abort",i)},o=()=>{n(),r()},i=()=>{t(e.error||new DOMException("AbortError","AbortError")),r()}
e.addEventListener("complete",o),e.addEventListener("error",i),e.addEventListener("abort",i)}))
a.set(e,n)}(e),t=e,(i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,l):e)
var t}function r(e){if(e instanceof IDBRequest)return function(e){const n=new Promise(((n,t)=>{const o=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{n(r(e.result)),o()},s=()=>{t(e.error),o()}
e.addEventListener("success",i),e.addEventListener("error",s)}))
return n.then((n=>{n instanceof IDBCursor&&c.set(n,e)})).catch((()=>{})),d.set(n,e),n}(e)
if(f.has(e))return f.get(e)
const n=t(e)
return n!==e&&(f.set(e,n),d.set(n,e)),n}function o(e,n){if(!(e instanceof IDBDatabase)||n in e||"string"!=typeof n)return
if(B.get(n))return B.get(n)
const t=n.replace(/FromIndex$/,""),r=n!==t,o=I.includes(t)
if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!o&&!p.includes(t))return
const i=async function(e,...n){const i=this.transaction(e,o?"readwrite":"readonly")
let s=i.store
return r&&(s=s.index(n.shift())),(await Promise.all([s[t](...n),o&&i.done]))[0]}
return B.set(n,i),i}let i,s
const c=new WeakMap,a=new WeakMap,u=new WeakMap,f=new WeakMap,d=new WeakMap
let l={get(e,n,t){if(e instanceof IDBTransaction){if("done"===n)return a.get(e)
if("objectStoreNames"===n)return e.objectStoreNames||u.get(e)
if("store"===n)return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return r(e[n])},set:(e,n,t)=>(e[n]=t,1),has:(e,n)=>e instanceof IDBTransaction&&("done"===n||"store"===n)||n in e}
const D=e=>d.get(e),p=["get","getKey","getAll","getAllKeys","count"],I=["put","add","delete","clear"],B=new Map
l=(e=>({...e,get:(n,t,r)=>o(n,t)||e.get(n,t,r),has:(n,t)=>!!o(n,t)||e.has(n,t)}))(l),e.deleteDB=function(e,{blocked:n}={}){const t=indexedDB.deleteDatabase(e)
return n&&t.addEventListener("blocked",(e=>n(e.oldVersion,e))),r(t).then((()=>{}))},e.openDB=function(e,n,{blocked:t,upgrade:o,blocking:i,terminated:s}={}){const c=indexedDB.open(e,n),a=r(c)
return o&&c.addEventListener("upgradeneeded",(e=>{o(r(c.result),e.oldVersion,e.newVersion,r(c.transaction),e)})),t&&c.addEventListener("blocked",(e=>t(e.oldVersion,e.newVersion,e))),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a},e.unwrap=D,e.wrap=r},"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((e="undefined"!=typeof globalThis?globalThis:e||self).idb={})
