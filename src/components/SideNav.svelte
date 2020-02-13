<script>
  import { onMount } from 'svelte'
  import { stores } from '@sapper/app'
  export let segment

  const { page } = stores()
  let pathname = undefined

  let el
  let elHeight
  let isOn = false

  $: label = isOn ? '[–]' : '[+]'

  onMount(() => {
    elHeight = el.scrollHeight
  })

  page.subscribe(({ path, params, query }) => {
    pathname = path
    isOn = false
  })

  function isActive(parent, slug, pathname) {
    if (segment !== parent) {
      return false
    }
    return pathname.indexOf(`${parent}/${slug}`) !== -1
  }
</script>

<style lang="scss">
  nav {
    padding: 15px 20px;
    margin-left: -1rem;
    margin-right: -1rem;
    max-height: 10px;
    overflow: hidden;
    background-color: #f1f1f1;
    transition: max-height ease-in-out 300ms;

    @include breakpoint(md) {
      position: sticky;
      top: 1rem;
      overflow: auto;
      -webkit-overflow-scrolling: touch;
      
      margin-right: auto;
      margin-left: auto;
      width: 180px;
      max-height: calc(100vh - 2rem);
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

<nav bind:this={el} style={isOn ? `max-height:${elHeight}px` : ''}>
  <span class="trigger" on:click={() => isOn = !isOn}>{label}</span>
  <ul class="list-unstyle">
    <li>
      <h4><a class:color-primary={segment === undefined} href="docs">Getting started</a></h4>
      <ul class="list-unstyle">
        <li><a href="docs#oocreate">ooCreate</a></li>
        <li><a href="docs#ooset">ooSet</a></li>
        <li><a href="docs#ooadd">ooAdd</a></li>
        <li><a href="docs#oopipe">ooPipe</a></li>
      </ul>
    </li>
    <li>
      <h4><a class:color-primary={segment === 'config'} href="docs/config">Config Map</a></h4>
      <ul class="list-unstyle">
        <li><a href="docs/config#global">Global properties</a></li>
        <li><a href="docs/config#props"><i>Props</i> attribute</a></li>
        <li><a href="docs/config#states"><i>States</i> attribute</a></li>
        <li><a href="docs/config#this"><i>This</i> referer</a></li>
        <li><a href="docs/config#access">Access data</a></li>
      </ul>
    </li>
    <li>
      <h4><a class:color-primary={segment === 'importation'} href="docs/importation">Importation</a></h4>
      <ul class="list-unstyle">
        <li><a href="docs/importation#config">Use of Config</a></li>
        <li><a href="docs/importation#mixin">Use of Mixin</a></li>
      </ul>
    </li>
    <li>
      <h4><a class:color-primary={segment === 'html-elements'} href="docs/html-elements">HTML elements</a></h4>
      <ul class="list-unstyle">
        <li><a href="docs/html-elements#base">Base</a></li>
        <li><a href="docs/html-elements#type">Type</a></li>
        <li><a href="docs/html-elements#headings">Headings</a></li>
      </ul>
    </li>
    <li>
      <h4><a class:color-primary={segment === 'components'} href="docs/components">Components</a></h4>
      <ul class="list-unstyle">
        <li><a rel='prefetch' class:color-primary={isActive('components', 'column', pathname)} href="docs/components/column">Column</a></li>
        <li><a rel='prefetch' class:color-primary={isActive('components', 'template', pathname)} href="docs/components/template">Template</a></li>
        <li><a rel='prefetch' class:color-primary={isActive('components', 'button', pathname)} href="docs/components/button">Button</a></li>
        <li><a rel='prefetch' class:color-primary={isActive('components', 'form', pathname)} href="docs/components/form">Form</a></li>
      </ul>
    </li>
    <li>
      <h4><a class:color-primary={segment === 'helpers'} href="docs/helpers">Helpers</a></h4>
      <ul class="list-unstyle">
        <li><a  class:color-primary={isActive('helpers', 'container', pathname)} href="docs/helpers/container">Container</a></li>
        <li><a  class:color-primary={isActive('helpers', 'visibility', pathname)} href="docs/helpers/visibility">Visibility</a></li>
        <li><a  class:color-primary={isActive('helpers', 'list', pathname)} href="docs/helpers/list">List</a></li>
        <li><a  class:color-primary={isActive('helpers', 'misc', pathname)} href="docs/helpers/misc">Miscellaneous</a></li>
      </ul>
    </li>
    <li>
      <h4><a class:color-primary={segment === 'utilities'} href="docs/utilities">Utilities</a></h4>
      <ul class="list-unstyle">
        <li><a  class:color-primary={isActive('utilities', 'color', pathname)} href="docs/utilities/color">Color</a></li>
        <li><a  class:color-primary={isActive('utilities', 'text', pathname)} href="docs/utilities/text">Text</a></li>
        <li><a  class:color-primary={isActive('utilities', 'spacing', pathname)} href="docs/utilities/spacing">Spacing</a></li>
        <li><a  class:color-primary={isActive('utilities', 'float', pathname)} href="docs/utilities/float">Float</a></li>
        <li><a  class:color-primary={isActive('utilities', 'wrapper', pathname)} href="docs/utilities/wrapper">Wrapper</a></li>
      </ul>
    </li>
  </ul>
</nav>