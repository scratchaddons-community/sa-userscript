import e from"../common/FetchableAuth.js"
export default class t extends e{_getCookie(e){const t=document.cookie.split(";").map((e=>e.trim())).find((t=>t.startsWith(`${e}=`)))
return t?t.slice(e.length+1):null}}