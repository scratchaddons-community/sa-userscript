import t from"./paint-editor.js"
export default async o=>{const{addon:a}=o
await a.tab.loadScript(a.self.lib+"/thirdparty/cs/tinycolor-min.js"),t(o)}
