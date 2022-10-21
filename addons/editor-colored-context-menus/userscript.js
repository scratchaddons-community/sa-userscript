import{removeAlpha as t}from"../../libraries/common/cs/text-color.esm.js"
export default async function({addon:n}){const o=await n.tab.traps.getBlockly(),e=o.Gesture.prototype.handleRightClick
o.Gesture.prototype.handleRightClick=function(...n){const c=this.targetBlock_,r=e.call(this,...n)
return c&&(n=>{const e=o.WidgetDiv.DIV
if(!e)return
const c=n.svgPath_
if(!c)return
const r=t(c.getAttribute("fill")),s=c.getAttribute("stroke")||"#0003"
e.classList.add("sa-contextmenu-colored"),e.style.setProperty("--sa-contextmenu-bg",r),e.style.setProperty("--sa-contextmenu-border",s)})(c),r}
const c=o.WidgetDiv.hide
o.WidgetDiv.hide=function(...t){return o.WidgetDiv.DIV&&o.WidgetDiv.DIV.classList.remove("sa-contextmenu-colored"),c.call(this,...t)}}