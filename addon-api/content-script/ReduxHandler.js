import t from"../common/Listenable.js"
export default class e extends t{constructor(){super(),this.initialized=0,this.initialize()}initialize(){__scratchAddonsRedux.target&&!this.initialized&&(this.initialized=1,__scratchAddonsRedux.target.addEventListener("statechanged",(({detail:t})=>{const e=new CustomEvent("statechanged",{detail:{action:t.action,prev:t.prev,next:t.next}})
this.dispatchEvent(e)})))}get state(){return __scratchAddonsRedux.state}dispatch(t){if(!__scratchAddonsRedux.dispatch)throw new Error("Redux is unavailable")
__scratchAddonsRedux.dispatch(t)}waitForState(t,e={}){if(this.initialize(),!__scratchAddonsRedux.target)return Promise.reject(new Error("Redux is unavailable"))
if(t(__scratchAddonsRedux.state))return Promise.resolve()
let s=e.actions||null
return"string"==typeof s&&(s=[s]),new Promise((e=>{const d=({detail:r})=>{s&&!s.includes(r.action.type)||t(r.next)&&(__scratchAddonsRedux.target.removeEventListener("statechanged",d),setTimeout(e,0))}
__scratchAddonsRedux.target.addEventListener("statechanged",d)}))}}