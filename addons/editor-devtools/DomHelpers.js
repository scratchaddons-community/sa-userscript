export default class t{constructor(t){this.addon=t,this.vm=t.tab.traps.vm,this.events=[]}triggerDragAndDrop(t,e,r,o){o=o||0
let s=function(t,e,r,s){let n=document.createEvent("MouseEvents")
n.initMouseEvent(t,1,1,window,1,1,1,r,s,o,0,0,0,0,e),e.dispatchEvent(n)},n=t,u=e
if(!n)return 0
let i=n.getBoundingClientRect(),a=Math.floor((i.left+i.right)/2),d=Math.floor((i.top+i.bottom)/2)
if(s("mouseover",n,a,d),s("mousedown",n,a,d),s("dragstart",n,a,d),s("drag",n,a,d),s("mousemove",n,a,d),!u){if(r){let t=r.x,e=r.y
s("drag",n,t,e),s("mousemove",n,t,e)}return 0}i=u.getBoundingClientRect()
let h=Math.floor((i.left+i.right)/2),m=Math.floor((i.top+i.bottom)/2)
return s("drag",n,h,m),s("mousemove",u,h,m),s("mouseenter",u,h,m),s("dragenter",u,h,m),s("mouseover",u,h,m),s("dragover",u,h,m),s("drop",u,h,m),s("dragend",n,h,m),s("mouseup",n,h,m),1}bindOnce(t,r,o,s){t.removeEventListener(r,o,s=!!s),t.addEventListener(r,o,s),this.events.push(new e(t,r,o,s))}unbindAllEvents(){for(const t of this.events)t.dom.removeEventListener(t.event,t.func,t.capture)
this.events=[]}}class e{constructor(t,e,r,o){this.dom=t,this.event=e,this.func=r,this.capture=o}}