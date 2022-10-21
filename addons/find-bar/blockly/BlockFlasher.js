export default class l{static flash(l){t.timerID>0&&(clearTimeout(t.timerID),t.block.svgPath_&&(t.block.svgPath_.style.fill=""))
let e=4,f=1
t.block=l,function l(){t.block.svgPath_&&(t.block.svgPath_.style.fill=f?"#ffff80":""),f=!f,e--,e>0?t.timerID=setTimeout(l,200):(t.timerID=0,t.block=null)}()}}const t={block:null,timerID:null}
