function e(){"unmute"===c&&chrome.contextMenus.remove("unmute"),c="mute",chrome.contextMenus.create({id:"mute",title:chrome.i18n.getMessage("muteFor"),contexts:["browser_action"]})
for(const e of o)chrome.contextMenus.create({id:`mute_${e.mins}`,title:e.name,parentId:"mute",contexts:["browser_action"]})
const e=chrome.runtime.getManifest().version_name.includes("-prerelease")
chrome.browserAction.setIcon({path:{16:e?"../images/icon-blue-16.png":"../images/icon-16.png",32:e?"../images/icon-blue-32.png":"../images/icon-32.png"}})}function m(){"mute"===c&&chrome.contextMenus.remove("mute"),c="unmute",chrome.contextMenus.create({id:"unmute",title:chrome.i18n.getMessage("unmute"),contexts:["browser_action"]}),chrome.browserAction.setIcon({path:{16:"../images/icon-gray-16.png",32:"../images/icon-gray-32.png"}})}function n(){scratchAddons.muted=0,t(scratchAddons.cookieStoreId),chrome.storage.local.set({muted:0})}import{updateBadge as t}from"./message-cache.js"
const o=[{name:chrome.i18n.getMessage("15min"),mins:15},{name:chrome.i18n.getMessage("1hour"),mins:60},{name:chrome.i18n.getMessage("8hours"),mins:480},{name:chrome.i18n.getMessage("24hours"),mins:1440},{name:chrome.i18n.getMessage("untilEnabled"),mins:Infinity}]
chrome.storage.local.get("muted",(n=>{n.muted?m():e(),scratchAddons.muted=n.muted})),chrome.contextMenus.removeAll()
let c=null
chrome.contextMenus.onClicked.addListener((({parentMenuItemId:o,menuItemId:c})=>{if("mute"===o){const e=Number(c.split("_")[1])
m(),function(e){Infinity!==e&&chrome.alarms.create("muted",{delayInMinutes:e}),scratchAddons.muted=1,t(scratchAddons.cookieStoreId),chrome.storage.local.set({muted:1})}(e)}else"unmute"===c&&(e(),n())})),chrome.alarms.onAlarm.addListener((m=>{"muted"===m.name&&(n(),e())}))
