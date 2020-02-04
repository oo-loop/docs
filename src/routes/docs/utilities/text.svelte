<script>
  import HeadTitle from '@/components/HeadTitle.svelte';
  import highlight from '@/utils/highlight.js';
</script>

<style>
 .text-large-2 {
  font-size: rem(18);
 }
</style>

<HeadTitle title="Text utilities"/>

<h1>Text utilities</h1>
<p class="text-large">Modify the appearance of any text elements.</p>
<p>Loop gives you some recurring text utilities by default. Adjust the rest to your need (<a href="docs/utilities#format" title="Check the options">Check the options</a>).</p>
<p class="info">In manual mode add the mixin <strong>Text()</strong></p>

{@html highlight(
`// default config
text: (
  fontSize: (
    prefix: 'text',
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
  <p class="text-large mb-0">This is a text with the class <em>.text-large</em></p>
  <p class="text-small">This is a text with the class <em>.text-small</em></p>
  <div class="hr"></div>
  <p class="text-left">This is a text with the class <em>.text-left</em></p>
  <p class="text-center">This is a text with the class <em>.text-center</em></p>
  <p class="text-right">This is a text with the class <em>.text-right</em></p>
  <div class="hr"></div>
  <p class="text-uppercase">This is a text with the class <em>.text-uppercase</em></p>
  <p class="font-italic">This is a text with the class <em>.font-italic</em></p>
  <p class="font-bold">This is a text with the class <em>.font-bold</em></p>
</div>

<h4>Add more or update data <span class="font-regular text-medium">(<a href="docs/utilities#format" title="Check the options">Check the options</a>)</span></h4>

{@html highlight(
`$ooLoop: ooAdd('text', (
  fontSize: ('values': (
    'tiny': rem(12), // add .text-tiny
    'large': rem(18), // update .text-large
  )),
  fontWeight: ('values': (
    'light': 300,  // add .font-light
  )),
  fontFamily: ('values': (
    'monospace': monospace, // add .font-monospace
    'serif': (Georgia, "Times New Roman", Times), //add .font-serif
  )),
  letterSpacing: (
    prefix: 'text',
    values: (
      'tight': -1px, // add .text-tight
      'wide': 1.5px,  // add .text-wide
    )
  )
));
`, 'scss')}

<div class="ground">
  <p class="text-tiny mb-0">This is a text with the class <em>.text-tiny</em></p>
  <p class="text-large-2">This is a text with the updated size of the class <em>.text-large</em></p>
  <!-- for documentation purposes the class used is .text-large-2 -->
  <p class="font-light">This is a text with the class <em>.font-light</em></p>
  <p class="font-monospace mb-0">This is a text with the class <em>.font-monospace</em></p>
  <p class="font-serif">This is a text with the class <em>.font-serif</em></p>
  <p class="text-tight mb-0">This is a text with the class <em>.text-tight</em></p>
  <p class="text-wide mb-0">This is a text with the class <em>.text-wide</em></p>
</div>
