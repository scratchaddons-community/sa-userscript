export default(e,t)=>{const o=JSON.parse(JSON.stringify(e)),c=t&&t.reduce(((e,t)=>(e[t._addonId||t.addonId]=t.manifest||t,e)),{})
for(const[e,t]of Object.entries(o))if(c&&!c[e])delete o[e]
else{for(const o of Object.keys(t))!c||o.startsWith("_")||c[e].settings?.some((e=>o===e.id))||delete t[o]
0===Object.keys(t).length&&delete o[e]}return o}
