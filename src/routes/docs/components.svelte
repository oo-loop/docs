<script>
  import HeadTitle from '../../components/HeadTitle.svelte';
  import highlight from '../../utils/highlight.js';

  let html5 = false
  $: attr = html5 ? 'data-oo' : 'oo'
</script>

<style>
  .notification {
    padding: 1rem;
    text-align: center;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, .15);
    border: 1px solid;
  }

  .notification-success {
    background-color: #c8f7e1;
    color: #015a31;
    border-color: #83cca9;
  }

  .notification-large {
    padding: 1.75rem 2rem;
    font-size: 1.5rem;
  }

  .notification-accent-top {
    border-width: 0;
    border-top-width: 5px;
    border-top-style: solid;
  }
  .notification-accent-left {
    border-width: 0;
    border-left-width: 5px;
    border-left-style: solid;
    text-align: left;
  }

</style>

<HeadTitle title="Components"/>

<h1>Components</h1>
<p class="text-large">Use recurring elements as components and create their own attribute syntax for development purposes.</p>
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

<h4 class="mt-30 mb-15">Loop components available</h4>
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

<h4 class="mt-30">Example of situation</h4>
<p class="font-italic">I created a reusable component for all the diverse messages of my project.
I named it <code>.notification</code> and namespaced each modifiers with it.
I'm happy as it is extremely understandable.</p>

{@html highlight(
`<!-- Notification component -->
<div class="notification notification-success notification-large notification-accent-left">
  <strong>Hey, well done!</strong><br>You've created a successfull notification component
</div>
`, 'html')}

<p class="font-italic mt-30">It's a bit redundant. So I refactored the modifiers' logic by using keywords such as <code>is</code> and <code>has</code>.
I'm very happy as it is still extremely understandable with less writting.</p>

{@html highlight(
`<!-- Notification component with shorter modifier -->
<div class="notification is-success is-large has-accent-left">
  <strong>Hey, well done!</strong><br>You've created a successfull notification component
</div>
`, 'html')}

<p class="font-italic mt-30">While adding utilities in some cases, the class attribute gets crowded, making it harder to know what's going on at a glance.
I sometimes get confused to differentiate the modifiers from the utilities.</p>
{@html highlight(
`<!-- Notification component along with utilities -->
<div class="notification is-success is-large has-accent-left font-italic float-left hidden@print mt-15 mb-30">
  <strong>Hey, well done!</strong><br>You've created a successfull notification component
</div>
`, 'html')}

<p class="font-italic mt-30">I refactored my component again using Loop syntax. I'm extremely happy with the separation of concerns as I know what does what as well as avoiding redundant text.</p>
{@html highlight(
`<!-- Loop Notification component with utilities -->
<div oo-notification="success large accent-left" class="font-italic float-left hidden@print mt-15 mb-30">
  <strong>Hey, well done!</strong><br>You've created a successfull notification component
</div>
`, 'html')}

<h4 class="mt-30">Use of mixin</h4>

<div class="notification notification-success notification-large notification-accent-top mb-30">
  <strong>Hey, well done!</strong><br>You've created a successfull notification component.
</div>
