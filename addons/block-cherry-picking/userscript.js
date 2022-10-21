import*as e from"../block-duplicate/module.js"
export default async function({addon:a}){const d=()=>{e.setCherryPicking(!a.self.disabled,a.settings.get("invertDrag"))}
a.self.addEventListener("disabled",d),a.self.addEventListener("reenabled",d),a.settings.addEventListener("change",d),d(),e.load(a)}