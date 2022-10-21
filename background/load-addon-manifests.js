import chrome from"../libraries/common/chrome.js"
const s=(s,o,t)=>{const n=t?`${t}-${o.id}`:o.id
switch(o.name=scratchAddons.l10n.get(`${s}/@settings-name-${n}`,{commentIcon:"@comment.svg",forumIcon:"@forum.svg",heartIcon:"@heart.svg",starIcon:"@star.svg",followIcon:"@follow.svg",studioAddIcon:"@studio-add.svg",studioIcon:"@studio.svg",remixIcon:"@remix.svg",adminusersIcon:"@adminusers.svg",usersIcon:"@users.svg"},o.name),o.type){case"string":o.default&&(o.default=scratchAddons.l10n.get(`${s}/@settings-default-${n}`,{},o.default))
break
case"select":o.potentialValues=o.potentialValues.map((o=>(o.name=scratchAddons.l10n.get(`${s}/@settings-select-${n}-${o.id}`,{},o.name),o)))}}
!async function(){const o=await new Promise((s=>{chrome.storage.local.get("forceEnglish",(o=>{s(!!o.forceEnglish)}))})),t=await(await fetch(chrome.runtime.getURL("/addons/manifests.json"))).json()
await scratchAddons.l10n.load(Object.keys(t))
const n=o||scratchAddons.l10n.locale.startsWith("en")
for(const o in t){if(o.startsWith("//"))continue
let c
try{c=t[o]}catch(s){throw console.error(`Failed to load addon manifest for ${o}, crashing:`,s),chrome.tabs.create({url:`data:text/plain,Scratch Addons crashed: invalid addon.json for addon with id ${o}. Click the "Errors" button on the extension tile for more details.`}),s}let e=c.updateUserstylesOnSettingsChange&&!(c.dynamicEnable&&c.dynamicDisable)
if(!n){c._english={}
for(const s of["name","description"])c[s]&&(c._english[s]=c[s],c[s]=scratchAddons.l10n.get(`${o}/@${s}`,{},c[s]))
if(c.info)for(const s of c.info||[])s.text=scratchAddons.l10n.get(`${o}/@info-${s.id}`,{},s.text)
if(c.credits)for(const s of c.credits||[])s.note&&(s.note=scratchAddons.l10n.get(`${o}/@credits-${s.id}`,{},s.note))
c.popup&&(c.popup.name=scratchAddons.l10n.get(`${o}/@popup-name`,{},c.popup.name)),c.latestUpdate?.temporaryNotice&&(c.latestUpdate.temporaryNotice=scratchAddons.l10n.get(`${o}/@update`,{},c.latestUpdate.temporaryNotice))}for(const s of["userscripts","userstyles"])for(const t of c[s]||[]){const{matches:n}=t
if("string"==typeof n&&n.startsWith("^"))t._scratchDomainImplied=!n.startsWith("^https:"),t.matches=new RegExp(n,"u")
else if(Array.isArray(n))for(let s=n.length;s--;){const o=n[s]
"string"==typeof o&&o.startsWith("^")&&(n[s]=new RegExp(o,"u"),n[s]._scratchDomainImplied=!o.startsWith("^https:"))}if("userstyles"===s){if(t.if?.addonEnabled?.length){"string"==typeof t.if.addonEnabled&&(t.if.addonEnabled=[t.if.addonEnabled])
for(const s of t.if.addonEnabled)scratchAddons.dependents[s]||(scratchAddons.dependents[s]=new Set),scratchAddons.dependents[s].add(o)}e&&Object.keys(t.if?.settings||{}).length>0&&(e=0,console.warn("Addon",o,"has updateUserstylesOnSettingsChange set to true without dynamic enable or disable.","This will cause an issue as userstyle",t.url,"has a setting as a condition!"))}}if(!n){c._english={}
for(const s of["name","description"])c[s]&&(c._english[s]=c[s],c[s]=scratchAddons.l10n.get(`${o}/@${s}`,{},c[s]))
if(c.info)for(const s of c.info||[])s.text=scratchAddons.l10n.get(`${o}/@info-${s.id}`,{},s.text)
c.popup&&(c.popup.name=scratchAddons.l10n.get(`${o}/@popup-name`,{},c.popup.name))
const t=[]
for(const n of c.settings||[])if(s(o,n),"string"===n.type)t.push(n.id)
else if("table"===n.type){const t=[]
n.row.forEach((c=>{s(o,c,n.id),"string"===c.type&&t.push(c.id)}))
for(let s=0;(n.default||[]).length>s;s++){const c=n.default[s]
for(const e of t)c[e]=scratchAddons.l10n.get(`${o}/@settings-default-${n.id}-${s}-${t}`,{},c[e])}for(let s=0;(n.presets||[]).length>s;s++){const c=n.presets[s]
c.name=scratchAddons.l10n.get(`${o}/@preset-${n.id}-${s}`,{},c.name)
for(const e of t)c.values[e]=scratchAddons.l10n.get(`${o}/@preset-value-${n.id}-${s}-${t}`,{},c.values[e])}}for(const s of c.presets||[]){for(const t of["name","description"])s[t]&&(s[t]=scratchAddons.l10n.get(`${o}/@preset-${t}-${s.id}`,{},s[t]))
for(const n of t)"string"==typeof s.values[n]&&(s.values[n]=scratchAddons.l10n.get(`${o}/@preset-value-${s.id}-${n}`,{},s.values[n]))}}scratchAddons.manifests.push({addonId:o,manifest:c})}scratchAddons.localState.ready.manifests=1,scratchAddons.localEvents.dispatchEvent(new CustomEvent("manifestsReady"))}()
