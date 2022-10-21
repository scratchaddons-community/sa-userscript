import{removeAlpha as t,multiply as o,alphaBlend as i,recolorFilter as s}from"../../libraries/common/cs/text-color.esm.js"
const n={id:null,settingId:"Pen-color",colorId:"pen"},r={settingId:"sa-color",colorId:"sa"},e=[{id:"motion",settingId:"motion-color",colorId:"motion"},{id:"looks",settingId:"looks-color",colorId:"looks"},{id:"sound",settingId:"sounds-color",colorId:"sounds"},{id:"events",settingId:"events-color",colorId:"event"},{id:"control",settingId:"control-color",colorId:"control"},{id:"sensing",settingId:"sensing-color",colorId:"sensing"},{id:"operators",settingId:"operators-color",colorId:"operators"},{id:"variables",settingId:"data-color",colorId:"data"},{id:"lists",settingId:"data-lists-color",colorId:"data_lists"},{id:"myBlocks",settingId:"custom-color",colorId:"more"},n,r]
export default async function({addon:c}){const Blockly=await c.tab.traps.getBlockly(),l=JSON.parse(JSON.stringify(Blockly.Colours))
l.sa={primary:"#29beb8",secondary:"#3aa8a4",tertiary:"#3aa8a4"}
let f=c.settings.get("text")
const h=()=>!c.self.disabled&&("colorOnWhite"===f||"colorOnBlack"===f),d=t=>c.self.disabled?l[t.colorId].primary:"colorOnWhite"===f?"#feffff":"colorOnBlack"===f?"#282828":c.settings.get(t.settingId),a=t=>c.self.disabled?l[t.colorId].secondary:h()?i(d(t),o(c.settings.get(t.settingId),{a:.15})):o(c.settings.get(t.settingId),{r:.9,g:.9,b:.9}),u=t=>c.self.disabled?l[t.colorId].tertiary:h()?c.settings.get(t.settingId):o(c.settings.get(t.settingId),{r:.8,g:.8,b:.8}),I=t=>{if(t instanceof Blockly.Block||t instanceof Blockly.Field){const s=t instanceof Blockly.Block?t:t.sourceBlock_
if(h()){let t
return t=s.isShadow()&&s.getParent()?s.getParent().getColour():s.getColour(),i(t,o(s.getColourTertiary(),{a:.25}))}return s.getColourTertiary()}return h()?i(d(t),o(c.settings.get(t.settingId),{a:.25})):u(t)},m=t=>c.self.disabled||"white"===f?"#ffffff":"black"===f?"#575e75":t?t.sourceBlock_.getColourTertiary():"#000000",g=()=>c.self.disabled?"#ffffff":{white:"#ffffff",black:"#575e75",colorOnWhite:"#575e75",colorOnBlack:"#ffffff"}[f],b=Blockly.Block.prototype.makeColour_
Blockly.Block.prototype.makeColour_=function(t){return"string"==typeof t&&/^#(?:[0-9A-Za-z]{2}){3,4}$/.test(t)?t:b(t)}
const p=Blockly.Toolbox.Category.prototype.createDom
Blockly.Toolbox.Category.prototype.createDom=function(){if(p.call(this),this.iconURI_)return
const t=e.find((t=>t.id===this.id_))
t&&(this.bubble_.style.backgroundColor=h()?I(t):d(t),this.bubble_.style.borderColor=u(t))}
const y=Blockly.Block.prototype.setColour
Blockly.Block.prototype.setColour=function(t,o,i){return t.toLowerCase()===l.pen.primary.toLowerCase()&&(t=d(n),o=a(n),i=u(n)),y.call(this,t,o,i)}
const k=Blockly.BlockSvg.prototype.updateColour
Blockly.BlockSvg.prototype.updateColour=function(){k.call(this)
for(const t of this.inputList)t.outlinePath&&t.outlinePath.setAttribute("fill",I(this))}
const O=Blockly.BlockSvg.prototype.showContextMenu_
Blockly.BlockSvg.prototype.showContextMenu_=function(t){return Blockly.WidgetDiv.DIV.style.setProperty("--editorTheme3-hoveredItem",I(this)),O.call(this,t)}
const v=Blockly.FieldLabel.prototype.init
Blockly.FieldLabel.prototype.init=function(){v.call(this),this.textElement_.style.fill=m(this)}
const F=Blockly.FieldTextInput.prototype.init
Blockly.FieldTextInput.prototype.init=function(){F.call(this),this.sourceBlock_.isShadow()||this.box_.setAttribute("fill",I(this))}
const x=Blockly.FieldDropdown.prototype.init
Blockly.FieldDropdown.prototype.init=function(){x.call(this),this.textElement_.style.setProperty("fill",m(this),"important"),"#ffffff"!==m(this)&&(this.arrow_.style.filter=s(m(this)))}
const B=Blockly.FieldDropdown.prototype.showEditor_
Blockly.FieldDropdown.prototype.showEditor_=function(){let o
B.call(this),this.disableColourChange_||(this.sourceBlock_.isShadow()?this.sourceBlock_.setShadowColour(I(this)):this.box_&&this.box_.setAttribute("fill",I(this))),o=this.sourceBlock_.isShadow()&&this.sourceBlock_.getParent()?this.sourceBlock_.getParent().getColour():this.sourceBlock_.getColour(),Blockly.DropDownDiv.DIV_.style.backgroundColor=t(o),h()?Blockly.DropDownDiv.getContentDiv().style.setProperty("--editorTheme3-hoveredItem",I(this)):Blockly.DropDownDiv.getContentDiv().style.removeProperty("--editorTheme3-hoveredItem")}
const T=Blockly.FieldVariable.prototype.init
Blockly.FieldVariable.prototype.init=function(){T.call(this),this.textElement_.style.setProperty("fill",m(this),"important")}
const w=Blockly.FieldVariableGetter.prototype.init
Blockly.FieldVariableGetter.prototype.init=function(){w.call(this),this.textElement_.style.fill=m(this)}
const W=Blockly.FieldMatrix.prototype.updateMatrix_
Blockly.FieldMatrix.prototype.updateMatrix_=function(){W.call(this)
for(let t=0;this.matrix_.length>t;t++)"0"!==this.matrix_[t]&&(this.fillMatrixNode_(this.ledButtons_,t,g()),this.fillMatrixNode_(this.ledThumbNodes_,t,g()))}
const j=Blockly.FieldMatrix.prototype.createButton_
Blockly.FieldMatrix.prototype.createButton_=function(t){return"#FFFFFF"===t&&(t=g()),j.call(this,t)}
const C=()=>{const t=c.tab.traps.vm
f=c.settings.get("text")
for(const t of e){const o=`--editorTheme3-${t.colorId}`
for(const[i,s]of Object.entries({primary:d(t),secondary:a(t),tertiary:u(t),field:I(t)}))document.documentElement.style.setProperty(`${o}-${i}`,s)
Blockly.Colours[t.colorId]&&(Blockly.Colours[t.colorId].primary=d(t),Blockly.Colours[t.colorId].secondary=a(t),Blockly.Colours[t.colorId].tertiary=u(t))}c.tab.setCustomBlockColor({color:d(r),secondaryColor:a(r),tertiaryColor:u(r)}),Blockly.Colours.textField=c.self.disabled?l.textField:c.settings.get("input-color"),Blockly.Colours.fieldShadow="#575e75"===g()?"rgba(0, 0, 0, 0.15)":l.fieldShadow
const o=Blockly.getMainWorkspace(),i=o.getFlyout(),s=o.getToolbox()
t.editingTarget&&t.emitWorkspaceUpdate()
const n=i.getWorkspace()
Blockly.Xml.clearWorkspaceAndLoadFromXml(Blockly.Xml.workspaceToDom(n),n),s.populate_(o.options.languageTree)}
C(),c.settings.addEventListener("change",C),c.self.addEventListener("disabled",C),c.self.addEventListener("reenabled",C)}