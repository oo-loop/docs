<script>
	import HeadTitle from '../components/HeadTitle.svelte'
	import Row from '../components/Loop/Row.svelte'
	import Col from '../components/Loop/Col.svelte'
</script>

<style>
h1 {
	margin-top: 20px;
	margin-bottom: 0;
	font-size: 3em;
}
h2 {
	margin-bottom: 30px;
	font-weight: 400;
}
.brand {
	margin: -75px auto 50px;
  max-width: 960px;
}

img {
	margin-right: -430px;
  margin-left: -70px;
}
</style>

<HeadTitle />

<div class="brand">
	<Row prop="align-center">
		<Col prop="fit">
			<img alt="" src="logo.svg" height="637">
		</Col>
		<Col prop="self-valign-middle">
			<h1>Loop CSS</h1>
			<h2>Sass Framework for Flexible Development</h2>
			<code class="large">npm install oo-loop</code>
		</Col>
	</Row>
</div>

<Col prop="self-align-center span8">
	<section class="section">
		<h3>Fully customizable</h3>
		<p>Loop is a Sass (scss) framework aiming to create a more maintainable and readable CSS. Fully customizable, It gives you complete control on your project to let you create and match your styles with your design needs.</p>
		<p>Loop offers easy management and access to all your variables in a single config map.</p>
	</section>

	<pre><code>
<span class="color-pink">@import</span> <span class="color-orange">'~loop/scss'</span>;

<span class="color-blue">$config</span>: (
  <span class="color-green">html5</span>: true,
  <span class="color-secondary">...</span>
);
<span class="color-pink">@include</span> <span class="color-yellow">ooCreate</span>(<span class="color-blue">$config</span>);
	</code></pre>

	<section class="section">
		<h3>Semantic</h3>
		<p>Loop differentiates components and utilities with semantic for more clarity</p>

		<ul>
			<li>`data-oo-componentName` or `oo-componentName` attribute for components</li>
			<li>`.utilityName` class for utilities</li>
		</ul>
	</section>

	<section class="section">
		<h3>Why Loop ?</h3>
		<p>Have you ever worked on a project with your go-to css framework realizing that you were only using 10% of it. You had to add your own utilities, your own components and when trying to reuse something from its library, you actually had to overwrite some rules, tweak it, in order to reproduce what you wish for.</p>  
		<p>Have you ever wonder if the framework you were using was a real fit?.</p>
		<p>Loop has been developed out of that feeling to overcome this problem.</p>
	</section>

	<section class="section">
		<h3>Philosophy</h3>
		<p>Loop is not a framework providing any possible existing components. It's more like a companion for CSS development, encouraging the use and creation of utilities while considering recurring components. Loop works towards flexibility and expressive CSS.</p>
	</section>
</Col>