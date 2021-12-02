import { minify as minifyJs } from "terser";
import { writeFile, readFile } from "fs/promises";
import { readFileSync } from "fs";
import { resolve } from "path";
import getInDir from "./getInDir.mjs";

/* Javascript */
const terserConfig = JSON.parse(readFileSync(resolve(process.cwd(), "./.terserrc")));

const NO_MINIFY = [
  "/content-scripts/load-redux.js",
  "/content-scripts/prototype-handler.js",
  "/content-scripts/fix-console.js",
  "/libraries/common/cs/text-color.js",
  ".user.js"
]

getInDir({ext: ".js"}).forEach(async (filePath) => {

  if (NO_MINIFY.some(pattern=>filePath.endsWith(pattern)))return
  const source = await readFile(filePath, "utf8").catch(console.error);
  const minfied = (await minifyJs(source, terserConfig).catch(e=>console.log(filePath)).catch(console.error)).code;
  await writeFile(filePath, minfied);
  console.log(`Minified ${filePath}`);
});
