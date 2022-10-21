const t={ready:{manifests:0,addonSettings:0},allReady:0,addonsEnabled:{}}
class e{constructor(t="scratchAddons.localState"){this.name=t}get(t,n){return"_target"===n?t:"object"==typeof t[n]&&null!==t[n]?new Proxy(t[n],new e(`${this.name}.${n}`)):t[n]}set(e,n,o){const s=e[n]
return e[n]=o,JSON.stringify(s)!==JSON.stringify(o)&&function(e,n,o){const s=`${e}.${n}`,a=s.split(".").slice(2)
console.log(`%c${s}`,"font-weight: bold;","is now: ","auth"===a[0]?"[redacted]":o),"ready"===a[0]&&Object.values(scratchAddons.localState.ready).every((t=>1==t))&&(console.log("Everything ready!"),t.allReady=1,scratchAddons.localEvents.dispatchEvent(new CustomEvent("ready")))}(this.name,n,o),1}}export default new Proxy(t,new e)
