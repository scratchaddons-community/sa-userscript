import o from"./DevTools.js"
export default async function({addon:n,console:d,msg:s,safeMsg:e}){if(!n.self._isDevtoolsExtension&&window.initGUI)return d.log("Extension running, stopping addon"),window._devtoolsAddonEnabled=1,void window.dispatchEvent(new CustomEvent("scratchAddonsDevtoolsAddonStopped"))
new o(n,s,e).init()}