let t,n=0,e=new WeakMap,o=0,s=null
const r=new EventTarget
export const isPaused=()=>n
const c=n=>{n.updateMonitor||e.has(n)||(e.set(n,{time:t.runtime.currentMSecs,status:n.status}),n.status=1)},i=t=>{if(4===t.status)return
const n=e.get(t)
n&&1!==t.status&&(n.status=t.status,t.status=1)},f=t=>{s=t},u=(n,e)=>{const o=n.peekStackFrame()
o&&o.executionContext&&o.executionContext.timer&&(o.executionContext.timer.startTime+=t.runtime.currentMSecs-e.time)}
export const setPaused=o=>{if(n!==o&&(n=o,r.dispatchEvent(new CustomEvent("change"))),o){t.runtime.audioEngine.audioContext.suspend(),t.runtime.ioDevices.clock._paused||t.runtime.ioDevices.clock.pause(),t.runtime.threads.forEach(c)
const n=t.runtime.sequencer.activeThread
n&&(f(n),r.dispatchEvent(new CustomEvent("step")))}else{t.runtime.audioEngine.audioContext.resume(),t.runtime.ioDevices.clock.resume()
for(const n of t.runtime.threads){const t=e.get(n)
t&&(u(n,t),n.status=t.status)}e=new WeakMap,(()=>{const n=t.runtime.threads,e=a(s)
if(-1!==e)for(let o=e;n.length>o;o++){const e=n[o],s=e.status
0!==s&&2!==s&&3!==s||(t.runtime.sequencer.activeThread=e,t.runtime.sequencer.stepThread(e))}})(),s=null}}
export const onPauseChanged=t=>{r.addEventListener("change",(()=>t(n)))}
export const onSingleStep=t=>{r.addEventListener("step",t)}
export const getRunningThread=()=>s
const l=t=>{const n=e.get(t)
return n?n.status:t.status},a=n=>n?t.runtime.threads.findIndex((t=>t.target===n.target&&t.topBlock===n.topBlock&&t.stackClick===n.stackClick&&t.updateMonitor===n.updateMonitor)):-1,p=n=>{const e=t.runtime.threads
for(let t=n;e.length>t;t++){const n=e[t]
if(n.updateMonitor)continue
const o=l(n)
if(0===o||2===o||3===o)return c(n),n}return null}
export const singleStep=()=>{if(s){const n=e.get(s)
u(s,n),n.time=t.runtime.currentMSecs,(n=>{if(4===n.status)return 0
const e=n.peekStack()
if(!e&&(n.popStack(),0===n.stack.length))return n.status=4,0
o=1,t.runtime.sequencer.activeThread=n
const s=["special error used by Scratch Addons for implementing single-stepping"]
Object.defineProperty(n,"blockGlowInFrame",{set(t){throw s}})
try{n.status=0,n.warpTimer&&n.warpTimer.start()
try{t.runtime.sequencer.stepThread(n)}catch(t){if(t!==s)throw t}if(0!==n.status)return 0
for(n.peekStack()===e&&n.goToNextBlock();!n.peekStack();){if(n.popStack(),0===n.stack.length)return n.status=4,0
const t=n.peekStackFrame()
if(t.isLoop){if(n.peekStackFrame().warpMode)continue
return 0}if(t.waitingReporter)return 0
n.goToNextBlock()}return 1}finally{o=0,t.runtime.sequencer.activeThread=null,Object.defineProperty(n,"blockGlowInFrame",{value:e,configurable:1,enumerable:1,writable:1}),4!==n.status&&(n.status=1)}})(s)||(s=p(a(s)+1))}if(!s){f(p(0)),t.runtime.ioDevices.clock._pausedTime+=t.runtime.currentStepTime
const n=t.runtime.audioEngine.audioContext
for(const e of t.runtime.targets)for(const o of Object.keys(e.sprite.soundBank.soundPlayers)){const s=e.sprite.soundBank.soundPlayers[o]
s.outputNode&&(s.outputNode.stop(n.currentTime),s._createSource(),s.outputNode.start(n.currentTime,n.currentTime-s.startingUntil+t.runtime.currentStepTime/1e3),s.startingUntil-=t.runtime.currentStepTime/1e3)}for(const n of t.runtime.threads)e.has(n)&&(e.get(n).time+=t.runtime.currentStepTime)
o=1
const s=t.runtime._hats
for(const n in s)({}).hasOwnProperty.call(s,n)&&s[n].edgeActivated&&t.runtime.startHats(n)
o=0}r.dispatchEvent(new CustomEvent("step"))}
export const setup=s=>{if(t)return
t=s
const r=t.runtime.sequencer.stepThreads
t.runtime.sequencer.stepThreads=function(){if(n)for(const t of this.runtime.threads)i(t)
return r.call(this)}
const f=t.runtime.greenFlag
t.runtime.greenFlag=function(){return setPaused(0),f.call(this)}
const u=t.runtime.startHats
t.runtime.startHats=function(...t){const e=t[0],s="event_whenbroadcastreceived"===e||"control_start_as_clone"===e
if(o){if(!s&&!this.getIsEdgeActivatedHat(e))return[]
const n=u.apply(this,t)
for(const t of n)c(t)
return n}return n&&!s?[]:u.apply(this,t)}
const l=t.runtime._getMonitorThreadCount
t.runtime._getMonitorThreadCount=function(t){let o=l.call(this,t)
if(n)for(const n of t)e.has(n)&&o++
return o}}
