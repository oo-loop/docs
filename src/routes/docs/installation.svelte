<script>
	import HeadTitle from '@/components/HeadTitle.svelte';
	import Pagination from '@/components/Pagination.svelte';
  import highlight from '@/utils/highlight.js';

  const title = 'Installation';
  const description = 'Being a sass framework, Loop requires a sass environment to be setup';
</script>

<style>
</style>

<HeadTitle {title} {description}/>

<h1>{title}</h1>
<p class="font-large">{description}</p>

<h3>Setup options</h3>
<ol>
  <li>Via <a class="font-bold" href="https://sass-lang.com/install" title="Sass" target="blank">Sass</a> applications or commande line</li>
  <li>Via <a class="font-bold" href="https://github.com/sass/node-sass#readme" title="Node sass" target="blank">node-sass</a> <code>npm install node-sass</code></li>
  <li>Via <a class="font-bold" href="https://webpack.js.org/loaders/sass-loader/" title="Webpack sass loader" target="blank">Webpack and sass loader</a> <code>npm install sass-loader node-sass webpack --save-dev</code></li>
  <li>Via <a class="font-bold" href="https://rollupjs.org/guide/en/" title="Rollup" target="blank">Rollup</a> and <a class="font-bold" href="https://github.com/differui/rollup-plugin-sass#readme" title="Rollup sass plugin" target="blank">rollup-plugin-sass</a> <code>npm install rollup rollup-plugin-sass -D</code></li>
</ol>

<h3 class="mt-30">Loop package</h3>
<p>Install Loop via <a class="font-bold" href="https://www.npmjs.com/" title="Node package manager" target="blank">npm</a> or <a class="font-bold" href="https://yarnpkg.com/" title="Yarn package manager" target="blank">yarn</a></p>
<p><code class="large">npm install oo-loop</code> / <code class="large">yarn add oo-loop</code></p>

<h3 class="mt-30">CSS property supports</h3>
<p>Loop does not include any vendor prefixes by default.<br>
Please use <a class="font-bold" href="https://github.com/postcss/autoprefixer#readme" title="PostCSS autoprefixer" target="blank">Autoprefixer</a> to add more compatibilities to your project.</p>

<hr>
<p class="info font-bold">Loop documentation is a work in progress, a more detailed page with code sample will be available soon.</p>
<Pagination href="docs/" title="Start using Loop" label="Start using Loop" />
