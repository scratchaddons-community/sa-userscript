export default async function({addon:n}){var c=await n.tab.traps.getBlockly()
!function(Blockly){function a(...a){!function(a=n.settings.get("paddingSize"),i=n.settings.get("cornerSize"),e=n.settings.get("notchSize")){let h=a/100
i/=100,e/=100,t.SEP_SPACE_Y=2*o*h,t.MIN_BLOCK_X=16*o*h,t.MIN_BLOCK_X_OUTPUT=12*o*h,t.MIN_BLOCK_X_SHADOW_OUTPUT=10*o*h,t.MIN_BLOCK_Y=12*o*h,t.EXTRA_STATEMENT_ROW_Y=8*o*h,t.MIN_BLOCK_X_WITH_STATEMENT=40*o*h,t.MIN_BLOCK_Y_SINGLE_FIELD_OUTPUT=8*o*h,t.MIN_BLOCK_Y_REPORTER=10*o*h,t.MIN_STATEMENT_INPUT_HEIGHT=6*o*h,t.NOTCH_WIDTH=8*o*h,t.NOTCH_HEIGHT=2*o*h*e,t.NOTCH_START_PADDING=3*o,t.ICON_SEPARATOR_HEIGHT=10*o*h,t.NOTCH_PATH_LEFT="c 2,0 3,"+1*e+" 4,"+2*e+" l "+4*h*e+","+4*h*e+" c 1,"+1*e+" 2,"+2*e+" 4,"+2*e+" h "+24*(h-.5)+" c 2,0 3,-"+1*e+" 4,-"+2*e+" l "+4*h*e+","+-4*h*e+"c 1,-"+1*e+" 2,-"+2*e+" 4,-"+2*e,t.NOTCH_PATH_RIGHT="h "+(-4*(i-1)-5*(1-e))+"c -2,0 -3,"+1*e+" -4,"+2*e+" l "+-4*h*e+","+4*h*e+" c -1,"+1*e+" -2,"+2*e+" -4,"+2*e+" h "+-24*(h-.5)+" c -2,0 -3,-"+1*e+" -4,-"+2*e+" l "+-4*h*e+","+-4*h*e+"c -1,-"+1*e+" -2,-"+2*e+" -4,-"+2*e,t.INPUT_SHAPE_HEXAGONAL="M "+4*o*h+",0  h "+4*o+" l "+4*o*h+","+4*o*h+" l "+-4*o*h+","+4*o*h+" h "+-4*o+" l "+-4*o*h+","+-4*o*h+" l "+4*o*h+","+-4*o*h+" z",t.INPUT_SHAPE_HEXAGONAL_WIDTH=12*o*h,t.INPUT_SHAPE_ROUND="M "+4*o+",0 h "+4*o+" a "+4*o+" "+4*o+" 0 0 1 0 "+8*o+" h "+-4*o+" a "+4*o+" "+4*o+" 0 0 1 0 -"+8*o+" z",t.INPUT_SHAPE_ROUND_WIDTH=12*o*h,t.INPUT_SHAPE_HEIGHT=8*o*h,t.FIELD_HEIGHT=8*o*h,t.FIELD_WIDTH=6*o*Math.min(h,1)+10*o*Math.max(h-1,0),t.FIELD_DEFAULT_CORNER_RADIUS=4*o*h,t.EDITABLE_FIELD_PADDING=1.5*o*h,t.BOX_FIELD_PADDING=2*o*h,t.DROPDOWN_ARROW_PADDING=2*o*h,t.FIELD_WIDTH_MIN_EDIT=8*o*h,t.INPUT_AND_FIELD_MIN_X=12*o*h,t.INLINE_PADDING_Y=1*o*h,t.SHAPE_IN_SHAPE_PADDING[1][0]=5*o*h,t.SHAPE_IN_SHAPE_PADDING[1][2]=5*o*h,t.SHAPE_IN_SHAPE_PADDING[1][3]=5*o*h
var l=c.FieldDropdown.prototype.positionArrow
c.FieldDropdown.prototype.positionArrow=function(n){return this.arrowY_=11*h,l.call(this,n)},t.CORNER_RADIUS=1*o*i*100/100,t.TOP_LEFT_CORNER_START="m 0,"+t.CORNER_RADIUS,t.TOP_LEFT_CORNER="A "+t.CORNER_RADIUS+","+t.CORNER_RADIUS+" 0 0,1 "+t.CORNER_RADIUS+",0",t.TOP_RIGHT_CORNER="a "+t.CORNER_RADIUS+","+t.CORNER_RADIUS+" 0 0,1 "+t.CORNER_RADIUS+","+t.CORNER_RADIUS,t.BOTTOM_RIGHT_CORNER=" a "+t.CORNER_RADIUS+","+t.CORNER_RADIUS+" 0 0,1 -"+t.CORNER_RADIUS+","+t.CORNER_RADIUS,t.BOTTOM_LEFT_CORNER="a "+t.CORNER_RADIUS+","+t.CORNER_RADIUS+" 0 0,1 -"+t.CORNER_RADIUS+",-"+t.CORNER_RADIUS,t.INNER_TOP_LEFT_CORNER=" a "+t.CORNER_RADIUS+","+t.CORNER_RADIUS+" 0 0,0 -"+t.CORNER_RADIUS+","+t.CORNER_RADIUS,t.INNER_BOTTOM_LEFT_CORNER="a "+t.CORNER_RADIUS+","+t.CORNER_RADIUS+" 0 0,0 "+t.CORNER_RADIUS+","+t.CORNER_RADIUS,t.TOP_RIGHT_CORNER_DEFINE_HAT="a "+t.DEFINE_HAT_CORNER_RADIUS+","+t.DEFINE_HAT_CORNER_RADIUS+" 0 0,1 "+t.DEFINE_HAT_CORNER_RADIUS+","+t.DEFINE_HAT_CORNER_RADIUS+" v "+(1*o-t.CORNER_RADIUS),t.STATEMENT_INPUT_INNER_SPACE=2.8*o-.9*o*i}(...a),function(){const n=Blockly.getMainWorkspace()
if(n){i.editingTarget&&i.emitWorkspaceUpdate()
const c=n.getFlyout()
if(c){const a=c.getWorkspace()
Blockly.Xml.clearWorkspaceAndLoadFromXml(Blockly.Xml.workspaceToDom(a),a),n.getToolbox().refreshSelection(),n.toolboxRefreshEnabled_=1}}}()}const t=c.BlockSvg
var i=n.tab.traps.vm
const{GRID_UNIT:o}=t
n.settings.addEventListener("change",(()=>a())),n.self.addEventListener("disabled",(()=>{a(100,100,100)})),n.self.addEventListener("reenabled",(()=>a())),a()}(window.Blockly)}