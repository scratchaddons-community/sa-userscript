import m from"./rtl-list.js"
import chrome from"../libraries/common/chrome.js"
document.documentElement.lang=chrome.i18n.getUILanguage(),document.body.dir=m(chrome.i18n.getUILanguage())
