export default async function({addon:e,msg:n}){function t(t,s){return o||(o=[...t]),e.self.disabled||(t.push(["-","-"],[",",","],[".","."]),t.splice(5,0,[n("enter-key"),"enter"]),e.settings.get("experimentalKeys")&&t.push(["`","`"],["=","="],["[","["],["]","]"],["\\","\\"],[";",";"],["'","'"],["/","/"]),s&&e.settings.get("shiftKeys")&&t.push(["!","!"],["@","@"],["#","#"],["$","$"],["%","%"],["^","^"],["&","&"],["*","*"],["(","("],[")",")"],["_","_"],["+","+"],["{","{"],["}","}"],["|","|"],[":",":"],['"','"'],["?","?"],["<","<"],[">",">"],["~","~"])),t}const s=await e.tab.traps.getBlockly()
let o=null
for(const e of["sensing_keyoptions","event_whenkeypressed"]){const n=s.Blocks[e],o=n.init
n.init=function(...n){const s=this.jsonInit
return this.jsonInit=function(n){return t(n.args0[0].options,"event_whenkeypressed"===e),s.call(this,n)},o.call(this,...n)}}const i=()=>{const e=Blockly.getMainWorkspace(),n=e&&e.getFlyout()
if(e&&n){const s=[...e.getAllBlocks(),...n.getWorkspace().getAllBlocks()]
for(const e of s){if("event_whenkeypressed"!==e.type&&"sensing_keyoptions"!==e.type)continue
const n=e.inputList[0]
if(!n)continue
const s=n.fieldRow.find((e=>e&&Array.isArray(e.menuGenerator_)))
s&&(s.menuGenerator_=t(o?[...o]:s.menuGenerator_,"event_whenkeypressed"===e.type))}}}
i(),e.settings.addEventListener("change",i),e.self.addEventListener("disabled",i),e.self.addEventListener("reenabled",i)}