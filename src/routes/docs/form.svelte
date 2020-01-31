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
  <li><a href="docs/form#utilities" title="Utilities as modifers">Utilities as Modifiers</a></li>
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
  caret: ( // caret options are not PROPS!
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

<h3>Caret</h3>
<p>The caret can be modified from the property <em>caret</em> or altered through a variant having <code>caret</code> data.
<br><strong>Caret options are not CSS props!</strong>.</p>
{@html highlight(
`$ooLoop: ooAdd('select.variants', (
  'secondary': (
    borderColor: #222,
    caret: (
      color: #fff,
      bgcolor: this('select.variants.secondary.borderColor'),
      border: this('select.variants.secondary.borderColor'),
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

<hr>
<h2 id="checkbox"><a href="docs/form#checkbox">#</a> Checkbox</h2>
<p>Use <code>oo-checkbox</code> on an <em>input checkbox element </em><strong>followed by</strong> a <em>label element</em> targetting that checkbox.</p>
<p class="info">Loop config <strong>includes <em>input.checkbox</em> by default</strong>. In manual mode add the mixin <strong>Checkbox()</strong></p>

{@html highlight(
`//default config
checkbox: (
  props: (
    backgroundColor: #fff,
    border: 1px solid #d6d6d6,
    borderRadius: .2em,
    transition: background-color 250ms ease-out,
  ),
  checked: (
    markColor: #fff,
    props: (
      backgroundColor: #4d4d4d,
      border: 1px solid #4d4d4d,
    )
  ),
  sizes: (
    default: rem(18),
  ),
  screens: (),
)
`, 'scss')}

{@html highlight(
`<input oo-checkbox id="checkbox-a" type="checkbox" value="a">
<label for="checkbox-a">Checkbox A</label>

<input oo-checkbox id="checkbox-b" type="checkbox" value="b">
<label for="checkbox-b">Checkbox B</label>
`, 'html')}

<div class="ground">
  <input data-oo-checkbox id="checkbox-a" type="checkbox" value="a">
  <label for="checkbox-a">Checkbox A</label>

  <input data-oo-checkbox id="checkbox-b" type="checkbox" value="b">
  <label for="checkbox-b">Checkbox B</label>
</div>
<p>Set inline checkboxes with <code>oo-checkbox="inline"</code> </p>
{@html highlight(
`<input oo-checkbox="inline" id="checkbox-inline-a" type="checkbox" value="a">
<label for="checkbox-inline-a">Inline A</label>

<input oo-checkbox="inline" id="checkbox-inline-b" type="checkbox" value="b">
<label for="checkbox-inline-b">Inline B</label>
`, 'html')}

<div class="ground">
  <input data-oo-checkbox="inline" id="checkbox-inline-a" type="checkbox" value="a">
  <label for="checkbox-inline-a">Inline A</label>

  <input data-oo-checkbox="inline" id="checkbox-inline-b" type="checkbox" value="b">
  <label for="checkbox-inline-b">Inline B</label>
</div>

<h3>Checkbox Sizes</h3>
<p>Add more options to the property <em>sizes</em></p>
{@html highlight(
`$ooLoop: ooAdd('checkbox.sizes', (
  'medium': 1.5rem,
  'large': 2rem,
));`, 'scss')}

{@html highlight(
`<input oo-checkbox="medium " id="checkbox-medium-a" type="checkbox" value="a">
<label for="checkbox-medium-a">Checkbox Medium A</label>

<input oo-checkbox="large " id="checkbox-large-b" type="checkbox" value="b">
<label for="checkbox-large-b">Checkbox Large B</label>
`, 'html')}
<div class="ground">
  <input data-oo-checkbox="medium " id="checkbox-medium-a" type="checkbox" value="a">
  <label for="checkbox-medium-a">Checkbox Medium A</label>
  <div class="hr mt-15 mb-15"></div>
  <input data-oo-checkbox="large " id="checkbox-large-b" type="checkbox" value="b">
  <label for="checkbox-large-b">Checkbox Large B</label> 
</div>

<h3>Responsive Checkbox</h3>
<p>Pass the breakpoint screens you wish to use for the checkbox and create variants such as <code>oo-checkbox="<i>sizeName</i>@<i>screenName</i>"</code></p>
{@html highlight(
`$ooLoop: ooSet('checkbox.screens', (sm, md));
// creating default@sm default@md medium@sm medium@md large@sm large@md`, 'scss')}

{@html highlight(
`<input oo-checkbox="large medium@sm default@md" id="checkbox-responsive" type="checkbox" value="">
<label for="checkbox-responsive">Responsive Checkbox</label>
`, 'html')}

<div class="ground">
  <input data-oo-checkbox="large medium@sm default@md" id="checkbox-responsive" type="checkbox" value="">
  <label for="checkbox-responsive">Responsive Checkbox</label>
</div>

<hr>
<h2 id="radio"><a href="docs/form#radio">#</a> Radio</h2>
<p>Use <code>oo-radio</code> on an <em>input radio element </em><strong>followed by</strong> a <em>label element</em> targetting that radio.</p>
<p class="info">Loop config <strong>includes <em>input.radio</em> by default</strong>. In manual mode add the mixin <strong>Radio()</strong></p>

{@html highlight(
`//default config
radio: (
  props: (
    backgroundColor: #fff,
    border: 1px solid #d6d6d6,
  ),
  checked: (
    markColor: #fff,
    props: (
      backgroundColor: #4d4d4d,
      borderColor: #4d4d4d,
      transition: background-color 250ms ease-out,
    )
  ),
  sizes: (
    default: rem(18),
  ),
  screens: (),
),
`, 'scss')}

{@html highlight(
`<input oo-radio id="radio-a" name="radio" type="radio" value="a">
<label for="radio-a">radio A</label>

<input oo-radio id="radio-b" name="radio" type="radio" value="b">
<label for="radio-b">radio B</label>
`, 'html')}

<div class="ground">
  <input data-oo-radio id="radio-a" name="radio" type="radio" value="a">
  <label for="radio-a">Radio A</label>

  <input data-oo-radio id="radio-b" name="radio" type="radio" value="b">
  <label for="radio-b">Radio B</label>
</div>
<p>Set inline radios with <code>oo-radio="inline"</code> </p>
{@html highlight(
`<input oo-radio="inline" id="radio-inline-a" name="radio-inline" type="radio" value="a">
<label for="radio-inline-a">Inline A</label>

<input oo-radio="inline" id="radio-inline-b" name="radio-inline" type="radio" value="b">
<label for="radio-inline-b">Inline B</label>
`, 'html')}

<div class="ground">
  <input data-oo-radio="inline" id="radio-inline-a" name="radio-inline" type="radio" value="a">
  <label for="radio-inline-a">Inline A</label>

  <input data-oo-radio="inline" id="radio-inline-b" name="radio-inline" type="radio" value="b">
  <label for="radio-inline-b">Inline B</label>
</div>

<h3>Radio Sizes</h3>
<p>Add more options to the property <em>sizes</em></p>
{@html highlight(
`$ooLoop: ooAdd('radio.sizes', (
  'large': 2rem,
));`, 'scss')}

{@html highlight(
`<input oo-radio="large" id="radio-large-a" type="radio" value="a">
<label for="radio-large-a">radio Large A</label>
`, 'html')}
<div class="ground">
  <input data-oo-radio="large" id="radio-large-a" type="radio" value="a">
  <label for="radio-large-a">Radio Large A</label>
</div>

<h3>Responsive Radio</h3>
<p>Pass the breakpoint screens you wish to use for the radio and create variants such as <code>oo-radio="<i>sizeName</i>@<i>screenName</i>"</code></p>
{@html highlight(
`$ooLoop: ooSet('radio.screens', (md));
// creating default@md large@md`, 'scss')}

{@html highlight(
`<input oo-radio="large default@md" id="radio-responsive" type="radio" value="">
<label for="radio-responsive">Responsive radio</label>
`, 'html')}

<div class="ground">
  <input data-oo-radio="large default@md" id="radio-responsive" type="radio" value="">
  <label for="radio-responsive">Responsive Radio</label>
</div>


<hr>
<h2 id="toggle"><a href="docs/form#toggle">#</a> Toggle</h2>
<p>Use <code>oo-toggle</code> on an <em>input checkbox element </em><strong>followed by</strong> a <em>label element</em> targetting that checkbox.</p>
<p class="info">Loop config <strong>does <span class="color-primary">not</span> includes <em>input.toggle</em> by default</strong>. In manual mode add the mixin <strong>Toggle()</strong></p>

{@html highlight(
`//default config
toggle: (
  props: (
    border: 1px solid #d6d6d6,
    borderRadius: 50em,
    backgroundColor: #d6d6d6,
    transition: (background-color 300ms ease-in-out, border-color 300ms ease-in-out),
  ),
  toggler: ( // Props 
    borderRadius: 50%,
    backgroundColor: #fff,
    boxShadow: 1px 1px 2px 0 rgba(#4d4d4d, 0.3),
    transition: transform 300ms ease-out,
  ),
  checked: (
    props: (
      borderColor: #4d4d4d,
      backgroundColor: this('toggle.checked.props.borderColor'),
    )
  ),
  sizes: (
    default: 1.5rem,
  )
),
`, 'scss')}

{@html highlight(
`<input oo-toggle id="toggle-a" type="checkbox" value="a">
<label for="toggle-a">Toggle A</label>
`, 'html')}

<div class="ground">
  <input data-oo-toggle id="toggle-a" type="checkbox" value="a">
  <label for="toggle-a">Toggle A</label>
</div>

<h3>Toggle Sizes</h3>
<p>Add more options to the property <em>sizes</em></p>
{@html highlight(
`$ooLoop: ooAdd('toggle.sizes', (
  'large': 2rem,
));`, 'scss')}

{@html highlight(
`<input oo-toggle="large" id="toggle-large-a" type="checkbox" value="a">
<label for="toggle-large-a">Toggle Large A</label>
`, 'html')}
<div class="ground">
  <input data-oo-toggle="large" id="toggle-large-a" type="checkbox" value="a">
  <label for="toggle-large-a">Toggle Large A</label>
</div>

<hr/>
<h2 id="utilities"><a href="docs/form#utilities">#</a> Utilities as modifiers</h2>
<p>Text or color utilities can help you alter the size or the appearance of your input elements depending of the situation.</p>

<div class="ground mb-0">
  <p class="mt-0"><strong>Example of form with required elements throwing an error<br><em>(use of border utility)</em></strong></p>
  <label for="input-error">Text input with error</label>
  <input class="border-danger" data-oo-input id="input-error" type="text">
  <small class="color-danger">Input is required</small>

  <br>
  <label for="select-error" class="mt-15">Select with error</label>
  <div class="border-danger" data-oo-select>
    <select id="select-error">
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </select>
  </div>
  <small class="color-danger">Select is required</small>

  <br>
  <input class="border-danger" data-oo-checkbox id="checkbox-error" type="checkbox">
  <label for="checkbox-error" class="mt-15">checkbox with error</label>
  <small class="color-danger">Checkbox is required</small>

  <br>
  <input class="border-danger" data-oo-radio id="radio-error" type="radio">
  <label for="radio-error" class="mt-15">Radio with error</label>
  <small class="color-danger">Radio is required</small>
</div>
{@html highlight(
`<p><strong>Example of form with required elements throwing an error
<br><em>(use of border utility)</em></strong></p>

<label for="input-error">Text input with error</label>
<input class="border-danger" oo-input id="input-error" type="text">
<small class="color-danger">Input is required</small>

<br>
<label for="select-error" class="mt-15">Select with error</label>
<div class="border-danger" oo-select>
  <select id="select-error">
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </select>
</div>
<small class="color-danger">Select is required</small>

<br>
<input class="border-danger" oo-checkbox id="checkbox-error" type="checkbox">
<label for="checkbox-error" class="mt-15">checkbox with error</label>
<small class="color-danger">Checkbox is required</small>

<br>
<input class="border-danger" oo-radio id="radio-error" type="radio">
<label for="radio-error" class="mt-15">Radio with error</label>
<small class="color-danger">Radio is required</small>
`, 'html', 'mt-5')}