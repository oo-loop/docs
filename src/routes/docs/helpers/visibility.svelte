<script>
  import HeadTitle from '@/components/HeadTitle.svelte';
  import Pagination from '@/components/Pagination.svelte';
  import Row from '@/components/Loop/Row.svelte';
  import Col from '@/components/Loop/Col.svelte';
  import highlight from '@/utils/highlight.js';

  const title = 'Visibility';
  const description = 'Hide elements on the page.';
</script>

<style lang="scss">
  .display {
    text-align: center;
  }
  :global(.display > div > div:first-child) {
    flex-basis: 55px;
    flex-grow: 0;
    @include breakpoint(sm) {
      flex-basis: 100px;
    }
  }
  :global(.display > div:first-child div) {
    white-space: nowrap;
  }
  :global(.visible-cell) {
    background-color: oo('palette.sample.light');
  }
  :global(.hidden-cell) {
    background-color: #d4d6d6;
  }
</style>

<HeadTitle {title} {description}/>

<h1>{title}</h1>
<p class="font-large">{description}<br>
<code class="ml-0">.hidden</code> <code>.hidden@<i class="color-secondary">screenName</i></code> <code>.hidden!@<i class="color-secondary">screenName</i></code></p>
<p>Based on hidden status, hide elements <strong>from a breakpoint</strong> or <strong>up to a breakpoint</strong> without worrying about its original display.</p>

{@html highlight(
`// default config
breakpoints: (
  xs: 30em, // 480px
  sm: 37.500em, // 600px
  md: 60em, // 960px
  lg: 80em, // 1280px
  xl: 120em, // 1980px
),
screens: (sm, md, lg),

...

visibility: (
  breakpoints: this('screens'), // refering to screens value
  pointbreaks: this('screens'), // refering to screens value
),
`, 'scss')}
<div class="hr"></div>

<h2 id="hide-from"><a href="docs/helpers/visibility#hide-from">#</a> Hide from</h2>
<p>Use the values from the property <em class="font-bold">breakpoints</em> of <em>Visibility</em> <code class="ml-0">.hidden</code><code>.hidden@<i class="color-secondary">screenName</i></code></p>

<div class="display">
  <Row prop="gutter-tiny" class="font-small mb-0">
    <Col></Col>
    <Col><strong>Root</strong><br>0</Col>
    <Col><strong>Small</strong><br>600px</Col>
    <Col><strong>Medium</strong><br>960px</Col>
    <Col><strong>Large</strong><br>1280px</Col>
  </Row>
  <Row prop="gutter-tiny" class="mb-0">
    <Col class="font-bold font-small">h<span class="hidden!@sm">idden</span></Col>
    <Col class="hidden-cell"></Col>
    <Col class="hidden-cell"></Col>
    <Col class="hidden-cell"></Col>
    <Col class="hidden-cell"></Col>
  </Row>
  <Row prop="gutter-tiny" class="mb-0">
    <Col class="font-bold font-small">h<span class="hidden!@sm">idden</span>@sm</Col>
    <Col class="visible-cell"></Col>
    <Col class="hidden-cell"></Col>
    <Col class="hidden-cell"></Col>
    <Col class="hidden-cell"></Col>
  </Row>
  <Row prop="gutter-tiny" class="mb-0">
    <Col class="font-bold font-small">h<span class="hidden!@sm">idden</span>@md</Col>
    <Col class="visible-cell"></Col>
    <Col class="visible-cell"></Col>
    <Col class="hidden-cell"></Col>
    <Col class="hidden-cell"></Col>
  </Row>
  <Row prop="gutter-tiny">
    <Col class="font-bold font-small">h<span class="hidden!@sm">idden</span>@lg</Col>
    <Col class="visible-cell"></Col>
    <Col class="visible-cell"></Col>
    <Col class="visible-cell"></Col>
    <Col class="hidden-cell"></Col>
  </Row>
</div>

<div class="hr"></div>

<h2 id="hide-upto"><a href="docs/helpers/visibility#hide-upto">#</a> Hide up to</h2>
<p>Use the values from the property <em class="font-bold">pointbreaks</em> of <em>Visibility</em> <code>.hidden!@<i class="color-secondary">screenName</i></code></p>

<div class="display">
  <Row prop="gutter-tiny" class="font-small mb-0">
    <Col></Col>
    <Col><strong>Root</strong><br>0</Col>
    <Col><strong>Small</strong><br>600px</Col>
    <Col><strong>Medium</strong><br>960px</Col>
    <Col><strong>Large</strong><br>1280px</Col>
  </Row>
  <Row prop="gutter-tiny" class="mb-0">
    <Col class="font-bold font-small">-</Col>
    <Col class="visible-cell"></Col>
    <Col class="visible-cell"></Col>
    <Col class="visible-cell"></Col>
    <Col class="visible-cell"></Col>
  </Row>
  <Row prop="gutter-tiny" class="mb-0">
    <Col class="font-bold font-small">h<span class="hidden!@sm">idden</span>!@sm</Col>
    <Col class="hidden-cell"></Col>
    <Col class="visible-cell"></Col>
    <Col class="visible-cell"></Col>
    <Col class="visible-cell"></Col>
  </Row>
  <Row prop="gutter-tiny" class="mb-0">
    <Col class="font-bold font-small">h<span class="hidden!@sm">idden</span>!@md</Col>
    <Col class="hidden-cell"></Col>
    <Col class="hidden-cell"></Col>
    <Col class="visible-cell"></Col>
    <Col class="visible-cell"></Col>
  </Row>
  <Row prop="gutter-tiny">
    <Col class="font-bold font-small">h<span class="hidden!@sm">idden</span>!@lg</Col>
    <Col class="hidden-cell"></Col>
    <Col class="hidden-cell"></Col>
    <Col class="hidden-cell"></Col>
    <Col class="visible-cell"></Col>
  </Row>
</div>

<div class="hr"></div>

<h2 id="misc"><a href="docs/helpers/visibility#misc">#</a> Misc</h2>
<p>Loop gives you two more visibility classes in the case of working on a print version.</p>
<ul>
  <li><code class="ml-0">.hidden@print</code> Hide elements from print</li>
  <li><code>.hidden@screen</code> Hide elements from screen (targetting print only)</li>
</ul>

<hr>
<p class="info">In manual mode add the mixin <strong>Visibility()</strong></p>

<Pagination href="docs/helpers/list" label="Use List classes" />