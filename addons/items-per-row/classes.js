function o(o,t,s){for(let n of s.min){const s=`items-per-row-${o}-min${n}`
n>t?document.body.classList.remove(s):document.body.classList.add(s)}for(let n of s.max){const s=`items-per-row-${o}-max${n}`
t>n?document.body.classList.remove(s):document.body.classList.add(s)}}export default async function({addon:t}){await t.tab.waitForElement("body")
const s=()=>{o("search",t.settings.get("search"),{min:[5],max:[2]}),o("studio-projects",t.settings.get("studioProjects"),{min:[4,5],max:[]}),o("studio-curators",t.settings.get("studioCurators"),{min:[4,5],max:[2]}),o("projects",t.settings.get("projects"),{min:[6,7],max:[4,3]}),o("studios",t.settings.get("studios"),{min:[6,7],max:[3]}),o("users",t.settings.get("users"),{min:[12,15],max:[]})}
s(),t.settings.addEventListener("change",(()=>{s(),"scratchr2"===t.tab.clientVersion&&window.dispatchEvent(new Event("scroll"))}))}