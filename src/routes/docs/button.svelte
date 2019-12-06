<script>
  import HeadTitle from '../../components/HeadTitle.svelte'
  import Row from '../../components/Loop/Row.svelte';
  import Col from '../../components/Loop/Col.svelte';
  import highlight from '../../utils/highlight.js'
</script>

<style lang="scss">

</style>

<HeadTitle title="Button"/>

<h1>Button</h1>
<p class="text-large">Modular component and 100% customizable to fit your needs<br>
<code class="ml-0">oo-button</code></p>

<ul>
  <li><a href="docs/button@colors" title="Colors">Colors</a></li>
  <li><a href="docs/button@colors" title="Colors">Variants</a></li>
  <li><a href="docs/button@colors" title="Colors">Outline</a></li>
</ul>

<p>The base style of the button is set through the <a href="docs/config#props" title="Props attribute"><em>props</em></a> & <a href="docs/config#states" title="States attribute"><em>states</em></a> properties giving you complete control on the appearance to make it the way you like.</p>

{@html highlight(
`//default config
button: (
  props: (
    padding: .438em 1.2em,
    fontSize: rem(14),
    fontWeight: bold,
    lineHeight: 1.5,
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
  <Col>{@html highlight(
`<!-- basic button -->
<button oo-button>Button</button>
`, 'html', 'mt-0 mb-0')}</Col>
  <Col>
    <div class="ground mb-0">
      <button data-oo-button>Button</button>
    </div>
  </Col>
</Row>

<h2 class="mt-45" id="colors"><a href="docs/button@colors" title="Colors">#</a> Colors</h2>
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
{@html highlight(
`<button oo-button>Base</button>
<a oo-button="primary" href="#">Primary</a>
<input oo-button="secondary" type="button" value="Secondary">
`, 'html')}
<div class="ground">
  <button data-oo-button>Base</button>
  <a data-oo-button="primary" href="docs/button#colors">Primary</a>
  <input data-oo-button="secondary" type="button" value="Secondary">
</div>

<p class="info">While settings <strong>custom colors</strong>, Loop will <strong>automatically determine the color of the text to be constrated </strong>from the background color.</p>
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
{@html highlight(
`<button oo-button="primary outline">Success</button>
<button oo-button="success outline">Success</button>
<button oo-button="nectarine outline">Nectarine</button>
<button oo-button="yellow outline">Yellow</button>
<button oo-button="salmon outline">Salmon</button>
<button oo-button="purple outline">Purple</button>
<button oo-button="green-sea outline">Green sea</button>
`, 'html')}

<div class="ground">
  <button data-oo-button="primary outline">Primary</button>
  <button data-oo-button="success outline">Success</button>
  <button data-oo-button="nectarine outline">Nectarine</button>
  <button data-oo-button="yellow outline">Yellow</button>
  <button data-oo-button="salmon outline">Salmon</button>
  <button data-oo-button="purple outline">Purple</button>
  <button data-oo-button="green-sea outline">Green sea</button>
</div>