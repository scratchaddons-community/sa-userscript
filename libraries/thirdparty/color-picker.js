function t(t,e){(function(t){return"string"==typeof t&&-1!==t.indexOf(".")&&1===parseFloat(t)})(t)&&(t="100%")
var i=function(t){return"string"==typeof t&&-1!==t.indexOf("%")}(t)
return t=360===e?t:Math.min(e,Math.max(0,parseFloat(t))),i&&(t=parseInt(String(t*e),10)/100),1e-6>Math.abs(t-e)?1:t=360===e?(0>t?t%e+e:t%e)/parseFloat(String(e)):t%e/parseFloat(String(e))}function e(t){return Math.min(1,Math.max(0,t))}function i(t){return t=parseFloat(t),(isNaN(t)||0>t||t>1)&&(t=1),t}function r(t){return t>1?t:100*Number(t)+"%"}function s(t){return 1===t.length?"0"+t:String(t)}function n(e,i,r){e=t(e,255),i=t(i,255),r=t(r,255)
var s=Math.max(e,i,r),n=Math.min(e,i,r),a=0,o=0,h=(s+n)/2
if(s===n)o=0,a=0
else{var l=s-n
switch(o=h>.5?l/(2-s-n):l/(s+n),s){case e:a=(i-r)/l+(r>i?6:0)
break
case i:a=(r-e)/l+2
break
case r:a=(e-i)/l+4}a/=6}return{h:a,s:o,l:h}}function a(t,e,i){return 0>i&&(i+=1),i>1&&(i-=1),1/6>i?t+6*i*(e-t):.5>i?e:2/3>i?t+(e-t)*(2/3-i)*6:t}function o(e,i,r){e=t(e,255),i=t(i,255),r=t(r,255)
var s=Math.max(e,i,r),n=Math.min(e,i,r),a=0,o=s,h=s-n,l=0===s?0:h/s
if(s===n)a=0
else{switch(s){case e:a=(i-r)/h+(r>i?6:0)
break
case i:a=(r-e)/h+2
break
case r:a=(e-i)/h+4}a/=6}return{h:a,s:l,v:o}}function h(t,e,i,r){var n=[s(Math.round(t).toString(16)),s(Math.round(e).toString(16)),s(Math.round(i).toString(16))]
return r&&n[0].startsWith(n[0].charAt(1))&&n[1].startsWith(n[1].charAt(1))&&n[2].startsWith(n[2].charAt(1))?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0):n.join("")}function l(t){return c(t)/255}function c(t){return parseInt(t,16)}function u(t){return Boolean(D.CSS_UNIT.exec(String(t)))}function d(t,e){const{element:{content:i},parts:r}=t,s=document.createTreeWalker(i,133,null,0)
let n=q(r),a=r[n],o=-1,h=0
const l=[]
let c=null
for(;s.nextNode();){o++
const t=s.currentNode
for(t.previousSibling===c&&(c=null),e.has(t)&&(l.push(t),null===c&&(c=t)),null!==c&&h++;void 0!==a&&a.index===o;)a.index=null!==c?-1:a.index-h,n=q(r,n),a=r[n]}l.forEach((t=>t.parentNode.removeChild(t)))}function f(t){let e=ht.get(t.type)
void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},ht.set(t.type,e))
let i=e.stringsArray.get(t.strings)
if(void 0!==i)return i
const r=t.strings.join(P)
return i=e.keyString.get(r),void 0===i&&(i=new N(t,t.getTemplateElement()),e.keyString.set(r,i)),e.stringsArray.set(t.strings,i),i}function p(){if("Tab"===window.__focusVisiblePolyFillLastKeyDown)return b.call(this)
g.call(this)}function b(){this.classList.add("focus-visible")}function g(){this.classList.remove("focus-visible")}function m(){g.call(this)}const v=t=>class extends t{constructor(){super(),this.constructor.__saveInitialPropertyValues.call(this),this.constructor.__initProperties.call(this)}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this.constructor.__setInitialPropertyValues.call(this)}static __saveInitialPropertyValues(){this.__initialPropertyValues=new Map,(this.constructor.observedProperties||[]).map((t=>this.__initialPropertyValues.set(t,this[t])))}static __setInitialPropertyValues(){this.__initialPropertyValues.forEach(((t,e)=>{void 0!==t&&(this[e]=t)}))}static __initProperties(){this.constructor.__propertyAccessors={},(this.constructor.observedProperties||[]).map((t=>this.constructor.__initProperty.call(this,t)))}static __initProperty(t){this.constructor.__propertyAccessors[t]=this.__getPropertyDescriptor(this,t),Object.defineProperty(this,t,{set(e){this.constructor.__setProperty.call(this,t,e)},get(){return this.constructor.__getProperty.call(this,t)}})}static __getProperty(t){const e=this.constructor.__propertyAccessors[t]||{}
return e.get?e.get.call(this,t):this[`#${t}`]}static __setProperty(t,e){const i=this.constructor.__propertyAccessors[t]||{},r=this[t]
i.set?i.set.call(this,e):this[`#${t}`]=e,this.constructor.__propertyValueChanged.call(this,t,r,this[t])}static __propertyValueChanged(t,e,i){if(e!==i){try{if(JSON.stringify(e)===JSON.stringify(i))return}catch(t){}this.propertyChangedCallback&&this.propertyChangedCallback(t,e,i)}}__getPropertyDescriptor(t,e){if(t)return Object.getOwnPropertyDescriptor(t,e)||this.__getPropertyDescriptor(Object.getPrototypeOf(t),e)}},w=t=>class extends t{static get observedAttributes(){const t=[],e=this.DOMProperties||[]
for(let i in e)t.push((this.propertyAttributeNames||{})[e[i]]||e[i].toLowerCase())
return t}attributeChangedCallback(t,e,i){if(e===i)return
const r=this.constructor.__getPropertyNameByAttributeName.call(this,t)
r&&this.constructor.__setDOMProperty.call(this,r,this[r],i)}static __getPropertyNameByAttributeName(t){const e=this.constructor.propertyAttributeNames
for(let i in e)if(e[i]===t)return i
const i=this.constructor.DOMProperties||[]
for(let e in i)if(i[e].toLowerCase()===t)return i[e]}static __setDOMProperty(t,e,i){const r=(this.constructor.propertyFromAttributeConverters||{})[t]
r&&(i=r.call(this,e,i)),this[t]=i}},y=t=>class extends t{connectedCallback(){for(var t in super.connectedCallback(),this.constructor.reflectedProperties){const e=this.constructor.reflectedProperties[t],i=this.constructor.__getAttributeNameByPropertyName.call(this,e)
this.constructor.__setDOMAttribute.call(this,i,e,this[e])}}propertyChangedCallback(t,e,i){if(super.propertyChangedCallback&&super.propertyChangedCallback(t,e,i),!this.isConnected)return
if(-1===(this.constructor.reflectedProperties||{}).indexOf(t))return
const r=this.constructor.__getAttributeNameByPropertyName.call(this,t)
this.constructor.__setDOMAttribute.call(this,r,t,i)}static __setDOMAttribute(t,e,i){const r=(this.constructor.propertyToAttributeConverters||{})[e]
if(r&&(i=r.call(this,i)),null==i)return this.removeAttribute(t)
this.setAttribute(t,i)}static __getAttributeNameByPropertyName(t){const e=this.constructor.propertyAttributeNames||{}
if(-1!==(this.constructor.reflectedProperties||[]).indexOf(t))return e[t]||t.toLowerCase()}},x=t=>class extends(y(w(v(t)))){static get properties(){return{}}static get observedProperties(){return Object.keys(this.__getFilteredProperties.call(this,"observe",1))}static get DOMProperties(){return Object.keys(this.__getFilteredProperties.call(this,"DOM",1))}static get reflectedProperties(){return Object.keys(this.__getFilteredProperties.call(this,"reflect",1))}static get propertyChangedHandlers(){return this.__getPropertyValues.call(this,"changedHandler")}static get propertyAttributeNames(){const t={},e=this.properties
for(let i in e)t[i]=e[i].attributeName||i.toLowerCase()
return t}static get propertyToAttributeConverters(){return this.__getPropertyValues.call(this,"toAttributeConverter")}static get propertyFromAttributeConverters(){return this.__getPropertyValues.call(this,"fromAttributeConverter")}static __getFilteredProperties(t,e){const i={},r=this.properties
for(let s in r)r[s][t]===e&&(i[s]=r[s])
return i}static __getPropertyValues(t){const e={},i=this.properties
for(let r in i)e[r]=i[r][t]
return e}},k=t=>class extends t{propertyChangedCallback(t,e,i){super.propertyChangedCallback&&super.propertyChangedCallback(t,e,i),this.constructor.__callPropertyHandlers.call(this,t,e,i)}static __callPropertyHandlers(t,e,i){const r=(this.constructor.propertyChangedHandlers||{})[t]
if(r&&r.constructor)if("Function"===r.constructor.name)r.call(this,e,i)
else if("String"===r.constructor.name&&this[r])return this[r].call(this,e,i)}},M=t=>class extends t{propertiesChangedCallback(t,e,i){super.propertiesChangedCallback&&super.propertiesChangedCallback(t,e,i),this.constructor.__callMultiPropertyHandlers.call(this,t)}static __callMultiPropertyHandlers(t){const e=new Map,i=this.constructor.propertiesChangedHandlers||{}
for(let r in t)for(let s in i){const n=i[s];-1!==n.indexOf(t[r])&&e.set(s,n)}e.forEach(((t,e)=>this[e].call(this,...t.map((t=>this[t])))))}static get propertiesChangedHandlers(){return{}}},C=t=>class extends t{propertyChangedCallback(t,e,i){super.propertyChangedCallback&&super.propertyChangedCallback(t,e,i),this.__changedProperties||(this.__changedProperties=new Map),this.constructor.__addChangedProperty.call(this,t,e)}static __addChangedProperty(t,e){this.__changedProperties.has(t)||this.__changedProperties.set(t,e),window.requestAnimationFrame(this.constructor.__invokeCallback.bind(this))}static __invokeCallback(){if(0===this.__changedProperties.size)return
const t={},e={}
this.__changedProperties.forEach(((e,i)=>t[i]=e)),this.__changedProperties.forEach(((t,i)=>e[i]=this[i]))
const i=Object.keys(t)
this.__changedProperties.clear(),this.propertiesChangedCallback&&this.propertiesChangedCallback(i,t,e)}}
var A={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},_="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",O="[\\s|\\(]+("+_+")[,|\\s]+("+_+")[,|\\s]+("+_+")\\s*\\)?",S="[\\s|\\(]+("+_+")[,|\\s]+("+_+")[,|\\s]+("+_+")[,|\\s]+("+_+")\\s*\\)?",D={CSS_UNIT:new RegExp(_),rgb:new RegExp("rgb"+O),rgba:new RegExp("rgba"+S),hsl:new RegExp("hsl"+O),hsla:new RegExp("hsla"+S),hsv:new RegExp("hsv"+O),hsva:new RegExp("hsva"+S),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/},I=function(){function d(e,s){var n
if(void 0===e&&(e=""),void 0===s&&(s={}),e instanceof d)return e
"number"==typeof e&&(e=function(t){return{r:t>>16,g:(65280&t)>>8,b:255&t}}(e)),this.originalInput=e
var o=function(e){var s,n,o={r:0,g:0,b:0},h=1,d=null,f=null,p=null,b=0,g=0
return"string"==typeof e&&(e=function(t){if(0===(t=t.trim().toLowerCase()).length)return 0
var e=0
if(A[t])t=A[t],e=1
else if("transparent"===t)return{r:0,g:0,b:0,a:0,format:"name"}
var i=D.rgb.exec(t)
return i?{r:i[1],g:i[2],b:i[3]}:(i=D.rgba.exec(t))?{r:i[1],g:i[2],b:i[3],a:i[4]}:(i=D.hsl.exec(t))?{h:i[1],s:i[2],l:i[3]}:(i=D.hsla.exec(t))?{h:i[1],s:i[2],l:i[3],a:i[4]}:(i=D.hsv.exec(t))?{h:i[1],s:i[2],v:i[3]}:(i=D.hsva.exec(t))?{h:i[1],s:i[2],v:i[3],a:i[4]}:(i=D.hex8.exec(t))?{r:c(i[1]),g:c(i[2]),b:c(i[3]),a:l(i[4]),format:e?"name":"hex8"}:(i=D.hex6.exec(t))?{r:c(i[1]),g:c(i[2]),b:c(i[3]),format:e?"name":"hex"}:(i=D.hex4.exec(t))?{r:c(i[1]+i[1]),g:c(i[2]+i[2]),b:c(i[3]+i[3]),a:l(i[4]+i[4]),format:e?"name":"hex8"}:(i=D.hex3.exec(t))?{r:c(i[1]+i[1]),g:c(i[2]+i[2]),b:c(i[3]+i[3]),format:e?"name":"hex"}:0}(e)),"object"==typeof e&&(u(e.r)&&u(e.g)&&u(e.b)?(s=e.g,n=e.b,o={r:255*t(e.r,255),g:255*t(s,255),b:255*t(n,255)},b=1,g="%"===String(e.r).substr(-1)?"prgb":"rgb"):u(e.h)&&u(e.s)&&u(e.v)?(d=r(e.s),f=r(e.v),o=function(e,i,r){e=6*t(e,360),i=t(i,100),r=t(r,100)
var s=Math.floor(e),n=e-s,a=r*(1-i),o=r*(1-n*i),h=r*(1-(1-n)*i),l=s%6
return{r:255*[r,o,a,a,h,r][l],g:255*[h,r,r,o,a,a][l],b:255*[a,a,h,r,r,o][l]}}(e.h,d,f),b=1,g="hsv"):u(e.h)&&u(e.s)&&u(e.l)&&(d=r(e.s),p=r(e.l),o=function(e,i,r){var s,n,o
if(e=t(e,360),i=t(i,100),r=t(r,100),0===i)n=r,o=r,s=r
else{var h=.5>r?r*(1+i):r+i-r*i,l=2*r-h
s=a(l,h,e+1/3),n=a(l,h,e),o=a(l,h,e-1/3)}return{r:255*s,g:255*n,b:255*o}}(e.h,d,p),b=1,g="hsl"),{}.hasOwnProperty.call(e,"a")&&(h=e.a)),h=i(h),{ok:b,format:e.format||g,r:Math.min(255,Math.max(o.r,0)),g:Math.min(255,Math.max(o.g,0)),b:Math.min(255,Math.max(o.b,0)),a:h}}(e)
this.originalInput=e,this.r=o.r,this.g=o.g,this.b=o.b,this.a=o.a,this.roundA=Math.round(100*this.a)/100,this.format=null!==(n=s.format)&&void 0!==n?n:o.format,this.gradientType=s.gradientType,1>this.r&&(this.r=Math.round(this.r)),1>this.g&&(this.g=Math.round(this.g)),1>this.b&&(this.b=Math.round(this.b)),this.isValid=o.ok}return d.prototype.isDark=function(){return 128>this.getBrightness()},d.prototype.isLight=function(){return!this.isDark()},d.prototype.getBrightness=function(){var t=this.toRgb()
return(299*t.r+587*t.g+114*t.b)/1e3},d.prototype.getLuminance=function(){var t=this.toRgb(),e=t.r/255,i=t.g/255,r=t.b/255
return.2126*(e>.03928?Math.pow((e+.055)/1.055,2.4):e/12.92)+.7152*(i>.03928?Math.pow((i+.055)/1.055,2.4):i/12.92)+.0722*(r>.03928?Math.pow((r+.055)/1.055,2.4):r/12.92)},d.prototype.getAlpha=function(){return this.a},d.prototype.setAlpha=function(t){return this.a=i(t),this.roundA=Math.round(100*this.a)/100,this},d.prototype.toHsv=function(){var t=o(this.r,this.g,this.b)
return{h:360*t.h,s:t.s,v:t.v,a:this.a}},d.prototype.toHsvString=function(){var t=o(this.r,this.g,this.b),e=Math.round(360*t.h),i=Math.round(100*t.s),r=Math.round(100*t.v)
return 1===this.a?"hsv("+e+", "+i+"%, "+r+"%)":"hsva("+e+", "+i+"%, "+r+"%, "+this.roundA+")"},d.prototype.toHsl=function(){var t=n(this.r,this.g,this.b)
return{h:360*t.h,s:t.s,l:t.l,a:this.a}},d.prototype.toHslString=function(){var t=n(this.r,this.g,this.b),e=Math.round(360*t.h),i=Math.round(100*t.s),r=Math.round(100*t.l)
return 1===this.a?"hsl("+e+", "+i+"%, "+r+"%)":"hsla("+e+", "+i+"%, "+r+"%, "+this.roundA+")"},d.prototype.toHex=function(t){return void 0===t&&(t=0),h(this.r,this.g,this.b,t)},d.prototype.toHexString=function(t){return void 0===t&&(t=0),"#"+this.toHex(t)},d.prototype.toHex8=function(t){return void 0===t&&(t=0),function(t,e,i,r,n){var a,o=[s(Math.round(t).toString(16)),s(Math.round(e).toString(16)),s(Math.round(i).toString(16)),s((a=r,Math.round(255*parseFloat(a)).toString(16)))]
return n&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))&&o[3].startsWith(o[3].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0):o.join("")}(this.r,this.g,this.b,this.a,t)},d.prototype.toHex8String=function(t){return void 0===t&&(t=0),"#"+this.toHex8(t)},d.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},d.prototype.toRgbString=function(){var t=Math.round(this.r),e=Math.round(this.g),i=Math.round(this.b)
return 1===this.a?"rgb("+t+", "+e+", "+i+")":"rgba("+t+", "+e+", "+i+", "+this.roundA+")"},d.prototype.toPercentageRgb=function(){var e=function(e){return Math.round(100*t(e,255))+"%"}
return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}},d.prototype.toPercentageRgbString=function(){var e=function(e){return Math.round(100*t(e,255))}
return 1===this.a?"rgb("+e(this.r)+"%, "+e(this.g)+"%, "+e(this.b)+"%)":"rgba("+e(this.r)+"%, "+e(this.g)+"%, "+e(this.b)+"%, "+this.roundA+")"},d.prototype.toName=function(){if(0===this.a)return"transparent"
if(1>this.a)return 0
for(var t="#"+h(this.r,this.g,this.b,0),e=0,i=Object.entries(A);i.length>e;e++){var r=i[e]
if(t===r[1])return r[0]}return 0},d.prototype.toString=function(t){var e=Boolean(t)
t=null!=t?t:this.format
var i=0
return e||this.a>=1||0>this.a||!t.startsWith("hex")&&"name"!==t?("rgb"===t&&(i=this.toRgbString()),"prgb"===t&&(i=this.toPercentageRgbString()),"hex"!==t&&"hex6"!==t||(i=this.toHexString()),"hex3"===t&&(i=this.toHexString(1)),"hex4"===t&&(i=this.toHex8String(1)),"hex8"===t&&(i=this.toHex8String()),"name"===t&&(i=this.toName()),"hsl"===t&&(i=this.toHslString()),"hsv"===t&&(i=this.toHsvString()),i||this.toHexString()):"name"===t&&0===this.a?this.toName():this.toRgbString()},d.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},d.prototype.clone=function(){return new d(this.toString())},d.prototype.lighten=function(t){void 0===t&&(t=10)
var i=this.toHsl()
return i.l+=t/100,i.l=e(i.l),new d(i)},d.prototype.brighten=function(t){void 0===t&&(t=10)
var e=this.toRgb()
return e.r=Math.max(0,Math.min(255,e.r-Math.round(-t/100*255))),e.g=Math.max(0,Math.min(255,e.g-Math.round(-t/100*255))),e.b=Math.max(0,Math.min(255,e.b-Math.round(-t/100*255))),new d(e)},d.prototype.darken=function(t){void 0===t&&(t=10)
var i=this.toHsl()
return i.l-=t/100,i.l=e(i.l),new d(i)},d.prototype.tint=function(t){return void 0===t&&(t=10),this.mix("white",t)},d.prototype.shade=function(t){return void 0===t&&(t=10),this.mix("black",t)},d.prototype.desaturate=function(t){void 0===t&&(t=10)
var i=this.toHsl()
return i.s-=t/100,i.s=e(i.s),new d(i)},d.prototype.saturate=function(t){void 0===t&&(t=10)
var i=this.toHsl()
return i.s+=t/100,i.s=e(i.s),new d(i)},d.prototype.greyscale=function(){return this.desaturate(100)},d.prototype.spin=function(t){var e=this.toHsl(),i=(e.h+t)%360
return e.h=0>i?360+i:i,new d(e)},d.prototype.mix=function(t,e){void 0===e&&(e=50)
var i=this.toRgb(),r=new d(t).toRgb(),s=e/100
return new d({r:(r.r-i.r)*s+i.r,g:(r.g-i.g)*s+i.g,b:(r.b-i.b)*s+i.b,a:(r.a-i.a)*s+i.a})},d.prototype.analogous=function(t,e){void 0===t&&(t=6),void 0===e&&(e=30)
var i=this.toHsl(),r=360/e,s=[this]
for(i.h=(i.h-(r*t>>1)+720)%360;--t;)i.h=(i.h+r)%360,s.push(new d(i))
return s},d.prototype.complement=function(){var t=this.toHsl()
return t.h=(t.h+180)%360,new d(t)},d.prototype.monochromatic=function(t){void 0===t&&(t=6)
for(var e=this.toHsv(),i=e.h,r=e.s,s=e.v,n=[],a=1/t;t--;)n.push(new d({h:i,s:r,v:s})),s=(s+a)%1
return n},d.prototype.splitcomplement=function(){var t=this.toHsl(),e=t.h
return[this,new d({h:(e+72)%360,s:t.s,l:t.l}),new d({h:(e+216)%360,s:t.s,l:t.l})]},d.prototype.onBackground=function(t){var e=this.toRgb(),i=new d(t).toRgb()
return new d({r:i.r+(e.r-i.r)*e.a,g:i.g+(e.g-i.g)*e.a,b:i.b+(e.b-i.b)*e.a})},d.prototype.triad=function(){return this.polyad(3)},d.prototype.tetrad=function(){return this.polyad(4)},d.prototype.polyad=function(t){for(var e=this.toHsl(),i=e.h,r=[this],s=360/t,n=1;t>n;n++)r.push(new d({h:(i+n*s)%360,s:e.s,l:e.l}))
return r},d.prototype.equals=function(t){return this.toRgbString()===new d(t).toRgbString()},d}()
const F="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,$=(t,e,i=null)=>{for(;e!==i;){const i=e.nextSibling
t.removeChild(e),e=i}},P=`{{lit-${String(Math.random()).slice(2)}}}`,E=`\x3c!--${P}--\x3e`,H=new RegExp(`${P}|${E}`)
class N{constructor(t,e){this.parts=[],this.element=e
const i=[],r=[],s=document.createTreeWalker(e.content,133,null,0)
let n=0,a=-1,o=0
const{strings:h,values:{length:l}}=t
for(;l>o;){const t=s.nextNode()
if(null!==t){if(a++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:i}=e
let r=0
for(let t=0;i>t;t++)j(e[t].name,"$lit$")&&r++
for(;r-- >0;){const e=V.exec(h[o])[2],i=e.toLowerCase()+"$lit$",r=t.getAttribute(i)
t.removeAttribute(i)
const s=r.split(H)
this.parts.push({type:"attribute",index:a,name:e,strings:s}),o+=s.length-1}}"TEMPLATE"===t.tagName&&(r.push(t),s.currentNode=t.content)}else if(3===t.nodeType){const e=t.data
if(e.indexOf(P)>=0){const r=t.parentNode,s=e.split(H),n=s.length-1
for(let e=0;n>e;e++){let i,n=s[e]
if(""===n)i=T()
else{const t=V.exec(n)
null!==t&&j(t[2],"$lit$")&&(n=n.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),i=document.createTextNode(n)}r.insertBefore(i,t),this.parts.push({type:"node",index:++a})}""===s[n]?(r.insertBefore(T(),t),i.push(t)):t.data=s[n],o+=n}}else if(8===t.nodeType)if(t.data===P){const e=t.parentNode
null!==t.previousSibling&&a!==n||(a++,e.insertBefore(T(),t)),n=a,this.parts.push({type:"node",index:a}),null===t.nextSibling?t.data="":(i.push(t),a--),o++}else{let e=-1
for(;-1!==(e=t.data.indexOf(P,e+1));)this.parts.push({type:"node",index:-1}),o++}}else s.currentNode=r.pop()}for(const t of i)t.parentNode.removeChild(t)}}const j=(t,e)=>{const i=t.length-e.length
return i>=0&&t.slice(i)===e},z=t=>-1!==t.index,T=()=>document.createComment(""),V=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/,R=t=>{let e=11===t.nodeType?0:1
const i=document.createTreeWalker(t,133,null,0)
for(;i.nextNode();)e++
return e},q=(t,e=-1)=>{for(let i=e+1;t.length>i;i++)if(z(t[i]))return i
return-1},B=new WeakMap,U=t=>"function"==typeof t&&B.has(t),L={},K={}
class W{constructor(t,e,i){this.__parts=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0
for(const i of this.__parts)void 0!==i&&i.setValue(t[e]),e++
for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=F?this.template.element.content.cloneNode(1):document.importNode(this.template.element.content,1),e=[],i=this.template.parts,r=document.createTreeWalker(t,133,null,0)
let s,n=0,a=0,o=r.nextNode()
for(;i.length>n;)if(s=i[n],z(s)){for(;s.index>a;)a++,"TEMPLATE"===o.nodeName&&(e.push(o),r.currentNode=o.content),null===(o=r.nextNode())&&(r.currentNode=e.pop(),o=r.nextNode())
if("node"===s.type){const t=this.processor.handleTextExpression(this.options)
t.insertAfterNode(o.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(o,s.name,s.strings,this.options))
n++}else this.__parts.push(void 0),n++
return F&&(document.adoptNode(t),customElements.upgrade(t)),t}}const G=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML(t){return t}}),J=` ${P} `
class Q{constructor(t,e,i,r){this.strings=t,this.values=e,this.type=i,this.processor=r}getHTML(){const t=this.strings.length-1
let e="",i=0
for(let r=0;t>r;r++){const t=this.strings[r],s=t.lastIndexOf("\x3c!--")
i=(s>-1||i)&&-1===t.indexOf("--\x3e",s+1)
const n=V.exec(t)
e+=null===n?t+(i?J:E):t.substr(0,n.index)+n[1]+n[2]+"$lit$"+n[3]+P}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template")
let e=this.getHTML()
return void 0!==G&&(e=G.createHTML(e)),t.innerHTML=e,t}}const X=t=>null===t||!("object"==typeof t||"function"==typeof t),Y=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator])
class Z{constructor(t,e,i){this.dirty=1,this.element=t,this.name=e,this.strings=i,this.parts=[]
for(let t=0;i.length-1>t;t++)this.parts[t]=this._createPart()}_createPart(){return new tt(this)}_getValue(){const t=this.strings,e=t.length-1,i=this.parts
if(1===e&&""===t[0]&&""===t[1]){const t=i[0].value
if("symbol"==typeof t)return String(t)
if("string"==typeof t||!Y(t))return t}let r=""
for(let s=0;e>s;s++){r+=t[s]
const e=i[s]
if(void 0!==e){const t=e.value
if(X(t)||!Y(t))r+="string"==typeof t?t:String(t)
else for(const e of t)r+="string"==typeof e?e:String(e)}}return r+=t[e],r}commit(){this.dirty&&(this.dirty=0,this.element.setAttribute(this.name,this._getValue()))}}class tt{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===L||X(t)&&t===this.value||(this.value=t,U(t)||(this.committer.dirty=1))}commit(){for(;U(this.value);){const t=this.value
this.value=L,t(this)}this.value!==L&&this.committer.commit()}}class et{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(T()),this.endNode=t.appendChild(T())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=T()),t.__insert(this.endNode=T())}insertAfterPart(t){t.__insert(this.startNode=T()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return
for(;U(this.__pendingValue);){const t=this.__pendingValue
this.__pendingValue=L,t(this)}const t=this.__pendingValue
t!==L&&(X(t)?t!==this.value&&this.__commitText(t):t instanceof Q?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):Y(t)?this.__commitIterable(t):t===K?(this.value=K,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t)
e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.__commitNode(document.createTextNode(i)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t)
if(this.value instanceof W&&this.value.template===e)this.value.update(t.values)
else{const i=new W(e,t.processor,this.options),r=i._clone()
i.update(t.values),this.__commitNode(r),this.value=i}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear())
const e=this.value
let i,r=0
for(const s of t)i=e[r],void 0===i&&(i=new et(this.options),e.push(i),0===r?i.appendIntoPart(this):i.insertAfterPart(e[r-1])),i.setValue(s),i.commit(),r++
e.length>r&&(e.length=r,this.clear(i&&i.endNode))}clear(t=this.startNode){$(this.startNode.parentNode,t.nextSibling,this.endNode)}}class it{constructor(t,e,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression")
this.element=t,this.name=e,this.strings=i}setValue(t){this.__pendingValue=t}commit(){for(;U(this.__pendingValue);){const t=this.__pendingValue
this.__pendingValue=L,t(this)}if(this.__pendingValue===L)return
const t=!!this.__pendingValue
this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=L}}class rt extends Z{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new st(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=0,this.element[this.name]=this._getValue())}}class st extends tt{}let nt=0;(()=>{try{const t={get capture(){return nt=1,0}}
window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})()
class at{constructor(t,e,i){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;U(this.__pendingValue);){const t=this.__pendingValue
this.__pendingValue=L,t(this)}if(this.__pendingValue===L)return
const t=this.__pendingValue,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),r=null!=t&&(null==e||i)
i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=ot(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=L}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const ot=t=>t&&(nt?{capture:t.capture,passive:t.passive,once:t.once}:t.capture),ht=new Map,lt=new WeakMap,ct=new class{handleAttributeExpressions(t,e,i,r){const s=e[0]
return"."===s?new rt(t,e.slice(1),i).parts:"@"===s?[new at(t,e.slice(1),r.eventContext)]:"?"===s?[new it(t,e.slice(1),i)]:new Z(t,e,i).parts}handleTextExpression(t){return new et(t)}}
"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1")
const ut=(t,...e)=>new Q(t,e,"html",ct),dt=(t,e)=>`${t}--${e}`
let ft=1
void 0===window.ShadyCSS?ft=0:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),ft=0)
const pt=t=>e=>{const i=dt(e.type,t)
let r=ht.get(i)
void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},ht.set(i,r))
let s=r.stringsArray.get(e.strings)
if(void 0!==s)return s
const n=e.strings.join(P)
if(s=r.keyString.get(n),void 0===s){const i=e.getTemplateElement()
ft&&window.ShadyCSS.prepareTemplateDom(i,t),s=new N(e,i),r.keyString.set(n,s)}return r.stringsArray.set(e.strings,s),s},bt=["html","svg"],gt=new Set,mt=(t,e,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.")
const r=i.scopeName,s=lt.has(e),n=ft&&11===e.nodeType&&!!e.host,a=n&&!gt.has(r),o=a?document.createDocumentFragment():e
if(((t,e,i)=>{let r=lt.get(e)
void 0===r&&($(e,e.firstChild),lt.set(e,r=new et(Object.assign({templateFactory:f},i))),r.appendInto(e)),r.setValue(t),r.commit()})(t,o,Object.assign({templateFactory:pt(r)},i)),a){const t=lt.get(o)
lt.delete(o),((t,e,i)=>{gt.add(t)
const r=i?i.element:document.createElement("template"),s=e.querySelectorAll("style"),{length:n}=s
if(0===n)return void window.ShadyCSS.prepareTemplateStyles(r,t)
const a=document.createElement("style")
for(let t=0;n>t;t++){const e=s[t]
e.parentNode.removeChild(e),a.textContent+=e.textContent}(t=>{bt.forEach((e=>{const i=ht.get(dt(e,t))
void 0!==i&&i.keyString.forEach((t=>{const{element:{content:e}}=t,i=new Set
Array.from(e.querySelectorAll("style")).forEach((t=>{i.add(t)})),d(t,i)}))}))})(t)
const o=r.content
i?function(t,e,i=null){const{element:{content:r},parts:s}=t
if(null==i)return void r.appendChild(e)
const n=document.createTreeWalker(r,133,null,0)
let a=q(s),o=0,h=-1
for(;n.nextNode();)for(h++,n.currentNode===i&&(o=R(e),i.parentNode.insertBefore(e,i));-1!==a&&s[a].index===h;){if(o>0){for(;-1!==a;)s[a].index+=o,a=q(s,a)
return}a=q(s,a)}}(i,a,o.firstChild):o.insertBefore(a,o.firstChild),window.ShadyCSS.prepareTemplateStyles(r,t)
const h=o.querySelector("style")
if(window.ShadyCSS.nativeShadow&&null!==h)e.insertBefore(h.cloneNode(1),e.firstChild)
else if(i){o.insertBefore(a,o.firstChild)
const t=new Set
t.add(a),d(i,t)}})(r,o,t.value instanceof W?t.value.template:void 0),$(e,e.firstChild),e.appendChild(o),lt.set(e,t)}!s&&n&&window.ShadyCSS.styleElement(e.host)},vt={fromAttribute(t,e){return""===e},toAttribute(t){if(t)return""}},wt={fromAttribute(t,e){return t||e?""===e?null:e?Number(e):e:t},toAttribute(t){if(!isNaN(t))return t}},yt={fromAttribute(t,e){return t||e?e?String(e):e:t},toAttribute(t){if(""!==t)return t}}
class xt extends(x(HTMLElement)){static get properties(){return{accept:{observe:1,DOM:1,reflect:1,fromAttributeConverter:yt.fromAttribute,toAttributeConverter:yt.toAttribute},accessKey:{observe:1,DOM:1,reflect:1,fromAttributeConverter:yt.fromAttribute,toAttributeConverter:yt.toAttribute},alt:{observe:1,DOM:1,reflect:1,fromAttributeConverter:yt.fromAttribute,toAttributeConverter:yt.toAttribute},autocomplete:{observe:1,DOM:1,reflect:1,fromAttributeConverter:vt.fromAttribute,toAttributeConverter:vt.toAttribute},autofocus:{observe:1,DOM:1,reflect:1,fromAttributeConverter:vt.fromAttribute,toAttributeConverter:vt.toAttribute},capture:{observe:1,DOM:1,reflect:1,fromAttributeConverter:yt.fromAttribute,toAttributeConverter:yt.toAttribute},checked:{observe:1,DOM:1,reflect:1,fromAttributeConverter:vt.fromAttribute,toAttributeConverter:vt.toAttribute},dirname:{observe:1,DOM:1,reflect:1,fromAttributeConverter:yt.fromAttribute,toAttributeConverter:yt.toAttribute},disabled:{observe:1,DOM:1,reflect:1,fromAttributeConverter:vt.fromAttribute,toAttributeConverter:vt.toAttribute},height:{observe:1,DOM:1,reflect:1,fromAttributeConverter:wt.fromAttribute,toAttributeConverter:wt.toAttribute},inputmode:{observe:1,DOM:1,reflect:1,fromAttributeConverter:yt.fromAttribute,toAttributeConverter:yt.toAttribute},max:{observe:1,DOM:1,reflect:1,fromAttributeConverter:wt.fromAttribute,toAttributeConverter:wt.toAttribute},maxlength:{observe:1,DOM:1,reflect:1,fromAttributeConverter:wt.fromAttribute,toAttributeConverter:wt.toAttribute},name:{observe:1,DOM:1,reflect:1,fromAttributeConverter:yt.fromAttribute,toAttributeConverter:yt.toAttribute},min:{observe:1,DOM:1,reflect:1,fromAttributeConverter:wt.fromAttribute,toAttributeConverter:wt.toAttribute},minlength:{observe:1,DOM:1,reflect:1,fromAttributeConverter:wt.fromAttribute,toAttributeConverter:wt.toAttribute},multiple:{observe:1,DOM:1,reflect:1,fromAttributeConverter:vt.fromAttribute,toAttributeConverter:vt.toAttribute},pattern:{observe:1,DOM:1,reflect:1,fromAttributeConverter:yt.fromAttribute,toAttributeConverter:yt.toAttribute},placeholder:{observe:1,DOM:1,reflect:1,fromAttributeConverter:yt.fromAttribute,toAttributeConverter:yt.toAttribute},readonly:{observe:1,DOM:1,reflect:1,fromAttributeConverter:vt.fromAttribute,toAttributeConverter:vt.toAttribute},required:{observe:1,DOM:1,reflect:1,fromAttributeConverter:vt.fromAttribute,toAttributeConverter:vt.toAttribute},size:{observe:1,DOM:1,reflect:1,fromAttributeConverter:wt.fromAttribute,toAttributeConverter:wt.toAttribute},src:{observe:1,DOM:1,reflect:1,fromAttributeConverter:yt.fromAttribute,toAttributeConverter:yt.toAttribute},step:{observe:1,DOM:1,reflect:1,fromAttributeConverter:wt.fromAttribute,toAttributeConverter:wt.toAttribute},width:{observe:1,DOM:1,reflect:1,fromAttributeConverter:wt.fromAttribute,toAttributeConverter:wt.toAttribute},tabIndex:{observe:1,DOM:1,reflect:1,fromAttributeConverter:wt.fromAttribute,toAttributeConverter:wt.toAttribute},type:{observe:1,DOM:1,reflect:1,fromAttributeConverter:yt.fromAttribute,toAttributeConverter:yt.toAttribute},value:{observe:1,DOM:1,fromAttributeConverter:yt.fromAttribute,toAttributeConverter:yt.toAttribute},__elementFocused:{observe:1}}}constructor(){super()
const t=document.createElement("input")
this.accept=t.accept,this.accessKey=t.accessKey,this.alt=t.alt,this.autocomplete=t.autocomplete,this.autofocus=t.autofocus,this.capture=t.capture,this.checked=t.checked,this.dirname=t.dirname,this.disabled=t.disabled,this.height=t.height,this.inputmode=t.inputmode,this.max=t.max,this.maxlength=t.maxlength,this.min=t.min,this.minlength=t.minlength,this.multiple=t.multiple,this.name=t.name,this.pattern=t.pattern,this.placeholder=t.placeholder,this.readonly=t.readonly,this.required=t.required,this.size=t.size,this.src=t.src,this.step=t.step,this.tabIndex=t.tabIndex,this.width=t.width,this.type=t.type,this.value=t.value,this.__elementFocused=0,this.attachShadow({mode:"open",delegatesFocus:this.__delegatesFocus}),this.render(),this.__delegatesFocus||this.addEventListener("focus",(()=>this.$element.focus()))}propertyChangedCallback(t,e,i){super.propertyChangedCallback(t,e,i),this.render()}get styles(){return ut`
      <style>
        :host { outline: none }

        input:invalid {
          border: 1px solid red;
        }
      </style>
    `}get template(){return ut`
      ${this.styles}
      <input
      .accept="${this.accept}"
      .accessKey="${this.accessKey}"
      .alt="${this.alt}"
      ?autocomplete="${this.autocomplete}"
      ?autofocus="${this.autofocus}"
      .capture="${this.capture}"
      ?checked="${this.checked}"
      .dirname="${this.dirname}"
      ?disabled="${this.disabled}"
      .height="${this.height}"
      .inputmode="${this.inputmode}"
      .max="${this.max}"
      .maxlength="${this.maxlength}"
      .min="${this.min}"
      .minlength="${this.minlength}"
      ?multiple="${this.multiple}"
      .name="${this.name}"
      .placeholder="${this.placeholder}"
      ?readonly="${this.readonly}"
      ?required="${this.required}"
      .size="${this.size}"
      .src="${this.src}"
      .step="${this.step}"
      .tabIndex="${this.tabIndex}"
      .width="${this.width}"
      .type="${this.type}"
      .value="${this.value}"
      @focus="${()=>this.__elementFocused=1}"
      @blur="${()=>this.__elementFocused=0}"
      @input="${this.__handleInput}"
      @change="${this.__handleChange}"
      >
    `}render(){1!=this.__elementFocused&&window.requestAnimationFrame((()=>{mt(this.template,this.shadowRoot,{eventContext:this,scopeName:this.localName})}))}get accessKey(){return this._accessKey}set accessKey(t){this._accessKey=t}get list(){return this.$element.list}get tabIndex(){return 1==this.disabled?-1:this._tabIndex}set tabIndex(t){this._tabIndex=parseInt(t)}get validationMessage(){return this.$element.validationMessage}get validity(){return this.$element.validity}get willValidate(){return this.$element.willValidate}checkValidity(){return this.$element.checkValidity()}reportValidity(){return this.$element.reportValidity()}select(){return this.$element.select()}setCustomValidity(t){this.$element.setCustomValidity(t)}setRangeText(){this.$element.setRangeText(...arguments)}setSelectionRange(){this.$element.setSelectionRange(...arguments)}stepDown(){this.$element.stepDown(),this.value=this.$element.value}stepUp(){this.$element.stepUp(),this.value=this.$element.value}get $element(){return this.shadowRoot&&this.shadowRoot.querySelector("input")||{}}get __delegatesFocus(){const t=document.createElement("div")
return t.attachShadow({mode:"open",delegatesFocus:1}),t.shadowRoot.delegatesFocus||0}__handleInput(t){this.value=t.target.value,this.checked=t.target.checked}__handleChange(t){this.value=t.target.value,this.checked=t.target.checked,this.dispatchEvent(new CustomEvent("change",{bubbles:1,composed:1}))}}const kt=t=>{1!=window.__focusVisiblePolyFillReady&&(window.addEventListener("keydown",(t=>window.__focusVisiblePolyFillLastKeyDown=t.key)),window.addEventListener("mousedown",(()=>window.__focusVisiblePolyFillLastKeyDown=null)),window.addEventListener("pointerdown",(()=>window.__focusVisiblePolyFillLastKeyDown=null)),window.addEventListener("touchdown",(()=>window.__focusVisiblePolyFillLastKeyDown=null)),window.__focusVisiblePolyFillReady=1),t.addEventListener("focus",p.bind(t)),t.addEventListener("blur",m.bind(t))}
class $t extends(k(xt)){static get properties(){return{...super.properties,label:{observe:1,changedHandler:"_labelChanged"}}}get styles(){return ut`
      <style>

        :host {
          display: block;
          outline: none;
          user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          display: inline-block;
          background: transparent;
          padding: 0;
          border-radius: 10px;
          height: 14px;
          overflow: hidden;
        }

        input[type="range"] {
          -webkit-appearance: none;
          -moz-appearance: none;
          -ms-appearance: none;
          width: 100%;
          height: 100%;
          background: transparent;
          position: relative;
          margin: 0;
          padding: 0;
          font-size: 0;
          outline: none;
          z-index: 1;
        }

        :host(.focus-visible) input {
          outline-color: -webkit-focus-ring-color;
          outline-style: auto;
        }

        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          ${this._thumbStyles}
        }

        input[type="range"]::-moz-range-thumb {
          -moz-appearance: none;
          ${this._thumbStyles}
        }

        input[type="range"]::-ms-thumb {
          -ms-appearance: none;
          ${this._thumbStyles}
        }

        input[type="range"]::-webkit-slider-runnable-track {
          -webkit-appearance: none;
          ${this._trackStyles}
        }

        input[type="range"]::-moz-range-track {
          -moz-appearance: none;
          ${this._trackStyles}
        }

        input[type="range"]::-ms-track {
          -ms-appearance: none;
          cursor: pointer;
          background: transparent;
          border-color: transparent;
          color: transparent;
          ${this._trackStyles}
        }

        input[type="range"]::-ms-fill-lower {
          background: transparent;
        }

      </style>
    `}get _thumbStyles(){return"\n      height: 14px;\n      width: 14px;\n      background: transparent;\n      border: 2px solid white;\n      box-shadow: 0 0 2px rgba(0,0,0,0.4), inset 0 0 2px rgba(0,0,0,0.4);\n      border-radius: 50%;\n      box-sizing: border-box;\n      content: '';\n    "}get _trackStyles(){return"\n      height: 100%;\n      width: 100%;\n      background: transparent;\n    "}constructor(){super(),kt(this)}connectedCallback(){super.connectedCallback&&super.connectedCallback(),window.requestAnimationFrame((()=>{this._labelChanged(),this.$element.addEventListener("change",this._handleChange.bind(this))}))}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),this.$element.removeEventListener("change",this._handleChange.bind(this))}get type(){return"range"}_labelChanged(){this.$element.setAttribute&&this.$element.setAttribute("aria-label",this.label)}_handleChange(t){const e=document.createEvent("CustomEvent")
e.initCustomEvent("change",t.bubbles,t.cancelable,t.detail),this.dispatchEvent(e)}}window.customElements.define("color-picker-slider",$t)
class Mt extends(M(C(k(x(HTMLElement))))){static get properties(){return{value:{observe:1,DOM:1,changedHandler:"_valueChanged"},no_alpha:{observe:0,DOM:1,changedHandler:"_noAlphaChanged"},formats:{observe:1,DOM:1,fromAttributeConverter(t,e){return e.replace(/\s+/g,"").split(",")},changedHandler:"_formatsChanged"},selectedFormat:{observe:1,DOM:1,changedHandler:"_selectedFormatChanged"},_pointerDown:{observe:1},_sliderDown:{observe:1}}}get value(){if(this.color)return"hex"===this.selectedFormat?this.color.toHexString():"hex8"===this.selectedFormat?this.color.toHex8String():"hsl"===this.selectedFormat?this.color.toHslString():"hsv"===this.selectedFormat?this.color.toHsvString():this.color.toRgbString()}set value(t){this["#value"]=new I(t)}get color(){return this["#value"]}set formats(t){if("Array"!==t.constructor.name)return
const e=[]
for(var i in t)-1!==this.supportedFormats.indexOf(t[i])&&e.push(t[i])
this["#formats"]=[...e]}get supportedFormats(){return["hex","hex8","rgb","hsv","hsl"]}get selectedFormat(){return this["#selectedFormat"]}set selectedFormat(t){-1!==(this.formats||[]).indexOf(t)&&(this["#selectedFormat"]=t)}get hsv(){return this.color.toHsv()}get alpha(){return this.color.getAlpha()}set alpha(t){const e=this.color
this.color.setAlpha(t),this.propertyChangedCallback("value",e,this.color)}get hex(){return this.color.toHex()}get hex8(){return this.color.toHex8()}get rgb(){return this.color.toRgb()}get hsl(){return this.color.toHsl()}get _gridGradient(){return"hsl"===this.selectedFormat?"linear-gradient(to bottom, hsl(0, 0%, 100%) 0%, hsla(0, 0%, 100%, 0) 50%, hsla(0, 0%, 0%, 0) 50%, hsl(0, 0%, 0%) 100%), linear-gradient(to right, hsl(0, 0%, 50%) 0%, hsla(0, 0%, 50%, 0) 100%)":"linear-gradient(rgba(0,0,0,0) 0%, #000 100%), linear-gradient(to left, rgba(255,255,255,0) 0%, #fff 100%)"}constructor(){super(),this.attachShadow({mode:"open"}),this.value={h:0,s:1,v:1},this.selectedFormat="rgb",this._pointerDown=0,this._sliderDown=0,this.formats=this.supportedFormats,this.no_alpha=this.getAttribute("no_alpha"),window.addEventListener("mouseup",this._handleMouseup.bind(this),0),window.addEventListener("mousemove",this._handleMousemove.bind(this),0),kt(this._$grid),this._valueChanged(),this.shadowRoot.querySelectorAll("input, select").forEach((t=>kt(t)))}connectedCallback(){super.connectedCallback(),this.selectedFormat=this.color.format,this._valueChanged()}propertyChangedCallback(t,e,i){super.propertyChangedCallback(t,e,i),mt(this.template,this.shadowRoot,{eventContext:this,scopeName:this.localName})}static get propertiesChangedHandlers(){return{_notifyChanges:["value","_pointerDown","_sliderDown"]}}get template(){return ut`

      <style>

        *, *:before, *:after {
          box-sizing: border-box;
          font-size: 0;
          font-family: var(--color-picker-font-family);
        }

        :host {
          width: 240px;
          height: 240px;
          display: block;
          --color-picker-background-color: #fff;
          --color-picker-color: #222;
          --color-picker-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
          font-family: var(--color-picker-font-family);
        }

        :host([light]) {
          --color-picker-background-color: #fff;
          --color-picker-color: #222;
        }

        @media (prefers-color-scheme: dark) {
          :host {
            --color-picker-background-color: #222;
            --color-picker-color: #fff;
          }
        }

        :host([dark]) {
          --color-picker-background-color: #222;
          --color-picker-color: #fff;
        }

        #container {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
          background-color: var(--color-picker-background-color);
          color: var(--color-picker-color);
        }

        #gridInput {
          width: 100%;
          outline: none;
          flex: 1;
          position: relative;
        }

        #gridInput .overlay {
          width: 100%;
          top: 0;
          left: 0;
          height: 100%;
          pointer-events: none;
          position: absolute;
        }

        #gridInput .overlay .thumb {
          position: absolute;
          margin: -7px;
          pointer-events: none;
          ${this._thumbStyles}
        }

        #gridInput.focus-visible:focus {
          outline-color: -webkit-focus-ring-color;
          outline-style: auto;
        }

        .absbefore:before,
        .absafter:after {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          content: '';
        }

        #sliderInput {
          padding: 8px;
          display: flex;
        }

        #sliders {
          display: flex;
          flex-direction: column;
          flex: 1;
          justify-content: center;
          margin-right: 8px;
        }

        color-picker-slider {
          position: relative;
        }

        color-picker-slider + color-picker-slider {
          margin-top: 8px;
        }

        color-picker-slider:after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: inherit;
        }

        #hueInput:after {
          background: linear-gradient(to right, red 0%, #ff0 17%, lime 33%, cyan 50%, blue 66%, #f0f 83%, red 100%);
        }

        #alphaInput:after {
          background: var(--color-picker-alpha-slider-background);
        }

        #alphaInput:before, #alphaInput:after {
          border-radius: inherit;
          pointer-events: none;
        }

        #colorSteel {
          position: relative;
          width: 100%;
          height: 100%;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid var(--bg-color--20);
          margin: auto;
          overflow: hidden;
        }

        .checkerboard:before {
          background: linear-gradient(45deg, #777 25%, transparent 25%), linear-gradient(-45deg, #777 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #777 75%), linear-gradient(-45deg, transparent 75%, #777 75%);
          background-size: 6px 6px;
          background-position: 0 0, 0 3px, 3px -3px, -3px 0px;
        }

        #colorSteel .inner {
          width: 100%;
          height: 100%;
          position: relative;
        }

        input, select {
          border: 1px solid transparent;
          outline: none;
        }

        option {
          color: #222;
          background: var(--color-picker-background-color);
        }

        input:hover, select:hover, input:focus, select:focus {
          border-color: var(--bg-color--20);
        }

        :focus.focus-visible {
          outline-color: -webkit-focus-ring-color;
          outline-style: auto;
        }

        input, select, select * {
          font-size: 12px;
          padding: 3px;
          min-width: 44px;
          color: inherit;
          -moz-appearance: textfield;
          font-family: var(--color-picker-font-family);
        }

        input[type="text"] {
          min-width: 80px;
        }

        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        
        #textInput {
          padding: 0 8px 8px 8px;
          display: flex;
          /* align-items: center; */
        }

        select, .color-input, .alpha-input {
          flex: 0;
          padding: 0;
        }

        .color-input label, .alpha-input label {
          position: relative;
          display: block;
          flex-grow: 1;
        }
        
        .color-input label:after, .alpha-input label:after {
          content: attr(data-name);
          font-size: 10px;
          width: 100%;
          text-align: center;
          text-transform: uppercase;
          color: inherit;
          color: var(--bg-color--60);
          display: block;
        }

        select .alpha-input {
          flex: 0;
        }

        select {
          -webkit-appearance: none;
          -moz-appearance: none;
          -ms-appearance: none;
          border-radius: 0;
          background: transparent;
          padding: 3px;
          text-align: center;
          text-align-last: center;
          align-self: flex-start;
          margin: 0;
        }

        select::-ms-expand {
          display: none;
        }

        .color-input {
          flex: 1 0 0;
          display: flex;
          justify-content: flex-start;
        }

        input {
          padding: 3px;
          margin: 0;
          flex: 1;
          text-align: center;
          text-align-last: center;
          background: transparent;
          color: inherit;
          text-transform: uppercase;
          width: 100%;
        }

        [hidden] {
          display: none!important;
        }
      </style>

      <div id="container">

        <section
          id="gridInput"
          tabindex="0"
          role="slider"
          aria-label="change saturation and ${"hsl"===this.selectedFormat?"light":"value"}"
          aria-valuemin="0"
          aria-valuemax="1.00"
          aria-orientation="vertical"
          aria-valuetext="saturation ${this.hsv.s.toFixed(2)} ${"hsl"===this.selectedFormat?`light ${this.hsl.l.toFixed(2)}`:`value ${this.hsv.v.toFixed(2)}`}"
          @mousedown="${this._handleMousedown}"
          @keydown="${this._handleGridKeydown}"
        ><div class="overlay"><div class="thumb"></div></div></section>

        <section id="sliderInput">
          <div id="sliders">
            <color-picker-slider tabindex="0" .label="${"change hue"}" id="hueInput" .value="${this.hsv.h}" min="0" max="359" step="1" data-scheme="hsv" data-key="h" @input="${this._handleHueSliderInput}" @change="${this._handleHueSliderInput}" @mousedown="${()=>this._sliderDown=1}" @mouseup="${()=>this._sliderDown=0}"></color-picker-slider>
            <color-picker-slider tabindex="0" .label="${"change alpha"}" id="alphaInput" class="absbefore absafter checkerboard" ?hidden="${"true"==this.no_alpha}" .value="${100*this.alpha}" min="0" max="100" step="1" @input="${this._handleAlphaSliderInput}" @change="${this._handleAlphaSliderInput}" @mousedown="${()=>this._sliderDown=1}" @mouseup="${()=>this._sliderDown=0}"></color-picker-slider>
          </div>
          <div id="colorSteel" class="checkerboard absbefore">
            <div class="inner"></div>
          </div>
        </section>

        <section id="textInput">

          <select aria-label="select color scheme" .selectedIndex="${(this.formats||[]).indexOf(this.selectedFormat)}" @change="${this._handleSelectChange}" @input="${t=>t.stopPropagation()}">
            ${(this.formats||[]).map((t=>ut`
              <option .value="${t}">${t.toUpperCase()}</option>
            `))}
          </select>

          <div ?hidden="${"hsv"!==this.selectedFormat}" class="color-input">
            <label data-name="h"><input aria-label="change hue" type="number" .value="${Math.round(this.hsv.h)}" min="0" max="359" step="1" data-scheme="hsv", data-key="h" @input="${this._handleInput}"></label>
            <label data-name="s"><input aria-label="change saturation" type="number" .value="${Math.round(100*this.hsv.s)}" min="0" max="100" step="1" data-scheme="hsv", data-key="s" @input="${this._handleInput}"></label>
            <label data-name="v"><input aria-label="change value / brightness" type="number" .value="${Math.round(100*this.hsv.v)}" min="0" max="100" step="1" data-scheme="hsv", data-key="v" @input="${this._handleInput}"></label>
            <label ?hidden="${"true"==this.no_alpha}" data-name="%"><input aria-label="change alpha" type="number" .value="${Math.round(100*this.alpha)}" min="0" max="100" step="1" data-scheme="alpha" @input="${this._handleAlphaInput}"></label>
          </div>

          <div ?hidden="${"hsl"!==this.selectedFormat}" class="color-input">
            <label data-name="h"><input aria-label="change hue" type="number" .value="${Math.round(this.hsl.h)}" min="0" max="359" step="1" data-scheme="hsl", data-key="h" @input="${this._handleInput}"></label>
            <label data-name="s"><input aria-label="change saturation" type="number" .value="${Math.round(100*this.hsl.s)}" min="0" max="100" step="1" data-scheme="hsl", data-key="s" @input="${this._handleInput}"></label>
            <label data-name="l"><input aria-label="change light" type="number" .value="${Math.round(100*this.hsl.l)}" min="0" max="100" step="1" data-scheme="hsl", data-key="l" @input="${this._handleInput}"></label>
            <label ?hidden="${"true"==this.no_alpha}" data-name="%"><input aria-label="change alpha" type="number" .value="${Math.round(100*this.alpha)}" min="0" max="100" step="1" data-scheme="alpha" @input="${this._handleAlphaInput}"></label>
          </div>

          <div ?hidden="${"rgb"!==this.selectedFormat}" class="color-input">
            <label data-name="r"><input aria-label="change red" type="number" .value="${this.rgb.r}" min="0" max="255" step="1" data-scheme="rgb", data-key="r" @input="${this._handleInput}"></label>
            <label data-name="g"><input aria-label="change green" type="number" .value="${this.rgb.g}" min="0" max="255" step="1" data-scheme="rgb", data-key="g" @input="${this._handleInput}"></label>
            <label data-name="b"><input aria-label="change blue" type="number" .value="${this.rgb.b}" min="0" max="255" step="1" data-scheme="rgb", data-key="b" @input="${this._handleInput}"></label>
            <label ?hidden="${"true"==this.no_alpha}" data-name="%"><input aria-label="change alpha" type="number" .value="${Math.round(100*this.alpha)}" min="0" max="100" step="1" data-scheme="alpha" @input="${this._handleAlphaInput}"></label>
          </div>

          <div ?hidden="${"hex"!==this.selectedFormat}" class="color-input">
            <label data-name="#"><input aria-label="change hex" type="text" .value="${this.hex}" data-scheme="hex" maxlength="6" @change="${this._handleInput}" @input="${t=>t.stopPropagation()}"></label>
            <label ?hidden="${"true"==this.no_alpha}" data-name="%"><input aria-label="change alpha" type="number" .value="${Math.round(100*this.alpha)}" min="0" max="100" step="1" data-scheme="alpha" @input="${this._handleAlphaInput}"></label>
          </div>

          <div ?hidden="${"hex8"!==this.selectedFormat}" class="color-input">
          <label data-name="#"><input aria-label="change hex8" type="text" .value="${this.hex8}" data-scheme="hex8" maxlength="8" @change="${this._handleInput}" @input="${t=>t.stopPropagation()}"></label>
          </div>

        </section>
      </div>
    `}_handleInput(t){t.stopPropagation()
const e=t.target.dataset.key,i=t.target.value
let r=this[t.target.dataset.scheme]
e?r[e]=Math.round(i):r=i,this.value=r}_handleHueSliderInput(t){this._handleInput(t),this.propertyChangedCallback("value")}_handleAlphaSliderInput(t){t.stopPropagation(),this.alpha=t.target.value/100}_handleAlphaInput(t){t.stopPropagation(),this.alpha=t.target.value/100}_handleSelectChange(t){this.selectedFormat=t.target.value}_handleMouseup(){this._pointerDown=0}_handleMousemove(t){if(!this._pointerDown)return
const{x:e,y:i}=this.getBoundingClientRect(),r=Math.round(t.clientX-e),s=Math.round(t.clientY-i),n=Math.min(Math.max(r/this._$grid.offsetWidth,0),1),a=1-Math.min(Math.max(s/this._$grid.offsetHeight,0),1)
this.value="hsl"===this.selectedFormat?{...this.color.toHsl(),s:n,l:a}:{...this.color.toHsv(),s:n,v:a}}_handleMousedown(t){this._pointerDown=1,this._handleMousemove(t)}_handleGridKeydown(t){if(-1===["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End","PageUp","PageDown"].indexOf(t.key))return
t.preventDefault()
const e=this.color.toHsl(),i=this.color.toHsv()
return t.key.indexOf()&&"ArrowLeft"===t.key?this.value="hsl"===this.selectedFormat?{...e,s:e.s-.01}:{...i,s:i.s-.01}:"ArrowRight"===t.key?this.value="hsl"===this.selectedFormat?{...e,s:e.s+.01}:{...i,s:i.s+.01}:"ArrowUp"===t.key?this.value="hsl"===this.selectedFormat?{...e,l:e.l+.01}:{...i,v:i.v+.01}:"ArrowDown"===t.key?this.value="hsl"===this.selectedFormat?{...e,l:e.l-.01}:{...i,v:i.v-.01}:"Home"===t.key?this.value="hsl"===this.selectedFormat?{...e,s:e.s-.1}:{...i,s:i.s-.1}:"End"===t.key?this.value="hsl"===this.selectedFormat?{...e,s:e.s+.1}:{...i,s:i.s+.1}:"PageUp"===t.key?this.value="hsl"===this.selectedFormat?{...e,l:e.l+.1}:{...i,v:i.v+.1}:"PageDown"===t.key?this.value="hsl"===this.selectedFormat?{...e,l:e.l-.1}:{...i,v:i.v-.1}:void 0}_valueChanged(){this._setGridThumbPosition(),this._setHighlightColors(),this._setColorSteelColor(),this._setAlphaSliderBackground()}_setColorSteelColor(){this._$container&&this._setCSSProperty("background",this.color.toRgbString(),this._$colorSteel.querySelector(".inner"))}_setAlphaSliderBackground(){this._$container&&this._setCSSProperty("--color-picker-alpha-slider-background",this._alphaSliderBackground,this._$container)}get _gridBackground(){return new I({h:this.shadowRoot.querySelector("#hueInput").value,s:1,v:1}).toRgbString()}get _alphaSliderBackground(){const t=new I(this.value)
return`linear-gradient(to right, ${t.setAlpha(0).toRgbString()} 0%, ${t.setAlpha(1).toRgbString()} 100%)`}_formatsChanged(){-1===this.formats.indexOf(this.selectedFormat)&&(this.selectedFormat=this.formats[0])}_noAlphaChanged(){this.no_alpha=this.getAttribute("no_alpha")}_selectedFormatChanged(){this._setCSSProperty("background",this._gridGradient,this._$grid.querySelector(".overlay")),this._setGridThumbPosition()}_notifyChanges(){if(this._pointerDown||this._sliderDown)return this._dispatchValue("input")
this._dispatchValue("change")}_dispatchValue(t){this.dispatchEvent(new CustomEvent(t,{detail:{value:this.value}}))}_setGridThumbPosition(){this._$grid&&(this._setCSSProperty("transform",`translate(${this._$grid.offsetWidth*("hsl"===this.selectedFormat?this.hsl.s:this.hsv.s)}px, ${this._$grid.offsetHeight*(1-("hsl"===this.selectedFormat?this.hsl.l:this.hsv.v))}px)`,this._$grid.querySelector(".thumb")),this._setCSSProperty("background",this._gridBackground,this._$grid))}_setHighlightColors(){if(!this._$container)return
const t=new I(window.getComputedStyle(this._$container).backgroundColor),e=t.isLight()?"darken":"brighten"
this._setCSSProperty("--bg-color--20",t[e]()[e]().toRgbString(),this._$container),this._setCSSProperty("--bg-color--60",t[e]()[e]()[e]()[e]()[e]()[e]().toRgbString(),this._$container)}_setCSSProperty(t,e,i=this){i&&(i.style.setProperty(t,e),window.ShadyCSS&&window.ShadyCSS.styleSubtree(i,{[t]:e}))}get _thumbStyles(){return(new $t)._thumbStyles}get _$container(){return this.shadowRoot.querySelector("#container")}get _$grid(){return this.shadowRoot.querySelector("#gridInput")}get _$colorSteel(){return this.shadowRoot.querySelector("#colorSteel")}}window.customElements.define("color-picker",Mt)
