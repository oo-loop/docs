<script>
  import HeadTitle from '@/components/HeadTitle.svelte'
  import Html5Toggler from '@/components/Html5Toggler.svelte'
  import Row from '@/components/Loop/Row.svelte'
  import Col from '@/components/Loop/Col.svelte'
  import highlight from '@/utils/highlight.js'

  let isClear = true
  let isStretch = true

  let alignment = ['left', 'center', 'right', 'evenly', 'between']
  let alignmentSelected = 'center'
  let lgAlignmentSelected = 'evenly'

  let valignment = ['top', 'middle', 'bottom']
  let valignmentSelected = 'middle'
  let lgValignmentSelected = ''

  $: alignmentProp = `valign-${valignmentSelected}${lgValignmentSelected ? ` valign-${lgValignmentSelected}@lg` : ''} align-${alignmentSelected}${lgAlignmentSelected ? ` align-${lgAlignmentSelected}@lg` : ''}`

  let selfAlignmentSelectedA = 'left'
  let selfAlignmentSelectedB = 'left'
  let selfValignmentSelectedB = 'middle'

  let childAlignmentSelected = 'left'
  let childValignmentSelected = 'top'

  let gutter = ['default', 'less', 'small', 'large']
  let gutterSelected = 'small'
  $: gutterProp = gutterSelected !== 'default' ? `gutter-${gutterSelected}` : ''

</script>

