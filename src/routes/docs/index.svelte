<script>
	import HeadTitle from '@/components/HeadTitle.svelte';
	import Pagination from '@/components/Pagination.svelte';
  import highlight from '@/utils/highlight.js';

  const description = 'Loop offers a minimum styling along with common components and utilities to bootstrap any project as a base.';
</script>

<HeadTitle title="Getting Started" {description}/>

<h1>Start with Loop</h1>
<p class="font-large">{description}</p>
<ul>
	<li><a href="docs/html-elements/" title="HTML elements">HTML formatting</a></li>
	<li><a href="docs/components/column/" title="Column">Column component</a></li>
	<li><a href="docs/components/template/" title="Template">Template component</a></li>
	<li><a href="docs/components/button/" title="Button">Button component</a></li>
	<li><a href="docs/components/form/" title="Form">Form components</a></li>
	<li><a href="docs/helpers/container/" title="Container">Container</a></li>
	<li><a href="docs/helpers/visibility/" title="Visibility">Visibility</a></li>
	<li><a href="docs/helpers/list/" title="List">List</a></li>
	<li><a href="docs/helpers/misc/" title="Miscellaneous">Miscellaneous</a></li>
	<li><a href="docs/utilities/color/" title="Color">Color utilities</a></li>
	<li><a href="docs/utilities/typography/" title="Typography">Typography utilities</a></li>
	<li><a href="docs/utilities/spacing/" title="Spacing">Spacing utilities</a></li>
	<li><a href="docs/utilities/float/" title="Float">Float utilities</a></li>
	<li><a href="docs/utilities/wrapper/" title="Wrapper">Wrapper utilities</a></li>
</ul>

<p>Import <strong>Loop framework</strong> into your sass file and <strong>launch it</strong> to start with.</p>

{@html highlight(`@import 'oo-loop/loop'; // Import
@include ooCreate(); // Launch
`, 'scss')}

<p class="info">Make sure to use the <strong>correct path</strong> to the Loop <strong>node_modules</strong>.
Javascript task runners can help you simplify the import, otherwise please use the following path <strong class="color-primary">node_modules/oo-loop/loop</strong>.</p>

<div class="hr"></div>
<h2 class="mt-45" id="adjust">Adjust to your need</h2>
<p>Loop encourages you to set your own rules and shape the css the way you like. Following the structure of the <a href="docs/config/" title="Config Map">config map</a>, modify its properties to match your needs.</p>

<p>It can be done in various ways</p>
<ul>
  <li>By passing your preferences to the mixins <code>ooInit</code> or <code>ooCreate</code> when launching loop</li>
  <li>By setting/adding values one at the time with the functions <code>ooSet</code><code>ooAdd</code><code>ooPipe</code></li>
  <li>By coping and pasting the full config file</li>
</ul>

<h3 class="h4 font-code mt-45" id="ooinit"><a href="docs/#ooinit" title="ooInit() Mixin">#</a> ooInit(<span class="color-primary">$config</span>:<span class="color-secondary">null</span>)</h3>
<p><em class="text-uppercase font-small">Mixin</em> - Initialize <a href="docs/config/" title="Loop Map">$ooLoop</a> config map.</p>
<ul>
  <li><strong>$config</strong> <em class="font-monospace">(map) <span class="color-secondary">Optional</span></em>
  <br>Set of rules that will be merged into the default Loop config</li>
</ul>

<p><code>ooInit</code> initializes the loop config map <strong>without generating any style</strong>.
This step can be skipped on autobuild by only using <code>ooCreate</code> which will do both initialization and style generation. This is however mandatory on <a href="docs/importation/#mixin" title="Import Loop with mixin">manual build</a>.</p>

{@html highlight(`// Loop default config

$ooLoop: (
  breakpoints: (
    xs: 30em,     // 480px
    sm: 37.500em, // 600px
    md: 60em,     // 960px
    lg: 80em,     // 1280px
    xl: 120em,    // 1980px
  ),
  screens: (sm, md, lg),
  ...
);
`, 'scss')}

{@html highlight(`// Your config.scss file

@import 'oo-loop/loop';

@include ooInit((
  breakpoints: (
    xl: 100em, // update value for xl breakpoint to 1600px
    xxl: 140em, // add extra breakpoint
  ),
  screens: (sm, md, lg, xl, xxl), // add xl & xxl to available responsive value
));

@include Base(/** config **/);
@include Content(/** config **/);
@include Visibility(/** config **/);
`, 'scss')}

<p class="info">On manual build, each individual <strong>@include</strong> can accept their own config map as parameters.</p>

<div class="hr"></div>

<h3 class="h4 font-code mt-45" id="oocreate"><a href="docs/#oocreate" title="ooCreate() Mixin">#</a> ooCreate(<span class="color-primary">$config</span>:<span class="color-secondary">null</span>)</h3>
<p><em class="text-uppercase font-small">Mixin</em> - Launch framework by initializing <a href="docs/config/" title="Loop Map">$ooLoop</a> and generate styling.</p>
<ul>
  <li><strong>$config</strong> <em class="font-monospace">(map) <span class="color-secondary">Optional</span></em>
  <br>Set of rules that will be merged into the default Loop config</li>
</ul>

