export default async function({addon:t}){for(;;){const n=await t.tab.waitForElement('div[class*="color-picker_swatch-row"]',{markAsSeen:1,reduxCondition(t){return 1===t.scratchGui.editorTab.activeTabIndex&&!t.scratchGui.mode.isPlayerOnly}}),e=n.parentElement,o=t.tab.traps.getInternalKey(e),a=e[o].return.return.return.stateNode,r=e[o].return.return.stateNode,c=e.querySelectorAll("[class*='color-picker_row-header']");["hue","saturation","brightness"].forEach(((n,e)=>{const o=c[e]
o.style.display="flex",o.style.alignItems="center",o.style.justifyContent="space-between",o.querySelector("[class*='color-picker_label-readout']").style.display="none"
const s=document.createElement("input")
s.type="number",s.value=Math.round(10*r.props[n])/10,s.min=0,s.max=100,s.className=t.tab.scratchClass("input_input-form","input_input-small","input_input-small-range"),s.style.height="1.5rem"
const i=a.setState.bind(a)
a.setState=function(t,e){const[o,a]=Object.entries(t)[0]
o===n&&(s.value=Math.round(10*a)/10),i(t,e)},s.addEventListener("input",(()=>{i({[n]:Math.min(100,Math.max(0,s.value))},(()=>{a.handleColorChange()}))})),o.append(s)}))}}