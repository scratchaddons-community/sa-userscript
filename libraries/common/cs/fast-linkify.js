const t=t=>{t instanceof Text&&(t.nodeValue.split(/((?:https?:\/\/)?(?:[\w-]+\.)+(?:xn--[a-zA-Z\d]+|[a-zA-Z]{2,})(?:\/[^\s"<>\\^`{|}]*)?)/g).forEach(((o,e)=>{if(e%2){const e=document.createElement("a")
e.textContent=o,/^https?:\/\//g.test(o)||(o=`http://${o}`),e.href=o,e.rel="noreferrer",t.parentNode.insertBefore(e,t)}else t.parentNode.insertBefore(document.createTextNode(o),t)})),t.remove())},o=t=>{t instanceof Text&&(t.nodeValue.split(/(\s)/g).forEach((o=>{if(/^@[\w-]{3,20}$/g.test(o)){const e=document.createElement("a")
e.textContent=o,e.href="@welcomingcommittee"===o.toLowerCase()?"https://scratch.mit.edu/studios/146521/":`https://scratch.mit.edu/users/${o.slice(1)}/`,e.rel="noreferrer",t.parentNode.insertBefore(e,t)}else o&&t.parentNode.insertBefore(document.createTextNode(o),t)})),t.remove())}
export const linkifyTextNode=o=>{for(const e of o.childNodes)t(e)}
export const linkifyTag=(o,e)=>{for(const n of o.children)if(!e||n instanceof e)for(const o of n.childNodes)t(o)}
export const pingifyTextNode=t=>{for(const e of t.childNodes)o(e)}
