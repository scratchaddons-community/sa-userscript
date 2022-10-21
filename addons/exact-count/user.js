export default async function({addon:o}){function n(o){return s.find((n=>{const t=n.querySelector('a[href^="/"]')
return t&&new URL(t.href).pathname===`/users/${e}/${o}/`?1:0}))}const t={projects:null,favorites:null,followers:null,following:null,studios:null,studios_following:null},l=Object.keys(t),e=Scratch.INIT_DATA.PROFILE.model.username,s=[...document.querySelectorAll(".box-head")]
o.self.addEventListener("disabled",(()=>{for(const o of l)if(null!==t[o]){const l=n(o).querySelector("h4")
l.innerText=l.innerText.replace(` (${t[o]})`,"")}})),o.self.addEventListener("reenabled",(()=>{for(const o of l)null!==t[o]&&(n(o).querySelector("h4").innerText+=` (${t[o]})`)}))
for(const s of l)fetch(`https://scratch.mit.edu/users/${e}/${s}/`,{credentials:"omit"}).then((o=>o.text())).then((l=>{const e=l.search("<h2>"),c=l.substring(e,e+200).match(/\(([^)]+)\)/)[1],r=n(s)
if(void 0!==r){const n=r.querySelector("h4")
let l=n.innerText.match(/\([0-9+]+\)/g)
l&&(n.innerText=n.innerText.substring(0,n.innerText.indexOf(l[0]))),t[s]=c,o.self.disabled||(n.innerText+=` (${c})`)}})).catch((o=>console.error("Error when fetching",s,"-",o)))}