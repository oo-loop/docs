<script>
  import HeadTitle from '@/components/HeadTitle.svelte'
  import Row from '@/components/Loop/Row.svelte'
  import Col from '@/components/Loop/Col.svelte'
  import Demo from './_demo/index.svelte'
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

.start-button {
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
    <h2>Flexible and Expressive CSS</h2>
    <p class="font-large mb-30">Aiming to create a more maintainable and readable CSS</p>
    <code class="large">npm install oo-loop</code>
  </div>
</section>
<Col prop="span8@md self-align-center">
  <a data-oo-button class="start-button" href="/docs">Start</a>
  <div class="hr"></div>
  <h3>Fully customizable</h3>
  <p>Loop is a fully customizable Sass framework. It gives you complete control on your project to let you create and match your styles with your design needs.</p>
  
  <h3>Single Configuration</h3>
  <p>No endless list of variables, Loop offers easy management and access to all configuration in a single map.</p>

  <h3>Separation of concerns</h3>
  <p>Loop differentiates components and utilities with semantic for more clarity</p>
  <ul>
  <li><a href="docs/components" title="Components documentation">data-oo-componentName</a> / <a href="docs/components" title="Components documentation">oo-componentName</a> for component attributes</li>
  <li><a href="docs/utilities" title="Utilities documentation">.prefixName-valueName</a> for utility classes</li>
</Col>

<Demo />

<Col prop="span8@md self-align-center">
  <h3>Why Loop?</h3>
  <p>
    The first iteration of Loop <em>(0.4)</em> focused on bringing the minimum to bootstrap any project.
    Instead of providing any possible existing components, Loop worked towards flexibility and customization to let the developer manage his
    own set of utilities; thus, making the CSS easier to maintain. Loop also introduced a new component syntax to improve HTML readibility
    making styling code more expressive and less confusing.
  </p>
  <p>
    <strong>Loop v1</strong> continues into the same philosophy tackling this time the variables situation.
     What we often get from a css framework, is a list of single variable to customize elements or components properties.
     The list, trying to cover a multitude of parameters, tends to be exhaustive and can become painful while searching for a possible change.
  </p>
  <p>
    Loop proposes to treat the variables as a single structured map to facilitate its use.
    As the result, the config map is enabling easy parsing and access to all the data during the development.
    Moreover, the introduction of properties such <em>props</em> and <em>states</em> offers a complete control over the style of elements and components.
    It is simplifying its customization by allowing you to add whatever CSS properties your need without worrying if it's changeable or not.
  </p>
  <p class="text-center mt-30"><a data-oo-button="primary outline" class="font-medium" href="/docs">Let's go</a></p>
  <hr>
  <p class="info">Loop documentation is still on going, more samples and details coming soon.</p>
  <hr>
</Col>
