export default async function({addon:t}){const e=t.tab.traps.vm,c=e.constructor.prototype.addSprite
e.constructor.prototype.addSprite=function(e){let n,s=1
return"object"==typeof e?[n,s]=[e,0]:n=JSON.parse(e),t.self.disabled||!("cd21514d0531fdffb22204e0ec5ed84a.svg"===n.costumes?.[0]?.baseLayerMD5)&&n.tags&&t.settings.get("library")||(n.scratchX&&(n.scratchX=t.settings.get("x"),n.scratchY=t.settings.get("y")),n.x&&(n.x=t.settings.get("x"),n.y=t.settings.get("y"))),c.call(this,s?JSON.stringify(n):n)}
const n=()=>{const c=e.runtime.getTargetForStage().constructor.prototype,n=c.duplicate
c.duplicate=function(){return n.call(this).then((e=>{if(!t.self.disabled)switch(t.settings.get("duplicate")){case"custom":e.setXY(t.settings.get("x"),t.settings.get("y"))
break
case"keep":e.setXY(this.x,this.y)}return e}))}}
e.runtime.getTargetForStage()?n():e.runtime.once("PROJECT_LOADED",n)}