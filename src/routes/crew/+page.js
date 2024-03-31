/** @type {import('./$types').PageLoad} */
export async function load() {
  const { crew } = await import("../../data.json");
  return {
    crew,
  };
}