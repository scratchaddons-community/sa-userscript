export default async function({addon:e,msg:t}){let{redux:a}=e.tab
await a.waitForState((e=>"FETCHED"===e.preview.status.project),{actions:["SET_PROJECT_INFO"]})
let d=a.state.preview.projectInfo
if(d.history)for(;;){const a=await e.tab.waitForElement(".share-date",{markAsSeen:1,reduxEvents:["scratch-gui/mode/SET_PLAYER","fontsLoaded/SET_FONTS_LOADED","scratch-gui/locales/SELECT_LOCALE"],reduxCondition(e){return e.scratchGui.mode.isPlayerOnly}}),n=new Intl.DateTimeFormat(t.locale,{timeStyle:"short",dateStyle:"medium"})
let i=d.history.modified?n.format(new Date(d.history.modified)):"?",l=`${t("shared",{date:d.history.shared?n.format(new Date(d.history.shared)):"?"})}\n${t("modified",{date:i})}`
a.setAttribute("title",l),e.self.addEventListener("disabled",(()=>{a.removeAttribute("title")})),e.self.addEventListener("reenabled",(()=>{a.setAttribute("title",l)}))}}