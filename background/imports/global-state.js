function t(t){chrome.tabs.query({},(n=>n.forEach((n=>n.url&&chrome.tabs.sendMessage(n.id,t,(()=>{})))))),scratchAddons.sendToPopups(t)}import chrome from"../../libraries/common/chrome.js"
const n={auth:{isLoggedIn:0,username:null,userId:null,xToken:null,csrfToken:null,scratchLang:null},addonSettings:{}}
class e{constructor(t="scratchAddons.globalState"){this.name=t}get(t,n){return"_target"===n?t:"object"==typeof t[n]&&null!==t[n]?new Proxy(t[n],new e(`${this.name}.${n}`)):t[n]}set(e,o,s){const r=e[o]
return e[o]=s,t({newGlobalState:n}),JSON.stringify(r)!==JSON.stringify(s)&&function(n,e,o){const s=`${n}.${e}`,r=s.split(".").slice(2)
console.log(`%c${s}`,"font-weight: bold;","is now: ","auth"===r[0]?"[redacted]":o),"addonSettings"===r[0]&&t({fireEvent:{target:"settings",name:"change",addonId:r[1]}})}(this.name,o,s),1}}export default new Proxy(n,new e)
