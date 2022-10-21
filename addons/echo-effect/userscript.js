export default async({addon:t})=>{for(;;){const o=await t.tab.waitForElement('[class*="sound-editor_row-reverse_"] > :nth-child(10)',{markAsSeen:1}),e=document.createElement("div")
e.className=t.tab.scratchClass("icon-button_container","sound-editor_effect-button"),t.tab.displayNoneWhileDisabled(e,{display:"flex"}),e.setAttribute("role","button"),e.addEventListener("click",(()=>{const e=o.closest('[class*="sound-editor_editor-container_"]')
e[t.tab.traps.getInternalKey(e)].return.return.return.stateNode.handleEffect("echo")}))
const n=Object.assign(document.createElement("img"),{src:t.self.dir+"/echo.svg",draggable:0}),c=Object.assign(document.createElement("div"),{className:t.tab.scratchClass("icon-button_title")}),d=Object.assign(document.createElement("span"),{textContent:t.tab.scratchMessage("gui.soundEditor.echo")})
c.append(d),e.append(n,c),o.after(e)}}
