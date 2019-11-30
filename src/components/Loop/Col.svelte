<script>
  export let prop = '';
  export let cell = false;
  export let cellLarge = false;

  $: hasCellClass = cell || cellLarge
</script>

<style>
.cell {
  padding: .5rem;
  background-color: #87cade;
  min-height: 2rem;
}
.cell-large {
  padding: 1.5rem;
}
</style>

<div data-oo-col="{prop}" class="{hasCellClass ? 'cell': ''}{cellLarge ? ' cell-large' :''}">
  <slot></slot>
</div>