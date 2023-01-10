import { readFile, writeFile } from "fs/promises";

const PlaceholderStats = Object.freeze({
  brewCaskAppsCount: 4_000,
});

export async function fetchStatsOrDoNothing() {
  try {
    const stats = await fetchStats();
    await storeStats(stats);
  } catch {}
}

export async function loadStats() {
  try {
    return JSON.parse(await readFile("./src/data/stats.json", "utf-8"));
  } catch (error) {
    console.error(error);
    return PlaceholderStats;
  }
}

async function storeStats(stats: Awaited<ReturnType<typeof fetchStats>>) {
  return writeFile("./src/data/stats.json", prettyJSONStringify(stats) + "\n");
}

async function fetchStats() {
  const data = await fetch("https://formulae.brew.sh/api/versions-casks.json");
  const jsonData = await data.json();

  const brewCaskAppsCount = Object.keys(jsonData).length;

  return {
    brewCaskAppsCount,
  };
}

function prettyJSONStringify(value: any) {
  return JSON.stringify(value, undefined, 2);
}

/**
 * Rounds `value` down (toward zero) to the nearest multiple of `increment`.
 *
 * e.g., `floorToIncrement(7, 2) === 6`
 */
export function floorToIncrement(value: number, increment: number) {
  return Math.floor(value / increment) * increment;
}
