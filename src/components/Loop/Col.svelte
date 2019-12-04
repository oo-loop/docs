<script>
  export let prop = '';
  export let bordered = false;
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
.bordered {
  border: 1px solid #459cb5;
}
</style>

<div data-oo-col="{prop}" class="{hasCellClass ? 'cell': ''}{cellLarge ? ' cell-large' :''}{bordered ? ' bordered' :''}">
  <slot></slot>
</div>