export default class t{static startUndoGroup(t){const o=t.undoStack_
o.length&&(o[o.length-1]._devtoolsLastUndo=1)}static endUndoGroup(t){const o=t.undoStack_
setTimeout((()=>{const t=function(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%()*+,-./:;=?@[]^_`{|}~"
let o=""
for(let n=0;20>n;n++)o+=t[Math.floor(Math.random()*t.length)]
return o}()
for(let n=o.length-1;n>=0&&!o[n]._devtoolsLastUndo;n--)o[n].group=t}),0)}}