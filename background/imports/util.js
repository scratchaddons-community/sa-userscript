import chrome from "../../libraries/common/chrome.js";

const browserLevelPermissions = ["notifications"];
if (typeof browser !== "undefined") browserLevelPermissions.push("clipboardWrite");

export const getMissingOptionalPermissions = () => {
  return new Promise((resolve) => {
    chrome.permissions.getAll(({ permissions }) => {
      const missing = browserLevelPermissions.filter((p) => !permissions.includes(p));
      resolve(missing);
    });
  });
};
