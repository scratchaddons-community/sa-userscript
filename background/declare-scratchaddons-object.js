import s from"./imports/global-state.js"
import t from"./imports/local-state.js"
import c from"./l10n.js"
window.scratchAddons={},scratchAddons.localEvents=new EventTarget,scratchAddons.manifests=[],scratchAddons.dependents={},scratchAddons.methods={},scratchAddons.l10n=new c,scratchAddons.globalState=s,console.log("%cscratchAddons.globalState","font-weight: bold;","initialized:\n",JSON.parse(JSON.stringify(scratchAddons.globalState))),scratchAddons.localState=t,console.log("%cscratchAddons.localState","font-weight: bold;","initialized:\n",JSON.parse(JSON.stringify(scratchAddons.localState))),scratchAddons.popupPorts={},scratchAddons.sendToPopups=s=>Object.values(scratchAddons.popupPorts).forEach((t=>t.forEach((t=>t.postMessage(s)))))
