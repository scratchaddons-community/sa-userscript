import { writeFile, readFile } from "fs/promises";
import getInDir from "./getInDir.mjs";

/* JSON */
getInDir({ ext: ".json" }).forEach(async (filePath) => {
  const source = await readFile(filePath, "utf8").catch(console.error);
  let parsed = JSON.parse(source);

  // Strip translator helps
  if (filePath.includes("/_locales/")) {
    for (const key in parsed) {
      if (!Object.hasOwnProperty.call(parsed, key)) continue;
      parsed[key] = { message: parsed[key].message };
    }
  }

  // Strip comments from `addons.json`
  if (filePath.endsWith("addons.json")) {
    parsed = [...new Set(parsed)].filter((folderName) => {
      return !folderName.startsWith("//");
    });
  }

  // Strip unneeded entries from `addon.json`s
  if (filePath.endsWith("addon.json")) {
    parsed.$schema = undefined;
    parsed.permissions = undefined;
    parsed.persistentScripts = undefined;
    parsed.popup = undefined;
    parsed.dynamicDisable = undefined;
    parsed.dynamicEnable = undefined;
    parsed.updateUserstylesOnSettingsChange = undefined;
  }

  const minfied = JSON.stringify(parsed);
  await writeFile(filePath, minfied);
  console.log(`Minified ${filePath}`);
});

getInDir({ ext: ".map" }).forEach(async (filePath) => {
  const source = await readFile(filePath, "utf8").catch(console.error);
  const parsed = JSON.parse(source);
  const minfied = JSON.stringify(parsed);
  await writeFile(filePath, minfied);
  console.log(`Minified ${filePath}`);
});
