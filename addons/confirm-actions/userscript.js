export default async function({addon:t,msg:o}){let e=0
document.addEventListener("click",(n=>{if(e)return void(e=0)
let a=null,l=null
if(t.settings.get("projectsharing")&&n.target.closest("[class*='share-button_share-button']:not([class*='is-shared']), .banner-button"))a=t.tab.scratchMessage("project.share.shareButton"),l=o("share")
else if(t.settings.get("projectunsharing")&&n.target.closest(".media-stats a.unshare")&&"#galleries"!==location.hash)a=n.target.closest(".media-stats a.unshare").textContent,l=o("unshare")
else if(t.settings.get("followinguser")&&n.target.closest("#profile-data .follow-button")){const t=n.target.closest("#profile-data .follow-button")
t.classList.contains("notfollowing")?(a=t.querySelector("span.follow").textContent,l=o("follow")):(a=t.querySelector("span.unfollow").textContent,l=o("unfollow"))}else if((/^\/studios\/\d+\/curators/g.test(location.pathname)&&n.target.closest("button.studio-invitation-button")||location.pathname.startsWith("/messages")&&n.target.closest(".sa-curator-invite-button"))&&t.settings.get("joiningstudio"))a=location.pathname.startsWith("/messages")?o("accept-invite"):t.tab.scratchMessage("studio.curatorAcceptInvite"),l=o("joinstudio")
else if(t.settings.get("closingtopic")&&n.target.closest("dd form button"))a=o("closetopic-title"),l=o("closetopic")
else if(t.settings.get("cancelcomment")&&n.target.closest("div[data-control='cancel'] > a, .compose-cancel")){if(""===n.target.closest("form").querySelector("textarea").value)return
a=o("cancelcomment-title"),l=o("cancelcomment")}else t.settings.get("removingprojects")&&n.target.closest(".media-trash")&&(a=o("removeproject-title"),l=o("removeproject"))
null!==l&&(n.preventDefault(),n.stopPropagation(),t.tab.confirm(a,l,{okButtonLabel:o("yes"),cancelButtonLabel:o("no"),useEditorClasses:"editor"===t.tab.editorMode}).then((t=>{t&&(e=1,n.target.click())})))}),{capture:1})}