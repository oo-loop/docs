<script>
  import HeadTitle from '@/components/HeadTitle.svelte';
  import Pagination from '@/components/Pagination.svelte';
  import highlight from '@/utils/highlight.js';

  const title = 'Helper classes';
  const description = 'A set of classes to help you deal with common styling.';
</script>

<HeadTitle {title} {description}/>

<h1>{title}</h1>
<p class="font-large">{description}</p>
<p>Unlike utilities classes, helpers classes does not follow any specific format and can achieve multiple things. They are global classes.</p>

<ul>
  <li class="mb-5"><a href="docs/helpers/container/">Container</a>, layout your page <code>.container</code><code>.container-fluid</code></li>
  <li class="mb-5"><a href="docs/helpers/visibility/">Visibility</a>, hide elements between devices<code>.hidden@<i>screenName</i></code><code>.hidden!@<i>screenName</code></li>
  <li class="mb-5"><a href="docs/helpers/list/">List</a>, format ul/ol elements easily<code>.list-unstyle</code><code>.list-inline</code><code>.list-center</code></li>
  <li><a href="docs/helpers/misc/">Miscellaneous</a>, set an image responsive <code>.responsive</code> and add your own</li>
</ul>
<hr>
<h3>Example</h3>
{@html highlight(
`<header class="hidden@print">
  <a class="hidden@sm" href="#" title="Collapse">[+]</a>
  <nav class="container">
    <ul class="list-inline">
      <li>Home</li>
      <li>Documentation</li>
      <li>Code samples</li>
    </ul>
  </nav>
</header>

<article class="container">
  <img class="responsive" src="image.jpg">
  <h1>Here is my article title</h1>
  <p>With a excerpt with Lorem, ipsum.</p>
</article>

<footer class="container">
  @copyright
</footer>
`, 'html')}

<Pagination page="helpers" />
