export default async function({addon:t}){const i=t.tab.traps.vm
await new Promise((t=>{if(i.editingTarget)return t()
i.runtime.once("PROJECT_LOADED",t)}))
const Blockly=await t.tab.traps.getBlockly(),s=Blockly.ScratchBubble.prototype.setAnchorLocation
Blockly.ScratchBubble.prototype.setAnchorLocation=function(i){if(t.self.disabled||!t.settings.get("fix-drag"))return s.call(this,i)
var n=new Blockly.Events.CommentMove(this.comment)
this.anchorXY_=i,this.rendered_&&this.positionBubble_(),n.recordNew(),Blockly.Events.fire(n)}
const n=Blockly.ScratchBlockComment.prototype.autoPosition_
Blockly.ScratchBlockComment.prototype.autoPosition_=function(){if(t.self.disabled||!t.settings.get("leash"))return n.call(this)
{if(!this.needsAutoPositioning_||this.isMinimized_)return
let t=8*Blockly.BlockSvg.GRID_UNIT
this.x_=this.block_.RTL?this.iconXY_.x-this.width_-t:this.iconXY_.x+t,this.y_=this.iconXY_.y-Blockly.ScratchBubble.TOP_BAR_HEIGHT/2}}
const h=Blockly.BubbleDragger.prototype.endBubbleDrag
Blockly.BubbleDragger.prototype.endBubbleDrag=function(i,s){return!t.self.disabled&&t.settings.get("straighten")&&this.draggingBubble_.comment&&(s.y=this.draggingBubble_.comment.iconXY_.y-Blockly.ScratchBubble.TOP_BAR_HEIGHT/2-this.startXY_.y),h.call(this,i,s)}}