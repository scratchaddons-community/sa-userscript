import t from"../common/Listenable.js"
export default class e extends t{constructor(t){super(),this._react_internal_key=void 0,this._isWWW=()=>"scratch-www"===t.clientVersion,this._getEditorMode=()=>this._isWWW()&&t.editorMode,this._waitForElement=t.waitForElement.bind(t),this._cache=Object.create(null)}get vm(){if(!this._getEditorMode())throw new Error("Cannot access vm on non-project page")
return __scratchAddonsTraps._onceMap.vm}get REACT_INTERNAL_PREFIX(){return"__reactInternalInstance$"}async getBlockly(){if(this._cache.Blockly)return this._cache.Blockly
const t=this._getEditorMode()
if(!t||"embed"===t)throw new Error(`Cannot access Blockly on ${t} page (${location.pathname})`)
const e='[class^="gui_blocks-wrapper"]'
let r=document.querySelector(e)
r||(r=await this._waitForElement(e,{reduxCondition(t){return!t.scratchGui.mode.isPlayerOnly}})),this._react_internal_key||(this._react_internal_key=Object.keys(r).find((t=>t.startsWith(this.REACT_INTERNAL_PREFIX))))
let s=r[this._react_internal_key]
for(;s=s.child,!s||!s.stateNode||!s.stateNode.ScratchBlocks;);return this._cache.Blockly=s.stateNode.ScratchBlocks}getInternalKey(t){return this._react_internal_key||(this._react_internal_key=Object.keys(t).find((t=>t.startsWith(this.REACT_INTERNAL_PREFIX)))),this._react_internal_key}async getPaper(){if(this._cache.paper)return this._cache.paper
const t=this._getEditorMode()
if(!t||"embed"===t)throw new Error("Cannot access paper on this page")
const e=await this._waitForElement("[class*='paint-editor_mode-selector']",{reduxCondition(t){return 1===t.scratchGui.editorTab.activeTabIndex&&!t.scratchGui.mode.isPlayerOnly}})
let r,s=e[this.getInternalKey(e)].child
for(;s;){const t=s.child.stateNode
if(t.tool){r=t.tool
break}if(t.blob&&t.blob.tool){r=t.blob.tool
break}s=s.sibling}if(r){const t=r._scope
return this._cache.paper=t,t}throw new Error("cannot find paper :(")}}