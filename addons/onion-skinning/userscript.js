export default async function({addon:t,console:n,msg:o}){const e=await t.tab.traps.getPaper(),s=await t.tab.waitForElement("[class^='paint-editor_canvas-container']")
try{if(!("colorIndex"in t.tab.redux.state.scratchPaint.fillMode))return void n.error("Detected new paint editor; this will be supported in future versions.")}catch(t){}const i=s[t.tab.traps.getInternalKey(s)].child.child.child.stateNode
let c
const r=[],a=t=>{const n=t.substr(1),o=parseInt(n,16)
return[o>>16&255,o>>8&255,255&o]},u={enabled:t.settings.get("default")&&!t.self.disabled,previous:+t.settings.get("previous"),next:+t.settings.get("next"),opacity:+t.settings.get("opacity"),opacityStep:+t.settings.get("opacityStep"),layering:t.settings.get("layering"),mode:t.settings.get("mode"),beforeTint:a(t.settings.get("beforeTint")),afterTint:a(t.settings.get("afterTint"))}
let l=0
const d=()=>++l,f=()=>{d()
const t=e.project
if(!t)return
r.length=0
const n=t.layers
for(let t=n.length-1;t>=0;t--){const o=n[t]
o.data.sa_isOnionLayer&&o.remove()}},g=()=>{const t=e.project
if(!t)return
const n=t.layers.find((t=>t.data.sa_isOnionLayer))
if(n)if("front"===u.layering)t.addLayer(n)
else{const o=t.layers.find((t=>t.data.isRasterLayer))
t.insertLayer(0===o.index?0:1,n)}},m=(t,n)=>{if(t.children)for(const o of t.children)m(o,n)
n(t)},h=(t,n,o,e)=>{const s=e?u.beforeTint:u.afterTint,i=(t+n+o)/3/255/1.5+(1-1/1.5)
return[s[0]*i,s[1]*i,s[2]*i]},p=(t,n)=>(([t,n,o])=>`#${Math.round(t).toString(16).padStart(2,"0")}${Math.round(n).toString(16).padStart(2,"0")}${Math.round(o).toString(16).padStart(2,"0")}`)(h(255*t.red,255*t.green,255*t.blue,n)),w=(t,n)=>{const{width:o,height:e}=t.canvas,s=t.context,i=s.getImageData(0,0,o,e),c=i.data
for(let t=0;c.length>t;t+=4){const o=c[t+0],e=c[t+1],s=c[t+2]
if(0===c[t+3])continue
const i=h(o,e,s,n)
c[t+0]=i[0],c[t+1]=i[1],c[t+2]=i[2]}s.putImageData(i,0,0)},v=t=>{const n=t.strokeBounds,{width:o,height:s}=n,i=Math.min(3e3/o,3e3/s),c=new e.Raster(new e.Size(o,s))
c.remove(),c.smoothing=1,c.guide=1,c.locked=1
let r=0
const a=c.draw
return c.draw=function(...c){const u=this.getView().getZoom()*window.devicePixelRatio,l=Math.max(1,Math.min(i,2**Math.ceil(Math.log2(u))))
if(l>r){r=l
const i=this.canvas,c=this.context,a=o*l,u=s*l
i.width=a,i.height=u,this._size=new e.Size(a,u)
const d=n.getTopLeft(),f=n.getBottomRight(),g=new e.Size(f.subtract(d)),m=(new e.Matrix).scale(l).translate(d.negate())
c.save(),m.applyToContext(c),t.draw(c,new e.Base({matrices:[m]})),c.restore(),this.matrix.reset(),this.transform((new e.Matrix).translate(d.add(g.divide(2))).scale(1/l))}return a.call(this,...c)},c},T=async()=>{const o=e.project
if(!o)return
const s=(()=>{const t=document.querySelector("[class*='selector_list-item'][class*='sprite-selector-item_is-selected']")
if(!t)return-1
const n=t.querySelector("[class*='sprite-selector-item_number']")
return n?+n.textContent-1:-1})()
if(-1===s)return
f()
const i=d(),r=t.tab.traps.vm
if(!r)return
const a=o.activeLayer,h=r.editingTarget.sprite.costumes,T=Math.max(0,s-u.previous),b=Math.min(h.length-1,s+u.next)
try{const t=[]
for(let n=T;b>=n;n++){if(n===s)continue
const o=s>n,e=Math.abs(n-s)-1,i=(u.opacity-u.opacityStep*e)/100
i>0&&t.push({index:n,isBefore:o,opacity:i})}const n=await Promise.all(t.map((({index:t,isBefore:n,opacity:o})=>{const s=h[t],i=r.getCostume(t)
if("svg"===s.dataFormat)return((t,n,o,s)=>new Promise(((i,r)=>{const{rotationCenterX:a,rotationCenterY:l}=n,d=(o=(o=o.split(/<\s*svg:/).join("<")).split(/<\/\s*svg:/).join("</")).match(/<svg [^>]*>/)
d&&-1===d[0].indexOf("xmlns=")&&(o=o.replace("<svg ",'<svg xmlns="http://www.w3.org/2000/svg" '))
const f=(new DOMParser).parseFromString(o,"text/xml"),g=f.documentElement.attributes.viewBox?f.documentElement.attributes.viewBox.value.match(/\S+/g):null
if(g)for(let t=0;g.length>t;t++)g[t]=parseFloat(g[t])
e.project.importSVG(o,{expandShapes:1,insert:0,onLoad(n){n?i((t=>{const n=[]
return m(t,(t=>{t instanceof e.Raster&&n.push(new Promise(((n,o)=>{t.on("load",(()=>n())),t.on("error",(()=>o(new Error("Raster inside SVG failed to load"))))})))})),Promise.all(n)})(n).then((()=>(n=>{if(n.opacity=t,m(n,(t=>{"PathItem"===t.className&&(t.clockwise=1),"PointText"===t.className||t.children||t.strokeWidth&&(t.strokeWidth=2*t.strokeWidth),t.locked=1,t.guide=1})),n.scale(2,new e.Point(0,0)),"tint"===u.mode){const t=new Set
m(n,(n=>{if(n.strokeColor&&(n.strokeColor=p(n.strokeColor,s)),n.fillColor){const o=n.fillColor.gradient
if(o){if(t.has(o))return
t.add(o)
for(const t of o.stops)t.color=p(t.color,s)}else n.fillColor=p(n.fillColor,s)}n.canvas&&w(n,s)}))}if(void 0!==a&&void 0!==l){let t=new e.Point(a,l)
!g||2>g.length||isNaN(g[0])||isNaN(g[1])||(t=t.subtract(g[0],g[1])),n.translate(c.subtract(t.multiply(2)))}else n.translate(c.subtract(n.bounds.width,n.bounds.height))
return v(n)})(n)))):r(new Error("could not load onion skin"))}})})))(o,s,i,n)
if("png"===s.dataFormat||"jpg"===s.dataFormat)return((t,n,o,s)=>new Promise(((i,r)=>{let{rotationCenterX:a,rotationCenterY:l}=n
const d=new Image
d.onload=()=>{const n=Math.min(2*c.x,d.width),o=Math.min(2*c.y,d.height)
void 0===a&&(a=n/2),void 0===l&&(l=o/2)
const r=new e.Raster(d)
r.opacity=t,r.guide=1,r.locked=1,r.position=new e.Point(n/2+(c.x-a),o/2+(c.y-l)),r.remove(),"tint"===u.mode&&w(r,s),i(r)},d.onerror=()=>{r(new Error("could not load image"))},d.src=o})))(o,s,i,n)
throw new Error(`Unknown data format: ${s.dataFormat}`)})))
if(l===i){const t=(()=>{const t=new e.Layer
return t.locked=1,t.guide=1,t.data.sa_isOnionLayer=1,t})()
for(const o of n)t.addChild(o)
g()}}catch(t){n.error(t)}a.activate()},b=t=>{u.enabled!==t&&(u.enabled=t,u.enabled?(0===u.next&&0===u.previous&&(u.previous=1,L.previous.value=u.previous),0===u.opacity&&(u.opacity=25,L.opacity.value=u.opacity),T()):f(),k.dataset.enabled=u.enabled)},y=t=>{0===u.previous&&0===u.next||0===u.opacity?b(0):u.enabled?t?g():T():(u.previous>0||u.next>0)&&b(1)},x=()=>{const t=document.createElement("div")
return t.className="sa-onion-group",t},E=({useButtonTag:t}={})=>{const n=document.createElement(t?"button":"span")
return n.className="sa-onion-button",n.setAttribute("role","button"),n},_=n=>{const o=document.createElement("img")
return o.className="sa-onion-image",o.draggable=0,o.src=t.self.dir+"/"+n+".svg",o},M=document.createElement("div")
M.className="sa-onion-controls-container",M.dir=""
const S=x()
t.tab.displayNoneWhileDisabled(S,{display:"flex"})
const k=E()
k.dataset.enabled=u.enabled,k.addEventListener("click",(()=>b(!u.enabled))),k.title=o("toggle"),k.appendChild(_("toggle")),S.appendChild(k)
const P=E()
P.addEventListener("click",(()=>B(!C()))),P.title=o("settings"),P.appendChild(_("settings")),S.appendChild(P),M.appendChild(S)
const A=document.createElement("div")
A.className="sa-onion-settings"
const B=t=>{P.dataset.enabled=t,A.dataset.visible=t},C=()=>"true"===A.dataset.visible,L={}
for(const t of["previous","next","opacity","opacityStep"]){const n=document.createElement("label")
n.className="sa-onion-settings-line"
const e=document.createElement("div")
e.className="sa-onion-settings-label",e.textContent=o(t),n.appendChild(e)
const s=x(),i=E(),c=document.createElement("div")
c.style.width="20px",i.appendChild(c)
const r=document.createElement("input")
L[t]=r,r.className="sa-onion-settings-input",r.type="number",r.step="1",r.min="0",r.max="100",r.value=u[t],r.addEventListener("input",(()=>{if(0===r.value.length)return u[t]=0,void y()
let n=+r.value
n>+r.max?n=+r.max:0>n&&(n=0),r.value=n,u[t]=n,y()})),r.addEventListener("blur",(()=>{r.value||(r.value="0")})),i.appendChild(r)
const a=E()
a.appendChild(_("decrement")),a.addEventListener("click",(()=>{u[t]>0&&(u[t]--,r.value=u[t],y())}))
const l=E()
l.appendChild(_("increment")),l.addEventListener("click",(()=>{+r.max>u[t]&&(u[t]++,r.value=u[t],y())})),s.appendChild(a),s.appendChild(i),s.appendChild(l),n.appendChild(s),A.appendChild(n)}const I=document.createElement("div")
I.className="sa-onion-settings-line"
const D=document.createElement("div")
D.className="sa-onion-settings-label",D.textContent=o("mode")
const N=x()
I.appendChild(D)
const O=E({useButtonTag:1})
O.appendChild(document.createTextNode(o("merge"))),N.appendChild(O),O.addEventListener("click",(()=>{u.mode="merge",R.dataset.enabled=0,O.dataset.enabled=1,y()})),O.dataset.enabled="merge"===u.mode
const R=E({useButtonTag:1})
R.appendChild(document.createTextNode(o("tint"))),N.appendChild(R),R.addEventListener("click",(()=>{u.mode="tint",R.dataset.enabled=1,O.dataset.enabled=0,y()})),R.dataset.enabled="tint"===u.mode,I.appendChild(N),A.appendChild(I)
const Y=document.createElement("div")
Y.className="sa-onion-settings-line"
const z=document.createElement("div")
z.className="sa-onion-settings-label",z.textContent=o("layering")
const F=x()
Y.appendChild(z)
const G=E({useButtonTag:1})
G.appendChild(document.createTextNode(o("front"))),F.appendChild(G),G.addEventListener("click",(()=>{u.layering="front",U.dataset.enabled=0,G.dataset.enabled=1,y(1)})),G.dataset.enabled="front"===u.layering
const U=E({useButtonTag:1})
U.appendChild(document.createTextNode(o("behind"))),F.appendChild(U),U.addEventListener("click",(()=>{u.layering="behind",U.dataset.enabled=1,G.dataset.enabled=0,y(1)})),U.dataset.enabled="behind"===u.layering,Y.appendChild(F),A.appendChild(Y)
const V="http://www.w3.org/2000/svg",X=document.createElementNS(V,"svg")
X.setAttribute("class","sa-onion-settings-tip"),X.setAttribute("width","14"),X.setAttribute("height","7")
const j=document.createElementNS(V,"polygon")
j.setAttribute("class","sa-onion-settings-polygon"),j.setAttribute("points","0,0 7,7, 14,0"),X.appendChild(j),A.appendChild(X)
let q=null
t.self.addEventListener("disabled",(()=>{B(0),q=u.enabled,b(0)})),t.self.addEventListener("reenabled",(()=>{b(q)})),(()=>{const t=e.project.layers.find((t=>t.data.isBackgroundGuideLayer))
c=t.children[0].position
const n=e.Project.prototype.addLayer
e.Project.prototype.addLayer=function(t){const o=n.call(this,t)
if(t.data.isBackgroundGuideLayer){let t
for(;t=r.shift();)n.call(this,t)
g()}return o}
const o=e.Project.prototype.importJSON
e.Project.prototype.importJSON=function(t){const n=o.call(this,t)
return u.enabled&&T(),n}
const s=e.Layer.prototype.remove
e.Layer.prototype.remove=function(){if(this.data.isBackgroundGuideLayer){for(const t of e.project.layers)t.data.sa_isOnionLayer&&r.push(t)
for(const t of r)t.remove()}return s.call(this)}})(),(()=>{let t=0
const n=i.constructor,o=n.prototype.importImage
n.prototype.importImage=function(...n){return t=1,f(),o.call(this,...n)}
const e=n.prototype.recalibrateSize
n.prototype.recalibrateSize=function(n){return e.call(this,(()=>{n&&n(),t&&(t=0,u.enabled&&T())}))},i.recalibrateSize=n.prototype.recalibrateSize.bind(i),i.importImage=n.prototype.importImage.bind(i)})(),(async()=>{let n=0
for(;;){const o=await t.tab.waitForElement("[class^='paint-editor_canvas-controls']",{markAsSeen:1,reduxEvents:["scratch-gui/navigation/ACTIVATE_TAB","scratch-gui/mode/SET_PLAYER","fontsLoaded/SET_FONTS_LOADED","scratch-gui/locales/SELECT_LOCALE","scratch-gui/targets/UPDATE_TARGET_LIST"],reduxCondition(t){return 1===t.scratchGui.editorTab.activeTabIndex&&!t.scratchGui.mode.isPlayerOnly}}),e=o.querySelector("[class^='paint-editor_zoom-controls']"),s=document.querySelector("[class^='paint-editor_canvas-container']"),i=M.querySelector("[class^='paint-editor_zoom-controls']")
if(i&&i.parentNode.removeChild(i),M.appendChild(e),o.appendChild(M),s.appendChild(A),!n){n=1
const t=e.firstChild.className,o=e.firstChild.firstChild.className,s=e.firstChild.firstChild.firstChild.className
for(const n of document.querySelectorAll(".sa-onion-group"))n.className+=" "+t
for(const t of document.querySelectorAll(".sa-onion-button"))t.className+=" "+o
for(const t of document.querySelectorAll(".sa-onion-image"))t.className+=" "+s}u.enabled&&T()}})()}