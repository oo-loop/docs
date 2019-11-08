<script>
  export let segment
</script>

<style>
	nav {
		width: 250px;
		background-color: #f1f1f1;
		padding: 15px 20px;
		border-radius: 5px;
		box-shadow: 2px 2px 3px -1px rgba(0,0,0,.25);
	}
	ul {
		font-size: 1.4rem;
	}
	li {
		margin-bottom: 3px;
	}
	a {
		color: #555;
	}
	.active {
		color: #0ea7d6;
	}
	h4 {
		color: #808080;
		font-size: 1.4rem;
		text-transform: uppercase;
	}
</style>

<nav>
	<ul class="list-unstyle">
		<li><a class="{segment === undefined ? 'active' : ''}" href="docs">Intro</a></li>
		<li>
			<h4>Base</h4>
			<ul class="list-unstyle">
				<li><a class="{segment === 'body' ? 'active' : ''}" href="docs/body">Body</a></li>
				<li><a class="{segment === 'headings' ? 'active' : ''}" href="docs/headings">Headings</a></li>
				<li><a class="{segment === 'type' ? 'active' : ''}" href="docs/type">Type</a></li>
				<li><a class="{segment === 'list' ? 'active' : ''}" href="docs/list">List</a></li>
			</ul>
		</li>
		<li>
			<h4>Components</h4>
			<ul class="list-unstyle">
				<li><a class="{segment === 'column' ? 'active' : ''}" href="docs/column">Column</a></li>
				<li><a class="{segment === 'template' ? 'active' : ''}" href="docs/template">Template</a></li>
				<li><a class="{segment === 'button' ? 'active' : ''}" href="docs/button">Button</a></li>
				<li><a class="{segment === 'form' ? 'active' : ''}" href="docs/form">Form</a></li>
			</ul>
		</li>
	</ul>
</nav>