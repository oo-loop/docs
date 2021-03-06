<script>
	import HeadTitle from '@/components/HeadTitle.svelte';
	import Pagination from '@/components/Pagination.svelte';
  import highlight from '@/utils/highlight.js';

  const description = 'Simplify the use of variables and the configuration of the framework.';
</script>

<HeadTitle title="Config map" {description}/>

<h1>Loop Config Map</h1>
<p class="font-large">{description}</p>

<p>Because going through a single <i>variables.scss</i> file can be tedious and remembering every names is becoming a challenge,
Loop offers a single config map.</p>

<p>Every data are set <strong>inside</strong> the variable <code>$ooLoop</code></p>
{@html highlight(`$ooLoop: (
  // properties
);
`, 'scss')}

<h2 class="mt-45" id="global"><a href="docs/config/#global">#</a> Global Properties</h2>
<p>The global properties are data to be refered to within your configuration to avoid duplicating them.</p>

<h3 class="h4 mt-30 font-code">breakpoints</h3>
<p><em class="text-uppercase font-small">Map</em> - Available breakpoints in your project.</p>
{@html highlight(`breakpoints: (
  xs: 30em,     // 480px
  sm: 37.500em, // 600px
  md: 60em,     // 960px
  lg: 80em,     // 1280px
  xl: 120em,    // 1980px
),`, 'scss')}

<h3 class="h4 mt-30 font-code">screens</h3>
<p><em class="text-uppercase font-small">List</em> - Set of responsive screens being globally used.</p>
{@html highlight(`screens: (sm, md, lg),`, 'scss')}

<h3 class="h4 mt-30 font-code">palette</h3>
<p><em class="text-uppercase font-small">Map</em> - Available colors in your project.</p>
{@html highlight(`palette: (
  'primary': #0ea7d6,
  'secondary': #959595,
),`, 'scss')}

<hr>
<h2 id="props"><a href="docs/config/#props">#</a> <em class="font-regular">Props</em> Property</h2>
<p>The <em>props</em> property is reserved to pass a map of CSS properties within the config.
<br>The properties are <strong>written in css kebab-case</strong>.</p>

{@html highlight(
`... : (
  props: (
    font-size: 1.6em,
    line-height: 1.375,
  )
),
`, 'scss')}

<p class="mt-30">When a CSS value <strong>is multiple</strong> (containing commas), make sure to wrap the whole value <strong>between parenthesis</strong>.</p>

{@html highlight(`// parenthesis wrapping CSS multiple value
... : (
  props: (
    font-family: ('Helvetica Neue', 'Helvetica', 'Arial', sans-serif),
    transition: (background-color 300ms ease-in-out, border-color 300ms ease-in-out)
  )
),
`, 'scss')}

<p class="mt-30">Core settings (<strong>body, headings, paragraph</strong>...) are mainly using the <em>props</em> property to provide default styling.
Check the <a href="docs/html-elements/" title="HTML elements documentation">HTML elements documentation</a> to know what they are and change them at your own will.</p>

<h3>Responsive value</h3>
<p>A property can accept a map of breakpoints to generate responsive values</p>
{@html highlight(`
body : (
  props: (
    font-size: (
      rt: 1rem, // root value (default)
      sm: 1.2rem, // value @sm
    )
  )
),
`, 'scss')}
{@html highlight(`/* Generating */
body {
  font-size: 1rem;
}
@media (min-width: 37.500em) {
  body {
    font-size: 1.2rem;
  }
}
`, 'css')}

<h3 class="mt-30">Pseudo-elements, States and Pseudo-selectors</h3>
<p>Style any pseudo-elements (<code>before</code>, <code>after</code>... ) and any CSS states (<code>hover</code>,<code>focus</code>... ) and other pseudo-selectors (<code>first-child</code>... ) by using them as property names with a map of CSS properties as value.</p>
{@html highlight(`
... : (
  props: (
    font-size: 1rem,
    '::before': (
      content: 'Tokyo –',
      font-size: .8rem,
    ),
    ':hover': (
      text-decoration: underline,
      '::before': (
        color: #cdcdcd,
      )
    )
    ':first-child': (
      margin-top: 10px,
    )
  )
),
`, 'scss')}

