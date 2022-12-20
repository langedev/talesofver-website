<script>
  import SideNav from "./SideNav.svelte";
  import Article from "./Article.svelte";

  export let data;
  print(data)
</script>

<main class="max-w-7xl mx-auto flex">
  <SideNav index="games" current={data.article}/>
  <Article slug={data.article} />
</main>
