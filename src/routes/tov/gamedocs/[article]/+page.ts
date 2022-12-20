import type { PageLoad } from "./$types";

export const load: PageLoad = async ({params}) => {
  const post = await import(`../${params.article}.md`)
  const { title } = post.metadata
  const content = post.default

  return {
    content,
    title,
  }
}
