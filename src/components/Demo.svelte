<script>
  import { onMount, beforeUpdate, afterUpdate } from 'svelte'
  import { cubicOut } from 'svelte/easing'
  import { create_animation } from 'svelte/internal'
  import highlight from '@/utils/highlight.js'
  import Row from '@/components/Loop/Row.svelte'
  import Col from '@/components/Loop/Col.svelte'
  
  const date = new Date();
  const screens = ['rt', 'sm', 'md']
  let activeScreenIndex = 0, direction = 1
  let autoAnimation = null
  let template = undefined
  let areas = []

  $: datetime = `${date.getFullYear()}-09-07 10:00`
  $: screen = screens[activeScreenIndex]

  beforeUpdate(() => {
    if (template !== undefined) {
      for (let i = 0; i < template.children.length; i++) {
        areas[i] = {
          id: i,
          from: template.children[i].getBoundingClientRect(),
          to: {}
        }
      }
    }
  })

  afterUpdate(async () => {
    if (areas.length > 0) {
      for (let i = 0; i < template.children.length; i++) {
        areas[i].to = template.children[i].getBoundingClientRect()
      }
      for (let i = 0; i < template.children.length; i++) {
        create_animation(template.children[i], areas[i].from, relocate, {
          to: areas[i].to
        })
      }
    }
  })

  onMount(() => {
    autoAnimation = setInterval(() => {
      if (direction === 1 && activeScreenIndex === (screens.length -1)) {
        direction = -1
      } else if (direction === -1 && activeScreenIndex === 0) {
        direction = 1
      }
      activeScreenIndex += direction
    }, 3000)
  })

  const relocate = (node, { from }, params) => {
    const distanceX = from.x - params.to.x;
    const distanceY = from.y - params.to.y;
    const distanceW = from.width - params.to.width;
    const distanceH = from.height - params.to.height;
    return {
      delay: 0,
      duration: 800,
      easing: cubicOut,
      css: (t, u) => `
      position:absolute;\n
      top: ${(from.y - (t * distanceY)) - template.getBoundingClientRect().y + 16}px;\n
      left: ${(from.x - (t * distanceX)) - template.getBoundingClientRect().x + 16}px;\n
      width: ${from.width - (t * distanceW)}px;\n
      height: ${from.height - (t * distanceH)}px;\n
      // transform: translate3d(${u * distanceX}px, ${u * distanceY}px, 0);\n
      `,
    }
  }

  function setActiveScreen(screenName) {
    if (autoAnimation !== null) {
      clearInterval(autoAnimation)
      autoAnimation = null
    }
    activeScreenIndex = screens.indexOf(screenName)
  }
</script>

