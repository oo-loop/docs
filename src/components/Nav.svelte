<script context="module">
  import { stores } from '@sapper/app'
</script>
<script>
  import { onMount, onDestroy } from 'svelte'
  import { pathname } from '@/stores.js'
  export let segment
  
  const { page } = stores()

  page.subscribe(async ({ path, params, query }) => {
    pathname.set(path)
  })

  onMount(() => {
    //fix scroll position on reload
    addEventListener('beforeunload', () => {
      history.scrollRestoration = 'auto'
    })
    addEventListener('load', () => {
      history.scrollRestoration = 'manual'
    })
  })

  onDestroy(() => {
    if (typeof removeEventListener !== 'undefined') {
      removeEventListener('beforeunload', () => {
        history.scrollRestoration = 'auto'
      })
      removeEventListener('load', () => {
        history.scrollRestoration = 'manual'
      })
    }
  })
</script>

<style lang="scss">
  nav {
    position: relative;
    z-index: 1;
    padding: 0 1em;
    margin-bottom: .5rem;
    @include breakpoint(md) {
      margin-bottom: 0;
    }
  }
  ul {
    margin: 0;
  }
  a {
    padding: .5em 0;
    display: block;
    color: #333;
    text-decoration: none;
  }
  .brand {
    font-weight: 700;
  }
  .active {
    color: #0ea7d6;
  }
  img {
    // margin-right: -10px;
    vertical-align: middle;
    @include breakpoint(sm) {
      margin-right: 5px;
    }
  }
</style>

<nav>
  <ul class="list-inline">
    <li><a class="brand" href="."><img alt="loop css" src="logo-inverted.svg" width="35" height="35">Loop</a></li>
    <li><a class="{segment === 'docs' ? "active" : ''}" href="docs">Docs</a></li>
    <li><a href="https://github.com/oo-loop/loop" rel="external">Github</a></li>
    <li><a href="v0.4">v0.4</a></li>
  </ul>
</nav>