<script>
  export let index;
  export let current;

  let sections = null;

  // If modifying: remember to modify tailwindcss's safelist
  const weights = [
    {
      header: "3/4",
      articles: ["1/2", "3/4", "2/5"],
    },
    {
      header: "1/2",
      articles: ["3/5", "1/4", "1/2", "3/4", "3/5"],
    },
    {
      header: "3/4",
      articles: ["1/2", "1/4", "3/4", "3/5", "1/2"],
    },
  ]
</script>

{#if sections == null}
  <div class="hidden lg:block lg:animate-pulse px-4 whitespace-nowrap w-64 border-r-2 border-stone-700">
    <ul>
      {#each weights as weight}
        <div class="mb-1 h-3 w-{weight.header} bg-stone-600 rounded"></div>
        <ul>
          {#each weight.articles as article}
            <div class="my-1 h-3 border-l-2 border-stone-700">
              <div class="ml-3 h-3 w-{article} bg-stone-700 rounded"></div>
            </div>
          {/each}
        </ul>
      {/each}
    </ul>
  </div>
{:else}
  <nav class="hidden lg:block px-4 whitespace-nowrap w-64 border-r-2 border-stone-700">
    <ul>
      {#each sections as section}
        <h5 class="mb-1 font-bold text-stone-300">{section.header}</h5>
        <ul>
          {#each section.articles as article}
            <li>
              {#if current === article.slug}
                <a class="pl-4 border-l-2 border-amber-400 text-amber-400"
                  href={article.slug}>
                  {article.title}
                </a>
              {:else}
                <a class="pl-4 border-l-2 border-stone-800 text-stone-400 \
                  hover:text-stone-300 hover:border-stone-700"
                  href={article.slug}>
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
