<script>
  import HeadTitle from '@/components/HeadTitle.svelte';
  import Pagination from '@/components/Pagination.svelte';
  import highlight from '@/utils/highlight.js';

  const title = 'HTML elements';
  const description = 'Set default styles and format css elements to act the same accross browsers.';
</script>

<HeadTitle {title} {description}/>

<h1>{title}</h1>
<p class="font-large">{description}</p>

<h2 id="base"><a href="docs/html-elements/#base">#</a> Base</h2>
<p>The Base is <strong>highly recommended</strong> as it sets global styling and renders html elements more consistently. It includes:</p>

<ul class="mb-30">
 <li><a href="https://necolas.github.io/normalize.css/" title="normalize" target="_blank">Normalize.css</a> (render all elements in line with modern standards)</li>
 <li><code>box-sizing: border-box;</code> (remove uneeded mathematics when setting sizes).</li>
 <li>Font smoothing (render to antialiasing for better readibilty)</li>
 <li>Global properties (set the body of your application)</li>
</ul>

<p class="info">Loop config <strong>includes <em>base</em> by default</strong>. In manual mode add the mixin <strong>Base()</strong></p>

<h3 class="mt-30"><em class="font-regular">body</em> Config</h3>
<ul>
  <li><code>props</code> CSS properties</li>
  <li><code>smoothing</code> Enable font smoothing</li>
</ul>

{@html highlight(
`body: (
  props: (
    font-family: (-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif),
    font-size: 1em, // 16px
    line-height: 1.375,
    color: #444,
  ),
  smoothing: true,
),
`, 'scss')}

<h4 class="mt-30">Update values</h4>
<p>Change the props value or add new ones at your own will.</p>

{@html highlight(
`$ooLoop: ooSet('body.props.color', #333); // update value
$ooLoop: ooSet('body.props.backgroundColor', #f8f8f8); // add new one

// or
$ooLoop: ooAdd('body.props', (
  background-color: #f8f8f8, //add new one
  color: #333, // will overwride current value
));

//or
$ooLoop: ooPipe(
  _set('body.props.color', #333),
  _add('body.props', (
    background-color: #f8f8f8,
  ))
);

// or
@include ooCreate((
  body: (
    props: (
      background-color: #f8f8f8,
      color: #333,
    )
  )
));

// or in Manual mode
@include Base((
  props: (
    background-color: #f8f8f8,
    color: #333,
  )
));
`, 'scss')}

{@html highlight(`/* generating */
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  font-size: 1em;
  line-height: 1.375;
  color: #333;
  background-color: #f8f8f8;
}
`, 'css')}

<p class="mt-30">Add only the properties you want to the body</p>
{@html highlight(`$ooLoop: ooSet('body.props', (
  font-family: Robotto,
  color: #333,
  background-color: #f8f8f8,
));`, 'scss')}

{@html highlight(`/* generating */
body {
  font-family: Robotto;
  color: #333;
  background-color: #f8f8f8;
}
`, 'css')}

<hr>

<h2 id="content"><a href="docs/html-elements/#content">#</a> Content</h2>
<p>Sets global content elements such as paragraph, anchor and list as well as the hr tag</p>
<p class="info">Loop config <strong>includes <em>content</em> by default</strong>. In manual mode add the mixin <strong>Content()</strong></p>

<h3 class="mt-30"><em class="font-regular">paragraph</em> Config</h3>
<ul>
  <li><code>props</code> CSS properties</li>
</ul>
{@html highlight(
`paragraph: (
  props: (
    margin-top: .5em,
    margin-bottom: 1.125em,
  )
)`, 'scss')}

<h3 class="mt-30"><em class="font-regular">anchor</em> Config</h3>
<ul>
  <li><code>props</code> CSS properties</li>
  <li><code>states</code> State element properties</li>
</ul>
{@html highlight(
`anchor: (
  props: (
    color: this('palette.primary'),
    text-decoration: none,
  ),
  states: (
    hover: (
      color: ooDarken(this('anchor.props.color'), 12%),
    ),
    focus: this('anchor.states.hover'),
  )
)`, 'scss')}

<h3 class="mt-30"><em class="font-regular">list</em> Config</h3>
<ul>
  <li><code>props</code> CSS properties</li>
