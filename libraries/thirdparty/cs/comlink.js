var e,t
e=this,t=function(e){function t(e,r=self){r.addEventListener("message",(function o(s){if(!s||!s.data)return
const{id:a,type:l,path:p}=Object.assign({path:[]},s.data),y=(s.data.argumentList||[]).map(f)
let E
try{const n=p.slice(0,-1).reduce(((e,t)=>e[t]),e),r=p.reduce(((e,t)=>e[t]),e)
switch(l){case"GET":E=r
break
case"SET":n[p.slice(-1)[0]]=f(s.data.value),E=1
break
case"APPLY":E=r.apply(n,y)
break
case"CONSTRUCT":E=u(new r(...y))
break
case"ENDPOINT":{const{port1:n,port2:r}=new MessageChannel
t(e,r),E=i(n,[n])}break
case"RELEASE":E=void 0
break
default:return}}catch(e){E={value:e,[b]:0}}Promise.resolve(E).catch((e=>({value:e,[b]:0}))).then((e=>{const[t,s]=c(e)
r.postMessage(Object.assign(Object.assign({},t),{id:a}),s),"RELEASE"===l&&(r.removeEventListener("message",o),n(r))}))})),r.start&&r.start()}function n(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function r(e,t){return s(e,[],t)}function o(e){if(e)throw new Error("Proxy has been released and is not useable")}function s(e,t=[],r=function(){}){let i=0
const u=new Proxy(r,{get(r,a){if(o(i),a===E)return()=>l(e,{type:"RELEASE",path:t.map((e=>e.toString()))}).then((()=>{n(e),i=1}))
if("then"===a){if(0===t.length)return{then:()=>u}
const n=l(e,{type:"GET",path:t.map((e=>e.toString()))}).then(f)
return n.then.bind(n)}return s(e,[...t,a])},set(n,r,s){o(i)
const[a,u]=c(s)
return l(e,{type:"SET",path:[...t,r].map((e=>e.toString())),value:a},u).then(f)},apply(n,r,u){o(i)
const c=t[t.length-1]
if(c===y)return l(e,{type:"ENDPOINT"}).then(f)
if("bind"===c)return s(e,t.slice(0,-1))
const[p,E]=a(u)
return l(e,{type:"APPLY",path:t.map((e=>e.toString())),argumentList:p},E).then(f)},construct(n,r){o(i)
const[s,u]=a(r)
return l(e,{type:"CONSTRUCT",path:t.map((e=>e.toString())),argumentList:s},u).then(f)}})
return u}function a(e){const t=e.map(c)
return[t.map((e=>e[0])),(n=t.map((e=>e[1])),[].concat.apply([],n))]
var n}function i(e,t){return m.set(e,t),e}function u(e){return Object.assign(e,{[p]:1})}function c(e){for(const[t,n]of d)if(n.canHandle(e)){const[r,o]=n.serialize(e)
return[{type:"HANDLER",name:t,value:r},o]}return[{type:"RAW",value:e},m.get(e)||[]]}function f(e){switch(e.type){case"HANDLER":return d.get(e.name).deserialize(e.value)
case"RAW":return e.value}}function l(e,t,n){return new Promise((r=>{const o=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-")
e.addEventListener("message",(function t(n){n.data&&n.data.id&&n.data.id===o&&(e.removeEventListener("message",t),r(n.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:o},t),n)}))}const p=Symbol("Comlink.proxy"),y=Symbol("Comlink.endpoint"),E=Symbol("Comlink.releaseProxy"),b=Symbol("Comlink.thrown"),h=e=>"object"==typeof e&&null!==e||"function"==typeof e,d=new Map([["proxy",{canHandle:e=>h(e)&&e[p],serialize(e){const{port1:n,port2:r}=new MessageChannel
return t(e,n),[r,[r]]},deserialize(e){return e.start(),r(e)}}],["throw",{canHandle:e=>h(e)&&b in e,serialize({value:e}){let t
return t=e instanceof Error?{isError:1,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:0,value:e},[t,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value)
throw e.value}}]]),m=new WeakMap
e.createEndpoint=y,e.expose=t,e.proxy=u,e.proxyMarker=p,e.releaseProxy=E,e.transfer=i,e.transferHandlers=d,e.windowEndpoint=function(e,t=self,n="*"){return{postMessage:(t,r)=>e.postMessage(t,n,r),addEventListener:t.addEventListener.bind(t),removeEventListener:t.removeEventListener.bind(t)}},e.wrap=r,Object.defineProperty(e,"__esModule",{value:1})},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).Comlink={})
