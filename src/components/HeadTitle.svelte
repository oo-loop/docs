<script>
  export let title = null;

  $: headTitle = title ? `${title} - ` : '';
</script>

<svelte:head>
	<title>{headTitle}Loop CSS</title>
</svelte:head>