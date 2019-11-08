<script>
  export let prop = '';
  export let article = false;
  export let aside = false;
</script>

{#if article}
  <article data-oo-col="{prop}">
    <slot></slot>
  </article>
{:else if aside}
  <aside data-oo-col="{prop}">
    <slot></slot>
  </aside>
{:else}
  <div data-oo-col="{prop}">
    <slot></slot>
  </div>
{/if}