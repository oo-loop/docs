<script>
  import { onMount } from 'svelte'
  import highlight from '@/utils/highlight.js'
  import Row from '@/components/Loop/Row.svelte'
  import Col from '@/components/Loop/Col.svelte'
  
  let content = ''

  onMount(async () => {
    await typewriter(`@import '~loop/scss'; // Import loop\n`)
    await typewriter(`
$ooLoop: ooAdd('color.font.values', (
  white: #fff,
));\n`)
    typewriter(`\n@include ooCreate(); // Launch loop`)
  })

  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

  const typewriter = async (string) => {
    const speed = 40
    for (let i = 0; i < string.length; i++) {
      content += string.charAt(i)
      await delay(speed)
    }
  }
</script>

<style>
</style>

<Row>
  <Col>
  {@html highlight(`// config.scss
${content}
`, 'scss', 'mt-0 mb-0')}
  {@html highlight(
`<!-- App -->
<div class="text-center">
  <img src="orange.jpg" width="150" alt="oranges" />
  <h3>Orange Picking</h3>
  <p>All you need to know about picking oranges</p>
</div>
`, 'html', 'mt-0')}
  </Col>
  <Col>
    <div class="text-center">
      <img src="orange.jpg" width="150" alt="oranges" />
      <h3>Orange Picking</h3>
      <p>All you need to know about picking oranges</p>
    </div>
  </Col>
</Row>

