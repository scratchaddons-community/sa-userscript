import*as d from"./module.js"
export default async function({addon:e}){const o=()=>{d.setDuplication(!e.self.disabled)}
e.self.addEventListener("disabled",o),e.self.addEventListener("reenabled",o),o(),d.load(e)}