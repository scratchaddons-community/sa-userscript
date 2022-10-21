export default async function({addon:t,msg:e}){let c,a,o,n,s,r,i
await t.tab.loadScript(t.self.lib+"/thirdparty/cs/tinycolor-min.js")
const l=()=>{let e
const c=t.tab.redux.state
if(c.scratchPaint.modals.fillColor)e="fill"
else{if(!c.scratchPaint.modals.strokeColor)return
e="stroke"}const a=c.scratchPaint.color[`${e}Color`][["primary","secondary"][c.scratchPaint.fillMode.colorIndex]]
if(null!==a&&"scratch-paint/style-path/mixed"!==a)return tinycolor(a).toRgbString()},d=t=>{const e=tinycolor(t).toHexString()
i.style.background=`linear-gradient(to left, ${e} 0%, rgba(0, 0, 0, 0) 100%)`},p=t=>t.touches&&t.touches[0]?{x:t.touches[0].clientX,y:t.touches[0].clientY}:t.changedTouches&&t.changedTouches[0]?{x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}:{x:t.clientX,y:t.clientY},m=t=>{document.addEventListener("mousemove",h),document.addEventListener("mouseup",u),a=p(t).x-s.getBoundingClientRect().left},u=()=>{document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",u)},h=t=>{t.preventDefault(),O(_(t))},y=t=>{t.target===r&&(a=13,O(_(t)))},_=t=>{const{x:e}=p(t),c=r.getBoundingClientRect()
return Math.max(0,Math.min(100,100*(e-c.left-a)/(c.width-26)))},O=e=>{n.textContent=Math.round(e),s.style.left=13+e/100*124-13+"px"
const c=tinycolor(l()).toRgb()
scratchAddons.opacitySliderAlpha=e/100,(e=>{const c=({detail:a})=>{if("scratch-paint/eye-dropper/ACTIVATE_COLOR_PICKER"!==a.action.type)return
t.tab.redux.removeEventListener("statechanged",c)
const o=t.tab.redux.state.scratchPaint.color.eyeDropper.previousTool
o&&o.activate(),t.tab.redux.state.scratchPaint.color.eyeDropper.callback(e),t.tab.redux.dispatch({type:"scratch-paint/eye-dropper/DEACTIVATE_COLOR_PICKER"})}
t.tab.redux.addEventListener("statechanged",c),o.children[1].children[0].click()})(`rgba(${c.r}, ${c.g}, ${c.b}, ${e/100})`)},C=t=>{s.style.left=124*t+"px"}
for(;;){o=await t.tab.waitForElement('div[class*="color-picker_swatch-row"]',{markAsSeen:1,reduxCondition(t){return 1===t.scratchGui.editorTab.activeTabIndex&&!t.scratchGui.mode.isPlayerOnly&&t.scratchPaint.selectedItems.length>0}}),t.tab.redux.initialize(),"function"==typeof c&&(t.tab.redux.removeEventListener("statechanged",c),c=null)
const a=document.createElement("div"),p=Object.assign(document.createElement("div"),{className:t.tab.scratchClass("color-picker_row-header")}),u=Object.assign(document.createElement("span"),{className:t.tab.scratchClass("color-picker_label-name"),textContent:e("opacity")}),h=tinycolor(l()).toRgb().a
n=Object.assign(document.createElement("span"),{className:t.tab.scratchClass("color-picker_label-readout")}),n.textContent=Math.round(100*h)
const _=l()
r=Object.assign(document.createElement("div"),{className:`sa-opacity-slider ${t.tab.scratchClass("slider_container","slider_last")}`}),r.addEventListener("click",y),i=Object.assign(document.createElement("div"),{className:"sa-opacity-slider-bg"}),d(_),s=Object.assign(document.createElement("div"),{className:`sa-opacity-handle ${t.tab.scratchClass("slider_handle")}`}),s.addEventListener("mousedown",m),document.querySelector('[class*="slider_last"]').className=t.tab.scratchClass("slider_container"),C(h),scratchAddons.opacitySliderAlpha=h,c=({detail:t})=>{if("scratch-paint/fill-style/CHANGE_FILL_COLOR"===t.action.type||"scratch-paint/fill-style/CHANGE_FILL_COLOR_2"===t.action.type||"scratch-paint/stroke-style/CHANGE_STROKE_COLOR"===t.action.type||"scratch-paint/stroke-style/CHANGE_STROKE_COLOR_2"===t.action.type||"scratch-paint/color-index/CHANGE_COLOR_INDEX"===t.action.type){const e=l()
d(e),"scratch-paint/color-index/CHANGE_COLOR_INDEX"===t.action.type&&(n.textContent=Math.round(100*tinycolor(e).toRgb().a),C(tinycolor(e).toRgb().a))}},t.tab.redux.addEventListener("statechanged",c),a.appendChild(p),a.appendChild(r),p.appendChild(u),p.appendChild(n),r.appendChild(i),r.appendChild(s),o.parentElement.querySelector("div:nth-child(4)").after(a)}}