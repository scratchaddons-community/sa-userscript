import e from"../../libraries/common/cs/download-blob.js"
import t from"../rtl-list.js"
import o from"../../libraries/common/load-vue-components.js"
import s from"../../libraries/thirdparty/cs/fuse.esm.min.js"
import n from"./data/tags.js"
import i from"./data/addon-groups.js"
import r from"./data/categories.js"
import a from"./data/example-manifest.js"
import c from"./data/fuse-options.js"
import d from"../../libraries/common/global-theme.js"
import m from"../../libraries/common/minify-settings.js"
import chrome from"../../../libraries/common/chrome.js"
let vue,l;(async()=>{function g(){1100>window.innerWidth?(vue.smallMode=1,vue.categoryOpen=0,vue.switchPath="../../images/icons/switch.svg"):0!=vue.smallMode&&(vue.smallMode=0,vue.categoryOpen=1,vue.switchPath="../../images/icons/close.svg")}const{theme:h,setGlobalTheme:p}=await d()
await o(["webpages/settings/components/picker-component","webpages/settings/components/reset-dropdown","webpages/settings/components/addon-setting","webpages/settings/components/addon-tag","webpages/settings/components/addon-group-header","webpages/settings/components/addon-body","webpages/settings/components/category-selector","webpages/settings/components/modal","webpages/settings/components/previews/editor-dark-mode","webpages/settings/components/previews/palette"]),Vue.directive("click-outside",{priority:700,bind(){let e=this
this.event=function(t){e.vm.$emit(e.expression,t)},this.el.addEventListener("mousedown",this.stopProp),document.body.addEventListener("mousedown",this.event)},unbind(){this.el.removeEventListener("mousedown",this.stopProp),document.body.removeEventListener("mousedown",this.event)},stopProp(e){e.stopPropagation()}})
const u=["notifications"]
"undefined"!=typeof browser&&u.push("clipboardWrite")
let f=[]
const w=()=>chrome.permissions.getAll((({permissions:e})=>{f=e.filter((e=>u.includes(e)))}))
w(),chrome.permissions.onAdded?.addListener(w),chrome.permissions.onRemoved?.addListener(w)
const b=e=>(...t)=>new Promise((o=>e(...t,o)))
let y=null
const S=async()=>{const e=b(chrome.storage.sync.get.bind(chrome.storage.sync)),t=await e(["globalTheme","addonSettings","addonsEnabled"]),o={core:{lightTheme:t.globalTheme,version:chrome.runtime.getManifest().version_name},addons:{}}
for(const e of Object.keys(t.addonsEnabled))o.addons[e]={enabled:t.addonsEnabled[e],settings:t.addonSettings[e]||{}}
return JSON.stringify(o)}
vue=window.vue=new Vue({el:"body",data(){return{smallMode:0,theme:h,forceEnglishSetting:null,forceEnglishSettingInitial:null,switchPath:"../../images/icons/switch.svg",moreSettingsOpen:0,categoryOpen:1,loaded:0,searchLoaded:0,manifests:[],manifestsById:{},selectedCategory:"all",searchInput:"",searchInputReal:"",addonSettings:{},addonToEnable:null,showPopupModal:0,isIframe:0,addonGroups:i.filter((e=>e.fullscreenShow)),categories:r,searchMsg:this.msg("search"),browserLevelPermissions:u,grantedOptionalPermissions:f,addonListObjs:[],sidebarUrls:(()=>{const e=chrome.i18n.getUILanguage(),t=e.startsWith("en")?"":`${e.split("-")[0]}/`,o=`utm_source=userscript&utm_medium=settingspage&utm_campaign=v${chrome.runtime.getManifest().version}`
return{contributors:`https://scratchaddons.com/${t}credits?${o}`,feedback:`https://scratchaddons.com/${t}feedback/?ext_version=${chrome.runtime.getManifest().version_name}&${o}`,changelog:`https://scratchaddons.com/${t}changelog?${o}`}})()}},computed:{themePath(){return this.theme?"../../images/icons/moon.svg":"../../images/icons/theme.svg"},addonList(){if(!this.searchInput)return this.addonListObjs.forEach((e=>{e.matchesSearch="_iframeSearch"===e.group.id?0:1})),this.addonListObjs.sort(((e,t)=>e.naturalIndex-t.naturalIndex))
if(!l)return[]
const e=Object.values(this.addonListObjs.reduce(((e,t)=>((!e[t.manifest._addonId]||e[t.manifest._addonId]&&"featuredNew"!==t.group.id&&"new"!==t.group.id)&&(e[t.manifest._addonId]=t),e)),Object.create(null))),t=l.search(this.searchInput).sort(((e,t)=>.1>e.score^.1>t.score?.1>e.score?-1:1:t.item._enabled-e.item._enabled)).map((t=>e.find((e=>e.manifest._addonId===t.item._addonId))))
for(const o of e)o.matchesSearch=t.includes(o)
return e.sort(((e,o)=>t.indexOf(e)-t.indexOf(o)))},hasNoResults(){return!this.addonList.some((e=>e.matchesSearch&&e.matchesCategory))},version:()=>chrome.runtime.getManifest().version,versionName:()=>chrome.runtime.getManifest().version_name,addonAmt(){return 5*Math.floor(this.manifests.filter((e=>!e.tags.includes("easterEgg"))).length/5)+"+"},selectedCategoryName(){return this.categories.find((e=>e.id===this.selectedCategory))?.name}},methods:{openMoreSettings(){this.closePickers(),this.moreSettingsOpen=1,vue.smallMode&&vue.sidebarToggle()},sidebarToggle(){this.categoryOpen=!this.categoryOpen,vue.switchPath=this.categoryOpen?"../../images/icons/close.svg":"../../images/icons/switch.svg"},msg:(e,...t)=>chrome.i18n.getMessage(e,...t),direction:()=>t(chrome.i18n.getUILanguage()),openReview(){"undefined"!=typeof browser?window.open("https://addons.mozilla.org/en-US/firefox/addon/scratch-messaging-extension/reviews/"):window.open("https://chrome.google.com/webstore/detail/scratch-addons/fbeffbjdlemaoicjdapfpikkikjoneco/reviews")},clearSearch(){this.searchInputReal=""},setTheme(e){p(e),this.theme=e},stopPropagation(e){e.stopPropagation()},updateSettings(e,{wait:t=0,settingId:o=null}={}){const s=o&&this.addonSettings[e._addonId][o]
setTimeout((()=>{o&&this.addonSettings[e._addonId][o]!==s||(chrome.runtime.sendMessage({changeAddonSettings:{addonId:e._addonId,newSettings:this.addonSettings[e._addonId]}}),console.log("Updated",this.addonSettings[e._addonId]))}),t)},closePickers(e,t,{callCloseDropdowns:o=1}={}){this.$emit("close-pickers",t),o&&this.closeResetDropdowns()},closeResetDropdowns(e,t){this.$emit("close-reset-dropdowns",t)},exportSettings(){S().then((t=>{const o=new Blob([t],{type:"application/json"})
e("scratch-addons-settings.json",o)}))},viewSettings(){const e=window.open("about:blank")
S().then((t=>{const o=new Blob([t],{type:"text/plain"})
e.location.replace(URL.createObjectURL(o))}))},importSettings(){const e=Object.assign(document.createElement("input"),{hidden:1,type:"file",accept:"application/json"})
e.addEventListener("change",(async t=>{const o=e.files[0]
if(!o)return e.remove(),void alert(chrome.i18n.getMessage("fileNotSelected"))
const s=await o.text()
e.remove()
const n=document.getElementById("confirmImport")
try{await(async(e,t,o)=>{const s=JSON.parse(e),n=b(chrome.storage.sync.get.bind(chrome.storage.sync)),i=b(chrome.storage.sync.set.bind(chrome.storage.sync)),{addonSettings:r,addonsEnabled:a}=await n(["addonSettings","addonsEnabled"]),c={}
for(const e of Object.keys(s.addons)){const o=s.addons[e],n=t.find((t=>t._addonId===e))
if(!n)continue
const i=(n.permissions||[]).filter((e=>u.includes(e)))
o.enabled&&i.length?c[e]=i:a[e]=o.enabled,r[e]=Object.assign({},r[e],o.settings)}y&&o.removeEventListener("click",y,{once:1})
let d=null
const l=new Promise((e=>{d=e}))
return y=async()=>{if(y=null,Object.keys(c).length){const e=await b(chrome.permissions.request.bind(chrome.permissions))({permissions:Object.values(c).flat()})
Object.keys(c).forEach((t=>{a[t]=e}))}const e=chrome.runtime.getManifest().version_name.endsWith("-prerelease")
await i({globalTheme:!!s.core.lightTheme,addonsEnabled:a,addonSettings:m(r,e?null:t)}),d()},o.classList.remove("hidden-button"),o.addEventListener("click",y,{once:1}),l})(s,vue.manifests,n)}catch(t){return console.warn("Error when importing settings:",t),n.classList.add("hidden-button"),void alert(chrome.i18n.getMessage("importFailed"))}alert(chrome.i18n.getMessage("importSuccess")),chrome.runtime.reload()}),{once:1}),document.body.appendChild(e),e.click()},applyLanguageSettings(){alert(chrome.i18n.getMessage("importSuccess")),chrome.runtime.reload()},openFullSettings(){window.open(`${chrome.runtime.getURL("webpages/settings/index.html")}#addon-${this.addonToEnable&&this.addonToEnable._addonId}`),setTimeout((()=>window.parent.close()),100)},hidePopup(){document.querySelector(".popup").style.animation="closePopup 1.6s 1",document.querySelector(".popup").addEventListener("animationend",(()=>{this.showPopupModal=0}),{once:1})},groupShownCount(e){return"_iframeSearch"===e.id?-1:this.addonListObjs.filter((t=>t.group===e&&t.matchesSearch&&t.matchesCategory)).length},groupMarginAbove(e){const t=this.addonGroups.find((e=>this.groupShownCount(e)>0))
return e!==t}},events:{closesidebar(e){"toggle"!==e?.target.classList[0]&&this.categoryOpen&&this.smallMode&&this.sidebarToggle()}},watch:{searchInputReal(e){if(""===e)return this.searchInput=e
setTimeout((()=>{this.searchInputReal===e&&(this.searchInput=e)}),150)},selectedCategory(e){this.addonListObjs.forEach((t=>{t.matchesCategory=!("easterEgg"===t.manifest._categories[0]&&"easterEgg"!==e&&0==t.manifest._wasEverEnabled)&&("all"===e||t.manifest._categories.includes(e))})),"forums"===e&&(this.addonGroups.find((e=>"forums"===e.id)).expanded=1)},forceEnglishSetting(e,t){null!==t&&chrome.storage.local.set({forceEnglish:this.forceEnglishSetting})}},ready(){"undefined"!=typeof browser&&setTimeout((()=>document.getElementById("searchBox")?.focus()),0)
const e={group:i[0],manifest:JSON.parse(JSON.stringify(a)),matchesSearch:1,matchesCategory:1,naturalIndex:-1,headerAbove:0,footerBelow:0,duplicate:0}
setTimeout((()=>{this.loaded||(this.addonListObjs=Array(25).fill("").map((()=>JSON.parse(JSON.stringify(e)))))}),0),chrome.storage.local.get("forceEnglish",(({forceEnglish:e})=>{this.forceEnglishSettingInitial=e,this.forceEnglishSetting=e})),window.addEventListener("hashchange",(()=>{const e=location.hash.replace(/^#addon-/,""),t=this.addonGroups.find((t=>t.addonIds.includes(e)))
if(!t)return
const o=this.manifestsById[e]
t.expanded=1,this.selectedCategory=o?.tags.includes("easterEgg")?"easterEgg":"all",this.clearSearch(),setTimeout((()=>document.getElementById("addon-"+e)?.scrollIntoView()),0)}),{capture:0})}}),chrome.runtime.sendMessage("getSettingsInfo",(async({manifests:e,addonsEnabled:t,addonSettings:o})=>{vue.addonSettings=o
const i=[]
for(const{manifest:o,addonId:s}of e){o._categories=[],o._categories[0]=o.tags.includes("popup")?"popup":o.tags.includes("easterEgg")?"easterEgg":o.tags.includes("theme")?"theme":o.tags.includes("community")?"community":"editor"
const e=e=>{let t=0
for(const s of e){const e="object"==typeof s?s.tag:s,n="object"==typeof s?s.category:e
o.tags.includes(e)&&(o._categories.push(n),t++)}return t}
if("theme"===o._categories[0]?e([{tag:"editor",category:"themesForEditor"}])||e([{tag:"community",category:"themesForWebsite"}]):"editor"===o._categories[0]?0===e(["codeEditor","costumeEditor","projectPlayer"])&&o._categories.push("editorOthers"):"community"===o._categories[0]&&0===e(["profiles","projectPage","forums"])&&o._categories.push("communityOthers"),"cat-blocks"===s&&o._categories.push("easterEgg"),o._icon=o._categories[0],o._enabled=t[s],o._wasEverEnabled=o._enabled,o._addonId=s,o._groups=[],o.versionAdded){const[e,t,s]=vue.version.split("."),[n,i,r]=o.versionAdded.split(".")
e===n&&t===i&&(o.tags.push("new"),o._groups.push(o.tags.includes("recommended")||o.tags.includes("featured")?"featuredNew":"new"))}if(o.latestUpdate){const[e,t,s]=vue.version.split("."),[n,i,r]=o.latestUpdate.version.split(".")
e===n&&t===i&&(o.tags.push(o.latestUpdate.newSettings?.length?"updatedWithSettings":"updated"),o._groups.push(o.latestUpdate.isMajor?"featuredNew":"new"))}const r=n.map((e=>e.matchName))
o.tags.sort(((e,t)=>r.indexOf(e)-r.indexOf(t))),o._enabled?o._groups.push("enabled"):o.tags.includes("recommended")?o._groups.push("recommended"):o.tags.includes("featured")?o._groups.push("featured"):o.tags.includes("beta")||o.tags.includes("danger")?o._groups.push("beta"):o.tags.includes("forums")?o._groups.push("forums"):o._groups.push("others")
for(const e of o._groups)vue.addonGroups.find((t=>t.id===e))?.addonIds.push(o._addonId)
i.push(JSON.parse(JSON.stringify(o)))}for(const{manifest:t}of e)Vue.set(vue.manifestsById,t._addonId,t)
vue.manifests=e.map((({manifest:e})=>e)),l=new s(i,c)
const r=(e,t,o)=>{const s=Array.isArray(e)?e:[e],n=s.some((e=>t.tags.includes(e))),i=s.some((e=>o.tags.includes(e)))
return n^i?i-n:n&&i?t.name.localeCompare(o.name):null},a=[["danger","beta"],"editor","community","popup"]
vue.addonGroups.forEach((e=>{e.addonIds=e.addonIds.map((e=>vue.manifestsById[e])).sort(((t,o)=>{for(const s of e.customOrder||a){const e=r(s,t,o)
if(null!==e)return e}return 0})).map((e=>e._addonId))}))
let d=0
for(const e of vue.addonGroups)e.addonIds.forEach(((t,o)=>{const s=vue.addonListObjs.find((e=>"example"===e.manifest._addonId)),n=s||{}
n.duplicate=Boolean(vue.addonListObjs.find((e=>e.manifest._addonId===t))),n.manifest=vue.manifestsById[t],n.group=e,n.matchesSearch=0,n.matchesCategory=!("easterEgg"===n.manifest._categories[0]&&0==n.manifest._enabled),n.naturalIndex=d,n.headerAbove=0===o,n.footerBelow=o===e.addonIds.length-1,s||vue.addonListObjs.push(n),d++}))
vue.addonListObjs=vue.addonListObjs.filter((e=>"example"!==e.manifest._addonId)),vue.loaded=1,setTimeout((()=>{const e=window.location.hash
if(e.startsWith("#addon-")){const t=e.substring(7),o=vue.addonGroups.find((e=>e.addonIds.includes(t)))
if(!o)return
o.expanded=1,vue.selectedCategory=vue.manifestsById[t]?.tags.includes("easterEgg")?"easterEgg":"all",setTimeout((()=>{const e=document.getElementById("addon-"+t)
e&&(e.scrollIntoView(),e.classList.add("addon-blink"),setTimeout((()=>e.classList.remove("addon-blink")),2001))}),0)}}),0)
let m=""
e.forEach((({addonId:e})=>m+=1==t[e]?"1":"0"))
const g=BigInt(`0b${m}`).toString(36)
vue.sidebarUrls.feedback+=`#_${g}`})),window.addEventListener("keydown",(function(e){e.ctrlKey&&"f"===e.key?(e.preventDefault(),document.querySelector("#searchBox").focus()):"Escape"===e.key&&document.activeElement===document.querySelector("#searchBox")&&(e.preventDefault(),vue.searchInputReal="")})),document.title=chrome.i18n.getMessage("settingsTitle"),window.onresize=g,g()
let j=0
const E=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","KeyB","KeyA"]
document.addEventListener("keydown",(e=>{j=e.code===E[j]?j+1:0,j===E.length&&(vue.selectedCategory="easterEgg",setTimeout((()=>vue.searchInputReal=""),0))})),chrome.runtime.sendMessage("checkPermissions")})()
