<script>
  import HeadTitle from '@/components/HeadTitle.svelte';
  import Col from '@/components/Loop/Col.svelte';
  import highlight from '@/utils/highlight.js';

  export let status;
  export let error;

  const dev = process.env.NODE_ENV === 'development';
</script>

<style>
</style>

<HeadTitle title="{status}"/>

<Col prop="span10@sm span8@md self-align-center">
  <div class="ground">
    <h1>Oops!</h1>
    <p class="text-large">{status}: {error.message}</p>
    {#if dev && error.stack}
      <pre>{error.stack}</pre>
    {/if}
  </div>
  <p class="text-center">Check the <a href="docs" title="documentation">documentation</a></p>
  <hr>
{@html highlight(
`<div data-oo-column="span10@sm span8@md self-align-center">
  <div class="ground">
    <h1>Oops!</h1>
    <p class="text-large">${status}: ${error.message}</p>
  </div>
  <p class="text-center">Check the <a href="docs" title="documentation">documentation</a></p>
</div>
`, 'html')}
</Col>