<h3 class="mt-30">Child elements</h3>
<p>Target nested elements from the key property <code>></code> having as value a <strong>map of CSS selectors</strong> with CSS properties.</p>
{@html highlight(`
... : (
  props: (
    font-size: 1rem,
    '>': (
      'li': ( // targetting <li>
        margin-bottom: 10px,
      ),
      'li:last-child': ( // pseudo selector
        border-bottom: 1px solid #ccc,
      ),
      '.active': ( // classname
        font-weight: 700,
      ),
    )
  )
),
`, 'scss')}

<p class="info">Styling <strong>pseudo-elements</strong> and <strong>child-elements</strong> are mainly used when developing components from the Loop config.</p>
<hr>
<h2 id="states"><a href="docs/config/#states">#</a> <em class="font-regular">States</em> Property</h2>
<p>The <em>states</em> property is reserved to pass a map of Element states containing CSS properties.
<br>The properties can be written in pure css or in camelCase depending on your preferences.</p>

<p>Any css state is available such as <strong>active, hover, focus, visited</strong>...</p>

{@html highlight(
`... : (
  states: (
    hover: ( // CSS properties
      color: #cdcdcd,
      border: 1px solid #cdcdcd,
    ),
    focus: ( // CSS properties
      color: blue,
    ),
  )
),
`, 'scss')}

<p class="info">Same as <em>props</em>, the rules for <strong>pseudo-elements</strong> and <strong>child-elements</strong> also apply to <em>states</em>.</p>


<hr>
<h2 id="this"><a href="docs/config/#this">#</a> <em class="font-regular">This</em> Referer</h2>
<p>The keyword <code>this()</code> refers to a value in the context of the config map.</p>
{@html highlight(`$ooLoop: (
  palette: (
    'primary': #0ea7d6,
    'secondary': #959595,
  ),
  anchor: (
    props: (
      color: this('palette.primary'),
    )
  ),
  ...
);
`, 'scss')}
{@html highlight(
`/* will generate */
a {
  color: #0ea7d6;
}
`, 'css')}

<h3 class="mt-45">Spread operator</h3>
<p>Expand a map by referring a set of values in the context of the config map by using the operator <code>_this()</code></p>

{@html highlight(`$ooLoop: (
  palette: (
    'primary': #0ea7d6,
    'secondary': #959595,
  ),

  // utilities
  color: (
    font: (
      prefix: 'color',
      property: 'color',
      values: (
        _this('palette'),
        (
          'danger': red,
        )
      )
    )
  ),
  ...
);
`, 'scss')}
{@html highlight(
`/* will generate */
.color-primary   { color: #0ea7d6 }
.color-secondary { color: #959595 }
.color-danger    { color: red }
`, 'css')}

<p class="info mt-30 mb-30">In the case where the expansion is <strong>targetting a single value</strong>, the <strong>last crumb </strong>of the path will be <strong>used as the name</strong> of its value.</p>

{@html highlight(`$ooLoop: (
  palette: (
    'primary': #0ea7d6,
    'secondary': #959595,
  ),

  // utilities
  color: (
    font: (
      prefix: 'color',
      property: 'color',
      values: (
        _this('palette.primary'),
        (
          'danger': red,
        )
      )
    )
  ),
  ...
);
`, 'scss')}
{@html highlight(
`/* will generate */
.color-primary { color: #0ea7d6 }
.color-danger  { color: red }
`, 'css')}

<h4>Chaining</h4>
<p>Add as many spreads as needed</p>

{@html highlight(`$ooLoop: (
  palette: (
    'primary': #0ea7d6,
    'secondary': #959595,
    'warning': #f7f3c8,
  ),

  // utilities
  color: (
    font: (
      prefix: 'color',
      property: 'color',
      values: (
        _this('palette.primary'),
        _this('palette.secondary'),
        (
          'danger': red,
        )
      )
    )
  ),
  ...
);
`, 'scss')}

{@html highlight(
`/* will generate */
.color-primary { color: #0ea7d6 }
.color-secondary { color: #959595 }
.color-danger  { color: red }
`, 'css')}

