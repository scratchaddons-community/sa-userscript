const{readFileSync:e}=require("fs"),{resolve:t}=require("path"),s=require("./postcss.config.js"),i=JSON.parse(e(t(__dirname,"./.terserrc")))
module.exports={input:"**/*.html",skip:[],options:{sync:0,directives:[{name:"",start:"{{",end:"}}"}],replaceQuote:0,quoteStyle:0,lowerCaseTags:1,lowerCaseAttributeNames:1,recognizeCDATA:1,recognizeSelfClosing:1,sourceLocations:1},plugins:[require("posthtml-postcss")(s.plugins,{map:0,from:void 0}),require("htmlnano")({collapseAttributeWhitespace:1,collapseWhitespace:"aggressive",deduplicateAttributeValues:1,removeAttributeQuotes:1,removeEmptyAttributes:0,minifyCss:0,minifyConditionalComments:1,minifyJs:i,removeRedundantAttributes:1,mergeStyles:1,sortAttributesWithLists:1,sortAttributes:"frequency",removeOptionalTags:1,normalizeAttributeValues:1})]}
