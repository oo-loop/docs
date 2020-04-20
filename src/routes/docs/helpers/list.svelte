<script>
  import HeadTitle from '@/components/HeadTitle.svelte';
  import Pagination from '@/components/Pagination.svelte';
  import highlight from '@/utils/highlight.js';

  const title = 'List';
  const description = 'Format list elements.';
</script>

<HeadTitle {title} {description}/>

<h1>{title}</h1>
<p class="font-large">{description}<br>
<code class="ml-0">.list-unstyle</code> <code>.list-inline</code> <code>.list-center</code></p>

<h2 id="unstyle"><a href="docs/helpers/list/#unstyle">#</a> Unstyle</h2>
<p>Remove default style of list elements</p>

{@html highlight(
`<ul class="list-unstyle">
  <li>Lorem ipsum dolor sit amet consectetur.</li>
  <li>Lorem ipsum dolor sit amet consectetur.</li>
  <li>Lorem ipsum dolor sit amet consectetur.</li>
</ul>
`, 'html')}
<div class="ground">
  <ul class="list-unstyle mt-0 mb-0">
    <li>Lorem ipsum dolor sit amet consectetur.</li>
    <li>Lorem ipsum dolor sit amet consectetur.</li>
    <li>Lorem ipsum dolor sit amet consectetur.</li>
  </ul>
</div>

<div class="hr"></div>
<h2 id="inline"><a href="docs/helpers/list/#inline">#</a> Inline</h2>
<p>Set horizontal list. Adjust the the gap between from the property <em class="font-bold">inlineSpacing</em> of <em>list</em>.</p>

{@html highlight(
`// default config
list: (
  ...
  inlineSpacing: 1em,
),
`, 'scss')}
{@html highlight(
`<ul class="list-inline">
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
  <li>item 4</li>
</ul>
`, 'html')}
<div class="ground">
  <ul class="list-inline mt-0 mb-0">
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
    <li>item 4</li>
  </ul>
</div>

<div class="hr"></div>
<h2 id="center"><a href="docs/helpers/list/#center">#</a> Center</h2>
<p>Horizontally center list elements.</p>

{@html highlight(
`<ul class="list-center">
  <li>Lorem ipsum dolor sit.</li>
  <li>Lorem ipsum dolor sit amet consectetur.</li>
  <li>Lorem ipsum dolor sit amet.</li>
</ul>
<ul class="list-unstyle list-center">
  <li>Lorem ipsum dolor sit amet consectetur.</li>
  <li>Lorem ipsum dolor sit amet.</li>
  <li>Lorem ipsum dolor sit consectetur.</li>
</ul>
<ul class="list-inline list-center">
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
  <li>item 4</li>
</ul>
`, 'html')}
<div class="ground">
  <ul class="list-center">
    <li>Lorem ipsum dolor sit.</li>
    <li>Lorem ipsum dolor sit amet consectetur.</li>
    <li>Lorem ipsum dolor sit amet.</li>
  </ul>
  <ul class="list-unstyle list-center">
    <li>Lorem ipsum dolor sit amet consectetur.</li>
    <li>Lorem ipsum dolor sit amet.</li>
    <li>Lorem ipsum dolor sit consectetur.</li>
  </ul>
  <ul class="list-inline list-center mb-0">
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
    <li>item 4</li>
  </ul>
</div>
<hr>
<p class="info">In manual mode add the mixin <strong>List()</strong></p>

<Pagination href="docs/helpers/misc/" label="Use Miscellaneous classes" />
