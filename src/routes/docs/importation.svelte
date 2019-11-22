<script>
	import HeadTitle from '../../components/HeadTitle.svelte';
	import Row from '../../components/Loop/Row.svelte';
	import Col from '../../components/Loop/Col.svelte';
  import highlight from '../../utils/highlight.js';
</script>

<HeadTitle title="Importation"/>

<h1>Importation</h1>
<p>Loop is basing all its settings around the <a href="docs/config" title="Loop Map">config map</a> including the selection of the part of the framework. This makes the loop main file <strong>the only needed</strong> import.</p>

{@html highlight(`@import 'loop/scss'; // that's all`, 'scss', true)}

<h2 class="mt-30" id="config">Use of Config</h2>
<p>Adjust your needs of the framework by updating the <em>use</em> property of the config map.</p>

{@html highlight(`// the default use map

$ooLoop: (
  use: (
    base: true,
    headings: true,
    type: true,
    button: true,
    
    input: (
      textfield: true,
      textarea: true,
      select: true,
      checkbox: true,
      radio: true,
      toggle: false,
    ),

    column: (
      system: true,
      fit: true,
      order: false,
      offset: false,
      alignment: true,
      selfAlignment: true,
      childAlignment: false,
    ),

    template: true,
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
  ...,
);`, 'scss')}

<h3 class="h4 mt-45">Update with ooCreate</h3>
<p>Use the <code>ooCreate()</code> config to pass some preferences.</p>
{@html highlight(
`@import '~loop/scss';

@include ooCreate((
  input: (
    select: false, // remove select component
    checkbox: false, // remove checkbox component
    radio: false,  // remove radio component
  )
));
`, 'scss', true)}

<h3 class="h4 mt-45">Update one property at the time</h3>
<p>Use the functions <code>ooSet()</code> or <code>ooPipe</code> to set individual properties.</p>
{@html highlight(
`@import '~loop/scss';

$ooLoop: ooSet('use.utilities.wrapper', false);

$ooLoop: ooPipe(
  _set('use.input.select', false),
  _set('use.input.checkbox', false),
  _set('use.input.radio', false)
);

@include ooCreate();
`, 'scss', true)}

<h3 class="h4 mt-45">Update with ooUse()</h3>
<p>Pass a config map to <code>ooUse()</code> to only update the <em>use</em> property. <br>
This allows you to avoid going through <code>ooCreate()</code> gaining more readibility by not overloading the config there (depending on your preferences).</p>

{@html highlight(`@import '~loop/scss';

$ooLoop: ooUse((
  input: (
    select: false,
    checkbox: false,
    radio: false,
  )
));

@include ooCreate();
`, 'scss', true)}

<hr>
<h2 id="mixin">Use of mixin</h2>
<p>Instead of using the autobuild of <code>ooCreate()</code>, you can include one by one the desired elements from Loop framework.</p>
<p>In any case, and before doing so, <strong>the instatation of $ooLoop is necessary</strong> and will be done via <code>ooInit()</code>.
That will also give you the opportunity to set some global settings by passing a config map.</p>

<div class="section mt-30 mb-15">
  <h3 class="h4 font-code">ooInit(<span class="color-primary">$config</span>:<span class="color-secondary">null</span>)</h3>
  <p><em class="text-uppercase text-small">Mixin</em> - Instantiate <a href="docs/config" title="Loop Map">$ooLoop</a> config.</p>
  <ul>
    <li><strong>$config</strong> <em class="font-monospace">(map) <span class="color-secondary">Optional</span></em>
    <br>Set of rules that will be merged into the default Loop config</li>
  </ul>
</div>

{@html highlight(`@import '~loop/scss';

@include ooInit((
  palette: (
    'primary': #0ea7d6,
    'danger': #b70d0d,
  ),
));
`, 'scss', true)}

<h3 class="mt-45">Single includes</h3>
<p>Include what you want to use in your project. Keep the default style for each element or customize them by passing new parameters.</p>

<div class="section mt-30">
  <h4 class="font-code">Normalize()</h4>
  <p><em class="text-uppercase text-small">Mixin</em> - Format your css to act the same accross all browers. This is <strong>highly recommended</strong>.</p>
</div>

<div class="section">
  <Row>
    <Col>
      <h4 class="font-code">Base(<span class="color-primary">$config</span>:<span class="color-secondary">null</span>)</h4>
      <p><em class="text-uppercase text-small">Mixin</em> - Set your base css.</p>
      <ul>
        <li><strong>$config</strong> <em class="font-monospace">(map) <span class="color-secondary">Optional</span></em>
        <br>Set the properties <code>root</code> and <code>body</code>.</li>
      </ul>
    </Col>
    <Col prop="s12 fit@sm self-valign-middle">
      <a data-oo-button href="docs/base" title="Base documentation">Learn more</a>
    </Col>
  </Row>
