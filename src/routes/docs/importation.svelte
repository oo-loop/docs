<script>
	import HeadTitle from '@/components/HeadTitle.svelte';
	import Pagination from '@/components/Pagination.svelte';
	import Row from '@/components/Loop/Row.svelte';
	import Col from '@/components/Loop/Col.svelte';
  import highlight from '@/utils/highlight.js';

  const title = 'Importation';
  const description = 'A single import for the entire framework';
</script>

<HeadTitle {title} {description} />

<h1>{title}</h1>
<p class="font-large">{description}</p>
<p>Loop is basing all its settings around the <a href="docs/config/" title="Loop Map">config map</a>.
Being also the case when including pieces of the framework, Loop main file becomes <strong>the only needed</strong> import.</p>

{@html highlight(`@import 'oo-loop/loop'; // that's all`, 'scss')}

<p class="info">Make sure to use the <strong>correct path</strong> to the Loop <strong>node_modules</strong>.
Javascript task runners can help you simplify the import, otherwise please use the following path <strong class="color-primary">node_modules/oo-loop/loop</strong>.</p>

<div class="hr"></div>

<h2 class="mt-30" id="config"><a href="docs/importation/#config" title="Use of Config">#</a> Use of Config</h2>
<p>Adjust your needs of the framework by updating the <em>use</em> property of the config map.</p>

{@html highlight(`// the default use map
use: (
  base: true,
  headings: true,
  content: true,

  column: true,
  template: true,
  button: true,

  form: (
    input: true,
    select: false,
    checkbox: false,
    radio: false,
    toggle: false,
  ),

  container: true,
  visibility: true,
  list: true,
  misc: true,

  utilities: (
    color: true,
    typo: true,
    spacing: true,
    float: true,
    wrapper: true,
  ),
),
`, 'scss')}

<h3 class="mt-45">Update with ooUse()</h3>
<p>Pass a config map to <code>ooUse()</code> to only update the <em>use</em> property. <br>
This allows you to avoid going through <code>ooCreate()</code> gaining more readibility by not overloading the config there (depending on your preferences).</p>

{@html highlight(`@import 'oo-loop/loop';

$ooLoop: ooUse((
  form: (
    checkbox: true, // include oo-checkbox
    radio: true, // include oo-radio
  ),
  utilities: (
    wrapper: false, // remove wrapper utilities
  )
));

@include ooCreate();
`, 'scss')}

<h4 class="mt-30">Include multiple styles at once</h4>
<p>all <code>form</code> components and <code>utilities</code> classes can be included from the same parent property.</p>

{@html highlight(`@import 'oo-loop/loop';

$ooLoop: ooUse((
  form: true, // include all
  utilities: false // remove all
));

@include ooCreate();
`, 'scss')}

<h3 class="mt-45">Update with ooCreate</h3>
<p>Use the <code>ooCreate()</code> config to pass some preferences.</p>
{@html highlight(
`@import 'oo-loop/loop';

@include ooCreate((
  use: (
    form: true, // include all
    utilities: false // remove all
  )
));
`, 'scss')}
{@html highlight(
`@import 'oo-loop/loop';

@include ooCreate((
  use: (
    form: (
      select: true, // add oo-select component
    ),
    utilities: (
      typo: false, // remove typo utilities
      float: false, // remove float utilities
    )
  )
));
`, 'scss')}

<h3 class="mt-45">Update one property at a time</h3>
<p>Use the functions <code>ooSet()</code> or <code>ooPipe()</code> to set individual properties.</p>
{@html highlight(
`@import 'oo-loop/loop';

$ooLoop: ooSet('use.utilities.wrapper', false);

$ooLoop: ooPipe(
  _set('use.form.select', true),
  _set('use.form.checkbox', true),
  _set('use.form.radio', true)
);

@include ooCreate();
`, 'scss')}

