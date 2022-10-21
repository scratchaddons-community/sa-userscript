let t=window.console
const e=[{type:"key",high:"ArrowRight",low:"ArrowLeft",deadZone:.5},{type:"key",high:"ArrowDown",low:"ArrowUp",deadZone:.5}],i=[{type:"key",high:"d",low:"a",deadZone:.5},{type:"key",high:"s",low:"w",deadZone:.5}],s=[{type:"virtual_cursor",high:"+x",low:"-x",sensitivity:.6,deadZone:.2},{type:"virtual_cursor",high:"-y",low:"+y",sensitivity:.6,deadZone:.2}],n=e=>{if("object"!=typeof e||!e)return t.warn("invalid mapping",e),{type:"key",high:null,low:null}
const i=Object.assign({},e)
if("key"===i.type)void 0===i.deadZone&&(i.deadZone=.5),void 0===i.high&&(i.high=""),void 0===i.low&&(i.low="")
else if("mousedown"===i.type)void 0===i.deadZone&&(i.deadZone=.5)
else{if("virtual_cursor"!==i.type)return t.warn("unknown mapping type",i.type),{type:"key",high:null,low:null}
void 0===i.high&&(i.high=""),void 0===i.low&&(i.low=""),void 0===i.sensitivity&&(i.sensitivity=10),void 0===i.deadZone&&(i.deadZone=.5)}return i},o=t=>Object.assign({},t),h=o,r=t=>{const e=o(t)
return delete e.deadZone,delete e.low,e},a=(t,e)=>{for(;e>t.length;)t.push({type:"key",high:null,low:null})
return t.length=e,t},l=t=>a([],t),c=t=>({usesArrows:t.has("ArrowUp")||t.has("ArrowDown")||t.has("ArrowRight")||t.has("ArrowLeft"),usesWASD:t.has("w")&&t.has("s")||t.has("a")&&t.has("d")}),d=t=>`${t.id} (${t.index})`
class u{constructor(t,e){this.gamepad=t,this.gamepadLib=e,this.resetMappings()}resetMappings(){this.buttonMappings=this.getDefaultButtonMappings().map(n),this.axesMappings=this.getDefaultAxisMappings().map(n)}clearMappings(){this.buttonMappings=l(this.gamepad.buttons.length),this.axesMappings=l(this.gamepad.axes.length)}getDefaultButtonMappings(){let t
if(this.gamepadLib.hints.importedSettings)t=this.gamepadLib.hints.importedSettings.buttons
else{const e=this.gamepadLib.hints.usedKeys,i=new Set,{usesArrows:s,usesWASD:n}=c(e)
n&&(i.add("w"),i.add("a"),i.add("s"),i.add("d"))
const o=["p","q","r"],h=[" ","Enter","e","f","z","x","c",...Array.from(e).filter((t=>1===t.length&&!o.includes(t)))],r=t=>{for(const s of t)if(e.has(s)&&!i.has(s))return i.add(s),s
return null},a=()=>r(h),l=()=>r(o),d=()=>s||!n?"ArrowUp":"w",u=()=>s||!n?"ArrowDown":"s",p=()=>s||!n?"ArrowRight":"d",w=()=>s||!n?"ArrowLeft":"a",m=s&&e.has("ArrowUp")?"ArrowUp":n&&e.has("w")?"w":r(h)
let g=a(),y=a(),f=a()
!m||g||y||f||(g=m,y=m,f=m),m&&g&&!y&&!f&&(y=m,f=g),t=[],t[0]={type:"key",high:m},t[1]={type:"key",high:g},t[2]={type:"key",high:y},t[3]={type:"key",high:f},t[4]={type:"mousedown"},t[5]={type:"mousedown"},t[6]={type:"mousedown"},t[7]={type:"mousedown"},t[9]={type:"key",high:l()},t[8]={type:"key",high:l()},t[10]={type:"key",high:null,low:null},t[11]={type:"key",high:null,low:null},t[12]={type:"key",high:d()},t[13]={type:"key",high:u()},t[14]={type:"key",high:w()},t[15]={type:"key",high:p()}}return a(t,this.gamepad.buttons.length)}getDefaultAxisMappings(){let t=[]
if(this.gamepadLib.hints.importedSettings)t=this.gamepadLib.hints.importedSettings.axes
else if(4===this.gamepad.axes.length){const n=this.gamepadLib.hints.usedKeys,{usesArrows:o,usesWASD:h}=c(n)
h?(t.push(i[0]),t.push(i[1])):o?(t.push(e[0]),t.push(e[1])):(t.push(s[0]),t.push(s[1])),t.push(s[0]),t.push(s[1])}return a(t,this.gamepad.axes.length)}}const p=()=>({usedKeys:new Set,importedSettings:null,generated:0})
class w extends EventTarget{constructor(){super(),this.gamepads=new Map,this.handleConnect=this.handleConnect.bind(this),this.handleDisconnect=this.handleDisconnect.bind(this),this.update=this.update.bind(this),this.animationFrame=null,this.currentTime=null,this.deltaTime=0,this.virtualCursor={x:0,y:0,maxX:Infinity,minX:-Infinity,maxY:Infinity,minY:-Infinity,modified:0},this._editor=null,this.connectCallbacks=[],this.hints=p(),this.keysPressedThisFrame=new Set,this.oldKeysPressed=new Set,this.mouseDownThisFrame=0,this.oldMouseDown=0,this.addEventHandlers()}addEventHandlers(){window.addEventListener("gamepadconnected",this.handleConnect),window.addEventListener("gamepaddisconnected",this.handleDisconnect)}removeEventHandlers(){window.removeEventListener("gamepadconnected",this.handleConnect),window.removeEventListener("gamepaddisconnected",this.handleDisconnect)}gamepadConnected(){return this.gamepads.size>0?Promise.resolve():new Promise((t=>{this.connectCallbacks.push(t)}))}ensureHintsGenerated(){this.hints.generated||(this.getHintsLazily&&Object.assign(this.hints,this.getHintsLazily()),this.hints.generated=1)}resetControls(){this.hints=p(),this.ensureHintsGenerated()
for(const t of this.gamepads.values())t.resetMappings()}clearControls(){for(const t of this.gamepads.values())t.clearMappings()}handleConnect(e){this.ensureHintsGenerated()
for(const t of this.connectCallbacks)t()
this.connectCallbacks=[]
const i=e.gamepad,s=d(i)
t.log("connected",i)
const n=new u(i,this)
this.gamepads.set(s,n),null===this.animationFrame&&(this.animationFrame=requestAnimationFrame(this.update)),this.dispatchEvent(new CustomEvent("gamepadconnected",{detail:n}))}handleDisconnect(e){const i=e.gamepad,s=d(i)
t.log("disconnected",i)
const n=this.gamepads.get(s)
this.gamepads.delete(s),this.dispatchEvent(new CustomEvent("gamepaddisconnected",{detail:n})),0===this.gamepads.size&&(cancelAnimationFrame(this.animationFrame),this.animationFrame=null,this.currentTime=null)}dispatchKey(t,e){this.dispatchEvent(e?new CustomEvent("keydown",{detail:t}):new CustomEvent("keyup",{detail:t}))}dispatchMouseDown(t){this.dispatchEvent(t?new CustomEvent("mousedown"):new CustomEvent("mouseup"))}dispatchMouseMove(t,e){this.dispatchEvent(new CustomEvent("mousemove",{detail:{x:t,y:e}}))}updateButton(t,e){if("key"===e.type)e.deadZone>t?t>-e.deadZone||e.low&&this.keysPressedThisFrame.add(e.low):e.high&&this.keysPressedThisFrame.add(e.high)
else if("mousedown"===e.type)Math.abs(t)>=e.deadZone&&(this.mouseDownThisFrame=1)
else if("virtual_cursor"===e.type){const i=e.deadZone
let s
if(i>t||(s=e.high),t>-i||(s=e.low),s){const n=(Math.abs(t)-i)/(1-i),o=n*n*e.sensitivity*this.deltaTime
"+x"===s?this.virtualCursor.x+=o:"-x"===s?this.virtualCursor.x-=o:"+y"===s?this.virtualCursor.y+=o:"-y"===s&&(this.virtualCursor.y-=o),this.virtualCursor.modified=1}}}update(t){this.oldKeysPressed=this.keysPressedThisFrame,this.oldMouseDown=this.mouseDownThisFrame,this.keysPressedThisFrame=new Set,this.mouseDownThisFrame=0,this.deltaTime=null===this.currentTime?0:t-this.currentTime,this.deltaTime=Math.max(Math.min(this.deltaTime,1e3),0),this.currentTime=t,this.animationFrame=requestAnimationFrame(this.update)
const e=navigator.getGamepads()
for(const t of e){if(null===t)continue
const e=d(t),i=this.gamepads.get(e)
for(let e=0;t.buttons.length>e;e++)this.updateButton(t.buttons[e].value,i.buttonMappings[e])
for(let e=0;t.axes.length>e;e++)this.updateButton(t.axes[e],i.axesMappings[e])}this._editor&&this._editor.update(e)
for(const t of this.keysPressedThisFrame)this.oldKeysPressed.has(t)||this.dispatchKey(t,1)
for(const t of this.oldKeysPressed)this.keysPressedThisFrame.has(t)||this.dispatchKey(t,0)
this.mouseDownThisFrame&&!this.oldMouseDown?this.dispatchMouseDown(1):!this.mouseDownThisFrame&&this.oldMouseDown&&this.dispatchMouseDown(0),this.virtualCursor.modified&&(this.virtualCursor.modified=0,this.virtualCursor.x>this.virtualCursor.maxX&&(this.virtualCursor.x=this.virtualCursor.maxX),this.virtualCursor.minX>this.virtualCursor.x&&(this.virtualCursor.x=this.virtualCursor.minX),this.virtualCursor.y>this.virtualCursor.maxY&&(this.virtualCursor.y=this.virtualCursor.maxY),this.virtualCursor.minY>this.virtualCursor.y&&(this.virtualCursor.y=this.virtualCursor.minY),this.dispatchMouseMove(this.virtualCursor.x,this.virtualCursor.y))}editor(){return this._editor||(this._editor=new y(this)),this._editor}}w.browserHasBrokenGamepadAPI=()=>navigator.getGamepads?navigator.userAgent.includes("Firefox")&&navigator.userAgent.includes("Linux")||navigator.userAgent.includes("Firefox")&&navigator.userAgent.includes("Mac OS")?1:0:1,w.setConsole=e=>t=e
const m=t=>{for(;t.firstChild;)t.removeChild(t.firstChild)},g=t=>`gamepadlib-axis-${t}`
class y extends EventTarget{constructor(t){super(),this.gamepadLib=t,this.root=Object.assign(document.createElement("div"),{className:"gamepadlib-root"}),this.selector=Object.assign(document.createElement("select"),{className:"gamepadlib-selector"}),this.content=Object.assign(document.createElement("div"),{className:"gamepadlib-content"}),this.root.appendChild(this.selector),this.root.appendChild(this.content),this.onSelectorChange=this.onSelectorChange.bind(this),this.onGamepadsChange=this.onGamepadsChange.bind(this),this.selector.addEventListener("change",this.onSelectorChange),this.gamepadLib.addEventListener("gamepadconnected",this.onGamepadsChange),this.gamepadLib.addEventListener("gamepaddisconnected",this.onGamepadsChange),this.buttonIdToElement=new Map,this.axisIdToElement=new Map,this.hidden=0,this.msg=t=>t}onSelectorChange(){this.updateContent(),this.dispatchEvent(new CustomEvent("gamepad-changed"))}onGamepadsChange(){this.updateAllContent(),this.dispatchEvent(new CustomEvent("gamepad-changed"))}updateAllContent(){this.updateDropdown(),this.updateContent(),this.focus()}updateDropdown(){m(this.selector)
const t=Array.from(this.gamepadLib.gamepads.entries())
if(0!==t.length){this.selector.hidden=0
for(const[e,i]of t){const t=document.createElement("option")
t.textContent=e,t.value=e,this.selector.appendChild(t)}}else this.selector.hidden=1}keyToString(t){return" "===t?this.msg("key-space"):"ArrowUp"===t?this.msg("key-up"):"ArrowDown"===t?this.msg("key-down"):"ArrowLeft"===t?this.msg("key-left"):"ArrowRight"===t?this.msg("key-right"):"Enter"===t?this.msg("key-enter"):t.toUpperCase()}createButtonMapping(t,e,{property:i="high",allowClick:s=1}={}){const o=document.createElement("input")
o.readOnly=1,o.className="gamepadlib-keyinput",o.title=this.msg("keyinput-title"),o.dataset.index=e
const h=()=>{const s=t[e]
o.dataset.empty=0,"key"===s.type?null===s[i]?(o.value=this.msg("key-none"),o.dataset.empty=1):o.value=this.keyToString(s[i]):o.value="mousedown"===s.type?this.msg("key-click"):`??? ${s.type}`},r=()=>{t[e]=n(t[e]),a=0,o.blur(),h(),o.dispatchEvent(new CustomEvent("mapping-changed")),this.changed()}
let a=0
const l=()=>{o.dataset.acceptingInput=0,a&&(a=0,h())}
return o.addEventListener("click",(i=>{i.preventDefault(),a?s?(t[e].type="mousedown",r()):l():(o.value="...",o.dataset.acceptingInput=1,a=1)})),o.addEventListener("keydown",(s=>{if(a){s.preventDefault()
const n=s.key
if(["Alt","Shift","Control"].includes(n))return
const o=t[e]
1===n.length||["ArrowUp","ArrowDown","ArrowRight","ArrowLeft","Enter"].includes(n)?(o.type="key",o[i]=n):"Escape"!==n&&(o.type="key",o[i]=null),r()}else"Enter"===s.key&&(s.preventDefault(),s.target.click())})),o.addEventListener("blur",l),h(),o}createAxisMapping(t,o){const h=document.createElement("select")
h.className="gamepadlib-axis-mapping",h.id=g(o),h.appendChild(Object.assign(document.createElement("option"),{textContent:this.msg("axis-none"),value:"none"})),h.appendChild(Object.assign(document.createElement("option"),{textContent:this.msg("axis-cursor"),value:"cursor"})),h.appendChild(Object.assign(document.createElement("option"),{textContent:"WASD",value:"wasd"})),h.appendChild(Object.assign(document.createElement("option"),{textContent:this.msg("axis-arrows"),value:"arrows"})),h.appendChild(Object.assign(document.createElement("option"),{textContent:this.msg("axis-custom"),value:"custom"}))
const r=()=>{h.value="key"===t[o].type||"mousedown"===t[o].type?null===t[o].high&&null===t[o].low&&null===t[o+1].high&&null===t[o+1].low?"none":t[o].high===i[0].high&&t[o].low===i[0].low&&t[o+1].high===i[1].high&&t[o+1].low===i[1].low?"wasd":t[o].high===e[0].high&&t[o].low===e[0].low&&t[o+1].high===e[1].high&&t[o+1].low===e[1].low?"arrows":"custom":"virtual_cursor"===t[o].type?"cursor":"none"}
r()
const a=document.createElement("div")
a.className="gamepadlib-axis-circle-overlay"
const l=()=>{if(m(a),"key"===t[o].type){const e=[this.createButtonMapping(t,o+1,{property:"low",allowClick:0}),this.createButtonMapping(t,o,{property:"low",allowClick:0}),this.createButtonMapping(t,o,{property:"high",allowClick:0}),this.createButtonMapping(t,o+1,{property:"high",allowClick:0})]
for(const t of e)t.classList.add("gamepadlib-axis-mapper"),t.addEventListener("mapping-changed",r),a.appendChild(t)}}
return l(),h.addEventListener("change",(()=>{"custom"===h.value?"key"!==t[o].type&&(t[o]=n(e[0]),t[o+1]=n(e[1])):"arrows"===h.value?(t[o]=n(e[0]),t[o+1]=n(e[1])):"wasd"===h.value?(t[o]=n(i[0]),t[o+1]=n(i[1])):"cursor"===h.value?(t[o]=n(s[0]),t[o+1]=n(s[1])):(t[o]=n({type:"key",high:null,low:null}),t[o+1]=n({type:"key",high:null,low:null})),l(),this.changed()})),{circleOverlay:a,selector:h}}hasControllerSelected(){return!!this.selector.value}updateContent(){if(m(this.content),this.hidden)return
const t=this.selector.value
if(!t){const t=document.createElement("div")
return t.textContent=this.msg("no-controllers"),void this.content.appendChild(t)}const e=this.gamepadLib.gamepads.get(t)
if(!e){const e=document.createElement("div")
return e.textContent=`Cannot find controller: ${t}`,void this.content.appendChild(e)}this.buttonIdToElement.clear(),this.axisIdToElement.clear()
const i=document.createElement("div")
i.className="gamepadlib-content-buttons"
const s=e.buttonMappings
for(let t=0;s.length>t;t++){const e=document.createElement("div")
e.className="gamepadlib-mapping",e.dataset.id=t
const n=document.createElement("label")
n.className="gamepadlib-mapping-label",n.textContent=this.msg("button-n",{n:t})
const o=`gamepadlib-button-${t}`
n.htmlFor=o
const h=document.createElement("div")
h.className="gamepadlib-mapping-options"
const r=this.createButtonMapping(s,t)
r.id=o,h.appendChild(r),e.appendChild(n),e.appendChild(h),i.appendChild(e),this.buttonIdToElement.set(t,e)}const n=document.createElement("div")
n.className="gamepadlib-content-axes"
const o=e.axesMappings
for(let t=0;o.length>t;t+=2){const e=document.createElement("div")
e.className="gamepadlib-axis"
const i=document.createElement("label")
i.textContent=this.msg("axes-a-b",{a:t,b:t+1}),i.htmlFor=g(t)
const s=document.createElement("div")
s.className="gamepadlib-axis-circle"
const{circleOverlay:h,selector:r}=this.createAxisMapping(o,t)
s.appendChild(h)
const a=document.createElement("div")
a.className="gamepadlib-axis-dot",s.appendChild(a),e.appendChild(i),e.appendChild(s),e.appendChild(r),n.appendChild(e),this.axisIdToElement.set(t,a)}this.content.appendChild(i),this.content.appendChild(n)}update(t){if(this.hidden)return
if(!this.selector.value)return
const e=Array.from(t).find((t=>t&&d(t)===this.selector.value))
if(e){for(let t=0;e.buttons.length>t;t++){const i=this.buttonIdToElement.get(t)
if(i){const s=e.buttons[t].value.toString()
s!==i.dataset.value&&(i.dataset.value=s)}}for(let t=0;e.axes.length>t;t+=2){const i=this.axisIdToElement.get(t)
if(i){const s=75
i.style.transform=`translate(-50%, -50%) translate(${e.axes[t]*s}px, ${(e.axes[t+1]||0)*s}px)`}}}}export(){const t=this.selector.value
if(!t)return null
const e=this.gamepadLib.gamepads.get(t)
return e?{axes:e.axesMappings.map(h),buttons:e.buttonMappings.map(r)}:null}changed(){this.dispatchEvent(new CustomEvent("mapping-changed"))}hide(){this.hidden=1,this.updateContent()}focus(){this.selector.value&&this.selector.focus()}generateEditor(){return this.hidden=0,this.updateAllContent(),this.root}}export default w
