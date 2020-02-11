<script>
  import { stores } from '@sapper/app'
  export let segment

  const { page } = stores()
  let pathname = undefined
  let hash = undefined

  page.subscribe(({ path, params, query }) => {
    pathname = path
  })

  function isActive(parent, slug, pathname) {
    if (segment !== parent) {
      return false
    }
    return pathname.indexOf(`${parent}/${slug}`) !== -1
  }
</script>

<style>
  nav {
    width: 180px;
    background-color: #f1f1f1;
    padding: 15px 20px;
    border-radius: 5px;
    box-shadow: 2px 2px 3px -1px rgba(0,0,0,.25);
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

<nav>
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