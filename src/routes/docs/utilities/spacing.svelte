<script>
  import HeadTitle from '@/components/HeadTitle.svelte';
  import highlight from '@/utils/highlight.js';
</script>

<style>

</style>

<HeadTitle title="Spacing utilities"/>

<h1>Spacing utilities</h1>
<p class="text-large">Space out elements from each others.</p>
<p>Four types of classes are available, <code>.mt-<em class="color-secondary">keyName</em></code> <code>.mb-<em class="color-secondary">keyName</em></code> <code>.ml-<em class="color-secondary">keyName</em></code> and <code>.mr-<em class="color-secondary">keyName</em></code>. Loop chose to name the values by pixel numbers to give a better understanding of the space representation. The generated values are on the contrary in rem units.</p>

{@html highlight(
`// default config
spacing: (
  left: (
    prefix: 'ml',
    property: 'margin-left',
    values: (
      '0': 0,
      '5': rem(5),
      '10': rem(10),
      '15': rem(15),
    ),
  ),
  right: (
    prefix: 'mr',
    property: 'margin-right',
    values: this('spacing.left.values'),
  ),
  top: (
    prefix: 'mt',
    property: 'margin-top',
    values: (
      '0': 0,
      '5': rem(5),
      '10': rem(10),
      '15': rem(15),
      '30': rem(30),
    ),
  ),
  bottom: (
    prefix: 'mb',
    property: 'margin-bottom',
    values: this('spacing.top.values'),
  ),
),
`, 'scss')}

{@html highlight(
`/** It will generate **/

.ml-0 { margin-left: 0 !important; }
.ml-5 { margin-left: 0.3125rem !important; }
.ml-10 { margin-left: 0.625rem !important; }
.ml-15 { margin-left: 0.9375rem !important; }

.mr-0 { margin-right: 0 !important; }
.mr-5 { margin-right: 0.3125rem !important; }
.mr-10 { margin-right: 0.625rem !important; }
.mr-15 { margin-right: 0.9375rem !important; }

.mt-0 { margin-top: 0 !important; }
.mt-5 { margin-top: 0.3125rem !important; }
.mt-10 { margin-top: 0.625rem !important; }
.mt-15 { margin-top: 0.9375rem !important; }
.mt-30 { margin-top: 1.875rem !important; }

.mb-0 { margin-bottom: 0 !important; }
.mb-5 { margin-bottom: 0.3125rem !important; }
.mb-10 { margin-bottom: 0.625rem !important; }
.mb-15 { margin-bottom: 0.9375rem !important; }
.mb-30 { margin-bottom: 1.875rem !important; }
`, 'css')}

<h4 class="mt-45">Add more, update data, set responsive values <span class="font-regular text-medium">(<a href="docs/utilities#format" title="Check the options">Check the options</a>)</span></h4>
{@html highlight(
`// config.scss
$ooLoop: (
  ...
  container: (
    gutter: (
      rt: 1rem,
      sm: 1.5rem,
    ),
  )
);

// your-config.scss
$ooLoop: ooAdd('spacing', (
  top: (
    values: (
      '45': rem(45),
    ),
    screens: (
      lg: '45'
    ), 
  ),
  bottom: ('values': (
    'gutter': this('container.gutter') // grabbing value from gutter config
  )),
));
`, 'scss')}
{@html highlight(
`/** It will generate **/

.mt-45 { margin-top: 2.8125rem !important; }
.mb-45 { margin-top: 2.8125rem !important; }

@media (min-width: 80em) {
  .mt-45@lg { margin-top: 2.8125rem !important; }
}


.mb-gutter { margin-bottom: 1rem !important; }

@media (min-width: 37.5em) {
  .mb-gutter { margin-bottom: 1.5rem !important; }
}
`, 'css')}
<hr>
<p class="info">In manual mode add the mixin <strong>Spacing()</strong></p>