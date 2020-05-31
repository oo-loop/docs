<script>
  import { Row, Col } from '@/components/Loop';
  import HeadTitle from '@/components/HeadTitle.svelte';
  import Pagination from '@/components/Pagination.svelte';
  import highlight from '@/utils/highlight.js';

  const title = 'Float utilities';
  const description = 'Set a floating element on the fly.';
</script>

<style lang="scss">
.cell {
  padding: .5rem;
  background-color: oo('palette.sample.dark');
}
.square {
  display: block;
  width: 80px;
  height: 80px;
  background-color: oo('palette.sample.light');
  @include breakpoint(xs) {
    width: 100px;
    height: 100px;
  }
}
</style>

<HeadTitle {title} {description}/>

<h1>{title}</h1>
<p class="font-large">{description}</p>
<p>The two standard float options are available as well as a clearfix, <code>.float-left</code> <code>.float-right</code> <code>.clearfix</code> and <code>.clear</code>.</p>

{@html highlight(
`// default config
float: (
  values: (
    'left',
    'right',
  ),
  clearfix: true, // activate clearfix classes
),
`, 'scss')}

<p class="info mt-30">Float is not included by default</p>

<Row prop="stretch gutter-small">
  <Col prop="span12 auto@sm">
{@html highlight(
`// Auto
@include ooCreate((
  use: (
    utilities: (
      float: true,
    )
  )
));`, 'scss', 'mb-0')}
  </Col>
  <Col>
{@html highlight(
`// Manual
@include ooInit();
@include Float(
  /** some config **/
);
`, 'scss', 'mb-0')}
  </Col>
</Row>

{@html highlight(
`<img class="float-left mr-10" src="blue-square.jpg" width="100" height="100"/>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
<p class="cell">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
`, 'html')}
<div class="ground clearfix">
  <div class="square float-left mr-10"></div>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  <p class="cell">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</div>

<h3>Clearfix</h3>
<p>Clear the floating elements of a container</p>
{@html highlight(
`<div class="clearfix">
  <img class="float-left mr-10" src="blue-square.jpg" width="100" height="100"/>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</div>
<p class="cell">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
`, 'html')}
<div class="ground">
  <div class="clearfix">
    <div class="square float-left mr-10"></div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </div>
  <p class="cell">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</div>

<h3>Clear</h3>
<p>Clear siblings floating elements</p>
{@html highlight(
`<img class="float-left mr-10" src="blue-square.jpg" width="100" height="100"/>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
<p class="cell clear">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
`, 'html')}
<div class="ground">
  <div class="square float-left mr-10"></div>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  <p class="cell clear">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</div>


<h4 class="mt-45">Add more, update data, set responsive values <span class="font-regular font-medium">(<a href="docs/utilities#format" title="Check the options">Check the options</a>)</span></h4>
{@html highlight(
`// add .float-none
$ooLoop: ooAdd('float.values', 'none');

// set .float-left@sm .float-right@sm and float-none@sm
$ooLoop: ooSet('float.screens', 'sm');
`, 'scss')}

<Pagination href="docs/utilities/wrapper/" label="Use Wrapper utilities" />
