<script>
  export let prop = '';
  export let cell = false;
  export let cellLarge = false;
</script>

<style>
.cell {
  padding: .5rem;
  background-color: #87cade;
  min-height: 2rem;
}
.cell-large {
  min-height: 4rem;
}
</style>

<div data-oo-col="{prop}" class="{cell || cellLarge ? 'cell': ''}{cellLarge ? ' cell-large' :''}">
  <slot></slot>
</div>