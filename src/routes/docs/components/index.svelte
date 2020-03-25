<script>
  import HeadTitle from '@/components/HeadTitle.svelte';
  import Pagination from '@/components/Pagination.svelte';
  import highlight from '@/utils/highlight.js';

  let dataAttr = false
  $: attr = dataAttr ? 'data-oo' : 'oo'
</script>

<style lang="scss">
  @include ooComponent('notification') {
    padding: 1rem;
    border-left-width: 5px;
    border-left-style: solid;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, .15);
  }
  @include ooComponentVariant('notification', 'success') {
    color: #015a31;
    border-color: #83cca9;
    background-color: #c8f7e1;
  }
  @include ooComponentVariant('notification', 'danger') {
    color: #5a0101;
    border-color: #ca7878;
    background-color: #f7c8c8;
  }
  @include ooComponentVariant('notification', 'large') {
    padding: 1.75rem 2rem;
    font-size: 1.5rem;
  }
  @include ooComponentVariant('notification', 'centered') {
    text-align: center;
    border-left: 0;
    border-top-width: 5px;
    border-top-style: solid;
  }
</style>

<HeadTitle title="Components"/>

<h1>Components</h1>
<p class="font-large">Use components for a group of recurring styles.</p>
<p>Loop semantic offers separation of concerns to differentiate components from other styling and to facilitate readibility.
The HTML becomes easier to understand and to maintain while lightening the class attribute which can be too often overcrowded <i>(A class with a component name along with a list of modifiers + a bunch of unrelated utilities)</i>. </p>

<p>By default, Loop components are used along with the <em>data</em> attribute <code>data-oo-componentName</code> to be a fully-valid HTML attribute.
You may still turn off the option to remove verbosity and get a shorter name for speed purposes <code>oo-componentName</code> <i>(Which was the case in Loop v0.4)</i></p>

<button class="float-right mb-5" data-oo-button on:click="{() => dataAttr = !dataAttr}">Toggle dataAttr</button>
{@html highlight(
`@include ooCreate((
  dataAttr: ${dataAttr}, // ${dataAttr ? 'default': 'setting'} ${attr}-componentName
));
`, 'scss')}

{@html highlight(
`<!-- Column component -->
<div ${attr}-row="align-center gutter-less" class="font-small text-center">
  <div ${attr}-col="span12 span3@sm"></div>
  <div ${attr}-col="span3@sm"></div>
  <div ${attr}-col="span3@sm"></div>
</div>
`, 'html')}

<h4 class="mt-30 mb-15">Loop components</h4>
<ul>
  <li><a href="docs/column" title="Column component">Column</a><code>oo-row</code><code>oo-col</code></li>
  <li><a href="docs/template" title="Template component">Template</a><code>oo-template</code><code>oo-area</code></li>
  <li><a href="docs/button" title="Button component">Button</a><code>oo-button</code></li>
  <li><a href="docs/form" title="Form component">Form</a><code>oo-input</code><code>oo-select</code><code>oo-radio</code><code>oo-checkbox</code><code>oo-toggle</code></li>
</ul>

<hr>
<h2>Custom components</h2>
<p>Loop gives you the possibilty to create your own Loop syntax component.
That offers you an alternative to regular css in the case of making a recurring style along with numerous modifiers.</p>

<h4 class="mt-30">Example of a situation</h4>
<p class="font-italic">I created a reusable component for all the diverse messages of my project.
I named it <code>.notification</code> and namespaced each modifiers with it.
I'm happy as it is extremely understandable.</p>

{@html highlight(
`<!-- Notification component -->
<div class="notification notification-success notification-large notification-centered">
  <strong>Hey, well done!</strong><br>You've created a <i>success</i> notification component
</div>
`, 'html')}
<div data-oo-notification="success large centered" class="mb-30">
  <strong>Hey, well done!</strong><br>You've created a <i>success</i> notification component.
</div>

<p class="font-italic">It's a bit redundant. So I refactored the modifiers' logic by using keywords such as <code>is</code> which I am using for utilities as well.
I'm very happy as it is still extremely understandable with less writing.</p>

{@html highlight(
`<!-- Notification component with shorter modifier -->
<div class="notification is-success is-large is-centered">
  <strong>Hey, well done!</strong><br>You've created a <i>success</i> notification component.
</div>
`, 'html')}

<p class="font-italic mt-30">In the case where I'm adding utilities, the class attribute gets crowded, making it harder to know what's going on at a glance.
I sometimes get confused between the modifiers and the utilities.</p>
{@html highlight(
`<!-- Notification component along with utilities -->
<div class="notification is-success is-large is-centered has-font-italic is-float-left is-hidden-print">
  <strong>Hey, well done!</strong><br>You've created a <i>success</i> notification component.
</div>
`, 'html')}

<p class="font-italic mt-30">I refactored my component again using Loop syntax. I'm extremely happy with the separation of concerns as I know what does what as well as avoiding redundant text.</p>
{@html highlight(
`<!-- Loop Notification component with Loop utilities -->
<div oo-notification="success large centered" class="font-italic float-left hidden@print">
  <strong>Hey, well done!</strong><br>You've created a <i>success</i> notification component.
</div>
`, 'html')}

<h3 class="mt-45" id="from-config"><a href="docs/components#from-config" title="Create from config">#</a> Create from config</h3>
<p>Pass css properties to <em>props</em> and to the <em>variants name</em> as a map value.</p>

