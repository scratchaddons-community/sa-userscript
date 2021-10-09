import getDirection from "./rtl-list.js";
import chrome from "../libraries/common/chrome.js";

document.documentElement.lang = chrome.i18n.getUILanguage();
document.body.dir = getDirection(chrome.i18n.getUILanguage());
