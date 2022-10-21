export default function(e,r){const t=atob(e.split(",")[1]),n=e.split(",")[0].split(":")[1].split(";")[0],o=new ArrayBuffer(t.length),f=new Uint8Array(o)
for(let e=0;t.length>e;e++)f[e]=t.charCodeAt(e)
return r?o:new Blob([o],{type:n})}