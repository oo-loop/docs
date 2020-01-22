<script>
  import HeadTitle from '../../components/HeadTitle.svelte'
  import Row from '../../components/Loop/Row.svelte';
  import Col from '../../components/Loop/Col.svelte';
  import highlight from '../../utils/highlight.js'
</script>

<style lang="scss">
.ground {
  color: oo('body.props.color');
  text-align: left;
}
</style>

<HeadTitle title="Form component"/>

<h1>Form</h1>
<p class="text-large">Component for form elements<br>
<code>oo-input</code><code>oo-select</code><code>oo-checkbox</code><code>oo-radio</code><code>oo-toggle</code></p>

<ul class="text-small">
  <li><a href="docs/form#input" title="Input fields">Input fields</a></li>
  <li><a href="docs/form#select" title="Select">Select</a></li>
  <li><a href="docs/form#checkbox" title="Checkbox">Checkbox</a></li>
  <li><a href="docs/form#radio" title="Radio button">Radio button</a></li>
  <li><a href="docs/form#toggle" title="Toggle button">Toggle</a></li>
</ul>

<p>The style of each form element is set through the <a href="docs/config#props" title="Props attribute"><em>props</em></a> & <a href="docs/config#states" title="States attribute"><em>states</em></a> properties giving you control on the components' look.</p>

<hr>
<h2 id="input"><a href="docs/form#input">#</a> Input fields</h2>
<p>Use <code>oo-input</code> for any textfield elements.</p>
<p class="info">Loop config <strong>includes <em>input.textfield</em> by default</strong>. In manual mode add the mixins <strong>Label()</strong> and <strong>TextField()</strong></p>

{@html highlight(
`//default config
label: (
  props: (
    marginBottom: rem(3),
    display: inline-block,
    fontWeight: 500,
    lineHeight: 1.5
  )
),
input: (
  props: (
    padding: .5em .625em,
    display: block,
    width: 100%,
    minHeight: 2.5em,
    color: #4d4d4d,
    fontSize: 1rem,
    lineHeight: 1.15,
    backgroundColor: #fff,
    border: 1px solid #d6d6d6,
    borderRadius: .2em,
  ),
  states: (
    focus: (
      outline: none,
      boxShadow: 0 0 8px 0 rgba(#aaa, .25),
    ),
  ),
),
`, 'scss')}

{@html highlight(
`<label for="form-input">Input</label>
<input oo-input id="form-input" class="mb-15" type="text">

<label for="form-textarea">Textarea</label>
<textarea oo-input id="form-textarea" rows="3"></textarea>
`, 'html')}
<div class="ground">
  <label for="form-input">Input</label>
  <input data-oo-input id="form-input" class="mb-15" type="text">

  <label for="form-textarea">Textarea</label>
  <textarea data-oo-input id="form-textarea" rows="3"></textarea>
</div>

<h3>Variants</h3>
<p>Change the size, the shape, the appearance of the input via the <em>variants</em> property by passing a list of css rules attached to a name. <code>oo-input="<i>variantName</i>"</code>.</p>
{@html highlight(
`//default config
input: (
  props: (...),
  states: (...),
  variants: (), // none
),
`, 'scss')}

{@html highlight(
`$ooLoop: ooAdd('input.variants', (
  'danger': (
    border-color: #ca7878,
    background-color: #f9e4e4,
  ),
  'large': (
    padding: 1rem 1.25rem,
  ),
  'rounded': (
    border-radius: 50em,
  )
));`, 'scss')}

{@html highlight(
`<label for="form-input-rounded">Input rounded large</label>
<input oo-input="rounded large" class="mb-15" id="form-input-rounded" type="text">

<label for="form-textarea-danger">Textarea danger</label>
<textarea oo-input="danger" id="form-textarea-danger" rows="4"></textarea>
`, 'html')}
<div class="ground">
  <label for="form-input-rouded">Input rouded large</label>
  <input data-oo-input="rounded large" class="mb-15" id="form-input-rouded" type="text">

  <label for="form-textarea-danger">Textarea danger</label>
  <textarea data-oo-input="danger" id="form-textarea-danger" rows="4"></textarea>
</div>

<hr>
<h2 id="select"><a href="docs/form#select">#</a> Select</h2>
<p>Use <code>oo-select</code> on a parent element having <code>{`<select>`}</code> as a child.</p>
<p class="info">Loop config <strong>includes <em>input.select</em> by default</strong>. In manual mode add the mixin <strong>SelectField()</strong></p>

{@html highlight(
`//default config
select: (
  props: this('input.props'), // inherits from input
  states: this('input.states'), // inherits from input
  selector: ( // selector options are not PROPS!
    size: 10px,
    weight: 2px,
    color: this('select.props.color'),
    bgcolor: this('select.props.backgroundColor'),
    border: this('select.props.border'),
  ),
  variants: this('input.variants'), // inherits from input
),
`, 'scss')}

{@html highlight(
`<label for="form-select">Select</label>
<div oo-select class="mb-15">
  <select id="form-select">
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </select>
</div>

<label for="form-rounded">Select rounded danger large</label>
<div oo-select="rounded danger large">
  <select id="form-rounded">
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </select>
</div>
`, 'html')}
<div class="ground">
  <label for="form-select">Select</label>
  <div data-oo-select class="mb-15">
    <select id="form-select">
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </select>
  </div>
  <label for="form-rounded">Select rounded danger large</label>
  <div data-oo-select="rounded danger large">
    <select id="form-rounded">
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </select>
  </div>
</div>

<h3>Selector</h3>
<p>The selector can be modified from the property <em>selector</em> or altered through a variant having <code>selector</code> data.</p>
{@html highlight(
`$ooLoop: ooAdd('select.variants', (
  'secondary': (
    borderColor: #222,
    selector: (
      color: #fff,
      bgcolor: this('select.variants.dark.borderColor'),
      border: this('select.variants.dark.borderColor'),
    )
  ),
));`, 'scss')}
{@html highlight(
`<label for="form-select-secondary">Select</label>
<div oo-select="secondary">
  <select id="form-select-secondary">
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </select>
</div>
`, 'html')}
<div class="ground">
  <label for="form-select-secondary">Select secondary</label>
  <div data-oo-select="secondary">
    <select id="form-select-secondary">
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </select>
  </div>
</div>