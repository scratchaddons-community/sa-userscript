export default async function({addon:n}){if(null!==n.tab.clientVersion)for(var o;;)if(o=await n.tab.waitForElement("scratch-www"===n.tab.clientVersion?"#frc-q-1088":"#search-input",{markAsSeen:1,reduxCondition(n){return n.scratchGui?n.scratchGui.mode.isPlayerOnly:1}}),"scratch-www"===n.tab.clientVersion){var t
function e(){return document.querySelectorAll(".link:not(.search ~ *)")}function i(){if(n.self.disabled)return
let o
for(t=e(),o=0;t.length>o;o++)t[o]&&(t[o].style.display="none")}function u(){let n
for(t=e(),n=0;t.length>n;n++)t[n]&&t[n].style.removeProperty("display")}o.addEventListener("focusin",i),o.addEventListener("focusout",u),n.self.addEventListener("disabled",(()=>u()))}else{var c
function i(){n.self.disabled||(c.style.display="none")}function u(){c.style.removeProperty("display")}c=document.getElementsByClassName("site-nav")[0],o.addEventListener("focusin",i),o.addEventListener("focusout",u),n.self.addEventListener("disabled",(()=>u()))}}