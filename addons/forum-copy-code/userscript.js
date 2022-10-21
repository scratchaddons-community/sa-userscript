export default async function({addon:o,msg:n}){for(;;){const c=await o.tab.waitForElement("div.code",{markAsSeen:1}),t=document.createElement("div")
t.className="sa-copyCodeDiv",o.tab.displayNoneWhileDisabled(t,{display:"block"})
const a=document.createElement("span")
a.className="sa-copyCodeButton",a.textContent=n("copy-code"),a.onclick=function(){navigator.clipboard.writeText(this.parentNode.nextSibling.children[0].textContent)},t.appendChild(a),c.parentNode.insertBefore(t,c)}}