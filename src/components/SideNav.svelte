<script>
  export let segment
</script>

<style>
	ul {
		text-transform: uppercase;
		font-size: 1.4rem;
	}
	a {
		color: #808080;
	}
</style>

<nav>
	<ul class="list-unstyle">
		<li><a class="{segment === undefined ? 'color-primary' : ''}" href="docs">Intro</a></li>
		<li><a class="{segment === 'columns' ? 'color-primary' : ''}" href="docs/columns">Columns</a></li>
		<li><a class="{segment === 'template' ? 'color-primary' : ''}" href="docs/template">Template</a></li>
	</ul>
</nav>