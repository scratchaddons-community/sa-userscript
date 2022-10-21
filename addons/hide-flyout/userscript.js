export default async function({addon:o,msg:t}){function n(){return{none:"0",short:"0.25",default:"0.5",long:"1"}[o.settings.get("speed")]}function e(){return o.settings.get("toggle")}function c(o){for(let t of[b,g])t.style.transitionDuration=`${o}s`}function l(){for(let o of[b,g])o.style.removeProperty("transition-duration")}function u(){d.classList.toggle("locked",y),f.title=t(y?"unlock":"lock"),h.src=o.self.dir+`/${y?"":"un"}lock.svg`}function s(o,t={}){o&&0!==o.buttons&&!document.querySelector(".blocklyToolboxDiv").className.includes("blocklyToolboxDelete")||(c(t="object"==typeof t?n():t),b.classList.remove("sa-flyoutClose"),g.classList.remove("sa-flyoutClose"),setTimeout((()=>{Blockly.getMainWorkspace().recordCachedAreas(),l()}),1e3*t)),m=0}function i(o,t=n()){y||(o&&o.buttons?m=1:(c(t),b.classList.add("sa-flyoutClose"),g.classList.add("sa-flyoutClose"),setTimeout((()=>{Blockly.getMainWorkspace().recordCachedAreas(),l()}),1e3*t)))}function r(){if(T)return
T=1,o.tab.redux.initialize(),o.tab.redux.addEventListener("statechanged",(t=>{switch(t.detail.action.type){case"scratch-gui/navigation/ACTIVATE_TAB":{const n=e()
0!==t.detail.action.activeTabIndex||o.self.disabled||"hover"!==n&&"cathover"!==n||(i(null,0),v=0)
break}}})),document.body.addEventListener("mouseup",(()=>{m&&(i(),m=0)})),o.self.enabledLate&&"category"===e()&&Blockly.getMainWorkspace().getToolbox().selectedItem_.setSelected(0),o.self.addEventListener("disabled",(()=>{Blockly.getMainWorkspace().getToolbox().selectedItem_.setSelected(1),Blockly.svgResize(Blockly.getMainWorkspace())})),o.self.addEventListener("reenabled",(()=>{"category"===e()&&(Blockly.getMainWorkspace().getToolbox().selectedItem_.setSelected(0),i(null,0),v=0),Blockly.svgResize(Blockly.getMainWorkspace())})),o.settings.addEventListener("change",(()=>{o.self.disabled||("category"===e()?y?(v=1,y=0,u()):(Blockly.getMainWorkspace().getToolbox().selectedItem_.setSelected(0),i(null,0),v=0):(i(),Blockly.getMainWorkspace().getToolbox().selectedItem_.setSelected(1)),Blockly.svgResize(Blockly.getMainWorkspace()))}))
const t=Blockly.Toolbox.prototype.setSelectedItem
Blockly.Toolbox.prototype.setSelectedItem=function(n,c=1){const l=this.selectedItem_
t.call(this,n,c),o.self.disabled||"category"!==e()||(c?n===l?(v=!v,v?s():(i(),n.setSelected(0))):v||(k=0,v=1,s()):n.setSelected(0))}
const n=Blockly.Toolbox.prototype.selectCategoryById
Blockly.Toolbox.prototype.selectCategoryById=function(...t){if(o.self.disabled||"category"!==e()||v)return n.call(this,...t)}
const c=Blockly.Flyout.prototype.stepScrollAnimation
Blockly.Flyout.prototype.stepScrollAnimation=function(){if(!k)return this.scrollbar_.set(this.scrollTarget),this.scrollTarget=null,void(k=1)
c.call(this)}
const l=Blockly.WorkspaceSvg.getTopLevelWorkspaceMetrics_
Blockly.WorkspaceSvg.getTopLevelWorkspaceMetrics_=function(){const t=l.call(this)
return o.self.disabled||"hover"===e()||this.RTL||310===this.getToolbox()?.flyout_?.getWidth()?t:{...t,absoluteLeft:t.absoluteLeft-250,viewWidth:t.viewWidth+250}},Blockly.getMainWorkspace()&&(Blockly.getMainWorkspace().getMetrics=Blockly.WorkspaceSvg.getTopLevelWorkspaceMetrics_)}let a=null,d=null,f=null,h=null,b=null,g=null,v=0,y=0,m=0,k=1
const Blockly=await o.tab.traps.getBlockly()
let T=0
for(;;){b=await o.tab.waitForElement(".blocklyFlyout",{markAsSeen:1,reduxEvents:["scratch-gui/mode/SET_PLAYER","scratch-gui/locales/SELECT_LOCALE","fontsLoaded/SET_FONTS_LOADED"],reduxCondition(o){return!o.scratchGui.mode.isPlayerOnly}}),g=document.querySelector(".blocklyFlyoutScrollbar")
const t=document.querySelector('[class*="gui_blocks-wrapper_"]'),n=document.querySelector(".injectionDiv"),c=document.createElement("div")
c.className="sa-flyout-border-1",o.tab.displayNoneWhileDisabled(c),n.appendChild(c)
const l=document.createElement("div")
l.className="sa-flyout-border-2",o.tab.displayNoneWhileDisabled(l),n.appendChild(l),a&&a.remove(),a=document.createElement("div"),t.appendChild(a),a.className="sa-flyout-placeHolder",a.style.display="none",d&&d.remove(),d=document.createElementNS("http://www.w3.org/2000/svg","foreignObject"),d.setAttribute("class","sa-lock-object"),d.style.display="none",f=document.createElement("button"),f.className="sa-lock-button",h=document.createElement("img"),h.alt="",u(),f.onclick=()=>{y=!y,u()},f.appendChild(h),d.appendChild(f),b.appendChild(d),i(null,0),v=0
const m=document.querySelector(".blocklyToolboxDiv"),k=document.querySelector("[class^=gui_extension-button-container_]")
for(let t of[m,k,b,g])t.onmouseenter=t=>{const n=e()
o.self.disabled||"hover"!==n&&"cathover"!==n||s(t)},t.onmouseleave=t=>{const n=e()
o.self.disabled||"hover"!==n&&"cathover"!==n||i(t)}
a.onmouseenter=t=>{o.self.disabled||"hover"!==e()||s(t)},a.onmouseleave=t=>{o.self.disabled||"hover"!==e()||i(t)},r(),"hover"!==e()&&Blockly.svgResize(Blockly.getMainWorkspace())}}