export default async function({addon:t}){function s(){const s=Blockly.getMainWorkspace(),i=s.getToolbox()
if(!i)return
const n=i.categoryMenu_
n&&(n.secondTable&&!t.self.disabled||(n.dispose(),n.createDom(),i.populate_(s.options.languageTree),i.position()))}const Blockly=await t.tab.traps.getBlockly(),i=Blockly.Toolbox.prototype.position
Blockly.Toolbox.prototype.position=function(){i.call(this),this.HtmlDiv&&!this.HtmlDiv._observer&&(this.HtmlDiv._observer=new ResizeObserver((()=>{this.flyout_.position()})),this.HtmlDiv._observer.observe(this.HtmlDiv))}
const n=Blockly.VerticalFlyout.prototype.position
Blockly.VerticalFlyout.prototype.position=function(){if(n.call(this),t.self.disabled||!this.isVisible())return
var s=this.targetWorkspace_.getMetrics()
if(!s)return
var i=this.toolboxPosition_===Blockly.TOOLBOX_AT_RIGHT?s.viewWidth-3:0,o=this.parentToolbox_.HtmlDiv.offsetHeight
this.width_=this.parentToolbox_.getWidth(),this.height_=Math.max(0,s.viewHeight-o),this.setBackgroundPath_(this.width_,this.height_),this.svgGroup_.setAttribute("width",this.width_),this.svgGroup_.setAttribute("height",this.height_),Blockly.utils.setCssTransform(this.svgGroup_,"translate("+i+"px,"+o+"px)"),this.scrollbar_&&(this.scrollbar_.setOrigin(i+(this.toolboxPosition_===Blockly.TOOLBOX_AT_RIGHT?0:this.width_-this.getWidth()),o),this.scrollbar_.resize())
const e=this.svgGroup_.closest("[class*='gui_tab-panel_']")
e.style.setProperty("--sa-add-extension-button-y",o-33+"px"),e.parentElement.style.setProperty("--sa-flyout-y",`${o}px`)}
const o=Blockly.VerticalFlyout.prototype.getWidth
Blockly.VerticalFlyout.prototype.getWidth=function(){let s=o.call(this)
return t.self.disabled||(s+=60),s}
const e=Blockly.Toolbox.CategoryMenu.prototype.createDom
Blockly.Toolbox.CategoryMenu.prototype.createDom=function(){e.call(this),t.self.disabled||(this.secondTable=document.createElement("div"),this.secondTable.className="scratchCategorySecondMenu "+(this.parent_.horizontalLayout_?"scratchCategoryMenuHorizontal":"scratchCategoryMenu"),this.parentHtml_.appendChild(this.secondTable))}
const h=Blockly.Toolbox.CategoryMenu.prototype.populate
Blockly.Toolbox.CategoryMenu.prototype.populate=function(s){if(!s)return
const i=["motion","looks","sound","events","control","sensing","operators","variables","lists","myBlocks"],n=[],o=s.cloneNode(1)
t.self.disabled||o.childNodes.forEach((t=>{"category"!==t.tagName||i.includes(t.id)||(n.push(t.cloneNode(1)),t.remove())})),h.call(this,o)
for(const t of n){const s=document.createElement("div")
s.className="scratchCategoryMenuRow",this.secondTable.appendChild(s),t&&this.categories_.push(new Blockly.Toolbox.Category(this,s,t))}t.self.disabled||(this.height_=this.table.offsetHeight+this.secondTable.offsetHeight)}
const c=Blockly.Toolbox.CategoryMenu.prototype.dispose
for(Blockly.Toolbox.CategoryMenu.prototype.dispose=function(){c.call(this),this.secondTable&&(this.secondTable.remove(),this.secondTable=null)},s(),t.self.addEventListener("disabled",s),t.self.addEventListener("reenabled",s);;){const s=await t.tab.waitForElement("[class*='gui_extension-button_']",{markAsSeen:1,reduxEvents:["scratch-gui/mode/SET_PLAYER","fontsLoaded/SET_FONTS_LOADED","scratch-gui/locales/SELECT_LOCALE"],condition(){return!t.tab.redux.state.scratchGui.mode.isPlayerOnly}}),i=Object.assign(document.createElement("span"),{className:"sa-add-extension-label",innerText:t.tab.scratchMessage("gui.gui.addExtension")})
t.tab.displayNoneWhileDisabled(i),s.appendChild(i),s.removeAttribute("title")}}