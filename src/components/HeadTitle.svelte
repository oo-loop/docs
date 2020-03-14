<script>
  export let title = null;

  $: headTitle = title ? `${title} | ` : '';
</script>

<svelte:head>
	<title>{headTitle}Loop CSS • Companion for Expressive development</title>
</svelte:head>