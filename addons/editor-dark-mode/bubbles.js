import{textColor as t}from"../../libraries/common/cs/text-color.esm.js"
export default async function({addon:e}){await new Promise((t=>{if(e.tab.traps.vm.editingTarget)return t()
e.tab.traps.vm.runtime.once("PROJECT_LOADED",t)}))
const a=e.tab.traps.vm.runtime.renderer
let c=0
const n=()=>{const c=a.createTextSkin.bind(a)
a.createTextSkin=function(...n){const f=c(...n),o=a._allSkins[f],r=o._renderTextBubble.bind(o)
return o._renderTextBubble=a=>{if(e.self.disabled||!e.settings.get("affectStage"))return r(a)
const c={STROKE_WIDTH:4,PADDING:10,CORNER_RADIUS:16,FONT:"Helvetica",FONT_SIZE:14,FONT_HEIGHT_RATIO:.9,LINE_HEIGHT:16,COLORS:{BUBBLE_FILL:e.settings.get("accent"),BUBBLE_STROKE:t(e.settings.get("accent"),"rgba(0, 0, 0, 0.15)","rgba(255, 255, 255, 0.15"),TEXT_FILL:t(e.settings.get("accent"),"#575e75","#ffffff")}},n=o._canvas.getContext("2d")
o._textDirty&&o._reflowLines()
const f=o._textAreaSize.width,s=o._textAreaSize.height
o._canvas.width=Math.ceil(o._size[0]*a),o._canvas.height=Math.ceil(o._size[1]*a),o._restyleCanvas(),n.setTransform(1,0,0,1,0,0),n.clearRect(0,0,o._canvas.width,o._canvas.height),n.scale(a,a),n.translate(.5*c.STROKE_WIDTH,.5*c.STROKE_WIDTH),n.save(),o._pointsLeft&&(n.scale(-1,1),n.translate(-f,0)),n.beginPath(),n.moveTo(c.CORNER_RADIUS,s),n.arcTo(0,s,0,s-c.CORNER_RADIUS,c.CORNER_RADIUS),n.arcTo(0,0,f,0,c.CORNER_RADIUS),n.arcTo(f,0,f,s,c.CORNER_RADIUS),n.arcTo(f,s,f-c.CORNER_RADIUS,s,c.CORNER_RADIUS),n.save(),n.translate(f-c.CORNER_RADIUS,s),"say"===o._bubbleType?(n.bezierCurveTo(0,4,4,8,4,10),n.arcTo(4,12,2,12,2),n.bezierCurveTo(-1,12,-11,8,-16,0),n.closePath()):(n.arc(-16,0,4,0,Math.PI),n.closePath(),n.moveTo(-7,7.25),n.arc(-9.25,7.25,2.25,0,2*Math.PI),n.moveTo(0,9.5),n.arc(-1.5,9.5,1.5,0,2*Math.PI)),n.restore(),n.fillStyle=c.COLORS.BUBBLE_FILL,n.strokeStyle=c.COLORS.BUBBLE_STROKE,n.lineWidth=c.STROKE_WIDTH,n.stroke(),n.fill(),n.restore(),n.fillStyle=c.COLORS.TEXT_FILL,n.font=`${c.FONT_SIZE}px ${c.FONT}, sans-serif`
const T=o._lines
for(let t=0;T.length>t;t++)n.fillText(T[t],c.PADDING,c.PADDING+c.LINE_HEIGHT*t+c.FONT_HEIGHT_RATIO*c.FONT_SIZE)
o._renderedScale=a},f}},f=()=>{for(let t of a._allSkins)t&&{}.hasOwnProperty.call(t,"_bubbleType")&&(t._textureDirty=1)}
e.settings.get("affectStage")&&(n(),c=1),e.settings.addEventListener("change",(()=>{e.settings.get("affectStage")&&!c&&(n(),c=1),f()})),e.self.addEventListener("disabled",f),e.self.addEventListener("reenabled",f)}