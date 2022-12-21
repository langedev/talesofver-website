<script>
  export let title;
  export let content;
</script>

<article class="px-4 max-w-3xl mx-auto text-stone-400">
  <h1 class="text-2xl sm:text-3xl text-stone-100">{title}</h1>
  <svelte:component this={content} />
</article>
