import{updateBadge as a}from"../message-cache.js"
import chrome from"../../libraries/common/chrome.js"
export default(d,n)=>{scratchAddons.localState.addonsEnabled[d]=n,chrome.storage.sync.set({addonsEnabled:scratchAddons.localState._target.addonsEnabled})
const{manifest:s}=scratchAddons.manifests.find((a=>a.addonId===d)),{dynamicEnable:c,dynamicDisable:o}=s
if(n?(c||o)&&scratchAddons.localEvents.dispatchEvent(new CustomEvent("addonDynamicEnable",{detail:{addonId:d,manifest:s}})):o&&scratchAddons.localEvents.dispatchEvent(new CustomEvent("addonDynamicDisable",{detail:{addonId:d,manifest:s}})),"msg-count-badge"===d&&a(scratchAddons.cookieStoreId),scratchAddons.dependents[d]?.size)for(const a of scratchAddons.dependents[d]){if(!scratchAddons.localState.addonsEnabled[a])continue
const s=scratchAddons.manifests.find((d=>d.addonId===a)).manifest
n&&s.dynamicEnable?scratchAddons.localEvents.dispatchEvent(new CustomEvent("addonDynamicEnable",{detail:{addonId:a,manifest:s,partialDynamicEnableBy:d}})):!n&&s.dynamicDisable&&scratchAddons.localEvents.dispatchEvent(new CustomEvent("addonDynamicDisable",{detail:{addonId:a,manifest:s,partialDynamicDisableBy:d}}))}}
