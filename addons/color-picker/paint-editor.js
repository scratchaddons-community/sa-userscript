import{normalizeHex as e,getHexRegex as t}from"../../libraries/common/cs/normalize-color.js"
import o from"../../libraries/common/cs/rate-limiter.js"
export default async({addon:c,console:r,msg:n})=>{let i
const s=new o(250),a=()=>{let e
const t=c.tab.redux.state
if(t.scratchPaint.modals.fillColor)e="fill"
else{if(!t.scratchPaint.modals.strokeColor)return
e="stroke"}const o=t.scratchPaint.color[`${e}Color`][["primary","secondary"][t.scratchPaint.fillMode.colorIndex]]
if(null!==o&&"scratch-paint/style-path/mixed"!==o)return tinycolor(o).toHexString()},l=(t,o)=>{if(t=e(t),!c.tab.redux.state||!c.tab.redux.state.scratchPaint)return
const r=({detail:e})=>{"scratch-paint/eye-dropper/ACTIVATE_COLOR_PICKER"===e.action.type&&(c.tab.redux.removeEventListener("statechanged",r),setTimeout((()=>{const e=c.tab.redux.state.scratchPaint.color.eyeDropper.previousTool
e&&e.activate(),c.tab.redux.state.scratchPaint.color.eyeDropper.callback(tinycolor(t).setAlpha(scratchAddons.opacitySliderAlpha).toRgbString()),c.tab.redux.dispatch({type:"scratch-paint/eye-dropper/DEACTIVATE_COLOR_PICKER"})}),50))}
c.tab.redux.addEventListener("statechanged",r),o.children[1].children[0].click()}
for(;;){const o=await c.tab.waitForElement('div[class*="color-picker_swatch-row"]',{markAsSeen:1,reduxCondition(e){return 1===e.scratchGui.editorTab.activeTabIndex&&!e.scratchGui.mode.isPlayerOnly}})
if(s.abort(0),c.tab.redux.initialize(),!("colorIndex"in c.tab.redux.state.scratchPaint.fillMode))return void r.error("Detected new paint editor; this will be supported in future versions.")
if(c.tab.redux&&"function"==typeof i&&(c.tab.redux.removeEventListener("statechanged",i),i=null),"editor"!==c.tab.editorMode)continue
const p=a(),d=Object.assign(document.createElement("div"),{className:"sa-color-picker sa-color-picker-paint"})
c.tab.displayNoneWhileDisabled(d,{display:"flex"})
const u=Object.assign(document.createElement("input"),{className:"sa-color-picker-color sa-color-picker-paint-color",type:"color",value:p||"#000000"}),m=document.querySelector('[class*="fixed-tools_costume-input"]').className.split(" ")[0],f=Object.assign(document.createElement("input"),{className:`sa-color-picker-text sa-color-picker-paint-text ${m}`,type:"text",pattern:"^#?([0-9a-fA-F]{3}){1,2}$",placeholder:n("hex"),value:p||""})
u.addEventListener("input",(()=>s.limit((()=>l(f.value=u.value,o))))),f.addEventListener("change",(()=>{const{value:c}=f
t().test(c)&&l(u.value=e(c),o)})),i=({detail:e})=>{"scratch-paint/color-index/CHANGE_COLOR_INDEX"===e.action.type&&setTimeout((()=>{const e=a()
u.value=e||"#000000",f.value=e||""}),100)},c.tab.redux.addEventListener("statechanged",i),d.appendChild(u),d.appendChild(f),o.parentElement.insertBefore(d,o)}}
