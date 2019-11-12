<script>
	import SideNav from '../../components/SideNav.svelte';
  export let segment;
</script>

<div data-oo-row="gutter-large" class="mt-15">
  <aside data-oo-col="fit">
    <SideNav {segment}/>
  </aside>
  <article data-oo-col="s8@md">
    <slot></slot>
  </article>
</div>

