async function s({addonId:s,manifest:t,url:e}){const n=[],r=[]
for(const n of t.userscripts||[])a({url:e},n,s)&&r.push({url:n.url,runAtComplete:"boolean"==typeof n.runAtComplete?n.runAtComplete:1})
const c=[]
for(let r=0;t.userstyles?.length>r;r++){const d=t.userstyles[r],o=chrome.runtime.getURL(`/addons/${s}/${d.url}`)
if(a({url:e},d,s))if(t.injectAsStyleElt){const t=c.push(null)-1
n.push(fetch(o).then((s=>s.text())).then((e=>{e=e.replace(/\%addon-self-dir\%/g,chrome.runtime.getURL(`addons/${s}`)),c[t]={href:o,text:e+=`\n/*# sourceURL=${d.url} */`,index:r,addonEnabled:d.if?.addonEnabled}})))}else c.push({href:o,index:r,addonEnabled:d.if?.addonEnabled})}return await Promise.all(n),{userscripts:r,userstyles:c,cssVariables:t.customCssVariables||[]}}async function t(t){const e={url:t,httpStatusCode:null,globalState:{},addonsWithUserscripts:[],addonsWithUserstyles:[]},a=[],n=await c()
return scratchAddons.manifests.forEach((async({addonId:c,manifest:d},o)=>{if(!scratchAddons.localState.addonsEnabled[c])return
if(d.permissions?.some((s=>n.includes(s))))return void r(c,0)
const i=s({addonId:c,manifest:d,url:t})
a.push(i)
const{userscripts:l,userstyles:u,cssVariables:f}=await i
l.length&&e.addonsWithUserscripts.push({addonId:c,scripts:l}),u.length&&e.addonsWithUserstyles.push({addonId:c,styles:u,cssVariables:f,injectAsStyleElt:d.injectAsStyleElt,index:o})})),await Promise.all(a),e.globalState=scratchAddons.globalState._target,e}function e({tabId:s,frameId:t,url:e}){return`${s}/${t}@${e}`}function a(s,t,e){if(t.if&&(a=t,r=scratchAddons.globalState.addonSettings[e],a.if.addonEnabled?.length&&(Array.isArray(a.if.addonEnabled)?a.if.addonEnabled:[a.if.addonEnabled]).every((s=>!scratchAddons.localState.addonsEnabled[s]))||a.if.settings&&Object.keys(a.if.settings).some((s=>(Array.isArray(a.if.settings[s])?a.if.settings[s]:[a.if.settings[s]]).every((t=>r[s]!==t))))))return 0
var a,r
const c=new URL(s.url),{matches:d,_scratchDomainImplied:l}=t,u=c.pathname,f=c.origin,m=f+u,p="https://scratch.mit.edu"===f
if("*"===d)return p
if(d instanceof RegExp)return l&&!p?0:d.test(l?u:m)
for(const s of d)if(s instanceof RegExp){if(s._scratchDomainImplied&&!p)continue
if(s.test(s._scratchDomainImplied?u:m))return 1}else if({}.hasOwnProperty.call(o,s)){if(p&&o[s].test(u))return 1}else if({}.hasOwnProperty.call(i,s)){if(p&&i[s](u))return 1}else if(n(s,c))return 1
return 0}function n(s,t){const e=new URL(s).pathname.split("/"),a=t.pathname.split("/")
for(""!==a[a.length-1]&&a.push(""),""!==e[e.length-1]&&"*"!==e[e.length-1]&&e.push("");e.length;){const s=e.shift()
if(s!==a.shift()&&"*"!==s)return 0}return 1}import chrome from"../libraries/common/chrome.js"
import r from"./imports/change-addon-state.js"
import{getMissingOptionalPermissions as c}from"./imports/util.js"
chrome.runtime.onMessage.addListener((function(s,t,e){if(s.replaceTabWithUrl)chrome.tabs.update(t.tab.id,{url:s.replaceTabWithUrl})
else if(s.getEnabledAddons){let t=Object.keys(scratchAddons.localState.addonsEnabled).filter((s=>scratchAddons.localState.addonsEnabled[s]))
const a=s.getEnabledAddons.tag
a&&(t=t.filter((s=>scratchAddons.manifests.some((({addonId:t,manifest:e})=>t===s&&e.tags.includes(a)))))),e(t)}})),scratchAddons.localEvents.addEventListener("addonDynamicEnable",(({detail:t})=>{const{addonId:e,manifest:a,partialDynamicEnableBy:n}=t
chrome.tabs.query({},(t=>t.forEach((t=>{t.url&&chrome.tabs.sendMessage(t.id,"getInitialUrl",{frameId:0},(r=>{r&&(async()=>{const{userscripts:c,userstyles:d,cssVariables:o}=await s({addonId:e,url:r,manifest:a})
n&&!d.some((s=>s.addonEnabled?.includes(n)))||(c.length||d.length)&&chrome.tabs.sendMessage(t.id,{dynamicAddonEnabled:{scripts:c,userstyles:d,cssVariables:o,addonId:e,injectAsStyleElt:!!a.injectAsStyleElt,index:scratchAddons.manifests.findIndex((s=>s.addonId===e)),dynamicEnable:Boolean(a.dynamicEnable),dynamicDisable:Boolean(a.dynamicDisable),partial:!!n}},{frameId:0})})()}))}))))})),scratchAddons.localEvents.addEventListener("addonDynamicDisable",(({detail:s})=>{const{addonId:t,manifest:e,partialDynamicDisableBy:a}=s
let n
a&&(n=e.userstyles?.filter((s=>s.if?.addonEnabled?.includes(a))).map((s=>chrome.runtime.getURL(`/addons/${t}/${s.url}`)))),chrome.tabs.query({},(s=>s.forEach((s=>{s.url&&chrome.tabs.sendMessage(s.id,{dynamicAddonDisable:{addonId:t,partialDynamicDisabledStyles:n}},{frameId:0},(()=>{}))}))))})),scratchAddons.localEvents.addEventListener("updateUserstylesSettingsChange",(({detail:t})=>{const{addonId:e,manifest:a,newSettings:n}=t
chrome.tabs.query({},(t=>t.forEach((t=>{t.url&&chrome.tabs.sendMessage(t.id,"getInitialUrl",{frameId:0},(r=>{r&&(async()=>{const{userscripts:c,userstyles:d,cssVariables:o}=await s({addonId:e,url:r,manifest:a})
chrome.tabs.sendMessage(t.id,{updateUserstylesSettingsChange:{scripts:c,userstyles:d,cssVariables:o,addonId:e,addonSettings:n,injectAsStyleElt:!!a.injectAsStyleElt,index:scratchAddons.manifests.findIndex((s=>s.addonId===e)),dynamicEnable:a.dynamicEnable,dynamicDisable:a.dynamicDisable}},{frameId:0})})()}))}))))}))
const d=new Map
chrome.webRequest.onBeforeRequest.addListener((async s=>{if(!scratchAddons.localState.allReady)return
const a=e({tabId:s.tabId,frameId:s.frameId,url:s.url}),n={loading:1}
d.set(a,n)
const r=await t(s.url)
d.get(a)===n&&(d.set(a,{loading:0,info:r,timestamp:Date.now()}),scratchAddons.localEvents.dispatchEvent(new CustomEvent("csInfoCacheUpdated")))}),{urls:["https://scratch.mit.edu/*"],types:["main_frame","sub_frame"]}),chrome.alarms.create("cleanCsInfoCache",{periodInMinutes:1}),chrome.alarms.onAlarm.addListener((s=>{"cleanCsInfoCache"===s.name&&d.forEach(((s,t)=>{s.loading||Date.now()-s.timestamp>45e3&&d.delete(t)}))})),chrome.webRequest.onResponseStarted.addListener((s=>{const t=e({tabId:s.tabId,frameId:s.frameId,url:s.url}),a=d.get(t)
a&&0==a.loading&&(a.info.httpStatusCode=s.statusCode)}),{urls:["https://scratch.mit.edu/*"],types:["main_frame"]}),chrome.runtime.onMessage.addListener(((s,a,n)=>{if(s.contentScriptReady){if(!scratchAddons.localState.allReady)return scratchAddons.localEvents.addEventListener("ready",(async()=>{const e=await t(s.contentScriptReady.url)
n(e)}),{once:1}),1
{const r=e({tabId:a.tab.id,frameId:a.frameId,url:s.contentScriptReady.url}),c=()=>d.get(r)
let o=c()
if(!o)return t(s.contentScriptReady.url).then((s=>{n(s)})),1
if(o.loading)return scratchAddons.localEvents.addEventListener("csInfoCacheUpdated",(function s(){o=c(),o?o.loading||(n(o.info),d.delete(r),scratchAddons.localEvents.removeEventListener("csInfoCacheUpdated",s)):scratchAddons.localEvents.removeEventListener("csInfoCacheUpdated",s)})),1
n(o.info),d.delete(r)}}})),chrome.tabs.query({},(s=>s.forEach((s=>{s.url&&chrome.tabs.sendMessage(s.id,"backgroundListenerReady",(()=>{}))}))))
const o={projects:/^\/projects\/(?:editor|\d+(?:\/(?:fullscreen|editor))?)\/?$/,projectEmbeds:/^\/projects\/\d+\/embed\/?$/,studios:/^\/studios\/\d+(?:\/(?:projects|comments|curators|activity))?\/?$/,profiles:/^\/users\/[\w-]+\/?$/,topics:/^\/discuss\/topic\/\d+\/?$/,newPostScreens:/^\/discuss\/(?:topic\/\d+|\d+\/topic\/add)\/?$/,editingScreens:/^\/discuss\/(?:topic\/\d+|\d+\/topic\/add|post\/\d+\/edit|settings\/[\w-]+)\/?$/,forums:/^\/discuss(?!\/m(?:$|\/))(?:\/.*)?$/,scratchWWWNoProject:/^\/(?:(?:about|annual-report(?:\/\d+)?|camp|conference\/20(?:1[79]|[2-9]\d|18(?:\/(?:[^\/]+\/details|expect|plan|schedule))?)|contact-us|code-of-ethics|credits|developers|DMCA|download(?:\/scratch2)?|educators(?:\/(?:faq|register|waiting))?|explore\/(?:project|studio)s\/\w+(?:\/\w+)?|community_guidelines|faq|ideas|join|messages|parents|privacy_policy(?:\/apps)?|research|scratch_1\.4|search\/(?:project|studio)s|starter-projects|classes\/(?:complete_registration|[^\/]+\/register\/[^\/]+)|signup\/[^\/]+|terms_of_use|wedo(?:-legacy)?|ev3|microbit|vernier|boost|studios\/\d*(?:\/(?:projects|comments|curators|activity))?|components|become-a-scratcher)\/?)?$/},i={isNotScratchWWW(s){const{projects:t,projectEmbeds:e,scratchWWWNoProject:a}=o
return!(t.test(s)||e.test(s)||a.test(s)||/^\/(?:50[03]\/?$|cdn\/)/.test(s))}}
