export default async({addon:e,console:t})=>{if(!e.tab.redux.state)return t.warn("Redux is not available!")
e.tab.redux.initialize(),e.tab.redux.addEventListener("statechanged",(({detail:r})=>{if(e.self.disabled)return
if(!r.action||"scratch-paint/clipboard/SET"!==r.action.type)return
const a=r.next.scratchPaint.clipboard.items
if(1!==a.length)return
const c=a[0]
if(!Array.isArray(c)||"Raster"!==c[0])return t.log("copied element is vector")
e.tab.copyImage(c[1].source).then((()=>t.log("Image successfully copied"))).catch((e=>t.error(`Image could not be copied: ${e}`)))}))}
