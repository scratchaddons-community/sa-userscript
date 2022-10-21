import chrome from"../../../libraries/common/chrome.js"
import t from"../data/tags.js"
export default async function({template:o}){const a=Vue.extend({props:["tag"],template:o,data:()=>({}),computed:{tagInfo(){return t.find((t=>t.matchName===this.tag))},shouldShow(){return this.tagInfo&&(!this.tagInfo.addonTabShow||this.tagInfo.addonTabShow[this.$root.selectedCategory])},tagName(){return chrome.i18n.getMessage(this.tagInfo.name)},tagTooltip(){return chrome.i18n.getMessage(this.tagInfo.tooltipText)}}})
Vue.component("addon-tag",a)}