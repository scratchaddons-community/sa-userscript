import{normalizeHex as e,getHexRegex as o}from"../../libraries/common/cs/normalize-color.js"
import c from"../../libraries/common/cs/rate-limiter.js"
export default async({addon:t,msg:r})=>{const a=new c(250),n=(o,c)=>{if(o=e(o),!t.tab.redux.state||!t.tab.redux.state.scratchGui)return
const r=({detail:e})=>{"scratch-gui/color-picker/DEACTIVATE_COLOR_PICKER"===e.action.type&&(t.tab.redux.removeEventListener("statechanged",r),setTimeout((()=>{document.body.classList.remove("sa-hide-eye-dropper-background")}),50))},a=({detail:e})=>{"scratch-gui/color-picker/ACTIVATE_COLOR_PICKER"===e.action.type&&(t.tab.redux.removeEventListener("statechanged",a),t.tab.redux.addEventListener("statechanged",r),setTimeout((()=>{t.tab.redux.dispatch({type:"scratch-gui/color-picker/DEACTIVATE_COLOR_PICKER",color:o})}),50))}
t.tab.redux.addEventListener("statechanged",a),document.body.classList.add("sa-hide-eye-dropper-background"),c.click()},s=await t.tab.traps.getBlockly(),i=s.FieldColourSlider.prototype.showEditor_
s.FieldColourSlider.prototype.showEditor_=function(...c){const s=i.call(this,...c)
return(()=>{const c=document.querySelector("button.scratchEyedropper")
a.abort(0),t.tab.redux.initialize()
const s=(e=>{const{children:o}=e.parentElement,c=o[1].getAttribute("aria-valuenow"),t=o[3].getAttribute("aria-valuenow"),r=o[5].getAttribute("aria-valuenow"),a=Number(r)/255
return tinycolor(`hsv(${c}, ${t}, ${a||0})`).toHexString()})(c),i=Object.assign(document.createElement("div"),{className:"sa-color-picker sa-color-picker-code"})
t.tab.displayNoneWhileDisabled(i,{display:"flex"})
const l=Object.assign(document.createElement("input"),{className:"sa-color-picker-color sa-color-picker-code-color",type:"color",value:s||"#000000"}),u=Object.assign(document.createElement("input"),{className:t.tab.scratchClass("input_input-form",{others:"sa-color-picker-text sa-color-picker-code-text"}),type:"text",pattern:"^#?([0-9a-fA-F]{3}){1,2}$",placeholder:r("hex"),value:s||""})
l.addEventListener("input",(()=>a.limit((()=>n(u.value=l.value,c))))),u.addEventListener("change",(()=>{const{value:t}=u
o().test(t)&&n(l.value=e(t),c)})),i.appendChild(l),i.appendChild(u),c.parentElement.insertBefore(i,c)})(),s}}