{@html highlight(`// Your config.scss file

@import 'oo-loop/loop';

@include ooCreate((
  breakpoints: (
    xl: 100em, // update value for xl breakpoint to 1600px
    xxl: 140em, // add extra breakpoint
  ),
  screens: (sm, md, lg, xl, xxl), // add xl & xxl to available responsive value
));
`, 'scss')}

<p><strong>Remember:</strong> <u class="font-italic">No individual <strong>@include</strong> must be used with</u><code>ooCreate</code> or else the styles will be <u class="font-italic">generated multiple times</u>.</p>

<hr>
<section class="info">Functions such as <strong class="color-primary">ooSet()</strong>, <strong class="color-primary">ooAdd()</strong>, <strong class="color-primary">ooPipe()</strong> can be used as <em class="font-bold">an alternative</em> or <em class="font-bold">be combined</em> to the configuration being passed to <strong class="color-primary">ooCreate()</strong>.</section>
<hr>

<h3 class="h4 font-code" id="ooset"><a href="docs/#ooset" title="ooSet() Function">#</a> ooSet(<span class="color-primary">$path</span>, <span class="color-primary">$value</span>, <span class="color-primary">$hard</span>:<span class="color-secondary">true</span>)</h3>
<p><em class="text-uppercase font-small">Function</em> - Set new values to Loop config. To be used with <code>$ooLoop</code>.</p>
<ul>
	<li class="mb-10"><strong>$path</strong> <em class="font-monospace">(string)</em>
  <br>Concatenated path to a Loop config property</li>
	<li class="mb-10"><strong>$value</strong> <em class="font-monospace">(mixed)</em>
  <br>New Loop property value</li>
	<li><strong>$hard</strong> <em class="font-monospace">(boolean) <span class="color-secondary">Optional</span></em>
  <br>Destructive mode?</li>
</ul>
{@html highlight(`// Loop default config

$ooLoop: (
  breakpoints: (
    xs: 30em,     // 480px
    sm: 37.500em, // 600px
    md: 60em,     // 960px
    lg: 80em,     // 1280px
    xl: 120em,    // 1980px
  ),
  screens: (sm, md, lg),
  ...
);
`, 'scss')}
{@html highlight(`@import 'oo-loop/loop';

$ooLoop: ooSet('breakpoints', (
  sm: 37.500em,
  md: 60em,
  xl: 100em,
)); // set breakpoint values (xs, lg no longer available)

$ooLoop: ooSet('screens', (sm, md, xl)); // set responsive screens

@include ooCreate(); // generate styles
`, 'scss')}

<hr>

<h3 class="font-code h4" id="ooadd"><a href="docs/#ooadd" title="ooAdd() Function">#</a> ooAdd(<span class="color-primary">$path</span>, <span class="color-primary">$value</span>)</h3>
<p><em class="text-uppercase font-small">Function</em> - Add values to Loop config. To be used with <code>$ooLoop</code>.</p>
<ul>
	<li class="mb-10"><strong>$path</strong> <em class="font-monospace">(string)</em>
  <br>Concatenated path to a Loop config property</li>
	<li><strong>$value</strong> <em class="font-monospace">(mixed)</em>
  <br>Value to append</li>
</ul>
{@html highlight(`// Loop default config

$ooLoop: (
  breakpoints: (
    xs: 30em,     // 480px
    sm: 37.500em, // 600px
    md: 60em,     // 960px
    lg: 80em,     // 1280px
    xl: 120em,    // 1980px
  ),
  screens: (sm, md, lg),
  ...
);
`, 'scss')}
{@html highlight(`@import 'oo-loop/loop';

$ooLoop: ooAdd('breakpoints', (
  xxl: 140em, // add xxl breakpoint to map
));
$ooLoop: ooAdd('screens', xxl); // add responsive screen to list

@include ooCreate(); // generate styles
`, 'scss')}

<hr>
<section class="info">When targetting a single value with <strong class="color-primary">ooAdd()</strong>, the string will <strong>become a list</strong>.</section>
<hr>

<h3 class="font-code h4" id="oopipe"><a href="docs/#oopipe" title="ooPipe() Function">#</a> ooPipe(<span class="color-primary">$rules...</span>)</h3>
<p><em class="text-uppercase font-small">Function</em> - Chain rules of setter and adder to update Loop config. To be used with <code>$ooLoop</code>.</p>
<ul>
	<li><strong>$rules</strong> <em class="font-monospace">(list)</em>
  <br>List of setter <code>_set(<span class="color-base">$path</span>, <span class="color-base">$value</span>)</code> and adder<code>_add(<span class="color-base">$path</span>, <span class="color-base">$value</span>)</code></li>
</ul>

{@html highlight(`@import 'oo-loop/loop';

$ooLoop: ooPipe(
  _set('breakpoints.xl', 100em),
  _add('breakpoints', (xxl: 140em)),
  _add('screens', (xl, xxl))
);

@include ooCreate(); // generate styles
`, 'scss')}

<hr>

<h3 id="copy-paste"><a href="docs/#copy-paste" title="Copy/paste config">#</a> Copy/paste</h3>
<p>If you like to see everything at once, you can copy/paste the <strong>entire</strong> default config map, override its values and add new ones.
<strong class="color-danger">Make sure not to remove referred properties!</strong></p>
{@html highlight(`@import 'oo-loop/loop';

$ooLoop: (
  /** the ENTIRE configuration **/
);
@include ooCreate();
`, 'scss')}

<Pagination href="docs/config/" title="Read about the Loop config map" label="The Loop config map" />
