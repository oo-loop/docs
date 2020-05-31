<script>
  import { Row, Col } from '@/components/Loop';
  import HeadTitle from '@/components/HeadTitle.svelte';
  import Pagination from '@/components/Pagination.svelte';
  import highlight from '@/utils/highlight.js';

  const title = 'Container';
  const description = 'Set the main container of the page with proper spacing on the sides.';
</script>

<HeadTitle {title} {description}/>

<h1>{title}</h1>
<p class="font-large">{description}<br>
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
`, 'scss', 'mb-0')}

<Row prop="stretch gutter-small vgutter-less">
  <Col prop="span12 auto@sm">
{@html highlight(
`// Auto
// Is included by default
@include ooCreate();
`, 'scss', 'mb-0')}
  </Col>
  <Col>
{@html highlight(
`// Manual
@include ooInit();
@include Container();
`, 'scss', 'mb-0')}
  </Col>
</Row>

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

<Pagination href="docs/helpers/visibility/" label="Use Visibility classes" />
