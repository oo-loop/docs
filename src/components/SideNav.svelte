<script context="module">
  import { stores } from '@sapper/app'
</script>
<script>
  import { onMount } from 'svelte'
  export let segment
  let pathname = undefined

  const { page } = stores()

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
  })

  page.subscribe(({ path, params, query }) => {
    pathname = path
    isOn = false

    if (typeof location !== 'undefined') {
      hash = location.hash
    }
  })

  function onHashChange() {
    hash = location.hash
  }
  function onResize() {
    elOffsetHeight = el.offsetHeight
  }

  function isActive(current, pathname) {
    return pathname.indexOf(current) !== -1
  }
  function isHashActive(current, hash) {
    return current === hash
  }
</script>

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
      position: sticky;
      top: 1rem;
      overflow: auto;
      -webkit-overflow-scrolling: touch;
      
      margin-right: auto;
      margin-left: auto;
      width: 200px;
      max-height: calc(100vh - 2rem);

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

<svelte:window
  on:resize={onResize}
  on:hashchange={onHashChange} />

<nav bind:this={el} style={isOn ? `max-height:${elHeight}px` : ''}>
  <span class="trigger" on:click={() => isOn = !isOn}>{label}</span>
  <ul class="list-unstyle">
    <li>
      <h4><a class:color-primary={segment === 'installation'} href="docs/installation">Installation</a></h4>
    </li>
    <li>
      <h4><a class:color-primary={segment === undefined} href="docs">Getting started</a></h4>
      <ul class="list-unstyle">
        <li><a class:color-primary={isHashActive('#oocreate', hash)} href="docs#oocreate">ooCreate</a></li>
        <li><a class:color-primary={isHashActive('#ooset', hash)} href="docs#ooset">ooSet</a></li>
        <li><a class:color-primary={isHashActive('#ooadd', hash)} href="docs#ooadd">ooAdd</a></li>
        <li><a class:color-primary={isHashActive('#oopipe', hash)} href="docs#oopipe">ooPipe</a></li>
      </ul>
    </li>
    <li>
      <h4><a class:color-primary={segment === 'config'} href="docs/config">Config Map</a></h4>
      <ul class="list-unstyle">
        <li><a class:color-primary={isHashActive('#global', hash)} href="docs/config#global">Global properties</a></li>
        <li><a class:color-primary={isHashActive('#props', hash)} href="docs/config#props"><i>Props</i> attribute</a></li>
        <li><a class:color-primary={isHashActive('#states', hash)} href="docs/config#states"><i>States</i> attribute</a></li>
        <li><a class:color-primary={isHashActive('#this', hash)} href="docs/config#this"><i>This</i> referer</a></li>
        <li><a class:color-primary={isHashActive('#access', hash)} href="docs/config#access">Access data</a></li>
      </ul>
    </li>
    <li>
      <h4><a class:color-primary={segment === 'importation'} href="docs/importation">Importation</a></h4>
      <ul class="list-unstyle">
        <li><a class:color-primary={isHashActive('#config', hash)} href="docs/importation#config">Use of Config</a></li>
        <li><a class:color-primary={isHashActive('#mixin', hash)} href="docs/importation#mixin">Use of Mixin</a></li>
      </ul>
    </li>
    <li>
      <h4><a class:color-primary={segment === 'html-elements'} href="docs/html-elements">HTML elements</a></h4>
      <ul class="list-unstyle">
        <li><a class:color-primary={isHashActive('#base', hash)} href="docs/html-elements#base">Base</a></li>
        <li><a class:color-primary={isHashActive('#content', hash)} href="docs/html-elements#content">Content</a></li>
        <li><a class:color-primary={isHashActive('#headings', hash)} href="docs/html-elements#headings">Headings</a></li>
      </ul>
    </li>
    <li>
      <h4><a class:color-primary={segment === 'components'} href="docs/components">Components</a></h4>
      <ul class="list-unstyle">
        <li><a class:color-primary={isActive('components/column', pathname)} href="docs/components/column">Column</a></li>
        <li><a class:color-primary={isActive('components/template', pathname)} href="docs/components/template">Template</a></li>
        <li><a class:color-primary={isActive('components/button', pathname)} href="docs/components/button">Button</a></li>
        <li><a class:color-primary={isActive('components/form', pathname)} href="docs/components/form">Form</a></li>
      </ul>
    </li>
    <li>
      <h4><a class:color-primary={segment === 'helpers'} href="docs/helpers">Helper Classes</a></h4>
      <ul class="list-unstyle">
        <li><a class:color-primary={isActive('helpers/container', pathname)} href="docs/helpers/container">Container</a></li>
        <li><a class:color-primary={isActive('helpers/visibility', pathname)} href="docs/helpers/visibility">Visibility</a></li>
        <li><a class:color-primary={isActive('helpers/list', pathname)} href="docs/helpers/list">List</a></li>
        <li><a class:color-primary={isActive('helpers/misc', pathname)} href="docs/helpers/misc">Miscellaneous</a></li>
      </ul>
    </li>
    <li>
      <h4><a class:color-primary={segment === 'utilities'} href="docs/utilities">Utilities</a></h4>
      <ul class="list-unstyle">
        <li><a class:color-primary={isActive('utilities/color', pathname)} href="docs/utilities/color">Color</a></li>
        <li><a class:color-primary={isActive('utilities/typography', pathname)} href="docs/utilities/typography">Typography</a></li>
        <li><a class:color-primary={isActive('utilities/spacing', pathname)} href="docs/utilities/spacing">Spacing</a></li>
        <li><a class:color-primary={isActive('utilities/float', pathname)} href="docs/utilities/float">Float</a></li>
        <li><a class:color-primary={isActive('utilities/wrapper', pathname)} href="docs/utilities/wrapper">Wrapper</a></li>
      </ul>
    </li>
  </ul>
</nav>