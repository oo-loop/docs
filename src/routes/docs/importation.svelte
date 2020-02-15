<script>
	import HeadTitle from '@/components/HeadTitle.svelte';
	import Row from '@/components/Loop/Row.svelte';
	import Col from '@/components/Loop/Col.svelte';
  import highlight from '@/utils/highlight.js';
</script>

<HeadTitle title="Importation"/>

<h1>Importation</h1>
<p class="text-large">A single import for the entire framework</p>
<p>Loop is basing all its settings around the <a href="docs/config" title="Loop Map">config map</a> including the selection of the part of the framework. This makes the loop main file <strong>the only needed</strong> import.</p>

{@html highlight(`@import 'loop/scss'; // that's all`, 'scss')}

<h2 class="mt-30" id="config">Use of Config</h2>
<p>Adjust your needs of the framework by updating the <em>use</em> property of the config map.</p>

{@html highlight(`// the default use map
use: (
  base: true,
  headings: true,
  type: true,

  column: true,
  template: true,
  button: true,
  input: (
    textfield: true,
    select: true,
    checkbox: true,
    radio: true,
    toggle: false,
  ),

  container: true,
  visibility: true,
  misc: true,

  utilities: (
    color: true,
    float: true,
    list: true,
    spacing: true,
    text: true,
    wrapper: true,
  ),
),
`, 'scss')}

<h3 class="h4 mt-45">Update with ooCreate</h3>
<p>Use the <code>ooCreate()</code> config to pass some preferences.</p>
{@html highlight(
`@import '~loop/scss';

@include ooCreate((
  use: (
    input: (
      select: false, // remove select component
      checkbox: false, // remove checkbox component
      radio: false,  // remove radio component
    ),
    utilities: (
      wrapper: false,
    )
  )
));
`, 'scss')}
{@html highlight(
`@import '~loop/scss';

@include ooCreate((
  use: (
    input: false, // remove all input components
    utilities: (
      wrapper: false,
    )
  )
));
`, 'scss')}

<h3 class="h4 mt-45">Update one property at a time</h3>
<p>Use the functions <code>ooSet()</code> or <code>ooPipe()</code> to set individual properties.</p>
{@html highlight(
`@import '~loop/scss';

$ooLoop: ooSet('use.utilities.wrapper', false);

$ooLoop: ooPipe(
  _set('use.input.select', false),
  _set('use.input.checkbox', false),
  _set('use.input.radio', false)
);

@include ooCreate();
`, 'scss')}

<h3 class="h4 mt-45">Update with ooUse()</h3>
<p>Pass a config map to <code>ooUse()</code> to only update the <em>use</em> property. <br>
This allows you to avoid going through <code>ooCreate()</code> gaining more readibility by not overloading the config there (depending on your preferences).</p>

{@html highlight(`@import '~loop/scss';

$ooLoop: ooUse((
  input: (
    select: false,
    checkbox: false,
    radio: false,
  ),
  utilities: (
    wrapper: false,
  )
));

@include ooCreate();
`, 'scss')}

<hr>
<h2 id="mixin">Use of mixin</h2>
<p>Instead of using the autobuild of <code>ooCreate()</code>, you can include one by one the desired elements from Loop framework.</p>
<p>In any case, and before doing so, <strong>the initialization of $ooLoop is necessary</strong> and will be done via <code>ooInit()</code>.
That will also give you the opportunity to set some global settings.</p>

<p>For the rest of the elements, keep their default style or customize them by passing new parameters.</p>

<p class="info">When passing configuration to mixin, the referers <strong>this()</strong> and <strong>_this()</strong> are available. In the case of accessing global data <strong>oo()</strong> is usable.</p>

{@html highlight(
`// Here is an example

@import '~loop/scss';

// Initialize Loop
@include ooInit((
  palette: (
    'dark-gray': #555,
  )
));

// Add base and set the main font-family
@include Base((
  props: (
    fontFamily: (Robotto, arial, serif),
  )
));

// Add headings and set some styles
@include Headings((
  props: (
    fontFamily: (Georgia, serif),
    color: oo('palette.darkGray'),
  )
));

// Add Button component
@include Button((
  props: (
    color: #fff,
    backgroundColor: oo('palette.darkGray'),
  ),
  states: (
    hover: (
      backgroundColor: ooDarken(this('button.props.backgroundColor'), 12%),
    ),
    focus: this('button.states.hover'),
  )
));

// Add Column component
@include Column();

// Add visibility classes helper
@include Visibility();
`, 'scss')}

<hr>
<h4 class="mt-30 font-code">ooInit(<span class="color-primary">$config</span>:<span class="color-secondary">null</span>)</h4>
<p><em class="text-uppercase text-small">Mixin</em> - Instantiate <a href="docs/config" title="Loop Map">$ooLoop</a> config.</p>
<ul>
  <li><strong>$config</strong> <em class="font-monospace">(map) <span class="color-secondary">Optional</span></em>
  <br>Set of rules that will be merged into the default Loop config</li>