<style lang="scss">
  .child {
    padding: .5rem;
    margin: .5rem;
    color:#1d3035;
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
  .ground {
    color: #046886;
    text-align: center;
  }

  :global(.cell) {
    padding: .5rem;
    background-color: oo('palette.sample.light');
    min-height: 2rem;
  }
  :global(.cell-large) {
    padding: 1.5rem;
  }
  :global(.bordered) {
    border: 1px solid oo('palette.sample.dark');;
  }
</style>

<HeadTitle title="Column component"/>

<h1>Column</h1>
<p class="text-large">Layout elements in a page based on the 12 columns system.<br>
<code class="ml-0">oo-row</code><code>oo-col</code></p>

<ul class="mb-30">
<li><a href="docs/components/column#responsive-screens" title="Responsive screens">Responsive screens</a></li>
<li><a href="docs/components/column#fit" title="Fit column">Fit column</a></li>
<li><a href="docs/components/column#clear" title="Clear column">Clear column</a></li>
<li><a href="docs/components/column#gutter" title="Gutter control">Gutter control</a></li>
<li><a href="docs/components/column#stretch" title="Stretch children height">Stretch children</a></li>
<li><a href="docs/components/column#alignment" title="Alignment">Alignment</a></li>
<li><a href="docs/components/column#self-alignment" title="Self alignment">Self alignment</a></li>
<li><a href="docs/components/column#children-alignment" title="Children alignment">Children alignment</a></li>
<li><a href="docs/components/column#order" title="Order column">Order column</a></li>
</ul>

<p>The <strong>default size</strong>  of each column is <strong>set as auto</strong></p>

<Html5Toggler content={
`<!-- Auto column -->
<div oo-row>
  <div oo-col></div>
  <div oo-col></div>
</div>
`} />

<div class="ground">
  <Row>
    <Col class="cell"></Col>
    <Col class="cell"></Col>
  </Row>
</div>
<hr>
<h2 class="mt-45" id="responsive-screens"><a href="docs/components/column#responsive-screens">#</a> Responsive screens</h2>
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
      <td><code>span<i>#</i></code></td>
      <td><code>span<i>#</i>@sm</code></td>
      <td><code>span<i>#</i>@md</code></td>
      <td><code>span<i>#</i>@lg</code></td>
    </tr>
  </tbody>
</table>

<p>Remember that Loop is taking the <strong>mobile first approach</strong>. Set the main sizes for root (mobile) and adjust them going towards bigger devices.</p>
<Html5Toggler content={
`<div oo-row>
  <div oo-col="span12 span6@sm span4@md span3@lg"></div>
  <div oo-col="span12 span6@sm span8@md span9@lg"></div>
  <div oo-col="span6 span7@md auto@lg"></div>
  <div oo-col></div>
</div>
`} />

<div class="ground">
  <Row>
    <Col class="cell" prop="span12 span6@sm span4@md span3@lg"></Col>
    <Col class="cell" prop="span12 span6@sm span8@md span9@lg"></Col>
    <Col class="cell" prop="span6 span7@md auto@lg"></Col>
    <Col class="cell"></Col>
  </Row>
</div>

<hr>
<h2 id="fit"><a href="docs/components/column#fit">#</a> Fit column</h2>
<p>Let the column fits to the size of the content.<code>col="fit"</code><br>
The config <em>screens</em> property is refering to the column component screens, giving you the reponsive variants <code>fit@sm</code><code>fit@md</code><code>fit@lg</code>.</p>

{@html highlight(`// default config
column: (
  fit: (
    use: true, // included
    screens: this('column.screens'), // sm, md, lg
  ),
),`, 'scss')}

<Html5Toggler content={
`<div oo-row>
  <div oo-col="fit">fit</div>
  <div oo-col>auto</div>
  <div oo-col="span12 fit@md">fit@md</div>
</div>
`} />

<div class="ground">
  <Row>
    <Col class="cell" prop="fit">fit</Col>
    <Col class="cell">auto</Col>
    <Col class="cell" prop="span12 fit@md">fit@md</Col>
  </Row>
</div>

<h4 class="mt-45">Use it to create a media component</h4>

<Html5Toggler content={
`<div oo-row>
  <div oo-col="fit">
    <img src="blue-square.jpg" width="100" height="100"/>
  </div>
  <div oo-col>
    <h3 class="mt-10">My media component</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus error laudantium totam ab expedita necessitatibus!</p>
  </div>
</div>
`} />
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
<h2 id="clear"><a href="docs/components/column#clear">#</a> Clear column</h2>
<p>Start a new row within the flow of columns. <code>col="clear"</code></p>

<Html5Toggler content={
`<div oo-row>
  <div oo-col="span2">1</div>
  <div oo-col>2</div>
  ${isClear ? '<div oo-col="clear"></div>' : '<!-- no clear -->'}
  <div oo-col>3</div>
  <div oo-col>4</div>
</div>
`} />

<button data-oo-button class="float-right mb-root" on:click={() => isClear = !isClear}>toggle clear</button>
<div class="ground">
  <Row>
    <Col class="cell" prop="span2">1</Col>
    <Col class="cell">2</Col>
    {#if isClear}
      <Col prop="clear"></Col>
    {/if}
    <Col class="cell">3</Col>
    <Col class="cell">4</Col>
  </Row>
</div>

<hr>
<h2 id="gutter"><a href="docs/components/column#gutter">#</a> Gutter Control</h2>
<p>Change the gap between the columns. <code>row="gutter-<i class="color-secondary">gutterName</i>"</code></p>

{@html highlight(`// default config
column: (
  gutter: (
    screens: (), // not being used
    sizes: (
      default: this('container.gutter'), // match container's value
      'less': 0, // gutter-less
    ),
  ),
),`, 'scss')}
<p class="mt-30">The <em>default</em> size does not require to be specified in the <code>row</code> attribute as it will be applied automatically.</p>

<Html5Toggler content={
`<div oo-row>
  <div oo-col></div>
  <div oo-col></div>
</div>
<hr>
<div oo-row="gutter-less">
  <div oo-col></div>
  <div oo-col></div>
</div>
`} />

<div class="ground">
  <Row>
    <Col class="cell" prop="span6"></Col>
    <Col class="cell" prop="span6"></Col>
  </Row>
  <div class="hr mt-15 mb-15"></div>
  <Row prop="gutter-less">
    <Col class="cell bordered" prop="span6"></Col>
    <Col class="cell bordered" prop="span6"></Col>
  </Row>
</div>

<h3 id="gutter-map"><a href="docs/components/column#gutter-map">#</a> Responsive gutter - <span class="font-regular">Map</span></h3>
<p>Set responsive map to gutter sizes to manage gaps between screen devices.</p>
{@html highlight(
`// add 'small' & 'large' sizes
$ooLoop: ooAdd('column.gutter.sizes', (
  'small' : (
    rt: 0.5rem, // root value
    sm: 1rem,   // small device value
  ),
  'large': (
    rt: rem(30),
    md: rem(50),
  ),
))`, 'scss')}
<Html5Toggler content={
`<div oo-row="${gutterProp}">
  <div oo-col></div>
  <div oo-col></div>
</div>
`} />
<div data-oo-select class="float-right mb-root" style="width:140px">
  <select class="text-small font-bold" bind:value={gutterSelected}>
  {#each gutter as val}
    <option value={val}>gutter {val}</option>
  {/each}
  </select>
</div>
<div class="ground">
  <Row prop="{gutterProp}">
    <Col class="cell" prop="span6"></Col>
    <Col class="cell" prop="span6"></Col>
  </Row>
</div>

<h3 id="gutter-screens"><a href="docs/components/column#gutter-screens">#</a> Responsive gutter - <span class="font-regular">Screens</span></h3>
<p>Treat responsive gutter from the <em>screens</em> property to create <code>gutter-<i>gutterName</i>@<i>screenName</i></code> variants (<em>Variants with <strong>map value will be skipped</strong></em>).</p>
{@html highlight(
`$ooLoop: ooSet('column.gutter', (
  screens : ('sm', 'md'), // list can be used
  sizes: (
    default: this('container.gutter'), // (rt: 1rem, sm: 1.5rem)
    'less': 0,
    'small': (
      rt: 0.5rem,
      sm: 1rem, 
    ),
    'medium': 2rem,
    'large': (
      rt: rem(30),
      md: rem(50),
    )
  )
));

// Generating responsive variants:
// gutter-less@sm gutter-less@md gutter-medium@sm gutter-medium@md
`, 'scss')}
<Html5Toggler content={
`<div oo-row="gutter-less@sm gutter-medium@md">
  <div oo-col></div>
  <div oo-col></div>
</div>
`} />

<div class="ground">
  <Row prop="gutter-less@sm gutter-medium@md">
    <Col class="cell" prop="span6"></Col>
    <Col class="cell" prop="span6"></Col>
  </Row>
</div>

<h4>Vertical gutter</h4>
<p>Target the vertical gap only by setting <em>vscreens</em> and <em>vsizes</em> the same way as <em>screens</em> and <em>sizes</em></p>

{@html highlight(`// default config
column: (
  gutter: (
    vscreens: (),
    vsizes: (),
  ),
),`, 'scss')}

<hr>
<h2 id="stretch"><a href="docs/components/column#stretch">#</a> Stretch children height</h2>
<p>Match the height of each column child elements. <code>row="stretch"</code></p>

<Html5Toggler content={
`<div oo-row${isStretch ? '="stretch"' : ''}>
  <div oo-col>
    <div class="child">More content<br>in<br>that column</div>
  </div>
  <div oo-col>
    <div class="child">Less content</div>
  </div>
</div>
`} />

<button data-oo-button class="float-right mb-root" on:click={() => isStretch = !isStretch}>toggle stretch</button>
<div class="ground">
  <Row prop="{isStretch ? 'stretch' : ''}">
    <Col class="cell">
      <div class="child">More content<br>for that child</div>
    </Col>
    <Col class="cell">
      <div class="child">Less here</div>
    </Col>
  </Row>
</div>

<hr>
<h2 id="alignment"><a href="docs/components/column#alignment">#</a> Alignment</h2>
<p>Align a group of columns horizontaly, vertically or both.<code>row="align-<i>option</i> valign-<i>option</i>"</code></p>
<ul>
  <li><strong>Valign options</strong>: <i>top, middle, bottom</i></li>
  <li><strong>Align options</strong>: <i>left, center, right, evenly, between</i></li>
</ul>
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

<Html5Toggler content={
`<div oo-row="${alignmentProp}">
  <div oo-col="span5"></div>
  <div oo-col="span5"></div>
</div>
`} />

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
    <Col class="cell cell-large" prop="span5"></Col>
    <Col class="cell" prop="span5"></Col>
  </Row>
</div>

<hr>
<h2 id="self-alignment"><a href="docs/components/column#self-alignment">#</a> Self alignment</h2>
<p>Align a single column horizontaly, vertically or both.<code>col="self-align-<i>option</i> self-valign-<i>option</i>"</code></p>

<ul>
  <li><strong>Valign options</strong>: <i>top, middle, bottom</i></li>
  <li><strong>Align options</strong>: <i>left, center, right</i></li>
</ul>

{@html highlight(`// default config 
column: (
  selfAlignment: (
    use: true, // included
    screens: (), // none
  ),
),`, 'scss')}
<p class="mt-30">Setting the config <strong>screens</strong> property will offer you the same options with the responsive variants <code>self-<i class="color-secondary">alignment</i>@<i class="color-secondary">screenName</i></code>.</p>
<Html5Toggler content={
`<div oo-row>
  <div oo-col="span5 self-align-${selfAlignmentSelectedA}"></div>
  <div oo-col="span5 self-valign-${selfValignmentSelectedB} self-align-${selfAlignmentSelectedB}"></div>
</div>
`} class="mb-30" />

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
    <Col class="cell cell-large" prop="span5 self-align-{selfAlignmentSelectedA}">A</Col>
    <Col class="cell" prop="span5 self-align-{selfAlignmentSelectedB} self-valign-{selfValignmentSelectedB}">B</Col>
  </Row>
</div>

<hr>
<h2 id="children-alignment"><a href="docs/components/column#children-alignment">#</a> Children content alignment</h2>
<p>Align content of a <strong>stretched</strong> child horizontaly, vertically or both.<code>col="child-align-<i>option</i> child-valign-<i>option</i></code></p>

<ul>
  <li><strong>Valign options</strong>: <i>top, middle, bottom</i></li>
  <li><strong>Align options</strong>: <i>left, center, right</i></li>
</ul>

{@html highlight(`// default config 
column: (
  childAlignment: (
    use: false, // Not included
  ),
),`, 'scss')}

{@html highlight(`// enable the feature
$ooLoop: ooSet('column.childAlignment.use', true);
`, 'scss')}

<Html5Toggler content={
`<div oo-row="stretch">
  <div oo-col="span6">
    <br><br><br><br>
  </div>
  <div oo-col="span6 child-valign-${childValignmentSelected} child-align-${childAlignmentSelected}">
    <div class="child">B</div>
  </div>
</div>
`} class="mb-30" />

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
    <Col class="cell">
      <br><br><br><br>
    </Col>
    <Col class="cell" prop="child-align-{childAlignmentSelected} child-valign-{childValignmentSelected}">
      <div class="child">B</div>
    </Col>
  </Row>
</div>

<hr>
<h2 id="order"><a href="docs/components/column#order">#</a> Order column</h2>
<p>Rearrange the order of the columns for responsive purposes <code>col="order<i class="color-secondary">#</i>@<i class="color-secondary">screenName</i>"</code><i>(from 0 to 11)</i>.</p>
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

<Html5Toggler content={
`<div oo-row>
  <div oo-col="span6 span3@sm order2@lg">one</div>
  <div oo-col="span6 span3@sm order0@lg">two</div>
  <div oo-col="span6 span3@sm order3@sm">three</div>
  <div oo-col="span6 span3@sm order0@md">four</div>
</div>
`} />
<div class="ground">
  <Row>
    <Col class="cell" prop="span6 span3@sm order2@lg">one</Col>
    <Col class="cell" prop="span6 span3@sm order0@lg">two</Col>
    <Col class="cell" prop="span6 span3@sm order3@sm">three</Col>
    <Col class="cell" prop="span6 span3@sm order0@md">four</Col>
  </Row>
</div>

<h4 class="mt-45">Be specific, lighten your css</h4>
<p>The number of created CSS rules can be quite a lot when its use on a project is minimum. Specify the needed position from the needed screens and generate only the necessary rules.</p>
<p class="info">Enabled, <em>order</em> provides <strong>12 modifiers per screens</strong> which create <strong>36 CSS rules overall</strong> (considering sm, md, lg per default).</p>

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
