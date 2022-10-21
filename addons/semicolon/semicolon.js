export default async function({addon:n}){const o=document.createElement("p")
o.textContent=";",o.classList.add("semicolon"),document.body.appendChild(o)
const e=()=>{o.style.display="editor"===n.tab.editorMode||"fullscreen"===n.tab.editorMode?"none":"block"}
e(),n.tab.addEventListener("urlChange",e),n.tab.displayNoneWhileDisabled(o)}