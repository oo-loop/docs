<script>
  export let prop = '';
  export let bordered = false;
  export let cell = false;
  export let cellLarge = false;

  $: hasCellClass = cell || cellLarge
</script>

<style lang="scss">
.cell {
  padding: .5rem;
  background-color: oo('palette.sample.light');
  min-height: 2rem;
}
.cell-large {
  padding: 1.5rem;
}
.bordered {
  border: 1px solid oo('palette.sample.dark');;
}
</style>

<div data-oo-col="{prop}" class="{hasCellClass ? 'cell': ''}{cellLarge ? ' cell-large' :''}{bordered ? ' bordered' :''}">
  <slot></slot>
</div>