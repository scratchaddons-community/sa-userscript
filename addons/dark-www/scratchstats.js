import{textColor as t}from"../../libraries/common/cs/text-color.esm.js"
export default async function({addon:a}){const r=await a.tab.waitForElement("#sa-scratchstats-chart",{markAsSeen:1})
await a.tab.loadScript(a.self.lib+"/thirdparty/cs/chart.min.js")
const s=()=>{const s=Chart.getChart(r)
if(!s)return
const c=a.self.disabled?"#575e75":t(a.settings.get("box")),e=a.self.disabled?"rgba(0, 0, 0, 0.1)":a.settings.get("border"),o=s.options
o.scales.x.ticks.color=o.scales.y.ticks.color=c,o.scales.x.grid.tickColor=o.scales.y.grid.tickColor=c,o.scales.x.grid.borderColor=o.scales.y.grid.borderColor=c,o.scales.x.grid.color=o.scales.y.grid.color=e,o.plugins.title.color=c,s.update()}
s(),a.settings.addEventListener("change",s),a.self.addEventListener("disabled",s),a.self.addEventListener("reenabled",s)}