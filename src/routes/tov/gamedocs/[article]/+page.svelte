<script>
  import SideNav from "/src/components/SideNav.svelte";
  import Article from "/src/components/Article.svelte";

  export let data;
</script>

<main class="max-w-7xl mx-auto flex">
  <SideNav current={data.article.title} nav={data.nav}/>
  <Article title={data.article.title} content={data.article.content} />
</main>
