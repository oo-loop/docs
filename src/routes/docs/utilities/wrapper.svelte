<script>
  import { Row, Col } from '@/components/Loop';
  import HeadTitle from '@/components/HeadTitle.svelte';
  import highlight from '@/utils/highlight.js';

  const title = 'Wrapper utilities';
  const description = 'Wrap elements with padding around them.';
</script>

<style lang="scss">
.cell {
  background-color: oo('palette.sample.dark');
}
[class^="wrapper"] {
  background-color: oo('palette.sample.light');
}
</style>

<HeadTitle {title} {description}/>

<h1>{title}</h1>
<p class="font-large">{description}</p>
<p>Two classes available from start <code>.wrapper-small</code> and <code>.wrapper-medium</code>.</p>

{@html highlight(
`// default config
wrapper: (
  property: 'padding',
  values: (
    'small': 1rem,
    'medium': 1.5rem,
  ),
),
`, 'scss')}

<p class="info mt-30">Wrapper is not included by default</p>

<Row prop="stretch gutter-small">
  <Col prop="span12 auto@sm">
{@html highlight(
`// Auto
@include ooCreate((
  use: (
    utilities: (
      wrapper: true,
    )
  )
));`, 'scss', 'mb-0')}
  </Col>
  <Col>
{@html highlight(
`// Manual
@include ooInit();
@include Wrapper(
  /** some config **/
);
`, 'scss', 'mb-0')}
  </Col>
</Row>

{@html highlight(
`<div class="wrapper-small">small</div>
<div class="wrapper-medium">medium</div>
`, 'html')}
<div class="ground text-center">
  <div class="wrapper-small mb-15">
    <div class="cell">small</div>
  </div>
  <div class="wrapper-medium">
    <div class="cell">medium</div>
  </div>
</div>

<h4 class="mt-30">Add more, update data, set responsive values <span class="font-regular font-medium">(<a href="docs/utilities/#format" title="Check the options">Check the options</a>)</span></h4>
{@html highlight(
`$ooLoop: ooAdd('wrapper.values', (
  'tiny': .5rem,
  'wide': (
    rt: 1rem,
    sm: 2rem,
    md: 3rem,
    lg: 4rem,
  )
));

// set .wrapper-tiny@sm .wrapper-small@sm .wrapper-medium@sm
// set .wrapper-tiny@md .wrapper-small@md
// set .wrapper-small@lg .wrapper-medium@lg
$ooLoop: ooSet('wrapper.screens', (
  sm: '✲',
  md: ('tiny', 'small'),
  lg: ('small', 'medium')
));
`, 'scss')}

{@html highlight(
`<div class="wrapper-tiny">tiny</div>
<div class="wrapper-wide">responsive</div>
<div class="wrapper-tiny wrapper-small@sm wrapper-medium@lg">With breakpoints</div>
`, 'html')}
<div class="ground text-center">
  <div class="wrapper-tiny mb-15">
    <div class="cell">tiny</div>
  </div>
  <div class="wrapper-tiny wrapper-small@sm wrapper-medium@lg mb-15">
    <div class="cell">With breakpoints</div>
  </div>
  <div class="wrapper-wide">
    <div class="cell">responsive</div>
  </div>
</div>
<hr>