</ul>

<hr>
<Row>
  <Col>
    <h4 class="font-code">Base(<span class="color-primary">$config</span>:<span class="color-secondary">null</span>)</h4>
    <p><em class="text-uppercase text-small">Mixin</em> - Format your css to act the same accross all browers and set your body element. <strong>This is highly recommended!</strong></p>
    <ul>
      <li><strong>$config</strong> <em class="font-monospace">(map) <span class="color-secondary">Optional</span></em>
      <br>Set the properties <code>props</code> and <code>smoothing</code>.</li>
    </ul>
  </Col>
  <Col prop="span12 fit@sm self-valign-middle">
    <a data-oo-button href="docs/html-elements" title="Base documentation">Use Base</a>
  </Col>
</Row>

<hr>
<Row>
  <Col>
    <h4 class="font-code">Type(<span class="color-primary">$config</span>:<span class="color-secondary">null</span>)</h4>
    <p><em class="text-uppercase text-small">Mixin</em> - Set your base typography.</p>
    <ul>
      <li><strong>$config</strong> <em class="font-monospace">(map) <span class="color-secondary">Optional</span></em>
      <br>Set the properties <code>paragraph</code> <code>anchor</code> <code>list</code> <code>hr</code>.</li>
    </ul>
  </Col>
  <Col prop="span12 fit@sm self-valign-middle">
    <a data-oo-button href="docs/html-elements#type" title="Type documentation">Use Type</a>
  </Col>
</Row>

<hr>
<Row>
  <Col>
    <h4 class="font-code">Headings(<span class="color-primary">$config</span>:<span class="color-secondary">null</span>)</h4>
    <p><em class="text-uppercase text-small">Mixin</em> - Set your css headings.</p>
    <ul>
      <li><strong>$config</strong> <em class="font-monospace">(map) <span class="color-secondary">Optional</span></em>
      <br>Set the properties <code>headings</code>.</li>
    </ul>
  </Col>
  <Col prop="span12 fit@sm self-valign-middle">
    <a data-oo-button href="docs/html-elements#headings" title="Headings documentation">Use Headings</a>
  </Col>
</Row>

<hr>
<Row>
  <Col>
    <h4 class="font-code">Column(<span class="color-primary">$config</span>:<span class="color-secondary">null</span>)</h4>
    <p><em class="text-uppercase text-small">Mixin</em> - Include the column component.</p>
    <ul>
      <li><strong>$config</strong> <em class="font-monospace">(map) <span class="color-secondary">Optional</span></em>
      <br>Set the map properties of <code>column</code>.</li>
    </ul>
  </Col>
  <Col prop="span12 fit@sm self-valign-middle">
    <a data-oo-button href="docs/components/column" title="Column documentation">Use Column</a>
  </Col>
</Row>

<hr>
<Row>
  <Col>
    <h4 class="font-code">Template(<span class="color-primary">$config</span>:<span class="color-secondary">null</span>)</h4>
    <p><em class="text-uppercase text-small">Mixin</em> - Include the template component.</p>
    <ul>
      <li><strong>$config</strong> <em class="font-monospace">(map) <span class="color-secondary">Optional</span></em>
      <br>Set the map properties of <code>template</code>.</li>
    </ul>
  </Col>
  <Col prop="span12 fit@sm self-valign-middle">
    <a data-oo-button href="docs/components/template" title="Template documentation">Use Template</a>
  </Col>
</Row>

<hr>
<Row>
  <Col>
    <h4 class="font-code">Button(<span class="color-primary">$config</span>:<span class="color-secondary">null</span>)</h4>
    <p><em class="text-uppercase text-small">Mixin</em> - Include the button component.</p>
    <ul>
      <li><strong>$config</strong> <em class="font-monospace">(map) <span class="color-secondary">Optional</span></em>
      <br>Set the map properties of <code>button</code>.</li>
    </ul>
  </Col>
  <Col prop="span12 fit@sm self-valign-middle">
    <a data-oo-button href="docs/components/button" title="Button documentation">Use Button</a>
  </Col>
</Row>

<hr>
<Row>
  <Col>
    <h4 class="font-code">Label(<span class="color-primary">$config</span>:<span class="color-secondary">null</span>)</h4>
    <p><em class="text-uppercase text-small">Mixin</em> - Include css for input label.</p>
    <ul>
      <li><strong>$config</strong> <em class="font-monospace">(map) <span class="color-secondary">Optional</span></em>
      <br>Set css properties of <code>label</code>.</li>
    </ul>
  </Col>
  <Col prop="span12 fit@sm self-valign-middle">
    <a data-oo-button href="docs/components/form#input" title="Label documentation">Set Label</a>
  </Col>
