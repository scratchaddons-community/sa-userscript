// not used rn
import {writeFile, readFile} from "fs/promises";
import getInDir from "./getInDir.mjs";

getInDir({}).forEach(async (filePath) => {
  const source = await readFile(filePath, "utf8").catch(console.error);

  const replaced = source.replace(/userscript\.scratchaddons\.cf/g, "sa-userscript.github.io/ScratchAddons");

  await writeFile(filePath, replaced);
  console.log(`Updated URLs in ${filePath}`);
});
