<script>
  import HeadTitle from '../../components/HeadTitle.svelte';
  import Row from '../../components/Loop/Row.svelte';
  import Col from '../../components/Loop/Col.svelte';
  import highlight from '../../utils/highlight.js';
</script>

<style>
  .ground {
    padding: 1.25rem;
    margin-bottom: 30px;
    color: #046886;
    text-align: center;
    border: 1px solid #d5d6d6;
    background-color: #e7efef;
  }

  table {
    border-collapse: collapse;
    width: 100%;
  }
  tr {
    border-bottom: 1px solid #d5d6d6;
  }
  th, td {
    padding: .5rem;
  }
  .square {
    display: block;
    width: 80px;
    height: 80px;
    background-color: #87cadb;    
  }
  @media (min-width: 30em) {
    .square {
      width: 100px;
      height: 100px;
    }
  }
</style>

<HeadTitle title="Column component"/>

<h1>Column</h1>
<p class="text-large">Component based on Flexbox, using the 12 columns system.<br>
<code class="ml-0">oo-row</code><code>oo-col</code></p>

<p>The size of each column is <strong>set as auto default</strong></p>
{@html highlight(
`<!-- Auto column -->
<div oo-row>
  <div oo-col></div>
  <div oo-col></div>
</div>
`, 'html')}

<div class="ground">
  <Row>
    <Col cell></Col>
    <Col cell></Col>
  </Row>
</div>
<hr>
<h2 class="mt-45">Responsive screens</h2>
<p>The column system is using the <a href="docs/config#global">global responsive screens</a> by default.</p>
{@html highlight(
`breakpoints: (
  xs: 30em,
  sm: 37.500em,
  md: 60em,
  lg: 80em,
  xl: 120em,
),

screens: (sm, md, lg),

column: (
  system: 12,
  screens: this('screens'), // to modify if neeeded
  ...
),`, 'scss')}

<table class="mt-30 mb-45">
  <thead>
    <tr class="text-small">
      <th></th>
      <th>Root<br><span class="font-regular">>0</span></th>
      <th>Small<br><span class="font-regular">>600px</span></th>
      <th>Medium<br><span class="font-regular">>960px</span></th>
      <th>Large<br><span class="font-regular">>1280px</span></th>
    </tr>
  </thead>
  <tbody class="text-center">
    <tr>
      <th class="text-left text-small">Auto</th>
      <td><small>none</small></td>
      <td><code>auto@sm</code></td>
      <td><code>auto@md</code></td>
      <td><code>auto@lg</code></td>
    </tr>
    <tr>
       <th class="text-left text-small">Sizes</th>
      <td><code>span#</code></td>
      <td><code>span#@sm</code></td>
      <td><code>span#@md</code></td>
      <td><code>span#@lg</code></td>
    </tr>
  </tbody>
</table>

<p>Remember that Loop is taking the <strong>mobile first approach</strong>. Set the main sizes for root (mobile) and adjust them going towards bigger devices.</p>

{@html highlight(
`<div oo-row>
  <div oo-col="span12 span6@sm span4@md span3@lg"></div>
  <div oo-col="span12 span6@sm span8@md span9@lg"></div>
  <div oo-col="span6 span7@md auto@lg"></div>
  <div oo-col></div>
</div>
`, 'html')}

<div class="ground">
  <Row>
    <Col cell prop="span12 span6@sm span4@md span3@lg"></Col>
    <Col cell prop="span12 span6@sm span8@md span9@lg"></Col>
    <Col cell prop="span6 span7@md auto@lg"></Col>
    <Col cell></Col>
  </Row>
</div>

<hr>
<h2>Fit column</h2>
<p>Let the column fits to the size of the content.<br>
The responsive screens is refering to the column component screens which is giving you <code>fit</code><code>fit@sm</code><code>fit@md</code><code>fit@lg</code> by default.</p>

{@html highlight(
`column: (
  fit: (
    use: true,
    screens: this('column.screens'),
  ),
),`, 'scss')}

{@html highlight(
`<div oo-row>
  <div oo-col="fit">fit</div>
  <div oo-col>auto</div>
  <div oo-col="span12 fit@md">fit@md</div>
</div>
`, 'html')}

<div class="ground">
  <Row>
    <Col cell prop="fit">fit</Col>
    <Col cell>auto</Col>
    <Col cell prop="span12 fit@md">fit@md</Col>
  </Row>
</div>

<h4 class="mt-45">Use it to create a media component</h4>

{@html highlight(
`<div oo-row>
  <div oo-col="fit">
    <img src="blue-square.jpg" width="100" height="100"/>
  </div>
  <div oo-col>
    <h3 class="mt-10">My media component</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus error laudantium totam ab expedita necessitatibus!</p>
  </div>
</div>
`, 'html')}
<div class="ground text-left">
  <Row>
    <Col prop="fit">
      <div class="square"></div><!-- yes I'm faking the image for dev purposes-->
    </Col>
    <Col>
      <div class="h3 mt-10">My media component</div><!-- don't want to use an h3 here on my page-->
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus error laudantium totam ab expedita necessitatibus!</p>
    </Col>
  </Row>
</div>

<hr>
<h2>Clear column</h2>
<p>Force to start a new row within the flow of columns.</p>

{@html highlight(
`<div oo-row>
  <div oo-col="span2"></div>
  <div oo-col></div>
  <div oo-col="clear"></div>
  <div oo-col></div>
  <div oo-col></div>
</div>
`, 'html')}

<div class="ground">
  <Row>
    <Col cell prop="span2"></Col>
    <Col cell></Col>
    <Col prop="clear"></Col>
    <Col cell></Col>
    <Col cell></Col>
  </Row>
</div>