export default async function({addon:e}){const t=await e.tab.traps.getBlockly(),n=()=>{const e=Blockly.getMainWorkspace()
t.inject.loadSounds_(e.options.pathToMedia,e)}
n()
const o=t.init_
t.init_=function(...e){return e[0].options.hasSounds=1,o.call(this,...e)},e.self.addEventListener("disabled",(()=>{const e=Blockly.getMainWorkspace().getAudioManager()
delete e.SOUNDS_.click,delete e.SOUNDS_.delete})),e.self.addEventListener("reenabled",n)}