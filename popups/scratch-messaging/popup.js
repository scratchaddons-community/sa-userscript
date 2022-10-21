import{escapeHTML as t}from"../../libraries/common/cs/autoescaper.js"
import*as e from"../../libraries/common/message-cache.js"
import*as s from"./api.js"
import r from"./fix-comment-content.js"
const o=new DOMParser,i={isEmpty:"comment-error-empty",isFlood:"comment-error-ratelimit",429:"comment-error-ratelimit",isBad:"comment-error-filterbot-generic",hasChatSite:"comment-error-filterbot-chat",isSpam:"comment-error-filterbot-spam",replyLimitReached:"comment-error-reply-limit",500:"comment-error-down",503:"comment-error-down"}
export default async({addon:n,msg:a,safeMsg:c})=>{let h=Date.now()
const d=Vue.extend({template:document.querySelector("template#dom-element-renderer-component").innerHTML,props:["element"],compiled(){this.$el.appendChild(this.element)},beforeDestroy(){this.$el.removeChild(this.element)},watch:{element(t,e){e.replaceWith(t)}}})
Vue.component("dom-element-renderer",d)
const m=Vue.extend({template:document.querySelector("template#comment-component").innerHTML,props:["comment-id","comments-obj","is-parent","unread","resource-type","resource-id"],data:()=>({replying:0,replyBoxValue:"",deleted:0,deleting:0,deleteStep:0,postingComment:0,messages:{openNewTabMsg:a("open-new-tab"),deleteMsg:a("delete"),deleteConfirmMsg:a("delete-confirm"),replyMsg:a("reply"),postingMsg:a("posting"),postMsg:a("post"),cancelMsg:a("cancel"),deletedMsg:a("deleted"),deletingMsg:a("deleting")}}),methods:{postComment(){if((()=>{const t=this.replyBoxValue.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"").toLowerCase().replace(/[^a-z /]+/g,"")
return/scratch[ ]?add[ ]?ons/.test(t)})())return void alert(chrome.i18n.getMessage("captureCommentError",[chrome.i18n.getMessage("captureCommentPolicy")]))
this.postingComment=1
const t=this.isParent?this.commentId:this.thisComment.childOf,e=Number(t.substring(2))
Promise.all([n.auth.fetchUsername(),n.auth.fetchUserId(),s.sendComment(n,{resourceType:this.resourceType,resourceId:this.resourceId,content:this.replyBoxValue,parentId:e,commenteeId:this.thisComment.authorId}),n.self.getEnabledAddons()]).then((([e,s,{id:o,content:i},n])=>{this.replying=0
let a=r(i,n)
if("user"!==this.resourceType){const t=document.createElement("div")
t.append(Object.assign(document.createElement("a"),{href:`https://scratch.mit.edu/users/${this.thisComment.author}`,textContent:"@"+this.thisComment.author})),t.append(" "),t.append(...a.childNodes),a=t}const c=`${this.resourceType[0]}_${o}`
Vue.set(this.commentsObj,c,{author:e,authorId:s,content:a,date:(new Date).toISOString(),children:null,childOf:t,projectAuthor:this.thisComment.projectAuthor}),this.commentsObj[t].children.push(c),this.replyBoxValue=""})).catch((t=>{let e
t instanceof s.DetailedError?t.details.muteStatus?(e=a("comment-mute")+" ",e+=a("comment-cannot-post-for",{mins:Math.max(Math.ceil((t.details.muteStatus.muteExpiresAt-Date.now()/1e3)/60),1)})):e=a(i[t.details?.error]||"send-error"):e=t instanceof s.HTTPError?a(i[t.code]||"send-error"):t.toString(),alert(e)})).finally((()=>{this.postingComment=0}))},deleteComment(){if(0===this.deleteStep)return setTimeout((()=>this.deleteStep=1),250),void setTimeout((()=>{1===this.deleteStep&&(this.deleteStep=0)}),5e3)
this.deleted=1,this.deleting=1,s.deleteComment(n,{resourceType:this.resourceType,resourceId:this.resourceId,commentId:Number(this.commentId.substring(2))}).then((()=>{this.isParent&&(this.thisComment.children=[])})).catch((t=>{console.error("Error while deleting a comment: ",t),alert(a("delete-error")),this.deleteStep=0,this.deleted=0})).finally((()=>{this.deleting=0}))}},computed:{canDeleteComment(){switch(this.resourceType){case"user":return this.resourceId===this.username
case"project":return this.thisComment.projectAuthor===this.username
default:return 1}},thisComment(){return this.commentsObj[this.commentId]},replyBoxLeftMsg(){return a("chars-left",{num:500-this.replyBoxValue.length})},username:()=>vue.username,commentTimeAgo(){const t=new Intl.RelativeTimeFormat("en",{localeMatcher:"best fit",numeric:"auto",style:"short"}),e=new Date(this.thisComment.date).getTime(),s=(h-e)/1e3
let r
return 60>s?t.format(0,"second"):(r=3600>s?{unit:"minute",divideBy:60}:86400>s?{unit:"hour",divideBy:3600}:{unit:"day",divideBy:86400},t.format(-Math.round(s/r.divideBy),r.unit))},commentURL(){return`https://scratch.mit.edu/${"user"===this.resourceType?"users":"gallery"===this.resourceType?"studios":"projects"}/${this.resourceId}/${"gallery"===this.resourceType?"comments/":""}#comments-${this.commentId.substring(2)}`}},watch:{replying(t){1==t&&this.$el.querySelector("textarea").focus()}}})
Vue.component("comment",m)
const vue=new Vue({el:"body",data:{stMessages:[],messages:[],comments:{},error:"notReady",hasCustomError:0,username:null,msgCount:null,messagesReady:0,commentsReady:0,commentsProgress:0,showAllMessages:0,showingMessagesAmt:null,markedAsRead:0,follows:[],studioInvites:[],studioPromotions:[],studioHostTransfers:[],forumActivity:[],studioActivity:[],remixes:[],profiles:[],studios:[],projects:[],messageTypeExtended:{stMessages:0,follows:0,studioInvites:0,studioPromotions:0,studioHostTransfers:0,forumActivity:0,studioActivity:0,remixes:0},uiMessages:{stMessagesMsg:a("stMessages"),followsMsg:a("follows"),studioInvitesMsg:a("studio-invites"),forumMsg:a("forum"),studioActivityMsg:a("studio-activity"),remixesMsg:a("remixes"),yourProfileMsg:a("your-profile"),loadingMsg:a("loading"),loggedOutMsg:a("logged-out"),loggedOutLinkMsg:a("logged-out-link"),serverErrorMsg:a("server-error"),networkErrorMsg:a("network-error"),unknownFatalErrorMsg:a("unknown-fatal-error"),reportBugMsg:a("report-bug"),copyMsg:a("copy"),loadingCommentsMsg:a("loading-comments"),reloadMsg:a("reload"),dismissMsg:a("dismiss"),noUnreadMsg:a("no-unread"),showMoreMsg:a("show-more"),markAsReadMsg:a("mark-as-read"),markedAsReadMsg:a("marked-as-read"),openMessagesMsg:a("open-messages"),studioPromotionsMsg:a("studio-promotions"),studioHostTransfersMsg:a("studio-host-transfers")}},watch:{showAllMessages(t){this.commentsReady=0,this.commentsProgress=0,this.follows=[],this.studioInvites=[],this.studioPromotions=[],this.studioHostTransfers=[],this.forumActivity=[],this.studioActivity=[],this.remixes=[],this.profiles=[],this.studios=[],this.projects=[],this.analyzeMessages(t)}},computed:{feedbackUrl(){const t=chrome.runtime.getManifest()
return`https://scratchaddons.com/feedback/?ext_version=${t.version_name}&utm_source=userscript&utm_medium=messagingcrash&utm_campaign=v${t.versions}`},profilesOrdered(){return[...this.profiles.filter((t=>t.username===this.username)),...this.profiles.filter((t=>t.username!==this.username))]},projectsOrdered(){return[...this.projects.filter((t=>0!==t.unreadComments)),...this.projects.filter((t=>0===t.unreadComments))]},canShowMoreMessages(){return this.messagesReady&&this.commentsReady&&!this.error&&0==this.showAllMessages&&this.messages.length>this.showingMessagesAmt}},created(){document.title=a("popup-title"),(async()=>{await this.getData()&&this.analyzeMessages()})()},methods:{getData(){return Promise.all([n.auth.fetchUsername(),n.auth.fetchXToken()]).then((([t,r])=>{if(scratchAddons.cookieFetchingFailed)throw new TypeError("NetworkError")
if(!t)throw new e.HTTPError("Not logged in",401)
return this.username=t,Promise.all([e.updateMessages(scratchAddons.cookieStoreId,0,t,r),s.fetchAlerts(n)])})).then((async([t,s])=>{chrome.runtime.sendMessage({forceBadgeUpdate:{store:scratchAddons.cookieStoreId},notifyNewMessages:{store:scratchAddons.cookieStoreId,messages:t}})
const r=await e.openDatabase()
try{this.messages=await r.get("cache",scratchAddons.cookieStoreId),this.msgCount=await r.get("count",scratchAddons.cookieStoreId)}finally{await r.close()}return this.stMessages=(Array.isArray(s)?s:[]).map((t=>{const e=o.parseFromString(t.message,"text/html")
for(const t of e.getElementsByTagName("a"))t.href=new URL(t.getAttribute("href"),"https://scratch.mit.edu/").toString()
const s=document.createElement("div")
return s.append(...e.body.childNodes),{...t,element:s,datetime_created:new Date(t.datetime_created).toDateString()}})),this.error=void 0,1})).catch((t=>{if(t instanceof e.HTTPError){if(401===t.code||403===t.code)return this.error="loggedOut",0
if(t.code>=500)return this.error="serverError",0}else if(t instanceof TypeError&&String(t).includes("NetworkError"))return this.error="networkError",0
return console.error("Error while initial getData",t),this.hasCustomError=1,this.error=String(t),0}))},async updateMessageCount(){const t=await n.auth.fetchUsername(),s=await e.fetchMessageCount(t),r=await e.openDatabase()
try{await r.put("count",s,scratchAddons.cookieStoreId)}finally{await r.close()}chrome.runtime.sendMessage({forceBadgeUpdate:{store:scratchAddons.cookieStoreId}})},markAsRead(){e.markAsRead(n.auth.csrfToken).then((()=>this.updateMessageCount())).then((()=>{this.markedAsRead=1})).catch((t=>console.error("Marking messages as read failed:",t)))},dismissAlert(t){confirm(a("stMessagesConfirm"))&&s.dismissAlert(n,t).then((()=>{this.stMessages.splice(this.stMessages.findIndex((e=>e.id===t)),1),this.updateMessageCount()})).catch((t=>console.error("Dismissing alert failed:",t)))},reloadPage(){location.reload()},copyToClipboard(t){navigator.clipboard.writeText(t)},getProjectObject(t,e){const s=this.projects.find((e=>e.id===t))
if(s)return s
const r={id:t,title:e,unreadComments:0,commentChains:[],loveCount:0,favoriteCount:0,loversAndFavers:[],loadedComments:0}
return this.projects.push(r),r},getProfileObject(t){const e=this.profiles.find((e=>e.username===t))
if(e)return e
const s={username:t,unreadComments:0,commentChains:[],loadedComments:0}
return this.profiles.push(s),s},getStudioObject(t,e){const s=this.studios.find((e=>e.id===t))
if(s)return s
const r={id:t,title:e,unreadComments:0,commentChains:[],loadedComments:0}
return this.studios.push(r),r},isCommentUnread(t){const e=Number(t.substring(2)),s=this.messages.findIndex((t=>t.comment_id===e))
return-1===s?0:this.msgCount>s?this.comments[t].childOf&&this.isCommentUnread(this.comments[t].childOf)?0:1:0},checkCommentLocation(t,e,o,i){return Promise.all([s.fetchComments(n,{resourceType:t,resourceId:e,commentIds:o}),n.self.getEnabledAddons()]).then((([s,o])=>{0===Object.keys(s).length&&(i.unreadComments=0)
for(const t of Object.keys(s)){const e=s[t]
let i=r(e.content,o)
if("user"!==this.resourceType){const t=document.createElement("div")
e.replyingTo&&(t.append(Object.assign(document.createElement("a"),{href:`https://scratch.mit.edu/users/${e.replyingTo}`,textContent:"@"+e.replyingTo})),t.append(" ")),t.append(...i.childNodes),i=t}e.content=i,Vue.set(this.comments,t,e)}const n=Object.entries(s).filter((t=>null===t[1].childOf)).sort(((t,e)=>new Date(e[1].date)-new Date(t[1].date))).map((t=>t[0])),a=this["project"===t?"getProjectObject":"user"===t?"getProfileObject":"getStudioObject"](e)
for(const t of n)a.commentChains.push(t)
i.loadedComments=1})).catch((t=>{t instanceof s.HTTPError&&t.code>400?this.error=500>t.code?"loggedOut":"serverError":String(t).includes("NetworkError")?this.error="networkError":(console.error(t),this.error=String(t),this.hasCustomError=1)}))},async analyzeMessages(t=0){const e={0:[],1:[],2:[]},s=t?this.messages.length:this.msgCount-this.stMessages.length
this.showingMessagesAmt=s
for(const t of this.messages.slice(0,s))if("followuser"===t.type)this.follows.push(t.actor_username)
else if("curatorinvite"===t.type)this.studioInvites.push({actor:t.actor_username,studioId:t.gallery_id,studioTitle:t.title})
else if("becomeownerstudio"===t.type)this.studioPromotions.push({actor:t.actor_username,studioId:t.gallery_id,studioTitle:t.gallery_title})
else if("becomehoststudio"===t.type)this.studioHostTransfers.push({actorAdmin:t.admin_actor,actor:t.actor_username,studioId:t.gallery_id,studioTitle:t.gallery_title})
else if("forumpost"===t.type)this.forumActivity.find((e=>e.topicId===t.topic_id))||this.forumActivity.push({topicId:t.topic_id,topicTitle:t.topic_title})
else if("remixproject"===t.type)this.remixes.push({parentTitle:t.parent_title,remixTitle:t.title,actor:t.actor_username,projectId:t.project_id})
else if("studioactivity"===t.type)this.studioActivity.find((e=>e.studioId===t.gallery_id))||this.studioActivity.push({studioId:t.gallery_id,studioTitle:t.title})
else if("loveproject"===t.type){const e=this.getProjectObject(t.project_id,t.title)
e.loveCount++
const s=e.loversAndFavers.find((e=>e.username===t.actor_username))
s?s.loved=1:e.loversAndFavers.push({username:t.actor_username,loved:1,faved:0})}else if("favoriteproject"===t.type){const e=this.getProjectObject(t.project_id,t.project_title)
e.favoriteCount++
const s=e.loversAndFavers.find((e=>e.username===t.actor_username))
s?s.faved=1:e.loversAndFavers.push({username:t.actor_username,loved:0,faved:1})}else if("addcomment"===t.type){const s=1===t.comment_type?t.comment_obj_title:t.comment_obj_id
let r,o=e[t.comment_type].find((t=>t.resourceId===s))
o||(o={resourceId:s,commentIds:[]},e[t.comment_type].push(o)),o.commentIds.push(t.comment_id),0===t.comment_type?r=this.getProjectObject(s,t.comment_obj_title):1===t.comment_type?r=this.getProfileObject(s):2===t.comment_type&&(r=this.getStudioObject(s,t.comment_obj_title)),r.unreadComments++}this.messagesReady=1
const r=e[0].length+e[1].length+e[2].length
let o=0
for(const t of this.profilesOrdered){const s=e[1].find((e=>e.resourceId===t.username))
s&&(await this.checkCommentLocation("user",s.resourceId,s.commentIds,t),o++,this.commentsProgress=Math.round(o/r*100))}for(const t of this.studios){const s=e[2].find((e=>e.resourceId===t.id))
s&&(await this.checkCommentLocation("gallery",s.resourceId,s.commentIds,t),o++,this.commentsProgress=Math.round(o/r*100))}for(const t of this.projectsOrdered){const s=e[0].find((e=>e.resourceId===t.id))
s&&(await this.checkCommentLocation("project",s.resourceId,s.commentIds,t),o++,this.commentsProgress=Math.round(o/r*100))}this.commentsReady=1},studioInviteHTML(e){const s=`<a target="_blank"\n            rel="noopener noreferrer"\n            href="https://scratch.mit.edu/users/${e.actor}/"\n        >${e.actor}</a>`,r=`<a target="_blank"\n            rel="noopener noreferrer"\n            href="https://scratch.mit.edu/studios/${e.studioId}/curators/"\n            style="text-decoration: underline"\n        >${t(e.studioTitle)}</a>`
return c("curate-invite",{actor:s,title:r})},studioPromotionHTML(e){const s=`<a target="_blank"\n            rel="noopener noreferrer"\n            href="https://scratch.mit.edu/users/${e.actor}/"\n        >${e.actor}</a>`,r=`<a target="_blank"\n            rel="noopener noreferrer"\n            href="https://scratch.mit.edu/studios/${e.studioId}/curators/"\n            style="text-decoration: underline"\n        >${t(e.studioTitle)}</a>`
return c("studio-promotion",{actor:s,title:r})},studioHostTransferHTML(e){const s=e.actorAdmin?c("st"):`<a target="_blank"\n            rel="noopener noreferrer"\n            href="https://scratch.mit.edu/users/${t(e.actor)}/"\n        >${t(e.actor)}</a>`,r=`<a target="_blank"\n            rel="noopener noreferrer"\n            href="https://scratch.mit.edu/studios/${e.studioId}/"\n            style="text-decoration: underline"\n        >${t(e.studioTitle)}</a>`
return c("studio-host-transfer",{actor:s,title:r})},forumHTML(e){const s=`<a target="_blank"\n            rel="noopener noreferrer"\n            href="https://scratch.mit.edu/discuss/topic/${e.topicId}/unread/"\n            style="text-decoration: underline"\n        >${t(e.topicTitle)}</a>`
return c("forum-new-post",{title:s})},studioActivityHTML(e){const s=`<a target="_blank"\n            rel="noopener noreferrer"\n            href="https://scratch.mit.edu/studios/${e.studioId}/activity/"\n            style="text-decoration: underline"\n        >${t(e.studioTitle)}</a>`
return c("new-activity",{title:s})},remixHTML(e){const s=`<a target="_blank"\n            rel="noopener noreferrer"\n            href="https://scratch.mit.edu/users/${e.actor}/"\n        >${e.actor}</a>`,r=`<a target="_blank"\n            rel="noopener noreferrer"\n            href="https://scratch.mit.edu/projects/${e.projectId}/"\n            style="text-decoration: underline"\n        >${t(e.remixTitle)}</a>`
return c("remix-as",{actor:s,title:r,parentTitle:t(e.parentTitle)})},othersProfile:t=>a("others-profile",{username:t}),studioText:t=>a("studio",{title:t}),projectLoversAndFavers(t){const e=t=>t.loved&&t.faved?0:t.faved?1:2
return t.loversAndFavers.slice(0,20).sort(((t,s)=>{const r=e(t),o=e(s)
return r>o?1:o>r?-1:0}))}}})}
