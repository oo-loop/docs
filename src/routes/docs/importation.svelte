<script>
	import HeadTitle from '../../components/HeadTitle.svelte';
  import highlight from '../../utils/highlight.js';
</script>

<HeadTitle title="Importation"/>

<h1>Importation</h1>
<p>Loop is basing all its settings around the <a href="docs/config" title="Loop Map">config map</a> including the selection of the part of the framework. This makes the loop main file <strong>the only needed</strong> import.</p>

{@html highlight(`@import 'loop/scss'; // that's all`, 'scss', true)}

<h2 class="mt-30" id="adjust">Adjust to your needs</h2>
<p>Adjust your preferences from the framework by updating the <em>use</em> property of the config map.</p>

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
{@html highlight(
`@import '~loop/scss';

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
<h2 id="from-scratch">Start from scratch</h2>
<p>Instead of using the autobuild of <code>ooCreate()</code>, you can include one by one the desired element from Loop framework.</p>
<p>In any case, before doing so, <strong>the instatation of $ooLoop is necessary</strong> and will be done via <code>ooInit()</code>.
That will also give you the opportunity to set some global settings by passing a config map.</p>

<h3 class="h4 font-code mt-30">ooInit(<span class="color-primary">$config</span>:<span class="color-secondary">null</span>)</h3>
<p><em class="text-uppercase text-small">Mixin</em> - Instantiate <a href="docs/config" title="Loop Map">$ooLoop</a> config.</p>
<ul>
  <li><strong>$config</strong> <em class="font-monospace">(map) <span class="color-secondary">Optional</span></em>
  <br>Set of rules that will be merged into the default Loop config</li>
</ul>

{@html highlight(`@import '~loop/scss';

@include ooInit((
  palette: (
    'primary': #0ea7d6,
    'danger': #b70d0d,
  ),
));
`, 'scss', true)}

<p>Here is the list of single include:</p>
<ul>
  <li>@include Base;</li>
  <li>@include Headings;</li>
  <li>@include Type;</li>
  <li>@include Column;</li>
  <li>@include Template;</li>
  <li>@include Button;</li>
  <li>@include Label;</li>
  <li>@include TextField;</li>
  <li>@include SelectField;</li>
  <li>@include Checkbox;</li>
  <li>@include Radio;</li>
  <li>@include Toggle;</li>
  <li>@include Container;</li>
  <li>@include Visibility;</li>
</ul>