</Row>

<hr>
<Row>
  <Col>
    <h4 class="font-code">TextField(<span class="color-primary">$config</span>:<span class="color-secondary">null</span>)</h4>
    <p><em class="text-uppercase text-small">Mixin</em> - Include the input component.</p>
    <ul>
      <li><strong>$config</strong> <em class="font-monospace">(map) <span class="color-secondary">Optional</span></em>
      <br>Set the map properties of <code>input</code>.</li>
    </ul>
  </Col>
  <Col prop="span12 fit@sm self-valign-middle">
    <a data-oo-button href="docs/components/form#input" title="Input documentation">Use Input</a>
  </Col>
</Row>

<hr>
<Row>
  <Col>
    <h4 class="font-code">SelectField(<span class="color-primary">$config</span>:<span class="color-secondary">null</span>)</h4>
    <p><em class="text-uppercase text-small">Mixin</em> - Include the select component.</p>
    <ul>
      <li><strong>$config</strong> <em class="font-monospace">(map) <span class="color-secondary">Optional</span></em>
      <br>Set the map properties of <code>select</code>.</li>
    </ul>
  </Col>
  <Col prop="span12 fit@sm self-valign-middle">
    <a data-oo-button href="docs/components/form#select" title="Select documentation">Use Select</a>
  </Col>
</Row>

<hr>
<Row>
  <Col>
    <h4 class="font-code">Checkbox(<span class="color-primary">$config</span>:<span class="color-secondary">null</span>)</h4>
    <p><em class="text-uppercase text-small">Mixin</em> - Include the checkbox component.</p>
    <ul>
      <li><strong>$config</strong> <em class="font-monospace">(map) <span class="color-secondary">Optional</span></em>
      <br>Set the map properties of <code>checkbox</code>.</li>
    </ul>
  </Col>
  <Col prop="span12 fit@sm self-valign-middle">
    <a data-oo-button href="docs/components/form#checkbox" title="Checkbox documentation">Use Checkbox</a>
  </Col>
</Row>

<hr>
<Row>
  <Col>
    <h4 class="font-code">Radio(<span class="color-primary">$config</span>:<span class="color-secondary">null</span>)</h4>
    <p><em class="text-uppercase text-small">Mixin</em> - Include the radio component.</p>
    <ul>
      <li><strong>$config</strong> <em class="font-monospace">(map) <span class="color-secondary">Optional</span></em>
      <br>Set the map properties of <code>radio</code>.</li>
    </ul>
  </Col>
  <Col prop="span12 fit@sm self-valign-middle">
    <a data-oo-button href="docs/components/form#radio" title="Radio documentation">Use Radio</a>
  </Col>
</Row>

<hr>
<Row>
  <Col>
    <h4 class="font-code">Toggle(<span class="color-primary">$config</span>:<span class="color-secondary">null</span>)</h4>
    <p><em class="text-uppercase text-small">Mixin</em> - Include the toggle component.</p>
    <ul>
      <li><strong>$config</strong> <em class="font-monospace">(map) <span class="color-secondary">Optional</span></em>
      <br>Set the map properties of <code>toggle</code>.</li>
    </ul>
  </Col>
  <Col prop="span12 fit@sm self-valign-middle">
    <a data-oo-button href="docs/components/form#toggle" title="Toggle documentation">Use Toggle</a>
  </Col>
</Row>

<hr>
<Row>
  <Col>
    <h4 class="font-code">Container(<span class="color-primary">$config</span>:<span class="color-secondary">null</span>)</h4>
    <p><em class="text-uppercase text-small">Mixin</em> - Include the container classes.</p>
    <ul>
      <li><strong>$config</strong> <em class="font-monospace">(map) <span class="color-secondary">Optional</span></em>
      <br>Set the map properties of <code>container</code>.</li>
    </ul>
  </Col>
  <Col prop="span12 fit@sm self-valign-middle">
    <a data-oo-button href="docs/helpers/container" title="Container documentation">Use Container</a>
  </Col>
</Row>

<hr>
<Row>
  <Col>
    <h4 class="font-code">Visibility(<span class="color-primary">$config</span>:<span class="color-secondary">null</span>)</h4>
    <p><em class="text-uppercase text-small">Mixin</em> - Include the visiblity classes.</p>
    <ul>
      <li><strong>$config</strong> <em class="font-monospace">(map) <span class="color-secondary">Optional</span></em>
      <br>Set the map properties of <code>visibility</code>.</li>
    </ul>
  </Col>
  <Col prop="span12 fit@sm self-valign-middle">
    <a data-oo-button href="docs/helpers/visibility" title="Visibility documentation">Use Visibility</a>
  </Col>