<style lang="scss">
   h2 {
     padding-top: 35px;
     margin-top: 0;
     margin-bottom: 35px;
     font-weight: 300;
     color: #fff;
     text-align: center;
   }
  .demo {
    position: relative;
    padding-top: 5rem;
    padding-bottom: 1rem;
    margin-left: -#{oo('container.gutter.rt')};
    margin-right: -#{oo('container.gutter.rt')};
    @include breakpoint(sm) {
      margin-left: -#{oo('container.gutter.sm')};
      margin-right: -#{oo('container.gutter.sm')};
    }
    @include breakpoint(lg) {
      margin-left: calc(-50vw + #{oo('container.maxWidth') / 2} - #{oo('container.gutter.sm')});
      margin-right: calc(-50vw + #{oo('container.maxWidth') / 2} - #{oo('container.gutter.sm')});
    }

    :global(code), :global(pre) {
      background-color: inherit;
    }

    &-top {
      margin-top: 90px;
      background-color: #263943;
      &::before {
        position: absolute;
        top: -70px;
        left: 0;
        right: 0;
        content: '';
        display: block;
        height: 40px;
        border-radius: 30% 50%/0% 80%;
        box-shadow: 10px 40px 0 35px #FFF, 0px 70px 0 8px oo('palette.primary');
        transform: rotate(1deg);
      }
      .preview {
        box-shadow: 5px 5px 0 0px #1d2d35;
      }
    }

    &-middle {
      background-color: #1d2d35;

      .preview-template {
        box-shadow: 5px 5px 0 0px #162429;
      }

      &::before {
        margin-top: -180px;
        margin-bottom: 90px;
        content: '';
        display: block;
        height: 90px;
        border-radius: 100% 70%/130% 30%;
        box-shadow: 10px 40px 0 35px #263943;
      }
    }
    &-bottom {
      padding-bottom: 4rem;
      background-color: #1a2529;

      &::before {
        margin-top: -180px;
        margin-bottom: 90px;
        content: '';
        display: block;
        height: 90px;
        border-radius: 100% 100%/150% 70%;
        box-shadow: 10px 40px 0 35px #1d2d35;
      }
    }
  }
  [class*="preview"] {
    position: relative;
    padding: .8rem;
    margin-left: -.5rem;
    margin-right: -.5rem;
    border: 1px solid oo('palette.primary');
    border-radius: 8px;

    @include breakpoint(sm) {
      padding: 1rem;
      margin-left: 0;
      margin-right: 0;
    }

    &::before {
      position: absolute;
      top: -20px;
      left: 0;
      z-index: 1;
      content: 'Preview';
      color: oo('palette.primary');
      font-family: oo('typo.fontFamily.values.monospace');
    }
  }

  .template-canvas {
    height: 450px;
  }
  .preview-template {
    transition: min-height 550ms ease-out;
    overflow-x: hidden;
    > div {
      display:grid;
      grid-gap: 1rem;

      > div {
        padding: 10px;
        align-items: center;
        will-change: top, left, height, width;
        transition: all ease-out 300ms;
      }
    }
  }
  .template-rt {
    min-height: 428px;
    > div {
      grid-template-areas:
      "header"
      "nav"
      "main"
      "widgets"
      "footer";
      grid-template-columns: repeat(1, 1fr);
    }
  }
  .template-sm {
    min-height: 367px;
    > div {
      grid-template-areas:
        "header header header"
        "nav main main"
        "nav widgets widgets"
        "footer footer footer";
      grid-template-columns: repeat(3, 1fr);
    }
  }
  .template-md {
    min-height: 306px;
    > div {
      grid-template-areas:
        "header nav nav"
        "main main widgets"
        "footer footer widgets";
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .template-header { grid-area: header; }
  .template-nav { grid-area: nav; }
  .template-main { grid-area: main; }
  .template-widgets { grid-area: widgets; }
  .template-footer { grid-area: footer;}
  .dark {
    color: #c8e2e8;
    background-color: oo('palette.sample.dark');
  }
  .darker {
    color: #c8e2e8;
    background-color: oo('palette.sample.darker');
  }
  .light {
    color: #01536d;
    background-color: oo('palette.sample.light');
  }

  .small {
    min-height: 45px;
  }
  .high {
    min-height: 150px;
  }

  .switchers {
    margin-bottom: 20px;
    text-align: center;
    > a {
      font-size: 10px;
      cursor: pointer;
      vertical-align: bottom;
      transition: all ease-out 300ms;
      &:not(:first-child) {
        margin-left: 10px;
      }

      &:hover,
      &:active,
      &.active {
        color: #fff;
      }
    }
  }
  .rt {
    position: relative;
    display: inline-block;
    width: 28px;
    height: 45px;
    border : 1px solid;
    border-radius: 4px;
    &::before {
      position: absolute;
      bottom: 5px;
      left: calc(50% - 4px);
      display: inline-block;
      content: '';
      width: 8px;
      height: 8px;
      border-radius: 50%;
      border: 1px solid;
    }
  }
  .sm {
    position: relative;
    display: inline-block;
    width: 48px;
    height: 60px;
    border: 1px solid;
    border-radius: 4px;
    &::before {
      position: absolute;
      bottom: 5px;
      left: calc(50% - 4px);
      display: inline-block;
      content: '';
      width: 8px;
      height: 8px;
      border-radius: 50%;
      border: 1px solid;
    }
  }
  .md {
    position: relative;
    margin-bottom: 4px;
    display: inline-block;
    width: 96px;
    height: 65px;
    border: 1px solid;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    &::before{
      position: absolute;
      bottom: -5px;
      left: -6px;
      display: inline-block;
      content: '';
      width: 106px;
      height: 5px;
      border-bottom-right-radius: 4px;
      border-bottom-left-radius: 4px;
      border: 1px solid;
    }
  }
  .lg {
    position: relative;
    display: inline-block;
    width: 100px;
    height: 70px;
    border : 1px solid;
    border-radius: 4px;
    &::before {
      position: absolute;
      bottom: -8px;
      left: calc(50% - 3px);
      display: inline-block;
      content: '';
      width: 6px;
      height: 8px;
      border: 1px solid;
    }
    &::after {
      position: absolute;
      bottom: -8px;
      left: calc(50% - 12px);
      display: inline-block;
      content: '';
      width: 24px;
      height: 0;
      border-top: 1px solid;
    }
  }
  [data-oo-button] {
    position: relative;
    z-index: 5;
  }
  [data-oo-button~=lavender] {
    border-radius: 50em;
  }
</style>

<section class="demo demo-top">
  <div class="container">
    <h2>Layout Elements Quickly</h2>
    <Row>
      <Col prop="span5@md order0@md">
{@html highlight(
`// config.scss
@import '~loop/scss';

$ooLoop: ooAdd('palette', (
  'white': #fff,
));
$ooLoop: ooAdd('column.gutter.sizes', (
  'small': 1rem,
))

@include ooCreate((
  html5: false,
));\n`, 'scss', 'mt-0 mb-0 wrapper-less')}
      </Col>
      <Col prop="span12">
{@html highlight(
`<!-- App -->
<div oo-row="gutter-small">
  <div oo-col="fit">
    <img src="orange.jpg" width="100" alt="oranges" />
  </div>
  <div oo-col class="color-white">
    <h3 class="mt-10">Orange <small class="color-secondary">/ˈɒrɪn(d)ʒ/</small></h3>
    <p>A large round juicy citrus fruit with a tough bright reddish-yellow rind.</p>
  </div>
</div>`, 'html', 'mt-0 mb-0 wrapper-less')}
      </Col>
      <Col prop="self-valign-middle order0@md">
        <div class="preview mt-30  mb-30">
          <Row prop="gutter-small">
            <Col prop="fit"><img src="orange.jpg" width="100" alt="oranges" /></Col>
            <Col class="color-white">
              <h3 class="mt-10">Orange <small class="color-secondary">/ˈɒrɪn(d)ʒ/</small></h3>
              <p class="mb-0">A large round juicy citrus fruit with a tough bright reddish-yellow rind.</p>
            </Col>
          </Row>
        </div>
      </Col>
      <Col prop="span12" class="text-center">
        <a class="font-medium" data-oo-button="primary" href="docs/components/column" title="Start using Columns">Start using Columns</a>
      </Col>
    </Row>
  </div>
</section>

<section class="demo demo-middle">
  <div class="container">
    <h2 class="">Make Responsive Template Easy</h2>
    <Row prop="align-between">
      <Col prop="span6@md" class="mt-15">
{@html highlight(
`// config.scss
@import '~loop/scss';

$ooLoop: ooSet('template.areas', (
  'home': (
    rt: (
      "header"
      "nav"
      "main"
      "widgets"
      "footer"
    ),
    sm: (
      "header header header"
      "nav main main"
      "nav widgets widgets"
      "footer footer footer"
    ),
    md: (
      "header nav nav"
      "main main widgets"
      "footer footer widgets"
    ),
  )
));
$ooLoop: ooSet('template.gap.sizes.default', 1rem);

@include ooCreate((
  html5: false,
));`, 'scss', 'mt-0 mb-5 wrapper-less')}
{@html highlight(
`\n<!-- App -->
<div oo-template="home">
  <div oo-area="header">Header</div>
  <div oo-area="nav">Nav</div>
  <div oo-area="main">Main</div>
  <div oo-area="widgets">Widgets</div>
  <div oo-area="footer">Footer</div>
</div>
`, 'html', 'mt-0 mb-0 wrapper-less')}
      </Col>
      <Col prop="span12 span5@md order0@md" class="mt-45">
        <div class="switchers">
          <a class:active={screen === 'rt'} class="rt" on:click|preventDefault={() => setActiveScreen('rt')}>rt</a>
          <a class:active={screen === 'sm'} class="sm" on:click|preventDefault={() => setActiveScreen('sm')}>sm</a>
          <a class:active={screen === 'md'} class="md" on:click|preventDefault={() => setActiveScreen('md')}>md</a>
        </div>
        <div class="template-canvas">
          <div class="preview-template template-{screen} clear mt-5">
            <div bind:this={template}>
              <div class="small light template-header">Header</div>
              <div class="small dark template-nav">Nav</div>
              <div class="high darker template-main">Main</div>
              <div class="small dark template-widgets">Widgets</div>
              <div class="small light template-footer">Footer</div>
            </div>
          </div>
        </div>
        <div class="text-center mt-30">
          <a class="font-medium" data-oo-button="primary" href="docs/components/template" title="Create Templates">Create Templates</a>
        </div>
      </Col>
    </Row>
  </div>
</section>

<section class="demo demo-bottom">
  <h2>Take Advantage of Utilities</h2>
  <div class="container">
    <Row>
      <Col prop="span6@sm span5@md order0@sm">
{@html highlight(
`// config.scss
@import '~loop/scss';

$ooLoop: ooPipe(
  _add('palette', (
    'lavender': #a172bf,
    'white': #fff,
  ),
  _add('wrapper', (
    values: (
      'tiny': .5rem
    ),
    screens: 'sm'
  )),
);

$ooLoop: ooAdd('utilities', (
  display: (
    prefix: 'd',
    values: 'block'
  ),
  letterSpacing: (
    prefix: 'text',
    values: (
      'wide': .5px,
    ),
  )
))

$ooLoop: ooPipe(
  _set('button.outline', true),
  _add('button.props', (
    border-radius: 50em,
  )
);

@include ooCreate();\n`, 'scss', 'mt-0 mb-0 wrapper-less')}
      </Col>
      <Col prop="span12">
{@html highlight(
`\n<!-- App -->
<div class="bg-white text-center">
  <time datetime="${datetime}"
    class="d-block wrapper-tiny bg-lavender color-white font-small text-uppercase">
    September 7th, 10am
  </time>
  <div class="wrapper-small wrapper-medium@sm">
    <h3 class="mt-0 mb-0">Frontend Developer Festival</h3>
    <p class="text-wide">Tokyo, Odaiba, Big Sight</p>
    <button data-oo-button="lavender outline">Join</button>
  </div>
</div>
`, 'html', 'mt-0 mb-30 wrapper-less')}
      </Col>
      <Col prop="self-valign-middle order0@sm">
        <div class="preview mb-30">
          <div class="bg-white text-center">
            <time datetime={datetime}
              class="d-block wrapper-tiny bg-lavender color-white text-center font-small text-uppercase">
              September 7th, 10am
            </time>
            <div class="wrapper-small wrapper-medium@md">
              <h3 class="mt-0 mb-0">Frontend Developer Festival</h3>
              <p class="text-wide">Tokyo, Odaiba, Big Sight</p>
              <button data-oo-button="lavender outline">Join</button>
            </div>
          </div>
        </div>
      </Col>
      <Col prop="span12" class="text-center">
        <a class="font-medium" data-oo-button="primary" href="docs/utilities" title="Make your own Set">Make your own Set</a>
      </Col>
    </Row>
  </div>
</section>