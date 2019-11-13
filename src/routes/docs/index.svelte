<script>
	import HeadTitle from '../../components/HeadTitle.svelte';
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

<pre><code>
<span class="color-secondary">1</span>  <span class="color-pink">@import</span> <span class="color-orange">'~loop/scss'</span>; <span class="color-secondary">// Import loop</span>
<span class="color-secondary">2</span>  <span class="color-pink">@include</span> <span class="color-yellow">ooCreate</span>; <span class="color-secondary">// Launch loop</span>
</code></pre>


<h2 class="mt-45" id="config">Configuration</h2>
<p>Loop encourages you to set your own rules and shape the css the way you like. The single config file make it easy to adjust your preferences.</p>

<p>Pass a set of rules to <code class="inline">ooCreate(<span class="color-primary">$config</span>)</code> in a map format. Those new configurations will be merged into the default Loop config in a <strong>non-destructive</strong> way for <em>Map</em> values and <strong>destructive</strong> for <em>String</em> and <em>List</em> values.</p>
<pre><code>
<span class="color-secondary">// Loop default config</span>

<i></i><span class="color-blue">$ooLoop</span>: (
<i></i>  <span class="color-green">html5</span>: true,
<i></i>  <span class="color-green">breakpoints</span>: (
<i></i>    <span class="color-green">xs</span>: 30em,     <span class="color-secondary">// 480px</span>
<i></i>    <span class="color-green">sm</span>: 37.500em, <span class="color-secondary">// 600px</span>
<i></i>    <span class="color-green">md</span>: 60em,     <span class="color-secondary">// 960px</span>
<i></i>    <span class="color-green">lg</span>: 80em,     <span class="color-secondary">// 1280px</span>
<i></i>    <span class="color-green">xl</span>: 120em,    <span class="color-secondary">// 1980px</span>
<i></i>  ),
<i></i>  <span class="color-green">screens</span>: (sm, md, lg),
<i></i>  <span class="color-secondary">...</span>
<i></i>);
</code></pre>
<pre><code>
<span class="color-secondary">// Your config.scss file</span>

<i></i><span class="color-pink">@import</span> <span class="color-orange">'~loop/scss'</span>;
<i></i>
<i></i><span class="color-pink">@include</span> <span class="color-yellow">ooCreate</span>((
<i></i>  <span class="color-green">breakpoints</span>: (
<i></i>    <span class="color-green">xl</span>: 100em, <span class="color-secondary">// update value for xl breakpoint to 1600px</span>
<i></i>  ),
<i></i>  <span class="color-green">screens</span>: (sm, md, lg, xl), <span class="color-secondary">// add xl to available responsive value</span>
<i></i>  <span class="color-secondary">...</span>
<i></i>));
</code></pre>

<h3 class="mt-45" id="ooset">ooSet()</h3>
<p>Set new values to Loop config. This action is <strong>destructive</strong>.</p>
<p>Function <code class="inline">ooSet(<span class="color-primary">$path</span>, <span class="color-primary">$value</span>, <span class="color-primary">$hard</span>:true)</code></p>
<ul>
	<li><strong>$path</strong> <em>(Required)</em> concatenated path to a Loop config attribute</li>
	<li><strong>$value</strong> <em>(Required)</em> new Loop attribute value</li>
	<li><strong>$hard</strong> <em>(optional)</em>  desctructive merging mode ?</li>
</ul>

<pre><code>
<span class="color-secondary">// Your config.scss file</span>

<i></i><span class="color-pink">@import</span> <span class="color-orange">'~loop/scss'</span>;
<i></i>
<i></i><span class="color-blue">$ooLoop</span>: <span class="color-yellow">ooSet</span>(<span class="color-orange">'breakpoints.xl'</span>, 100em); <span class="color-secondary">// set single xl breakpoint value</span>
<i></i><span class="color-blue">$ooLoop</span>: <span class="color-yellow">ooSet</span>(<span class="color-orange">'screens'</span>, (sm, md, lg, xl)); <span class="color-secondary">// set responsive screens</span>
<i></i>
<i></i><span class="color-pink">@include</span> <span class="color-yellow">ooCreate</span>;
</code></pre>

<pre><code>
<span class="color-secondary">// Your config.scss file</span>

<i></i><span class="color-pink">@import</span> <span class="color-orange">'~loop/scss'</span>;
<i></i>
<i></i><span class="color-blue">$ooLoop</span>: <span class="color-yellow">ooSet</span>(<span class="color-orange">'breakpoints'</span>, (
<i></i>  <span class="color-green">sm:</span> 37.500em,
<i></i>  <span class="color-green">md:</span> 60em,
<i></i>  <span class="color-green">xl:</span> 100em,
<i></i>)); <span class="color-secondary">// set breakpoint values (xs, lg not available anymore)</span>
<i></i>
<i></i><span class="color-blue">$ooLoop</span>: <span class="color-yellow">ooSet</span>(<span class="color-orange">'screens'</span>, (sm, md, xl)); <span class="color-secondary">// set responsive screens</span>
<i></i>
<i></i><span class="color-pink">@include</span> <span class="color-yellow">ooCreate</span>;
</code></pre>

<h3 class="mt-45" id="ooadd">ooAdd()</h3>
<p>Add values to Loop config. This action is <strong>non-destructive</strong>.</p>
<p>Function <code class="inline">ooAdd(<span class="color-primary">$path</span>, <span class="color-primary">$value</span>)</code></p>
<ul>
	<li><strong>$path</strong> <em>(Required)</em> concatenated path to a Loop config attribute</li>
	<li><strong>$value</strong> <em>(Required)</em> value to append</li>
</ul>

<pre><code>
<span class="color-secondary">// Your config.scss file</span>

<i></i><span class="color-pink">@import</span> <span class="color-orange">'~loop/scss'</span>;
<i></i>
<i></i><span class="color-blue">$ooLoop</span>: <span class="color-yellow">ooAdd</span>(<span class="color-orange">'breakpoints'</span>, (
<i></i>  <span class="color-green">xxl</span>: 140em, <span class="color-secondary">// add xxl breakpoint to map</span>
<i></i>));
<i></i><span class="color-blue">$ooLoop</span>: <span class="color-yellow">ooAdd</span>(<span class="color-orange">'screens'</span>, xxl); <span class="color-secondary">// add responsive screen to list</span>
<i></i>
<i></i><span class="color-pink">@include</span> <span class="color-yellow">ooCreate</span>;
</code></pre>