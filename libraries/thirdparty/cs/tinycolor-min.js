!function(e){function r(e,t){if(t=t||{},(e=e||"")instanceof r)return e
if(!(this instanceof r))return new r(e,t)
var n=function(e){var r={r:0,g:0,b:0},t=1,n=null,i=null,s=null,f=0,h=0
return"string"==typeof e&&(e=function(e){e=e.replace(E,"").replace(I,"").toLowerCase()
var r,t=0
if(T[e])e=T[e],t=1
else if("transparent"==e)return{r:0,g:0,b:0,a:0,format:"name"}
return(r=D.rgb.exec(e))?{r:r[1],g:r[2],b:r[3]}:(r=D.rgba.exec(e))?{r:r[1],g:r[2],b:r[3],a:r[4]}:(r=D.hsl.exec(e))?{h:r[1],s:r[2],l:r[3]}:(r=D.hsla.exec(e))?{h:r[1],s:r[2],l:r[3],a:r[4]}:(r=D.hsv.exec(e))?{h:r[1],s:r[2],v:r[3]}:(r=D.hsva.exec(e))?{h:r[1],s:r[2],v:r[3],a:r[4]}:(r=D.hex8.exec(e))?{r:x(r[1]),g:x(r[2]),b:x(r[3]),a:q(r[4]),format:t?"name":"hex8"}:(r=D.hex6.exec(e))?{r:x(r[1]),g:x(r[2]),b:x(r[3]),format:t?"name":"hex"}:(r=D.hex4.exec(e))?{r:x(r[1]+""+r[1]),g:x(r[2]+""+r[2]),b:x(r[3]+""+r[3]),a:q(r[4]+""+r[4]),format:t?"name":"hex8"}:(r=D.hex3.exec(e))?{r:x(r[1]+""+r[1]),g:x(r[2]+""+r[2]),b:x(r[3]+""+r[3]),format:t?"name":"hex"}:0}(e)),"object"==typeof e&&(H(e.r)&&H(e.g)&&H(e.b)?(r=function(e,r,t){return{r:255*A(e,255),g:255*A(r,255),b:255*A(t,255)}}(e.r,e.g,e.b),f=1,h="%"===String(e.r).substr(-1)?"prgb":"rgb"):H(e.h)&&H(e.s)&&H(e.v)?(n=R(e.s),i=R(e.v),r=a(e.h,n,i),f=1,h="hsv"):H(e.h)&&H(e.s)&&H(e.l)&&(n=R(e.s),s=R(e.l),r=function(e,r,t){function n(e,r,t){return 0>t&&(t+=1),t>1&&(t-=1),1/6>t?e+6*(r-e)*t:.5>t?r:2/3>t?e+(r-e)*(2/3-t)*6:e}var a,i,s
if(e=A(e,360),r=A(r,100),t=A(t,100),0===r)a=i=s=t
else{var f=.5>t?t*(1+r):t+r-t*r,h=2*t-f
a=n(h,f,e+1/3),i=n(h,f,e),s=n(h,f,e-1/3)}return{r:255*a,g:255*i,b:255*s}}(e.h,n,s),f=1,h="hsl"),e.hasOwnProperty("a")&&(t=e.a)),t=k(t),{ok:f,format:e.format||h,r:N(255,j(r.r,0)),g:N(255,j(r.g,0)),b:N(255,j(r.b,0)),a:t}}(e)
this._originalInput=e,this._r=n.r,this._g=n.g,this._b=n.b,this._a=n.a,this._roundA=C(100*this._a)/100,this._format=t.format||n.format,this._gradientType=t.gradientType,1>this._r&&(this._r=C(this._r)),1>this._g&&(this._g=C(this._g)),1>this._b&&(this._b=C(this._b)),this._ok=n.ok,this._tc_id=z++}function t(e,r,t){e=A(e,255),r=A(r,255),t=A(t,255)
var n,a,i=j(e,r,t),s=N(e,r,t),f=(i+s)/2
if(i==s)n=a=0
else{var h=i-s
switch(a=f>.5?h/(2-i-s):h/(i+s),i){case e:n=(r-t)/h+(t>r?6:0)
break
case r:n=(t-e)/h+2
break
case t:n=(e-r)/h+4}n/=6}return{h:n,s:a,l:f}}function n(e,r,t){e=A(e,255),r=A(r,255),t=A(t,255)
var n,a,i=j(e,r,t),s=N(e,r,t),f=i,h=i-s
if(a=0===i?0:h/i,i==s)n=0
else{switch(i){case e:n=(r-t)/h+(t>r?6:0)
break
case r:n=(t-e)/h+2
break
case t:n=(e-r)/h+4}n/=6}return{h:n,s:a,v:f}}function a(r,t,n){r=6*A(r,360),t=A(t,100),n=A(n,100)
var a=e.floor(r),i=r-a,s=n*(1-t),f=n*(1-i*t),h=n*(1-(1-i)*t),u=a%6
return{r:255*[n,f,s,s,h,n][u],g:255*[h,n,n,f,s,s][u],b:255*[s,s,h,n,n,f][u]}}function i(e,r,t,n){var a=[F(C(e).toString(16)),F(C(r).toString(16)),F(C(t).toString(16))]
return n&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0):a.join("")}function s(e,r,t,n){return[F(S(n)),F(C(e).toString(16)),F(C(r).toString(16)),F(C(t).toString(16))].join("")}function f(e,t){t=0===t?0:t||10
var n=r(e).toHsl()
return n.s-=t/100,n.s=w(n.s),r(n)}function h(e,t){t=0===t?0:t||10
var n=r(e).toHsl()
return n.s+=t/100,n.s=w(n.s),r(n)}function u(e){return r(e).desaturate(100)}function o(e,t){t=0===t?0:t||10
var n=r(e).toHsl()
return n.l+=t/100,n.l=w(n.l),r(n)}function l(e,t){t=0===t?0:t||10
var n=r(e).toRgb()
return n.r=j(0,N(255,n.r-C(-t/100*255))),n.g=j(0,N(255,n.g-C(-t/100*255))),n.b=j(0,N(255,n.b-C(-t/100*255))),r(n)}function d(e,t){t=0===t?0:t||10
var n=r(e).toHsl()
return n.l-=t/100,n.l=w(n.l),r(n)}function c(e,t){var n=r(e).toHsl(),a=(n.h+t)%360
return n.h=0>a?360+a:a,r(n)}function g(e){var t=r(e).toHsl()
return t.h=(t.h+180)%360,r(t)}function b(e){var t=r(e).toHsl(),n=t.h
return[r(e),r({h:(n+120)%360,s:t.s,l:t.l}),r({h:(n+240)%360,s:t.s,l:t.l})]}function v(e){var t=r(e).toHsl(),n=t.h
return[r(e),r({h:(n+90)%360,s:t.s,l:t.l}),r({h:(n+180)%360,s:t.s,l:t.l}),r({h:(n+270)%360,s:t.s,l:t.l})]}function m(e){var t=r(e).toHsl(),n=t.h
return[r(e),r({h:(n+72)%360,s:t.s,l:t.l}),r({h:(n+216)%360,s:t.s,l:t.l})]}function p(e,t,n){t=t||6,n=n||30
var a=r(e).toHsl(),i=360/n,s=[r(e)]
for(a.h=(a.h-(i*t>>1)+720)%360;--t;)a.h=(a.h+i)%360,s.push(r(a))
return s}function y(e,t){t=t||6
for(var n=r(e).toHsv(),a=n.h,i=n.s,s=n.v,f=[],h=1/t;t--;)f.push(r({h:a,s:i,v:s})),s=(s+h)%1
return f}function k(e){return e=parseFloat(e),(isNaN(e)||0>e||e>1)&&(e=1),e}function A(r,t){(function(e){return"string"==typeof e&&-1!=e.indexOf(".")&&1===parseFloat(e)})(r)&&(r="100%")
var n=function(e){return"string"==typeof e&&-1!=e.indexOf("%")}(r)
return r=N(t,j(0,parseFloat(r))),n&&(r=parseInt(r*t,10)/100),1e-6>e.abs(r-t)?1:r%t/parseFloat(t)}function w(e){return N(1,j(0,e))}function x(e){return parseInt(e,16)}function F(e){return 1==e.length?"0"+e:""+e}function R(e){return 1>=e&&(e=100*e+"%"),e}function S(r){return e.round(255*parseFloat(r)).toString(16)}function q(e){return x(e)/255}function H(e){return!!D.CSS_UNIT.exec(e)}var E=/^\s+/,I=/\s+$/,z=0,C=e.round,N=e.min,j=e.max,M=e.random
r.prototype={isDark(){return 128>this.getBrightness()},isLight(){return!this.isDark()},isValid(){return this._ok},getOriginalInput(){return this._originalInput},getFormat(){return this._format},getAlpha(){return this._a},getBrightness(){var e=this.toRgb()
return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance(){var r,t,n,a=this.toRgb()
return t=a.g/255,n=a.b/255,.2126*((r=a.r/255)>.03928?e.pow((r+.055)/1.055,2.4):r/12.92)+.7152*(t>.03928?e.pow((t+.055)/1.055,2.4):t/12.92)+.0722*(n>.03928?e.pow((n+.055)/1.055,2.4):n/12.92)},setAlpha(e){return this._a=k(e),this._roundA=C(100*this._a)/100,this},toHsv(){var e=n(this._r,this._g,this._b)
return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString(){var e=n(this._r,this._g,this._b),r=C(360*e.h),t=C(100*e.s),a=C(100*e.v)
return 1==this._a?"hsv("+r+", "+t+"%, "+a+"%)":"hsva("+r+", "+t+"%, "+a+"%, "+this._roundA+")"},toHsl(){var e=t(this._r,this._g,this._b)
return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString(){var e=t(this._r,this._g,this._b),r=C(360*e.h),n=C(100*e.s),a=C(100*e.l)
return 1==this._a?"hsl("+r+", "+n+"%, "+a+"%)":"hsla("+r+", "+n+"%, "+a+"%, "+this._roundA+")"},toHex(e){return i(this._r,this._g,this._b,e)},toHexString(e){return"#"+this.toHex(e)},toHex8(e){return function(e,r,t,n,a){var i=[F(C(e).toString(16)),F(C(r).toString(16)),F(C(t).toString(16)),F(S(n))]
return a&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)&&i[3].charAt(0)==i[3].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}(this._r,this._g,this._b,this._a,e)},toHex8String(e){return"#"+this.toHex8(e)},toRgb(){return{r:C(this._r),g:C(this._g),b:C(this._b),a:this._a}},toRgbString(){return 1==this._a?"rgb("+C(this._r)+", "+C(this._g)+", "+C(this._b)+")":"rgba("+C(this._r)+", "+C(this._g)+", "+C(this._b)+", "+this._roundA+")"},toPercentageRgb(){return{r:C(100*A(this._r,255))+"%",g:C(100*A(this._g,255))+"%",b:C(100*A(this._b,255))+"%",a:this._a}},toPercentageRgbString(){return 1==this._a?"rgb("+C(100*A(this._r,255))+"%, "+C(100*A(this._g,255))+"%, "+C(100*A(this._b,255))+"%)":"rgba("+C(100*A(this._r,255))+"%, "+C(100*A(this._g,255))+"%, "+C(100*A(this._b,255))+"%, "+this._roundA+")"},toName(){return 0===this._a?"transparent":1>this._a?0:_[i(this._r,this._g,this._b,1)]||0},toFilter(e){var t="#"+s(this._r,this._g,this._b,this._a),n=t,a=this._gradientType?"GradientType = 1, ":""
if(e){var i=r(e)
n="#"+s(i._r,i._g,i._b,i._a)}return"progid:DXImageTransform.Microsoft.gradient("+a+"startColorstr="+t+",endColorstr="+n+")"},toString(e){var r=!!e
e=e||this._format
var t=0
return r||this._a>=1||0>this._a||"hex"!==e&&"hex6"!==e&&"hex3"!==e&&"hex4"!==e&&"hex8"!==e&&"name"!==e?("rgb"===e&&(t=this.toRgbString()),"prgb"===e&&(t=this.toPercentageRgbString()),("hex"===e||"hex6"===e)&&(t=this.toHexString()),"hex3"===e&&(t=this.toHexString(1)),"hex4"===e&&(t=this.toHex8String(1)),"hex8"===e&&(t=this.toHex8String()),"name"===e&&(t=this.toName()),"hsl"===e&&(t=this.toHslString()),"hsv"===e&&(t=this.toHsvString()),t||this.toHexString()):"name"===e&&0===this._a?this.toName():this.toRgbString()},clone(){return r(this.toString())},_applyModification(e,r){var t=e.apply(null,[this].concat([].slice.call(r)))
return this._r=t._r,this._g=t._g,this._b=t._b,this.setAlpha(t._a),this},lighten(){return this._applyModification(o,arguments)},brighten(){return this._applyModification(l,arguments)},darken(){return this._applyModification(d,arguments)},desaturate(){return this._applyModification(f,arguments)},saturate(){return this._applyModification(h,arguments)},greyscale(){return this._applyModification(u,arguments)},spin(){return this._applyModification(c,arguments)},_applyCombination(e,r){return e.apply(null,[this].concat([].slice.call(r)))},analogous(){return this._applyCombination(p,arguments)},complement(){return this._applyCombination(g,arguments)},monochromatic(){return this._applyCombination(y,arguments)},splitcomplement(){return this._applyCombination(m,arguments)},triad(){return this._applyCombination(b,arguments)},tetrad(){return this._applyCombination(v,arguments)}},r.fromRatio=function(e,t){if("object"==typeof e){var n={}
for(var a in e)e.hasOwnProperty(a)&&(n[a]="a"===a?e[a]:R(e[a]))
e=n}return r(e,t)},r.equals=function(e,t){return e&&t?r(e).toRgbString()==r(t).toRgbString():0},r.random=function(){return r.fromRatio({r:M(),g:M(),b:M()})},r.mix=function(e,t,n){n=0===n?0:n||50
var a=r(e).toRgb(),i=r(t).toRgb(),s=n/100
return r({r:(i.r-a.r)*s+a.r,g:(i.g-a.g)*s+a.g,b:(i.b-a.b)*s+a.b,a:(i.a-a.a)*s+a.a})},r.readability=function(t,n){var a=r(t),i=r(n)
return(e.max(a.getLuminance(),i.getLuminance())+.05)/(e.min(a.getLuminance(),i.getLuminance())+.05)},r.isReadable=function(e,t,n){var a,i,s=r.readability(e,t)
switch(i=0,a=function(e){var r,t
return"AA"!==(r=((e=e||{level:"AA",size:"small"}).level||"AA").toUpperCase())&&"AAA"!==r&&(r="AA"),"small"!==(t=(e.size||"small").toLowerCase())&&"large"!==t&&(t="small"),{level:r,size:t}}(n),a.level+a.size){case"AAsmall":case"AAAlarge":i=s>=4.5
break
case"AAlarge":i=s>=3
break
case"AAAsmall":i=s>=7}return i},r.mostReadable=function(e,t,n){var a,i,s,f,h=null,u=0
i=(n=n||{}).includeFallbackColors,s=n.level,f=n.size
for(var o=0;t.length>o;o++)(a=r.readability(e,t[o]))>u&&(u=a,h=r(t[o]))
return r.isReadable(e,h,{level:s,size:f})||!i?h:(n.includeFallbackColors=0,r.mostReadable(e,["#fff","#000"],n))}
var T=r.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},_=r.hexNames=function(e){var r={}
for(var t in e)e.hasOwnProperty(t)&&(r[e[t]]=t)
return r}(T),D=function(){var e="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",r="[\\s|\\(]+("+e+")[,|\\s]+("+e+")[,|\\s]+("+e+")\\s*\\)?",t="[\\s|\\(]+("+e+")[,|\\s]+("+e+")[,|\\s]+("+e+")[,|\\s]+("+e+")\\s*\\)?"
return{CSS_UNIT:new RegExp(e),rgb:new RegExp("rgb"+r),rgba:new RegExp("rgba"+t),hsl:new RegExp("hsl"+r),hsla:new RegExp("hsla"+t),hsv:new RegExp("hsv"+r),hsva:new RegExp("hsva"+t),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}()
"undefined"!=typeof module&&module.exports?module.exports=r:"function"==typeof define&&define.amd?define((function(){return r})):window.tinycolor=r}(Math)
