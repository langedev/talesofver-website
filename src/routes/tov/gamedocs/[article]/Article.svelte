<script>
  export let title;
  export let content;
</script>

<article class="px-4 max-w-3xl mx-auto text-stone-400">
  <h1>{title}</h1>
  <svelte:component this={content} />
</article>
