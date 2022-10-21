import n from"../../addon-api/content-script/Addon.js"
export default async function o({addonId:o,scripts:t,enabledLate:d=0}){const c=new n({id:o,enabledLate:d})
c.auth._update(scratchAddons.session)
const s=Object.create(null)
for(const n of t){const{url:t,runAtComplete:a}=n,e=`${new URL(import.meta.url).origin}/addons/${o}/${t}`,r=async()=>{await scratchAddons.l10n.loadByAddonId(o)
const n=await import(e),t=(n,t)=>scratchAddons.l10n.get(n.startsWith("/")?n.slice(1):`${o}/${n}`,t)
t.locale=scratchAddons.l10n.locale,scratchAddons.console.logForAddon(`${o} [page]`)(`Running ${e}, runAtComplete: ${a}, enabledLate: ${d}`)
const r={log:scratchAddons.console.logForAddon(o),warn:scratchAddons.console.warnForAddon(o),error:scratchAddons.console.errorForAddon(o)}
n.default({addon:c,global:s,console:{...console,...r},msg:t,safeMsg(n,t){return scratchAddons.l10n.escaped(n.startsWith("/")?n.slice(1):`${o}/${n}`,t)}})}
a&&"complete"!==document.readyState?window.addEventListener("load",(()=>r()),{once:1}):await r()}}