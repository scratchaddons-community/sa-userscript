import chrome from "../../../libraries/common/chrome.js";

const styles = {};

/**
 * Loads Vue components.
 * @param {string[]} filenames - filenames of the components, without extensions.
 * @returns {Promise}
 */
export default (filenames) =>
  Promise.all(
    filenames.map((filename) => {
      const htmlUrl = chrome.runtime.getURL(`${filename}.html`);
      const jsUrl = chrome.runtime.getURL(`${filename}.js`);
      const jsPromise = import(jsUrl);
      return fetch(htmlUrl)
        .then((resp) => resp.text())
        .then((text) => {
          const dom = new DOMParser().parseFromString(text, "text/html");
          const css = dom.querySelector("style")?.textContent;
          if (css) {
            styles[filename] = css;
          }
          return dom.querySelector("template").innerHTML;
        })
        .then((template) => jsPromise.then((esm) => esm.default({ template })));
    })
  ).then(() =>
    filenames.forEach((filename) => {
      if (!styles[filename]) return;
      const style = document.createElement("style");
      style.textContent = styles[filename];
      const [componentName] = filename.split("/").slice(-1);
      style.setAttribute("data-vue-component", componentName); // For debugging (has no side effects)
      document.head.insertBefore(style, document.head.querySelector("[data-below-vue-components]"));
    })
  );
