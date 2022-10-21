export default async function({addon:n}){const t=n.tab.traps.vm
await new Promise((n=>{if(t.editingTarget)return n()
t.runtime.once("PROJECT_LOADED",n)}))
const c=t.editingTarget.blocks.constructor.prototype.blocklyListen
let o=0
document.addEventListener("mousedown",(function(n){o=n.ctrlKey||n.metaKey}),{capture:1}),t.editingTarget.blocks.constructor.prototype.blocklyListen=function(t){(n.self.disabled||"stackclick"!==t.element||o)&&c.call(this,t)}}