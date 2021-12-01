// ==UserScript==
// @name         Scratch Addons
// @namespace    https://scratchaddons.com/
// @version      0.0.1
// @author
// @description
// @homepage     https://scratchaddons.com/
// @icon         http://localhost:3000/images/icon.svg
// @updateURL    http://localhost:3000/userscript/script.user.js
// @supportURL   https://scratchaddons.com/feedback
// @match        https://scratch.mit.edu/*
// @require      http://localhost:3000/content-scripts/load-redux.js
// @require      http://localhost:3000/content-scripts/prototype-handler.js
// @require      http://localhost:3000/content-scripts/fix-console.js
// @require      http://localhost:3000/libraries/common/cs/text-color.js
// @run-at       document-start
// @grant        none
// ==/UserScript==

function updateAttrs(target, source) {
  Array.from(target.attributes).forEach((attr) => target.removeAttribute(attr.name));

  Array.from(source.attributes).forEach((attr) => target.setAttribute(attr.name, attr.value));
}

if (/^\/(scratch\-addons\-extension|scratch-addons|)\/settings\/?$/i.test(location.pathname)) {
  fetch("http://localhost:3000/webpages/settings/scratch.html")
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
      src: "http://localhost:3000/webpages/check-unsupported.js",
      type: "module",
    })
  );
  document.documentElement.append(
    Object.assign(document.createElement("script"), {
      src: "http://localhost:3000/content-scripts/cs.js",
      type: "module",
    })
  );
}
