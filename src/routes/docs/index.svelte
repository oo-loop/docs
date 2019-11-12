<script>
	import HeadTitle from '../../components/HeadTitle.svelte';
</script>

<style>
</style>

<HeadTitle title="Getting Started"/>

<h1>Start with Loop</h1>
<p>Loop offers essential styling along with common components and utilities to bootstrap any project as a base.</p>
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


<h2 class="mt-45" id="config">Adjust to your own need</h2>
<p>Loop encourages you to set your own rules and shape the css the way you like. The single config file make it easy to adjust your preferences.</p>

<p>Pass a set of rules to <code class="inline">ooCreate(<span class="color-primary">$config</span>)</code> in a map format. Those new configurations will be merged into the default loop config in a <strong>non-destructive</strong> way to <em>Map</em> type targets and <strong>destructive</strong> to <em>String</em> and <em>List</em> values.</p>
<pre><code>
<span class="color-secondary">// Loop default config</span>
<i></i><span class="color-blue">$ooLoop</span>(
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
<span class="color-secondary">1</span>  <span class="color-pink">@import</span> <span class="color-orange">'~loop/scss'</span>;
<span class="color-secondary">2</span>
<span class="color-secondary">3</span>  <span class="color-pink">@include</span> <span class="color-yellow">ooCreate</span>((
<span class="color-secondary">4</span>    <span class="color-green">html5</span>: true,
<span class="color-secondary">5</span>    <span class="color-green">breakpoints</span>: (
<span class="color-secondary">5</span>      <span class="color-green">xs</span>: 30em, <span class="color-secondary">// 480px</span>
<span class="color-secondary">5</span>      <span class="color-green">sm</span>: 37.500em, <span class="color-secondary">// 600px</span>
<span class="color-secondary">5</span>      <span class="color-green">md</span>: 60em, <span class="color-secondary">// 960px</span>
<span class="color-secondary">5</span>      <span class="color-green">lg</span>: 80em, <span class="color-secondary">// 1280px</span>
<span class="color-secondary">5</span>      <span class="color-green">xl</span>: 120em, <span class="color-secondary">// 1980px</span>
<span class="color-secondary">5</span>    ),
<span class="color-secondary">6</span>    <span class="color-green">screens</span>: (<span class="color-secondary">...</span>),
<span class="color-secondary">8</span>    <span class="color-secondary">...</span>
<span class="color-secondary">9</span>  ));
</code></pre>