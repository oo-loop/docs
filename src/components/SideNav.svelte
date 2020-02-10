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
		font-size: .875rem;
	}
	li {
		margin-bottom: 3px;
	}
	a {
		color: #555;
	}
	h4 {
		color: #808080;
		font-size: inherit;
		text-transform: uppercase;
	}
</style>

<nav>
	<ul class="list-unstyle">
		<li>
			<h4><a class="{segment === undefined ? 'color-primary' : ''}" href="docs">Getting started</a></h4>
			<ul class="list-unstyle">
				<li><a href="docs#oocreate">ooCreate</a></li>
				<li><a href="docs#ooset">ooSet</a></li>
				<li><a href="docs#ooadd">ooAdd</a></li>
				<li><a href="docs#oopipe">ooPipe</a></li>
			</ul>
		</li>
		<li>
			<h4><a class="{segment === 'config' ? 'color-primary' : ''}" href="docs/config">Config Map</a></h4>
			<ul class="list-unstyle">
				<li><a href="docs/config#global">Global properties</a></li>
				<li><a href="docs/config#props"><i>Props</i> attribute</a></li>
				<li><a href="docs/config#states"><i>States</i> attribute</a></li>
				<li><a href="docs/config#this"><i>This</i> referer</a></li>
				<li><a href="docs/config#access">Access data</a></li>
			</ul>
		</li>
		<li>
			<h4><a class="{segment === 'importation' ? 'color-primary' : ''}" href="docs/importation">Importation</a></h4>
			<ul class="list-unstyle">
				<li><a href="docs/importation#config">Use of Config</a></li>
				<li><a href="docs/importation#mixin">Use of Mixin</a></li>
			</ul>
		</li>
		<li>
			<h4><a class="{segment === 'html-elements' ? 'color-primary' : ''}" href="docs/html-elements">HTML elements</a></h4>
			<ul class="list-unstyle">
				<li><a href="docs/html-elements#base">Base</a></li>
				<li><a href="docs/html-elements#type">Type</a></li>
				<li><a href="docs/html-elements#headings">Headings</a></li>
			</ul>
		</li>
		<li>
			<h4><a class="{segment === 'components' ? 'color-primary' : ''}" href="docs/components">Components</a></h4>
			<ul class="list-unstyle">
				<li><a class="{segment === 'column' ? 'color-primary' : ''}" href="docs/components/column">Column</a></li>
				<li><a class="{segment === 'template' ? 'color-primary' : ''}" href="docs/components/template">Template</a></li>
				<li><a class="{segment === 'button' ? 'color-primary' : ''}" href="docs/components/button">Button</a></li>
				<li><a class="{segment === 'form' ? 'color-primary' : ''}" href="docs/components/form">Form</a></li>
			</ul>
		</li>
		<li>
			<h4><a class="{segment === 'helpers' ? 'color-primary' : ''}" href="docs/helpers">Helpers</a></h4>
			<ul class="list-unstyle">
				<li><a href="docs/helpers/container">Container</a></li>
				<li><a href="docs/helpers/visibility">Visbility</a></li>
				<li><a href="docs/helpers/misc">Miscellaneous</a></li>
			</ul>
		</li>
		<li>
			<h4><a class="{segment === 'utilities' ? 'color-primary' : ''}" href="docs/utilities">Utilities</a></h4>
			<ul class="list-unstyle">
				<li><a href="docs/utilities/color">Color</a></li>
				<li><a href="docs/utilities/text">Text</a></li>
				<li><a href="docs/utilities/spacing">Spacing</a></li>
				<li><a href="docs/utilities/float">Float</a></li>
				<li><a href="docs/utilities/wrapper">Wrapper</a></li>
			</ul>
		</li>
	</ul>
</nav>