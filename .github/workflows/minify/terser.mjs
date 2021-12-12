import { minify as minifyJs } from "terser";
import { writeFile, readFile } from "fs/promises";
import { readFileSync } from "fs";
import { resolve } from "path";
import getInDir from "./getInDir.mjs";

/* Javascript */
const terserConfig = JSON.parse(readFileSync(resolve(process.cwd(), "./.terserrc")));

getInDir({ ext: ".js" }).forEach(async (filePath) => {
  if (filePath.endsWith(".user.js")) return;
  console.log(`Minifying ${filePath}`);
  const source = await readFile(filePath, "utf8").catch(console.error);
  const minfied = (await minifyJs(source, terserConfig).catch(console.error)).code;
  writeFile(filePath, minfied);
});
