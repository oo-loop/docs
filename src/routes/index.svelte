<script>
  import HeadTitle from '@/components/HeadTitle.svelte'
  import Row from '@/components/Loop/Row.svelte'
  import Col from '@/components/Loop/Col.svelte'
  import Demo from '@/components/Demo/index.svelte'
</script>

<style lang="scss">
h1 {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 2.5em;
  @include breakpoint(sm) {
    margin-top: 2rem;
    font-size: 3em;
  }
}
h2 {
  font-weight: 400;
}

h3 {
  margin-top: rem(40);
}
.brand {
  position: relative;
  padding: 0 oo('container.gutter.rt');
  margin: -75px -#{oo('container.gutter.rt')} 30px;
  overflow: hidden;
  display: flex;
  align-items: center;
  max-width: 960px;
  min-height: 540px;

  img {
    position: absolute;
    top: -110px;
    left: -210px;
    z-index: -1;
    height: 710px;
  }
  @include breakpoint(sm) {
    padding: 0 oo('container.gutter.sm');
    margin: -35px -#{oo('container.gutter.sm')} 0;
    overflow: visible;
    justify-content: center;

    > div {
      padding-left: 50px;
    }

    img {
      top: -50px;
      left: calc(50% - 440px);
      z-index: -1;
      height: 637px;
    }
  }
}

.hr {
  border-radius: 50%;
  height: 20px;
}

[data-oo-button] {
  position: relative;
  z-index: 2;
  margin: -40px auto -100px;
  display: block;
  width: 180px;
  font-size: 1.3rem;
  line-height: 60px;
  color: #f5f5f5;
  text-transform: uppercase;
  background-color: #263940;
  border-radius: 40%/50% 80%;
  border-color: oo('palette.primary');
  box-shadow: inset 2px 1px 0px #fff, inset -2px -1px 0px #fff, inset 4px 2px 0px #6cd7f8, inset -4px -2px 0px #6cd7f8;
  animation: bubble 5s infinite, bubble2 10s infinite;

  &:hover, &:focus {
    color: #fff;
    background-color: oo('palette.primary');
  }

  @include breakpoint(sm) {
    margin-top: 0;
  }

  & + .hr + h3 {
    margin-top: 70px;
  }

  @keyframes bubble {
    0% {
      border-radius: 30%/50% 40%;
    }
    50% {
      border-radius: 40%/50% 80%;
    }
    100% {
      border-radius: 30%/50% 40%;
    }
  }
  @keyframes bubble2 {
    0% {
      box-shadow: inset 2px 1px 0px #fff, inset -2px -1px 0px #fff, inset 4px 2px 0px #6cd7f8, inset -4px -2px 0px #6cd7f8;
    }
    50% {
      box-shadow: inset -2px -1px 0px #fff, inset 2px 1px 0px #fff, inset -4px -2px 0px #6cd7f8, inset 4px 2px 0px #6cd7f8;
    }
    100% {
      box-shadow: inset 2px 1px 0px #fff, inset -2px -1px 0px #fff, inset 4px 2px 0px #6cd7f8, inset -4px -2px 0px #6cd7f8;
    }
  }
}
</style>

<HeadTitle />

<section class="brand">
  <img alt="" src="logo.svg" height="637">
  <div>
    <h1>Loop</h1>
    <h2>Dev Companion for<br>Flexible and Expressive CSS</h2>
    <p class="font-large mb-30">Aiming to create a more maintainable and readable CSS</p>
    <code class="large">npm install oo-loop</code>
  </div>
</section>
<Col prop="span8@md self-align-center">
  <a data-oo-button href="/docs">Start</a>
  <div class="hr"></div>
  <h3>Fully customizable</h3>
  <p>Loop is a fully customizable Sass framework. It gives you complete control on your project to let you create and match your styles with your design needs.</p>
  
  <h3>Single Configuration</h3>
  <p>No endless variables file, Loop offers easy management and access to all configuration in a single map.</p>

  <h3>Separation of concerns</h3>
  <p>Loop differentiates components and utilities with semantic for more clarity</p>
  <ul>
  <li><a href="docs/components" title="Components documentation">data-oo-componentName</a> / <a href="docs/components" title="Components documentation">oo-componentName</a> for component attributes</li>
  <li><a href="docs/utilities" title="Utilities documentation">.prefixName-valueName</a> for utility classes</li>
</Col>

<Demo />

<Col prop="span8@md self-align-center">
  <h3>Why Loop ?</h3>
  <p>Have you ever worked on a project with your go-to css framework realizing that you were only using 10% of it. You had to add your own utilities, your own components and when trying to reuse something from its library, you actually had to overwrite some rules, tweak it, in order to reproduce what you wish for.</p>  
  <p>Have you ever wonder if the framework you were using was a real fit?.</p>
  <p>Loop has been developed out of that feeling to overcome this problem.</p>
  
  <div class="hr"></div>
  <h3>Philosophy</h3>
  <p>Loop is not a framework providing any possible existing components. It's more like a companion for CSS development, encouraging the use and creation of utilities while considering recurring components. Loop works towards flexibility and expressive CSS.</p>
</Col>
