<script>
  export let title;
  export let content;
</script>

<article class="max-w-3xl px-4 mx-auto leading-normal prose prose-stone !prose-invert
    prose-h1:text-center prose-headings:mb-0 prose-li:m-0
    md:leading-normal md:prose-lg md:prose-headings:mb-0 md:prose-li:m-0">
  <h1>{title}</h1>
  <svelte:component this={content} />
</article>
