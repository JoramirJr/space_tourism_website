/** @type {import('./$types').PageLoad} */
export async function load() {
  const { technology } = await import("../../data.json");
  return {
    technology,
  };
}
export const ssr = false;