function e(){if(!window.innerWidth||!window.innerHeight)return void setTimeout(e,0)
let t=window.innerWidth
document.documentElement.style.setProperty("--width",`${t}px`)
let o=window.innerHeight-3
document.documentElement.style.setProperty("--height",`${o}px`),document.body.classList.remove("loading")}import t from"../../libraries/common/global-theme.js"
t(),window.addEventListener("load",(()=>setTimeout(e,0)))
const vue=new Vue({el:"body",data:{popups:[],currentPopup:null,popupsWithIframes:[]},methods:{msg:(e,...t)=>chrome.i18n.getMessage(e,...t),direction:()=>chrome.i18n.getMessage("@@bidi_dir"),closePopup(){setTimeout((()=>window.close()),100)},openSettingsPage(){chrome.runtime.openOptionsPage(),this.closePopup()},setPopup(e){this.currentPopup!==e&&(this.currentPopup=e,chrome.storage.local.set({lastSelectedPopup:e._addonId}),this.popupsWithIframes.includes(e)||this.popupsWithIframes.push(e),setTimeout((()=>document.querySelector("iframe:not([style='display: none;'])").focus()),0))},iframeSrc:e=>vue.popups.find((t=>t._addonId===e)).html},computed:{changelogLink(){const e=chrome.i18n.getUILanguage()
return`https://scratchaddons.com/${e.startsWith("en")?"":`${e.split("-")[0]}/`}changelog/?utm_source=userscript&utm_medium=popup&utm_campaign=v${chrome.runtime.getManifest().version}`},version(){const e=chrome.runtime.getManifest().version_name.includes("-prerelease"),t=chrome.runtime.getManifest().version
return e?t+"-pre":t}}})
let o=null
const n=["scratch-messaging","cloud-games","__settings__"]
chrome.runtime.sendMessage("getSettingsInfo",(e=>{o=e.manifests
const t=Object.keys(e.addonsEnabled).filter((t=>1==e.addonsEnabled[t])).map((e=>o.find((t=>t.addonId===e)))).filter((e=>void 0!==e)).filter((({manifest:e})=>e.popup)).sort((({addonId:e},{addonId:t})=>n.indexOf(e)-n.indexOf(t))).map((({addonId:e,manifest:t})=>(t.popup._addonId=e)&&Object.assign(t.popup,{html:`../../popups/${e}/${t.popup.html}`})))
t.push({name:chrome.i18n.getMessage("quickSettings"),icon:"../../images/icons/wrench.svg",html:"../settings/index.html",_addonId:"__settings__"}),vue.popups=t,chrome.storage.local.get("lastSelectedPopup",(({lastSelectedPopup:e})=>{let t=0
"string"==typeof e&&(t=vue.popups.findIndex((t=>t._addonId===e)),-1===t&&(t=0)),vue.setPopup(vue.popups[t])}))})),chrome.runtime.onMessage.addListener((e=>{if(e.changeEnabledState){const{addonId:t,newState:s}=e.changeEnabledState,{manifest:i}=o.find((e=>e.addonId===t))
if(!i.popup)return
if(1==s)i.popup._addonId=t,Object.assign(i.popup,{html:`../../popups/${t}/${i.popup.html}`}),vue.popups.push(i.popup),vue.popups=vue.popups.sort((({_addonId:e},{_addonId:t})=>n.indexOf(e)-n.indexOf(t)))
else{let e=vue.popupsWithIframes.findIndex((e=>e._addonId===t));-1!==e&&vue.popupsWithIframes.splice(e,1),e=vue.popups.findIndex((e=>e._addonId===t)),vue.popups.splice(e,1),vue.popups.includes(vue.currentPopup)||vue.setPopup(vue.popups[0])}}})),chrome.runtime.sendMessage("checkPermissions")
