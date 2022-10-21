import chrome from"../../libraries/common/chrome.js"
import e from"../../libraries/common/global-theme.js"
e()
const vue=new Vue({el:"body",data:{libraries:[]},methods:{msg:(e,...o)=>chrome.i18n.getMessage(e,...o)}})
chrome.runtime.sendMessage("getLibraryInfo",(libraryLicenses=>{const licenseNameToText={},e=new URL(location.href).searchParams.get("libraries")
if("string"!=typeof e)return
const o=e.split(",")
console.log(libraryLicenses,o)
for(const e of o){const o=libraryLicenses[e]
o&&({}.hasOwnProperty.call(licenseNameToText,o)?vue.libraries=[...vue.libraries,{name:e,license:licenseNameToText[o]}]:chrome.runtime.sendMessage({licenseName:o},(({licenseText:n})=>{licenseNameToText[o]=n,vue.libraries=[...vue.libraries,{name:e,license:n}]})))}})),document.title=chrome.i18n.getMessage("licensesTitle")
