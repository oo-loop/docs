<script>
  import HeadTitle from '@/components/HeadTitle.svelte';
  import Pagination from '@/components/Pagination.svelte';
  import highlight from '@/utils/highlight.js';

  const title = 'Color utilities';
  const description = 'Modify the color of any elements tagetting font, background and/or border.';
</script>

<HeadTitle {title} {description}/>

<h1>{title}</h1>
<p class="font-large">{description}</p>
<p>Loop gives you few colors by default to avoid overloading the CSS of rules you might not need.</p>

{@html highlight(
`palette: (
  'primary': #0ea7d6,
  'secondary': #959595,
),

// default settings
color: (
  font: (
    prefix: 'color',
    property: 'color',
    values: this('palette'),
  ),
  background: (
    prefix: 'bg',
    property: 'background-color',
    values: (
      _this('palette'),
      (
        'secondary': #f8f8f8,
      )
    )
  ),
  border: (
    property: 'border-color',
    values: (), // no border utilities
  ),
),
`, 'scss')}

<div class="ground">
  <p class="color-primary mb-0">This is a text with the class <em>.color-primary</em></p>
  <p class="color-secondary">This is a text with the class <em>.color-secondary</em></p>
  <div class="hr"></div>
  <p class="wrapper-small bg-primary">this is a block with a the class <em>.bg-primary</em></p>
  <p class="wrapper-small bg-secondary">this is a block with a the class <em>.bg-secondary</em></p>
</div>

<p><strong>Set your preferences to the config.</strong></p>

{@html highlight(
`$ooLoop: ooPipe(
  _add('palette', (
    'danger': #da3b3b // danger globally
  )),
  _add('color.font.values', (
    'warning': #ce8a0d,
  )),
  _add('color.background.values', (
    'danger': #f7c8c8, //override the danger value for background
  )),
  _set('color.border.values', this('palette')), //add global values
);
`, 'scss')}

<div class="ground">
  <p class="color-warning mb-0">This is a text with the class <em>.color-warning</em></p>
  <p class="color-danger mb-0">This is a text with the class <em>.color-danger</em></p>
  <div class="hr"></div>
  <p class="wrapper-small bg-danger">this is a block with a the class <em>.bg-danger</em></p>
  <p class="wrapper-small border-primary" style="border: 1px solid">this is a block with a the class <em>.border-primary</em></p>
  <p class="wrapper-small border-secondary" style="border: 1px solid">this is a block with a the class <em>.border-secondary</em></p>
  <p class="wrapper-small border-danger" style="border: 1px solid">this is a block with a the class <em>.border-danger</em></p>
</div>
<hr>
<p class="info">In manual mode add the mixin <strong>Color()</strong></p>

<Pagination page="color" />