</div>

<div class="section">
  <Row>
    <Col>
      <h4 class="font-code">Headings(<span class="color-primary">$config</span>:<span class="color-secondary">null</span>)</h4>
      <p><em class="text-uppercase text-small">Mixin</em> - Set your css headings.</p>
      <ul>
        <li><strong>$config</strong> <em class="font-monospace">(map) <span class="color-secondary">Optional</span></em>
        <br>Set the properties <code>headings</code>.</li>
      </ul>
    </Col>
    <Col prop="s12 fit@sm self-valign-middle">
      <a data-oo-button href="docs/headings" title="Headings documentation">Learn more</a>
    </Col>
  </Row>
</div>

<div class="section">
  <Row>
    <Col>
      <h4 class="font-code">Type(<span class="color-primary">$config</span>:<span class="color-secondary">null</span>)</h4>
      <p><em class="text-uppercase text-small">Mixin</em> - Set your base typography.</p>
      <ul>
        <li><strong>$config</strong> <em class="font-monospace">(map) <span class="color-secondary">Optional</span></em>
        <br>Set the properties <code>paragraph</code> <code>anchor</code> <code>list</code> <code>hr</code>.</li>
      </ul>
    </Col>
    <Col prop="s12 fit@sm self-valign-middle">
      <a data-oo-button href="docs/type" title="Type documentation">Learn more</a>
    </Col>
  </Row>
</div>

<div class="section">
  <Row>
    <Col>
      <h4 class="font-code">Column(<span class="color-primary">$config</span>:<span class="color-secondary">null</span>)</h4>
      <p><em class="text-uppercase text-small">Mixin</em> - Include the column component.</p>
      <ul>
        <li><strong>$config</strong> <em class="font-monospace">(map) <span class="color-secondary">Optional</span></em>
        <br>Set the map properties of <code>column</code>.</li>
      </ul>
    </Col>
    <Col prop="s12 fit@sm self-valign-middle">
      <a data-oo-button href="docs/column" title="Column documentation">Learn more</a>
    </Col>
  </Row>
</div>

<div class="section">
  <Row>
    <Col>
      <h4 class="font-code">Template(<span class="color-primary">$config</span>:<span class="color-secondary">null</span>)</h4>
      <p><em class="text-uppercase text-small">Mixin</em> - Include the template component.</p>
      <ul>
        <li><strong>$config</strong> <em class="font-monospace">(map) <span class="color-secondary">Optional</span></em>
        <br>Set the map properties of <code>template</code>.</li>
      </ul>
    </Col>
    <Col prop="s12 fit@sm self-valign-middle">
      <a data-oo-button href="docs/template" title="Template documentation">Learn more</a>
    </Col>
  </Row>
</div>

<div class="section">
  <Row>
    <Col>
      <h4 class="font-code">Button(<span class="color-primary">$config</span>:<span class="color-secondary">null</span>)</h4>
      <p><em class="text-uppercase text-small">Mixin</em> - Include the button component.</p>
      <ul>
        <li><strong>$config</strong> <em class="font-monospace">(map) <span class="color-secondary">Optional</span></em>
        <br>Set the map properties of <code>button</code>.</li>
      </ul>
    </Col>
    <Col prop="s12 fit@sm self-valign-middle">
      <a data-oo-button href="docs/button" title="Button documentation">Learn more</a>
    </Col>
  </Row>
</div>

<div class="section">
  <Row>
    <Col>
      <h4 class="font-code">Label(<span class="color-primary">$config</span>:<span class="color-secondary">null</span>)</h4>
      <p><em class="text-uppercase text-small">Mixin</em> - Include css for input label.</p>
      <ul>
        <li><strong>$config</strong> <em class="font-monospace">(map) <span class="color-secondary">Optional</span></em>
        <br>Set css properties of <code>label</code>.</li>
      </ul>
    </Col>
    <Col prop="s12 fit@sm self-valign-middle">
      <a data-oo-button href="docs/form#label" title="Label documentation">Learn more</a>
    </Col>
  </Row>
</div>

