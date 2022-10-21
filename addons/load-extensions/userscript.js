export default async function({addon:t}){const e=t.tab.traps.vm,n=()=>{if(t.self.disabled)return
const n=["music","pen","text2speech","translate"]
for(let o of n)t.settings.get(o)&&!e.extensionManager.isExtensionLoaded(o)&&e.extensionManager.loadExtensionIdSync(o)}
e.editingTarget?n():e.runtime.once("PROJECT_LOADED",n)}