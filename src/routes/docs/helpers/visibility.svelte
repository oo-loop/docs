<script>
  import HeadTitle from '@/components/HeadTitle.svelte';
  import Row from '@/components/Loop/Row.svelte';
  import Col from '@/components/Loop/Col.svelte';
  import highlight from '@/utils/highlight.js';
</script>

<style lang="scss">
  :global(.visible-cell) {
    background-color: oo('palette.sample.light');
  }
  :global(.hidden-cell) {
    background-color: #d4d6d6;
  }
</style>

<HeadTitle title="Visibility"/>

<h1>Visibility</h1>
<p class="text-large">Hide elements on the page.<br>
<code class="ml-0">.hidden</code> <code>.hidden@<i class="color-secondary">screenName</i></code> <code>.!hidden@<i class="color-secondary">screenName</i></code></p>
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
<p>Use the values from the property <em class="font-bold">breakpoints</em> of <em>Visibility</em>.</p>

<div class="text-center">
  <Row prop="gutter-small" class="text-small mb-0">
    <Col><strong>Root</strong><br>0</Col>
    <Col><strong>Small</strong><br>600px</Col>
    <Col><strong>Medium</strong><br>960px</Col>
    <Col><strong>Large</strong><br>1280px</Col>
  </Row>
  <Row prop="gutter-small" class="mb-0">
    <Col class="hidden-cell">hidden</Col>
    <Col class="hidden-cell">hidden</Col>
    <Col class="hidden-cell">hidden</Col>
    <Col class="hidden-cell">hidden</Col>
  </Row>
  <Row prop="gutter-small" class="mb-0">
    <Col class="visible-cell">{@html '&nbsp;'}</Col>
    <Col class="hidden-cell">hidden@sm</Col>
    <Col class="hidden-cell">hidden@sm</Col>
    <Col class="hidden-cell">hidden@sm</Col>
  </Row>
  <Row prop="gutter-small" class="mb-0">
    <Col class="visible-cell">{@html '&nbsp;'}</Col>
    <Col class="visible-cell">{@html '&nbsp;'}</Col>
    <Col class="hidden-cell">hidden@md</Col>
    <Col class="hidden-cell">hidden@md</Col>
  </Row>
  <Row prop="gutter-small">
    <Col class="visible-cell">{@html '&nbsp;'}</Col>
    <Col class="visible-cell">{@html '&nbsp;'}</Col>
    <Col class="visible-cell">{@html '&nbsp;'}</Col>
    <Col class="hidden-cell">hidden@lg</Col>
  </Row>
</div>

<div class="hr"></div>

<h2 id="hide-upto"><a href="docs/helpers/visibility#hide-upto">#</a> Hide up to</h2>
<p>Use the values from the property <em class="font-bold">pointbreaks</em> of <em>Visibility</em>.</p>

<div class="text-center">
 <Row prop="gutter-small" class="text-small mb-0">
    <Col><strong>Root</strong><br>0</Col>
    <Col><strong>Small</strong><br>600px</Col>
    <Col><strong>Medium</strong><br>960px</Col>
    <Col><strong>Large</strong><br>1280px</Col>
  </Row>
  <Row prop="gutter-small" class="mb-0">
    <Col class="visible-cell">{@html '&nbsp;'}</Col>
    <Col class="visible-cell">{@html '&nbsp;'}</Col>
    <Col class="visible-cell">{@html '&nbsp;'}</Col>
    <Col class="visible-cell">{@html '&nbsp;'}</Col>
  </Row>
  <Row prop="gutter-small" class="mb-0">
    <Col class="hidden-cell">!hidden@sm</Col>
    <Col class="visible-cell">{@html '&nbsp;'}</Col>
    <Col class="visible-cell">{@html '&nbsp;'}</Col>
    <Col class="visible-cell">{@html '&nbsp;'}</Col>
  </Row>
  <Row prop="gutter-small" class="mb-0">
    <Col class="hidden-cell">!hidden@md</Col>
    <Col class="hidden-cell">!hidden@md</Col>
    <Col class="visible-cell">{@html '&nbsp;'}</Col>
    <Col class="visible-cell">{@html '&nbsp;'}</Col>
  </Row>
  <Row prop="gutter-small">
    <Col class="hidden-cell">!hidden@lg</Col>
    <Col class="hidden-cell">!hidden@lg</Col>
    <Col class="hidden-cell">!hidden@lg</Col>
    <Col class="visible-cell">{@html '&nbsp;'}</Col>
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
