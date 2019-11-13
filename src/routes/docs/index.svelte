<script>
	import HeadTitle from '../../components/HeadTitle.svelte';
  import highlight from '../../utils/highlight.js';
</script>

<style>
</style>

<HeadTitle title="Getting Started"/>

<h1>Start with Loop</h1>
<p>Loop offers a minimum styling along with common components and utilities to bootstrap any project as a base.</p>
<ul class="text-small">
	<li><a href="#">Normalize css</a></li>
	<li><a href="#">Base typography and headings</a></li>
	<li><a href="#">Layout container</a></li>
	<li><a href="#">Column component</a></li>
	<li><a href="#">Button component</a></li>
	<li><a href="#">Form element components</a></li>
	<li><a href="#">Color utilities</a></li>
	<li><a href="#">Text utilities</a></li>
	<li><a href="#">Spacing utilities</a></li>
	<li><a href="#">Float utilities</a></li>
	<li><a href="#">Visibility utilities</a></li>
</ul>
<p>Import <strong>Loop framework</strong> into your sass file and <strong>launch it</strong> to start with.</p>

{@html highlight(`@import '~loop/scss'; // Import loop
@include ooCreate(); // Launch loop
`, 'scss')}

<h2 class="mt-45" id="config">Configuration</h2>
<p>Loop encourages you to set your own rules and shape the css the way you like. The single config file make it easy to adjust your preferences.</p>

<p>Pass a set of rules to <code class="inline">ooCreate(<span class="color-primary">$config</span>)</code> in a map format. Those new configurations will be merged into the default Loop config in a <strong>non-destructive</strong> way for <em>Map</em> values and <strong>destructive</strong> for <em>String</em> and <em>List</em> values.</p>

{@html highlight(`// Loop default config

$ooLoop: (
  html5: true,
  breakpoints: (
    xs: 30em,     // 480px
    sm: 37.500em, // 600px
    md: 60em,     // 960px
    lg: 80em,     // 1280px
    xl: 120em,    // 1980px
  ),
  screens: (sm, md, lg),
  ...
);
`, 'scss')}

{@html highlight(`// Your config.scss file

@import '~loop/scss';

@include ooCreate((
  breakpoints: (
    xl: 100em, // update value for xl breakpoint to 1600px
  ),
  screens: (sm, md, lg, xl), // add xl to available responsive value
  ...
));
`, 'scss')}

<section class="info mt-30">Functions such as <strong class="color-primary">ooSet()</strong>, <strong class="color-primary">ooAdd()</strong>, <strong class="color-primary">ooPipe()</strong> can be used as <em class="font-bold">an alternative</em> or <em class="font-bold">be combined</em> to <strong class="color-primary">ooCreate()</strong>.</section>

<h3 class="mt-45" id="ooset">ooSet()</h3>
<p>Set new values to Loop config. This action is <strong>destructive</strong>.</p>
<p>Function <code class="inline">ooSet(<span class="color-primary">$path</span>, <span class="color-primary">$value</span>, <span class="color-primary">$hard</span>:true)</code></p>
<ul>
	<li><strong>$path</strong> <em>(Required)</em> concatenated path to a Loop config attribute</li>
	<li><strong>$value</strong> <em>(Required)</em> new Loop attribute value</li>
	<li><strong>$hard</strong> <em>(optional)</em>  desctructive merging mode ?</li>
</ul>

{@html highlight(`@import '~loop/scss';

$ooLoop: ooSet('breakpoints', (
  sm: 37.500em,
  md: 60em,
  xl: 100em,
)); // set breakpoint values (xs, lg not available anymore)

$ooLoop: ooSet('screens', (sm, md, xl)); // set responsive screens

@include ooCreate();
`, 'scss')}

<h3 class="mt-45" id="ooadd">ooAdd()</h3>
<p>Add values to Loop config. This action is <strong>non-destructive</strong>.</p>
<p>Function <code class="inline">ooAdd(<span class="color-primary">$path</span>, <span class="color-primary">$value</span>)</code></p>
<ul>
	<li><strong>$path</strong> <em>(Required)</em> concatenated path to a Loop config attribute</li>
	<li><strong>$value</strong> <em>(Required)</em> value to append</li>
</ul>

{@html highlight(`@import '~loop/scss';

$ooLoop: ooAdd('breakpoints', (
  xxl: 140em, // add xxl breakpoint to map
));
$ooLoop: ooAdd('screens', xxl); // add responsive screen to list

@include ooCreate();
`, 'scss')}

<section class="info">When targetting a single value, the string will <strong>become a list</strong>.</section>

<h3 class="mt-45" id="ooadd">ooPipe()</h3>
<p>Chain rules to update Loop config</p>
<p>Function <code class="inline">ooPipe(<span class="color-primary">$rules...</span>)</code></p>
<ul>
	<li><strong>$rules</strong> <em>(Required)</em> list of setter <code class="inline">_set(<span class="color-primary">$path</span>, <span class="color-primary">$value</span>)</code> and adder<code class="inline">_add(<span class="color-primary">$path</span>, <span class="color-primary">$value</span>)</code>
</ul>

{@html highlight(`@import '~loop/scss';

$ooLoop: ooPipe((
  _set('breakpoints.xl', 100em),
  _add('breakpoints', (xxl: 140em)),
  _add('screens', (xl, xxl))),
));

@include ooCreate();
`, 'scss')}
