<script>
  export let title = null;

  $: headTitle = title ? `${title} | ` : '';
</script>

<svelte:head>
	<title>{headTitle}Loop • Dev Companion for Flexible and Expressive CSS</title>
</svelte:head>