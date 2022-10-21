export default async function({addon:n}){function t(t){e.grid_.snapToGrid_=t,e.grid_.spacing_=t?n.settings.get("grid"):40,e.grid_.update(e.scale)}const Blockly=await n.tab.traps.getBlockly()
let e=Blockly.getMainWorkspace()
const a=Blockly.init_
Blockly.init_=function(...c){return e=c[0],n.self.disabled||t(1),a.call(this,...c)},t(1),n.settings.addEventListener("change",(()=>t(1))),n.self.addEventListener("disabled",(()=>t(0))),n.self.addEventListener("reenabled",(()=>t(1)))}