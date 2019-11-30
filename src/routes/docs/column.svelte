<script>
  import HeadTitle from '../../components/HeadTitle.svelte';
  import Row from '../../components/Loop/Row.svelte';
  import Col from '../../components/Loop/Col.svelte';
  import highlight from '../../utils/highlight.js';

  let isClear = true
  let isStretch = true

  let alignment = ['left', 'center', 'right', 'evenly', 'between']
  let alignmentSelected = 'center'
  let lgAlignmentSelected = 'evenly'

  let valignment = ['top', 'middle', 'bottom']
  let valignmentSelected = 'middle'
  let lgValignmentSelected = ''


  let selfAlignmentSelectedA = 'left'
  let selfAlignmentSelectedB = 'left'
  let selfValignmentSelectedB = 'middle'

  let childAlignmentSelected = 'left'
  let childValignmentSelected = 'top'

  $: alignmentProp = `valign-${valignmentSelected}${lgValignmentSelected ? ` valign-${lgValignmentSelected}@lg` : ''} align-${alignmentSelected}${lgAlignmentSelected ? ` align-${lgAlignmentSelected}@lg` : ''}`

</script>

<style>
  .child {
    padding: .5rem;
    margin: .5rem;
    color:#1d3035;
    background-color: #459cb5;
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
      <td><code>span<i class="color-secondary">#</i></code></td>
      <td><code>span<i class="color-secondary">#</i>@sm</code></td>
      <td><code>span<i class="color-secondary">#</i>@md</code></td>
      <td><code>span<i class="color-secondary">#</i>@lg</code></td>
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
<p>Let the column fits to the size of the content.<code>col="fit"</code><br>
The config <em>screens</em> property is refering to the column component screens, giving you the reponsive variants <code>fit@sm</code><code>fit@md</code><code>fit@lg</code>.</p>

{@html highlight(`// default config
column: (
  fit: (
    use: true, // included
    screens: this('column.screens'), // sm, md, lg
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
<p>Start a new row within the flow of columns. <code>col="clear"</code></p>

{@html highlight(
`<div oo-row>
  <div oo-col="span2">1</div>
  <div oo-col>2</div>
  ${isClear ? '<div oo-col="clear"></div>' : '<!-- no clear -->'}
  <div oo-col>3</div>
  <div oo-col>4</div>
</div>
`, 'html')}

<button data-oo-button class="float-right" on:click={() => isClear = !isClear}>toggle clear</button>
<div class="ground">
  <Row>
    <Col cell prop="span2">1</Col>
    <Col cell>2</Col>
    {#if isClear}
      <Col prop="clear"></Col>
    {/if}
    <Col cell>3</Col>
    <Col cell>4</Col>
  </Row>
</div>

<hr>
<h2>Stretch children height</h2>
<p>Match the eight of each column child elements. <code>row="stretch"</code></p>

{@html highlight(
`<div oo-row${isStretch ? '="stretch"' : ''}>
  <div oo-col>
    <div class="child">More content<br>in<br>that column</div>
  </div>
  <div oo-col>
    <div class="child">Less content</div>
  </div>
</div>
`, 'html')}

<button data-oo-button class="float-right" on:click={() => isStretch = !isStretch}>toggle stretch</button>
<div class="ground">
  <Row prop="{isStretch ? 'stretch' : ''}">
    <Col cell>
      <div class="child">More content<br>for that child</div>
    </Col>
    <Col cell>
      <div class="child">Less here</div>
    </Col>
  </Row>
</div>

<hr>
<h2>Alignment</h2>
<p>Align a group of columns from <code>row=""</code>, through the options <code>align-left</code><code>align-center</code><code>align-right</code><code>align-evenly</code><code>align-between</code><code>valign-top</code><code>valign-middle</code><code>valign-bottom</code></p>
{@html highlight(`// default config 
column: (
  alignment: (
    use: true, // included
    screens: (), // none
  ),
),`, 'scss')}
<p class="mt-30">Setting the config <strong>screens</strong> property will offer you the same options with the responsive variants <code><i class="color-secondary">alignment</i>@<i class="color-secondary">screenName</i></code>.</p>
{@html highlight(`// set lg as available screen
$ooLoop: ooSet('column.alignment.screens', 'lg'); // list can be passed
`, 'scss')}

{@html highlight(
`<div oo-row="${alignmentProp}">
  <div oo-col="span5"></div>
  <div oo-col="span5"></div>
</div>
`, 'html', 'mb-30')}

<Row>
  <Col>
    <label class="color-body text-small">Valign</label>
    <div data-oo-select>
      <select class="text-small" bind:value={valignmentSelected}>
      {#each valignment as val}
      <option value={val}>{val}</option>
      {/each}
      </select>
    </div>
  </Col>
  <Col>
    <label class="color-body text-small">@lg</label>
    <div data-oo-select>
      <select class="text-small" bind:value={lgValignmentSelected}>
        <option value="{null}">none</option>
        {#each valignment as val}
          <option value={val}>{val}@lg</option>
        {/each}
      </select>
    </div>
  </Col>
  <Col prop="span6 span3@sm">
    <label class="color-body text-small">Align</label>
    <div data-oo-select>
      <select class="text-small" bind:value={alignmentSelected}>
      {#each alignment as val}
      <option value={val}>{val}</option>
      {/each}
      </select>
    </div>
  </Col>
  <Col prop="span6 span3@sm">
    <label class="color-body text-small">@lg</label>
    <div data-oo-select>
      <select class="text-small" bind:value={lgAlignmentSelected}>
        <option value="{null}">none</option>
        {#each alignment as val}
        <option value={val}>{val}@lg</option>
        {/each}
      </select>
    </div>
  </Col>
</Row>
<div class="ground mt-15">
  <Row prop={alignmentProp}>
    <Col cellLarge prop="span5"></Col>
    <Col cell prop="span5"></Col>
  </Row>
</div>

<hr>
<h2>Self alignment</h2>
<p>Align a single column from <code>col=""</code> through the options <code>self-align-left</code><code>self-align-center</code><code>self-align-right</code><code>self-valign-top</code><code>self-valign-middle</code><code>self-valign-bottom</code></p>
{@html highlight(`// default config 
column: (
  selfAlignment: (
    use: true, // included
    screens: (), // none
  ),
),`, 'scss')}
<p class="mt-30">Setting the config <strong>screens</strong> property will offer you the same options with the responsive variants <code>self-<i class="color-secondary">alignment</i>@<i class="color-secondary">screenName</i></code>.</p>
{@html highlight(
`<div oo-row>
  <div oo-col="span5 self-align-${selfAlignmentSelectedA}"></div>
  <div oo-col="span5 self-valign-${selfValignmentSelectedB} self-align-${selfAlignmentSelectedB}"></div>
</div>
`, 'html', 'mb-30')}

<Row>
  <Col prop="span12 span6@sm">
    <label class="color-body text-small">Self-align A</label>
    <div data-oo-select>
      <select class="text-small" bind:value={selfAlignmentSelectedA}>
      {#each alignment as val}
        {#if ['between', 'evenly'].indexOf(val) === -1}
        <option value={val}>{val}</option>
        {/if}
      {/each}
      </select>
    </div>
  </Col>
  <Col>
    <label class="color-body text-small">Self-valign B</label>
    <div data-oo-select>
      <select class="text-small" bind:value={selfValignmentSelectedB}>
      {#each valignment as val}
      <option value={val}>{val}</option>
      {/each}
      </select>
    </div>
  </Col>
  <Col prop="span6 span3@sm">
    <label class="color-body text-small">Self-align B</label>
    <div data-oo-select>
      <select class="text-small" bind:value={selfAlignmentSelectedB}>
      {#each alignment as val}
        {#if ['between', 'evenly'].indexOf(val) === -1}
        <option value={val}>{val}</option>
        {/if}
      {/each}
      </select>
    </div>
  </Col>
</Row>
<div class="ground mt-15">
  <Row>
    <Col cellLarge prop="span5 self-align-{selfAlignmentSelectedA}">A</Col>
    <Col cell prop="span5 self-align-{selfAlignmentSelectedB} self-valign-{selfValignmentSelectedB}">B</Col>
  </Row>
</div>

<hr>
<h2>Children content alignment</h2>
<p>Align content of a <strong>stretched</strong> child by passing to <code>col=""</code> the options  <code>child-align-left</code><code>child-align-center</code><code>child-align-right</code><code>child-valign-top</code><code>child-valign-middle</code><code>child-valign-bottom</code>.</p>
{@html highlight(`// default config 
column: (
  childAlignment: (
    use: false, // Not included
  ),
),`, 'scss')}

{@html highlight(`// enable the feature
$ooLoop: ooSet('column.childAlignment.use', true);
`, 'scss')}

{@html highlight(
`<div oo-row="stretch">
  <div oo-col="span6">
    <br><br><br><br>
  </div>
  <div oo-col="span6 child-valign-${childValignmentSelected} child-align-${childAlignmentSelected}">
    <div class="child">B</div>
  </div>
</div>
`, 'html', 'mb-30')}

<Row>
  <Col>
    <label class="color-body text-small">Child-valign B</label>
    <div data-oo-select>
      <select class="text-small" bind:value={childValignmentSelected}>
      {#each valignment as val}
      <option value={val}>{val}</option>
      {/each}
      </select>
    </div>
  </Col>
  <Col prop="span6">
    <label class="color-body text-small">Child-align B</label>
    <div data-oo-select>
      <select class="text-small" bind:value={childAlignmentSelected}>
      {#each alignment as val}
        {#if ['between', 'evenly'].indexOf(val) === -1}
        <option value={val}>{val}</option>
        {/if}
      {/each}
      </select>
    </div>
  </Col>
</Row>

<div class="ground mt-15">
  <Row prop="stretch">
    <Col cell>
      <br><br><br><br>
    </Col>
    <Col cell prop="child-align-{childAlignmentSelected} child-valign-{childValignmentSelected}">
      <div class="child">B</div>
    </Col>
  </Row>
</div>

<hr>
<h2>Order</h2>
<p>Rearrange the order <i>(from 0 to 11)</i> of the columns for responsive purposes <code>col="order<i class="color-secondary">#</i>@<i class="color-secondary">screenName</i>"</code>.</p>
{@html highlight(`// default config 
column: (
  order: (
    use: false, // not included
    screens: this('column.screens'), // sm, md, lg
  ),
),`, 'scss')}

{@html highlight(`// enable the feature
$ooLoop: ooSet('column.order.use', true);
`, 'scss')}

{@html highlight(
`<div oo-row>
  <div oo-col="span6 span3@sm order2@lg">one</div>
  <div oo-col="span6 span3@sm order0@lg">two</div>
  <div oo-col="span6 span3@sm order3@sm">three</div>
  <div oo-col="span6 span3@sm order0@md">four</div>
</div>
`, 'html')}
<div class="ground">
  <Row>
    <Col cell prop="span6 span3@sm order2@lg">one</Col>
    <Col cell prop="span6 span3@sm order0@lg">two</Col>
    <Col cell prop="span6 span3@sm order3@sm">three</Col>
    <Col cell prop="span6 span3@sm order0@md">four</Col>
  </Row>
</div>

<p class="info">Enabled, <em>order</em> provides <strong>12 modifiers per screens</strong> which create <strong>36 CSS rules overall</strong> (considering sm, md, lg per default).</p>

<h4 class="mt-30">Be specific, lighten your css</h4>
<p>The number of created CSS rules can be quite a lot when its use on a project is minimum. Specify the needed position from the needed screens and generate only the necessary rules.</p>

{@html highlight(`/* Specification for the above example (4 CSS rules) */
$ooLoop: ooSet('column.order.screens', (
  sm: 3,      // order3sm
  md: 0,      // order0@md
  lg: (0, 2), // order0@lg, order2@lg
));

/* Other situation */
$ooLoop: ooSet('column.order.screens', (
  sm: (),// from order0@sm to order11@sm
  md: 0, // order0@md
));

/**/
$ooLoop: ooSet('column.order.screens', 'sm'); // from order0@sm to order11@sm
`, 'scss')}

<hr>