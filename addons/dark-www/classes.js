import{textColor as e}from"../../libraries/common/cs/text-color.esm.js"
export default async function({addon:t}){function n(n){n.src=!t.self.disabled&&e(t.settings.get("box"),0,1)?n.src.replace("theme=light","theme=dark"):n.src.replace("theme=dark","theme=light")}function o(){for(let e of a)n(e)}t.tab.waitForElement(".annual-report-content > .covid-response-section").then((()=>{document.body.classList.add("sa-annual-report-2019")})),t.tab.waitForElement(".annual-report-content > .directors-message").then((()=>{document.body.classList.add("sa-annual-report-2020")})),t.tab.waitForElement(".annual-report-content > .reach-section.t").then((()=>{document.body.classList.add("sa-annual-report-2021")}))
let a=[]
for(t.self.addEventListener("disabled",o),t.self.addEventListener("reenabled",o),t.settings.addEventListener("change",o);;){const o=await t.tab.waitForElement(".twitter-tweet iframe[src*='theme=light']",{markAsSeen:1})
if(a.push(o),e(t.settings.get("box"),0,1)){n(o)
const e=()=>{n(o),o.removeEventListener("load",e)}
o.addEventListener("load",e)}}}