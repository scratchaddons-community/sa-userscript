import Addon from "../common/Addon.js";
import Popup from "./Popup.js";
import chrome from "../../libraries/common/chrome.js";

/**
 * An addon that loads as a popup.
 * @extends Addon
 * @property {Popup} popup
 */
export default class PopupAddon extends Addon {
  constructor(info) {
    super(info);
    this.popup = new Popup();
  }

  /**
   * @private
   */
  get _path() {
    return chrome.runtime.getURL("");
  }
}
