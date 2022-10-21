export default async function({addon:t}){const Blockly=await t.tab.traps.getBlockly(),i=t.settings.get("watch")
Blockly.BlockSvg.START_HAT_HEIGHT=31,Blockly.BlockSvg.START_HAT_PATH="c2.6,-2.3 5.5,-4.3 8.5,-6.2c-1,-12.5 5.3,-23.3 8.4,-24.8c3.7,-1.8 16.5,13.1 18.4,15.4c8.4,-1.3 17,-1.3 25.4,0c1.9,-2.3 14.7,-17.2 18.4,-15.4c3.1,1.5 9.4,12.3 8.4,24.8c3,1.8 5.9,3.9 8.5,6.1",Blockly.BlockSvg.TOP_LEFT_CORNER_DEFINE_HAT="c0,-7.1 3.7,-13.3 9.3,-16.9c1.7,-7.5 5.4,-13.2 7.6,-14.2c2.6,-1.3 10,6 14.6,11.1h33c4.6,-5.1 11.9,-12.4 14.6,-11.1c1.9,0.9 4.9,5.2 6.8,11.1c2.6,0,5.2,0,7.8,0",Blockly.BlockSvg.prototype.renderCatFace_=function(){this.catPath_.svgFace.setAttribute("fill","#000000")
var t=Blockly.utils.createSvgElement("path",{},this.svgFace_)
t.setAttribute("d","M25.2-1.1c0.1,0,0.2,0,0.2,0l8.3-2.1l-7-4.8c-0.5-0.3-1.1-0.2-1.4,0.3s-0.2,1.1,0.3,1.4L29-4.1l-4,1c-0.5,0.1-0.9,0.7-0.7,1.2C24.3-1.4,24.7-1.1,25.2-1.1z"),t.setAttribute("fill-opacity","0"),this.catPath_.svgFace.closedEye=t
var i=Blockly.utils.createSvgElement("path",{},this.svgFace_)
i.setAttribute("d","M62.4-1.1c-0.1,0-0.2,0-0.2,0l-8.3-2.1l7-4.8c0.5-0.3,1.1-0.2,1.4,0.3s0.2,1.1-0.3,1.4l-3.4,2.3l4,1c0.5,0.1,0.9,0.7,0.7,1.2C63.2-1.4,62.8-1.1,62.4-1.1z"),i.setAttribute("fill-opacity","0"),this.catPath_.svgFace.closedEye2=i
var c=Blockly.utils.createSvgElement("circle",{},this.svgFace_)
c.setAttribute("cx","59.2"),c.setAttribute("cy","-3.3"),c.setAttribute("r","3.4"),c.setAttribute("fill-opacity","0.6"),this.catPath_.svgFace.eye=c
var s=Blockly.utils.createSvgElement("circle",{},this.svgFace_)
s.setAttribute("cx","29.1"),s.setAttribute("cy","-3.3"),s.setAttribute("r","3.4"),s.setAttribute("fill-opacity","0.6"),this.catPath_.svgFace.eye2=s
var h=Blockly.utils.createSvgElement("path",{},this.svgFace_)
h.setAttribute("d","M45.6,0.1c-0.9,0-1.7-0.3-2.3-0.9c-0.6,0.6-1.3,0.9-2.2,0.9c-0.9,0-1.8-0.3-2.3-0.9c-1-1.1-1.1-2.6-1.1-2.8c0-0.5,0.5-1,1-1l0,0c0.6,0,1,0.5,1,1c0,0.4,0.1,1.7,1.4,1.7c0.5,0,0.7-0.2,0.8-0.3c0.3-0.3,0.4-1,0.4-1.3c0-0.1,0-0.1,0-0.2c0-0.5,0.5-1,1-1l0,0c0.5,0,1,0.4,1,1c0,0,0,0.1,0,0.2c0,0.3,0.1,0.9,0.4,1.2C44.8-2.2,45-2,45.5-2s0.7-0.2,0.8-0.3c0.3-0.4,0.4-1.1,0.3-1.3c0-0.5,0.4-1,0.9-1.1c0.5,0,1,0.4,1.1,0.9c0,0.2,0.1,1.8-0.8,2.8C47.5-0.4,46.8,0.1,45.6,0.1z"),h.setAttribute("fill-opacity","0.6"),this.catPath_.ear.setAttribute("d","M73.1-15.6c1.7-4.2,4.5-9.1,5.8-8.5c1.6,0.8,5.4,7.9,5,15.4c0,0.6-0.7,0.7-1.1,0.5c-3-1.6-6.4-2.8-8.6-3.6C72.8-12.3,72.4-13.7,73.1-15.6z"),this.catPath_.ear.setAttribute("fill","#FFD5E6"),this.catPath_.ear2.setAttribute("d","M22.4-15.6c-1.7-4.2-4.5-9.1-5.8-8.5c-1.6,0.8-5.4,7.9-5,15.4c0,0.6,0.7,0.7,1.1,0.5c3-1.6,6.4-2.8,8.6-3.6C22.8-12.3,23.2-13.7,22.4-15.6z"),this.catPath_.ear2.setAttribute("fill","#FFD5E6")},Blockly.BlockSvg.prototype.initCatStuff=function(){if(!this.hasInitCatStuff){this.hasInitCatStuff=1
var t="c-1,-12.5 5.3,-23.3 8.4,-24.8c3.7,-1.8 16.5,13.1 18.4,15.4",i="c-5.8,-4.8 -8,-18 -4.9,-19.5c3.7,-1.8 24.5,11.1 31.7,10.1",c="c1.9,-2.3 14.7,-17.2 18.4,-15.4c3.1,1.5 9.4,12.3 8.4,24.8",s="c7.2,1 28,-11.9 31.7,-10.1c3.1,1.5 0.9,14.7 -4.9,19.5",h="c0,-7.1 3.7,-13.3 9.3,-16.9c1.7,-7.5 5.4,-13.2 7.6,-14.2c2.6,-1.3 10,6 14.6,11.1",o="h33c4.6,-5.1 11.9,-12.4 14.6,-11.1c1.9,0.9 4.9,5.2 6.8,11.1c2.6,0,5.2,0,7.8,0",a="c0,-4.6 1.6,-8.9 4.3,-12.3c-2.4,-5.6 -2.9,-12.4 -0.7,-13.4c2.1,-1 9.6,2.6 17,5.8c2.6,0 6.2,0 10.9,0",l="c0,0 25.6,0 44,0c7.4,-3.2 14.8,-6.8 16.9,-5.8c1.2,0.6 1.6,2.9 1.3,5.8",e=this
this.catPath_.ear=Blockly.utils.createSvgElement("path",{},this.catPath_),this.catPath_.ear2=Blockly.utils.createSvgElement("path",{},this.catPath_),this.RTL&&(this.catPath_.ear.setAttribute("transform","scale(-1 1)"),this.catPath_.ear2.setAttribute("transform","scale(-1 1)")),this.catPath_.addEventListener("mouseenter",(function(t){clearTimeout(e.blinkFn),t.target.svgFace.eye&&(t.target.svgFace.eye.setAttribute("fill-opacity","0"),t.target.svgFace.eye2.setAttribute("fill-opacity","0"),t.target.svgFace.closedEye.setAttribute("fill-opacity","0.6"),t.target.svgFace.closedEye2.setAttribute("fill-opacity","0.6")),e.blinkFn=setTimeout((function(){t.target.svgFace.eye&&(t.target.svgFace.eye.setAttribute("fill-opacity","0.6"),t.target.svgFace.eye2.setAttribute("fill-opacity","0.6"),t.target.svgFace.closedEye.setAttribute("fill-opacity","0"),t.target.svgFace.closedEye2.setAttribute("fill-opacity","0"))}),100)})),this.catPath_.ear.addEventListener("mouseenter",(function(){clearTimeout(e.earFn),clearTimeout(e.ear2Fn),e.catPath_.ear.setAttribute("fill-opacity","0"),e.catPath_.ear2.setAttribute("fill-opacity","")
var n=e.catPath_.svgBody.getAttribute("d")
n=(n=(n=(n=n.replace(c,s)).replace(o,l)).replace(i,t)).replace(a,h),e.catPath_.svgBody.setAttribute("d",n),e.earFn=setTimeout((function(){e.catPath_.ear.setAttribute("fill-opacity","")
var t=e.catPath_.svgBody.getAttribute("d")
t=(t=t.replace(s,c)).replace(l,o),e.catPath_.svgBody.setAttribute("d",t)}),50)})),this.catPath_.ear2.addEventListener("mouseenter",(function(){clearTimeout(e.earFn),clearTimeout(e.ear2Fn),e.catPath_.ear2.setAttribute("fill-opacity","0"),e.catPath_.ear.setAttribute("fill-opacity","")
var n=e.catPath_.svgBody.getAttribute("d")
n=(n=(n=(n=n.replace(t,i)).replace(h,a)).replace(s,c)).replace(l,o),e.catPath_.svgBody.setAttribute("d",n),e.ear2Fn=setTimeout((function(){e.catPath_.ear2.setAttribute("fill-opacity","")
var c=e.catPath_.svgBody.getAttribute("d")
c=(c=c.replace(i,t)).replace(a,h),e.catPath_.svgBody.setAttribute("d",c)}),50)})),this.RTL&&(this.svgFace_.style.transform="translate(-87px, 0px)"),this.shouldWatchMouse()&&(this.windowListener=function(t){var i=Date.now()
if(i>=e.lastCallTime+e.CALL_FREQUENCY_MS&&(e.lastCallTime=i,e.shouldWatchMouse()&&e.workspace)){var c=e.getCatFacePosition(),s={x:t.x/e.workspace.scale,y:t.y/e.workspace.scale},h=s.x-c.x,o=s.y-c.y,a=Math.atan2(h,o),l=Math.sqrt(h*h+o*o),n=l/(l+1),r=10/Math.sqrt(Math.pow(5*Math.cos(a),2)+Math.pow(2*Math.sin(a),2))
h=r*n*Math.sin(a),o=r*n*Math.cos(a),e.RTL&&(h-=87),e.svgFace_.style.transform="translate("+h+"px, "+o+"px)"}},document.addEventListener("mousemove",this.windowListener))}}
let c=null
Blockly.BlockSvg.prototype.getCatFacePosition=function(){c||(c=this.workspace.getParentSvg().getBoundingClientRect())
var t={x:c.x,y:c.y}
!this.isInFlyout&&this.workspace.getFlyout()&&(t.x+=this.workspace.getFlyout().getWidth()),t.x+=this.workspace.scrollX,t.y+=this.workspace.scrollY
var i=this.getRelativeToSurfaceXY(this.svgGroup_)
return this.RTL&&(i.x=this.workspace.getWidth()-i.x-this.width),i.x+=t.x/this.workspace.scale,i.y+=t.y/this.workspace.scale,i.x-=43.5,i.y-=4,i.x+=60,this.RTL&&(i.x=screen.width-i.x),i},Blockly.BlockSvg.prototype.shouldWatchMouse=function(){if(!i)return 0
var t=this.getCatFacePosition(),c=t.x>-50&&t.x-50<screen.width/this.workspace.scale,s=t.y>-50&&t.y-50<screen.height/this.workspace.scale
return this.startHat_&&!this.isGlowingStack_&&c&&s}
const s=Blockly.BlockSvg.prototype.renderDraw_
Blockly.BlockSvg.prototype.renderDraw_=function(...t){this.svgFace_||this.sa_catBlockConstructor()
const i=s.call(this,...t)
return this.outputConnection||this.previousConnection||this.initCatStuff(),this.startHat_&&!this.svgFace_.firstChild&&this.renderCatFace_(),i}
const h=Blockly.BlockSvg.prototype.dispose
Blockly.BlockSvg.prototype.dispose=function(...t){return clearTimeout(this.blinkFn),clearTimeout(this.earFn),clearTimeout(this.ear2Fn),this.windowListener&&document.removeEventListener("mousemove",this.windowListener),h.call(this,...t)}
const o=Blockly.BlockSvg.prototype.setGlowStack
Blockly.BlockSvg.prototype.setGlowStack=function(t){return this.windowListener&&(t?(document.removeEventListener("mousemove",this.windowListener),this.workspace&&this.svgFace_.style&&(this.svgFace_.style.transform=this.RTL?"translate(-87px, 0px)":"")):document.addEventListener("mousemove",this.windowListener)),o.call(this,t)},Blockly.BlockSvg.prototype.sa_catBlockConstructor=function(){this.catPath_=Blockly.utils.createSvgElement("g",{},this.svgGroup_),this.svgFace_=Blockly.utils.createSvgElement("g",{},this.catPath_),this.catPath_.svgFace=this.svgFace_,this.catPath_.svgBody=this.svgPath_,this.lastCallTime=0,this.CALL_FREQUENCY_MS=60}
const a=Blockly.getMainWorkspace()
if(a){const i=t.tab.traps.vm
i.editingTarget&&i.emitWorkspaceUpdate()
const c=a.getFlyout()
if(c){const t=c.getWorkspace()
Blockly.Xml.clearWorkspaceAndLoadFromXml(Blockly.Xml.workspaceToDom(t),t),a.getToolbox().refreshSelection(),a.toolboxRefreshEnabled_=1}}}