export default async function({addon:n,console:t}){const e=window.FileReader
window.FileReader=function(){const o=new e,i=Symbol()
return o[i]=o.readAsArrayBuffer,o.readAsArrayBuffer=function(e){if(n.self.disabled)return o[i](e);(async()=>{if("image/svg+xml"===e.type)try{let n=await e.text()
const t=(new DOMParser).parseFromString(n,"text/xml"),c=t.children[0]
"100%"===c.height.baseVal.valueAsString&&"100%"===c.width.baseVal.valueAsString&&(c.removeAttribute("height"),c.removeAttribute("width"),n=t.documentElement.outerHTML)
const s=new File([n],e.name,{type:e.type,lastModified:e.lastModified})
o[i](s)}catch(n){t.warn(n),o[i](e)}else o[i](e)})()},o}}