<script>
  export let title;
  export let subtitle;
  export let content;
</script>

<article class="max-w-3xl px-4 mx-auto leading-normal prose prose-stone !prose-invert
    prose-h1:text-center prose-headings:mb-0 prose-li:m-0
    md:leading-normal md:prose-lg md:prose-headings:mb-0 md:prose-li:m-0">
  <h1 class="font-serif">{title}</h1>
  <p class="text-center !mb-[-1.33333em] p-0"><i>{subtitle}</i></p>
  <svelte:component this={content} />
</article>