<hr>
<h2 id="mixin"><a href="docs/importation/#mixin" title="Use of Mixin">#</a> Use of mixin</h2>
<p>Instead of using the autobuild of <code>ooCreate()</code>, you can include one by one the desired elements from Loop framework.</p>
<p>In any case, and before doing so, <strong>the initialization of $ooLoop is necessary</strong> and will be done via <code>ooInit()</code>.
That will also give you the opportunity to set some global settings.</p>

<p>For the rest of the elements, keep their default style or customize them by passing new parameters.</p>

<p class="info">When passing configuration to mixin, the referers <strong>this()</strong> and <strong>_this()</strong> are available. In the case of accessing global data <strong>oo()</strong> is usable.</p>

{@html highlight(
`// Here is an example

@import 'oo-loop/loop';

// Initialize Loop
@include ooInit((
  palette: (
    'dark-gray': #555,
  )
));

// Add base and set the main font-family
@include Base((
  props: (
    font-family: (Robotto, arial, serif),
  )
));

// Add headings and set some styles
@include Headings((
  props: (
    font-family: (Georgia, serif),
    color: oo('palette.darkGray'),
  )
));

// Add Button component
@include Button((
  props: (
    color: #fff,
    background-color: oo('palette.darkGray'),
  ),
  states: (
    hover: (
      background-color: ooDarken(this('button.props.backgroundColor'), 12%),
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
<Row>
  <Col>
    <h4 class="font-code">Base(<span class="color-primary">$config</span>:<span class="color-secondary">null</span>)</h4>
    <p><em class="text-uppercase font-small">Mixin</em> - Format your css to act the same accross all browers and set your body element. <strong>This is highly recommended!</strong></p>
    <ul>
      <li><strong>$config</strong> <em class="font-monospace">(map) <span class="color-secondary">Optional</span></em>
      <br>Set the properties <code>props</code> and <code>smoothing</code>.</li>
    </ul>
  </Col>
  <Col prop="span12 fit@sm self-valign-middle">
    <a data-oo-button href="docs/html-elements/" title="Base documentation">Use Base</a>
  </Col>
</Row>

<hr>
<Row>
  <Col>
    <h4 class="font-code">Content(<span class="color-primary">$config</span>:<span class="color-secondary">null</span>)</h4>
    <p><em class="text-uppercase font-small">Mixin</em> - Set your html content elements.</p>
    <ul>
      <li><strong>$config</strong> <em class="font-monospace">(map) <span class="color-secondary">Optional</span></em>
      <br>Set the properties <code>paragraph</code> <code>anchor</code> <code>list</code> <code>hr</code>.</li>
    </ul>
  </Col>
  <Col prop="span12 fit@sm self-valign-middle">
    <a data-oo-button href="docs/html-elements/#content" title="Content documentation">Use Content</a>
  </Col>
</Row>

<hr>
<Row>
  <Col>
    <h4 class="font-code">Headings(<span class="color-primary">$config</span>:<span class="color-secondary">null</span>)</h4>
    <p><em class="text-uppercase font-small">Mixin</em> - Set your css headings.</p>
    <ul>
      <li><strong>$config</strong> <em class="font-monospace">(map) <span class="color-secondary">Optional</span></em>
      <br>Set the properties <code>headings</code>.</li>
    </ul>
  </Col>
  <Col prop="span12 fit@sm self-valign-middle">
    <a data-oo-button href="docs/html-elements/#headings" title="Headings documentation">Use Headings</a>
  </Col>
</Row>

<hr>
<Row>
  <Col>
    <h4 class="font-code">Column(<span class="color-primary">$config</span>:<span class="color-secondary">null</span>)</h4>
    <p><em class="text-uppercase font-small">Mixin</em> - Include the column component.</p>
    <ul>
      <li><strong>$config</strong> <em class="font-monospace">(map) <span class="color-secondary">Optional</span></em>
      <br>Set the map properties of <code>column</code>.</li>
    </ul>
  </Col>
  <Col prop="span12 fit@sm self-valign-middle">
    <a data-oo-button href="docs/components/column/" title="Column documentation">Use Column</a>
  </Col>
</Row>

<hr>
<Row>
  <Col>
    <h4 class="font-code">Template(<span class="color-primary">$config</span>:<span class="color-secondary">null</span>)</h4>
    <p><em class="text-uppercase font-small">Mixin</em> - Include the template component.</p>
    <ul>
      <li><strong>$config</strong> <em class="font-monospace">(map) <span class="color-secondary">Optional</span></em>
      <br>Set the map properties of <code>template</code>.</li>
    </ul>
  </Col>
  <Col prop="span12 fit@sm self-valign-middle">
    <a data-oo-button href="docs/components/template/" title="Template documentation">Use Template</a>
  </Col>
</Row>

<hr>
<Row>
  <Col>
    <h4 class="font-code">Button(<span class="color-primary">$config</span>:<span class="color-secondary">null</span>)</h4>
    <p><em class="text-uppercase font-small">Mixin</em> - Include the button component.</p>
    <ul>
      <li><strong>$config</strong> <em class="font-monospace">(map) <span class="color-secondary">Optional</span></em>
      <br>Set the map properties of <code>button</code>.</li>
    </ul>
  </Col>
  <Col prop="span12 fit@sm self-valign-middle">
    <a data-oo-button href="docs/components/button/" title="Button documentation">Use Button</a>
  </Col>
</Row>

<hr>
<Row>
  <Col>
    <h4 class="font-code">Label(<span class="color-primary">$config</span>:<span class="color-secondary">null</span>)</h4>
    <p><em class="text-uppercase font-small">Mixin</em> - Include css for input label.</p>
    <ul>
      <li><strong>$config</strong> <em class="font-monospace">(map) <span class="color-secondary">Optional</span></em>
      <br>Set css properties of <code>label</code>.</li>
    </ul>
  </Col>
  <Col prop="span12 fit@sm self-valign-middle">
    <a data-oo-button href="docs/components/form/#input" title="Label documentation">Set Label</a>
  </Col>
</Row>

<hr>
<Row>
  <Col>
    <h4 class="font-code">InputField(<span class="color-primary">$config</span>:<span class="color-secondary">null</span>)</h4>
    <p><em class="text-uppercase font-small">Mixin</em> - Include the input component.</p>
    <ul>
      <li><strong>$config</strong> <em class="font-monospace">(map) <span class="color-secondary">Optional</span></em>
      <br>Set the map properties of <code>input</code>.</li>
    </ul>
  </Col>
  <Col prop="span12 fit@sm self-valign-middle">
    <a data-oo-button href="docs/components/form/#input" title="Input documentation">Use Input</a>
  </Col>
</Row>

<hr>
<Row>
  <Col>
    <h4 class="font-code">SelectField(<span class="color-primary">$config</span>:<span class="color-secondary">null</span>)</h4>
    <p><em class="text-uppercase font-small">Mixin</em> - Include the select component.</p>
    <ul>
      <li><strong>$config</strong> <em class="font-monospace">(map) <span class="color-secondary">Optional</span></em>
      <br>Set the map properties of <code>select</code>.</li>
    </ul>
  </Col>
  <Col prop="span12 fit@sm self-valign-middle">
    <a data-oo-button href="docs/components/form/#select" title="Select documentation">Use Select</a>
  </Col>
</Row>

<hr>
<Row>
  <Col>
    <h4 class="font-code">Checkbox(<span class="color-primary">$config</span>:<span class="color-secondary">null</span>)</h4>
    <p><em class="text-uppercase font-small">Mixin</em> - Include the checkbox component.</p>
    <ul>
      <li><strong>$config</strong> <em class="font-monospace">(map) <span class="color-secondary">Optional</span></em>
      <br>Set the map properties of <code>checkbox</code>.</li>
    </ul>
  </Col>
  <Col prop="span12 fit@sm self-valign-middle">
    <a data-oo-button href="docs/components/form/#checkbox" title="Checkbox documentation">Use Checkbox</a>
  </Col>
</Row>

<hr>
<Row>
  <Col>
    <h4 class="font-code">Radio(<span class="color-primary">$config</span>:<span class="color-secondary">null</span>)</h4>
    <p><em class="text-uppercase font-small">Mixin</em> - Include the radio component.</p>
    <ul>
      <li><strong>$config</strong> <em class="font-monospace">(map) <span class="color-secondary">Optional</span></em>
      <br>Set the map properties of <code>radio</code>.</li>
    </ul>
  </Col>
  <Col prop="span12 fit@sm self-valign-middle">
    <a data-oo-button href="docs/components/form/#radio" title="Radio documentation">Use Radio</a>
  </Col>
</Row>

<hr>
<Row>
  <Col>
    <h4 class="font-code">Toggle(<span class="color-primary">$config</span>:<span class="color-secondary">null</span>)</h4>
    <p><em class="text-uppercase font-small">Mixin</em> - Include the toggle component.</p>
    <ul>
      <li><strong>$config</strong> <em class="font-monospace">(map) <span class="color-secondary">Optional</span></em>
      <br>Set the map properties of <code>toggle</code>.</li>
    </ul>
  </Col>
  <Col prop="span12 fit@sm self-valign-middle">
    <a data-oo-button href="docs/components/form/#toggle" title="Toggle documentation">Use Toggle</a>
  </Col>
</Row>

<hr>
<Row>
  <Col>
    <h4 class="font-code">Container(<span class="color-primary">$config</span>:<span class="color-secondary">null</span>)</h4>
    <p><em class="text-uppercase font-small">Mixin</em> - Include the container classes.</p>
    <ul>
      <li><strong>$config</strong> <em class="font-monospace">(map) <span class="color-secondary">Optional</span></em>
      <br>Set the map properties of <code>container</code>.</li>
    </ul>
  </Col>
  <Col prop="span12 fit@sm self-valign-middle">
    <a data-oo-button href="docs/helpers/container/" title="Container documentation">Use Container</a>
  </Col>
</Row>

<hr>
<Row>
  <Col>
    <h4 class="font-code">Visibility(<span class="color-primary">$config</span>:<span class="color-secondary">null</span>)</h4>
    <p><em class="text-uppercase font-small">Mixin</em> - Include the visiblity classes.</p>
    <ul>
      <li><strong>$config</strong> <em class="font-monospace">(map) <span class="color-secondary">Optional</span></em>
      <br>Set the map properties of <code>visibility</code>.</li>
    </ul>
  </Col>
  <Col prop="span12 fit@sm self-valign-middle">
    <a data-oo-button href="docs/helpers/visibility/" title="Visibility documentation">Use Visibility</a>
  </Col>
</Row>

<hr>
<Row>
  <Col>
    <h4 class="font-code">Misc(<span class="color-primary">$config</span>:<span class="color-secondary">null</span>)</h4>
    <p><em class="text-uppercase font-small">Mixin</em> - Include the miscellaneous classes.</p>
    <ul>
      <li><strong>$config</strong> <em class="font-monospace">(map) <span class="color-secondary">Optional</span></em>
      <br>Set the map properties of <code>misc</code>.</li>
    </ul>
  </Col>
  <Col prop="span12 fit@sm self-valign-middle">
    <a data-oo-button href="docs/helpers/misc/" title="Miscellaneous documentation">Use Misc</a>
  </Col>
</Row>

<hr>
<Row>
  <Col>
    <h4 class="font-code">Float(<span class="color-primary">$config</span>:<span class="color-secondary">null</span>)</h4>
    <p><em class="text-uppercase font-small">Mixin</em> - Include the float utilities.</p>
    <ul>
      <li><strong>$config</strong> <em class="font-monospace">(map) <span class="color-secondary">Optional</span></em>
      <br>Set the map properties of <code>float</code>.</li>
    </ul>
  </Col>
  <Col prop="span12 fit@sm self-valign-middle">
    <a data-oo-button href="docs/utilities/float/" title="Float documentation">Use Float</a>
  </Col>
</Row>

<hr>
<Row>
  <Col>
    <h4 class="font-code">Spacing(<span class="color-primary">$config</span>:<span class="color-secondary">null</span>)</h4>
    <p><em class="text-uppercase font-small">Mixin</em> - Include the spacing utilities.</p>
    <ul>
      <li><strong>$config</strong> <em class="font-monospace">(map) <span class="color-secondary">Optional</span></em>
      <br>Set the properties of <code>spacing</code>.</li>
    </ul>
  </Col>
  <Col prop="span12 fit@sm self-valign-middle">
    <a data-oo-button href="docs/utilities/spacing/" title="Spacing documentation">Use Spacing</a>
  </Col>
</Row>

<hr>
<Row>
  <Col>
    <h4 class="font-code">Color(<span class="color-primary">$config</span>:<span class="color-secondary">null</span>)</h4>
    <p><em class="text-uppercase font-small">Mixin</em> - Include the color utilities.</p>
    <ul>
      <li><strong>$config</strong> <em class="font-monospace">(map) <span class="color-secondary">Optional</span></em>
      <br>Set the property <code>color</code> in an utility format.</li>
    </ul>
  </Col>
  <Col prop="span12 fit@sm self-valign-middle">
    <a data-oo-button href="docs/utilities/color/" title="Color documentation">Use Color utilities</a>
  </Col>
</Row>

<hr>
<Row>
  <Col>
    <h4 class="font-code">Typography(<span class="color-primary">$config</span>:<span class="color-secondary">null</span>)</h4>
    <p><em class="text-uppercase font-small">Mixin</em> - Include the typography utilities.</p>
    <ul>
      <li><strong>$config</strong> <em class="font-monospace">(map) <span class="color-secondary">Optional</span></em>
      <br>Set the property <code>typo</code> in an utility format.</li>
    </ul>
  </Col>
  <Col prop="span12 fit@sm self-valign-middle">
    <a data-oo-button href="docs/utilities/typography/" title="Typography documentation">Use Typo utilities</a>
  </Col>
</Row>

<hr>
<Row>
  <Col>
    <h4 class="font-code">List(<span class="color-primary">$config</span>:<span class="color-secondary">null</span>)</h4>
    <p><em class="text-uppercase font-small">Mixin</em> - Include the list classes.</p>
    <ul>
      <li><strong>$config</strong> <em class="font-monospace">(map) <span class="color-secondary">Optional</span></em>
      <br>Set the properties of <code>list</code>.</li>
    </ul>
  </Col>
  <Col prop="span12 fit@sm self-valign-middle">
    <a data-oo-button href="docs/helpers/list/" title="List documentation">Use List</a>
  </Col>
</Row>

<hr>
<Row>
  <Col>
    <h4 class="font-code">Wrapper(<span class="color-primary">$config</span>:<span class="color-secondary">null</span>)</h4>
    <p><em class="text-uppercase font-small">Mixin</em> - Include the wrapper utilities.</p>
    <ul>
      <li><strong>$config</strong> <em class="font-monospace">(map) <span class="color-secondary">Optional</span></em>
      <br>Set the property <code>wrapper</code> in an utility format.</li>
    </ul>
  </Col>
  <Col prop="span12 fit@sm self-valign-middle">
    <a data-oo-button href="docs/utilities/wrapper/" title="Spacing documentation">Use Wrapper</a>
  </Col>
</Row>

<Pagination page="importation" />
