import type { PageLoad } from "./$types";
import { redirect } from '@sveltejs/kit';

export const load: PageLoad = async ({params}) => {
  try {
    const post = await import(`../${params.article}.md`)
    const nav = await import(`$lib/navs/gamedocs.json`)

    const { title } = post.metadata
    const content = post.default

    return {
      article: {
        content,
        title,
      },
      nav
    }
  } catch (e) {
    throw redirect(307, '/tov/gamedocs/');
  }
}
