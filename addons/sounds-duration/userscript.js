export default async function({addon:t}){for(;;){const o=await t.tab.waitForElement("[class^=sound-editor_editor-container]",{markAsSeen:1,reduxCondition(t){return 2===t.scratchGui.editorTab.activeTabIndex&&!t.scratchGui.mode.isPlayerOnly}}),s=o.querySelector("[class^=sound-editor_row]").appendChild(Object.assign(document.createElement("div"),{className:"sa-sound-duration"})),c=o[t.tab.traps.getInternalKey(o)].return.return.return.stateNode
function n(t,n){const o=t=>Math.floor(t/60)+":"+(Math.round(100*t)/100%60).toFixed(2).padStart(5,"0")
s.textContent=o(t)+" / "+o(n)}n(0,c.audioBufferPlayer.buffer.length/c.audioBufferPlayer.buffer.sampleRate)
const i=c.handleUpdatePlayhead
c.handleUpdatePlayhead=function(t){i.call(this,t),n((Date.now()-this.startTime)/1e3,c.audioBufferPlayer.buffer.duration*c.audioBufferPlayer.trimEnd-c.audioBufferPlayer.buffer.duration*c.audioBufferPlayer.trimStart)}
const a=c.handleStoppedPlaying
c.handleStoppedPlaying=function(){a.call(this)
const t=c.audioBufferPlayer.buffer.duration*c.audioBufferPlayer.trimEnd-c.audioBufferPlayer.buffer.duration*c.audioBufferPlayer.trimStart
n(0,0===t?c.audioBufferPlayer.buffer.duration:t)}
const e=c.componentWillReceiveProps
c.componentWillReceiveProps=function(t){e.call(this,t),n(0,c.audioBufferPlayer.buffer.length/c.audioBufferPlayer.buffer.sampleRate)}
const d=c.handleUpdateTrim
c.handleUpdateTrim=function(t,o){d.call(this,t,o)
const s=c.audioBufferPlayer.buffer.duration*o-c.audioBufferPlayer.buffer.duration*t
n(0,0===s?c.audioBufferPlayer.buffer.duration:s)}}}