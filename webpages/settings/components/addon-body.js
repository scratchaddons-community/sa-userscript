import chrome from"../../../libraries/common/chrome.js"
export default async function({template:t}){const e=Vue.extend({props:["addon","groupId","groupExpanded","visible"],template:t,data(){return{isIframe:0,expanded:this.getDefaultExpanded(),everExpanded:this.getDefaultExpanded(),hoveredSettingId:null,highlightedSettingId:null}},computed:{shouldShow(){return this.visible&&(""===this.$root.searchInput?this.groupExpanded:1)},addonIconSrc(){return`../../images/icons/${{editor:"puzzle",community:"web",theme:"brush",easterEgg:"egg-easter",popup:"popup"}[this.addon._icon]}.svg`},addonSettings(){return this.$root.addonSettings[this.addon._addonId]},showUpdateNotice(){if(!this.addon.latestUpdate||!this.addon.latestUpdate.temporaryNotice)return 0
const[t,e,s]=this.$root.version.split("."),[i,o,h]=this.addon.latestUpdate.version.split(".")
return t===i&&e===o}},methods:{getDefaultExpanded(){return"enabled"===this.groupId},devShowAddonIds(t){this.$root.versionName.endsWith("-prerelease")&&t.ctrlKey&&(t.stopPropagation(),Vue.set(this.addon,"_displayedAddonId",this.addon._addonId))},loadPreset(t){if(window.confirm(chrome.i18n.getMessage("confirmPreset"))){for(const e of Object.keys(t.values))this.addonSettings[e]=t.values[e]
this.$root.updateSettings(this.addon),console.log(`Loaded preset ${t.id} for ${this.addon._addonId}`)}},loadDefaults(){if(window.confirm(chrome.i18n.getMessage("confirmReset"))){for(const t of this.addon.settings)this.addonSettings[t.id]=JSON.parse(JSON.stringify(t.default))
this.$root.updateSettings(this.addon),console.log(`Loaded default values for ${this.addon._addonId}`)}},toggleAddonRequest(t){const e=()=>{t.preventDefault()
const e=!this.addon._enabled
this.addon._wasEverEnabled=this.addon._enabled||e,this.addon._enabled=e,this.expanded=t.shiftKey?0:e,chrome.runtime.sendMessage({changeEnabledState:{addonId:this.addon._addonId,newState:e}}),this.$emit("toggle-addon-request",e)},s=(this.addon.permissions||[]).filter((t=>this.$root.browserLevelPermissions.includes(t)));(this.addon._enabled||!this.addon.tags.includes("danger")||confirm(chrome.i18n.getMessage("dangerWarning",[this.addon.name])))&&(!this.addon._enabled&&s.length&&0==s.every((t=>this.$root.grantedOptionalPermissions.includes(t)))?chrome.permissions.request({permissions:s},(t=>{t&&(console.log("Permissions granted!"),e())})):e())},highlightSetting(t){this.highlightedSettingId=t},msg(...t){return this.$root.msg(...t)}},watch:{groupId(t){this.expanded=this.getDefaultExpanded()},searchInput(t){this.expanded=""===t?this.getDefaultExpanded():0},expanded(t){1==t&&(this.everExpanded=1)}},ready(){const t=()=>{location.hash.replace(/^#addon-/,"")===this.addon._addonId&&(this.expanded=1)}
window.addEventListener("hashchange",t,{capture:0}),setTimeout(t,0)}})
Vue.component("addon-body",e)}