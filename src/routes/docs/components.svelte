<script>
  import HeadTitle from '../../components/HeadTitle.svelte';
  import highlight from '../../utils/highlight.js';

  let html5 = false
  $: attr = html5 ? 'data-oo' : 'oo'
</script>

<style>
  /* your styles go here */
</style>

<HeadTitle title="Components"/>

<h1>Components</h1>
<p class="text-large">Use recurring elements as components and create their own attribute's syntax for development purposes.</p>
<p>Loop semantic offers separation of concerns to differentiate components from other styling and to facilitate readibility.
The HTML becomes easier to understand and to maintain while lightening the class attribute which can be too often overcrowded.</p>

<p>By default, Loop components are used along with the <em>data attribute</em> <code>data-oo-componentName</code> to be a valid html5 attribute.
You could turn off the html5 validity and have a shorter name for speed purposes<code>oo-componentName</code> <i>(Which was the case in Loop v0.4)</i></p>

<button class="float-right mb-5" data-oo-button on:click="{() => html5 = !html5}">Toggle Html5</button>
{@html highlight(
`@include ooCreate((
  html5: ${html5}, // ${html5 ? 'default': 'setting'} ${attr}-componentName
));
`, 'scss')}

{@html highlight(
`<!-- Column component -->
<div ${attr}-row="align-center gutter-less" class="text-small text-center">
  <div ${attr}-col="span12 span3@sm"></div>
  <div ${attr}-col="span3@sm"></div>
  <div ${attr}-col="span3@sm"></div>
</div>
`, 'html')}

<h4 class="mt-30 mb-15">Loop components available</h4>
<ul>
  <li><a href="docs/column" title="Column component">Column</a><code>oo-row</code><code>oo-col</code></li>
  <li><a href="docs/template" title="Template component">Template</a><code>oo-template</code><code>oo-area</code></li>
  <li><a href="docs/button" title="Button component">Button</a><code>oo-button</code></li>
  <li><a href="docs/form" title="Form component">Form</a><code>oo-input</code><code>oo-select</code><code>oo-radio</code><code>oo-checkbox</code><code>oo-toggle</code></li>
</ul>

<hr>
<h2>Custom components</h2>
<p>It is possible to create your own component with the loop syntax.</p>