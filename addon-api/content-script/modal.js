export const createEditorModal=(e,t,{isOpen:o=0}={})=>{const c=Object.assign(document.createElement("div"),{className:e.scratchClass("modal_modal-overlay"),dir:e.direction})
c.style.display=o?"":"none",document.body.appendChild(c)
const n=Object.assign(document.createElement("div"),{className:e.scratchClass("modal_modal-content")})
n.addEventListener("click",(e=>e.stopPropagation())),c.appendChild(n)
const a=Object.assign(document.createElement("div"),{className:e.scratchClass("modal_header")})
n.appendChild(a),a.appendChild(Object.assign(document.createElement("div"),{className:e.scratchClass("modal_header-item","modal_header-item-title"),innerText:t}))
const s=Object.assign(document.createElement("div"),{className:e.scratchClass("modal_header-item","modal_header-item-close")})
a.appendChild(s)
const r=Object.assign(document.createElement("div"),{className:e.scratchClass("close-button_close-button","close-button_large")})
s.appendChild(r),r.appendChild(Object.assign(document.createElement("img"),{className:e.scratchClass("close-button_close-icon"),src:"/static/assets/cb666b99d3528f91b52f985dfb102afa.svg"}))
const d=Object.assign(document.createElement("div"),{className:"sa-editor-modal-content",style:"\n      background-color: var(--editorDarkMode-accent, white);\n      color: var(--editorDarkMode-accent-text, #575e75);\n    "})
return n.appendChild(d),{container:n,content:d,backdrop:c,closeButton:r,open(){c.style.display=""},close(){c.style.display="none"},remove:c.remove.bind(c)}}
export const createScratchWwwModal=(e,{isOpen:t=0,useSizesClass:o=1}={})=>{const c=Object.assign(document.createElement("div"),{className:"modal-overlay"})
c.style.display=t?"":"none",t&&document.body.classList.add("overflow-hidden"),document.body.appendChild(c)
const n=Object.assign(document.createElement("div"),{className:"modal-content",style:"\n      overflow: hidden;\n    "})
o&&n.classList.add("modal-sizes"),n.addEventListener("click",(e=>e.stopPropagation())),c.appendChild(n)
const a=Object.assign(document.createElement("div"),{className:"modal-content-close"})
n.appendChild(a),a.appendChild(Object.assign(document.createElement("img"),{className:"modal-content-close-img",src:"/svgs/modal/close-x.svg"}))
const s=Object.assign(document.createElement("div"),{className:"modal-header modal-title",style:"\n      height: 3rem;\n      box-sizing: border-box;\n      padding-top: 0.75rem;\n      background-color: var(--darkWww-navbar, #4d97ff);\n      box-shadow: 0 -1px 0 0 inset var(--darkWww-navbar-variant, #4280d7);\n      color: var(--darkWww-navbar-text, white);\n      text-align: center;\n      font-weight: bold;\n    ",innerText:e})
n.appendChild(s)
const r=Object.assign(document.createElement("div"),{className:"modal-inner-content"})
return n.appendChild(r),{container:n,content:r,backdrop:c,closeButton:a,open(){c.style.display="",document.body.classList.add("overflow-hidden")},close(){c.style.display="none",document.body.classList.remove("overflow-hidden")},remove(){c.remove(),document.body.classList.remove("overflow-hidden")}}}
export const createScratchr2Modal=(e,{isOpen:t=0}={})=>{const o=Object.assign(document.createElement("div"),{className:"modal-backdrop fade"})
o.classList.add(t?"in":"hide"),document.body.appendChild(o)
const c=Object.assign(document.createElement("div"),{className:"modal fade hide"})
document.body.appendChild(c)
const n=Object.assign(document.createElement("div"),{className:"modal-header"})
c.appendChild(n)
const a=Object.assign(document.createElement("span"),{className:"close",innerText:"×"})
n.appendChild(a),n.appendChild(Object.assign(document.createElement("h3"),{innerText:e}))
const s=Object.assign(document.createElement("div"),{className:"modal-body"})
c.appendChild(s)
const r=()=>{o.classList.remove("hide"),c.classList.remove("hide"),setTimeout((()=>{o.classList.add("in"),c.classList.add("in")}),300)},d=()=>{c.classList.remove("in"),setTimeout((()=>{c.classList.add("hide"),o.classList.remove("in"),setTimeout((()=>{o.classList.add("hide")}),300)}),300)}
return t&&r(),{container:c,content:s,backdrop:o,closeButton:a,open:r,close:d,remove(){d(),setTimeout((()=>{o.remove(),c.remove()}),900)}}}
const e=(e,t,{okButtonLabel:o,cancelButtonLabel:c}={})=>{const n=Object.assign(document.createElement("div"),{className:{editor:e.scratchClass("prompt_button-row"),"scratch-www":"action-buttons",scratchr2:"modal-footer"}[t]}),a=Object.assign(document.createElement("button"),{className:{"scratch-www":"button action-button close-button white"}[t]||"",innerText:c||e.scratchMessage({editor:"gui.prompt.cancel","scratch-www":"general.cancel",scratchr2:"Cancel"}[t])})
n.appendChild(a)
const s=Object.assign(document.createElement("button"),{className:{editor:e.scratchClass("prompt_ok-button"),"scratch-www":"button action-button submit-button"}[t],innerText:o||e.scratchMessage({editor:"gui.prompt.ok","scratch-www":"general.okay",scratchr2:"OK"}[t])})
return n.appendChild(s),{buttonRow:n,cancelButton:a,okButton:s}}
export const confirm=(t,o,c,{useEditorClasses:n=0,okButtonLabel:a,cancelButtonLabel:s}={})=>{const{remove:r,container:d,content:l,backdrop:i,closeButton:m}=t.createModal(o,{isOpen:1,useEditorClasses:n,useSizesClass:1}),u=null!==t.editorMode&&n?"editor":t.clientVersion
"editor"===u&&(d.classList.add(t.scratchClass("prompt_modal-content")),l.classList.add(t.scratchClass("prompt_body"))),l.appendChild(Object.assign(document.createElement("div"),{className:{editor:t.scratchClass("prompt_label")}[u]||"",style:{"scratch-www":"margin: .9375rem 0.8275rem 0 .8275rem"}[u]||"",innerText:c}))
const{buttonRow:b,cancelButton:w,okButton:p}=e(t,u,{okButtonLabel:a,cancelButtonLabel:s})
return"scratchr2"===u?d.appendChild(b):l.appendChild(b),p.focus(),new Promise((e=>{const t=()=>{r(),e(0)},o=()=>{r(),e(1)}
i.addEventListener("click",t),m.addEventListener("click",t),w.addEventListener("click",t),p.addEventListener("click",o),d.addEventListener("keydown",(e=>{"Enter"===e.key&&o(),"Escape"===e.key&&t()}))}))}
export const prompt=(t,o,c,n="",{useEditorClasses:a=0}={})=>{const{remove:s,container:r,content:d,backdrop:l,closeButton:i}=t.createModal(o,{isOpen:1,useEditorClasses:a,useSizesClass:1}),m=null!==t.editorMode&&a?"editor":t.clientVersion
"editor"===m&&(r.classList.add(t.scratchClass("prompt_modal-content")),d.classList.add(t.scratchClass("prompt_body"))),d.appendChild(Object.assign(document.createElement("div"),{className:{editor:t.scratchClass("prompt_label")}[m]||"",style:{"scratch-www":"margin: .9375rem 0.8275rem 1.125rem .8275rem"}[m]||"",innerText:c}))
const u=Object.assign(document.createElement("input"),{className:{editor:t.scratchClass("prompt_variable-name-text-input"),"scratch-www":"input"}[m]||"",style:{"scratch-www":"\n      width: calc(100% - 1.655rem);\n      margin: 0 0.8275rem;\n    ",scratchr2:"width: calc(100% - 10px)"}[m]||"",value:n})
d.appendChild(u),u.focus(),u.select()
const{buttonRow:b,cancelButton:w,okButton:p}=e(t,m)
return"scratchr2"===m?r.appendChild(b):d.appendChild(b),new Promise((e=>{const t=()=>{s(),e(null)},o=()=>{s(),e(u.value)}
l.addEventListener("click",t),i.addEventListener("click",t),w.addEventListener("click",t),p.addEventListener("click",o),r.addEventListener("keydown",(e=>{"Enter"===e.key&&o(),"Escape"===e.key&&t()}))}))}
