(()=>{let{browser:r,version:e}=(()=>{let r=/(Firefox|Chrome)\/([0-9.]+)/.exec(navigator.userAgent)
return r?{browser:r[1],version:r[2].split(".")[0]}:{browser:null,version:null}})()
return"Chrome"===r&&80>e||"Firefox"===r&&86>e})()&&chrome.runtime.onMessage.addListener(((r,e)=>{if("checkIfUnsupported"===r){const r=chrome.i18n.getUILanguage(),o=`https://scratchaddons.com/${r.startsWith("en")?"":`${r.split("-")[0]}/`}unsupported-browser/?utm_source=userscript&utm_medium=tabscreate&utm_campaign=v${chrome.runtime.getManifest().version}`
e.tab?chrome.tabs.update(e.tab.id,{url:o}):chrome.tabs.create({url:o})}}))
