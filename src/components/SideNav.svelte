<script>
  import { onMount } from 'svelte'
  import { pathname } from '@/stores.js'
  export let segment

  let path
  let el
  let elHeight
  let elOffsetHeight
  let hash
  let isOn = false

  $: label = isOn ? '[–]' : '[+]'
  $: if (elOffsetHeight === 30 && !isOn) {
    el.scrollTop = 0
  }

  onMount(() => {
    elHeight = el.scrollHeight
    elOffsetHeight = el.offsetHeight
    hash = location.hash
  })

  pathname.subscribe(value => {
    path = value
    isOn = false
    if (typeof location !== 'undefined') {
      hash = location.hash
    }
  })

  function onHashChange(e) {
    hash = e.target.location.hash
  }
  function onResize() {
    elOffsetHeight = el.offsetHeight
  }

  function isActive(current, path) {
    return path ? path.indexOf(current) !== -1 : false
  }
  function isHashActive(current, hash) {
    return current === hash
  }
</script>

<svelte:window
  on:resize={onResize}
  on:hashchange={onHashChange}
  />

<nav bind:this={el} style={isOn ? `max-height:${elHeight}px` : ''}>
  <span class="$style.trigger" on:click={() => isOn = !isOn}>{label}</span>
  <ul class="list-unstyle">
    <li>
      <h4><a class:color-primary={segment === 'installation'} href="docs/installation/" title="Installation">Installation</a></h4>
    </li>
    <li>
      <h4><a class:color-primary={segment === undefined} href="docs/" title="Getting started">Getting started</a></h4>
      <ul class="list-unstyle">
        <li><a class:color-primary={isHashActive('#ooinit', hash)} href="docs/#ooinit" title="ooCreate mixin">ooInit</a></li>
        <li><a class:color-primary={isHashActive('#oocreate', hash)} href="docs/#oocreate" title="ooCreate mixin">ooCreate</a></li>
        <li><a class:color-primary={isHashActive('#ooset', hash)} href="docs/#ooset" title="ooSet function">ooSet</a></li>
        <li><a class:color-primary={isHashActive('#ooadd', hash)} href="docs/#ooadd" title="ooAdd function">ooAdd</a></li>
        <li><a class:color-primary={isHashActive('#oopipe', hash)} href="docs/#oopipe" title="ooPipe function">ooPipe</a></li>
      </ul>
    </li>
    <li>
      <h4><a class:color-primary={segment === 'config'} href="docs/config/" title="Loop Config Map">Config Map</a></h4>
      <ul class="list-unstyle">
        <li><a class:color-primary={isHashActive('#global', hash)} href="docs/config/#global" title="Global properties">Global properties</a></li>
        <li><a class:color-primary={isHashActive('#props', hash)} href="docs/config/#props" title="Props property"><i>Props</i> property</a></li>
        <li><a class:color-primary={isHashActive('#states', hash)} href="docs/config/#states" title="States property"><i>States</i> property</a></li>
        <li><a class:color-primary={isHashActive('#this', hash)} href="docs/config/#this" title="This referer"><i>This</i> referer</a></li>
        <li><a class:color-primary={isHashActive('#access', hash)} href="docs/config/#access" title="Access data">Access data</a></li>
        <li><a class:color-primary={isHashActive('#store', hash)} href="docs/config/#store" title="Store property">Store</a></li>
      </ul>
    </li>
    <li>
      <h4><a class:color-primary={segment === 'importation'} href="docs/importation/" title="Importation">Importation</a></h4>
      <ul class="list-unstyle">
        <li><a class:color-primary={isHashActive('#config', hash)} href="docs/importation/#config" title="Use of config">Use of Config</a></li>
        <li><a class:color-primary={isHashActive('#mixin', hash)} href="docs/importation/#mixin" title="Use of mixin">Use of Mixin</a></li>
      </ul>
    </li>
    <li>
      <h4><a class:color-primary={segment === 'html-elements'} href="docs/html-elements/" title="Html elements">HTML elements</a></h4>
      <ul class="list-unstyle">
        <li><a class:color-primary={isHashActive('#base', hash)} href="docs/html-elements/#base" title="Html base">Base</a></li>
        <li><a class:color-primary={isHashActive('#content', hash)} href="docs/html-elements/#content" title="Html content">Content</a></li>
        <li><a class:color-primary={isHashActive('#headings', hash)} href="docs/html-elements/#headings" title="Html headings">Headings</a></li>
      </ul>
    </li>
    <li>
      <h4><a class:color-primary={segment === 'components'} href="docs/components/" title="Loop components">Components</a></h4>
      <ul class="list-unstyle">
        <li><a class:color-primary={isActive('components/column', path)} href="docs/components/column/" title="Column component">Column</a></li>
        <li><a class:color-primary={isActive('components/template', path)} href="docs/components/template/" title="Template component">Template</a></li>
        <li><a class:color-primary={isActive('components/button', path)} href="docs/components/button/" title="Button component">Button</a></li>
        <li><a class:color-primary={isActive('components/form', path)} href="docs/components/form/" title="Form component">Form</a></li>
      </ul>
    </li>
    <li>
      <h4><a class:color-primary={segment === 'helpers'} href="docs/helpers/" title="Helpers classes">Helper Classes</a></h4>
      <ul class="list-unstyle">
        <li><a class:color-primary={isActive('helpers/container', path)} href="docs/helpers/container/" title="Container classes">Container</a></li>
        <li><a class:color-primary={isActive('helpers/visibility', path)} href="docs/helpers/visibility/" title="Visibility classes">Visibility</a></li>
        <li><a class:color-primary={isActive('helpers/list', path)} href="docs/helpers/list/" title="List classes">List</a></li>
        <li><a class:color-primary={isActive('helpers/misc', path)} href="docs/helpers/misc/" title="Miscellaneous classes">Miscellaneous</a></li>
      </ul>
    </li>
    <li>
      <h4><a class:color-primary={segment === 'utilities'} href="docs/utilities/" title="Utilities classes">Utilities</a></h4>
      <ul class="list-unstyle">
        <li><a class:color-primary={isActive('utilities/color', path)} href="docs/utilities/color/" title="Color utilities">Color</a></li>
        <li><a class:color-primary={isActive('utilities/typography', path)} href="docs/utilities/typography/" title="Typography utilities">Typography</a></li>
        <li><a class:color-primary={isActive('utilities/spacing', path)} href="docs/utilities/spacing/" title="Spacing utilities">Spacing</a></li>
        <li><a class:color-primary={isActive('utilities/float', path)} href="docs/utilities/float/" title="Float utilities">Float</a></li>
        <li><a class:color-primary={isActive('utilities/wrapper', path)} href="docs/utilities/wrapper/" title="Wrapper utilities">Wrapper</a></li>
      </ul>
    </li>
  </ul>
