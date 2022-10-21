import{getRunningThread as o}from"../debugger/module.js"
import i from"./highlighter.js"
export default async function({addon:t}){const h=t.tab.traps.vm,n=new i(0,t.settings.get("highlight-color"))
t.settings.addEventListener("change",(()=>{n.setColor(t.settings.get("highlight-color"))})),t.self.addEventListener("disabled",(()=>{n.setGlowingThreads([])}))
const c=h.runtime._step
h.runtime._step=function(...i){if(c.call(this,...i),!t.self.disabled){const i=o(),t=h.runtime.threads.filter((o=>o!==i&&!o.target.blocks.forceNoGlow))
n.setGlowingThreads(t)}}}