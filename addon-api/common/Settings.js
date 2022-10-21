import t from"./Listenable.js"
export default class e extends t{constructor(t){super(),this._addonId=t.self.id}get(t){const e=(scratchAddons.globalState.addonSettings[this._addonId]||{})[t]
if(void 0===e)throw"ScratchAddons exception: invalid setting ID"
return e}get _eventTargetKey(){return"settings"}}