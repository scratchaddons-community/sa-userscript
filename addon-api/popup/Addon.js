import t from"../common/Addon.js"
import o from"./Popup.js"
import r from"./Auth.js"
export default class s extends t{constructor(t){super(t),this.auth.dispose(),this.auth=new r(this),this.popup=new o(this)}get _path(){return chrome.runtime.getURL("")}}