<div class="section">
  <Row>
    <Col>
      <h4 class="font-code">TextField(<span class="color-primary">$config</span>:<span class="color-secondary">null</span>)</h4>
      <p><em class="text-uppercase text-small">Mixin</em> - Include the input component.</p>
      <ul>
        <li><strong>$config</strong> <em class="font-monospace">(map) <span class="color-secondary">Optional</span></em>
        <br>Set the map properties of <code>input</code>.</li>
      </ul>
    </Col>
    <Col prop="s12 fit@sm self-valign-middle">
      <a data-oo-button href="docs/form#input" title="Input documentation">Learn more</a>
    </Col>
  </Row>
</div>

<div class="section">
  <Row>
    <Col>
      <h4 class="font-code">SelectField(<span class="color-primary">$config</span>:<span class="color-secondary">null</span>)</h4>
      <p><em class="text-uppercase text-small">Mixin</em> - Include the select component.</p>
      <ul>
        <li><strong>$config</strong> <em class="font-monospace">(map) <span class="color-secondary">Optional</span></em>
        <br>Set the map properties of <code>select</code>.</li>
      </ul>
    </Col>
    <Col prop="s12 fit@sm self-valign-middle">
      <a data-oo-button href="docs/form#select" title="Select documentation">Learn more</a>
    </Col>
  </Row>
</div>

<div class="section">
  <Row>
    <Col>
      <h4 class="font-code">Checkbox(<span class="color-primary">$config</span>:<span class="color-secondary">null</span>)</h4>
      <p><em class="text-uppercase text-small">Mixin</em> - Include the checkbox component.</p>
      <ul>
        <li><strong>$config</strong> <em class="font-monospace">(map) <span class="color-secondary">Optional</span></em>
        <br>Set the map properties of <code>checkbox</code>.</li>
      </ul>
    </Col>
    <Col prop="s12 fit@sm self-valign-middle">
      <a data-oo-button href="docs/form#checkbox" title="Checkbox documentation">Learn more</a>
    </Col>
  </Row>
</div>

<div class="section">
  <Row>
    <Col>
      <h4 class="font-code">Radio(<span class="color-primary">$config</span>:<span class="color-secondary">null</span>)</h4>
      <p><em class="text-uppercase text-small">Mixin</em> - Include the radio component.</p>
      <ul>
        <li><strong>$config</strong> <em class="font-monospace">(map) <span class="color-secondary">Optional</span></em>
        <br>Set the map properties of <code>radio</code>.</li>
      </ul>
    </Col>
    <Col prop="s12 fit@sm self-valign-middle">
      <a data-oo-button href="docs/form#radio" title="Radio documentation">Learn more</a>
    </Col>
  </Row>
</div>

<div class="section">
  <Row>
    <Col>
      <h4 class="font-code">Toggle(<span class="color-primary">$config</span>:<span class="color-secondary">null</span>)</h4>
      <p><em class="text-uppercase text-small">Mixin</em> - Include the toggle component.</p>
      <ul>
        <li><strong>$config</strong> <em class="font-monospace">(map) <span class="color-secondary">Optional</span></em>
        <br>Set the map properties of <code>toggle</code>.</li>
      </ul>
    </Col>
    <Col prop="s12 fit@sm self-valign-middle">
      <a data-oo-button href="docs/form#radio" title="Toggle documentation">Learn more</a>
    </Col>
  </Row>
</div>

<div class="section">
  <Row>
    <Col>
      <h4 class="font-code">Container(<span class="color-primary">$config</span>:<span class="color-secondary">null</span>)</h4>
      <p><em class="text-uppercase text-small">Mixin</em> - Include the container utility.</p>
      <ul>
        <li><strong>$config</strong> <em class="font-monospace">(map) <span class="color-secondary">Optional</span></em>
        <br>Set the map properties of <code>container</code>.</li>
      </ul>
    </Col>
    <Col prop="s12 fit@sm self-valign-middle">
      <a data-oo-button href="docs/container" title="Container documentation">Learn more</a>
    </Col>
  </Row>
</div>

<div class="section">
  <Row>
    <Col>
      <h4 class="font-code">Visibility(<span class="color-primary">$config</span>:<span class="color-secondary">null</span>)</h4>
      <p><em class="text-uppercase text-small">Mixin</em> - Include the visiblity utility.</p>
      <ul>
        <li><strong>$config</strong> <em class="font-monospace">(map) <span class="color-secondary">Optional</span></em>
        <br>Set the map properties of <code>visibility</code>.</li>
      </ul>
    </Col>
    <Col prop="s12 fit@sm self-valign-middle">
      <a data-oo-button href="docs/visibility" title="Visibility documentation">Learn more</a>
    </Col>
  </Row>
</div>
