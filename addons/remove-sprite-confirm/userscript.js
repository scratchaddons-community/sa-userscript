export default async({addon:t,console:e,msg:n})=>{if(!t.tab.redux.state)return e.warn("Redux is not available!")
const r=t.tab.traps.vm
if(!r)return
const i=r.deleteSprite
r.deleteSprite=function(...e){if(t.self.disabled)return i.apply(this,e)
if(confirm(n("confirm")))return i.apply(this,e)
const r=Object.assign({},t.tab.redux.state.scratchGui.restoreDeletion)
return setTimeout((()=>t.tab.redux.dispatch({type:"scratch-gui/restore-deletion/RESTORE_UPDATE",state:r})),100),Promise.resolve()}}
