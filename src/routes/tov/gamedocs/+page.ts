import type { PageLoad } from "./$types";
import { redirect } from '@sveltejs/kit';
import { getslug } from '$lib/helper';

export const load: PageLoad = async ({params}) => {
  const nav = await import(`$lib/navs/gamedocs.json`);
  console.log(nav);

  const slug = `gamedocs/${getslug(nav.categories[0].articles[0].article)}`;
  throw redirect(307, slug);
}
