import chrome from"../../libraries/common/chrome.js"
const o=["notifications"]
"undefined"!=typeof browser&&o.push("clipboardWrite")
export const getMissingOptionalPermissions=()=>new Promise((i=>{chrome.permissions.getAll((({permissions:s})=>{const e=o.filter((o=>!s.includes(o)))
i(e)}))}))
