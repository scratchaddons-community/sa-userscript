import o from"./blockToDom.js"
export default async function({addon:e,msg:t}){const r=await e.tab.traps.getBlockly(),p=e.tab.traps.vm
let c={},a={}
const n={isNoop:1},d=()=>{if(c={},a={},e.settings.get("motion")&&(c.motion_turnright=[n,{opcode:"motion_turnleft"}],c.motion_turnleft=[{opcode:"motion_turnright"},n],c.motion_setx=[n,{opcode:"motion_changexby",remap:{X:"DX"}},{opcode:"motion_sety",remap:{X:"Y"}},{opcode:"motion_changeyby",remap:{X:"DY"}}],c.motion_changexby=[{opcode:"motion_setx",remap:{DX:"X"}},n,{opcode:"motion_sety",remap:{DX:"Y"}},{opcode:"motion_changeyby",remap:{DX:"DY"}}],c.motion_sety=[{opcode:"motion_setx",remap:{Y:"X"}},{opcode:"motion_changexby",remap:{Y:"DX"}},n,{opcode:"motion_changeyby",remap:{Y:"DY"}}],c.motion_changeyby=[{opcode:"motion_setx",remap:{DY:"X"}},{opcode:"motion_changexby",remap:{DY:"DX"}},{opcode:"motion_sety",remap:{DY:"Y"}},n],c.motion_xposition=[n,{opcode:"motion_yposition"}],c.motion_yposition=[{opcode:"motion_xposition"},n]),e.settings.get("looks")&&(c.looks_seteffectto=[n,{opcode:"looks_changeeffectby",remap:{VALUE:"CHANGE"}}],c.looks_changeeffectby=[{opcode:"looks_seteffectto",remap:{CHANGE:"VALUE"}},n],c.looks_setsizeto=[n,{opcode:"looks_changesizeby",remap:{SIZE:"CHANGE"}}],c.looks_changesizeby=[{opcode:"looks_setsizeto",remap:{CHANGE:"SIZE"}},n],c.looks_costumenumbername=[n,{opcode:"looks_backdropnumbername"}],c.looks_backdropnumbername=[{opcode:"looks_costumenumbername"},n],c.looks_show=[n,{opcode:"looks_hide"}],c.looks_hide=[{opcode:"looks_show"},n],c.looks_nextcostume=[n,{opcode:"looks_nextbackdrop"}],c.looks_nextbackdrop=[{opcode:"looks_nextcostume"},n],c.looks_think=[n,{opcode:"looks_say"}],c.looks_say=[{opcode:"looks_think"},n],c.looks_thinkforsecs=[n,{opcode:"looks_sayforsecs"}],c.looks_sayforsecs=[{opcode:"looks_thinkforsecs"},n],c.looks_switchbackdropto=[n,{opcode:"looks_switchbackdroptoandwait"}],c.looks_switchbackdroptoandwait=[{opcode:"looks_switchbackdropto"},n]),e.settings.get("sound")&&(c.sound_play=[n,{opcode:"sound_playuntildone"}],c.sound_playuntildone=[{opcode:"sound_play"},n],c.sound_seteffectto=[n,{opcode:"sound_changeeffectby"}],c.sound_changeeffectby=[{opcode:"sound_seteffectto"},n],c.sound_setvolumeto=[n,{opcode:"sound_changevolumeby"}],c.sound_changevolumeby=[{opcode:"sound_setvolumeto"},n]),e.settings.get("event")&&(c.event_broadcast=[n,{opcode:"event_broadcastandwait"}],c.event_broadcastandwait=[{opcode:"event_broadcast"},n]),e.settings.get("control")&&(c.control_if=[n,{opcode:"control_if_else"}],c.control_if_else=[{opcode:"control_if",remap:{SUBSTACK2:"split"}},n],c.control_repeat_until=[n,{opcode:"control_wait_until",remap:{SUBSTACK:"split"}},{opcode:"control_forever",remap:{CONDITION:"split"}}],c.control_forever=[{opcode:"control_repeat_until"},n],c.control_wait_until=[{opcode:"control_repeat_until"},n]),e.settings.get("operator")&&(c.operator_equals=[{opcode:"operator_gt"},n,{opcode:"operator_lt"}],c.operator_gt=[n,{opcode:"operator_equals"},{opcode:"operator_lt"}],c.operator_lt=[{opcode:"operator_gt"},{opcode:"operator_equals"},n],c.operator_add=[n,{opcode:"operator_subtract"},{opcode:"operator_multiply"},{opcode:"operator_divide"},{opcode:"operator_mod"}],c.operator_subtract=[{opcode:"operator_add"},n,{opcode:"operator_multiply"},{opcode:"operator_divide"},{opcode:"operator_mod"}],c.operator_multiply=[{opcode:"operator_add"},{opcode:"operator_subtract"},n,{opcode:"operator_divide"},{opcode:"operator_mod"}],c.operator_divide=[{opcode:"operator_add"},{opcode:"operator_subtract"},{opcode:"operator_multiply"},n,{opcode:"operator_mod"}],c.operator_mod=[{opcode:"operator_add"},{opcode:"operator_subtract"},{opcode:"operator_multiply"},{opcode:"operator_divide"},n],c.operator_and=[n,{opcode:"operator_or"}],c.operator_or=[{opcode:"operator_and"},n]),e.settings.get("sensing")&&(c.sensing_mousex=[n,{opcode:"sensing_mousey"}],c.sensing_mousey=[{opcode:"sensing_mousex"},n]),e.settings.get("data")&&(c.data_setvariableto=[n,{opcode:"data_changevariableby",remapValueType:{VALUE:"math_number"}}],c.data_changevariableby=[{opcode:"data_setvariableto",remapValueType:{VALUE:"text"}},n],c.data_showvariable=[n,{opcode:"data_hidevariable"}],c.data_hidevariable=[{opcode:"data_showvariable"},n],c.data_showlist=[n,{opcode:"data_hidelist"}],c.data_hidelist=[{opcode:"data_showlist"},n],c.data_replaceitemoflist=[n,{opcode:"data_insertatlist"}],c.data_insertatlist=[{opcode:"data_replaceitemoflist"},n]),e.settings.get("extension")&&(c.pen_penDown=[n,{opcode:"pen_penUp"}],c.pen_penUp=[{opcode:"pen_penDown"},n],c.pen_setPenColorParamTo=[n,{opcode:"pen_changePenColorParamBy"}],c.pen_changePenColorParamBy=[{opcode:"pen_setPenColorParamTo"},n],c.pen_setPenHueToNumber=[n,{opcode:"pen_changePenHueBy"}],c.pen_changePenHueBy=[{opcode:"pen_setPenHueToNumber"},n],c.pen_setPenShadeToNumber=[n,{opcode:"pen_changePenShadeBy"}],c.pen_changePenShadeBy=[{opcode:"pen_setPenShadeToNumber"},n],c.pen_setPenSizeTo=[n,{opcode:"pen_changePenSizeBy"}],c.pen_changePenSizeBy=[{opcode:"pen_setPenSizeTo"},n],c.music_setTempo=[n,{opcode:"music_changeTempo"}],c.music_changeTempo=[{opcode:"music_setTempo"},n]),e.settings.get("sa")){const o="​​log​​ %s",e="​​warn​​ %s",r="​​error​​ %s",p=t("debugger_log"),c=t("debugger_warn"),n=t("debugger_error"),d={mutate:{proccode:o},msg:p},s={mutate:{proccode:e},msg:c},_={mutate:{proccode:r},msg:n}
a[o]=[{msg:p,isNoop:1},s,_],a[e]=[d,{msg:c,isNoop:1},_],a[r]=[d,s,{msg:n,isNoop:1}]}c.data_variable=[],c.data_listcontents=[]}
d(),e.settings.addEventListener("change",d)
const s=(e,t)=>()=>{if(t.isNoop)return
if(t.fieldValue)return void e.setFieldValue(t.fieldValue,"VALUE")
const p=e.workspace,c=o(e)
t.opcode&&c.setAttribute("type",t.opcode)
const a=e.id,n=e.getParent()
let d,s
if(n){d=n.getConnections_().find((o=>o.targetConnection&&o.targetConnection.sourceBlock_===e))
const o=e.getConnections_().find((o=>o.targetConnection&&o.targetConnection.sourceBlock_===n))
s=o.type}const _=[]
if(t.remap)for(const o of Array.from(c.children)){const e=o.getAttribute("name"),r=t.remap[e]
if(r)if("split"===r){const e=o.firstChild,t=p.getBlockById(e.id).getRelativeToSurfaceXY()
e.setAttribute("x",Math.round(p.RTL?-t.x:t.x)),e.setAttribute("y",Math.round(t.y)),_.push(e),c.removeChild(o)}else o.setAttribute("name",r)}if(t.remapValueType)for(const o of Array.from(c.children)){const e=o.getAttribute("name"),r=t.remapValueType[e]
if(r){const e=o.firstChild,t=e.firstChild
e.setAttribute("type",r),t.setAttribute("name","text"===r?"TEXT":"NUM")}}if(t.mutate){const o=c.querySelector("mutation")
for(const[e,r]of Object.entries(t.mutate))o.setAttribute(e,r)}try{r.Events.setGroup(1),e.dispose(),p.paste(c)
for(const o of _)p.paste(o)
const o=p.getBlockById(a)
d&&o.getConnections_().find((o=>o.type===s)).connect(d)}finally{r.Events.setGroup(0)}}
e.tab.createBlockContextMenu(((o,p)=>{if(!e.self.disabled){const d=p.type
let i=c[p.type]||[]
const m=e.settings.get("customargs")?e.settings.get("customargsmode"):"off"
if("off"!==m&&["argument_reporter_boolean","argument_reporter_string_number"].includes(d)&&!p.isShadow()){const e=_()
if("all"===m)switch(d){case"argument_reporter_string_number":i=Object.values(e).map((o=>o.stringArgs)).flat(1)
break
case"argument_reporter_boolean":i=Object.values(e).map((o=>o.boolArgs)).flat(1)}else if("defOnly"===m){const t=p.getRootBlock()
if("procedures_definition"!==t.type)return o
const r=e[t.getChildren(1)[0].getProcCode()]
switch(d){case"argument_reporter_string_number":i=r.stringArgs
break
case"argument_reporter_boolean":i=r.boolArgs}}const t=p.getFieldValue("VALUE")
i=(n=i,[...new Set(n)]).map((o=>({isNoop:o===t,fieldValue:o,msg:o})))}if("procedures_call"===p.type){const o=p.getProcCode()
a[o]&&(i=a[o])}if(e.settings.get("noop")||(i=i.filter((o=>!o.isNoop))),i.forEach(((r,c)=>{const a=o.findIndex((o=>o._isDevtoolsFirstItem)),n=-1!==a?a:o.length,d=r.msg?r.msg:t(r.opcode?r.opcode:p.type)
o.splice(n,0,{enabled:1,text:d,callback:s(p,r),separator:e.settings.get("border")&&0===c})})),e.settings.get("border")&&("data_variable"===p.type||"data_listcontents"===p.type)){const e=o.findIndex((o=>o.text===r.Msg.DELETE_BLOCK)),t=o[e+1]
t&&(t.separator=1)}}var n
return o}),{blocks:1})
const _=()=>{const o={}
return Object.values(p.editingTarget.blocks._blocks).filter((o=>"procedures_prototype"===o.opcode)).forEach((e=>{const t=e.mutation.proccode,r=JSON.parse(e.mutation.argumentnames),p=t.split(/(?=[^\\]%[nbs])/g).map((o=>o.trim())).filter((o=>"%"===o.charAt(0))).map((o=>o.substring(0,2))),c=[],a=[]
for(let o=0;r.length>o;o++)"%b"===p[o]?a.push(r[o]):c.push(r[o])
o[t]={stringArgs:c,boolArgs:a}})),o}}