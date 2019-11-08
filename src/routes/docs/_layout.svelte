<script>
	import Row from '../../components/Loop/Row.svelte'
	import Col from '../../components/Loop/Col.svelte'
	import SideNav from '../../components/SideNav.svelte';
  export let segment;
</script>

<Row prop="gutter-large">
  <Col aside prop="fit">
    <SideNav {segment}/>
  </Col>
  <Col article>
    <slot></slot>
  </Col>
</Row>

