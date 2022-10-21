export default async function({addon:t,msg:e}){const a=/https:\/\/scratch\.mit\.edu\/studios\/([0-9]+)/,s=await t.auth.fetchXToken(),i=await t.auth.fetchUsername(),{csrfToken:c}=t.auth,n=Object.create(null)
await t.tab.redux.waitForState((t=>"FETCHED"===t.messages.status.message))
t:for(;;){const o=await t.tab.waitForElement(".mod-curator-invite",{markAsSeen:1}),d=await t.tab.waitForElement(".social-message-content > div > span",{elementCondition(t){return o.contains(t)}}),r=Array.from(d.children).find((t=>"A"===t.tagName&&a.test(t.href))).href.match(a)[1]
if(n[r])continue t
n[r]=1
const u=await fetch(`https://api.scratch.mit.edu/studios/${r}/users/${i}`,{headers:{"X-Token":s}})
let l=await u.json()
const f=document.createElement("button")
f.className="sa-curator-invite-button button",l.invited?f.innerText=e("accept"):(f.innerText=e("accepted"),f.classList.add("disabled"),f.disabled=1),f.addEventListener("click",(async()=>{if(l.invited){f.classList.add("loading")
const t=await fetch(`/site-api/users/curators-in/${r}/add/?usernames=${i}`,{method:"PUT",headers:{"x-csrftoken":c,"x-requested-with":"XMLHttpRequest"}}),{success:a}=await t.json()
f.classList.remove("loading"),a?(f.innerText=e("accepted"),l.invited=0,f.disabled=1):alert(e("failed"))}})),d.parentElement.appendChild(f)}}