</nav>

<style lang="scss">
  nav {
    padding: 15px 20px;
    margin-left: -1rem;
    margin-right: -1rem;
    max-height: 10px;
    overflow: hidden;
    background-color: #f5f5f5;
    transition: max-height ease-in-out 300ms;

    @include breakpoint(sm) {
      margin-left: -1.5rem;
      margin-right: -1.5rem;
    }

    @include breakpoint(md) {
      max-height: none;

      @supports (position: sticky) {
        position: sticky;
        top: 0;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
        max-height: 100vh;
      }

      margin-right: auto;
      margin-left: auto;
      width: 200px;

      background-color: transparent;
      border-right: oo('hr.props.borderBottom');
      border-radius: 10% / 50%;

      transition: none;
    }
  }
  .trigger {
    margin-top: -10px;
    margin-left: -10px;
    margin-right: -10px;

    display: block;
    line-height: 1.2;
    text-align: center;
    color: #777;
    cursor: pointer;

    &::after {
      margin-top: 6px;
      margin-bottom: 24px;
      content: '';
      display: block;
      border-bottom: 1px solid #cccc;
    }

    @include breakpoint(md) {
      display: none;
    }
  }
  ul {
    font-size: .875rem;
  }
  li {
    margin-bottom: 3px;
  }
  a {
    color: #555;
  }
  h4 {
    color: #808080;
    font-size: inherit;
    text-transform: uppercase;
  }
</style>
