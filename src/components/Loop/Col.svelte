<script>
  export let prop = '';
  export let cell = false;
</script>

<style>
.cell {
  padding: .5rem;
  background-color: #87cade;
  min-height: 2rem;
}
</style>

<div data-oo-col="{prop}" class="{cell ? 'cell': ''}">
  <slot></slot>
</div>