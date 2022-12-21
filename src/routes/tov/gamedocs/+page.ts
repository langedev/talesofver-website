import type { PageLoad } from "./$types";
import { redirect } from '@sveltejs/kit';

export const load: PageLoad = async ({params}) => {
  const nav = await import(`$lib/navs/gamedocs.json`);
  const slug = `gamedocs/${nav.categories[0].articles[0].article_identifier}`;
  throw redirect(307, slug);
}
