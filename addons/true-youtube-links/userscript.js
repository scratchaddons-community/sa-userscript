export default async function({addon:t}){for(;;){const u=await t.tab.waitForElement('a[href^="https://scratch.mit.edu/discuss/youtube/"], a[href^="/discuss/youtube/"]',{reduxCondition(t){return t.scratchGui?t.scratchGui.mode.isPlayerOnly:1}})
u.href=u.href.replace("https://scratch.mit.edu/discuss/youtube/","https://www.youtube.com/watch?v=")}}