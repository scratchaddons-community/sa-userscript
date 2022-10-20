const { readFileSync } = require("fs");
const { resolve } = require("path");
const postCssConfig = require("./postcss.config.js");
const terserConfig = JSON.parse(readFileSync(resolve(__dirname, "./.terserrc")));

module.exports = {
  input: "**/*.html",
  skip: [],
  options: {
    sync: false,
    directives: [{ name: "", start: "{{", end: "}}" }],
    replaceQuote: false,
    quoteStyle: 0,
    lowerCaseTags: true,
    lowerCaseAttributeNames: true,
    recognizeCDATA: true,
    recognizeSelfClosing: true,
    sourceLocations: true,
  },
  plugins: [
    require("posthtml-postcss")(postCssConfig.plugins, { map: false, from: undefined }),
    require("htmlnano")({
      collapseAttributeWhitespace: true,
      collapseWhitespace: "aggressive",
      deduplicateAttributeValues: true,
      removeAttributeQuotes: true,
      removeEmptyAttributes: false,
      minifyCss: false,
      minifyConditionalComments: true,
      minifyJs: terserConfig,
      removeRedundantAttributes: true,
      mergeStyles: true,
      sortAttributesWithLists: true,
      sortAttributes: "frequency",
      removeOptionalTags: true,
      normalizeAttributeValues: true,
    }),
  ],
};
