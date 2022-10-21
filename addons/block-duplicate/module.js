let t=0,n=0
export function setCherryPicking(i,e){t=i,n=e}let i=0
export function setDuplication(t){i=t}let e=0,o=0
document.addEventListener("mousedown",(function(t){e=t.ctrlKey||t.metaKey,o=t.altKey}),{capture:1})
let s=0
export async function load(c){if(s)return
s=1
const r=await c.tab.traps.getBlockly(),u=r.Gesture.prototype.startDraggingBlock_
r.Gesture.prototype.startDraggingBlock_=function(...s){let c=this.targetBlock_
const f=!(this.mostRecentEvent_ instanceof MouseEvent),h=i&&o&&!f&&!this.flyout_&&!this.shouldDuplicateOnDrag_&&"procedures_definition"!==this.targetBlock_.type,l=n&&!f&&c.getParent(),a=h?e:t&&e===!l&&!c.isShadow()
if((h||a)&&(r.Events.getGroup()||r.Events.setGroup(1)),h){let t
this.startWorkspace_.setResizesEnabled(0),r.Events.disable()
try{const n=r.Xml.blockToDom(c)
t=r.Xml.domToBlock(n,this.startWorkspace_),r.scratchBlocksUtils.changeObscuredShadowIds(t)
const i=c.getRelativeToSurfaceXY()
t.moveBy(i.x,i.y)}catch(t){console.error(t)}r.Events.enable(),t&&(c=t,this.targetBlock_=t,r.Events.isEnabled()&&r.Events.fire(new r.Events.BlockCreate(t)))}if(a){if(f||h){const t=c.getNextBlock()
t&&t.dispose()}c.unplug(1)}return u.call(this,...s)}}