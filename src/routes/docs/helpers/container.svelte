<script>
  import HeadTitle from '@/components/HeadTitle.svelte';
  import highlight from '@/utils/highlight.js';
</script>


<HeadTitle title="Container"/>

<h1>Container</h1>
<p class="font-large">Set the main container of the page with proper spacing on the sides.<br>
<code class="ml-0">.container</code> <code>.container-fluid</code></p>
{@html highlight(
`// default config
container: (
  gutter: (
    rt: 1rem,
    sm: 1.5rem,
  ),
  maxWidth: 1280px,
),
`, 'scss')}

<h3 class="h4 font-code mt-30">.container</h3>
<p>The class <code>.container</code> helps you center the content horizontally while reaching the <em>maxWidth</em> threshold.
The side gutters are also applied.</p>
{@html highlight(
`<div class="container">
<!-- your content here -->
</div>
`, 'html')}

<h3 class="h4 font-code mt-30">.container-fluid</h3>
<p>The class <code>.container-fluid</code> has no width limit. Its purpose is to only give you the sides gutter.</p>
{@html highlight(
`<div class="container-fluid">
<!-- your content here -->
</div>
`, 'html')}

<hr>
<p class="info">In manual mode add the mixin <strong>Container()</strong></p>