</Row>

<hr>
<Row>
  <Col>
    <h4 class="font-code">Misc(<span class="color-primary">$config</span>:<span class="color-secondary">null</span>)</h4>
    <p><em class="text-uppercase text-small">Mixin</em> - Include the miscellaneous classes.</p>
    <ul>
      <li><strong>$config</strong> <em class="font-monospace">(map) <span class="color-secondary">Optional</span></em>
      <br>Set the map properties of <code>misc</code>.</li>
    </ul>
  </Col>
  <Col prop="span12 fit@sm self-valign-middle">
    <a data-oo-button href="docs/helpers/misc" title="Miscellaneous documentation">Use Misc</a>
  </Col>
</Row>

<hr>
<Row>
  <Col>
    <h4 class="font-code">Float(<span class="color-primary">$config</span>:<span class="color-secondary">null</span>)</h4>
    <p><em class="text-uppercase text-small">Mixin</em> - Include the float utilities.</p>
    <ul>
      <li><strong>$config</strong> <em class="font-monospace">(map) <span class="color-secondary">Optional</span></em>
      <br>Set the map properties of <code>float</code>.</li>
    </ul>
  </Col>
  <Col prop="span12 fit@sm self-valign-middle">
    <a data-oo-button href="docs/utilities/float" title="Float documentation">Use Float</a>
  </Col>
</Row>

<hr>
<Row>
  <Col>
    <h4 class="font-code">Spacing(<span class="color-primary">$config</span>:<span class="color-secondary">null</span>)</h4>
    <p><em class="text-uppercase text-small">Mixin</em> - Include the spacing utilities.</p>
    <ul>
      <li><strong>$config</strong> <em class="font-monospace">(map) <span class="color-secondary">Optional</span></em>
      <br>Set the properties of <code>spacing</code>.</li>
    </ul>
  </Col>
  <Col prop="span12 fit@sm self-valign-middle">
    <a data-oo-button href="docs/utilities/spacing" title="Spacing documentation">Use Spacing</a>
  </Col>
</Row>

<hr>
<Row>
  <Col>
    <h4 class="font-code">Color(<span class="color-primary">$config</span>:<span class="color-secondary">null</span>)</h4>
    <p><em class="text-uppercase text-small">Mixin</em> - Include the color utilities.</p>
    <ul>
      <li><strong>$config</strong> <em class="font-monospace">(map) <span class="color-secondary">Optional</span></em>
      <br>Set the property <code>color</code> in an utility format.</li>
    </ul>
  </Col>
  <Col prop="span12 fit@sm self-valign-middle">
    <a data-oo-button href="docs/utilities/color" title="Color documentation">Use Color utilities</a>
  </Col>
</Row>

<hr>
<Row>
  <Col>
    <h4 class="font-code">Text(<span class="color-primary">$config</span>:<span class="color-secondary">null</span>)</h4>
    <p><em class="text-uppercase text-small">Mixin</em> - Include the text utilities.</p>
    <ul>
      <li><strong>$config</strong> <em class="font-monospace">(map) <span class="color-secondary">Optional</span></em>
      <br>Set the property <code>text</code> in an utility format.</li>
    </ul>
  </Col>
  <Col prop="span12 fit@sm self-valign-middle">
    <a data-oo-button href="docs/utilities/text" title="Color documentation">Use Text utilities</a>
  </Col>
</Row>

<hr>
<Row>
  <Col>
    <h4 class="font-code">List(<span class="color-primary">$config</span>:<span class="color-secondary">null</span>)</h4>
    <p><em class="text-uppercase text-small">Mixin</em> - Include the list classes.</p>
    <ul>
      <li><strong>$config</strong> <em class="font-monospace">(map) <span class="color-secondary">Optional</span></em>
      <br>Set the properties of <code>list</code>.</li>
    </ul>
  </Col>
  <Col prop="span12 fit@sm self-valign-middle">
    <a data-oo-button href="docs/helpers/list" title="List documentation">Use List</a>
  </Col>
</Row>

<hr>
<Row>
  <Col>
    <h4 class="font-code">Wrapper(<span class="color-primary">$config</span>:<span class="color-secondary">null</span>)</h4>
    <p><em class="text-uppercase text-small">Mixin</em> - Include the wrapper utilities.</p>
    <ul>
      <li><strong>$config</strong> <em class="font-monospace">(map) <span class="color-secondary">Optional</span></em>
      <br>Set the property <code>wrapper</code> in an utility format.</li>
    </ul>
  </Col>
  <Col prop="span12 fit@sm self-valign-middle">
    <a data-oo-button href="docs/utilities/wrapper" title="Spacing documentation">Use Wrapper</a>
  </Col>
</Row>

<hr>