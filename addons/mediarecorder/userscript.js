import e from"../../libraries/common/cs/download-blob.js"
export default async({addon:t,console:o,msg:n})=>{let c,r,d,i=0,a=0,l=null,u=null,s=null,p=[]
for(;;){const m=await t.tab.waitForElement('div[class*="menu-bar_file-group"] > div:last-child:not(.sa-record)',{markAsSeen:1,reduxEvents:["scratch-gui/mode/SET_PLAYER","fontsLoaded/SET_FONTS_LOADED","scratch-gui/locales/SELECT_LOCALE"]}),b=()=>{const{backdrop:e,container:o,content:c,closeButton:r,remove:d}=t.tab.createModal(n("option-title"),{isOpen:1,useEditorClasses:1})
o.classList.add("mediaRecorderPopup"),c.classList.add("mediaRecorderPopupContent"),c.appendChild(Object.assign(document.createElement("p"),{textContent:n("record-description"),className:"recordOptionDescription"}))
const i=document.createElement("p"),a=Object.assign(document.createElement("input"),{type:"number",min:1,max:300,defaultValue:30,id:"recordOptionSecondsInput",className:t.tab.scratchClass("prompt_variable-name-text-input")}),l=Object.assign(document.createElement("label"),{htmlFor:"recordOptionSecondsInput",textContent:n("record-duration")})
i.appendChild(l),i.appendChild(a),c.appendChild(i)
const u=document.createElement("p"),s=Object.assign(document.createElement("input"),{type:"number",min:0,max:300,defaultValue:0,id:"recordOptionDelayInput",className:t.tab.scratchClass("prompt_variable-name-text-input")}),p=Object.assign(document.createElement("label"),{htmlFor:"recordOptionDelayInput",textContent:n("start-delay")})
u.appendChild(p),u.appendChild(s),c.appendChild(u)
const m=Object.assign(document.createElement("p"),{className:"mediaRecorderPopupOption"}),b=Object.assign(document.createElement("input"),{type:"checkbox",defaultChecked:1,id:"recordOptionAudioInput"}),O=Object.assign(document.createElement("label"),{htmlFor:"recordOptionAudioInput",textContent:n("record-audio"),title:n("record-audio-description")})
m.appendChild(b),m.appendChild(O),c.appendChild(m)
const f=Object.assign(document.createElement("p"),{className:"mediaRecorderPopupOption"}),h=Object.assign(document.createElement("input"),{type:"checkbox",defaultChecked:0,id:"recordOptionMicInput"}),C=Object.assign(document.createElement("label"),{htmlFor:"recordOptionMicInput",textContent:n("record-mic")})
f.appendChild(h),f.appendChild(C),c.appendChild(f)
const j=Object.assign(document.createElement("p"),{className:"mediaRecorderPopupOption"}),w=Object.assign(document.createElement("input"),{type:"checkbox",defaultChecked:1,id:"recordOptionFlagInput"}),x=Object.assign(document.createElement("label"),{htmlFor:"recordOptionFlagInput",textContent:n("record-after-flag")})
j.appendChild(w),j.appendChild(x),c.appendChild(j)
const P=Object.assign(document.createElement("p"),{className:"mediaRecorderPopupOption"}),T=Object.assign(document.createElement("input"),{type:"checkbox",defaultChecked:1,id:"recordOptionStopInput"}),k=Object.assign(document.createElement("label"),{htmlFor:"recordOptionStopInput",textContent:n("record-until-stop")})
w.addEventListener("change",(()=>{(T.disabled=!w.checked)&&(k.title=n("record-until-stop-disabled",{afterFlagOption:n("record-after-flag")}))})),P.appendChild(T),P.appendChild(k),c.appendChild(P)
let y=null
const E=new Promise((e=>{y=e}))
let g=null
e.addEventListener("click",(()=>g(null))),r.addEventListener("click",(()=>g(null))),g=e=>{y(e),d()}
const R=Object.assign(document.createElement("div"),{className:t.tab.scratchClass("prompt_button-row",{others:"mediaRecorderPopupButtons"})}),S=Object.assign(document.createElement("button"),{textContent:n("cancel")})
S.addEventListener("click",(()=>g(null)),{once:1}),R.appendChild(S)
const v=Object.assign(document.createElement("button"),{textContent:n("start"),className:t.tab.scratchClass("prompt_ok-button")})
return v.addEventListener("click",(()=>g({secs:Number(a.value),delay:Number(s.value),audioEnabled:b.checked,micEnabled:h.checked,waitUntilFlag:w.checked,useStopSign:!T.disabled&&T.checked})),{once:1}),R.appendChild(v),c.appendChild(R),E},O=()=>{i=0,c.textContent=n("record"),c.title="",r=null,p=[],clearTimeout(d),d=0,s&&(t.tab.traps.vm.runtime.off("PROJECT_STOP_ALL",s),s=null)},f=o=>{if(a)return t.tab.traps.vm.runtime.off("PROJECT_START",l),a=0,l=null,u.abort(),u=null,void O()
i&&r&&"inactive"!==r.state&&(o?O():(r.onstop=()=>{const t=new Blob(p,{type:"video/webm"})
e("video.webm",t),O()},r.stop()))},h=async e=>{const m=Math.min(300,Math.max(1,e.secs))
p=[],i=1
const b=t.tab.traps.vm
let O
if(e.micEnabled)try{O=await navigator.mediaDevices.getUserMedia({audio:1})}catch(t){if("NotAllowedError"!==t.name&&"NotFoundError"!==t.name)throw t
e.micEnabled=0}if(e.waitUntilFlag){a=1,Object.assign(c,{textContent:n("click-flag"),title:n("click-flag-description")}),u=new AbortController
try{await Promise.race([new Promise((e=>{l=()=>e(),b.runtime.once("PROJECT_START",l)})),new Promise(((e,t)=>{u.signal.addEventListener("abort",(()=>t("aborted")),{once:1})}))])}catch(e){if("aborted"===e.message)return
throw e}}a=0,l=u=null
const h=new MediaStream,C=b.runtime.renderer.canvas.captureStream()
h.addTrack(C.getVideoTracks()[0])
const j=new AudioContext,w=j.createMediaStreamDestination()
if(e.audioEnabled){const e=b.runtime.audioEngine.audioContext.createMediaStreamDestination()
b.runtime.audioEngine.inputNode.connect(e),j.createMediaStreamSource(e.stream).connect(w)}e.micEnabled&&j.createMediaStreamSource(O).connect(w),(e.audioEnabled||e.micEnabled)&&h.addTrack(w.stream.getAudioTracks()[0]),r=new MediaRecorder(h,{mimeType:"video/webm"}),r.ondataavailable=e=>{p.push(e.data)},r.onerror=e=>{o.warn("Recorder error:",e.error),f(1)},d=setTimeout((()=>f(0)),1e3*m),e.useStopSign&&(s=()=>f(),b.runtime.once("PROJECT_STOP_ALL",s))
const x=e.delay||0,P=Math.floor(x)
for(let e=0;P>e;e++)c.textContent=n("starting-in",{secs:P-e}),await new Promise((e=>setTimeout(e,975)))
setTimeout((()=>{c.textContent=n("stop"),r.start(1e3)}),1e3*(x-P))}
c||(c=Object.assign(document.createElement("div"),{className:"sa-record "+m.className,textContent:n("record"),title:n("added-by")}),c.addEventListener("click",(async()=>{if(i)f()
else{const e=await b()
if(!e)return void o.log("Canceled")
h(e)}}))),m.parentElement.appendChild(c)}}
