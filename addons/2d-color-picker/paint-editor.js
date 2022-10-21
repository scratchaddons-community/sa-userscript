import{normalizeHex as t}from"../../libraries/common/cs/normalize-color.js"
import o from"../../libraries/common/cs/rate-limiter.js"
export default async({addon:e,console:n,msg:r})=>{let c
const a=new o(250),l=()=>{let t
const o=e.tab.redux.state
if(o.scratchPaint.modals.fillColor)t="fill"
else{if(!o.scratchPaint.modals.strokeColor)return
t="stroke"}const n=o.scratchPaint.color[`${t}Color`][["primary","secondary"][o.scratchPaint.fillMode.colorIndex]]
if(null!==n&&"scratch-paint/style-path/mixed"!==n)return tinycolor(n).toHex()},i=(o,n)=>{if(o=t(o),!e.tab.redux.state||!e.tab.redux.state.scratchPaint)return
const r=({detail:t})=>{"scratch-paint/eye-dropper/ACTIVATE_COLOR_PICKER"===t.action.type&&(e.tab.redux.removeEventListener("statechanged",r),setTimeout((()=>{const t=e.tab.redux.state.scratchPaint.color.eyeDropper.previousTool
t&&t.activate(),e.tab.redux.state.scratchPaint.color.eyeDropper.callback(o),e.tab.redux.dispatch({type:"scratch-paint/eye-dropper/DEACTIVATE_COLOR_PICKER"})}),50))}
e.tab.redux.addEventListener("statechanged",r),n.children[1].children[0].click()},s=t=>{let o=tinycolor(t).toHsv()
return o.s=1,o.v=1,tinycolor(o).toHex()}
for(;;){const m=await e.tab.waitForElement('div[class*="color-picker_swatch-row"]',{markAsSeen:1,reduxCondition(t){return 1===t.scratchGui.editorTab.activeTabIndex&&!t.scratchGui.mode.isPlayerOnly}})
if(a.abort(0),!("colorIndex"in e.tab.redux.state.scratchPaint.fillMode))return void n.error("Detected new paint editor; this will be supported in future versions.")
function d(){a.limit((()=>{let t=l(),o=tinycolor(t).toHsv()
h(o.s,o.v),w.style.background="#"+s(l())}))}if(e.tab.redux.initialize(),e.tab.redux.addEventListener("statechanged",(t=>"scratch-paint/fill-style/CHANGE_FILL_COLOR"===t.detail.action.type||"scratch-paint/fill-style/CHANGE_FILL_COLOR_2"===t.detail.action.type||"scratch-paint/stroke-style/CHANGE_STROKE_COLOR"===t.detail.action.type||"scratch-paint/stroke-style/CHANGE_STROKE_COLOR_2"===t.detail.action.type?d():0)),e.tab.redux&&"function"==typeof c&&(e.tab.redux.removeEventListener("statechanged",c),c=null),"editor"!==e.tab.editorMode)continue
let f=l()
const w=document.createElement("div")
w.className="sa-2dcolor-picker",w.style.background="#"+s(f||"ff0000")
const y=Object.assign(document.createElement("img"),{className:"sa-2dcolor-picker-image",src:e.self.dir+"/assets/sv-gr.png",draggable:0}),_=Object.assign(document.createElement("div"),{className:e.tab.scratchClass("slider_handle")})
_.style.pointerEvents="none"
const O=document.createElement("div")
O.className=e.tab.scratchClass("color-picker_row-header",{others:"sa-2dcolor-label"})
const C=document.createElement("span")
C.className=e.tab.scratchClass("color-picker_label-name",{others:"sa-2dcolor-label-name"}),C.innerText=r("shade")
const M=document.createElement("span")
M.className=e.tab.scratchClass("color-picker_label-readout",{others:"sa-2dcolor-label-val"}),O.appendChild(C),O.appendChild(M)
let b=-1,k={x:0,y:0}
window.addEventListener("keydown",(t=>b=t.keyCode)),window.addEventListener("keyup",(()=>b=-1))
let E=0,g=null,v=function(t){return p(t,b,k),0},L=function(t){u(t,b,k)}
function p(t,o,n){let r=Math.min(Math.max(t.clientX-w.getBoundingClientRect().x,0),150),c=Math.min(Math.max(t.clientY-w.getBoundingClientRect().y,0),150)
if(16===o&&(Math.abs(r-n.x)>Math.abs(c-n.y)?c=n.y:r=n.x),_.style.left=r-8+"px",_.style.top=c-8+"px",M.innerText=`${Math.round(r/150*100)}, ${100-Math.round(c/150*100)}`,(!e.tab.redux.state.scratchPaint.fillMode.gradientType||"SOLID"===e.tab.redux.state.scratchPaint.fillMode.gradientType)&&g){let t=tinycolor({h:E,s:r/150,v:1-c/150}).toHex()
g.style.background=t.startsWith("#")?t:"#"+t}}function h(t,o){_.style.left=150*t-8+"px",_.style.top=150*(1-o)-8+"px",M.innerText=`${Math.round(100*t)}, ${Math.round(100*o)}`}function u(t,o,e){a.limit((()=>{let n=Math.min(Math.max(t.clientX-w.getBoundingClientRect().x,0),150),r=Math.min(Math.max(t.clientY-w.getBoundingClientRect().y,0),150)
16===o&&(Math.abs(n-e.x)>Math.abs(r-e.y)?r=e.y:n=e.x)
let c=tinycolor(l()).toHsv(),a=n/150,s=1-r/150,d=tinycolor({h:c.h,s:a,v:s}).toHex()
i(d,m),h(a,s)})),window.removeEventListener("pointermove",v),window.removeEventListener("pointerup",L)}if(f){let I=tinycolor(f).toHsv()
h(I.s,I.v)}else h(1,1)
w.addEventListener("pointerdown",(t=>{let o
t.preventDefault(),k={x:parseFloat(_.style.left)+8,y:parseFloat(_.style.top)+8}
const n=e.tab.redux.state
o=n.scratchPaint.modals.fillColor?"fill":n.scratchPaint.modals.strokeColor?"stroke":"wh",g=null,"fill"===o?g=document.getElementsByClassName(e.tab.scratchClass("color-button_color-button-swatch"))[0]:"stroke"===o&&(g=document.getElementsByClassName(e.tab.scratchClass("color-button_color-button-swatch"))[1]),g&&(E=tinycolor(g.style.background).toHsv().h),p(t),window.addEventListener("pointermove",v),window.addEventListener("pointerup",L)})),c=({detail:t})=>{"scratch-paint/color-index/CHANGE_COLOR_INDEX"===t.action.type&&setTimeout((()=>{d()}),100)},e.tab.redux.addEventListener("statechanged",c),w.appendChild(y),w.appendChild(_)
const[x,R,A]=[...m.parentElement.querySelectorAll('[class^="color-picker_row-header"]')].map((t=>t.parentElement))
R.style.display="none",A.style.display="none",x.insertAdjacentElement("afterend",w),x.insertAdjacentElement("afterend",O)}}
