function t(t){const e=[...document.querySelectorAll(".scratch-addons-style")],n=e.filter((e=>e.getAttribute("data-addon-id")===t.addonId)),o=(t,n)=>{const o=e.find((t=>Number(t.getAttribute("data-addon-index")>n)))
o?document.documentElement.insertBefore(t,o):document.body?document.documentElement.insertBefore(t,document.body):document.documentElement.appendChild(t)}
t.styles.length>100&&c.warn("Please increase MAX_USERSTYLES_PER_ADDON in content-scripts/cs.js, otherwise style priority is not guaranteed! Has",t.styles.length,"styles, current max is",100)
for(let e=0;t.styles.length>e;e++){const s=t.styles[e],c=100*t.index+s.index
if(t.injectAsStyleElt){const e=n.find((t=>t.dataset.styleHref===s.href))
if(e){e.disabled=0
continue}const a=document.createElement("style")
a.classList.add("scratch-addons-style"),a.setAttribute("data-addon-id",t.addonId),a.setAttribute("data-addon-index",c),a.setAttribute("data-style-href",s.href),a.textContent=s.text,o(a,c)}else{const e=n.find((t=>t.href===s.href))
if(e){e.disabled=0
continue}const a=document.createElement("link")
a.rel="stylesheet",a.setAttribute("data-addon-id",t.addonId),a.setAttribute("data-addon-index",c),a.classList.add("scratch-addons-style"),a.href=s.href,o(a,c)}}}function e(t){document.querySelectorAll(`[data-addon-id='${t}']`).forEach((t=>t.disabled=1))}function n(t,e){const n=t=>t.replace(/-([a-z])/g,(t=>t[1].toUpperCase())),o=(t,e,o)=>{const s=`--${n(t)}-${e}`
document.documentElement.style.setProperty(s,o),_.push(s)},s=(t,e)=>document.documentElement.style.removeProperty(`--${n(t)}-${e}`)
_.forEach((t=>document.documentElement.style.removeProperty(t))),_.length=0
const c=e.map((t=>t.addonId))
for(const e of c)for(const s of Object.keys(t[e]||{})){const c=t[e][s]
"string"!=typeof c&&"number"!=typeof c||o(e,n(s),t[e][s])}const a=(e,n)=>{if("object"!=typeof n||null===n)return n
let o
switch(n.type){case"settingValue":return t[e][n.settingId]
case"ternary":return a(e,n.source)?a(e,n.true):a(e,n.false)
case"map":return n.options[a(e,n.source)]
case"textColor":{o=a(e,n.source)
let t=a(e,n.black),s=a(e,n.white),c=a(e,n.threshold)
return A.textColor(o,t,s,c)}case"alphaThreshold":{o=a(e,n.source)
let{a:t}=A.parseHex(o),s=a(e,n.threshold)||.5
return a(e,s>t?n.transparent:n.opaque)}case"multiply":return o=a(e,n.source),A.multiply(o,n)
case"brighten":return o=a(e,n.source),A.brighten(o,n)
case"alphaBlend":{let t=a(e,n.opaqueSource),o=a(e,n.transparentSource)
return A.alphaBlend(t,o)}case"makeHsv":{let t=a(e,n.h),o=a(e,n.s),s=a(e,n.v)
return A.makeHsv(t,o,s)}case"recolorFilter":return o=a(e,n.source),A.recolorFilter(o)}}
for(const t of e){const e=t.addonId
for(const n of t.cssVariables){const t=n.name,c=a(e,n.value)
null===c&&n.dropNull?s(e,t):o(e,t,c)}}}function o(t){let e=document.querySelector("form#post > label")
if(e){var n=document.querySelector("form#post > label > ul")
if(!n){let t=e.querySelector("strong");(n=document.createElement("ul")).classList.add("errorlist"),e.insertBefore(n,t)}let o=document.createElement("li"),s=document.createElement("a")
const c=chrome.i18n.getUILanguage(),a=c.startsWith("en")?"":`${c.split("-")[0]}/`,r=`utm_source=userscript&utm_medium=forumwarning&utm_campaign=v${chrome.runtime.getManifest().version}`
s.href=`https://scratchaddons.com/${a}feedback/?ext_version=${chrome.runtime.getManifest().version}&${r}`,s.target="_blank",s.innerText=chrome.i18n.getMessage("reportItHere")
let d=document.createElement("span")
d.innerHTML=C(chrome.i18n.getMessage(t,l)).replace("$1",s.outerHTML),o.appendChild(d),n.appendChild(o)}}import chrome from"../libraries/common/chrome.js"
import"../../background/declare-scratchaddons-object.js"
import"../../background/load-addon-manifests.js"
import"../../background/get-addon-settings.js"
import"../background/get-userscripts.js"
try{if("https://scratch.mit.edu"!==window.parent.location.origin)throw"Scratch Addons: not first party iframe"}catch{throw"Scratch Addons: not first party iframe"}if(document.documentElement instanceof SVGElement)throw"Top-level SVG document (this can be ignored)"
const _realConsole=window.console,s=(t="[cs]")=>[`%cSA%c${t}%c`,"background:  #ff7b26; color: white; border-radius: 0.5rem 0 0 0.5rem; padding: 0 0.5rem","background: #222; color: white; border-radius: 0 0.5rem 0.5rem 0; padding: 0 0.5rem; font-weight: bold",""],c={..._realConsole,log:_realConsole.log.bind(_realConsole,...s()),warn:_realConsole.warn.bind(_realConsole,...s()),error:_realConsole.error.bind(_realConsole,...s())}
let a,r=0
const d=t=>{"backgroundListenerReady"!==t||r||chrome.runtime.sendMessage({contentScriptReady:{url:location.href}},i)}
chrome.runtime.onMessage.addListener(d)
const i=o=>{o&&!r&&(c.log("[Message from background]",o),chrome.runtime.onMessage.removeListener(d),null===o.httpStatusCode||"2"===String(o.httpStatusCode)[0]?(async function({globalState:o,addonsWithUserscripts:s,addonsWithUserstyles:a}){const r=new Set(s.map((t=>t.addonId))),d=new Set
p=o,n(p.addonSettings,a),(document.head?Promise.resolve():new Promise((t=>{const e=new MutationObserver((()=>{document.head&&(t(),e.disconnect())}))
e.observe(document.documentElement,{subtree:1,childList:1})}))).then((()=>function(e){for(const n of e||[])t(n)}(a))),chrome.runtime.onMessage.addListener((o=>{if(o.dynamicAddonEnabled){const{scripts:e,userstyles:c,cssVariables:i,addonId:l,injectAsStyleElt:u,index:f,dynamicEnable:g,dynamicDisable:h,partial:b}=o.dynamicAddonEnabled
if(d.delete(l),t({styles:c,addonId:l,injectAsStyleElt:u,index:f}),b){const t=a.find((t=>t.addonId===l))
t?t.styles=c:a.push({styles:c,cssVariables:i,addonId:l,injectAsStyleElt:u,index:f})}else{if(r.has(l)){if(!h)return
m.fireEvent({name:"reenabled",addonId:l,target:"self"})}else{if(!g)return
m&&(m.runAddonUserscripts({addonId:l,scripts:e,enabledLate:1}),r.add(l))}s.push({addonId:l,scripts:e}),a.push({styles:c,cssVariables:i,addonId:l,injectAsStyleElt:u,index:f})}n(p.addonSettings,a)}else if(o.dynamicAddonDisable){const{addonId:t,partialDynamicDisabledStyles:c}=o.dynamicAddonDisable
if(d.has(t))return
const i=s.findIndex((e=>e.addonId===t)),l=a.findIndex((e=>e.addonId===t))
if(m){if(c){if(function(t,e){document.querySelectorAll(`[data-addon-id='${t}']`).forEach((t=>{e.includes(t.href||t.dataset.styleHref)&&(t.disabled=1)}))}(t,c),l>-1){const t=a[l]
if(t.styles=t.styles.filter((t=>!c.includes(t.href))),t.styles.length||i>-1)return}}else e(t)
d.add(t),m.fireEvent({name:"disabled",addonId:t,target:"self"})}else r.delete(t);-1!==i&&s.splice(i,1),-1!==l&&a.splice(l,1),n(p.addonSettings,a)}else if(o.updateUserstylesSettingsChange){const{userstyles:s,addonId:r,injectAsStyleElt:i,index:l,dynamicEnable:u,dynamicDisable:m,addonSettings:f,cssVariables:g}=o.updateUserstylesSettingsChange,h=a.findIndex((t=>t.addonId===r))
if(e(r),h>-1&&0===s.length&&m)return a.splice(h,1),n({...p.addonSettings,[r]:f},a),void c.log(`Dynamically disabling all userstyles of ${r} due to settings change`)
h>-1&&(m||u)&&(a[h].styles=s),-1===h&&s.length>0&&u&&(c.log(`Dynamically enabling userstyle addon ${r} due to settings change`),a.push({styles:s,cssVariables:g,addonId:r,injectAsStyleElt:i,index:l}),d.delete(r),n({...p.addonSettings,[r]:f},a)),t({styles:s,addonId:r,injectAsStyleElt:i,index:l})}})),m||await new Promise((t=>{k.addEventListener("load",t)})),m.globalState=p,m.l10njson=function(){const t=/scratchlanguage=([\w-]+)/.exec(document.cookie)?.[1]||"en",e=[chrome.runtime.getURL(`addons-l10n/${t}`)]
"pt"===t&&e.push(chrome.runtime.getURL("addons-l10n/pt-br")),t.includes("-")&&e.push(chrome.runtime.getURL(`addons-l10n/${t.split("-")[0]}`))
const n=chrome.runtime.getURL("addons-l10n/en")
return e.includes(n)||e.push(n),e}(),m.addonsWithUserscripts=s,m.dataReady=1,chrome.runtime.onMessage.addListener(((t,e,o)=>{t.newGlobalState?(m.globalState=t.newGlobalState,p=t.newGlobalState,n(t.newGlobalState.addonSettings,a)):t.fireEvent?m.fireEvent(t.fireEvent):"getRunningAddons"===t?o({userscripts:s.map((t=>t.addonId)),userstyles:a.map((t=>t.addonId)),disabledDynamicAddons:Array.from(d)}):"refetchSession"===t&&m.refetchSession()}))}(o),r=1):(a=`https://scratch.mit.edu/${o.httpStatusCode}/`,c.log(`Status code was not 2xx, replacing URL to ${a}`),chrome.runtime.sendMessage({contentScriptReady:{url:a}},i)))}
chrome.runtime.sendMessage({contentScriptReady:{url:location.href}},i)
const l=["$1","$2","$3","$4","$5","$6","$7","$8","$9"],u=t=>(...e)=>new Promise((n=>t(...e,n)))
let m=null,p=null
const f=document.createElement("div")
f.id="scratchaddons-iframes"
const g=document.createElement("iframe")
g.id="scratchaddons-iframe-1",g.style.display="none"
const h=g.cloneNode()
h.id="scratchaddons-iframe-2"
const b=g.cloneNode()
b.id="scratchaddons-iframe-3"
const y=g.cloneNode()
y.id="scratchaddons-iframe-4",f.appendChild(g),f.appendChild(h),f.appendChild(b),f.appendChild(y),document.documentElement.appendChild(f)
const w=new EventTarget,x={_url:location.href,get url(){return this._url},set url(t){this._url=t,w.dispatchEvent(new CustomEvent("change",{detail:{newUrl:t}}))},copyImage:t=>new Promise(((e,n)=>{chrome.runtime.sendMessage({clipboardDataURL:t}).then((()=>{e()}),(t=>{n(t.toString())}))})),getEnabledAddons:t=>new Promise((e=>{chrome.runtime.sendMessage({getEnabledAddons:{tag:t}},(t=>e(t)))}))}
Comlink.expose(x,Comlink.windowEndpoint(g.contentWindow,h.contentWindow))
const j=document.createElement("script")
j.src=chrome.runtime.getURL("libraries/thirdparty/cs/comlink.js"),document.documentElement.appendChild(j)
const k=document.createElement("script")
k.type="module",k.src=chrome.runtime.getURL("content-scripts/inject/module.js"),(async()=>{await new Promise((t=>{k.addEventListener("load",t)})),m=Comlink.wrap(Comlink.windowEndpoint(b.contentWindow,y.contentWindow))})(),document.documentElement.appendChild(k)
let S=location.href,v=new URL(S).pathname.substring(1)
"/"!==v[v.length-1]&&(v+="/")
const O=v.split("/")
if("scratch-addons-extension"===O[0]&&"settings"===O[1]){let t=chrome.runtime.getURL(`webpages/settings/index.html${window.location.search}`)
location.hash&&(t+=location.hash),chrome.runtime.sendMessage({replaceTabWithUrl:t})}"discuss/3/topic/add/"===v?window.addEventListener("load",(()=>o("forumWarning"))):v.startsWith("discuss/topic/")&&window.addEventListener("load",(()=>{document.querySelector('div.linkst > ul > li > a[href="/discuss/18/"]')&&o("forumWarningGeneral")})),chrome.runtime.onMessage.addListener(((t,e,n)=>{c.log("[Message from background]",t),"getInitialUrl"===t&&n(a||S)}))
const A=__scratchAddonsTextColor,_=[],C=t=>t.replace(/([<>'"&])/g,((t,e)=>`&#${e.charCodeAt(0)};`))
if(location.pathname.startsWith("/discuss/")){const t=()=>{document.querySelectorAll("pre.blocks").forEach((t=>{t.setAttribute("data-original",t.innerText)}))}
"loading"!==document.readyState?setTimeout(t,0):window.addEventListener("DOMContentLoaded",t,{once:1})}const E=async()=>{const t=chrome.runtime.getManifest().version,[e,n,o]=t.split("."),s=`${e}.${n}`,a=await u(chrome.storage.local.get.bind(chrome.storage.local))(["bannerSettings"]);(!a||!a.bannerSettings||a.bannerSettings.lastShown!==s||"#sa-update-notif"===location.hash)&&(c.log("Banner shown."),await u(chrome.storage.local.set.bind(chrome.storage.local))({bannerSettings:Object.assign({},a.bannerSettings,{lastShown:s})}),(()=>{const t=()=>document.createElement("br"),e=document.createElement("div"),n=Object.assign(document.createElement("div"),{id:"sa-notification",style:'\n    position: fixed;\n    bottom: 20px;\n    right: 20px;\n    width: 700px;\n    max-height: 270px;\n    display: flex;\n    align-items: center;\n    padding: 10px;\n    border-radius: 10px;\n    background-color: #222;\n    color: white;\n    z-index: 99999;\n    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n    text-shadow: none;\n    box-shadow: 0 0 20px 0px #0000009e;\n    line-height: 1em;'}),o=Object.assign(document.createElement("a"),{href:"https://www.youtube.com/watch?v=e_70jvFOmfI",target:"_blank",rel:"noopener",referrerPolicy:"strict-origin-when-cross-origin"}),s=Object.assign(document.createElement("img"),{src:chrome.runtime.getURL("/images/cs/yt-thumbnail.jpg"),style:"height: 100px; border-radius: 5px; padding: 20px"}),c=Object.assign(document.createElement("div"),{id:"sa-notification-text",style:"margin: 12px;"}),a=Object.assign(document.createElement("span"),{style:"font-size: 18px; line-height: 24px; display: inline-block; margin-bottom: 12px;",textContent:chrome.i18n.getMessage("extensionUpdate")}),r=Object.assign(document.createElement("img"),{style:"\n    float: right;\n    cursor: pointer;\n    width: 24px;",title:chrome.i18n.getMessage("close"),src:chrome.runtime.getURL("../images/cs/close.svg")})
r.addEventListener("click",(()=>n.remove()),{once:1})
const d="display: block; font-size: 14px; color: white !important;",i=Object.assign(document.createElement("span"),{style:d+"font-weight: bold;",textContent:chrome.i18n.getMessage("extensionHasUpdated",l).replace(/\$(\d+)/g,((t,e)=>[chrome.runtime.getManifest().version][Number(e)-1]))}),u=Object.assign(document.createElement("span"),{style:d,innerHTML:C(chrome.i18n.getMessage("extensionUpdateInfo1_v1_29",l)).replace(/\$(\d+)/g,((t,e)=>[Object.assign(document.createElement("a"),{href:"https://scratch.mit.edu/scratch-addons-extension/settings?source=updatenotif",target:"_blank",textContent:chrome.i18n.getMessage("scratchAddonsSettings")}).outerHTML][Number(e)-1]))}),m=Object.assign(document.createElement("span"),{style:d,textContent:chrome.i18n.getMessage("extensionUpdateInfo2_v1_29")}),p=Object.assign(document.createElement("span"),{style:d}),f=chrome.i18n.getUILanguage(),g=f.startsWith("en")?"":`${f.split("-")[0]}/`,h=`utm_source=extension&utm_medium=updatenotification&utm_campaign=v${chrome.runtime.getManifest().version}`,b=Object.assign(document.createElement("a"),{href:`https://scratchaddons.com/${g}changelog?${h}`,target:"_blank",textContent:chrome.i18n.getMessage("notifChangelog")}),y=Object.assign(document.createElement("a"),{href:`https://scratchaddons.com/${g}feedback/?ext_version=${chrome.runtime.getManifest().version}&${h}`,target:"_blank",textContent:chrome.i18n.getMessage("feedback")}),w=Object.assign(document.createElement("a"),{href:"https://scratchaddons.com/translate",target:"_blank",textContent:chrome.i18n.getMessage("translate")}),x=Object.assign(document.createElement("small"),{textContent:chrome.i18n.getMessage("notAffiliated")})
p.appendChild(b),p.appendChild(document.createTextNode(" | ")),p.appendChild(y),p.appendChild(document.createTextNode(" | ")),p.appendChild(w),p.appendChild(t()),p.appendChild(x),c.appendChild(a),c.appendChild(r),c.appendChild(t()),c.appendChild(i),c.appendChild(t()),c.appendChild(u),c.appendChild(t()),c.appendChild(m),c.appendChild(t()),c.appendChild(p),o.appendChild(s),n.appendChild(o),n.appendChild(c),e.appendChild(n),document.body.appendChild(e)})())}
"loading"!==document.readyState?E():window.addEventListener("DOMContentLoaded",E,{once:1})
const I="users"===O[0]&&""===O[2],P="studios"===O[0],D="projects"===O[0]
if(I||P||D){const t=t=>{const e=t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"").toLowerCase().replace(/[^a-z /]+/g,"")
return/scratch[ ]?add[ ]?ons/.test(e)},e=document.createElement("a")
e.href="https://scratch.mit.edu/discuss/topic/284272/",e.target="_blank",e.innerText=chrome.i18n.getMessage("captureCommentPolicy"),Object.assign(e.style,{textDecoration:"underline",color:"white"})
const n=C(chrome.i18n.getMessage("captureCommentError",l)).replace("$1",e.outerHTML),o=chrome.i18n.getMessage("captureCommentPostAnyway"),s=chrome.i18n.getMessage("captureCommentConfirm")
window.addEventListener("load",(()=>{if(I)window.addEventListener("click",(e=>{const c=e.composedPath()
if(c[1]&&c[1]!==document&&"post"===c[1].getAttribute("data-control")&&c[1].hasAttribute("data-commentee-id")){const a=c[3]
if("FORM"!==a.tagName)return
if(a.hasAttribute("data-sa-send-anyway"))return void a.removeAttribute("data-sa-send-anyway")
const r=a.querySelector("textarea[name=content]")
if(!r)return
if(t(r.value)){e.stopPropagation(),e.preventDefault(),a.querySelector("[data-control=error] .text").innerHTML=n+" "
const t=document.createElement("a")
t.onclick=()=>{confirm(s)&&(a.setAttribute("data-sa-send-anyway",""),a.querySelector("[data-control=post]").click())},t.textContent=o,Object.assign(t.style,{textDecoration:"underline",color:"white"}),a.querySelector("[data-control=error] .text").appendChild(t),a.querySelector(".control-group").classList.add("error")}}}),{capture:1})
else if(D||P){let e
const c=()=>document.querySelector(".comments-container, .studio-compose-container")?Promise.resolve():new Promise((t=>{e=new MutationObserver((()=>{document.querySelector(".comments-container, .studio-compose-container")&&(t(),e.disconnect())})),e.observe(document.documentElement,{childList:1,subtree:1})})),a=()=>{const t=location.pathname.toLowerCase().split("/").filter(Boolean)
return t[0]&&"projects"===t[0]?t.includes("editor")?"editor":t.includes("fullscreen")?"fullscreen":t.includes("embed")?"embed":"projectpage":null},r=()=>document.querySelector(".comments-container, .studio-compose-container").addEventListener("click",(e=>{const c=e.composedPath(),a="SPAN"===c[0].tagName?c[1]:c[0]
if(!a)return
if("BUTTON"!==a.tagName)return
if(!a.classList.contains("compose-post"))return
const r="SPAN"===c[0].tagName?c[3]:c[2]
if(!r)return
if("FORM"!==r.tagName)return
if(!r.classList.contains("full-width-form"))return
if(r.parentNode.querySelector(".sa-compose-error-row")?.remove(),r.hasAttribute("data-sa-send-anyway"))return void r.removeAttribute("data-sa-send-anyway")
const d=r.querySelector("textarea[name=compose-comment]")
if(d&&t(d.value)){e.stopPropagation()
const t=document.createElement("div")
t.className="flex-row compose-error-row sa-compose-error-row"
const c=document.createElement("div")
c.className="compose-error-tip"
const i=document.createElement("span")
i.innerHTML=n+" "
const l=document.createElement("a")
l.onclick=()=>{confirm(s)&&(r.setAttribute("data-sa-send-anyway",""),a.click())},l.textContent=o,c.appendChild(i),c.appendChild(l),t.appendChild(c),r.parentNode.prepend(t),d.addEventListener("input",(()=>{t.remove()}),{once:1}),r.querySelector(".compose-cancel").addEventListener("click",(()=>{t.remove()}),{once:1})}}),{capture:1}),d=async()=>{P&&"comments"===location.pathname.split("/")[3]||D&&"projectpage"===a()?(await c(),r()):e?.disconnect()}
d(),w.addEventListener("change",(()=>d()))}}))}