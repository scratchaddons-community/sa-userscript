"undefined"!=typeof browser&&browser.runtime.onMessage.addListener((function(r){if(r.clipboardDataURL&&browser&&browser.clipboard&&browser.clipboard.setImageData){const e=function(r){const e=atob(r.split(",")[1]),o=new ArrayBuffer(e.length),n=new Uint8Array(o)
for(let r=0;e.length>r;r++)n[r]=e.charCodeAt(r)
return o}(r.clipboardDataURL)
return browser.clipboard.setImageData(e,"png").then((()=>Promise.resolve("success"))).catch((r=>{console.error(r),Promise.reject(r.toString())}))}}))
