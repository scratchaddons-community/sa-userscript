import { readdir, readFile, stat, writeFile } from "fs/promises";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const dir = dirname(fileURLToPath(import.meta.url));

const addonIds = JSON.parse(await readFile(resolve(dir, "../../../addons/addons.json"), "utf8")).filter(
  (addonId) => !addonId.startsWith("//")
);

const locales = await readdir(resolve(dir, `../../../addons-l10n/`));

for (const locale of locales) {
  if (!(await stat(resolve(dir, `../../../addons-l10n/${locale}`))).isDirectory()) continue;
  let messages = {};
  for (const addonId of ["_general", ...addonIds]) {
    const url = resolve(dir, `../../../addons-l10n/${locale}/${addonId}.json`);
    try {
      const resp = await readFile(url, "utf8");
      messages = { ...messages, ...JSON.parse(resp) };
    } catch {}
  }
  writeFile(resolve(dir, `../../../addons-l10n/${locale}.json`), JSON.stringify(messages));
}
const manifests = {};
for (const addonId of addonIds) {
  const url = resolve(dir, `../../../addons/${addonId}/addon.json`);
  const resp = await readFile(url, "utf8");
  manifests[addonId] = JSON.parse(resp);
}
writeFile(resolve(dir, "../../../addons/manifests.json"), JSON.stringify(manifests));
