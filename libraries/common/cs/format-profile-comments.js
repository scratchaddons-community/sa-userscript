export default e=>{let t=e.childNodes
for(let e of t)if(e instanceof Text)if(e===t[0])e.textContent=e.textContent.trimStart(),e.nextSibling||(e.textContent=e.textContent.trim())
else{e===t[t.length-1]&&(e.textContent=e.textContent.trimEnd())
const f=[].find.call(t,(e=>e instanceof HTMLAnchorElement&&(!e.previousSibling||!e.previousSibling.textContent)))
f&&e.previousSibling===f&&(e.textContent=e.textContent.startsWith("*")?"* "+e.textContent.replace(/^\*\s*/,""):" "+e.textContent.trimStart())}}
