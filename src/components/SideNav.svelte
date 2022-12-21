<script>
  export let current;
  export let nav;
</script>

{#if nav}
  <nav class="hidden lg:block px-4 whitespace-nowrap w-64 border-r-2 border-stone-700">
    <ul>
      {#each nav as category}
        <h5 class="mb-1 font-bold text-stone-300">{category.title}</h5>
        <ul>
          {#each category.articles as article}
            <li>
              {#if current === article.article_identifier}
                <a class="pl-4 border-l-2 border-amber-400 text-amber-400"
                  href={article.article_identifier}>
                  {article.title}
                </a>
              {:else}
                <a class="pl-4 border-l-2 border-stone-800 text-stone-400 \
                  hover:text-stone-300 hover:border-stone-700"
                  href={article.article_identifier}>
                  {article.title}
                </a>
              {/if}
            </li>
          {/each}
        </ul>
      {/each}
    </ul>
  </nav>
{/if}
