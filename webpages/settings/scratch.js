import "../../background/declare-scratchaddons-object.js";
import "../../background/load-addon-manifests.js";
import "../../background/get-addon-settings.js";
import "../set-lang.js";
import "../../background/handle-settings-page.js";

const iframe = document.querySelector("iframe");

window.addEventListener("message", async (event) => {
  if (![iframe.contentWindow, window].includes(event.source) || event.data.reqId || !event.data?.message) return;

  function sendResponse(res = {}) {
    return event.source.postMessage({ res, reqId: `${event.data.id}r` }, event.origin);
  }

  const data = event.data.message;

  if (data === "reload page") location.reload();

  if (data.getFromStorage) return sendResponse(window.localStorage[`SCRATCHADDONS__${data.getFromStorage}`]);

  if (data.setInStorage) {
    window.localStorage[`SCRATCHADDONS__${data.setInStorage[0]}`] = JSON.stringify(data.setInStorage[1]);
    return sendResponse();
  }

  if (data.title) {
    document.title = data.title;

    return sendResponse();
  }

  if (data === "waitForState") {
    return scratchAddons.localState.allReady
      ? sendResponse()
      : scratchAddons.localEvents.addEventListener("ready", () => sendResponse());
  }

  if (data === "areListenersReady") return event.source.postMessage("listeners ready", event.origin);

  return sendResponse();
});

iframe.contentWindow.postMessage("listeners ready", "*");
