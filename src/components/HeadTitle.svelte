<script>
  export let title = null;
  export let description = 'Full customizable Sass framework for a more maintainable and readable CSS';

  $: headTitle = title ? `${title} | ` : '';
</script>

<svelte:head>
	<title>{headTitle}Loop • Flexible and Expressive CSS</title>
  <meta name="description" content={description}>
</svelte:head>