import { writeFile } from "fs/promises";

fetchStatsOrDoNothing();

export async function fetchStatsOrDoNothing() {
  try {
    const stats = await fetchStats();
    await storeStats(stats);
  } catch {}
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
