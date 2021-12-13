import { writeFile, readFile } from "fs/promises";
import getInDir from "./getInDir.mjs";
import path from "path";

function stripAddonMeta(addonJson) {
  addonJson.$schema = undefined;
  addonJson.permissions = undefined;
  addonJson.persistentScripts = undefined;
  addonJson.popup = undefined;
  addonJson.dynamicDisable = undefined;
  addonJson.dynamicEnable = undefined;
  addonJson.updateUserstylesOnSettingsChange = undefined;
  return addonJson
}


/* JSON */
getInDir({ ext: ".json" }).forEach(async (filePath) => {
  const source = await readFile(filePath, "utf8").catch(console.error);
  let parsed= JSON.parse(source);

  // Strip translator helps
  if (filePath.includes("/_locales/")) {
    for (const key in parsed) {
      if (!Object.hasOwnProperty.call(parsed, key)) continue;
      parsed[key] = { message: parsed[key].message };
    }
  }

  // Strip comments from `addons.json`
  if (filePath.endsWith("addons.json")) {
    parsed = await Promise.all(
      [...new Set(parsed)]
        .filter((folderName) => {
          return !folderName.startsWith("//");
        })
        .map(async (id) => {
          const addonJson = stripAddonMeta(JSON.parse(await readFile(path.resolve(filePath, "../" + id + "/addon.json"), "utf8")));

          return [id, addonJson];
        })
    );
  }

  // Strip unneeded entries from `addon.json`s
  if (filePath.endsWith("addon.json")) {
    parsed=stripAddonMeta(parsed);
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
