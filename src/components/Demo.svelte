<script>
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'
  import highlight from '@/utils/highlight.js'
  import Row from '@/components/Loop/Row.svelte'
  import Col from '@/components/Loop/Col.svelte'
  
  let content = {
    top: '',
    main: '',
    bottom: '',
    html: '',
  }

  onMount(() => {
    content.top = `@import '~loop/scss';`
    content.main = `
$ooLoop: ooAdd('palette', (
  'white': #fff,
));
$ooLoop: ooAdd('column.gutter.sizes', (
  'small': 1rem,
))
`
    content.bottom = `@include ooCreate((
  html5: false,
));`
    content.html =
`<div oo-row="gutter-small">
  <div oo-col="fit">
    <img src="orange.jpg" width="100" alt="oranges" />
  </div>
  <div oo-col class="color-white">
    <h3 class="mt-10">Orange <small class="color-secondary">/ˈɒrɪn(d)ʒ/</small></h3>
    <p>A large round juicy citrus fruit with a tough bright reddish-yellow rind.</p>
  </div>
</div>`
  })

  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

  const typewriter = async (string, target) => {
    for (let i = 0; i < string.length; i++) {
      content[target] += string.charAt(i)
      await delay(50)
    }
  }
</script>

<style lang="scss">
.demo {
  position: relative;
  padding-top: 5rem;
  padding-bottom: 5rem;
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

  &-top {
    background-color: #263943;
    &::before {
      position: absolute;
      top: -90px;
      left: 0;
      right: 0;
      content: '';
      display: block;
      height: 90px;
      border-radius: 10% 140%/40% 160%;
      // box-shadow:
      // 	0 1px 0 #f8f8f8,
      // 	0 5px 0px #fff,
      // 	0 10px 0px #f8f8f8,
      // 	-10px 15px 0px #fff,
      // 	-10px 25px 0 #f8f8f8,
      // 	-10px 35px 0 #fff,
      // 	-10px 45px 0 #F8F8F8;
      box-shadow: 10px 40px 0 35px #FFF, -12px 75px 0 0px oo('palette.primary');
    }
  }

  &-bottom {
    background-color: #1d2d35;

    :global(code, pre) {
      background-color: inherit;
    }

    &::before {
      margin-top: -180px;
      margin-bottom: 90px;
      content: '';
      display: block;
      height: 90px;
      border-radius: 10% 140%/40% 160%;
      box-shadow: 10px 40px 0 35px #263943, -12px 75px 0 0px #263943;
    }
  }
}
.preview {
  position: relative;
  border: 1px solid oo('palette.primary');
  border-radius: 8px;
  box-shadow: 5px 5px 0 0px #1d2d35;

  &::before {
    position: absolute;
    top: -20px;
    left: 0;
    z-index: 1;
    content: 'Preview';
    color: oo('palette.primary');
    font-family: oo('text.fontFamily.values.monospace');
  }
}

</style>

<section class="demo demo-top">
  <div class="container">
    <Row>
      <Col prop="span5@md order0@md">
        {@html highlight(`// config.scss\n${content.top}\n${content.main}\n${content.bottom}`, 'scss', 'mt-0 mb-0 wrapper-less')}
      </Col>
      <Col prop="span12">
        {@html highlight(`<!-- App -->\n${content.html}`, 'html', 'mt-0 mb-0 wrapper-less')}
      </Col>
      <Col prop="self-valign-middle order0@md">
        <div class="preview wrapper-small mt-30">
          <Row prop="gutter-small">
            <Col prop="fit"><img src="orange.jpg" width="100" alt="oranges" /></Col>
            <Col class="color-white">
              <h3 class="mt-10">Orange <small class="color-secondary">/ˈɒrɪn(d)ʒ/</small></h3>
              <p class="mb-0">A large round juicy citrus fruit with a tough bright reddish-yellow rind.</p>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  </div>
</section>

<section class="demo demo-bottom">
  <div class="container">
    <Row>
      <Col prop="span5@md order0@md">
        {@html highlight(`// config.scss\n${content.top}\n
$ooLoop: ooSet('template.areas', (
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
  )
))\n${content.bottom}`, 'scss', 'mt-0 mb-0 wrapper-less')}
      </Col>
      <Col prop="span12">
        {@html highlight(`<!-- App -->
<div oo-template="home">
  <div oo-area="header">Header</div>
  <div oo-area="main">Main</div>
  <div oo-area="sidebar">Sidebar</div>
  <div oo-area="footer">Footer</div>
</div>
`, 'html', 'mt-0 mb-0 wrapper-less')}
      </Col>
      <Col prop="self-valign-middle order0@md">
        <div class="preview wrapper-small mt-5">
          <Row prop="gutter-small">
            <Col prop="fit"><img src="orange.jpg" width="100" alt="oranges" /></Col>
            <Col class="color-white">
              <h3 class="mt-10">Orange <small class="color-secondary">/ˈɒrɪn(d)ʒ/</small></h3>
              <p class="mb-0">A large round juicy citrus fruit with a tough bright reddish-yellow rind.</p>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  </div>
</section>
