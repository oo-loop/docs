<script>
  import HeadTitle from '../../components/HeadTitle.svelte';
  import highlight from '../../utils/highlight.js';
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
  
  .header,
  .footer {
    height: 45px;
  }
  .main {
    height: 150px;
  }
  [data-oo-area] {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

<HeadTitle title="Template"/>

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

{@html highlight(
`$ooLoop: ooSet('template.areas', ( 
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
  <div data-oo-template>
    <div class="header light" data-oo-area="header">Header</div>
    <div class="main dark" data-oo-area="main">Main</div>
    <div class="darker" data-oo-area="sidebar">Sidebar</div>
    <div class="footer light" data-oo-area="footer">Footer</div>
  </div>
</div>