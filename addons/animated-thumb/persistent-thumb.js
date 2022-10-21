let t=1
export const init=e=>{const r=XMLHttpRequest.prototype.open
XMLHttpRequest.prototype.open=function(n,o,...s){return!t&&"POST"===n&&String(o).startsWith("/internalapi/project/thumbnail/")&&(e.log("Blocked overwriting thumbnails."),n="OPTIONS"),r.call(this,n,o,...s)}}
export const blockOverwriting=e=>{t=!e}
export const isOverwritingEnabled=t=>{const e=localStorage.getItem("saPersistentThumb")
return e?JSON.parse(e).includes(Number(t)):0}
export const saveConfig=(t,e)=>{blockOverwriting(e)
const r=localStorage.getItem("saPersistentThumb")
if(r){const n=new Set(JSON.parse(r))
return e?n.add(Number(t)):n.delete(Number(t)),void localStorage.setItem("saPersistentThumb",JSON.stringify([...n]))}e&&localStorage.setItem("saPersistentThumb",JSON.stringify([Number(t)]))}
