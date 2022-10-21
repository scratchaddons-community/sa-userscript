export default async function({addon:t,msg:c}){const s=XMLHttpRequest.prototype.send
XMLHttpRequest.prototype.send=function(p){if(!t.self.disabled&&"POST"===this.method&&this.url?.startsWith("https://backpack.scratch.mit.edu/"))try{const t=JSON.parse(p)
"script"===t.type&&(t.name=prompt(c("prompt"),t.name).substring(0,255)),p=JSON.stringify(t)}catch{}return s.call(this,...arguments)}}