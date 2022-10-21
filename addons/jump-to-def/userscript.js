import o from"../find-bar/blockly/Utils.js"
export default async function({addon:n,console:t}){if(!n.self._isDevtoolsExtension&&window.initGUI)return t.log("Extension running, stopping addon"),window._devtoolsAddonEnabled=1,void window.dispatchEvent(new CustomEvent("scratchAddonsDevtoolsAddonStopped"))
const i=new o(n),Blockly=await n.tab.traps.getBlockly()
Object.defineProperty(Blockly.Gesture.prototype,"jumpToDef",{get:()=>!n.self.disabled})
const e=Blockly.Gesture.prototype.doBlockClick_
Blockly.Gesture.prototype.doBlockClick_=function(){if(!n.self.disabled&&(1===this.mostRecentEvent_.button||this.mostRecentEvent_.shiftKey)){let o=this.startBlock_
for(;o;o=o.getSurroundParent())if("procedures_call"===o.type){let n=o.getProcCode(),t=i.getWorkspace().getTopBlocks()
for(const o of t)if("procedures_definition"===o.type){let t=o.getChildren()[0].getProcCode()
if(t&&t===n)return void i.scrollBlockIntoView(o)}}}e.call(this)}}