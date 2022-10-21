import t from"../../libraries/common/cs/l10n.js"
export default class s extends t{constructor(t){super(),this._urls=new Set(t),this.generalLoaded=0}async loadByAddonId(t){if(this.generalLoaded)return
let s={}
for(const t of this._urls){let e,i={}
const o=`${t}.json`
try{e=await fetch(o),i=await e.json()}catch(t){continue}s=Object.assign(i,s),this.messages=Object.assign(i,this.messages)}this._reconfigure(),this.generalLoaded=1}}