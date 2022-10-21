import t from"./Auth.js"
import s from"./Self.js"
import o from"../common/Settings.js"
export default class r{constructor(r){this.self=new s(this,r),this.auth=new t(this),this.settings=new o(this)}get _path(){throw new Error("Subclasses must implement this.")}}