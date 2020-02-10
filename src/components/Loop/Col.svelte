<script>
  export let prop = '';
  let classes = undefined;
  export {classes as class};
</script>

<div data-oo-col="{prop}" class="{classes}">
  <slot></slot>
</div>