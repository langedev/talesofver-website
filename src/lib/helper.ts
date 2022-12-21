export const titleFromIdentifier = async (identifier) => {
    const post = await import(`../${params.article}.md`);
    const { title } = post.metadata;

    return title;
}
