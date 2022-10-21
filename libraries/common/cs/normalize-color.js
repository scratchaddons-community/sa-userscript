export const getHexRegex=()=>/^#?([0-9a-fA-F]{3}){1,2}$/g
export const normalizeHex=e=>{let t=String(e)
if(!/^#?([0-9a-fA-F]{3}){1,2}$/g.test(t))return"#000000"
if(t.startsWith("#")||(t=`#${t}`),4===t.length){const[e,r,n,o]=t
t=`#${r}${r}${n}${n}${o}${o}`}return t.toLowerCase()}
