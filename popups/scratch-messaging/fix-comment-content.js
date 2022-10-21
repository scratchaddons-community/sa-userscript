import e from"../../addons/scratch-notifier/comment-emojis.js"
import{linkifyTextNode as t,pingifyTextNode as o}from"../../libraries/common/cs/fast-linkify.js"
import s from"../../libraries/common/cs/format-profile-comments.js"
const n=new DOMParser
export default(r,m)=>{const i=m.includes("more-links"),c=m.includes("comments-linebreaks")
let f
r instanceof Node?(f=r.cloneNode(1),c&&s(f)):f=n.parseFromString(r.trim(),"text/html").body,f.normalize()
for(let t=f.childNodes.length;t--;){const o=f.childNodes[t]
let s=o.textContent
if(c||(s=s.replace(/\s+/g," ")),0===t&&(s=s.trimStart()),t===f.childNodes.length-1&&(s=s.trimEnd()),o.textContent=s,o instanceof Text&&""===o.textContent)o.remove()
else if(o instanceof HTMLAnchorElement&&o.getAttribute("href").startsWith("/"))o.href="https://scratch.mit.edu"+o.getAttribute("href")
else if(o instanceof HTMLImageElement){const t=o.src.split("/"),s=t[t.length-1]
e[s]&&o.replaceWith(e[s])}}return i&&t(f),o(f),f}
