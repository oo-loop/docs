<script>
  export let title = null;
  export let description = 'Fully customizable CSS framework, aiming to create a more maintainable and readable code';

  $: headTitle = title ? `${title} | ` : '';
</script>

<svelte:head>
	<title>{headTitle}Loop • Flexible and Expressive CSS</title>
  <meta name="description" content={description}>
</svelte:head>
