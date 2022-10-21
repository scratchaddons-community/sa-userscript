export default async function({addon:e}){function t(){var e=window.getSelection()
if(0>=e.rangeCount)return""
var t=e.getRangeAt(0).cloneContents(),o=document.createElement("div")
o.appendChild(t)
let l=o.querySelectorAll("br")
for(let q of l)q.insertAdjacentText("afterend","\n")
let r=Object.assign(Object.create(null),{smile:":)",neutral:":|",sad:":(",big_smile:":D",yikes:":o",wink:";)",hmm:":/",tongue:":P",lol:":lol:",mad:":mad:",roll:":rolleyes",cool:":cool:"}),n=o.querySelectorAll("img")
for(let _ of n)/\/\/cdn\.scratch\.mit\.edu\/scratchr2\/static\/__[a-z0-9]{32}__\/djangobb_forum\/img\/smilies\/[a-z_]{3,9}\.png/.test(_.src)?r[_.src.split("smilies/")[1].split(".")[0]]?_.parentNode.insertBefore(document.createTextNode(r[_.src.split("smilies/")[1].split(".")[0]]),_):_.parentNode.insertBefore(document.createTextNode(`[img${_.src}[/img]`),_):_.parentNode.insertBefore(document.createTextNode(`[img]${_.src}[/img]`),_)
let i={italic:"i",bold:"b",big:"big",small:"small",underline:"u",strikethrough:"s"},f=o.querySelectorAll("span")
for(let h of f)if(h.className.startsWith("bb-"))h.insertAdjacentText("afterbegin",`[${i[h.className.slice(3)]}]`),h.insertAdjacentText("beforeend",`[/${i[h.className.slice(3)]}]`)
else if(h.style.color){let w=h.style.color
function c(e){var t=e.toString(16)
return 1===t.length?"0"+t:t}function a(e,t,o){return"#"+c(e)+c(t)+c(o)}if(w.startsWith("rgb")){let v=w.slice(4,w.length-1).split(/, ?/).map((e=>Number(e)))
h.insertAdjacentText("afterbegin",`[color=${a(...v).toUpperCase()}]`)}else h.insertAdjacentText("afterbegin",`[color=${w}]`)
h.insertAdjacentText("beforeend","[/color]")}let u=o.querySelectorAll("a")
for(let y of u)y.insertAdjacentText("afterbegin",`[url=${y.href}]`),y.insertAdjacentText("beforeend","[/url]")
let s=o.querySelectorAll("div")
for(let j of s)"center"===j.style.textAlign&&(j.insertAdjacentText("afterbegin","[center]"),j.insertAdjacentText("beforeend","[/center]"))
let d=o.querySelectorAll("li")
for(let z of d)z.textContent=`[*]${z.textContent}`
let b=o.querySelectorAll("ul")
for(let O of b)O.textContent=`[list]\n${O.textContent}[/list]\n`
let m=o.querySelectorAll("ol")
for(let x of m)x.textContent=`[list=1]\n${x.textContent}[/list]\n`
let g=o.getElementsByClassName("blocks")
for(let A of g)A.textContent=`[scratchblocks]\n${A.getAttribute("data-original")}\n[/scratchblocks]`
let p=o.querySelectorAll("div.code")
for(let D of p)D.textContent=`[code]\n${D.textContent}[/code]\n`
let k=o.querySelectorAll("blockquote")
for(let E of k){let I=E.querySelector("p.bb-quote-author")
E.textContent=I?`[quote=${I.textContent.slice(0,I.textContent.length-7)}]\n${E.textContent}[/quote]\n`:`[quote]\n${E.textContent}[/quote]\n`}return o.textContent}let o=document.querySelector(".markItUpEditor")
for(;;){let l=await e.tab.waitForElement(".postquote a",{markAsSeen:1})
l.setAttribute("onclick","return false"),l.addEventListener("mouseup",(()=>{let r=l.closest(".blockpost")
if(e.self.disabled)return copy_paste(r.id)
let n=window.getSelection()
n.toString()&&n.anchorNode&&r.contains(n.anchorNode)&&n.focusNode&&r.contains(n.focusNode)?o.value+=`[quote=${r.querySelector(".black.username").innerText}]${t()}[/quote]`:copy_paste(r.id),window.location.hash="#reply",o.focus()}))}}