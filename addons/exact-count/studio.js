export default async function({addon:t}){const a="https://api.scratch.mit.edu/studios/"+/[0-9]+/.exec(location.pathname)[0]+"/projects/?limit=40&offset=",e=await t.tab.waitForElement(".studio-tab-nav > a:first-child .tab-count"),i=e.innerText
let n=0
t.self.addEventListener("disabled",(()=>{"number"==typeof n&&(e.innerText=i)})),t.self.addEventListener("reenabled",(()=>{"number"==typeof n&&(e.innerText=`(${n})`)})),n=await async function t(a,e,i){const n=await fetch(a+40*e)
let o=(await n.json()).length
return 40===o?t(a,e+i,i):o>0?40*e+o:0===o&&0===e?0:t(a,(e-=i)+(i/=10),i)}(a,0,100),t.self.disabled||(e.innerText=`(${n})`)}