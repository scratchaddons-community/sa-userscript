function t(){return idb.openDB("notifier",1,{upgrade(t){t.createObjectStore("urls")}})}async function e(t){const e=t.transaction("urls","readwrite"),o=await e.store.getAllKeys()
for(const t of o)Number(t.match(/\w+__(\d+)/)[1])+2592e5<Date.now()&&await e.store.delete(t)
await e.done}async function o({emoji:e,messageType:o,actor:s,fragment:i,commentee:r,commentUrl:c,title:n,element_id:l,parent_title:m,admin_actor:f}){const d=(t,e)=>scratchAddons.l10n.get(`scratch-notifier/${t}`,e,`scratch-messaging/${t}`),u=scratchAddons.globalState.addonSettings["scratch-notifier"]||{}
let p,h=""
var w
if(o.startsWith("addcomment/"))switch(p=c,n.length>20&&(n=`${n.substring(0,17).trimEnd()}...`),o.split("/")[1]){case"ownProjectNewComment":w=d("notif-own-project",{actor:s,title:n}),h=i
break
case"projectReplyToSelf":w=d("notif-project-reply",{actor:s,title:n}),h=i
break
case"ownProjectReplyToOther":w=d("notif-own-project-reply",{actor:s,commentee:r,title:n}),h=i
break
case"ownProfileNewComment":w=d("notif-profile",{actor:s}),h=i
break
case"ownProfileReplyToSelf":w=d("notif-own-profile-reply",{actor:s}),h=i
break
case"ownProfileReplyToOther":w=d("notif-own-profile-reply-other",{actor:s,commentee:r}),h=i
break
case"otherProfileReplyToSelf":w=d("notif-profile-reply",{actor:s,title:n}),h=i
break
case"studio":w=d("notif-studio-reply",{actor:s,title:n}),h=i
break
default:w=d("notif-comment")}else switch(o){case"forumpost":w=d("notif-forum",{title:n}),p=`https://scratch.mit.edu/discuss/topic/${l}/unread/`
break
case"loveproject":w=d("notif-love",{actor:s,title:n}),p=`https://scratch.mit.edu/users/${s}/`
break
case"favoriteproject":w=d("notif-fav",{actor:s,title:n}),p=`https://scratch.mit.edu/users/${s}/`
break
case"followuser":w=d("notif-follow",{actor:s}),p=`https://scratch.mit.edu/users/${s}/`
break
case"curatorinvite":w=d("notif-invite",{actor:s,title:n}),p=`https://scratch.mit.edu/studios/${l}/curators/`
break
case"becomeownerstudio":w=d("notif-promotion",{actor:s,title:n}),p=`https://scratch.mit.edu/studios/${l}/curators/`
break
case"becomehoststudio":w=d("notif-host",{actor:f?d("st"):s,title:n}),p=`https://scratch.mit.edu/studios/${l}/`
break
case"remixproject":w=d("notif-remix",{actor:s,parent_title:m,title:n}),p=`https://scratch.mit.edu/projects/${l}/`
break
case"studioactivity":w=d("notif-studio",{title:n}),p=`https://scratch.mit.edu/studios/${l}/activity`
break
default:w=d("notif-generic")}const y=u.notification_sound,g=await a({base:"notifier",type:"basic",title:w,iconUrl:e?`../../images/icons/${e}.svg`:"/images/icon.png",message:h,buttons:[{title:d("open")},{title:d("clear")}],silent:"system-default"===y?0:1})
if(!g)return
const b=await t()
try{await b.put("urls",p,g)}finally{await b.close()}}function s(t){if(void 0===t)return
const e=document.createElement("textarea")
e.innerHTML=t
let o=e.value
const s=o.match(/<img([\w\W]+?)[\/]?>/g)
if(s)for(const t of s){const e=t.match(/\<img.+src\=(?:\"|\')(.+?)(?:\"|\')(?:.+?)\>/)[1].split("/"),s=e[e.length-1]
c[s]&&(o=o.replace(t,c[s]))}return o=o.replace(/<[^>]*>?/gm,""),o=o.replace(/\n/g," ").trim(),250===t.length&&(o+="..."),o}import{updateBadge as i}from"../../background/message-cache.js"
import chrome from"../../libraries/common/chrome.js"
import{markAsRead as r}from"../../libraries/common/message-cache.js"
import a from"../../libraries/common/notification-util.js"
import c from"./comment-emojis.js"
const n={addcomment:"comment",forumpost:"forum",loveproject:"heart",favoriteproject:"star",followuser:"follow",curatorinvite:"studio-add",remixproject:"remix",studioactivity:"studio",becomeownerstudio:"adminusers",becomehoststudio:"users"}
export async function purgeDatabase(){const e=await t()
try{await e.clear("urls")}finally{await e.close()}}const l=()=>{chrome.notifications.onClicked.addListener((async o=>{if(!o.startsWith("notifier"))return
if(chrome.notifications.clear(o),1==scratchAddons.globalState.addonSettings["scratch-notifier"]?.mark_as_read_when_clicked)try{await r(scratchAddons.globalState.auth.csrfToken),i(scratchAddons.cookieStoreId)}catch(t){console.error("Marking message as read failed:",t)}const s=await t()
try{const t=await s.get("urls",o)
t&&chrome.tabs.create({url:t}),await e(s),await s.delete("urls",o)}finally{await s.close()}})),chrome.notifications.onButtonClicked.addListener((async(o,s)=>{if(!o.startsWith("notifier"))return
if(chrome.notifications.clear(o),0===s)!async function(){chrome.tabs.query({url:"https://scratch.mit.edu/messages*"},(t=>{t[0]?(chrome.windows.update(t[0].windowId,{focused:1}),chrome.tabs.update(t[0].id,{active:1,url:"https://scratch.mit.edu/messages/"})):chrome.tabs.create({url:"https://scratch.mit.edu/messages/"}),i(scratchAddons.cookieStoreId)}))}()
else try{await r(scratchAddons.globalState.auth.csrfToken),i(scratchAddons.cookieStoreId)}catch(t){console.error("Marking message as read failed:",t)}const a=await t()
try{await e(a),await a.delete("urls",o)}finally{await a.close()}})),chrome.notifications.onClosed.addListener((async o=>{if(!o.startsWith("notifier"))return
const s=await t()
try{await e(s),await s.delete("urls",o)}finally{await s.close()}}))}
chrome.notifications?l():chrome.permissions.onAdded.addListener((t=>{t.permissions?.includes("notifications")&&l()}))
export function notifyNewMessages(t){const e=scratchAddons.globalState.addonSettings["scratch-notifier"]||{},i=scratchAddons.globalState.auth.username
if(null===t||0===t.length||scratchAddons.muted)return
t=t.slice(0,20)
let r=0
for(const a of t){let t,c=a.type
if("addcomment"===a.type)if(c+="/",0===a.comment_type){const e=a.commentee_username
c+=null===e?"ownProjectNewComment":e===i?"projectReplyToSelf":"ownProjectReplyToOther",t=`https://scratch.mit.edu/projects/${a.comment_obj_id}/#comments-${a.comment_id}`}else if(1===a.comment_type){const e=a.commentee_username
c+=a.comment_obj_title===i?null===e?"ownProfileNewComment":e===i?"ownProfileReplyToSelf":"ownProfileReplyToOther":"otherProfileReplyToSelf",t=`https://scratch.mit.edu/users/${a.comment_obj_title}/#comments-${a.comment_id}`}else 2===a.comment_type&&(c+="studio",t=`https://scratch.mit.edu/studios/${a.comment_obj_id}/comments/#comments-${a.comment_id}`)
if("addcomment"===a.type){if("addcomment/ownProjectNewComment"===c||"addcomment/ownProjectReplyToOther"===c){if(0==e.commentsonmyprojects_notifications)continue}else if(0==e.commentsforme_notifications)continue}else try{if(0==e[`${a.type}_notifications`])continue}catch{console.warn(`Unexpected message type: ${a.type}`)
continue}const l={emoji:n[a.type],messageType:c,actor:a.actor_username,admin_actor:a.admin_actor||0,fragment:s(a.comment_fragment),commentee:a.commentee_username,commentUrl:t,title:a.comment_obj_title||a.topic_title||a.title||a.project_title||a.gallery_title,element_id:a.comment_id||a.gallery_id||a.project_id||a.topic_id,parent_title:a.parent_title}
r||"addons-ping"!==e.notification_sound||new Audio(chrome.runtime.getURL("./addons/scratch-notifier/ping.mp3")).play(),r=1,o(l)}}chrome.runtime.onMessage.addListener((t=>{scratchAddons.localState.addonsEnabled["scratch-notifier"]&&t?.notifyNewMessages&&t.notifyNewMessages.store===scratchAddons.cookieStoreId&&notifyNewMessages(t.notifyNewMessages.messages)}))
