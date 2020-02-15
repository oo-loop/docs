<script>
	import HeadTitle from '@/components/HeadTitle.svelte';
  import highlight from '@/utils/highlight.js';
</script>

<HeadTitle title="Config map"/>

<h1>Loop Config Map</h1>
<p class="text-large">Simplify the use of variables and the configuration of the framework.</p>

<p>Because going through a single <i>variables.scss</i> file can be tedious and remembering every names is becoming a challenge,
Loop offers a single config map.</p>

<p>Every data are set <strong>inside</strong> the variable <code>$ooLoop</code></p>
{@html highlight(`$ooLoop: (
  // properties
);
`, 'scss')}

<h2 class="mt-45" id="global">Global Properties</h2>
<p>The global properties are data to be refered to within your configuration to avoid duplicating them.</p>

<h3 class="h4 mt-30 font-code">breakpoints</h3>
<p><em class="text-uppercase text-small">Map</em> - Available breakpoints in your project.</p>
{@html highlight(`breakpoints: (
  xs: 30em,     // 480px
  sm: 37.500em, // 600px
  md: 60em,     // 960px
  lg: 80em,     // 1280px
  xl: 120em,    // 1980px
),`, 'scss')}

<h3 class="h4 mt-30 font-code">screens</h3>
<p><em class="text-uppercase text-small">List</em> - Set of responsive screens being globally used.</p>
{@html highlight(`screens: (sm, md, lg),`, 'scss')}

<h3 class="h4 mt-30 font-code">palette</h3>
<p><em class="text-uppercase text-small">Map</em> - Available colors in your project.</p>
{@html highlight(`palette: (
  'primary': #0ea7d6,
  'secondary': #959595,
),`, 'scss')}

<hr>
<h2 id="props"><em class="font-regular">Props</em> Attribute</h2>
<p>The <em>props</em> attribute is reserved to pass a map of CSS properties within the config.
<br>The properties can be written in pure css or in camelCase depending on your preferences.</p>

{@html highlight(
`... : (
  props: (
    fontSize: 1.6em,    // camelCase
    line-height: 1.375, // CSS kebab-case
  )
),
`, 'scss')}

<p class="mt-30">When a CSS value <strong>is multiple</strong> (containing commas), make sure to wrap the whole value <strong>between parenthesis</strong>.</p>

{@html highlight(`// parenthesis wrapping CSS multiple value
... : (
  props: (
    fontFamily: ('Helvetica Neue', 'Helvetica', 'Arial', sans-serif),
    transition: (background-color 300ms ease-in-out, border-color 300ms ease-in-out)
  )
),
`, 'scss')}

<p class="mt-30">Core settings (<strong>body, headings, paragraph</strong>...) are mainly using the <em>props</em> attributes to provide default styling.
Check the <a href="docs/html-elements" title="HTML elements documentation">HTML elements documentation</a> to know what they are and change them at your own will.</p>

<hr>
<h2 id="states"><em class="font-regular">States</em> Attribute</h2>
<p>The <em>states</em> attribute is reserved to pass a map of Element states containing CSS properties.
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

<hr>
<h2 id="this"><em class="font-regular">This</em> Referer</h2>
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

<h3 class="mt-45">Aliases</h3>
<p>The config map not being initialized,
the use of sass functions <strong>along with</strong> the keyword <code>this</code> <strong>cannot be performed</strong>.
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
<h2 id="access">Access Data</h2>
<p>Access any data of the config map during your development.</p>

<h3 class="h4 font-code" id="oo">oo(<span class="color-primary">$path</span>)</h3>
<p><em class="text-uppercase text-small">Function</em> - Get values from Loop config.</p>
<ul>
	<li class="mb-10"><strong>$path</strong> <em class="font-monospace">(string)</em>
  <br>Concatenated path to a Loop config attribute.
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