import{escapeHTML as t}from"../../libraries/common/cs/autoescaper.js"
export default async function({addon:e,console:n,msg:o}){let s,r,i,c,l,f
const a="//",u=t=>{const e=t.indexOf(a)
return-1===e||0===e?null:t.substr(0,e)},h=t=>{const e=t.indexOf(a)
return-1===e||0===e?t:t.substr(e+a.length)},d=(t,e)=>{const n=h(t)
return e?`${e}//${n}`:n},p=t=>!t.includes(a)&&!t.endsWith("/"),m=["_mouse_","_stage_","_edge_","_myself_","_random_"],g=t=>""===t?"2":m.includes(t)?`${t}2`:t,y=t=>{const e=t.closest("[class*='sprite-selector_sprite-selector']")
if(e)return e[r].child.sibling.child.stateNode
const n=t.closest('[class*="asset-panel_wrapper"]')
if(n)return n[r].child.child.stateNode
throw new Error("cannot find SortableHOC")},w=(t,e,n)=>Math.min(Math.max(t,e),n),C=t=>t&&t.name&&"object"==typeof t.name?t.name:null,b={assetId:"&__sa_folders_folder",encodeDataURI:()=>e.self.dir+"/folder.svg"},I=`data:image/svg+xml;base64,${btoa('<?xml version="1.0" encoding="UTF-8"?>\n<svg width="100px" height="100px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <g id="Sound" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <path d="M12.4785058,12.6666667 C12.3144947,12.6666667 12.1458852,12.6272044 11.9926038,12.5440517 C11.537358,12.2960031 11.3856094,11.7562156 11.6553847,11.3376335 C12.1688774,10.5371131 12.1688774,9.54491867 11.6553847,8.74580756 C11.3856094,8.32581618 11.537358,7.78602861 11.9926038,7.53798001 C12.452448,7.29275014 13.0379829,7.43086811 13.3046926,7.84804076 C14.1737981,9.20103311 14.1737981,10.8809986 13.3046926,12.233991 C13.1268862,12.5130457 12.806528,12.6666667 12.4785058,12.6666667 Z M15.3806784,13.8333333 C15.2408902,13.8333333 15.0958763,13.796281 14.9665396,13.7182064 C14.5785295,13.485306 14.4491928,12.9784829 14.6791247,12.5854634 C15.5949331,11.0160321 15.5949331,9.065491 14.6791247,7.49738299 C14.4491928,7.10436352 14.5785295,6.59621712 14.9665396,6.36331669 C15.3558562,6.13438616 15.8549129,6.26274605 16.0848448,6.65444223 C17.3050517,8.74260632 17.3050517,11.3389168 16.0848448,13.4270809 C15.9319924,13.6890939 15.6602547,13.8333333 15.3806784,13.8333333 Z M10.3043478,5.62501557 L10.3043478,13.873675 C10.3043478,14.850934 9.10969849,15.3625101 8.36478311,14.7038052 L6.7566013,13.2797607 C6.18712394,12.7762834 5.44499329,12.4968737 4.67362297,12.4968737 L4.3923652,12.4968737 C3.62377961,12.4968737 3,11.8935108 3,11.1470686 L3,8.36646989 C3,7.62137743 3.62377961,7.01666471 4.3923652,7.01666471 L4.65830695,7.01666471 C5.42967727,7.01666471 6.17180792,6.73725504 6.74128529,6.23377771 L8.36478311,4.79623519 C9.10969849,4.13753026 10.3043478,4.64910643 10.3043478,5.62501557 Z" id="Combined-Shape" fill="#575E75"></path>\n    </g>\n</svg>')}`
let _=null
const k=Object.create(null),v=t=>{if(!k[t]){_||(_=document.createElement("style"),document.head.appendChild(_))
const e=360*(t=>{const e=(t=>{let e=0
for(let n=0;t.length>n;n++)e=31*e+t.charCodeAt(n),e|=0
return e})(t),n=(o=e,function(){var t=o+=1831565813
return t=Math.imul(t^t>>>15,1|t),(((t^=t+Math.imul(t^t>>>7,61|t))^t>>>14)>>>0)/4294967296})
var o
return n(),n(),n(),n(),n()})(t),n=`hsla(${e}deg, 100%, 85%, 0.5)`,o=`sa-folders-color-${Object.keys(k).length}`
k[t]=o,_.textContent+=`.${o}{background-color:${n} !important;}`,_.textContent+=`.${o}[class*="sprite-selector_raised"]:not([class*="sa-folders-folder"]){background-color:hsla(${e}deg, 100%, 77%, 1) !important;}`}return k[t]},x=t=>{const e=Object.create(null),n=[]
for(const o of t){const t=o.getName?o.getName():o.name,s=u(t)
"string"==typeof s?(e[s]||(e[s]=[],n.push(e[s])),e[s].push(o)):n.push(o)}const o=n.flat()
for(let e=0;t.length>e;e++)if(n[e]!==t[e])return{items:o,changed:1}
return{items:o,changed:0}},M=()=>{const{items:t,changed:e}=x(s.runtime.targets)
e&&(s.runtime.targets=t,s.emitTargetsUpdate())},S=(t=s.editingTarget)=>{const{items:e,changed:n}=x(t.sprite.costumes)
n&&(t.sprite.costumes=e,s.emitTargetsUpdate())},E=(t=s.editingTarget)=>{const{items:e,changed:n}=x(t.sprite.sounds)
n&&(t.sprite.sounds=e,s.emitTargetsUpdate())},A=t=>{const e=t.constructor
if(!Array.isArray(t.props.items)||"string"!=typeof t.props.selectedId&&"number"!=typeof t.props.selectedItemIndex||void 0===t.containerBox||void 0!==e.prototype.componentDidMount||void 0!==e.prototype.componentDidUpdate||"function"!=typeof e.prototype.handleAddSortable||"function"!=typeof e.prototype.handleRemoveSortable||"function"!=typeof e.prototype.setRef)throw new Error("Can not comprehend SortableHOC")}
class D{constructor(){this.cache=new Map,this.usedThisTick=new Set}has(t){return this.cache.has(t)}get(t){return this.usedThisTick.add(t),this.cache.get(t)}set(t,e){this.usedThisTick.add(t),this.cache.set(t,e)}startTick(){this.usedThisTick.clear()}endTick(){for(const t of Array.from(this.cache.keys()))this.usedThisTick.has(t)||this.cache.delete(t)}clear(){this.usedThisTick.clear(),this.cache.clear()}}const O=(e,n)=>{const o=new D,s=new D,r=new D,a=[[0,0],[40,0],[0,40],[40,40]],h=e=>{let n='data:image/svg+xml;,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80">'
for(let o=0;o<Math.min(a.length,e.length);o++){const s=e[o],r=40,i=40,[c,l]=a[o]
let f
s.asset?f=t(s.asset.encodeDataURI()):s.costume&&s.costume.asset?f=t(s.costume.asset.encodeDataURI()):s.url&&(f=I),f&&(n+=`<image width="${r}" height="${i}" x="${c}" y="${l}" href="${f}"/>`)}return n+="</svg>",n},d=t=>{let e="sa_folder&&"
for(let n=0;n<Math.min(a.length,t.length);n++){const o=t[n]
o.asset?e+=o.asset.assetId:o.costume&&o.costume.asset?e+=o.costume.asset.assetId:o.url&&(e+=o.url),e+="&&"}return e},p=(t,e)=>{const i=t=>{const e=t.name
let n,s
o.has(e)?(n=o.get(e),s=n.name):(s={toString:()=>`_${t.name}`},n={},o.set(e,n))
const r=u(t.name)
return Object.assign(n,t),s.realName=t.name,s.realIndex=a,s.inFolder=r,n.name=s,{newItem:n,itemData:s}}
o.startTick(),s.startTick(),r.startTick()
const c=new Map,l=[],f={items:l}
let a=0
for(;e.items.length>a;){const o=e.items[a],p=u(o.name)
if(null===p)l.push(i(o).newItem),2===n&&e.selectedItemIndex===a&&(f.selectedItemIndex=l.length-1)
else{const o=-1!==t.indexOf(p),m=[]
for(;e.items.length>a;){const t=e.items[a],s=i(t)
if(u(t.name)!==p)break
m.push(s.newItem),2===n&&e.selectedItemIndex===a&&(f.selectedItemIndex=o?l.length+m.length:-1),a++}a--
const g=c.get(p)||0
c.set(p,g+1)
const y=d(m),w=`${o}&${g}&${p}&${y}&`,C=`&__${g}_${p}`,I=y
let _,k,v
if(s.has(w)?(_=s.get(w),k=_.name):(_={id:{toString:()=>C}},k={toString:()=>C},s.set(w,_)),k.folder=p,k.folderOpen=o,_.items=m,_.name=k,o?v=b:r.has(I)?v=r.get(I):(v={assetId:I,encodeDataURI:()=>h(m)},r.set(I,v)),1===n?(_.costume||(_.costume={}),_.costume.asset=v,_.id||(_.id={}),_.id.sa_folder_items=m,_.id.toString=()=>C):(_.asset=v,_.dragPayload||(_.dragPayload={}),_.dragPayload.sa_folder_items=m),l.push(_),o)for(const t of m)l.push(t)}a++}return o.endTick(),s.endTick(),r.endTick(),f},m=t=>1===n?t.props.items.find((e=>e.id===t.props.selectedId)):2===n?t.props.items[t.props.selectedItemIndex]:null
e.prototype.saInitialSetup=function(){o.clear(),s.clear(),r.clear()
const t=[],e=m(this)
if(e&&!e.isStage){const o=u(e.name)
t.push(o),1===n?i=o:2===n&&(c=o)}this.setState({folders:t})},e.prototype.componentDidMount=function(){const t=m(this)
if(t){const e=u(t.name)
1===n?i=e:2===n&&(c=e)}this.saInitialSetup()},e.prototype.componentDidUpdate=function(t){const e=m(this)
if(e){const o=u(e.name),s=this.state.folders.includes(o)?o:null
let r
1===n?i=s:2===n&&(c=s),r=this.props.selectedId?this.props.selectedId!==t.selectedId:this.props.items[this.props.selectedItemIndex]&&t.items[t.selectedItemIndex]&&this.props.items[this.props.selectedItemIndex].name!==t.items[t.selectedItemIndex].name,r&&(e.isStage||"string"!=typeof o||this.state.folders.includes(o)||this.setState((t=>({folders:[...t.folders,o]}))))}}
const g=e.prototype.render
e.prototype.render=function(){const t=this.props
this.props={...this.props,...p(this.state&&this.state.folders||[],this.props)},1===n?l=this.props.items:2===n&&(f=this.props.items)
const e=g.call(this)
return this.props=t,e}},U=(t,e)=>{const n=y(t.ref)
return(n.state&&n.state.folders||[]).includes(e)},T=(t,e,n)=>{y(t.ref).setState((t=>{let o=t&&t.folders||[]
return o=o.filter((t=>t!==e)),n?{folders:[...o,e]}:{folders:o}}))}
e.tab.createEditorContextMenu(((t,n)=>{if("sprite"!==t&&"costume"!==t&&"sound"!==t)return
const r=n.target[e.tab.traps.getInternalKey(n.target)].return.return.return.stateNode,i=C(r.props)
if(i){if("string"==typeof i.folder){n.target.setAttribute("sa-folders-context-type","folder")
const t=t=>{const e=U(r,i.folder)
if(T(r,i.folder,0),e&&"string"==typeof t&&T(r,t,1),"SPRITE"===r.props.dragType){for(const e of s.runtime.targets)e.isOriginal&&u(e.getName())===i.folder&&s.renameSprite(e.id,g(d(e.getName(),t)))
s.emitWorkspaceUpdate(),M()}else if("COSTUME"===r.props.dragType){for(let e=0;s.editingTarget.sprite.costumes.length>e;e++){const n=s.editingTarget.sprite.costumes[e]
u(n.name)===i.folder&&s.renameCostume(e,d(n.name,t))}S()}else if("SOUND"===r.props.dragType){for(let e=0;s.editingTarget.sprite.sounds.length>e;e++){const n=s.editingTarget.sprite.sounds[e]
u(n.name)===i.folder&&s.renameSound(e,d(n.name,t))}E()}},c=async()=>{let n=await e.tab.prompt(o("rename-folder-prompt-title"),o("rename-folder-prompt"),i.folder,{useEditorClasses:1})
null!==n&&(p(n)?(n||(n=null),t(n)):alert(o("name-not-allowed")))},l=()=>{t(null)}
return[{className:"sa-folders-rename-folder",label:o("rename-folder"),callback:c,position:"assetContextMenuAfterDelete",order:10},{className:"sa-folders-remove-folder",label:o("remove-folder"),callback:l,position:"assetContextMenuAfterDelete",order:11}]}{n.target.setAttribute("sa-folders-context-type","asset")
const t=t=>{if("SPRITE"===r.props.dragType){const e=s.runtime.getTargetById(r.props.id)
s.renameSprite(r.props.id,g(d(e.getName(),t))),M(),s.emitWorkspaceUpdate()}else if("COSTUME"===r.props.dragType){const e=C(r.props),n=s.editingTarget.sprite.costumes[e.realIndex]
s.renameCostume(s.editingTarget.sprite.costumes.indexOf(n),d(n.name,t)),S()}else if("SOUND"===r.props.dragType){const e=C(r.props),n=s.editingTarget.sprite.sounds[e.realIndex]
s.renameSound(s.editingTarget.sprite.sounds.indexOf(n),d(n.name,t)),E()}},c=async()=>{const n=await e.tab.prompt(o("name-prompt-title"),o("name-prompt"),h(i.realName),{useEditorClasses:1})
null!==n&&(p(n)?t(n):alert(o("name-not-allowed")))},a=[{border:1,className:"sa-folders-create-folder",label:o("create-folder"),callback:c,position:"assetContextMenuAfterDelete",order:13}],u=i.inFolder
return"string"==typeof u&&a.push({className:"sa-folders-remove-from-folder",label:o("remove-from-folder"),callback(){return t(null)},position:"assetContextMenuAfterDelete",order:14}),a.concat((t=>{const e=new Set
let n
n="SPRITE"===t.props.dragType?l:f
for(const t of n){const n=C(t)
"string"==typeof n.folder&&e.add(n.folder)}return Array.from(e)})(r).filter((t=>t!==u)).map(((e,n)=>({className:"sa-folders-add-to-folder",label:o("add-to-folder",{folder:e}),callback(){return t(e)},position:"assetContextMenuAfterDelete",order:20+n}))))}}}))
const j=t=>{for(const e of["handleDelete","handleDuplicate","handleExport"]){const n=t.prototype[e]
t.prototype[e]=function(...t){if("number"==typeof this.props.id){const e=C(this.props)
if(e){const o=this.props
this.props={...o,id:e.realIndex}
const s=n.call(this,...t)
return this.props=o,s}}return n.call(this,...t)}}const n=t.prototype.handleDragEnd
t.prototype.handleDragEnd=function(...t){const o=C(this.props)
if(o&&"number"==typeof o.realIndex&&this.props.dragging){const t=this.props.index,n=o.realIndex
if(t!==n){const o=e.tab.redux.state.scratchGui.assetDrag.currentOffset,s=y(this.ref)
o&&s&&null===s.getMouseOverIndex()&&(this.props.index=n,this.handleDrag(o),this.props.index=t)}}return n.call(this,...t)}
const s=t.prototype.handleClick
t.prototype.handleClick=function(...t){const e=t[0]
if(e&&!this.noClick){const t=C(this.props)
if(t){if("string"==typeof t.folder)return e.preventDefault(),void T(this,t.folder,!U(this,t.folder))
if("number"==typeof this.props.number&&"number"==typeof t.realIndex)return e.preventDefault(),void(this.props.onClick&&this.props.onClick(t.realIndex))}}return s.call(this,...t)}
const r=t.prototype.render
t.prototype.render=function(){const t=C(this.props)
if(t){const e=this.props
this.props={...this.props},"string"==typeof t.realName&&(this.props.name=h(t.realName)),"number"==typeof this.props.number&&"number"==typeof t.realIndex&&(this.props.number=t.realIndex+1),"string"==typeof t.folder&&(this.props.name=t.folder,this.props.details=o(t.folderOpen?"open-folder":"closed-folder"),this.props.selected=0,this.props.number=null,this.props.className+=` ${v(t.folder)} sa-folders-folder`),"string"==typeof t.inFolder&&(this.props.className+=` ${v(t.inFolder)}`)
const n=r.call(this)
return this.props=e,n}return r.call(this)}},N=()=>{const t=s.runtime.targets[0].constructor,e=s.installTargets
s.installTargets=function(...t){if(null!==i){const e=t[0],n=t[2]
if(Array.isArray(e)&&!n)for(const t of e)t.sprite&&(t.sprite.name=d(t.sprite.name,i))}return e.call(this,...t).then((t=>(M(),t)))}
const o=t.prototype.addCostume
t.prototype.addCostume=function(...t){if(null!==c){const e=t[0]
e&&"string"!=typeof u(e.name)&&(e.name=d(e.name,c))}const e=o.call(this,...t)
return S(this),e}
const r=t.prototype.addSound
t.prototype.addSound=function(...t){if(null!==c){const e=t[0]
e&&"string"!=typeof u(e.name)&&(e.name=d(e.name,c))}const e=r.call(this,...t)
return E(this),e}
const a=({guiItems:t,getAll:e,set:o,rename:s,getVMItemFromGUIItem:r,zeroIndexed:i,onFolderChanged:c},l,f)=>{if((l=w(l,i?0:1,i?t.length-1:t.length))===(f=w(f,i?0:1,i?t.length-1:t.length)))return 0
let a=e()
const u=e(),h=t[l-(i?0:1)],p=t[f-(i?0:1)],m=C(h),g=C(p)
if(!m||!g)return n.warn("should never happen"),0
const y=("string"==typeof m.folder?h.items:[h]).map((t=>r(t,a))).filter((t=>t))
if("number"==typeof g.realIndex){const t=r(p,a)
if(!t||y.includes(t))return 0}let b,I=null
if(a=a.filter((t=>!y.includes(t))),f===(i?0:1))b=i?0:1
else if(f===t.length-(i?1:0))b=a.length
else if("number"==typeof g.realIndex){I="string"==typeof g.inFolder?g.inFolder:null
let t=r(p,a)
if(!t)return n.warn("should never happen"),0
b=a.indexOf(t),f>l&&b++}else{if("string"!=typeof g.folder)return n.warn("should never happen"),0
{let t,e=0
l>f?t=p.items[0]:g.folderOpen?(t=p.items[0],I=g.folder):(t=p.items[p.items.length-1],e=1)
let o=r(t,a)
if(o)b=a.indexOf(o)+e
else{if(o=r(t,u),!o)return n.warn("should never happen"),0
b=u.indexOf(o)+e}}}if("string"!=typeof m.folder||null===I){if((i?0:1)>b||b>a.length)return n.warn("should never happen"),0
if(a.splice(b,0,...y),o(a),"string"!=typeof m.folder&&m.inFolder!==I){for(const t of y){const e=t.getName?t.getName():t.name
s(t,d(e,I))}c&&c()}return 1}}
s.constructor.prototype.reorderTarget=function(t,e){return a({getAll:()=>this.runtime.targets,set:t=>{this.runtime.targets=t,this.emitTargetsUpdate()},rename:(t,e)=>{this.renameSprite(t.id,g(e))},getVMItemFromGUIItem(t,e){return e.find((e=>e.id===t.id))},onFolderChanged:()=>{this.emitWorkspaceUpdate()},guiItems:l,zeroIndexed:0},t,e)},t.prototype.reorderCostume=function(t,e){return a({getAll:()=>this.sprite.costumes,set:t=>{this.sprite.costumes=t},rename:(t,e)=>{this.renameCostume(this.sprite.costumes.indexOf(t),e)},getVMItemFromGUIItem(t,e){const n=C(t)
return e.find((t=>t.name===n.realName))},guiItems:f,zeroIndexed:1},t,e)},t.prototype.reorderSound=function(t,e){return a({getAll:()=>this.sprite.sounds,set:t=>{this.sprite.sounds=t},rename:(t,e)=>{this.renameSound(this.sprite.sounds.indexOf(t),e)},getVMItemFromGUIItem(t,e){const n=C(t)
return e.find((t=>t.name===n.realName))},guiItems:f,zeroIndexed:1},t,e)}},F=t=>{const n=t.constructor
n.prototype.sa_loadNextItem=function(){if(!this.sa_queuedItems)return
const t=this.sa_queuedItems.pop()
if(t){let e,n
t.dragPayload?(n=t.url?"SOUND":"COSTUME",e=t.dragPayload):t.id&&(n="SPRITE",e=t.id),n&&e&&s.call(this,{dragType:n,payload:e})}},n.prototype.componentDidUpdate=function(t,e){this.state.loading||!e.loading||this.state.error||this.sa_loadNextItem()}
const s=n.prototype.handleDrop
n.prototype.handleDrop=function(...t){const n=t[0],r=n&&n.payload&&n.payload.sa_folder_items
if(!Array.isArray(r))return s.call(this,...t)
e.tab.confirm("",o("confirm-backpack-folder"),{useEditorClasses:1}).then((t=>{t&&(this.sa_queuedItems=r,this.sa_loadNextItem())}))},t.handleDrop=n.prototype.handleDrop.bind(t)}
await(()=>{if("editor"!==e.tab.editorMode)return new Promise((t=>{const n=()=>{"editor"===e.tab.editorMode&&(t(),e.tab.removeEventListener("urlChange",n))}
e.tab.addEventListener("urlChange",n)}))})()
{const t=e=>{e.target.closest('[class*="backpack_backpack-header_"]')&&setTimeout((()=>{const e=document.querySelector("[class^='backpack_backpack-list_']")
if(!e)return
document.removeEventListener("click",t)
const n=(t=>{const e=t.closest('[class*="gui_editor-wrapper"]')
if(!e)throw new Error("cannot find Backpack")
return e[r].child.sibling.child.stateNode})(e);(t=>{const e=t.constructor
if("function"!=typeof e.prototype.handleDrop||void 0!==e.prototype.componentDidUpdate)throw new Error("Can not comprehend Backpack")})(n),F(n)}))}
document.addEventListener("click",t,1)}{const t=await e.tab.waitForElement("[class^='sprite-selector_sprite-wrapper']",{reduxCondition(t){return!t.scratchGui.mode.isPlayerOnly}})
s=e.tab.traps.vm,r=Object.keys(t).find((t=>t.startsWith("__reactInternalInstance$")))
const n=y(t),o=t[r].child.child.child.stateNode
A(n),(t=>{const e=t.constructor
if("object"!=typeof t.props.asset||"string"!=typeof t.props.name||"string"!=typeof t.props.dragType||"function"!=typeof e.prototype.handleClick||"function"!=typeof e.prototype.setRef||"function"!=typeof e.prototype.handleDrag||"function"!=typeof e.prototype.handleDragEnd||"function"!=typeof e.prototype.handleDelete||"function"!=typeof e.prototype.handleDuplicate||"function"!=typeof e.prototype.handleExport)throw new Error("Can not comprehend SpriteSelectorItem")})(o),(t=>{const e=t.runtime.targets[0]
if("function"!=typeof t.installTargets||"function"!=typeof t.reorderTarget||"function"!=typeof e.reorderCostume||"function"!=typeof e.reorderSound||"function"!=typeof e.addCostume||"function"!=typeof e.addSound)throw new Error("Can not comprehend VM")})(s),O(n.constructor,1),j(o.constructor),n.saInitialSetup(),N()}{const t=await e.tab.waitForElement("[class*='selector_list-item']",{reduxCondition(t){return 0!==t.scratchGui.editorTab.activeTabIndex&&!t.scratchGui.mode.isPlayerOnly}}),n=y(t)
A(n),O(n.constructor,2),n.saInitialSetup()}}