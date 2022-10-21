export default async function({addon:t,msg:e,safeMsg:s}){const o=await t.tab.traps.getBlockly(),n=t.tab.traps.vm
let a=0
const r=t=>{const e=t.findIndex((t=>"CREATE_LIST"===t.getAttribute("callbackkey")||"data_addtolist"===t.getAttribute("type")))
return{variables:t.slice(0,e),lists:t.slice(e,t.length)}},c=o.DataCategory
let i,l
const u=s=>{let o=c(s)
if(!t.self.disabled&&t.settings.get("moveReportersDown")&&(o=(t=>{const{variables:e,lists:s}=r(t),o=t=>{const e=[],s=[]
for(const o of t)o.hasAttribute("id")||"BUTTON"===o.tagName?e.push(o):s.push(o)
return s.length&&s[s.length-1].setAttribute("gap",24),s.concat(e)}
return o(e).concat(o(s))})(o)),!t.self.disabled&&t.settings.get("separateLocalVariables")&&(o=((t,s)=>{const{variables:o,lists:n}=r(s),a=t=>{const s=document.createElement("label")
return s.setAttribute("text",e(t)),s},c=t=>{if(t.length>0){for(var e=0;t.length-1>e;e++)t[e].setAttribute("gap",8)
t[e].setAttribute("gap",24)}},i=e=>{const s=[],o=[],n=[],r=[]
for(const a of e)if(a.hasAttribute("id")){const e=a.getAttribute("id"),s=t.getVariableById(e)
s&&s.isLocal?n.push(a):o.push(a)}else o.length||n.length?r.push(a):s.push(a)
const i=s
return o.length&&(i.push(a("for-all-sprites")),c(o),i.push(...o)),n.length&&(i.push(a("for-this-sprite-only")),c(n),i.push(...n)),i.concat(r)}
return i(o).concat(i(n))})(s,o)),t.self.disabled||!a)return o
const{variables:n,lists:u}=r(o)
return i=n,l=u,i},d=()=>l,f=o.Flyout.prototype.show
o.Flyout.prototype.show=function(t){return this.workspace_.registerToolboxCategoryCallback("VARIABLE",u),this.workspace_.registerToolboxCategoryCallback("LIST",d),f.call(this,t)}
const y=n.runtime.getBlocksXML
n.runtime.getBlocksXML=function(e){const o=y.call(this,e)
return a=t.settings.get("separateListCategory"),!t.self.disabled&&a&&o.push({id:"data",xml:`\n        <category\n          name="%{BKY_CATEGORY_VARIABLES}"\n          id="variables"\n          colour="#FF8C1A"\n          secondaryColour="#DB6E00"\n          custom="VARIABLE">\n        </category>\n        <category\n          name="${s("list-category")}"\n          id="lists"\n          colour="#FF661A"\n          secondaryColour="#FF5500"\n          custom="LIST">\n        </category>`}),o},n.editingTarget&&n.emitWorkspaceUpdate(),t.settings.addEventListener("change",(()=>{if(t.settings.get("separateListCategory")!==a)n.editingTarget&&n.emitWorkspaceUpdate()
else{const t=Blockly.getMainWorkspace()
t&&t.refreshToolboxSelection_()}}))
const g=()=>{if(t.settings.get("separateListCategory")&&n.editingTarget&&n.emitWorkspaceUpdate(),t.settings.get("separateLocalVariables")||t.settings.get("moveReportersDown")){const t=Blockly.getMainWorkspace()
t&&t.refreshToolboxSelection_()}}
t.self.addEventListener("disabled",(()=>{g()})),t.self.addEventListener("reenabled",(()=>{g()}))}