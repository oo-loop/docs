<script>
  import HeadTitle from '@/components/HeadTitle.svelte';
  import Pagination from '@/components/Pagination.svelte';
  import highlight from '@/utils/highlight.js';

  const title= 'Components';
  const description= 'Loop semantic offers separation of concerns to differentiate components from other styling and to facilitate readibility.';

  const date = new Date()
  let ooEvent = 'config'
  let dataAttr = false
  $: attr = dataAttr ? 'data-oo' : 'oo'
  $: datetime = `${date.getFullYear()}-09-07 10:00`
</script>

<HeadTitle {title} {description}/>

<h1>{title}</h1>
<p class="font-large">Use oo-component to group recurring styling.</p>
<p>{description}
The HTML becomes easier to understand and to maintain while lightening the class attribute which can be too often overcrowded <i>(A class with a component name along with a list of modifiers + a bunch of unrelated utilities)</i>. </p>

<p>By default, Loop components are used along with the <em>data</em> attribute <code>data-oo-componentName</code> to be a fully-valid HTML attribute.
You may still turn off the option to remove verbosity and get a shorter name for speed purposes <code>oo-componentName</code> <i>(Which was the case in Loop v0.4)</i></p>

<button class="float-right mb-5" data-oo-button on:click="{() => dataAttr = !dataAttr}">Toggle dataAttr {dataAttr ? 'Off' : 'On'}</button>
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
  <li><a href="docs/components/column" title="Column component">Column</a><code>oo-row</code><code>oo-col</code></li>
  <li><a href="docs/components/template" title="Template component">Template</a><code>oo-template</code><code>oo-area</code></li>
  <li><a href="docs/components/button" title="Button component">Button</a><code>oo-button</code></li>
  <li><a href="docs/components/form" title="Form component">Form</a><code>oo-input</code><code>oo-select</code><code>oo-radio</code><code>oo-checkbox</code><code>oo-toggle</code></li>
</ul>

<h4 class="mt-30 mb-15">Custom components</h4>
<ul>
  <li><a href="docs/components/#custom" title="Sample of situation">Sample of situation</a></li>
  <li><a href="docs/components/#from-config" title="Create component from config">Create component from Config</a></li>
  <li><a href="docs/components/#from-mixin" title="Create component from mixin">Create component from Mixin</a></li>
  <li><a href="docs/components/#turn-utility-into-component" title="Turn utility-first component into oo-component">Turn utility-first component into oo-component</a></li>
</ul>

<hr>
<h2 id="custom"><a href="docs/components/#custom">#</a> Custom components</h2>
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
<p>Use <code>></code> as a property name within the list of CSS properties to target nested elements. Then, define a map of CSS selector with CSS properties.</p>
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
<h4 class="mt-30">Target pseudo-elements</h4>
<p>Use <code>before</code> and <code>after</code> as property name and assign a map of CSS properties as value.</p>
{@html highlight(
`$ooLoop: ooAdd('components', (
  'notification': (
    props: (
      ...,
      'before' : (
        margin-left: 10px,
        float: right,
        width: 22px,
        height: 22px,
        color: #fff,
        text-align: center,
        border-radius: 50%,
      ),
    ),
    variants: (
      'success': (
        color: #015a31,
        border-color: #83cca9,
        background-color: #c8f7e1,
        'before': (
          content: '\\2713',
          background-color: #4ea97d,
        )
      )
    )
  ),
));
`, 'scss')}
{@html highlight(
`<div oo-notification="success">
  <strong>Hey, well done!</strong><br>You've created a <i>success</i> notification component.
</div>`, 'html')}
<div data-oo-notification="success check">
  <strong>Hey, well done!</strong><br>You've created a <i>success</i> notification component.
</div>

<h3 class="mt-45" id="from-mixin"><a href="docs/components#from-mixin" title="Create from mixin">#</a> Creation from mixin</h3>
<p>Combine the two mixins <code>ooComponent()</code> and <code>ooComponentVariant()</code> and develop your own Loop component <strong>after the initialization of the Loop config</strong>.</p>

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

<h2 id="turn-utility-into-component"><a href="docs/components#turn-utility-into-component">#</a> Turn Utility First Component into Loop Component</h2>
<p>Developing with utilities increases speed and help us prototyping rapidly custom components.
As a result, we tend to add an incredible amount of single classes to a single html element to achieve a specific style.
Repeating the same classes while making reusable modular code could easily start to be unproductive.</p>
<p>Take into condiseration setting aside <em>utility-first-component</em> for common group paterns and turn them into <em>loop-component</em>.
Write less HTML with more CSS.</p>

<strong>Example with the Event utility-first</strong>
<p>17 classes + 1 button component & 2 modifiers</p>
{@html highlight(
`<div class="bg-white text-center shape-squircle overflow-hidden shadow-tiny">
  <time datetime="${datetime}"
    class="d-block wrapper-tiny bg-primary color-white font-small text-uppercase">
    September 7th, 10am
  </time>
  <div class="wrapper-small wrapper-medium@md">
    <h3 class="mt-0 mb-0">Frontend Developer Festival</h3>
    <p class="text-wide">Tokyo, Odaiba, Big Sight</p>
    <button class="shape-stadium" data-oo-button="primary outline">Join</button>
  </div>
</div>
`, 'html')}
<div class="ground">
  <div class="bg-white text-center shape-squircle overflow-hidden shadow-tiny">
    <time {datetime}
      class="d-block wrapper-tiny bg-primary color-white text-center font-small text-uppercase">
      September 7th, 10am
    </time>
    <div class="wrapper-small wrapper-medium@md">
      <h3 class="mt-0 mb-0">Frontend Developer Festival</h3>
      <p class="text-wide">Tokyo, Odaiba, Big Sight</p>
      <button class="shape-stadium" data-oo-button="primary outline">Join</button>
    </div>
  </div>
