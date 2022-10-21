export default async function({addon:t}){function e(t,e,a){let c,i,{width:n,height:o}=a.getBoundingClientRect()
n&&o||a.hasAttribute("width")&&a.hasAttribute("height")&&(n=+a.getAttribute("width"),o=+a.getAttribute("height")),a.classList.contains("studio-project-image")&&(c=347,i=260)
let r=Math.max(n/t,o/e)
if(c){const a=Math.max(c/t,i/e)
r=Math.max(r,a)}return[t*r,e*r]}function a(e,a){const c=.01*t.settings.get("multiplier")
return e*=c,a*=c,[e=Math.round(e),a=Math.round(a)]}function c(t,e){o.push({image:t,src:t.src,lazySrc:t.dataset.original,newSrc:e}),t.classList.contains("lazy")&&(t.dataset.original=e),t.src&&(t.src=e)}const i=/(.*\/get_image\/.*?\/[0-9]+?_)([0-9]+?)x([0-9]+?)(\.[a-z]+)/,n=/^https?:\/\/uploads\.scratch\.mit\.edu\//,o=[]
for(t.self.addEventListener("disabled",(()=>{for(const{image:t,lazySrc:e}of o)e&&(t.dataset.original=e),t.src=e})),t.self.addEventListener("reenabled",(()=>{for(const{image:t,src:e,lazySrc:a,newSrc:c}of o)a&&(t.dataset.original=c),e&&(t.src=c)}));;){const o=await t.tab.waitForElement("img",{markAsSeen:1})
let r,s,l,d=o.classList.contains("lazy")?o.dataset.original:o.src
if(d.startsWith("data:"))continue
if(!i.test(d)&&n.test(d)){const t=d.match(/[0-9]+/)
d.includes("projects")?d=`//uploads.scratch.mit.edu/get_image/project/${t}_480x360.png`:d.includes("users")?d=`//uploads.scratch.mit.edu/get_image/user/${t}_500x500.png`:d.includes("galleries")&&(d=`//uploads.scratch.mit.edu/get_image/gallery/${t}_500x500.png`)}const g=d.match(i)
g&&(r=g[2],s=g[3],[r,s]=e(r,s,o),[r,s]=a(r,s),g&&(l=g[1].replace("cdn2","uploads")+r+"x"+s+g[4]),c(o,l))}}