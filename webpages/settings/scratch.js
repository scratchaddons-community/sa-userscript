import"../../background/declare-scratchaddons-object.js"
import"../../background/load-addon-manifests.js"
import"../../background/get-addon-settings.js"
import"../set-lang.js"
import"../../background/handle-settings-page.js"
const e=document.querySelector("iframe")
window.addEventListener("message",(async r=>{function s(e={}){return r.source.postMessage({res:e,reqId:`${r.data.id}r`},r.origin)}if(![e.contentWindow,window].includes(r.source)||r.data.reqId||!r.data?.message)return
const t=r.data.message
return t.title?(document.title=t.title,s()):"waitForState"===t?scratchAddons.localState.allReady?s():scratchAddons.localEvents.addEventListener("ready",(()=>s())):"areListenersReady"===t?r.source.postMessage("listeners ready",r.origin):void 0})),e.contentWindow.postMessage("listeners ready","*")
