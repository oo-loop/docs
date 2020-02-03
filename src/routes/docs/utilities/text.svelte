<script>
  import HeadTitle from '@/components/HeadTitle.svelte';
  import highlight from '@/utils/highlight.js';
</script>

<style>

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
`$ooLoop: ooPipe(
  _add('palette', (
    'danger': #da3b3b // danger globally
  )),
  _add('color.background.values', (
    'danger': #f7c8c8, //overwrite the danger value for background
  )),
  _add('color.border.values', (
    _this('palette.danger'), //add global danger to border values
  )),
);
`, 'scss')}

<div class="ground">
  <p class="color-danger mb-0">This is a text with the class <em>.color-danger</em></p>
  <div class="hr"></div>
  <p class="wrapper-small bg-danger">this is a block with a the class <em>.bg-danger</em></p>
  <p class="wrapper-small border-danger" style="border: 1px solid">this is a block with a the class <em>.border-danger</em></p>
</div>
