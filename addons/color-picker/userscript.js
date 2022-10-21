import o from"./code-editor.js"
import t from"./paint-editor.js"
export default async r=>{const{addon:i}=r
await i.tab.loadScript(i.self.lib+"/thirdparty/cs/tinycolor-min.js"),o(r),t(r)}
