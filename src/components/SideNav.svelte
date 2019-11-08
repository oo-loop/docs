<script>
  export let segment
</script>

<style>
	nav {
		width: 180px;
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
	h4 {
		color: #808080;
		font-size: 1.4rem;
		text-transform: uppercase;
	}
</style>

<nav>
	<ul class="list-unstyle">
		<li>
			<h4><a class="{segment === undefined ? 'color-primary' : ''}" href="docs">Getting started</a></h4>
		</li>
		<li>
			<h4>Base</h4>
			<ul class="list-unstyle">
				<li><a class="{segment === 'body' ? 'color-primary' : ''}" href="docs/body">Body</a></li>
				<li><a class="{segment === 'headings' ? 'color-primary' : ''}" href="docs/headings">Headings</a></li>
				<li><a class="{segment === 'type' ? 'color-primary' : ''}" href="docs/type">Type</a></li>
				<li><a class="{segment === 'list' ? 'color-primary' : ''}" href="docs/list">List</a></li>
			</ul>
		</li>
		<li>
			<h4>Components</h4>
			<ul class="list-unstyle">
				<li><a class="{segment === 'column' ? 'color-primary' : ''}" href="docs/column">Column</a></li>
				<li><a class="{segment === 'template' ? 'color-primary' : ''}" href="docs/template">Template</a></li>
				<li><a class="{segment === 'button' ? 'color-primary' : ''}" href="docs/button">Button</a></li>
				<li><a class="{segment === 'form' ? 'color-primary' : ''}" href="docs/form">Form</a></li>
			</ul>
		</li>
	</ul>
</nav>