import chrome from "../libraries/common/chrome.js";

/* global libraryLicenses, licenseNameToText, licensesReady */

window.licenseNameToText = {};
fetch(chrome.runtime.getURL("libraries/license-info.json"))
  .then((res) => res.json())
  .then((o) => {
    window.libraryLicenses = o;
    return o;
  })
  .then((o) =>
    Object.values(o).map((name) =>
      fetch(chrome.runtime.getURL(`libraries/licenses/${name}.txt`))
        .then((res) => res.text())
        .then((text) => ({ name, text }))
    )
  )
  .then((promises) => Promise.all(promises))
  .then((a) =>
    a.forEach(({ name, text }) => {
      licenseNameToText[name] = text;
    })
  )
  .then(() => {
    window.dispatchEvent(new CustomEvent("licenses-loaded"));
    window.licensesReady = true;
  });

/*
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request === "getLibraryInfo") {
    sendResponse(libraryLicenses);
  } else if (request.licenseName) {
    sendResponse({ licenseText: licenseNameToText[request.licenseName] });
  }
});
*/
