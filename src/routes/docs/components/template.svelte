<script>
  import HeadTitle from '@/components/HeadTitle.svelte'
  import highlight from '@/utils/highlight.js'

  let gap = ['default', 'less', 'small']
  let gapSelected = 'default'
  $: gapProp = gapSelected === 'default' ? '' : ` gap-${gapSelected}`

  let isVgapless = false
</script>

<style lang="scss">
  .dark {
    color: #c8e2e8;
    background-color: oo('palette.sample.dark');
  }
  .darker {
    color: #c8e2e8;
    background-color: oo('palette.sample.darker');
  }
  .light { background-color: oo('palette.sample.light'); }
  
  .small {
    height: 45px;
  }
  .high {
    height: 150px;
  }
  [data-oo-template] {
    clear: both;
  }
  [data-oo-area] {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .ground {
    color: #046886;
    text-align: center;
  }
</style>

<HeadTitle title="Template component"/>

<h1>Template</h1>
<p class="text-large"><i>Blueprint</i> semantically a page or elements in a page.<br>
<code class="ml-0">oo-template</code><code>oo-area</code></p>

<p>The component is included by default but requires you to <strong>pass your own design plan</strong> to the <em>areas</em> property. Use a responsive map to modify the layout between screens sizes.</p>

{@html highlight(
`//default config
template: (
  areas: (),
),
`, 'scss')}

<p class="mt-30">Repeat the areas' name to set the proportional size between each location.</p>
{@html highlight(
`$ooLoop: ooSet('template.areas', ( 
  rt: (
    "header"
    "main"
    "sidebar"
    "footer"
  ),
  sm: (
    "header header header header"// full width
    "main main main sidebar"     // main 3/4 & sidebar 1/4
    "footer footer footer footer"// full width
  ),
));`, 'scss')}

{@html highlight(
`<section oo-template>
  <header oo-area="header">Header</header>
  <main oo-area="main">Main</main>
  <aside oo-area="sidebar">Sidebar</aside>
  <footer oo-area="footer">Footer</footer>
</section>
`, 'html')}

<div class="ground">
  <div data-oo-template="home gap-less">
    <div class="small light" data-oo-area="header">Header</div>
    <div class="high dark" data-oo-area="main">Main</div>
    <div class="darker" data-oo-area="sidebar">Sidebar</div>
    <div class="small light" data-oo-area="footer">Footer</div>
  </div>
</div>

<hr>
<h2 id="multiple"><a href="docs/components/template#multiple" title="Multiple templates">#</a> Multiple templates</h2>
<p>Pass a list of <strong>named templates</strong> to the <em>areas</em> property.</p>

{@html highlight(
`$ooLoop: ooSet('template.areas', (
  'home': (
    rt: (
      "header"
      "main"
      "sidebar"
      "footer"
    ),
    sm: (
      "header header header header"
      "main main main sidebar"
      "footer footer footer footer"
    ),
  ),

  'abc': (
    rt: (
      "a"
      "b"
      "c"
    ),
    sm: (
      "a a"
      "c b"
      "c b"
    ),
    md: (
      "a a a"
      "b c c"
      "b c c"
    ),
    lg: (
      "a b b"
      "a c c"
      "a . ."
    ),
  )
));`, 'scss')}

{@html highlight(
`<div oo-template="abc">
  <div oo-area="a">A</div>
  <div oo-area="b">B</div>
  <div oo-area="c">C</div>
</div>
`, 'html')}

<div class="ground">
  <div data-oo-template="abc gap-less">
    <div class="high light" data-oo-area="a">A</div>
    <div class="small dark" data-oo-area="b">B</div>
    <div class="small darker" data-oo-area="c">C</div>
  </div>
</div>

<hr>
<h2 id="gap"><a href="docs/components/template#gap" title="Gap">#</a> Gap</h2>
<p>Change the horizontal and vertical space between the areas.<code>gap-<i>gapName</i> <code>vgap-<i>gapName</i></code></p>

{@html highlight(
`// default config
template: (
  gap: (
    sizes: (),  // gap between columns and between rows
    screens: (),// responsive screens for sizes
    vsizes: (), // gap between rows only
    vscreens:(),// responsive screens for vsizes
  ),
)`, 'scss')}

{@html highlight(
`$ooLoop: ooSet('template.gap', (
  sizes: (
    default: 1rem, // use default keyword to set main gap
    'less': 0, // gap-less
    'small': ( // gap-small has a responsive map
      rt: .25rem,
      sm: .5rem, 
    ),
  ),
  vsizes: (
    'less': 0, // vgap-less
  ),
));`, 'scss')}

{@html highlight(
`<div oo-template="home${gapProp}${isVgapless ? ' vgap-less' : ''}">
 <div oo-area="header">Header</div>
  <div oo-area="main">Main</div>
  <div oo-area="sidebar">Sidebar</div>
  <div oo-area="footer">Footer</div>
</div>
`, 'html')}
<button data-oo-button class="text-small float-right"
  on:click={() => isVgapless = !isVgapless}>toggle vgap-less</button>
<div data-oo-select class="float-right mb-root" style="width:140px">
  <select class="text-small font-bold" bind:value={gapSelected}>
  {#each gap as val}
    <option value={val}>gap {val}</option>
  {/each}
  </select>
</div>
<div class="ground">
  <div data-oo-template="home{gapProp}{isVgapless ? ' vgap-less' : ''}">
    <div class="small light" data-oo-area="header">Header</div>
    <div class="high dark" data-oo-area="main">Main</div>
    <div class="darker" data-oo-area="sidebar">Sidebar</div>
    <div class="small light" data-oo-area="footer">Footer</div>
  </div>
</div>

<h3>Responsive screens</h3>
<p>Set reponsive gap from the <em>screens</em> & <em>vscreens</em> properties and get variants. <code>gap-<i>sizeName</i>@<i>screenName</i></code> <code>vgap-<i>sizeName</i>@<i>screenName</i></code>. <i>(Variants with <strong>map value will be skipped</strong>)</i>.</p>
{@html highlight(
`$ooLoop: ooSet('template.gap', (
  sizes: (
    default: 1rem,
    'less': 0,
    'small': (
      sm: .5rem, 
    ),
  ),
  vsizes: (
    'less': 0,
  ),
  screens: ('sm', 'lg'),
  vscreens: this('template.gap.screens'), //get screens value
));

/* Generating responsive variants */
// - gap-default@sm gap-default@lg gap-less@sm gap-less@lg
// - vgap-less@sm vgap-less@lg
`, 'scss')}
{@html highlight(
`<div data-oo-template="abc gap-less@sm gap-default@lg vgap-less@lg">
  <div data-oo-area="a">A</div>
  <div data-oo-area="b">B</div>
  <div data-oo-area="c">C</div>
</div>`, 'html')}

<div class="ground">
  <div data-oo-template="abc gap-less@sm gap-default@lg vgap-less@lg">
    <div class="high light" data-oo-area="a">A</div>
    <div class="small dark" data-oo-area="b">B</div>
    <div class="small darker" data-oo-area="c">C</div>
  </div>
</div>