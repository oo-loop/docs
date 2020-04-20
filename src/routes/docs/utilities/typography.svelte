<script>
  import HeadTitle from '@/components/HeadTitle.svelte';
  import Pagination from '@/components/Pagination.svelte';
  import highlight from '@/utils/highlight.js';

  const title = 'Typography utilities';
  const description = 'Modify the appearance of any text elements.';
</script>

<style>
 .font-large-2 {
  font-size: rem(18);
 }
</style>

<HeadTitle {title} {description}/>

<h1>{title}</h1>
<p class="font-large">{description}</p>
<p>Loop gives you some recurring text utilities by default. Adjust the rest to your need (<a href="docs/utilities/#format" title="Check the options">Check the options</a>).</p>

{@html highlight(
`// default config
typo: (
  fontSize: (
    values: (
      'large': rem(20),
      'small': rem(14),
    ),
  ),
  fontStyle: (
    values: 'italic',
  ),
  fontWeight: (
    values: (
      'light': 300,
      'bold': 700,
    ),
  ),
  textAlign: (
    values: (
      'left',
      'right',
      'center',
    )
  ),
  textTransform: (
    values: (
      'uppercase',
    ),
  ),
),
`, 'scss')}

<div class="ground">
  <p class="font-large mb-0">This is a text with the class <em>.font-large</em></p>
  <p class="font-small">This is a text with the class <em>.font-small</em></p>
  <div class="hr"></div>
  <p class="font-italic">This is a text with the class <em>.font-italic</em></p>
  <p class="font-light">This is a text with the class <em>.font-light</em></p>
  <p class="font-bold">This is a text with the class <em>.font-bold</em></p>
  <div class="hr"></div>
  <p class="text-left">This is a text with the class <em>.text-left</em></p>
  <p class="text-center">This is a text with the class <em>.text-center</em></p>
  <p class="text-right">This is a text with the class <em>.text-right</em></p>
  <div class="hr"></div>
  <p class="text-uppercase">This is a text with the class <em>.text-uppercase</em></p>
</div>

<h4>Add more or update data <span class="font-regular font-medium">(<a href="docs/utilities/#format" title="Check the options">Check the options</a>)</span></h4>

{@html highlight(
`$ooLoop: ooAdd('typo', (
  fontSize: (
    values: (
      'tiny': rem(12), // add .font-tiny
      'large': rem(18), // update .font-large
    )
  ),
  fontFamily: (
    values: (
      'monospace': monospace, // add .font-monospace
      'serif': (Georgia, "Times New Roman", Times), //add .font-serif
    )
  ),
  letterSpacing: (
    prefix: 'text',
    values: (
      'tight': -1px, // add .text-tight
      'wide': .5px,  // add .text-wide
      'wider': 1.5px,  // add .text-wider
    )
  )
));
`, 'scss')}

<div class="ground">
  <p class="font-tiny mb-0">This is a text with the class <em>.font-tiny</em></p>
  <p class="font-large-2">This is a text with the updated size of the class <em>.font-large</em></p>
  <!-- for documentation purposes the class used is .font-large-2 -->
  <p class="font-monospace mb-0">This is a text with the class <em>.font-monospace</em></p>
  <p class="font-serif">This is a text with the class <em>.font-serif</em></p>
  <p class="text-tight mb-0">This is a text with the class <em>.text-tight</em></p>
  <p class="text-wide mb-0">This is a text with the class <em>.text-wide</em></p>
  <p class="text-wider mb-0">This is a text with the class <em>.text-wider</em></p>
</div>


<h4>Set responsive values <span class="font-regular font-medium">(<a href="docs/utilities/#responsive" title="Check the options">Check the options</a>)</span></h4>

{@html highlight(
`$ooLoop: ooAdd('typo', (
  fontSize: ('values': (
    'grow': (
      rt: 1rem,
      md: 1.25rem,
      lg: 1.5rem,
    )
  )),
  textAlign: (
    screens: (md, ld), // text-left@md text-center@md text-right@md text-left@lg text-center@lg text-right@lg
  ),
));
`, 'scss')}
{@html highlight(
`<p class="font-grow text-center text-left@md text-right@lg">This is a paragraph with a responsive font-size as well as a responsive alignment.</p>
`, 'html')}
<div class="ground">
  <p class="font-grow text-center text-left@md text-right@lg">This is a paragraph with a responsive font-size<br>as well as a responsive alignment.</p>
</div>
<hr>
<p class="info">In manual mode add the mixin <strong>Typography()</strong></p>

<Pagination href="docs/utilities/spacing/" label="Use Spacing utilities" />
