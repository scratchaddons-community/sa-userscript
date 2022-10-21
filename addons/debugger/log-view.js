const t=(t,s,i)=>Math.max(s,Math.min(i,t)),s=(t,s)=>{const i=+s.dataset.index
let h=0
for(const e of t.children)if(+e.dataset.index>i){h=1,t.insertBefore(s,e)
break}h||t.appendChild(s)}
export default class{constructor(){this.rows=[],this.canAutoScrollToEnd=1,this.rowHeight=20,this.outerElement=document.createElement("div"),this.outerElement.className="sa-debugger-log-outer",this.innerElement=document.createElement("div"),this.innerElement.className="sa-debugger-log-inner",this.outerElement.appendChild(this.innerElement),this.innerElement.addEventListener("scroll",this._handleScroll.bind(this),{passive:1}),this.innerElement.addEventListener("wheel",this._handleWheel.bind(this),{passive:1}),this.endElement=document.createElement("div"),this.endElement.className="sa-debugger-log-end",this.endElement.dataset.index="-1",this.innerElement.appendChild(this.endElement),this.placeholderElement=document.createElement("div"),this.placeholderElement.className="sa-debugger-log-empty",this.visible=0,this.isScrolledToEnd=1,this.scrollTopWhenHidden="end",this.scrollTop=0,this.updateContentQueued=0,this.scrollToEndQueued=0,this.oldLength=-1,this.rowToMetadata=new Map}append(t){for(this.queueUpdateContent(),this._queueScrollToEnd(),this.rows.push(t);this.rows.length>2e5;)this.rows.shift()}clear(){this.rows.length=0,this.scrollTop=0,this.isScrolledToEnd=1,this.queueUpdateContent()}show(){this.visible=1,this.height=this.innerElement.offsetHeight,this.queueUpdateContent(),"end"===this.scrollTopWhenHidden?this._queueScrollToEnd():this.innerElement.scrollTop=this.scrollTopWhenHidden}hide(){this.visible=0,this.scrollTopWhenHidden=this.isScrolledToEnd?"end":this.scrollTop}_handleScroll(t){this.scrollTop=t.target.scrollTop,this.isScrolledToEnd=t.target.scrollTop+5>=t.target.scrollHeight-t.target.clientHeight,this.queueUpdateContent()}_handleWheel(t){0>t.deltaY&&(this.isScrolledToEnd=0)}scrollIntoView(t){const s=t*this.rowHeight
s>this.scrollTop&&this.scrollTop+this.height>s||(this.scrollTop=s,this.innerElement.scrollTop=s)}_queueScrollToEnd(){this.visible&&this.canAutoScrollToEnd&&this.isScrolledToEnd&&!this.scrollToEndQueued&&(this.scrollToEndQueued=1,queueMicrotask((()=>{if(this.scrollToEndQueued=0,this.isScrolledToEnd){const t=this.innerElement.scrollHeight-this.innerElement.offsetHeight
this.innerElement.scrollTop=t,this.scrollTop=t}})))}queueUpdateContent(){this.visible&&!this.updateContentQueued&&(this.updateContentQueued=1,queueMicrotask((()=>{this.updateContentQueued=0,this.updateContent()})))}generateRow(t){}renderRow(t,s){}updateContent(){if(this.rows.length!==this.oldLength)if(this.oldLength=this.rows.length,this.endElement.style.transform=`translateY(${this.rows.length*this.rowHeight}px)`,this.rows.length)this.placeholderElement.remove()
else{this.innerElement.appendChild(this.placeholderElement)
for(const t of this.rowToMetadata.values())t.elements.root.remove()
this.rowToMetadata.clear()}if(0===this.rows.length)return
const i=Math.floor(this.scrollTop/this.rowHeight),h=Math.ceil(this.height/this.rowHeight),e=t(i-5,0,this.rows.length),o=t(i+h+5,0,this.rows.length),n=new Set,r=[]
for(let t=e;o>t;t++){const s=this.rows[t]
n.add(s)
let i=this.rowToMetadata.get(s)
if(!i){const t=this.generateRow(s)
r.push(t.root),i={stringify:null,elements:t},this.rowToMetadata.set(s,i)}const h=JSON.stringify(s)
h!==i.stringify&&(i.stringify=h,this.renderRow(i.elements,s))
const e=i.elements.root
e.style.transform=`translateY(${t*this.rowHeight}px)`,e.dataset.index=t}for(const[t,s]of this.rowToMetadata.entries())n.has(t)||(s.elements.root.remove(),this.rowToMetadata.delete(t))
for(const t of r)s(this.innerElement,t)}}