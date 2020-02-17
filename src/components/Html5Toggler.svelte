<script>
  import { afterUpdate } from 'svelte'
  import highlight from '@/utils/highlight.js'
  
  let classes = undefined;
  export {classes as class};
  export let content = ''

  let code
  let isChecked = false
  $: htmlContent = isChecked
    ? highlight(content.replace(/oo-/g, 'data-oo-'), 'html')
    : highlight(content, 'html')

  afterUpdate(() => {
    code.innerHTML = htmlContent
  })
</script>

<style lang="scss">
.toggler {
  margin-bottom: -21px;
  float:right;
  color: #d6d6d6;
  font-size: 14px;
  user-select: none;
  transform: translateX(-10px) translateY(9px);
}
[data-oo-checkbox] + label::after {
  background-color: transparent;
}
[data-oo-checkbox]:checked + label{
  &::after {
    background-color: transparent;
    border-color: #d6d6d6;
  }
  &::before {
    border-color: #d6d6d6;
  }
}
</style>

<section class="{classes}">
  <div class="toggler"> 
    <input data-oo-checkbox="small" type="checkbox" bind:checked={isChecked}>
    <label on:click={() => isChecked = !isChecked}>html5</label>
  </div>
  <div bind:this={code}></div>
</section>