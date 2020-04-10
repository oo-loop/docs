<script>
  import highlight from '@/utils/highlight.js'
  import Row from '@/components/Loop/Row.svelte'
  import Col from '@/components/Loop/Col.svelte'
  import TemplateSample from './template.svelte'
  
  const date = new Date()
  let showWeatherCode = {
    clear: false,
    rain: false,
    snow: false,
  }

  $: datetime = `${date.getFullYear()}-09-07 10:00`
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
    :global(.preview) {
      position: relative;
      padding: rem(12);
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

    &::before {
      margin-top: -180px;
      margin-bottom: 90px;
      content: '';
      display: block;
      height: 90px;
      border-radius: 100% 100%/150% 70%;
    }
  }
  .demo-top {
    margin-top: 60px;
    &::before {
      position: absolute;
      top: -70px;
      left: 0;
      right: 0;
      margin-top: 0;
      margin-bottom: 0;
      content: '';
      display: block;
      height: 40px;
      border-radius: 30% 50%/0% 80%;
      box-shadow: 10px 40px 0 35px #FFF, 0px 70px 0 8px oo('palette.primary');
    }
  }
  .demo-bottom {
    margin-bottom: 100px;
    &::after {
      position: absolute;
      bottom: -40px;
      left: 0;
      right: 0;
      height: 40px;
      content: '';
      background-color: inherit;
      border-radius: 0 0 80%/75% 0;
      box-shadow: 0px 5px 0 0px oo('palette.primary');
    }
  }

  .bg-100 {
    background-color: #263943;
    .preview {
      box-shadow: 5px 5px 0 0px #1d2d35;
    }
    & + .demo::before {
      box-shadow: 10px 40px 0 35px #263943;
    }
  }
  .bg-200 {
    background-color: #1d2d35;
    :global(.preview) {
      box-shadow: 5px 5px 0 0px #162429;
    }
    & + .demo::before {
      box-shadow: 10px 40px 0 35px #1d2d35;
    }
  }
  .bg-300 {
    background-color: #1a2529;
    .preview {
      box-shadow: 5px 5px 0 0px #141e21;
    }
    & + .demo::before {
      box-shadow: 10px 40px 0 35px #1a2529;
    }
  }
  .bg-400 {
    background-color: #141e21;
    .preview {
      box-shadow: 5px 5px 0 0px #0f1719;
    }
    & + .demo::before {
      box-shadow: 10px 40px 0 35px #141e21;
    }
  }
  .bg-500 {
    background-color: #0f1719;
    & + .demo::before {
      box-shadow: 10px 40px 0 35px #0f1719;
    }
    :global(code),
    h2 {
      color: #f5f5f5;
    }
  }

  [data-oo-button] {
    position: relative;
    z-index: 5;
  }
</style>

<section class="demo bg-100 demo-top">
  <div class="container">
    <h2>Quick Element Layout</h2>
    <Row prop="align-center">
      <Col prop="span4@md order0@md">
{@html highlight(
`// _config.scss
@import 'oo-loop/loop';

@include ooCreate((
  dataAttr: false,

  palette: (
    'white': #fff,
  ),
  column: (
    gutter: 1rem,
  ),
));\n`, 'scss', 'mt-0 mb-0 wrapper-less')}
      </Col>
      <Col prop="span12 span10@md">
{@html highlight(
`<!-- App -->
<div oo-row>
  <div oo-col="fit">
    <img src="orange.jpg" width="100" alt="oranges" />
  </div>
  <div oo-col class="color-white">
    <h3 class="mt-10">Orange <small class="color-secondary">/ˈɒrɪn(d)ʒ/</small></h3>
    <p>A large round juicy citrus fruit with a tough bright reddish-yellow rind.</p>
  </div>
</div>`, 'html', 'mt-0 mb-0 wrapper-less')}
      </Col>
      <Col prop="span6@md self-valign-middle order0@md">
        <div class="preview mt-30  mb-30">
          <Row prop="gutter-small">
            <Col prop="fit"><img src="orange.jpg" width="100" alt="oranges" /></Col>
            <Col class="color-white">
              <h3 class="mt-10">Orange <small class="color-secondary">/ˈɒrɪn(d)ʒ/</small></h3>
              <p class="mb-0">A large round juicy citrus fruit with a tough bright reddish-yellow{@html '&nbsp;'}rind.</p>
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

