export default async function({addon:t,console:e}){if(await t.tab.traps.getPaper(),!("colorIndex"in t.tab.redux.state.scratchPaint.fillMode))return void e.error("Detected new paint editor; this will be supported in future versions.")
const s=t=>(+t).toString(16).toUpperCase().padStart(2,"0"),r=t=>{if(null===t)return null
if("string"==typeof t){if(t.startsWith("#"))return t.substring(0,7).toUpperCase()
const e=t.match(/^rgb\((\d+)\s*,(\d+)\s*,(\d+)\)$/)
if(e){const[t,r,i,n]=e
return`#${s(r)}${s(i)}${s(n)}`}}return e.log("Could not normalize color",t),null},i=t=>t===n?n:r(t),n="scratch-paint/style-path/mixed",o=r("#9966FF"),l=r("#000000"),c=Object.assign(Object.create(null),{BRUSH:{resetsFill:1},ERASER:{},LINE:{resetsStroke:1,requiresNonZeroStrokeWidth:1,supportsGradient:1},FILL:{resetsFill:1,supportsGradient:1},SELECT:{supportsGradient:1},RESHAPE:{supportsGradient:1},OVAL:{resetsFill:1,resetsStroke:1,supportsGradient:1},RECT:{resetsFill:1,resetsStroke:1,supportsGradient:1},TEXT:{resetsFill:1,resetsStroke:1},BIT_BRUSH:{resetsFill:1},BIT_LINE:{resetsFill:1,requiresNonZeroStrokeWidth:1},BIT_OVAL:{resetsFill:1,resetsStroke:1,supportsGradient:1},BIT_RECT:{resetsFill:1,resetsStroke:1,supportsGradient:1},BIT_TEXT:{resetsFill:1,resetsStroke:1},BIT_FILL:{resetsFill:1,supportsGradient:1},BIT_ERASER:{},BIT_SELECT:{supportsGradient:1}}),a=()=>c[t.tab.redux.state.scratchPaint.mode]
class p{constructor(t,e,s,r){this.reduxPropertyName=t,this.primaryAction=e,this.secondaryAction=s,this.gradientTypeAction=r}get(e=t.tab.redux.state){return e.scratchPaint.color[this.reduxPropertyName]}set(e){const s=this.get(),r=i(e.primary)
s.primary!==r&&t.tab.redux.dispatch({type:this.primaryAction,color:r})
const n=a()
if(n&&n.supportsGradient){const r=i(e.secondary)
s.secondary!==r&&t.tab.redux.dispatch({type:this.secondaryAction,color:r}),s.gradientType!==e.gradientType&&t.tab.redux.dispatch({type:this.gradientTypeAction,gradientType:e.gradientType})}}}const u=new p("fillColor","scratch-paint/fill-style/CHANGE_FILL_COLOR","scratch-paint/fill-style/CHANGE_FILL_COLOR_2","scratch-paint/fill-style/CHANGE_FILL_GRADIENT_TYPE"),d=new p("strokeColor","scratch-paint/stroke-style/CHANGE_STROKE_COLOR","scratch-paint/stroke-style/CHANGE_STROKE_COLOR_2","scratch-paint/stroke-style/CHANGE_STROKE_GRADIENT_TYPE"),E=t=>({primary:t,secondary:null,gradientType:"SOLID"})
let T,_,h
const S=()=>{T=E(r(t.settings.get("fill"))),_=E(r(t.settings.get("stroke"))),h=t.settings.get("strokeSize")}
S()
const L=()=>{u.set(T)},f=()=>{d.set(_)},G=e=>{let s=h
0===s&&e&&(s=1),t.tab.redux.state.scratchPaint.color.strokeWidth!==s&&t.tab.redux.dispatch({type:"scratch-paint/stroke-width/CHANGE_STROKE_WIDTH",strokeWidth:s})}
t.self.disabled||(L(),f(),G(0)),t.settings.addEventListener("change",(()=>{t.settings.get("persistence")||S()}))
const I=t=>null!==t.primary&&t.primary!==n
let k=0
t.tab.redux.initialize(),t.tab.redux.addEventListener("statechanged",(({detail:s})=>{if(t.self.disabled)return
const r=s.action
if(!k&&t.settings.get("persistence")){const t=u.get()
u.get(s.prev)!==t&&I(t)&&(T=t)
const e=d.get()
d.get(s.prev)!==e&&I(e)&&(_=e)
const r=s.next.scratchPaint.color.strokeWidth
"number"==typeof r&&(h=r)}"scratch-paint/modes/CHANGE_MODE"===r.type&&(k=1,queueMicrotask((()=>{if(k=0,t.settings.get("persistence")){const s=a()
if(!s)return void e.warn("unknown tool",t.tab.redux.state.scratchPaint.mode)
s.resetsFill&&L(),s.resetsStroke&&(G(!!s.requiresNonZeroStrokeWidth),f())}else{const t=u.get(s.prev)
null!==t.primary&&t.primary!==n||u.get().primary===o&&L()
const e=d.get(s.prev)
null!==e.primary&&e.primary!==n||d.get().primary===l&&(G(1),f())}})))}))}