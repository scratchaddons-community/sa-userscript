import{onPauseChanged as t,isPaused as e}from"./module.js"
export default async function a({debug:a,addon:r,msg:o}){const n=r.tab.traps.vm
await r.tab.loadScript(r.self.lib+"/thirdparty/cs/chart.min.js")
const l=a.createHeaderTab({text:o("tab-performance"),icon:r.self.dir+"/icons/performance.svg"}),c=Object.assign(document.createElement("div"),{className:"sa-performance-tab-content"}),s=({title:t})=>({title:Object.assign(document.createElement("h2"),{textContent:t}),canvas:Object.assign(document.createElement("canvas"),{className:"sa-debugger-chart"})}),i=()=>performance.now(),d=()=>Math.round(1e3/n.runtime.currentStepTime),p=Array.from(Array(20).keys()).reverse(),m=s({title:o("performance-framerate-title")}),b=new Chart(m.canvas.getContext("2d"),{type:"line",data:{labels:p,datasets:[{data:Array(20).fill(-1),borderWidth:1,fill:1,backgroundColor:"#29beb8"}]},options:{scales:{y:{max:d(),min:0}},plugins:{legend:{display:0},tooltip:{callbacks:{label(t){return o("performance-framerate-graph-tooltip",{fps:t.parsed.y})}}}}}}),f=s({title:o("performance-clonecount-title")}),u=new Chart(f.canvas.getContext("2d"),{type:"line",data:{labels:p,datasets:[{data:Array(20).fill(-1),borderWidth:1,fill:1,backgroundColor:"#29beb8"}]},options:{scales:{y:{max:300,min:0}},plugins:{legend:{display:0},tooltip:{callbacks:{label(t){return o("performance-clonecount-graph-tooltip",{clones:t.parsed.y})}}}}}}),h=[]
let g=i()+3e3
a.addAfterStepCallback((()=>{if(e())return
const t=i()
for(;h.length>0&&t-1e3>=h[0];)h.shift()
if(h.push(t),t-g>1e3){g=t
const e=d(),a=b.data.datasets[0].data
a.shift(),a.push(Math.min(h.length,e)),b.options.scales.y.max=e
const r=u.data.datasets[0].data
r.shift(),r.push(n.runtime._cloneCounter),j&&(b.update(),u.update())}})),c.appendChild(m.title),c.appendChild(m.canvas),c.appendChild(f.title),c.appendChild(f.canvas)
let y=0
t((t=>{if(t)y=i()
else{const t=i()-y
g+=t
for(var e=0;h.length>e;e++)h[e]+=t}}))
let j=0
return{tab:l,content:c,buttons:[],show(){j=1},hide(){j=0}}}