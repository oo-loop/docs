<script>
  import HeadTitle from '@/components/HeadTitle.svelte';
  import Pagination from '@/components/Pagination.svelte';
  import highlight from '@/utils/highlight.js';
</script>

<HeadTitle title="Micellaneous"/>

<h1>Miscellaneous</h1>
<p class="font-large">Recurring handy classes.</p>
<p>Those styles are generated from the property <em>misc</em> of the config map.</p>
{@html highlight(
`//default config
misc: (
  responsive: ( // name of the class
    props: ( // css properties
      maxWidth: 100%,
      height: auto,
    )
  ),
)
`, 'scss')}

<h2 class="mt-45" id="responsive"><a href="docs/helpers/misc#responsive">#</a> Responsive</h2> 
{@html highlight(
`<img class="responsive" src="logo.svg" width="600">
`, 'html')}
<div class="ground text-center">
  <img class="responsive" src="logo.svg" alt="Loop logo" width="600">
</div>

<div class="hr"></div>
<h2 class="mt-45" id="custom"><a href="docs/helpers/misc#custom">#</a> Custom</h2>
<p>As for now, Loop is providing only one miscellaneous class. You can still add your own recurring class through the config file though.</p>
{@html highlight(
`// add .thumbnail class
$ooLoop: ooAdd('misc', (
  'thumbnail': (
    props: (
      padding: 5px,
      border: 1px solid #d6d6d6,
      border-radius: 5px,
      background-color: #f7f7f7,
    )
  )
));
`, 'scss')}
{@html highlight(
`<img class="thumbnail" src="orange.jpg" alt="orange" width="150">
`, 'html')}
<div class="ground text-center">
  <img class="thumbnail" src="orange.jpg" alt="orange" width="150">
</div>

<hr>
<p class="info">In manual mode add the mixin <strong>Misc()</strong></p>

<Pagination href="docs/utilities" label="Make Utilities" />