<script>
	import HeadTitle from '../../components/HeadTitle.svelte';
  import highlight from '../../utils/highlight.js';
</script>

<style>
  .section {
    padding: 15px 25px;
    margin-bottom: 30px;
    background-color: #fff;
    box-shadow: 1px 1px 2px rgba(0,0,0, .15);
  }
</style>

<HeadTitle title="Config map"/>

<h1>Loop Config Map</h1>
<p>Having a single <i>variables.scss</i> file listing all the available customization can be tedious to find what we are looking for; and remembering every name is almost impossible.</p>

<p>The single map is there to simplify the use of variables and the configuration of the framework.</p>

<p>Every data is being set inside the variable <code class="inline color-primary">$ooLoop</code></p>
{@html highlight(`$ooLoop: (
  // properties
);
`, 'scss')}

<h2 class="mt-30" id="global">Global Properties</h2>
<p>The global properties are data to be refered to within your confifuration to avoid duplicating them.</p>


<h3 class="h4 mt-30 font-code">breakpoints</h3>
<p><em class="text-uppercase text-small">MAP</em> - </p>
{@html highlight(`breakpoints: (
  xs: 30em,     // 480px
  sm: 37.500em, // 600px
  md: 60em,     // 960px
  lg: 80em,     // 1280px
  xl: 120em,    // 1980px
)
`, 'scss', false)}