{@html highlight(
`$ooLoop: ooAdd('components', (
  'notification': (
    props: (
      padding: 1rem,
      border-left-width: 5px,
      border-left-style: solid,
      box-shadow: 4px 4px 8px rgba(0, 0, 0, .15),
    ),
    variants: (
      'success': (
        color: #015a31,
        border-color: #83cca9,
        background-color: #c8f7e1,
      )
      'danger': (
        color: #5a0101,
        border-color: #ca7878,
        background-color: #f7c8c8,
      ),
      'large': (
        padding: 1.75rem 2rem,
        font-size: 1.5rem,
      ),
      'centered': (
        text-align: center,
        border-left: 0,
        border-top-width: 5px,
        border-top-style: solid,
      )
    )
  ),
));
`, 'scss')}
{@html highlight(
`<div oo-notification="danger centered">
  <strong>Hey, well done!</strong><br>You've created a <i>danger</i> notification component.
</div>`, 'html')}
<div data-oo-notification="danger centered">
  <strong>Hey, well done!</strong><br>You've created a <i>danger</i> notification component.
</div>
<h4 class="mt-30">Target children elements</h4>
<p>Use <code>></code> as property name within the list of CSS properties to target nested elements. Then, define a map of CSS selector with CSS properties.</p>
{@html highlight(
`$ooLoop: ooAdd('components', (
  'notification': (
    props: (
      padding: 1rem,
      border-left-width: 5px,
      border-left-style: solid,
      box-shadow: 4px 4px 8px rgba(0, 0, 0, .15),
      '>': (
        'strong': (
          text-transform: uppercase,
          font-size: 1.1em,
        )
      )
    ),
    variants: (...)
  ),
));
`, 'scss')}
{@html highlight(
`<div oo-notification="danger centered">
  <strong>Hey, well done!</strong><br>You've created a <i>danger</i> notification component.
</div>`, 'html')}
<div data-oo-notification="danger centered">
  <strong class="text-uppercase" style="font-size:1.1em">Hey, well done!</strong><br>You've created a <i>danger</i> notification component.
</div>

<h3 class="mt-45" id="from-mixin"><a href="docs/components#from-mixin" title="Create from mixin">#</a> Creation from mixin</h3>
<p>Combine two mixins <code>ooComponent()</code> and <code>ooComponentVariant()</code> and develop your own Loop component <strong>after the initialization of the Loop config</strong>.</p>

<h4 class="font-code mt-30">ooComponent(<span class="color-primary">$name</span>){'{ '}<span class="color-secondary">@content</span>{' }'}</h4>
<p><em class="text-uppercase font-small">Mixin</em> - Create a base component</p>
<ul>
  <li><strong>$name</strong> <em class="font-monospace">(string)</em> The name of the component</li>
  <li><strong>@content</strong> CSS rules</li>
</ul>
{@html highlight(
`@include ooComponent('notification') {
  padding: 1rem;
  border-left-width: 5px;
  border-left-style: solid;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, .15);
}
`, 'css')}

<h4 class="font-code mt-45">ooComponentVariant(<span class="color-primary">$componentName</span>, <span class="color-primary">$variantName</span>){'{ '}<span class="color-secondary">@content</span>{' }'}</h4>
<p><em class="text-uppercase font-small">Mixin</em> - Create a component variation</p>
<ul>
  <li><strong>$componentName</strong> <em class="font-monospace">(string)</em> The name of the component</li>
  <li><strong>$variantName</strong> <em class="font-monospace">(string)</em> The name of the variant</li>
  <li><strong>@content</strong> CSS rules</li>
</ul>

{@html highlight(
`@include ooComponentVariant('notification', 'success') {
  color: #015a31;
  border-color: #83cca9;
  background-color: #c8f7e1;
}
@include ooComponentVariant('notification', 'danger') {
  color: #5a0101;
  border-color: #ca7878;
  background-color: #f7c8c8;
}
@include ooComponentVariant('notification', 'large') {
  padding: 1.75rem 2rem;
  font-size: 1.5rem;
  strong {
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: -.5px;
  }
}
@include ooComponentVariant('notification', 'centered') {
  text-align: center;
  border-left: 0;
  border-top-width: 5px;
  border-top-style: solid;
}
`, 'css')}

{@html highlight(
`<div oo-notification="success large">
  <strong>Hey, well done!</strong><br>You've created a <i>success</i> notification component
</div>`, 'html')}
<div data-oo-notification="success large" class="mb-30">
  <strong class="text-uppercase text-tight font-heavy">Hey, well done!</strong><br>You've created a <i>success</i> notification component.
</div>

{@html highlight(
`<div oo-notification="danger">
  <strong>Hey, well done!</strong><br>You've created a <i>danger</i> notification component.
</div>`, 'html')}
<div data-oo-notification="danger" class="mb-30">
  <strong>Hey, well done!</strong><br>You've created a <i>danger</i> notification component.
</div>
<div class="hr"></div>

<!-- <div data-oo-event="past" class="mb-15">
  <time>September 6th, 10am</time>
  <h3>UX/UI Designer Festival</h3>
  <p>Tokyo, Odaiba, Big Sight</p>
  <button>See Archive</button>
</div>
<div data-oo-event class="mb-15">
  <time datetime={datetime}>September 7th, 10am</time>
  <h3>Frontend Developer Festival</h3>
  <p>Tokyo, Odaiba, Big Sight</p>
  <button>Join</button>
</div>
<div data-oo-event="cancel">
  <time>September 8th, 10am</time>
  <h3>Backend Developer Festival</h3>
  <p>Tokyo, Odaiba, Big Sight</p>
  <button>Get Refund</button>
</div> -->

<Pagination href="docs/components/column" label="Use Column" />