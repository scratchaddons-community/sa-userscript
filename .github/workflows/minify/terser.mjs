import { minify as minifyJs } from "terser";
import { writeFile, readFile } from "fs/promises";
import { dirname, resolve } from "path";
import getInDir from "./getInDir.mjs";
import { fileURLToPath } from "url";

/* Javascript */
const dir = dirname(fileURLToPath(import.meta.url));
const terserConfig = {
  compress: {
    arguments: true,
    ecma: 8,
    hoist_funs: true,
    if_return: true,
    inline: 3,
    keep_fargs: false,
    keep_infinity: true,
    module: true,
    passes: 3,
    pure_getters: true,
    top_retain: [
      "copy_paste",
      "$",
      "libraryLicenses",
      "licenseNameToText",
      "licensesReady",
      "vue",
      "chrome",
      "scratchAddons",
      "__scratchAddonsTraps",
      "__scratchAddonsRedux",
      "_realConsole",
      "__scratchAddonsTextColor",
      "Vue",
      "md5",
      "scratchblocks",
      "tinycolor",
      "Chart",
      "Comlink",
      "Scratch",
      "Blockly",
      "Clipboard",
      "ClipboardItem",
    ],
    unsafe_comps: true,
    unsafe_Function: true,
    unsafe_methods: true,
    unsafe_proto: true,
    unsafe_undefined: true,
    booleans_as_integers: true,
  },
  ecma: 8,
  module: true,
  format: { comments: false, ecma: 8, indent_level: 0, semicolons: false, shebang: false, webkit: true },
  mangle: {
    eval: true,
    keep_fnames: false,
    module: true,
    reserved: [
      "copy_paste",
      "$",
      "libraryLicenses",
      "licenseNameToText",
      "licensesReady",
      "vue",
      "chrome",
      "scratchAddons",
      "__scratchAddonsTraps",
      "__scratchAddonsRedux",
      "_realConsole",
      "__scratchAddonsTextColor",
      "Vue",
      "md5",
      "scratchblocks",
      "tinycolor",
      "Chart",
      "Comlink",
      "Scratch",
      "Blockly",
      "Clipboard",
      "ClipboardItem",
    ],
    properties: { regex: "^$" },
  },
  parse: { ecma: 8, html5_comments: false, shebang: false },
};
const manifest = JSON.parse(await readFile(resolve(dir, "../../../manifest.json")));
const locales = JSON.parse(await readFile(resolve(dir, "../../../_locales/en/messages.json")));
const rev = (await readFile(".git/HEAD")).toString().trim();
const commit = (rev.indexOf(":") === -1 ? rev : (await readFile(".git/" + rev.substring(5))).toString().trim()).slice(
  0,
  7
);

const NO_MINIFY = [
  "/content-scripts/load-redux.js",
  "/content-scripts/prototype-handler.js",
  "/content-scripts/fix-console.js",
  "/libraries/common/cs/text-color.js",
  ".user.js",
];

getInDir({ ext: ".js" }).forEach(async (filePath) => {
  if (filePath.endsWith(".user.js")) {
    const source = await readFile(filePath, "utf8").catch(console.error);
    await writeFile(
      filePath,
      source
        .replaceAll("__MSG_extensionName__", locales.extensionName.message)
        .replaceAll("__MSG_extensionDescription__", locales.extensionDescription.message)
        .replaceAll("__MSG_extensionVersionName__", manifest.version_name.replace("-", `-${commit}-`))
        .replaceAll(
          "__MSG_extensionIcon__",
          `https://sa-userscript-dev.cf/${
            manifest.version_name.includes("-") ? manifest.browser_action.default_icon : "images/icon.png"
          }`
        )
    );
    console.log(`Minified ${filePath}`);
  }
  if (NO_MINIFY.some((pattern) => filePath.endsWith(pattern))) return;
  const source = await readFile(filePath, "utf8").catch(console.error);
  const minfied = (
    await minifyJs(source, terserConfig)
      .catch((e) => console.log(filePath))
      .catch(console.error)
  ).code;
  await writeFile(filePath, minfied);
  console.log(`Minified ${filePath}`);
});
