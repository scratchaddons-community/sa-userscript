export default async function({addon:n}){const t=await n.tab.traps.getBlockly(),o=t.Variables.createVariable
t.Variables.createVariable=function(t,c,i){if(!n.self.disabled){const n=c
c=o=>{if(o){const n=t.isFlyout?t:t.getFlyout()
n.setCheckboxState&&n.setCheckboxState(o,0)}n&&n(o)}}return o.call(this,t,c,i)}}