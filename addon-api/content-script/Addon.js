import t from"../common/Addon.js"
import s from"./Tab.js"
import i from"./Auth.js"
import o from"./Account.js"
export default class r extends t{constructor(t){super(t),this._addonId=t.id,this.__path=`${new URL(import.meta.url).origin}/`,this.tab=new s(t),this.auth.dispose(),this.auth=new i(this),this.account=new o(this),this.self.disabled=0,this.self.enabledLate=t.enabledLate}get _path(){return this.__path}}