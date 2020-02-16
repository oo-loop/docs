<script>
  import HeadTitle from '@/components/HeadTitle.svelte';
  import highlight from '@/utils/highlight.js';

  let html5 = false
  $: attr = html5 ? 'data-oo' : 'oo'
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
<p class="text-large">Use recurring styles as components with a specific attribute syntax for development purposes.</p>
<p>Loop semantic offers separation of concerns to differentiate components from other styling and to facilitate readibility.
The HTML becomes easier to understand and to maintain while lightening the class attribute which can be too often overcrowded <i>(A class with a component name along with a list of modifiers + a bunch of unrelated utilities)</i>. </p>

<p>By default, Loop components are used along with the <em>data attribute</em> <code>data-oo-componentName</code> to be a valid html5 attribute.
You could turn off the html5 validity and have a shorter name for speed purposes<code>oo-componentName</code> <i>(Which was the case in Loop v0.4)</i></p>

<button class="float-right mb-5" data-oo-button on:click="{() => html5 = !html5}">Toggle Html5</button>
{@html highlight(
`@include ooCreate((
  html5: ${html5}, // ${html5 ? 'default': 'setting'} ${attr}-componentName
));
`, 'scss')}

{@html highlight(
`<!-- Column component -->
<div ${attr}-row="align-center gutter-less" class="text-small text-center">
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
  <strong>Hey, well done!</strong><br>You've created a successfull notification component
</div>
`, 'html')}

<p class="font-italic mt-30">It's a bit redundant. So I refactored the modifiers' logic by using keywords such as <code>is</code> which I am using for utilities as well.
I'm very happy as it is still extremely understandable with less writing.</p>

{@html highlight(
`<!-- Notification component with shorter modifier -->
<div class="notification is-success is-large is-centered">
  <strong>Hey, well done!</strong><br>You've created a successfull notification component
</div>
`, 'html')}

<p class="font-italic mt-30">In the case where I'm adding utilities, the class attribute gets crowded, making it harder to know what's going on at a glance.
I sometimes get confused between the modifiers and the utilities.</p>
{@html highlight(
`<!-- Notification component along with utilities -->
<div class="notification is-success is-large is-centered has-font-italic is-float-left is-hidden-print">
  <strong>Hey, well done!</strong><br>You've created a successfull notification component
</div>
`, 'html')}

<p class="font-italic mt-30">I refactored my component again using Loop syntax. I'm extremely happy with the separation of concerns as I know what does what as well as avoiding redundant text.</p>
{@html highlight(
`<!-- Loop Notification component with Loop utilities -->
<div oo-notification="success large centered" class="font-italic float-left hidden@print">
  <strong>Hey, well done!</strong><br>You've created a successfull notification component
</div>
`, 'html')}

<h3 class="mt-45">Component creation</h3>
<p>Combine the two mixins <code>ooComponent()</code> and <code>ooComponentVariant()</code> and develop your own Loop component <strong>after the initialization of the Loop config</strong>.</p>

<h4 class="font-code mt-30">ooComponent(<span class="color-primary">$name</span>){'{ '}<span class="color-secondary">@content</span>{' }'}</h4>
<p><em class="text-uppercase text-small">Mixin</em> - Create a base component</p>
<ul>
  <li><strong>$name</strong> <em class="font-monospace">(string)</em> The name of the component</li>
  <li><strong>@content</strong> CSS rules</li>
</ul>
{@html highlight(
`/* From class Notification component */
.notification {
  padding: 1rem;
  border-left-width: 5px;
  border-left-style: solid;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, .15);
}

/* To Loop Notification component */
@include ooComponent('notification') {
  padding: 1rem;
  border-left-width: 5px;
  border-left-style: solid;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, .15);
}
`, 'css')}

<h4 class="font-code mt-45">ooComponentVariant(<span class="color-primary">$componentName</span>, <span class="color-primary">$variantName</span>){'{ '}<span class="color-secondary">@content</span>{' }'}</h4>
<p><em class="text-uppercase text-small">Mixin</em> - Create a component variation</p>
<ul>
  <li><strong>$componentName</strong> <em class="font-monospace">(string)</em> The name of the component</li>
  <li><strong>$variantName</strong> <em class="font-monospace">(string)</em> The name of the variant</li>
  <li><strong>@content</strong> CSS rules</li>
</ul>

{@html highlight(
`/* From class Notification modifiers */
.notification-success {
  color: #015a31;
  border-color: #83cca9;
  background-color: #c8f7e1;
}
.notification-danger {
  color: #5a0101;
  border-color: #ca7878;
  background-color: #f7c8c8;
}
.notification-large {
  padding: 1.75rem 2rem;
  font-size: 1.5rem;
}
.notification-centered {
  text-align: center;
  border-left: 0;
  border-top-width: 5px;
  border-top-style: solid;
}

/* To Loop Notification modifiers */
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
`, 'css')}


{@html highlight(
`<div oo-notification="success large centered">
  <strong>Hey, well done!</strong><br>You've created a <i>success</i> notification component
</div>`, 'html')}
<div data-oo-notification="success large centered" class="mb-30">
  <strong>Hey, well done!</strong><br>You've created a <i>success</i> notification component.
</div>

{@html highlight(
`<div oo-notification="danger">
  <strong>Hey, well done!</strong><br>You've created a <i>danger</i> notification component.
</div>`, 'html')}
<div data-oo-notification="danger" class="mb-30">
  <strong>Hey, well done!</strong><br>You've created a <i>danger</i> notification component.
</div>
<div class="hr"></div>
<h4>Create from config</h4>
<p>It is possible to create components from the config file at the condition of CSS selectors being at one level (not nested).</p>

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