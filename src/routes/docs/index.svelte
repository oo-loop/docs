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
`, 'scss', true)}

<h2 class="mt-45" id="oocreate">Adjust to your need</h2>
<p>Loop encourages you to set your own rules and shape the css the way you like. Following the structure of the <a href="docs/loop-config" title="Loop Map">config map</a>, modify its properties by passing your preferences to the mixin <code class="inline">ooCreate</code> when launching loop.

<h3 class="h4 font-code mt-30">ooCreate(<span class="color-primary">$config</span>:<span class="color-secondary">null</span>)</h3>
<p><em class="text-uppercase text-small">Mixin</em> - Launch Loop framework and generate styling</p>
<ul>
  <li><strong>$config</strong> <em class="font-monospace">(map) <span class="color-secondary">Optional</span></em>
  <br>Set of rules that will be merged into the default Loop config</li>
</ul>

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
`, 'scss', true)}

{@html highlight(`// Your config.scss file

@import '~loop/scss';

@include ooCreate((
  breakpoints: (
    xl: 100em, // update value for xl breakpoint to 1600px
    xxl: 140em, // add extra breakpoint
  ),
  screens: (sm, md, lg, xl, xxl), // add xl & xxl to available responsive value
));
`, 'scss', true)}

<hr>
<section class="info mt-30">Functions such as <strong class="color-primary">ooSet()</strong>, <strong class="color-primary">ooAdd()</strong>, <strong class="color-primary">ooPipe()</strong> can be used as <em class="font-bold">an alternative</em> or <em class="font-bold">be combined</em> to the configuration being passed to <strong class="color-primary">ooCreate()</strong>.</section>
<hr>

<h3 class="h4 font-code" id="ooset">ooSet(<span class="color-primary">$path</span>, <span class="color-primary">$value</span>, <span class="color-primary">$hard</span>:<span class="color-secondary">true</span>)</h3>
<p><em class="text-uppercase text-small">Function</em> - Set new values to Loop config. To be used with <code class="inline color-primary">$ooLoop</code>.</p>
<ul>
	<li class="mb-10"><strong>$path</strong> <em class="font-monospace">(string)</em>
  <br>Concatenated path to a Loop config attribute</li>
	<li class="mb-10"><strong>$value</strong> <em class="font-monospace">(mixed)</em>
  <br>New Loop attribute value</li>
	<li><strong>$hard</strong> <em class="font-monospace">(boolean) <span class="color-secondary">Optional</span></em>
  <br>Destructive merging mode ?</li>
</ul>

{@html highlight(`@import '~loop/scss';

$ooLoop: ooSet('breakpoints', (
  sm: 37.500em,
  md: 60em,
  xl: 100em,
)); // set breakpoint values (xs, lg no longer available)

$ooLoop: ooSet('screens', (sm, md, xl)); // set responsive screens

@include ooCreate(); // generate styles
`, 'scss', true)}

<hr>

<h3 class="font-code h4" id="ooadd">ooAdd(<span class="color-primary">$path</span>, <span class="color-primary">$value</span>)</h3>
<p><em class="text-uppercase text-small">Function</em> - Add values to Loop config. To be used with <code class="inline color-primary">$ooLoop</code>.</p>
<ul>
	<li class="mb-10"><strong>$path</strong> <em class="font-monospace">(string)</em>
  <br>Concatenated path to a Loop config attribute</li>
	<li><strong>$value</strong> <em class="font-monospace">(mixed)</em>
  <br>Value to append</li>
</ul>

{@html highlight(`@import '~loop/scss';

$ooLoop: ooAdd('breakpoints', (
  xxl: 140em, // add xxl breakpoint to map
));
$ooLoop: ooAdd('screens', xxl); // add responsive screen to list

@include ooCreate(); // generate styles
`, 'scss', true)}

<hr>
<section class="info">When targetting a single value with <strong class="color-primary">ooAdd()</strong>, the string will <strong>become a list</strong>.</section>
<hr>

<h3 class="font-code h4" id="oopipe">ooPipe(<span class="color-primary">$rules...</span>)</h3>
<p><em class="text-uppercase text-small">Function</em> - Chain rules of setter and adder to update Loop config. To be used with <code class="inline color-primary">$ooLoop</code>.</p>
<ul>
	<li><strong>$rules</strong> <em class="font-monospace">(list)</em>
  <br>List of setter <code class="inline">_set(<span class="color-primary">$path</span>, <span class="color-primary">$value</span>)</code> and adder<code class="inline">_add(<span class="color-primary">$path</span>, <span class="color-primary">$value</span>)</code></li>
</ul>

{@html highlight(`@import '~loop/scss';

$ooLoop: ooPipe(
  _set('breakpoints.xl', 100em),
  _add('breakpoints', (xxl: 140em)),
  _add('screens', (xl, xxl))
);

@include ooCreate(); // generate styles
`, 'scss', true)}