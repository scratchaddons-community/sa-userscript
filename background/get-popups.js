const c=chrome.runtime.getURL("popups")
chrome.runtime.onMessage.addListener(((s,d,n)=>{if(!s?.requestPopupInfo)return
if(!d.url?.startsWith(c))return
const r=()=>{const{addonId:c}=s.requestPopupInfo,d=scratchAddons.manifests.find((({addonId:s,manifest:d})=>c===s&&d.popup))
if(d)return{popup:d.manifest.popup,settings:JSON.parse(JSON.stringify(scratchAddons.globalState.addonSettings))}}
if(!scratchAddons.localState.allReady)return scratchAddons.localEvents.addEventListener("ready",(()=>n(r())),{once:1}),1
n(r())})),chrome.runtime.onConnect.addListener((s=>{if(!s.sender.url?.startsWith(c))return
const d=s.name
scratchAddons.popupPorts[d]||(scratchAddons.popupPorts[d]=[]),scratchAddons.popupPorts[d].push(s),s.postMessage("ping"),s.onDisconnect.addListener((()=>{scratchAddons.popupPorts[s.name]=scratchAddons.popupPorts[s.name].filter((c=>c!==s))}))}))
