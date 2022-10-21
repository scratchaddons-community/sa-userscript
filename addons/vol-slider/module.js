let t,s,e=1
export const setVol=t=>{s.value=t
let e=document.getElementById("sa-vol-slider"),c=document.getElementById("sa-vol-icon")
e&&(e.value=t,c.src=0==t?"/static/assets/e21225ab4b675bc61eed30cfb510c288.svg":.5>t?"/static/assets/3547fa1f2678a483a19f46852f36b426.svg":"/static/assets/b2c44c738c9cbc1a99cd6edfd0c2b85b.svg")}
export const setDefVol=t=>{e=t}
export const getDefVol=()=>e
export const isMuted=()=>0===s.value
export const setup=e=>{t||(t=e,s=t.runtime.audioEngine.inputNode.gain)}
