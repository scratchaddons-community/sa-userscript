import chrome from"../../../libraries/common/chrome.js"
const t={}
export default e=>Promise.all(e.map((e=>{const o=chrome.runtime.getURL(`${e}.html`),n=chrome.runtime.getURL(`${e}.js`),m=import(n)
return fetch(o).then((t=>t.text())).then((o=>{const n=(new DOMParser).parseFromString(o,"text/html"),m=n.querySelector("style")?.textContent
return m&&(t[e]=m),n.querySelector("template").innerHTML})).then((t=>m.then((e=>e.default({template:t})))))}))).then((()=>e.forEach((e=>{if(!t[e])return
const o=document.createElement("style")
o.textContent=t[e]
const[n]=e.split("/").slice(-1)
o.setAttribute("data-vue-component",n),document.head.insertBefore(o,document.head.querySelector("[data-below-vue-components]"))}))))
