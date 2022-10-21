export default class t{constructor(t){this.addon=t,this.vm=this.addon.tab.traps.vm,this.highlights={timeoutId:0,callback(){}}}showSenders(t){this.highlightTargets(this.getTargetsWithSenders(t))}getTargetsWithSenders(t){const e=[]
for(const s of this.vm.runtime.targets){if(!s.isOriginal)return
for(const o of Object.keys(s.blocks._blocks)){const i=s.blocks.getBlock(o)
if(i.inputs.BROADCAST_INPUT){const o=i.inputs.BROADCAST_INPUT
if(o.block===o.shadow&&s.blocks.getBlock(o.shadow).fields.BROADCAST_OPTION.id===t){e.push(s)
break}}}}return e}showReceivers(t){this.highlightTargets(this.getTargetsWithReceivers(t))}getTargetsWithReceivers(t){const e=[]
for(const s of this.vm.runtime.targets){if(!s.isOriginal)return
for(const o of Object.keys(s.blocks._blocks)){const i=s.blocks.getBlock(o)
if("event_whenbroadcastreceived"===i.opcode&&i.fields.BROADCAST_OPTION.id===t){e.push(s)
break}}}return e}highlightTargets(t){this.highlights.timeoutId&&(this.highlights.callback(),clearTimeout(this.highlights.timeoutId),this.highlights={timeoutId:0,callback(){}})
const e=[]
for(const s of t){let t=null
if(s.isStage)t=document.querySelector('div[class*="stage-selector_header"]')
else if(s.isOriginal){const e=document.querySelectorAll('div[class*="sprite-selector-item_sprite-name"]'),o=[].find.call(e,(t=>t.textContent===s.getName()))
if(!o)continue
t=o.parentElement}t.dataset.highlighted="true",e.push(t)}const s=(o=e,()=>{for(const t of o)t.isConnected&&(t.dataset.highlighted="false")})
var o
this.highlights={callback:s,timeoutId:setTimeout(s,2e3)}}getAssociatedBroadcastId(t){const e=this.vm.editingTarget,s=e.blocks.getBlock(t)
return"event_whenbroadcastreceived"===s.opcode?s.fields.BROADCAST_OPTION.id:e.blocks.getBlock(s.inputs.BROADCAST_INPUT.shadow).fields.BROADCAST_OPTION.id}}