let e=0
export default function t(t){if("object"!=typeof t)throw new Error("ScratchAddons exception: do not specify a notification ID.")
if(scratchAddons.muted)return Promise.resolve(null)
const o=`${t.base}__${Date.now()}_${e++}`
let n
return/Chrom/.test(navigator.userAgent)?n=t:(n=JSON.parse(JSON.stringify(t)),delete n.buttons,delete n.requireInteraction,delete n.silent),delete n.base,n.contextMessage=chrome.i18n.getMessage("extensionName"),new Promise((e=>{chrome.notifications.create(o,n,(()=>e(o)))}))}