function t(t,s){return Math.sqrt(Math.pow(t.left-s.left,2)+Math.pow(t.top-s.top,2))}import s from"./BlockInstance.js"
import i from"./BlockFlasher.js"
let e=[],l=[]
export default class h{constructor(t){this.addon=t,this.addon.tab.traps.getBlockly().then((t=>{this.blockly=t})),this.vm=this.addon.tab.traps.vm,this.offsetX=32,this.offsetY=32,this.navigationHistory=new o,this._workspace=null}getEditingTarget(){return this.vm.runtime.getEditingTarget()}setEditingTarget(t){this.getEditingTarget().id!==t&&this.vm.setEditingTarget(t)}getWorkspace(){const t=Blockly.getMainWorkspace()
return t.getToolbox()&&(this._workspace=t),this._workspace}scrollBlockIntoView(t){let e,l=this.getWorkspace()
if(t instanceof s?(this.setEditingTarget(t.targetId),e=l.getBlockById(t.id)):e=t&&t.id?t:l.getBlockById(t),!e)return
let h=e.getRootBlock(),o=this.getTopOfStackFor(e).getRelativeToSurfaceXY(),r=h.getRelativeToSurfaceXY(),n=l.scale,c=r.x*n,a=o.y*n,f=e.width+c,u=e.height+a,k=l.getMetrics()
if(k.viewLeft+this.offsetX-4>c||f>k.viewLeft+k.viewWidth||k.viewTop+this.offsetY-4>a||u>k.viewTop+k.viewHeight){let t=c-k.contentLeft-this.offsetX,s=a-k.contentTop-this.offsetY
this.navigationHistory.storeView(this.navigationHistory.peek(),64),l.scrollbar.set(t,s),this.navigationHistory.storeView({left:t,top:s},64)}this.blockly?.hideChaff(),i.flash(e)}getTopOfStackFor(t){let s=t
for(;s.getOutputShape()&&s.getSurroundParent();)s=s.getSurroundParent()
return s}}class o{storeView(s,i){l=[]
let h=Blockly.getMainWorkspace().getMetrics(),o={left:h.viewLeft,top:h.viewTop}
s&&t(o,s)<=i||e.push(o)}peek(){return e.length>0?e[e.length-1]:null}goBack(){const s=Blockly.getMainWorkspace(),i=s.getMetrics()
let h={left:i.viewLeft,top:i.viewTop},o=this.peek()
o&&(64>t(h,o)&&e.length>1&&(e.pop(),l.push(o)),o=this.peek(),o&&s.scrollbar.set(o.left-i.contentLeft,o.top-i.contentTop))}goForward(){let t=l.pop()
if(!t)return
e.push(t)
let s=Blockly.getMainWorkspace(),i=s.getMetrics()
s.scrollbar.set(t.left-i.contentLeft,t.top-i.contentTop)}}