<h3 class="mt-45">Aliases</h3>
<p>The config map not being initialized,
<em class="color-danger">the use of sass functions <strong>along with</strong> the keyword <code>this</code> <strong>cannot be performed</strong></em>.
They are however working with regular values.</p>

{@html highlight(`$ooLoop: (
  palette: (
    'primary': #0ea7d6,
    'secondary': #959595,
  ),
  anchor: (
    props: (
      color: this('palette.primary'),
    ),
    states: (
      hover: (
        // this will throw an error
        color: darken(this('anchor.props.color'), 12%),
      ),
      focus: (
        // this works fine
        color: darken(#0ea7d6, 12%);
      )
    )
  ),
  ...
);
`, 'scss')}

<p class="mt-30">Aliases will help you overcome this problem and avoid repeating values already set.
At this stage, the few available are <code>ooDarken</code> and <code>ooLighten</code>.</p>

{@html highlight(`$ooLoop: (
  palette: (
    'primary': #0ea7d6,
    'secondary': #959595,
  ),
  anchor: (
    props: (
      color: this('palette.primary'),
    ),
    states: (
      hover: (
        color: ooDarken(this('anchor.props.color'), 12%),
      ),
      focus: this('anchor.states.hover'),
    )
  ),
  ...
);
`, 'scss')}

<hr>
<h2 id="access"><a href="docs/config/#access">#</a> Access Data</h2>
<p>Access any data of the config map during your development.</p>

<h3 class="h4 font-code" id="oo">oo(<span class="color-primary">$path</span>)</h3>
<p><em class="text-uppercase font-small">Function</em> - Get values from Loop config.</p>
<ul>
	<li class="mb-10"><strong>$path</strong> <em class="font-monospace">(string)</em>
  <br>Concatenated path to a Loop config property.
  <br>When accessing a value from <em>props</em>, the kebab-case css property can be targetting with a camelCase name.</li>
</ul>

{@html highlight(`$ooLoop: (
  palette: (
    'primary': #0ea7d6,
    'secondary': #959595,
  ),
  body: (
    props: (
      font-family: ('Helvetica Neue', Helvetica), // kebab-case
    )
  ),
  ...
);
`, 'scss')}

{@html highlight(
`.hero {
 display: flex;
 height: 400px;

 /* Access kebab-case from camelCase */
 font-family: oo('body.props.fontFamily');

 background-color: oo('palette.primary');
} `, 'css')}

<p class="info mt-15">Make sure to <strong>use <span class="color-primary">oo()</span> after the initialization </strong>of the config map to have all the updated data.</p>

<hr>
<h2 id="store"><a href="docs/config/#store">#</a> Store</h2>
<p>Add your own data to the config map through the property <code>store</code> to reuse them anywhere in your project.</p>
<p>Those data <strong>will not generate any CSS rules</strong>, It's just a way to set and access your project global values during your development.</p>

{@html highlight(
`$ooLoop: ooSet('store', (
  fontFamily: (
    serif: (Georgia, serif)
  ),
));
@include ooCreate();
`, 'scss')}

{@html highlight(
`.hero {
  display: flex;
  height: 400px;
  font-family: oo('store.fontFamily.serif');
}
`, 'scss')}
{@html highlight(
`/* Will generate */
.hero {
  display: flex;
  height: 400px;
  font-family: Georgia, serif;
}
`, 'css')}
<p>On the contrary <strong>not passing by store may generate extra rules</strong>.</p>

{@html highlight(
`$ooLoop: ooSet('typo.fontFamily', (
  values: (
    serif: (Georgia, serif)
  ),
));
@include ooCreate();
`, 'scss')}

{@html highlight(
`.hero {
  display: flex;
  height: 400px;
  font-family: oo('typo.fontFamily.values.serif');
}
`, 'scss')}
{@html highlight(
`/* Will generate */
.font-serif { font-family: Georgia, serif; !important }

.hero {
  display: flex;
  height: 400px;
  font-family: Georgia, serif;
}
`, 'css')}

<Pagination page="config" />
