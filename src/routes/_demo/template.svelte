<script>
  import { onMount, beforeUpdate, afterUpdate } from 'svelte'
  import { cubicOut } from 'svelte/easing'
  import { create_animation } from 'svelte/internal'

  const screens = ['rt', 'sm', 'md', 'lg']
  let activeScreenIndex = 0, direction = 1
  let autoAnimation = null
  let isAnimOn = false
  let template = undefined
  let areas = []

  $: screen = screens[activeScreenIndex]

  const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

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
    isAnimOn = true

    const distanceX = from.x - params.to.x;
    const distanceY = from.y - params.to.y;
    const distanceW = from.width - params.to.width;
    const distanceH = from.height - params.to.height;

    const canvasComputedStyle = window.getComputedStyle(template.parentNode)
    const canvasPadding = parseInt(canvasComputedStyle.getPropertyValue('padding-left').slice(0, -2), 10)

    return {
      delay: 0,
      duration: 800,
      easing: cubicOut,
      css: (t, u) => `
      position:absolute;\n
      top: ${(from.y - (t * distanceY)) - template.getBoundingClientRect().y + canvasPadding}px;\n
      left: ${(from.x - (t * distanceX)) - template.getBoundingClientRect().x + canvasPadding}px;\n
      width: ${from.width - (t * distanceW)}px;\n
      height: ${from.height - (t * distanceH)}px;\n
      grid-area: none;\n
      // transform: translate3d(${u * distanceX}px, ${u * distanceY}px, 0);\n
      `,
      tick: async (t,u) => {
        // avoid anim flick
        if (u > 0) {
          setAnimNode(node, params)
          await delay(1000)
          resetAnimNode(node)
        }
      }
    }
  }

  function setAnimNode(node, params) {
     Object.assign(node.style, {
      top: `${params.to.x}px`,
      left: `${params.to.y}px`,
      width: `${params.to.width}px`,
      height: `${params.to.height}px`,
    })
  }

  function resetAnimNode(node) {
    Object.assign(node.style, {
      top: '',
      left: '',
      width: '',
      height: '',
    });
    isAnimOn = false
  }

 async function setActiveScreen(screenName) {
    if (autoAnimation !== null) {
      clearInterval(autoAnimation)
      autoAnimation = null
    }
    // avoid flick when clicking everywhere (@todo improve that)
    if (isAnimOn) {
      for (let i = 0; i < template.children.length; i++) {
        const node = template.children[i]
        setAnimNode(node,  areas[i])
        await delay(300)
        resetAnimNode(node)
      }
    }
    activeScreenIndex = screens.indexOf(screenName)
  }
</script>

<style lang="scss">
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
      backface-visibility: hidden;
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
      "header header header header"
      "nav main main widgets"
      "nav footer footer widgets";
    grid-template-columns: repeat(4, 1fr);
  }
}

.template-lg {
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

.switchers {
  margin-bottom: 20px;
  text-align: center;
  > span {
    font-size: 10px;
    cursor: pointer;
    color: oo('palette.primary');
    vertical-align: bottom;
    transition: all ease-out 300ms;
    &:not(:first-child) {
      margin-left: 15px;
    }

    &:hover,
    &:active,
    &.active {
      color: #fff;
    }
    @media (max-width:359px) {
      transform: scale(.9) translateY(10%);
      &:not(:first-child) {
        margin-left: 5px;
      }
    }
    @media (max-width:339px) {
      transform: scale(.8) translateY(20%);
      &:not(:first-child) {
        margin-left: 0;
      }
    }
  }
}

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
</style>

<div class="switchers">
{#each screens as screenSize}
  <span class:active={screen === screenSize} class="screen-{screenSize}" on:click|preventDefault={() => setActiveScreen(screenSize)}>{screenSize}</span>
{/each}
</div>
<div class="template-canvas">
  <div class="preview preview-template template-{screen} clear mt-5">
    <div bind:this={template}>
      <div class="small light template-header">Header</div>
      <div class="small dark template-nav">Nav</div>
      <div class="high darker template-main">Main</div>
      <div class="small dark template-widgets">Widgets</div>
      <div class="small light template-footer">Footer</div>
    </div>
  </div>
</div>