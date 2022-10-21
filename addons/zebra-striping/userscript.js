export default async function({addon:t}){const o=t.tab.traps.vm,n=await t.tab.traps.getBlockly(),e=n.BlockSvg.prototype.render
for(n.BlockSvg.prototype.render=function(t){if(!this.isInFlyout&&!this.isShadow()&&null===this.getParent()){const t=new Map
for(const o of this.getDescendants()){const n=o.getSurroundParent()
let e=0
n&&(o.isShadow()?e=!!t.get(n):n.getCategory()===o.getCategory()&&(e=!t.get(n))),t.set(o,e)
const r=[o.svgPath_]
for(const t of o.inputList){t.outlinePath&&r.push(t.outlinePath)
for(const o of t.fieldRow)o.fieldGroup_&&r.push(o.fieldGroup_)}for(const t of r)t.classList.toggle("sa-zebra-stripe",e)}}return e.call(this,t)},o.editingTarget&&o.emitWorkspaceUpdate();;){const o=await t.tab.waitForElement('filter[id*="blocklyReplacementGlowFilter"]',{markAsSeen:1,reduxEvents:["scratch-gui/mode/SET_PLAYER","fontsLoaded/SET_FONTS_LOADED","scratch-gui/locales/SELECT_LOCALE"],reduxCondition(t){return!t.scratchGui.mode.isPlayerOnly}})
document.documentElement.style.setProperty("--zebraStriping-replacementGlow",`url(#${o.id})`)}}