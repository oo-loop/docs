<script>
  export let prevHref = null
  export let prevLabel = null
  export let prevTitle = null
  export let nextHref = null
  export let nextLabel = null
  export let nextTitle = null

  $: prevTitleAttr = prevTitle ? prevTitle : prevLabel
  $: nextTitleAttr = nextTitle ? nextTitle : nextLabel
</script>

<hr>
<p class="text-right clearfix mb-30">
  {#if prevHref != null}
    <a
      class="font-code float-left"
      href={prevHref}
      title={prevTitleAttr}>{prevLabel} {'<<'}</a>
  {/if}
  {#if nextHref != null}
    <a
      class="font-code"
      href={nextHref}
      title={nextTitleAttr}>{'>>'} {nextLabel}</a>
  {/if}
</p>