<section class="demo bg-200">
  <div class="container">
    <h2 class="">Simple Responsive Template Design</h2>
    <Row prop="align-between">
      <Col prop="span6@md" class="mt-15">
{@html highlight(
`// _config.scss
@import 'oo-loop/loop';

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
      "header header header header"
      "nav main main widgets"
      "nav main main widgets"
      "footer footer footer footer"
    ),
    lg: (
      "header nav nav"
      "main main widgets"
      "footer footer widgets"
    ),
  )
));
$ooLoop: ooSet('template.gap', 1rem);

@include ooCreate((
  dataAttr: false,
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
        <TemplateSample />
        <div class="text-center mt-30">
          <a class="font-medium" data-oo-button="primary" href="docs/components/template" title="Create Templates">Create Templates</a>
        </div>
      </Col>
    </Row>
  </div>
</section>

<section class="demo demo-bottom bg-300">
  <h2>Easy Use of Config Data</h2>
  <div class="container">
    <Row prop="align-center">
      <Col prop="span12 fit@sm" class="mt-5">
{@html highlight(
`// style.scss
.hero {
  padding: oo('container.gutter.rt');
  display: flex;
  min-height: 300px; 
  align-items: center;
  text-align: center;
  color: #fff;
  background-color: oo('palette.primary');

  @include breakpoint(sm) {
    padding: oo('container.gutter.sm');
    text-align: left;
  }
}
`, 'scss', 'mt-0 wrapper-less')}
      </Col>
      <Col prop="span2 self-valign-middle" class="hidden!@md text-center">
        <span class="color-secondary h2 font-light">=></span>
      </Col>
      <Col prop="span12 span4@sm span3@md" class="mt-5">
{@html highlight(
`/** Generating style.css **/
.hero {
  padding: 1rem;
  display: flex;
  min-height: 300px;
  align-items: center;
  text-align: center;
  color: #fff;
  background-color: #28a6c7;
}
@media (min-width: 37.5em) {
  .hero {
    padding: 1.5rem;
    text-align: left;
  }
}
`, 'css', 'mt-0 wrapper-less')}
      </Col>
      <Col prop="span12">
        <p class="text-center mt-45">
          <a class="font-medium" data-oo-button="primary" href="docs/config" title="Learn about Loop config">Learn about Loop config</a>
        </p>
      </Col>
    </Row>
  </div>
</section>
<section>
  <div class="container">
    <Col prop="span9@sm span7@md self-align-center" class="wrapper-wide">
      <p class="font-large mb-0">
        Like a companion, Loop supports your development, giving you the tools to make it your own.<br><br>
        Loop encourages the use and <a href="docs/utilities" title="Make your own utilties set">creation of utilities</a>
        while considering <a href="docs/components" title="Create your own components">making components</a> for recurring styling.
      </p>
    </Col>
  </div>
</section>
<section class="demo demo-top bg-300">
  <br>
  <h2>Take Advantage of Utilities<br>
    <small>Adjust your Needs - Build Rapidly</small>
  </h2>
  <div class="container">
    <Row prop="align-evenly">
      <Col prop="fit self-align-center">
{@html highlight(
`// _config.scss
@import 'oo-loop/loop';

$ooLoop: ooPipe(
  _add('palette', (
    'lavender': #a172bf,
    'white': #fff,
  ),

  _add('wrapper', (
    values: (
      'tiny': .5rem
    ),
    screens: 'md'
  )),

  _set('utilities', (
    display: (
      prefix: 'd',
      values: 'block'
    ),
    letterSpacing: (
      prefix: 'text',
      values: (
        'wide': .5px,
      ),
    ),
    overflow: (
      values: (
        'hidden',
      )
    ),
    shape: (
      property: 'border-radius',
      values: (
        'squircle': 1em,
        'stadium': 50em,
      ),
    ),
  ))
);

@include ooCreate();\n`, 'scss', 'mt-0 wrapper-less')}
      </Col>
      <Col prop="span12 span8@md span7@lg self-valign-middle">
{@html highlight(
`<!-- App -->
<div class="bg-white text-center shape-squircle overflow-hidden">
  <time datetime="${datetime}"
    class="d-block wrapper-tiny bg-lavender color-white font-small text-uppercase">
    September 7th, 10am
  </time>
  <div class="wrapper-small wrapper-medium@md">
    <h3 class="mt-0 mb-0">Frontend Developer Festival</h3>
    <p class="text-wide">Tokyo, Odaiba, Big Sight</p>
    <button class="shape-stadium" data-oo-button="lavender outline">Join</button>
  </div>
</div>\n
`, 'html', 'mt-0 mb-30 wrapper-less')}
        <div class="preview mb-30">
          <div class="bg-white text-center shape-squircle overflow-hidden">
            <time datetime={datetime}
              class="d-block wrapper-tiny bg-lavender color-white text-center font-small text-uppercase">
              September 7th, 10am
            </time>
            <div class="wrapper-small wrapper-medium@md">
              <h3 class="mt-0 mb-0">Frontend Developer Festival</h3>
              <p class="text-wide">Tokyo, Odaiba, Big Sight</p>
              <button class="shape-stadium" data-oo-button="lavender outline">Join</button>
            </div>
          </div>
        </div>
      </Col>
      <Col prop="span12" class="text-center">
        <a class="font-medium mb-10 ml-10 mr-10" data-oo-button="primary" href="docs/utilities" title="Make your own Set">Make your own Set</a>
        <a class="font-medium mb-10" data-oo-button="primary outline" href="docs/components#turn-utility-into-component" title="Turn utility first component into Loop component">Turn event into Loop component</a>
      </Col>
    </Row>
</section>
<section class="demo bg-400">
  <div class="container">
    <h2>Turn recurring style into Component<br>
      <small>Make Html more Readable</small>
    </h2>
    <Row prop="align-evenly">
      <Col prop="span6@sm span5@md" class="mt-10">
{@html highlight(
`// _config.scss
@import 'oo-loop/loop';

$ooLoop: ooAdd('components', (
  'notification': (
    props: (
      padding: 1rem,
      border-left-width: 5px,
      border-left-style: solid,
    ),
    variants: (
      'success': (
        color: #015a31,
        border-color: #83cca9,
        background-color: #c8f7e1,
      )
      'danger': (
        color: #5a0101,
        border-color: #ca7878,
        background-color: #f7c8c8,
      ),
      'warning': (
        color: #77490b,
        border-color: #d69d50,
        background-color: #f7f3c8,
      ),
      'centered': (
        text-align: center,
        border-left: 0,
        border-top-width: 5px,
        border-top-style: solid,
      ),
      'right': (
        text-align: right,
        border-left: 0,
        border-right-width: 5px,
        border-right-style: solid,
      )
    )
  ),
));

@include ooCreate((dataAttr: false));
`, 'scss', 'mt-0 wrapper-less')}
      </Col>
      <Col prop="span12 span6@sm span5@md order0@md" class="mt-10">
{@html highlight(
`<!-- App -->
<div oo-notification="success centered">
  <strong>Hey, well done!</strong><br>
  You've created a notification component.
</div>
<div oo-notification="danger">
  <strong>Oops!</strong><br>
  You've created a notification component.
</div>
<div oo-notification="warning right">
  <strong>Beware!</strong><br>
  You've created a notification component.
</div>
\n
`, 'html', 'mt-0 wrapper-less')}
        <div class="preview">
          <div data-oo-notification="success centered" class="mb-15">
            <strong>Hey, well done!</strong><br>
            You've created a notification component.
          </div>
          <div data-oo-notification="danger" class="mb-15">
            <strong>Oops!</strong><br>
            You've created a notification component.
          </div>
          <div data-oo-notification="warning right">
            <strong>Beware!</strong><br>
            You've created a notification component.
          </div>
        </div>
        <div class="text-center mt-45">
          <a data-oo-button="primary" class="mt-15" href="docs/components" title="Learn about Loop Component">Develop Loop Component</a>
        </div>
      </Col>
    </Row>
  </div>
</section>
<section class="demo demo-bottom bg-500">
  <div class="container">
    <h2>Develop Component with more Freedom<br><small>Pure Scss coding with Mixins</small></h2>
    <Row prop="align-center">
      <Col prop="span11@sm span6@md order0@md">
{@html highlight(
`// index.scss
@import 'config';

@include ooComponent('weather') {
  padding: 15px;
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  line-height: 1;
  color: #fff;

  &::before {
    margin-right: 15px;
    content: '';
    width: 45px;
    height: 45px;
  }

  &::after {
    margin-left: auto;
    content: attr(data-degree)'\\00B0';
    font-size: 3rem;
    font-weight: 200;
    white-space: nowrap;
  }

  & + & {
    margin-top: 15px;
  }
}

@include ooComponentVariant('weather', 'celsius') {
  &::after {
    content: attr(data-degree)'\\2103';
  }
}

@include ooComponentVariant('weather', 'fahrenheit') {
  &::after {
    content: attr(data-degree)'\\2109';
  }
}

@include ooComponentVariant('weather', 'sunny') {
  background-color: #36c2dd;
  &::before {
    background-color: #fff789;
    border-radius: 50%;
    box-shadow:
      0 0 10px 0 yellow,
      0 0 0 1px #ffdd40;
  }
}`, 'scss', 'mt-0 mb-0 wrapper-less')}
      </Col>
      <Col prop="span12 span11@lg">
{@html highlight(
`@include ooComponentVariant('weather', 'clear') {
  background-color: #212240;`, 'scss', 'mt-0 mb-0 wrapper-less')}
  {#if showWeatherCode.clear}
    {@html highlight(
`  &::before {
    border-radius: 50%;
    box-shadow:
      inset -10px -10px 0 0 #fff789,
      inset -10px -10px 0 1px #ffdd40,
      1px 1px 0 0 #ffdd40,
      inset -12px -12px 6px -3px yellow,
      4px 4px 6px -5px yellow
    ;
  }`, 'scss', 'mt-0 mb-0 wrapper-less')}
  {:else}
    <code class="color-white" on:click={() => showWeatherCode.clear = !showWeatherCode.clear} role="button">...</code>
  {/if}
{@html highlight(
`}

@include ooComponentVariant('weather', 'rainy') {
  background-color: #84a4cc;`, 'scss', 'mt-0 mb-0 wrapper-less')}
  {#if showWeatherCode.rain}
    {@html highlight(
`  &::before {
    background:
      linear-gradient(-60deg, transparent 7px, #64e9fd 9px, transparent 10px) 2px 32px repeat-x,
      radial-gradient(10px 9px, #fff 10px, transparent 11px) 0 -3px repeat-x,
      radial-gradient(12px 12px, #fff 90%, transparent 100%) 2px -11px no-repeat,
      linear-gradient(#fff 8px, transparent 9px) 10px 20px no-repeat
    ;
    background-size: 11px 7px, 23px, 45px 48px, 24px;
  }`, 'scss', 'mt-0 mb-0 wrapper-less')}
  {:else}
    <code class="color-white" on:click={() => showWeatherCode.rain = !showWeatherCode.rain} role="button">...</code>
  {/if}
{@html highlight(
`}

@include ooComponentVariant('weather', 'snowy') {
  background-color: #92bace;`, 'scss', 'mt-0 mb-0 wrapper-less')}
  {#if showWeatherCode.snow}
    {@html highlight(
`  &::before {
    background:
      radial-gradient(2px 2px, #fff 2px, transparent 2px) 1px 31px repeat-x,
      radial-gradient(2px 2px, #fff 2px, transparent 2px) 1px 29px repeat-x,
      radial-gradient(2px 2px, #fff 2px, transparent 2px) 1px 29px no-repeat,
      radial-gradient(10px 9px, #fff 10px, transparent 11px) 0 -3px repeat-x,
      radial-gradient(12px 12px, #fff 90%, transparent 100%) -2px -10px no-repeat,
      linear-gradient(#fff 8px, transparent 9px) 10px 20px no-repeat
    ;
    background-size: 11px 7px, 22px 20px, 44px 20px, 23px, 48px, 24px;
  }`, 'scss', 'mt-0 mb-0 wrapper-less')}
  {:else}
    <code class="color-white" on:click={() => showWeatherCode.snow = !showWeatherCode.snow} role="button">...</code>
  {/if}
{@html highlight(
`}

@include ooComponentVariant('weather', 'night') {
  background-color: #212240;
}
`, 'scss', 'mt-0 mb-0 wrapper-less')}
      </Col>
      <Col prop="span8@sm auto@md span5@lg order0@md">
{@html highlight(
`<!-- App -->
<div oo-weather="sunny" data-degree="28">
  <span>Marseille<br><small>Sunny</small></span>
</div>
<div oo-weather="rainy" data-degree="8">
  <span>Edinburgh<br><small>Rainy</small></span>
</div>
<div oo-weather="clear celsius" data-degree="14">
  <span>Tokyo<br><small>Clear Night</small></span>
</div>
<div oo-weather="rainy night celsius" data-degree="5">
  <span>Sapporo<br><small>Rainy</small></span>
</div>
<div oo-weather="snowy fahrenheit" data-degree="32">
  <span>La Crosse<br><small>Snowy</small></span>
</div>
\n
`, 'html', 'mt-0 mb-20 wrapper-less')}
        <Col prop="span11@sm span10@md span11@lg"> 
        <div class="preview mb-45">
          <div data-oo-weather="sunny" data-degree="28">
            <span>Marseille<br><small>Sunny</small></span>
          </div>
          <div data-oo-weather="rainy" data-degree="8">
            <span>Edinburgh<br><small>Rainy</small></span>
          </div>
          <div data-oo-weather="clear celsius" data-degree="14">
            <span>Tokyo<br><small>Clear Night</small></span>
          </div>
          <div data-oo-weather="rainy night celsius" data-degree="5">
            <span>Sapporo<br><small>Rainy</small></span>
          </div>
          <div data-oo-weather="snowy fahrenheit" data-degree="32">
            <span>La Crosse<br><small>Snowy</small></span>
          </div>
        </div>
        <div class="text-center">
          <a class="font-medium mt-10" data-oo-button="primary" href="docs/components#from-mixin" title="Develop Custom Component">Develop Custom Component</a>
        </div>
        </Col>
      </Col>
    </Row>
  </div>
</section>
