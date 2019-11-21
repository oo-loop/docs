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

<h3 class="mt-45">Update with ooCreate</h3>
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

<h3 class="mt-45">Update one property at the time</h3>
{@html highlight(
`@import '~loop/scss';

$ooLoop: ooPipe(
  _set('use.input.select', false),
  _set('use.input.checkbox', false),
  _set('use.input.radio', false)
);

@include ooCreate();
`, 'scss', true)}

<h3 class="mt-45">Update with ooUse()</h3>
<p>Pass a config map to <code class="inline">ooUse()</code> to only update the <em>use</em> property. <br>
This allows you to avoid going through <code class="inline">ooCreate()</code> gaining more readibility by not overloading the config there (depending on your preferences).</p>

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