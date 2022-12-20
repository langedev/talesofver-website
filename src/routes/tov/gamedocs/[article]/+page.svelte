<script>
  import SideNav from "./SideNav.svelte";
  import Article from "./Article.svelte";

  export let data;
</script>

<main class="max-w-7xl mx-auto flex">
  <SideNav index="games" current={data.article}/>
  <Article title={data.title} content={data.content} />
</main>
