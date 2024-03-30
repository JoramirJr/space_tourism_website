/** @type {import('./$types').PageLoad} */
export async function load() {
  const { destinations } = await import("../../data.json");
  return {
    destinations,
  };
}