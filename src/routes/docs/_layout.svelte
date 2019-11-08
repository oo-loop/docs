<script>
	import SideNav from '../../components/SideNav.svelte';
  export let segment;
</script>

<SideNav {segment}/>

<article>
	<slot></slot>
</article>