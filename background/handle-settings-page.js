import s from"./imports/change-addon-state.js"
import t from"../libraries/common/minify-settings.js"
import{updateBadge as n}from"./message-cache.js"
import chrome from"../libraries/common/chrome.js"
chrome.runtime.onMessage.addListener((function(e,d,o){if("getSettingsInfo"===e){const s=()=>o({manifests:scratchAddons.manifests,addonsEnabled:scratchAddons.localState._target.addonsEnabled,addonSettings:scratchAddons.globalState._target.addonSettings})
if(!scratchAddons.localState.allReady)return scratchAddons.localEvents.addEventListener("ready",s),1
s()}else if(e.changeEnabledState){const{addonId:t,newState:n}=e.changeEnabledState
s(t,n)}else if(e.changeAddonSettings){const{addonId:s,newSettings:d}=e.changeAddonSettings
scratchAddons.globalState.addonSettings[s]=d
const o=chrome.runtime.getManifest().version_name.endsWith("-prerelease")
chrome.storage.sync.set({addonSettings:t(scratchAddons.globalState.addonSettings._target,o?null:scratchAddons.manifests)})
const a=scratchAddons.manifests.find((t=>t.addonId===s)).manifest,{updateUserstylesOnSettingsChange:c}=a
c&&scratchAddons.localEvents.dispatchEvent(new CustomEvent("updateUserstylesSettingsChange",{detail:{addonId:s,manifest:a,newSettings:d}})),"msg-count-badge"===s&&n(scratchAddons.cookieStoreId)}}))
