import chrome from"../../libraries/common/chrome.js"
import s from"../../libraries/common/global-theme.js"
const vue=new Vue({el:"body",data:{screenshotPath:"../../images/screenshots/permissions-dark.png"},methods:{msg:(s,...e)=>chrome.i18n.getMessage(s,...e)}})
s().then((({theme:s})=>{s&&(vue.screenshotPath="../../images/screenshots/permissions-light.png")})),document.title=chrome.i18n.getMessage("permissionsTitle")
const e=s=>(...e)=>new Promise((i=>s(...e,i)))
document.getElementById("permissionsBtn").addEventListener("click",(async()=>{const s=chrome.runtime.getManifest().permissions.filter((s=>s.startsWith("https://")))
return await e(chrome.permissions.contains)({origins:s})?window.close():await e(chrome.permissions.request)({origins:s})?chrome.runtime.reload():void alert(chrome.i18n.getMessage("permissionsDenied"))}))
