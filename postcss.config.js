const cssNanoConfig = { preset: ["default", { mergeIdents: true, svgo: false }] };

module.exports = {
  cssNanoConfig,
  map: false,
  plugins: [require("cssnano")(cssNanoConfig), require("autoprefixer")({ grid: "autoplace" })],
};
