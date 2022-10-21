const e={preset:["default",{mergeIdents:1,svgo:0}]}
module.exports={cssNanoConfig:e,map:0,plugins:[require("cssnano")(e),require("autoprefixer")({grid:"autoplace"})]}
