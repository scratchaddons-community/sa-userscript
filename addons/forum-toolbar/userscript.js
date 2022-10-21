import{insert as o,wrapSelection as t,getSelection as e}from"../../libraries/thirdparty/cs/text-field-edit.js"
export default async({addon:r,msg:n})=>{await r.tab.waitForElement(".markItUpButton16")
const a=document.querySelector(".markItUpEditor"),l=(o,t,e)=>{r.tab.appendToSharedSpace({space:o,order:e,element:t}),r.tab.displayNoneWhileDisabled(t,{display:`var(--forumToolbar-${t.dataset.name}, none)`})},c=(r,{openWith:l,replaceWith:c,closeWith:i,tag:p,promptTag:m,promptContent:u,callback:s,defaultSelection:d})=>{const f=document.createElement("li")
f.classList.add("markItUpButton"),f.classList.add("sa-forum-toolbar-"+r),f.dataset.name=r
const g=n(r),T=Object.assign(document.createElement("a"),{href:"#",textContent:g,title:g})
return f.append(T),f.addEventListener("click",(f=>{f.preventDefault()
let g=l,T=i,b=c
if(m){const o=prompt(n("prompt-"+r),d?e(a).trim():void 0)
null!==o&&(g=`[${p}${o?`=${o}`:""}]`,T=`[/${p}]`)}else if(u){const o=e(a)||prompt(n("prompt-"+r))
null!==o&&(b=`[${p}]${o}[/${p}]`)}"string"==typeof b?o(a,b):"string"==typeof g||"string"==typeof T?t(a,g||"",T||""):s&&s(),a.focus()})),f}
l("forumToolbarTextDecoration",c("color",{tag:"color",promptTag:1}),1),((o,t)=>{r.tab.appendToSharedSpace({space:"forumToolbarLinkDecoration",order:2,element:t})
const e=t.children[1].children,n=Array.from(e,(o=>`var(--forumToolbar-${o.dataset.name},`))
r.tab.displayNoneWhileDisabled(t,{display:`${n.join("")}none${")".repeat(e.length)}`})})(0,((o,...t)=>{const e=document.createElement("li")
e.classList.add("markItUpButton"),e.classList.add("markItUpDropMenu"),e.classList.add("sa-forum-toolbar-"+o),e.dataset.name=o
const r=n(o),a=Object.assign(document.createElement("a"),{href:"#",textContent:r,title:r})
e.append(a)
const l=document.createElement("ul")
return l.hidden=1,t.forEach((o=>{o.style.display=`var(--forumToolbar-${o.dataset.name}, none)`,l.append(o)})),e.addEventListener("click",(o=>o.preventDefault())),e.addEventListener("mouseover",(()=>{l.style.display="block"})),e.addEventListener("mouseout",(()=>{l.style.display="none"})),e.append(l),e})("link",c("wp",{tag:"wp",promptTag:1,defaultSelection:1}),c("wiki",{tag:"wiki",promptTag:1,defaultSelection:1}),c("google",{tag:"google",promptTag:1,defaultSelection:1}),c("dictionary",{tag:"dictionary",promptTag:1,defaultSelection:1}))),l("forumToolbarDecoration",c("center",{openWith:"[center]",closeWith:"[/center]"}),1),l("forumToolbarDecoration",c("code",{tag:"code",promptTag:1}),2)}
