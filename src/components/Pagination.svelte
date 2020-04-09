<script>
  export let href
  export let label
  export let title = null

  $: titleAttr = title ? title : label
</script>

<hr>
<p class="text-right mb-30">
  <a class="font-code" {href} title={titleAttr}>>> {label}</a>
</p>