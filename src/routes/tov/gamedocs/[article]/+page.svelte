<script>
  import SideNav from "/src/components/SideNav.svelte";
  import Article from "/src/components/Article.svelte";

  export let data;
  let title = ""

  for (const i in data.categories) {
    const category = data.categories[i]
    let article = category.articles.find(article => article.article_identifier === data.article.article_identifier)
    if(article) {
      title = article.title
    }
  }
</script>

<main class="max-w-7xl mx-auto flex">
  <SideNav current={data.article.article_identifier} nav={data.categories}/>
  <Article title={title} content={data.article.content} />
</main>
