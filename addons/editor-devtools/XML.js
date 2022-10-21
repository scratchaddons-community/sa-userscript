export default class t{constructor(){this.xmlDoc=document.implementation.createDocument(null,"xml")}newXml(t,e,r){let s=this.xmlDoc.createElement(e)
return t.appendChild(s),this.setAttr(s,r)}setAttr(t,e){if(e)for(const r of Object.keys(e))"text"===r?t.appendChild(this.xmlDoc.createTextNode(e[r])):t.setAttribute(r,e[r])
return t}}