const t=t=>t.replace(/([<>'"&])/g,((t,r)=>`&#${r.charCodeAt(0)};`))
export default(r,...e)=>{let o="",n=0
for(;r.length>n;n++)o+=r[n],n!==e.length&&(o+=t(String(e[n])))
return o}
export{t as escapeHTML}
