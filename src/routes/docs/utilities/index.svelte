<script>
  import HeadTitle from '@/components/HeadTitle.svelte';
  import Pagination from '@/components/Pagination.svelte';
  import highlight from '@/utils/highlight.js';

  const description = 'A bunch of handy classes doing one job to customize elements on the fly.';
</script>

<HeadTitle title="Utility classes"/>

<h1>Utilities</h1>
<p class="font-large">{description}</p>
<p>Loop provides flexible utilities to assist you during your development. Extend them, set your own needs by adjusting the <a href="docs/config" title="Loop Config">Loop config</a> with the correct <a href="docs/utilities#format" title="Utility format">format</a>.</p>
<ul>
  <li><a href="docs/utilities/color">Color</a></li>
  <li><a href="docs/utilities/typography">Typography</a></li>
  <li><a href="docs/utilities/spacing">Spacing</a></li>
  <li><a href="docs/utilities/float">Float</a></li>
  <li><a href="docs/utilities/wrapper">Wrapper</a></li>
</ul>

<div class="hr"></div>
<h2 id="format"><a href="docs/utilities#format">#</a> Format</h2>
<p>A utility follows a specific map format being passed to the config.</p>
<ul>
  <li class="mb-10"><code>prefix</code><em class="font-monospace">(string)</em><em class="font-monospace color-secondary">(optional)</em>
  <br>Name prefixing each values - (default grabbing the first part of the name of the map)
  </li>
  <li class="mb-10"><code>property</code><em class="font-monospace">(string)</em><em class="font-monospace color-secondary">(optional)</em>
  <br>CSS property to change - (default turning the name of the map into a kebab-case CSS property)
  </li>
  <li class="mb-10"><code>values</code><em class="font-monospace">(map|list)</em>
  <br>CSS values for the targetted CSS property</li>
  <li class="mb-10"><code>important</code><em class="font-monospace">(boolean)</em><em class="font-monospace color-secondary">(optional)</em>
  <br>Add the <em>!important</em> flag - (default to true)</li>
  <li><code>screens</code><em class="font-monospace">(mixed)</em><em class="font-monospace color-secondary">(optional)</em>
  <br>Targetted responsive screens, global or specific - (defaulft empty)</li>
</ul>
<p class="info">The generated class will be created from <strong><span class="color-primary">.</span>(prefix | namePart1)<span class="color-primary">-</span>valueName</strong></p>
<div class="hr"></div>
<h2 id="custom"><a href="docs/utilities#format">#</a> Custom Utilities</h2>
<p>Following the appropriate map format create your own utitlies via the proterty <em>utilities</em> of the Loop config.</p>
{@html highlight(
`$ooLoop: ooAdd('utilities', (
  borderRadius: (
    prefix: 'radius',
    values: (
      'small': .5rem,
      'large': 1.5rem,
    )
  ),
  textDecoration: (
    values: (
      'underline',
      'overline',
    )
  ),
  display: (
    prefix: 'd',
    values: (
      'block': block
      'flex': flex,
      'iflex': inline-flex,
    )
  ),
  valign: (
    property: 'vertical-align',
    values: (
      'top',
      'middle',
    ),
    important: false,
  )
));
`, 'scss')}
{@html highlight(
`/** It will generate **/

.radius-small { border-radius: .5rem !important }
.radius-large { border-radius: 1.5rem !important }

.text-underline { text-decoration: underline !important }
.text-overline  { text-decoration: overline !important }

.d-block { display: block !important }
.d-flex  { display: flex !important }
.d-iflex { display: inline-flex !important }

.valign-top    { vertical-align: top }
.valign-middle { vertical-align: middle }
`, 'css')}

<div class="hr"></div>
<h2 id="responsive"><a href="docs/utilities#responsive">#</a> Responsive utilities</h2>
<p>The <em>screens</em> propertity can be used to set global responsive rules to apply to all listed values.<code><i class="colo-secondary">prefix</i>-<i class="colo-secondary">valueName</i>@<i class="colo-secondary">screenName</i></code></p>

{@html highlight(
`@include ooCreate((
  utilities: (
    borderRadius: (
      prefix: 'radius',
      values: (
        'small': .5rem,
        'large': 1.5rem,
      ),
      screens: 'sm'
    ),
    textDecoration: (
      values: (
        'underline',
      ),
      screens: (sm, md, lg)
    ),
  )
));
`, 'scss')}

<p>Generating the classes
<code>.radius-small</code> <code>.radius-large</code> <code>.radius-small@sm</code> <code>.radius-large@sm</code> <code>.text-underline</code> <code>.text-underline@sm</code> <code>.text-underline@md</code> <code>.text-underline@lg</code>
</p>

<h4 class="mt-30">Be specific, lighten your css</h4>
<p>Specify the needed valueName from the needed screens and generate only the necessary rules.</p>
{@html highlight(
`@include ooCreate((
  utilities: (
    borderRadius: (
      prefix: 'radius',
      values: (
        'small': .5rem,
        'large': 1.5rem,
      ),
      screens: (
        sm: 'small',
        lg: '✲' // Target all
      )
    ),
  )
));
`, 'scss')}
<p>Generating the classes
<code>.radius-small</code> <code>.radius-large</code> <code>.radius-small@sm</code> <code>.radius-small@lg</code> <code>.radius-large@lg</code>
</p>

<h4 class="mt-30">Responsive value</h4>
<p>Instead of using the <em>screens</em> property, set a responsive screen map to your utility value to modify it between the screen sizes.</p>
{@html highlight(
`@include ooCreate((
  utilities: (
    borderRadius: (
      prefix: 'radius',
      values: (
        'small': (
          rt: .25rem,
          sm: .5rem,
          md: 1rem,
        ),
        'large': 1.5rem,
      ),
    ),
  )
));
`, 'scss')}
<p>Generating the classes
<code>.radius-small</code> <code>.radius-large</code></p>
{@html highlight(
`.radius-small { border-radius: .25rem !important }

@media (min-width: 37.5em) {
  .radius-small { border-radius: .5rem !important }
}
@media (min-width: 60em) {
  .radius-small { border-radius: 1rem !important }
}

.radius-large { border-radius: 1.5rem !important }
`, 'css')}

<Pagination href="docs/utilities/color" label="Use Color utilities" />