</ul>
{@html highlight(
`list: (
  props: (
    margin-top: .5em,
    margin-bottom: 1.125em,
    padding-left: 1.1em,
  )
)`, 'scss')}

<h3 class="mt-30"><em class="font-regular">hr</em> Config</h3>
<ul>
  <li><code>props</code> CSS properties</li>
</ul>
{@html highlight(
`hr: (
  props:(
    margin: 1rem auto,
    border-bottom: 1px solid #cdcdcd,
  )
)`, 'scss')}

<hr>

<h2 id="headings"><a href="docs/html-elements/#headings">#</a> Headings</h2>
<p>Sets HTML headings from <code>{`<h1>`}</code> through <code>{`<h6>`}</code>. Unlike <a href="https://oo-loop.github.io/v0.4" title="Loop v0.4">Loop v0.4</a>, the font-size is relative to the default 100% and the <code>rem()</code> function is used to facilitate the conversion from pixel to rem unit.</p>
<div class="ground">
  <h1>H1 heading</h1>
  <h2>H2 heading</h2>
  <h3>H3 heading</h3>
  <h4>H4 heading</h4>
  <h5>H5 heading</h5>
  <h6>H6 heading</h6>
</div>
<p class="info">Loop config <strong>includes <em>headings</em> by default</strong>. In manual mode add the mixin <strong>Headings()</strong></p>

<h3 class="mt-30"><em class="font-regular">headings</em> Config</h3>
<ul>
  <li><code>props</code> CSS properties</li>
  <li><code>sizes</code> H1 to H6 sizes</li>
  <li><code>classes</code>List of heading that will be used as a class <i class="color-secondary">(optional)</i></li>
</ul>

{@html highlight(
`headings: (
  props: (
    margin-top: .67em,
    margin-bottom: .45em,
    line-height: 1.125,
  ),
  sizes: (
    h1: 2rem,    // equivalent to 32px
    h2: rem(26), // 26px will generate 1.625rem
    h3: rem(22), // 22px will generate 1.375rem
    h4: rem(18), // 18px will generate 1.125rem
    h5: 1rem,    // equivalent to 16px
    h6: rem(14), // 14px will generate 0.875rem
  ),
)`, 'scss')}

<h3 class="mt-45">Responsive headings</h3>
<p>The value of each size can contain a responsive map based on the name of the <code>breakpoints</code> from the Loop config. <code>rt</code> means the root value. Remember that Loop is using the mobile first approach (from root to small, medium, large screens)</p>
{@html highlight(
`$ooLoop: ooSet('headings.sizes', (
  h1: (
    rt: 2rem,   // root value
    md: 2.5rem, // md screen value
    lg: 3rem,   // lg screen value
  ),
  h2: (
    rt: rem(26), // root value
    sm: rem(28), // sm value
  ),
  h3: rem(22),
  h4: rem(18),
  h5: 1rem,
  h6: rem(14),
));
`, 'scss')}

{@html highlight(`/* will generate */
h1 {
  font-size: 2rem;
}
@media (min-width: 60em) {
  h1 { font-size: 2.5rem; }
}
@media (min-width: 80em) {
  h1 { font-size: 3rem; }
}

h2 {
  font-size: 1.625rem;
}
@media (min-width: 37.5em) {
  h2 { font-size: 1.75rem; }
}

h3 { font-size: 1.375rem; }
h4 { font-size: 1.125rem; }
h5 { font-size: 1rem; }
h6 { font-size: 0.875rem; }
`, 'css')}

<h3 class="mt-45">Headings classes</h3>
<p>List each heading you would like to use as an utility class by adding the property <code>classes</code> to the <code>headings</code> map.</p>

{@html highlight(
`$ooLoop: ooAdd('headings', (
  classes: ('h2', 'h3'), // creating .h2 & .h3
));
`, 'scss')}
{@html highlight(
`<h2 class="h3">A h2 heading with the look of an h3</h2>
<span class="h2">A text with the style of an h2</span>
`, 'html')}
<div class="ground">
  <h2 class="h3">A h2 heading with the look of an h3</h2>
  <span class="h2">A text with the style of an h2</span>
</div>

<Pagination
  prevHref="docs/importation/"
  prevTitle="Customize your Loop import"
  prevLabel="Use what you need"
  nextHref="docs/components/"
  nextLabel="Set Components" />
