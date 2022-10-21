export default async function({addon:e,console:o,msg:t}){function s(){n=0
let e=document.querySelectorAll(".social-message")
for(let o=0;e.length>o;o++){let t=e[o],s=t.classList
t.style.display="none"
for(let e=0;s.length>e;e++)(c.includes("mod-become-host"===s[e]?"mod-become-manager":s[e])||0===c.length)&&(n++,t.style.display="list-item")}localStorage.setItem("scratchAddonsMessageFiltersSettings",JSON.stringify(c)),o.log(`${n} messages showing.`)}await e.tab.waitForElement(".select",{markAsSeen:1}),document.querySelector(".select").remove(),await e.tab.waitForElement(".messages-social-list",{markAsSeen:1})
const a={[t("studio")]:"mod-studio-activity",[t("comment")]:"mod-comment-message",[t("favorite")]:"mod-love-favorite",[t("love")]:"mod-love-project",[t("remix")]:"mod-remix-project",[t("follow")]:"mod-follow-user",[t("invite")]:"mod-curator-invite",[t("forum")]:"mod-forum-activity",[t("promotion")]:"mod-become-manager"}
let c=JSON.parse(localStorage.getItem("scratchAddonsMessageFiltersSettings"))||Object.values(a)
localStorage.getItem("scratchAddonsMessageFiltersSupportsHost")||(c.push("mod-become-host"),localStorage.setItem("scratchAddonsMessageFiltersSettings",JSON.stringify(c)),localStorage.setItem("scratchAddonsMessageFiltersSupportsHost","true"))
let l=document.createElement("div")
l.classList.add("filter-container")
let m=document.createElement("h4")
m.appendChild(document.createTextNode(t("messages"))),l.appendChild(m)
let r=document.createElement("div")
r.classList.add("checkboxes"),l.appendChild(r)
let i=Object.keys(a)
for(let e=0;i.length>e;e++){let o=document.createElement("label")
o.classList.add("input_label")
let t=document.createElement("input")
t.type="checkbox",t.checked=c.includes(a[i[e]]),t.id=String.fromCharCode(97+e),t.setAttribute("data-for",a[i[e]]),t.onchange=()=>{if(t.checked)c.includes(t.getAttribute("data-for"))||c.push(t.getAttribute("data-for"))
else if(c.includes(t.getAttribute("data-for"))){let e=c.indexOf(t.getAttribute("data-for"))
e>-1&&c.splice(e,1)}s()},o.appendChild(t),o.setAttribute("for",String.fromCharCode(97+e)),o.appendChild(document.createTextNode(i[e])),r.appendChild(o)}let n=0
for(document.querySelector(".messages-social-title").appendChild(l);;)40>n&&(o.log("Loading more messages..."),document.querySelector(".messages-social-loadmore").click(),await e.tab.waitForElement(".social-message",{markAsSeen:1})),await e.tab.waitForElement(".social-message",{markAsSeen:1}),s()}