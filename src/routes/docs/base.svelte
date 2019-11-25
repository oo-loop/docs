<script>
  import HeadTitle from '../../components/HeadTitle.svelte';
  import highlight from '../../utils/highlight.js';
</script>

<style>
  /* your styles go here */
</style>

<HeadTitle title="Base"/>

<h1>Base</h1>
<p class="text-large">Format css and set default styles for elements to act the same accross browsers.
This is <strong>highly recommended</strong> and is turned on by default.</p>

<ul class="mb-30">
 <li>Adjust <code>box-sizing</code> to all elements allowing padding and border in their total width and height (removing uneeded mathematics).</li>
 <li>Include <a href="https://necolas.github.io/normalize.css/" title="normalize" target="_blank">Normalize.css</a> (rendering all elements more consistently)</li>
 <li>Set main css properties to the body of your application</li>
 <li>Render better typography readibilty (for mac users)</li>
</ul>

{@html highlight(`// Default config in $ooLoop

$ooLoop: (
  base: (
    props: ( // body properties
      fontFamily: ('Helvetica Neue', 'Helvetica', 'Arial', sans-serif),
      fontSize: 1em, // 16px
      lineHeight: 1.375,
      color: #2c444c,
    ),
    smoothing: true,  // enable font smoothing
  ),
  ...
);`, 'scss')}

{@html highlight(`// Auto mode referring to use.base
$ooLoop: (
  use: (
    base: true,
  ),
  ...
);

// Manual mode
@include Base();
`, 'scss')}

<h3 class="mt-30">Update values</h3>
<p>Change the props value or add new ones at your own will.</p>

{@html highlight(
`$ooLoop: ooSet('base.props.color', #333); // update value
$ooLoop: ooSet('base.props.backgroundColor', #f8f8f8); // add new one

// or
$ooLoop: ooAdd('base.props', (
  backgroundColor: #f8f8f8, //add new one
  color: #333, // will overwrite current value
));

//or
$ooLoop: ooPipe(
  _set('base.props.color', #333),
  _add('base.props', (
    backgroundColor: #f8f8f8,
  ))
);

// or 
@include ooCreate((
  base: (
    props: (
      backgroundColor: #f8f8f8,
      color: #333,
    )
  )
));

// or in Manual mode
@include Base((
  props: (
    backgroundColor: #f8f8f8,
    color: #333,
  )
));
`, 'scss')}

{@html highlight(`/* will generate */
body {
  font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  font-size: 1em;
  line-height: 1.375;
  color: #333;
  background-color: #f8f8f8;
}
`, 'css', true)}

<p class="mt-30">Add only the properties you want to the body</p>
{@html highlight(`$ooLoop: ooSet('base.props', (
  fontFamily: Robotto,
  color: #333,
  backgroundColor: #f8f8f8,
));`, 'scss')}

{@html highlight(`/* will generate */
body {
  font-family: Robotto;
  color: #333;
  background-color: #f8f8f8;
}
`, 'css', true)}

<hr>

<h2 id="type">Type</h2>
<p class="text-large">Global text elements such as paragraph, anchor, list and hr</p>
<p>Here are the default settings if you wish to modify them</p>

{@html highlight(`// Default config in $ooLoop

$ooLoop: (
  paragraph: (
    props: (
      marginTop: .5em,
      marginBottom: 1.125em,
    )
  ),

  anchor: (
    props: (
      color: this('palette.primary'),
      textDecoration: none,
    ),
    states: (
      hover: (
        color: ooDarken(this('anchor.props.color'), 12%),
      ),
      focus: this('anchor.states.hover'),
    )
  ),

  list: (
    props: (
      marginTop: .5em,
      marginBottom: 1.125em,
      paddingLeft: 1.1em,
    ),
  ),

  hr: (
    props:(
      margin: 1rem auto,
      borderBottom: 1px solid #cdcdcd,
    )
  ),
  ...
);`, 'scss')}

{@html highlight(`// Auto mode
$ooLoop: (
  use: (
    type: true,
  ),
  ...
);

// Manual mode
@include Type();
`, 'scss')}

<hr>

<h2 id="headings">HTML Headings</h2>
<p class="text-large">Tags from h1 through h6</p>
<p>Unlike <a href="v04" title="Loop v0.4">Loop v0.4</a>, the font-size is relative to the default 100% and the <code>rem()</code> function is used to facilate the conversion from pixel to rem unit.</p>
<h3 class="h4 font-code">headings</h3>
<ul>
  <li><code>props</code> CSS properties</li>
  <li><code>sizes</code> H1 to H6 sizes</li>
  <li><code>classes</code> List of heading classes <i class="color-secondary">(null by default)</i></li>
</ul>

{@html highlight(
`headings: (
  props: (
    marginTop: .67em,
    marginBottom: .45em,
    lineHeight: 1.125,
  ),
  sizes: (
    h1: 2rem,    // equivalent to 32px
    h2: rem(26), // from 26px will generate 1.625rem
    h3: rem(22), // from 22px will generate 1.375rem
    h4: rem(18), // from 18px will generate 1.125rem
    h5: 1rem,    // equivalent to 16px
    h6: rem(14), // from 14px generate 0.875rem
  ),
)`, 'scss')}
<section class="section color-secondary">
  <h1>H1 heading</h1>
  <h2>H2 heading</h2>
  <h3>H3 heading</h3>
  <h4>H4 heading</h4>
  <h5>H5 heading</h5>
  <h6>H6 heading</h6>
</section>

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
), false); // non desctructive mode
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