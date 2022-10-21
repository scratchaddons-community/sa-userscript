export default async function({addon:t,console:e,msg:s}){function n(){let t=c.filter((t=>"none"!==t.row.style.display)),e=r.filter((t=>"none"!==t.row.style.display))
f.style.display=0===t.length?"none":"",_.style.display=0===e.length?"none":""}function a(){if(3!==t.tab.redux.state?.scratchGui?.editorTab?.activeTabIndex||u)return
const e=o.runtime.getEditingTarget(),s=o.runtime.getTargetForStage()
for(c=e.isStage?[]:Object.values(e.variables).filter((t=>""===t.type||"list"===t.type)).map((t=>new O(t,e))),r=Object.values(s.variables).filter((t=>""===t.type||"list"===t.type)).map((t=>new O(t,s))),n();m.firstChild;)m.removeChild(m.firstChild)
for(;g.firstChild;)g.removeChild(g.firstChild)
for(const t of c)m.appendChild(t.row),t.resizeInputIfList()
for(const t of r)g.appendChild(t.row),t.resizeInputIfList()}function i(e){e?(p.classList.add(t.tab.scratchClass("react-tabs_react-tabs__tab--selected"),t.tab.scratchClass("gui_is-selected")),document.querySelector("[class^=gui_tabs]").insertAdjacentElement("beforeend",h),a()):(p.classList.remove(t.tab.scratchClass("react-tabs_react-tabs__tab--selected"),t.tab.scratchClass("gui_is-selected")),h.remove(),c=[],r=[])}const o=t.tab.traps.vm
let c=[],r=[],u=0
const h=document.createElement("div")
h.classList.add(t.tab.scratchClass("asset-panel_wrapper"),"sa-var-manager")
const d=document.createElement("input")
d.placeholder=s("search"),d.className=t.tab.scratchClass("input_input-form",{others:"sa-var-manager-searchbox"}),d.addEventListener("input",(()=>{for(const t of c)t.handleSearch(d.value)
for(const t of r)t.handleSearch(d.value)
n()})),h.appendChild(d)
const l=document.createElement("div"),f=document.createElement("span"),m=document.createElement("table")
f.className="sa-var-manager-heading",f.innerText=s("for-this-sprite"),l.appendChild(f),l.appendChild(m)
const b=document.createElement("div"),_=document.createElement("span"),g=document.createElement("table")
_.className="sa-var-manager-heading",_.innerText=s("for-all-sprites"),b.appendChild(_),b.appendChild(g),h.appendChild(l),h.appendChild(b)
const p=document.createElement("li")
t.tab.displayNoneWhileDisabled(p,{display:"flex"}),p.classList.add(t.tab.scratchClass("react-tabs_react-tabs__tab"),t.tab.scratchClass("gui_tab")),p.id="react-tabs-sa-variable-manager"
const E=document.createElement("img")
E.draggable=0,E.src=t.self.dir+"/icon.svg"
const T=document.createElement("span")
T.innerText=s("variables"),p.appendChild(E),p.appendChild(T)
const v=new WeakMap,A=new IntersectionObserver((t=>{for(const e of t)v.get(e.target).setVisible(e.isIntersecting)}),{rootMargin:"100px"})
class O{constructor(t,e){this.scratchVariable=t,this.target=e,this.visible=0,this.buildDOM()}updateValue(t){if(!this.visible&&!t)return
let e
e="list"===this.scratchVariable.type?this.scratchVariable.value.join("\n"):this.scratchVariable.value,e!==this.input.value&&(this.input.value=e)}handleSearch(t){this.scratchVariable.name.toLowerCase().includes(t.toLowerCase())||!t?(this.row.style.display="",this.updateValue(1)):this.row.style.display="none"}resizeInputIfList(){if("list"===this.scratchVariable.type){this.input.style.height="auto"
const t=Math.min(1e3,this.input.scrollHeight)
t>0&&(this.input.style.height=t+"px")}}setVisible(t){this.visible!==t&&(this.visible=t,t&&this.updateValue())}buildDOM(){const t=`sa-variable-manager-${this.scratchVariable.id}`,e=document.createElement("tr")
this.row=e
const s=document.createElement("td")
s.className="sa-var-manager-name"
const n=document.createElement("input")
n.value=this.scratchVariable.name,n.htmlFor=t,n.addEventListener("keydown",(t=>{"Enter"===t.key&&t.target.blur()})),n.addEventListener("focusout",(t=>{t.preventDefault()
const e=Blockly.getMainWorkspace()
let s=n.value
if(s===this.scratchVariable.name)return
this.scratchVariable.isCloud&&(s.startsWith("☁")?s.startsWith("☁ ")||(s=s.substring(0,1)+" "+s.substring(1)):s="☁ "+s)
const a=!s.trim(),i=!!e.getVariable(s,this.scratchVariable.type)
a||i?n.value=this.scratchVariable.name:(e.renameVariableById(this.scratchVariable.id,s),n.value!==s&&(n.value=s))})),n.addEventListener("focus",(()=>{u=1,h.classList.add("freeze")})),n.addEventListener("blur",(()=>{u=0,h.classList.remove("freeze")})),s.appendChild(n),v.set(e,this),A.observe(e)
const a=document.createElement("td")
let i
a.className="sa-var-manager-value",i="list"===this.scratchVariable.type?document.createElement("textarea"):document.createElement("input"),i.id=t,this.input=i,this.updateValue(1),"list"===this.scratchVariable.type&&this.input.addEventListener("input",(()=>this.resizeInputIfList()),0),i.addEventListener("keydown",(t=>{"INPUT"===t.target.nodeName&&"Enter"===t.key&&t.target.blur()})),i.addEventListener("focusout",(t=>{t.preventDefault(),o.setVariableValue(this.target.id,this.scratchVariable.id,"list"===this.scratchVariable.type?i.value.split("\n"):i.value),i.blur()})),i.addEventListener("focus",(()=>{u=1,h.classList.add("freeze")})),i.addEventListener("blur",(()=>{u=0,h.classList.remove("freeze")})),a.appendChild(i),e.appendChild(s),e.appendChild(a),this.handleSearch(d.value)}}p.addEventListener("click",(()=>{t.tab.redux.dispatch({type:"scratch-gui/navigation/ACTIVATE_TAB",activeTabIndex:3})})),t.tab.redux.initialize(),t.tab.redux.addEventListener("statechanged",(({detail:e})=>{"scratch-gui/navigation/ACTIVATE_TAB"===e.action.type?i(3===e.action.activeTabIndex):"scratch-gui/mode/SET_PLAYER"===e.action.type&&(e.action.isPlayerOnly||3!==t.tab.redux.state.scratchGui.editorTab.activeTabIndex||queueMicrotask((()=>i(1))))})),o.runtime.on("PROJECT_LOADED",(()=>{try{a()}catch(t){e.error(t)}})),o.runtime.on("TOOLBOX_EXTENSIONS_NEED_UPDATE",(()=>{try{a()}catch(t){e.error(t)}}))
const x=o.runtime._step
for(o.runtime._step=function(...s){const n=x.call(this,...s)
try{!function(){if(3===t.tab.redux.state?.scratchGui?.editorTab?.activeTabIndex&&!u){for(const t of c)t.updateValue()
for(const t of r)t.updateValue()}}()}catch(t){e.error(t)}return n},t.self.addEventListener("disabled",(()=>{3===t.tab.redux.state.scratchGui.editorTab.activeTabIndex&&t.tab.redux.dispatch({type:"scratch-gui/navigation/ACTIVATE_TAB",activeTabIndex:2})}));;)await t.tab.waitForElement("[class^='react-tabs_react-tabs__tab-list']",{markAsSeen:1,reduxEvents:["scratch-gui/mode/SET_PLAYER","fontsLoaded/SET_FONTS_LOADED","scratch-gui/locales/SELECT_LOCALE"],reduxCondition(t){return!t.scratchGui.mode.isPlayerOnly}}),t.tab.appendToSharedSpace({space:"afterSoundTab",element:p,order:3})}