<script>
	import SideNav from '../../components/SideNav.svelte';
  export let segment;
</script>

<div data-oo-row="gutter-large">
  <aside data-oo-col="span12 fit@md">
    <SideNav {segment}/>
  </aside>
  <article data-oo-col="span8@md">
    <slot></slot>
  </article>
</div>

