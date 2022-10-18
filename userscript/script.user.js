// ==UserScript==
// @name        Scratch Addons
// @description Scratch Addons provides new features and themes for the scratch.mit.edu website and project editor.
// @author      scratchaddons.com
// @version     1.29.0-prerelease
// @icon        https://scratchaddons-community.github.io/sa-userscript/images/icon.svg
// @homepage    https://scratchaddons.com
// @supportURL  https://scratchaddons.com/feedback
// @updateURL   https://scratchaddons-community.github.io/sa-userscript/userscript/script.user.js
// @match       https://scratch.mit.edu/*
// @run-at      document-start
// @weight      999
// @require     https://scratchaddons-community.github.io/sa-userscript/content-scripts/load-redux.js
// @require     https://scratchaddons-community.github.io/sa-userscript/content-scripts/prototype-handler.js
// @require     https://scratchaddons-community.github.io/sa-userscript/content-scripts/fix-console.js
// @require     https://scratchaddons-community.github.io/sa-userscript/libraries/common/cs/text-color.js
// @grant       none
// @namespace   https://scratchaddons.com/
// ==/UserScript==

function updateAttrs(target, source) {
  Array.from(target.attributes).forEach((attr) => target.removeAttribute(attr.name));

  Array.from(source.attributes).forEach((attr) => target.setAttribute(attr.name, attr.value));
}

document.documentElement.append(
  Object.assign(document.createElement("script"), {
    src: "https://scratchaddons-community.github.io/sa-userscript/webpages/check-unsupported.js",
    type: "module",
  })
);

if (/^\/(scratch\-addons\-extension|scratch-addons|)\/settings\/?$/i.test(location.pathname)) {
  fetch("https://scratchaddons-community.github.io/sa-userscript/webpages/settings/scratch.html")
    .then((r) => r.text())
    .then(async (html) => {
      const dom = new DOMParser().parseFromString(html, "text/html");
      window.stop();

      updateAttrs(document.documentElement, dom.documentElement);

      if (!document.head) document.documentElement.append(document.createElement("head"));
      updateAttrs(document.head, dom.head);
      document.head.innerHTML = "";
      const deferred = [];
      for (const element of [...dom.head.children]) {
        if (element.tagName === "SCRIPT") {
          const run = async () => {
            const load = async () => {
              return await import(
                element.src
                  ? new URL(element.src, document.baseURI).href
                  : "data:text/javascript," + element.textContent
              );
            };
            if (element.async) setTimeout(async () => await load(), 0);
            else await load();
          };

          if (element.defer) deferred.push(run);
          else await run();
        } else {
          document.head.append(element.cloneNode(true));
        }
      }

      if (!document.body) document.documentElement.append(document.createElement("body"));
      updateAttrs(document.body, dom.body);
      document.body.innerHTML = dom.body.innerHTML;

      for (const run of deferred) await run();
    });
} else {
  document.documentElement.append(
    Object.assign(document.createElement("script"), {
      src: "https://scratchaddons-community.github.io/sa-userscript/content-scripts/cs.js",
      type: "module",
    })
  );
}
