<script>
  import { Row, Col } from '@/components/Loop';
  import HeadTitle from '@/components/HeadTitle.svelte';
  import Pagination from '@/components/Pagination.svelte';
  import highlight from '@/utils/highlight.js';

  const title = 'Micellaneous';
  const description = 'Recurring handy classes';
</script>

<HeadTitle {title} {description}/>

<h1>{title}</h1>
<p class="font-large">{title}</p>
<p>Those styles are generated from the property <em>misc</em> of the config map.</p>
{@html highlight(
`//default config
misc: (
  responsive: ( // name of the class
    props: ( // css properties
      max-width: 100%,
      height: auto,
    )
  ),
)
`, 'scss', 'mb-0')}

<Row prop="stretch gutter-small vgutter-less">
  <Col prop="span12 auto@sm">
  {@html highlight(
  `// Auto
$ooLoop: ooUse((
  misc: true,
));
@include ooCreate();
`, 'scss', 'mb-0')}
  </Col>
  <Col>
{@html highlight(
`// Manual
@include ooInit();
@include Misc();
`, 'scss', 'mb-0')}
  </Col>
</Row>

<h2 class="mt-45" id="responsive"><a href="docs/helpers/misc/#responsive">#</a> Responsive</h2>
{@html highlight(
`<img class="responsive" src="logo.svg" width="600">
`, 'html')}
<div class="ground text-center">
  <img class="responsive" src="logo.svg" alt="Loop logo" width="600">
</div>

<div class="hr"></div>
<h2 class="mt-45" id="custom"><a href="docs/helpers/misc/#custom">#</a> Custom</h2>
<p>As for now, Loop is providing only one miscellaneous class. You can still add your own recurring class through the config file though.</p>
<p class="mb-5"><strong>Add <code>.thumbnail</code> class</strong></p>
<Row prop="stretch gutter-small vgutter-less">
  <Col prop="span12 auto@sm">
{@html highlight(
`// Auto:
$ooLoop: ooAdd('misc', (
  'thumbnail': (
    props: (
      padding: 5px,
      border: 1px solid #d6d6d6,
      border-radius: 5px,
      background-color: #ffffff,
    )
  )
));

@include ooCreate();
`, 'scss', 'mb-0')}
  </Col>
  <Col>
{@html highlight(
`// Manual:
@include ooInit();

@include Misc((
  'thumbnail': (
    props: (
      padding: 5px,
      border: 1px solid #d6d6d6,
      border-radius: 5px,
      background-color: #ffffff,
    )
  )
));
`, 'scss', 'mb-0')}
  </Col>
</Row>
{@html highlight(
`<img class="thumbnail" src="orange.jpg" alt="orange" width="150">
`, 'html')}
<div class="ground text-center">
  <img class="thumbnail" src="orange.jpg" alt="orange" width="150">
</div>

<Pagination href="docs/utilities/" label="Make Utilities" />
