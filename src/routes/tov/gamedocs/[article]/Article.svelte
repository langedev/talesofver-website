<script>
  export let slug;

  let article = null;
  let noarticle = false;
</script>

<article class="px-4 max-w-3xl mx-auto text-stone-400">
  {#if article}
    <h1>{article.title}</h1>
    {article.body}
  {:else if noarticle}
    There is no article
  {:else}
    <svg class="animate-spin h-8 w-8 text-stone-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  {/if}
</article>
