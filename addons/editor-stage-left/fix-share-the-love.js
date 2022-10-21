export default async function({addon:n}){const e=await n.tab.traps.getBlockly(),t=()=>{Blockly.getMainWorkspace()&&window.dispatchEvent(new Event("resize"))}
n.self.addEventListener("disabled",t),n.self.addEventListener("reenabled",t)
const o=e.VerticalFlyout.prototype.getClientRect
e.VerticalFlyout.prototype.getClientRect=function(){const t=o.call(this)
return!t||n.self.disabled||(this.toolboxPosition_===e.TOOLBOX_AT_LEFT&&(t.left+=1e9),t.width-=1e9),t},n.self.enabledLate&&t()}