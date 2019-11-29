<script>
	export let segment;
</script>

<style>
	nav {
		position: relative;
    z-index: 1;
		padding: 0 1em;
		margin-bottom: 1rem;
	}
	ul {
		margin: 0;
	}
	a {
		padding: .5em 0;
		display: block;
		color: #333;
		text-decoration: none;
	}
	.brand {
		font-weight: 700;
	}
	.active {
		color: #0ea7d6;
	}
	img {
		margin-right: 5px;
		vertical-align: middle;
	}
</style>

<nav>
	<ul class="list-inline">
		<li><a class="brand" href="."><img alt="loop css" src="logo-inverted.svg" width="35" height="35"> Loop</a></li>
		<li><a class="{segment === 'docs' ? "active" : ''}" href="docs">Docs</a></li>
		<li><a href="https://github.com/oo-loop/loop" rel="external">Github</a></li>
		<li><a href="v0.4">v0.4</a></li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<li><a rel=prefetch class='{segment === "blog" ? "active" : ""}' href='blog'>Blog</a></li>
	</ul>
</nav>