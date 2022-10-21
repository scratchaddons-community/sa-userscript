function c(){return fetch("https://scratch.mit.edu/csrf_token/",{credentials:"include"}).catch((()=>{})).then((()=>{return(c=chrome.cookies.get,(...s)=>new Promise((t=>c(...s,t))))({url:"https://scratch.mit.edu/",name:"scratchcsrftoken"})
var c})).then((c=>scratchAddons.cookieStoreId=c.storeId))}function s(c){return new Promise((s=>{chrome.cookies.get({url:"https://scratch.mit.edu/",name:c},(c=>{s(c&&c.value?c.value:null)}))}))}async function t(){let c,e
if(r)return
r=1
try{c=await fetch("https://scratch.mit.edu/session/",{headers:{"X-Requested-With":"XMLHttpRequest"}}),e=await c.json()}catch(a){if(console.warn(a),e={},c&&!c.ok||!c)return r=0,setTimeout(t,6e4),void(scratchAddons.globalState.auth={isLoggedIn:0,username:null,userId:null,xToken:null,csrfToken:null,scratchLang:await s("scratchlanguage")||navigator.language})}const a=await s("scratchlanguage")||navigator.language,n=await s("scratchcsrftoken")
scratchAddons.globalState.auth={isLoggedIn:Boolean(e.user),username:e.user?e.user.username:null,userId:e.user?e.user.id:null,xToken:e.user?e.user.token:null,csrfToken:n,scratchLang:a},r=0}import{startCache as e}from"./message-cache.js"
import{openMessageCache as a}from"../libraries/common/message-cache.js"
import{purgeDatabase as n}from"../addons/scratch-notifier/notifier.js"
!async function(){const s=await c()
console.log("Default cookie store ID: ",s),await t(),e(s)}(),chrome.cookies.onChanged.addListener((({cookie:r})=>{"scratchsessionsid"!==r.name&&"scratchlanguage"!==r.name&&"scratchcsrftoken"!==r.name||("scratchlanguage"===r.name?async function(){scratchAddons.globalState.auth.scratchLang=await s("scratchlanguage")||navigator.language}():scratchAddons.cookieStoreId?r.storeId!==scratchAddons.cookieStoreId||"scratchcsrftoken"===r.name&&r.value===scratchAddons.globalState.auth.csrfToken?"scratchsessionsid"===r.name&&a(r.storeId,1):t().then((()=>{"scratchsessionsid"===r.name&&(e(scratchAddons.cookieStoreId,1),n())})):c().then((()=>t())),function(c){if("scratchlanguage"===c.name)return
const s={}
"object"==typeof browser&&(s.cookieStoreId=c.storeId),chrome.tabs.query(s,(c=>c.forEach((c=>chrome.tabs.sendMessage(c.id,"refetchSession",(()=>{chrome})))))),scratchAddons.sendToPopups({refetchSession:1})}(r))}))
let r=0
