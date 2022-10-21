import*as a from"../libraries/common/message-cache.js"
import{notifyNewMessages as t}from"../addons/scratch-notifier/notifier.js"
import chrome from"../libraries/common/chrome.js"
let s=0,c=0
const e=a=>(...t)=>new Promise((s=>a(...t,s)))
export async function updateBadge(t){if(c)return
if(!t)return
c=1,scratchAddons.localState.allReady||await new Promise((a=>scratchAddons.localEvents.addEventListener("ready",a,{once:1})))
const s=scratchAddons.globalState.addonSettings["msg-count-badge"]||{},d=scratchAddons.globalState.auth.isLoggedIn
let o
try{if(scratchAddons.localState.addonsEnabled["msg-count-badge"]&&(s.showOffline||d)&&!scratchAddons.muted){o=await a.openDatabase()
const c=await o.get("count",t)
if(c||!d){const a=d?s.color:"#dd2222",t=d?String(c):"?"
return await e(chrome.browserAction.setBadgeBackgroundColor.bind(chrome.browserAction))({color:a}),void await e(chrome.browserAction.setBadgeText.bind(chrome.browserAction))({text:t})}}}catch(a){console.error("Error while updating badge",a)}finally{c=0,o&&await o.close()}await e(chrome.browserAction.setBadgeText.bind(chrome.browserAction))({text:""})}export async function startCache(t,c){s=0,await e(chrome.alarms.clear.bind(chrome.alarms))("fetchMessages")
try{await a.updateMessages(t,c,scratchAddons.globalState.auth.username,scratchAddons.globalState.auth.xToken),await updateBadge(t)}catch(a){console.error("Could not fetch and update messages due to error: ",a)}s=1,chrome.alarms.create("fetchMessages",{delayInMinutes:5,periodInMinutes:5})}chrome.alarms.create("updateBadge",{periodInMinutes:1}),chrome.alarms.onAlarm.addListener((async c=>{if(s)switch(c.name){case"fetchMessages":try{const s=await a.updateMessages(scratchAddons.cookieStoreId,0,scratchAddons.globalState.auth.username,scratchAddons.globalState.auth.xToken)
await updateBadge(scratchAddons.cookieStoreId),scratchAddons.localState.addonsEnabled["scratch-notifier"]&&t(s)}catch(a){console.error("Could not fetch and update messages due to error: ",a)}break
case"updateBadge":if(scratchAddons.globalState.auth.isLoggedIn){const t=await a.fetchMessageCount(scratchAddons.globalState.auth.username),s=await a.openDatabase()
try{await s.put("count",t,scratchAddons.cookieStoreId)}finally{await s.close()}}await updateBadge(scratchAddons.cookieStoreId)}})),chrome.runtime.onMessage.addListener((a=>{a?.forceBadgeUpdate&&a.forceBadgeUpdate.store===scratchAddons.cookieStoreId&&updateBadge(scratchAddons.cookieStoreId)}))
