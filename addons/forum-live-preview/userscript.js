export default async function({addon:e}){const t=await e.tab.waitForElement(".markItUpEditor"),a=await e.tab.waitForElement(".markItUpButton.preview")
let o,i
switch(e.settings.get("rate")){case"slow":i=2500
break
case"fast":i=250
break
default:i=1e3}e.tab.waitForElement(".markItUpPreviewFrame").then((e=>o=e))
const n=()=>{o&&o.style.removeProperty("display")},s=()=>{e.self.disabled||(a.dispatchEvent(new MouseEvent("mousedown")),t.value?n():o&&(o.style.display="none"))}
let r
t.addEventListener("input",(()=>{void 0!==r&&clearTimeout(r),r=setTimeout(s,i)})),e.self.addEventListener("disabled",(()=>{n()})),e.self.enabledLate&&s()}