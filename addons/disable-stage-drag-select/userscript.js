export default async({addon:t})=>{const n=t.tab.traps.vm
let s=0
document.addEventListener("mousedown",(function(t){s=t.shiftKey}),{capture:1})
const o=n.stopDrag
n.stopDrag=function(...n){if(s||t.self.disabled)return o.call(this,...n)
const i=this.setEditingTarget
this.setEditingTarget=()=>{}
const u=o.call(this,...n)
return this.setEditingTarget=i,u}
const i=n.getTargetIdForDrawableId
n.getTargetIdForDrawableId=function(...n){const o=i.call(this,...n)
if(s||t.self.disabled)return o
if(null!==o){const t=this.runtime.getTargetById(o)
if(t&&!t.draggable)return null}return o}}