</div>

<strong>Make Event loop-component</strong>
<p class="wrapper-small bg-secondary mt-15 mb-0">
  <input data-oo-radio="large inline" id="event-config" name="oo-event" type="radio"
    bind:group={ooEvent} value='config'>
  <label for="event-config">From Config</label>
  <input data-oo-radio="large inline" id="event-mixin" name="oo-event" type="radio"
    bind:group={ooEvent} value="mixin">
  <label for="event-mixin" class="mt-0">From Mixin</label>
</p>
{#if ooEvent === 'config'}
  {@html highlight(
`// _config.scss
@import 'oo-loop/loop';

$ooLoop: ooSet('palette.alert': #f15f63);
$ooLoop: ooSet('button.outline', true);
$ooLoop: ooSet('button.variants.stadium', (
  border-radius: 50em,
);

$ooLoop: ooSet('components', ('event': (
  props: (
    padding: (
      rt: 1rem,
      sm: 1.5rem,
    ),
    overflow: hidden,
    text-align: center,
    background-color: #fff,
    border-radius: 1em,
    box-shadow: 0 1px 1px 0 rgba(0,0,0, .15),
    '>': (
      'time': (
        padding: .5rem,
        margin: (
          rt: -1rem -1rem 1rem,
          sm: -1.5rem -1.5rem 1.5rem,
        ),
        display: block,
        color:#fff,
        font-size: rem(14),
        text-transform: uppercase,
        background-color: this('palette.primary'),
      ),
      'h3': (
        margin: 0,
      ),
      'p': (
        letter-spacing: .5px,
      ),
    ),
  ),
  variants: (
    'alert': (
      '>': (
        'time': (
          background-color: this('palette.alert')
        ),
        'h3::before': (
          margin-bottom: 4px,
          display: block,
          content: '!!!Cancelled!!!',
          font-size: 1rem,
          color: this('palette.alert')
        )
      )
    )
  ),
)));

@include ooCreate((dataAttr: false));
`, 'scss')}

{:else}
  {@html highlight(`// _config.scss
@import 'oo-loop/loop';

$ooLoop: ooSet('palette.alert': #f15f63);
$ooLoop: ooSet('button.outline', true);
$ooLoop: ooSet('button.variants.stadium', (
  border-radius: 50em,
);

@include ooCreate((dataAttr: false));

// ----
// component/_event.scss
@include ooComponent('event') {
  padding: 1rem;
  overflow: hidden;
  text-align: center;
  background-color: #fff;
  border-radius: 1em;
  box-shadow: 0 1px 1px 0 rgba(0,0,0, .15);

  @include breakpoint(sm) {
    padding: 1.5rem;
  }

  time {
    padding: .5rem;
    margin: -1rem -1rem 1rem;
    display: block;
    color: #fff;
    font-size: rem(14);
    text-transform: uppercase;
    background-color: oo('palette.primary');

    @include breakpoint(sm) {
      margin: -1.5rem -1.5rem 1.5rem;
    }
  }

  h3 { margin: 0; }
  p { letter-spacing: .5px; }
}

@include ooComponentVariant('event', 'alert') {
  time {
    background-color: oo('palette.alert');
  }
  h3::before {
    margin-bottom: 4px;
    display: block;
    content: '!!!Cancelled!!!';
    font-size: 1rem;
    color: oo('palette.alert');
  }
}

// ----
// index.scss
@import 'config';
@import 'components/event';`, 'scss')}
{/if}
{@html highlight(
`<div oo-event>
  <time datetime="${datetime}">September 7th, 10am</time>
  <h3>Frontend Developer Festival</h3>
  <p>Tokyo, Odaiba, Big Sight</p>
  <button oo-button="primary stadium outline">Join</button>
</div>\n
<div oo-event="alert">
  <time datetime="${datetime}">September 8th, 10am</time>
  <h3>Frontend Developer Festival</h3>
  <p>Tokyo, Odaiba, Big Sight</p>
  <button oo-button="alert stadium outline">Join</button>
</div>
`, 'html')}
<p class="mt-30">0 class, 1 event component + 1 button component & 3 modifers</p>
<div class="ground">
  <div data-oo-event class="mb-30">
    <time {datetime}>September 7th, 10am</time>
    <h3 class="mt-0 mb-0">Frontend Developer Festival</h3>
    <p class="text-wide">Tokyo, Odaiba, Big Sight</p>
    <button data-oo-button="primary stadium outline">Join</button>
  </div>
  <div data-oo-event="alert">
    <time {datetime}>September 7th, 10am</time>
    <h3 class="mt-0 mb-0">Frontend Developer Festival</h3>
    <p class="text-wide">Tokyo, Odaiba, Big Sight</p>
    <button data-oo-button="alert stadium outline">Get Refund</button>
  </div>
</div>

<Pagination href="docs/components/column" label="Use Column" />