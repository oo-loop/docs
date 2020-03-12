<script>
  import HeadTitle from '@/components/HeadTitle.svelte'
  import Html5Toggler from '@/components/Html5Toggler.svelte'
  import Row from '@/components/Loop/Row.svelte';
  import Col from '@/components/Loop/Col.svelte';
  import highlight from '@/utils/highlight.js'
</script>

<style lang="scss">
  .ground { text-align: center; }
</style>

<HeadTitle title="Button component"/>

<h1>Button</h1>
<p class="font-large">Modular component and 100% customizable to fit your needs<br>
<code class="ml-0">oo-button</code></p>

<ul>
  <li><a href="docs/components/button#colors" title="Button colors">Button Colors</a></li>
  <li><a href="docs/components/button#variants" title="Button variants">Button Variants</a></li>
  <li><a href="docs/components/button#sizes" title="Button sizes">Button Sizes</a></li>
</ul>

<p>The base style of the button is set through the <a href="docs/config#props" title="Props attribute"><em>props</em></a> & <a href="docs/config#states" title="States attribute"><em>states</em></a> properties giving you complete control on the appearance to make it the way you like.</p>

{@html highlight(
`//default config
button: (
  props: (
    padding: .438em 1.2em,
    fontSize: rem(14),
    fontWeight: bold,
    lineHeight: 1.45,
    color: #333,
    backgroundColor: #fff,
    border: 1px solid #cecece,
    borderRadius: .2em,
  ),
  states: (
    hover: (
      color: this('button.props.color'),
      backgroundColor: ooDarken(this('button.props.backgroundColor'), 10%),
    ),
    focus: this('button.states.hover'),
    active: (
      backgroundColor: ooDarken(this('button.props.backgroundColor'), 12%),
      boxShadow: inset 1px 1px 1px 0 ooDarken(this('button.props.backgroundColor'), 25%),
      outline: none,
    ),
  ),
),
`, 'scss')}

<Row prop="stretch">
  <Col><Html5Toggler content={
`<!-- basic button -->
<button oo-button>Button</button>
`} class="mt-0 mb-0"/></Col>
  <Col>
    <div class="ground mb-0">
      <button data-oo-button>Button</button>
    </div>
  </Col>
</Row>

<h2 class="mt-45" id="colors"><a href="docs/components/button#colors" title="Colors">#</a> Colors</h2>
<p>Loop is giving you two colors by default, it's up to you to add more or less.<code>oo-button="<i>colorName</i>"</code></p>
{@html highlight(
`//default config
palette: (
  'primary': #0ea7d6,
  'secondary': #959595,
),
button: (
  props: (/* ... */),
  states: (/* ... */),
  colors: this('palette'),
  outline: false,
),
`, 'scss')}
<Html5Toggler content={
`<button oo-button>Base</button>
<a oo-button="primary" href="#">Primary</a>
<input oo-button="secondary" type="button" value="Secondary">
`} />
<div class="ground">
  <button data-oo-button>Base</button>
  <a data-oo-button="primary" href="docs/components/button#colors">Primary</a>
  <input data-oo-button="secondary" type="button" value="Secondary">
</div>

<p class="info">While settings <strong>custom colors</strong>, Loop will <strong>automatically determine the constrate</strong> of the text from the background color.</p>
{@html highlight(
`$ooLoop: ooAdd('button.colors', (
  'success': #8cc63f,
  'nectarine': #ffbe76,
  'yellow': #fffa65,
  'salmon': #ffb8b8,
  'purple': #8e44ad,
  'green-sea': #16a085,
));`, 'scss')}
<div class="ground">
  <button data-oo-button="success">Success</button>
  <button data-oo-button="nectarine">Nectarine</button>
  <button data-oo-button="yellow">Yellow</button>
  <button data-oo-button="salmon">Salmon</button>
  <button data-oo-button="purple">Purple</button>
  <button data-oo-button="green-sea">Green sea</button>
</div>

<h3>Outline</h3>
<p>An outline version of each color available. <code>oo-button="<i>colorName</i> outline"</code></p>
{@html highlight(`$ooLoop: ooSet('button.outline', true);`, 'scss')}
<Html5Toggler content={
`<button oo-button="primary outline">Success</button>
<button oo-button="success outline">Success</button>
<button oo-button="nectarine outline">Nectarine</button>
<button oo-button="yellow outline">Yellow</button>
<button oo-button="salmon outline">Salmon</button>
<button oo-button="purple outline">Purple</button>
<button oo-button="green-sea outline">Green sea</button>
`} />

<div class="ground">
  <button data-oo-button="primary outline">Primary</button>
  <button data-oo-button="success outline">Success</button>
  <button data-oo-button="nectarine outline">Nectarine</button>
  <button data-oo-button="yellow outline">Yellow</button>
  <button data-oo-button="salmon outline">Salmon</button>
  <button data-oo-button="purple outline">Purple</button>
  <button data-oo-button="green-sea outline">Green sea</button>
</div>
<hr>

<h2 id="variants"><a href="docs/components/button#variants" title="Button variants">#</a> Variants</h2>
<p>Change the size, the shape, the appearance of the button via the <em>variants</em> property by passing a list of css rules attached to a name. <code>oo-button="<i>variantName</i>"</code>.</p>
{@html highlight(
`//default config
button: (
  variants: (
    'full': ( // full available as default
      width: 100%,
    ),
  )
),
`, 'scss')}

{@html highlight(
`$ooLoop: ooAdd('button.variants', (
  'baggy': (
    padding: 1.2em 2em,
    text-transform: uppercase,
  ),
  'large': (
    font-size: 1.5rem,
  ),
  'tag': (
    padding: 0.1em 0.5em,
    font-weight: 500,
    border-radius: 50em,
  ),
));`, 'scss')}

<Html5Toggler content={
`<button oo-button="primary full">Primary full</button>
<button oo-button="primary large">Primary large</button>
<button oo-button="secondary tag">Secondary tag</button>
<button oo-button="secondary baggy outline">Secondary baggy outline</button>
`} />
<div class="ground">
  <button data-oo-button="primary full" class="mb-10">Primary full</button>
  <button data-oo-button="primary large" class="mb-10">Primary large</button><br>
  <button data-oo-button="secondary tag" class="mb-10">Secondary tag</button><br>
  <button data-oo-button="secondary baggy outline">Secondary baggy outline</button>
</div>

<hr>
<h2 class="mt-45" id="sizes"><a href="docs/components/button#sizes" title="Sizes">#</a> Sizes</h2>
<p>While the size of the button can be modified from <a href="docs/components/button#variants" title="Button variants">variants</a>.
It is also possible to <strong>use text-utilites to quickly achieve some adjustments</strong>.</p>

<Html5Toggler content={
`<button oo-button="primary" class="font-tiny">Tiny</button>
<button oo-button="primary">Default</button>
<button oo-button="primary" class="font-medium">Medium</button>
<button oo-button="primary" class="font-large">Large</button>
<button oo-button="primary large">Variant large</button>
`} />
<div class="ground">
  <button data-oo-button="primary" class="font-tiny">Tiny</button>
  <button data-oo-button="primary">Default</button>
  <button data-oo-button="primary" class="font-medium">Medium</button>
  <button data-oo-button="primary" class="font-large">Large</button>
  <button data-oo-button="primary large">Variant large</button>
</div>