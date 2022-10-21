const o="http://www.w3.org/2000/svg",t=document.createElementNS(o,"svg")
t.style.position="fixed",t.style.top="-999999px",t.style.width="0",t.style.height="0",document.body.appendChild(t)
let e=0
const s=new WeakMap,n=o=>(s.get(o)||s.set(o,new Set),s.get(o)),r=(o,t)=>{let e
for(const o of t)e&&e.priority>=o.priority||(e=o)
o.style.filter=e?e.filter:""},c=(o,t)=>{const e=n(o)
e.add(t),r(o,e)},i=(o,t)=>{const e=n(o)
e.delete(t),r(o,e)}
export default class{constructor(s,n){this.priority=s
const r="sa_glower_filter"+e++
this.filter=`url("#${r}")`,this.previousElements=new Set
const c=document.createElementNS(o,"filter")
c.id=r,c.setAttribute("width","180%"),c.setAttribute("height","160%"),c.setAttribute("x","-40%"),c.setAttribute("y","-30%")
const i=document.createElementNS(o,"feGaussianBlur")
i.setAttribute("in","SourceGraphic"),i.setAttribute("stdDeviation","4"),c.appendChild(i)
const u=document.createElementNS(o,"feComponentTransfer")
u.setAttribute("result","outBlur"),c.appendChild(u)
const l=document.createElementNS(o,"feFuncA")
l.setAttribute("type","table"),l.setAttribute("tableValues","0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1"),u.appendChild(l)
const f=document.createElementNS(o,"feFlood")
f.setAttribute("flood-opacity","1"),f.setAttribute("result","outColor"),c.appendChild(f),this.filterFlood=f
const a=document.createElementNS(o,"feComposite")
a.setAttribute("in","outColor"),a.setAttribute("in2","outBlur"),a.setAttribute("operator","in"),a.setAttribute("result","outGlow"),c.appendChild(a)
const h=document.createElementNS(o,"feComposite")
h.setAttribute("in","SourceGraphic"),h.setAttribute("in2","outGlow"),h.setAttribute("operator","over"),c.appendChild(h),t.appendChild(c),this.setColor(n)}setColor(o){this.filterFlood.setAttribute("flood-color",o)}setGlowingThreads(o){const t=new Set,e=Blockly.getMainWorkspace()
if(e)for(const s of o)s.stack.forEach((o=>{const n=e.getBlockById(o)
n&&!s.stack.find((o=>{let t=n
for(;t.childBlocks_.length;)if(t=t.childBlocks_[t.childBlocks_.length-1],o===t.id)return 1
return 0}))&&n.svgPath_&&t.add(n.svgPath_)}))
for(const o of this.previousElements)t.has(o)||i(o,this)
for(const o of t)this.previousElements.has(o)||c(o,this)
this.previousElements=t}}