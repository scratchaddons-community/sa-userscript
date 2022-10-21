export default async function({addon:t,msg:n}){const Blockly=await t.tab.traps.getBlockly()
Blockly.RENAME_BROADCAST_MESSAGE_ID="RENAME_BROADCAST_MESSAGE_ID"
const o=Blockly.FieldVariable.dropdownCreate
Blockly.FieldVariable.dropdownCreate=function(){const s=o.call(this)
return!t.self.disabled&&this.defaultType_===Blockly.BROADCAST_MESSAGE_VARIABLE_TYPE&&this.sourceBlock_.workspace.getVariableTypes().includes("broadcast_msg")&&s.push([n("RENAME_BROADCAST"),Blockly.RENAME_BROADCAST_MESSAGE_ID]),s}
const s=Blockly.FieldVariable.prototype.onItemSelected
Blockly.FieldVariable.prototype.onItemSelected=function(t,n){var o=this.sourceBlock_.workspace
this.sourceBlock_&&o&&n.getValue()===Blockly.RENAME_BROADCAST_MESSAGE_ID?Blockly.Variables.renameVariable(o,this.variable_):s.call(this,t,n)}
const c=Blockly.Variables.renameVariable
if(Blockly.Variables.renameVariable=function(t,o,s){const i=o.type
if(i!==Blockly.BROADCAST_MESSAGE_VARIABLE_TYPE)c.call(this,t,o,s)
else{const c=n("RENAME_BROADCAST_MODAL_TITLE"),f=Blockly.Variables.nameValidator_.bind(null,i),A=n("RENAME_BROADCAST_TITLE",{name:o.name})
Blockly.prompt(A,o.name,(function(n){var c=f(n,t)
c?(t.renameVariableById(o.getId(),c),s&&s(n)):s&&s(null)}),c,i)}},t.self.enabledLate){const t=Blockly.getMainWorkspace().getAllBlocks()
for(const n of t)for(const t of n.inputList)for(const n of t.fieldRow)n instanceof Blockly.FieldVariable&&(n.menuGenerator_=Blockly.FieldVariable.dropdownCreate)}}