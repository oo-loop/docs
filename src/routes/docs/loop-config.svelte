<script>
	import HeadTitle from '../../components/HeadTitle.svelte';
  import highlight from '../../utils/highlight.js';
</script>

<HeadTitle title="Config map"/>

<h1>Loop Config Map</h1>
<p>Having a single <i>variables.scss</i> file listing all the available customization can be tedious to find what we are looking for; and remembering every name is almost impossible.</p>

<p>The single map is there to simplify the use of variables and the configuration of the framework.</p>

<p>Every data is being set <strong>inside</strong> the variable <code class="inline color-primary">$ooLoop</code></p>
{@html highlight(`$ooLoop: (
  // properties
);
`, 'scss', true)}

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
Check the <a href="docs/base" title="Base documentation">Base documentation</a> to know what they are and change them at your own will.</p>

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
<h2 id="this"><em class="font-regular">This</em> Reference</h2>
<p>The keyword <code class="inline">this()</code> refers to a value in the context of the config map.</p>
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
)
`, 'scss', true)}
{@html highlight(
`/* will generate */
a {
  color: #0ea7d6;
}
`, 'css', true)}

<h3 class="mt-45">Spread operator</h3>
<p>Expand a map by referring a set of values in the context of the config map by using the operator <code class="inline">_this()</code></p>

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
)
`, 'scss', true)}
{@html highlight(
`/* will generate */
.color-primary   { color: #0ea7d6 }
.color-secondary { color: #959595 }
.color-danger    { color: red }
`, 'css', true)}

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
)
`, 'scss', true)}
{@html highlight(
`/* will generate */
.color-primary { color: #0ea7d6 }
.color-danger  { color: red }
`, 'css', true)}

<h3 class="mt-45">Aliases</h3>
<p>The config map not being initialized,
the use of sass functions <strong>along with</strong> the keyword <code class="inline">this</code> <strong>cannot be performed</strong>.
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
)
`, 'scss', true)}

<p class="mt-30">Aliases will help you overcome this problem and avoid you repeating values already set.
At this stage, the few available are <code class="inline">ooDarken</code> and <code class="inline">ooLighten</code>.</p>

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
)
`, 'scss', true)}