export default(n,e)=>{const o=document.createElement("a")
if(document.body.appendChild(o),navigator.msSaveOrOpenBlob)navigator.msSaveOrOpenBlob(e,n)
else if("download"in HTMLAnchorElement.prototype){const t=window.URL.createObjectURL(e)
o.href=t,o.download=n,o.type=e.type,o.click(),window.setTimeout((()=>{document.body.removeChild(o),window.URL.revokeObjectURL(t)}),1e3)}else{let n=window.open("","_blank")
const o=new FileReader
o.onloadend=function(){n.location.href=o.result,n=null},o.readAsDataURL(e)}}
