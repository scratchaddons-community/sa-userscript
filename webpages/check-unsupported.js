import checkIfUnsupported, { url as getURL } from "../background/handle-unsupported-version.js";

const url = getURL();

if (checkIfUnsupported()) {
  try {
    window.top.location.href = url;
  } catch {}
  try {
    window.parent.location.href = url;
  } catch {}
  try {
    window.location.href = url;
  } catch {}
}
