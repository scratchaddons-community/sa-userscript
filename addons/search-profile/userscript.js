export default async function({addon:n,msg:a}){const e=(await n.tab.waitForElement(".sub-nav.tabs")).appendChild(document.createElement("a")),s=e.appendChild(document.createElement("li")),o=s.appendChild(document.createElement("img")),t=s.appendChild(document.createElement("span")),u=document.querySelector('[name="q"]').value.trim(),i=/^[\w-]{3,20}$/g.test(u)
o.src=n.self.dir+"/user.svg",o.className="tab-icon",t.innerText=a("profile"),n.tab.displayNoneWhileDisabled(e),i&&(e.href="/users/"+u+"/"),i||(e.classList.add("sa-search-profile-invalid"),s.title=a("invalid-username",{username:u}))}