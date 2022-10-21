export default class t{constructor(t,s,i,h){this.cls=t,this.procCode=s,this.labelID=i,this.y=h,this.lower=s.toLowerCase(),this.clones=null,this.eventName=null}matchesID(t){if(this.labelID===t)return 1
if(this.clones)for(const s of this.clones)if(s===t)return 1
return 0}}