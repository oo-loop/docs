<script>
  export let page;

  const pagination = [
    {
      page: 'installation',
      href: 'docs/installation/',
      label: 'Installation',
    },
    {
      page: 'start',
      href: 'docs/',
      label: 'Start using Loop',
    },
    {
      page: 'config',
      href: 'docs/config/',
      title: 'Read about the Loop config map',
      label: 'The Loop config map',
    },
    {
      page: 'importation',
      href: 'docs/importation/',
      title: 'Customize your Loop import',
      label: 'Use what you need',
    },
    {
      page: 'html-elements',
      href: 'docs/html-elements/',
      label: 'Adjust Html elements',
    },
    {
      page: 'components',
      href: 'docs/components/',
      label: 'Set Components',
    },
    {
      page: 'column',
      href: 'docs/components/column/',
      label: 'Use Column',
    },
    {
      page: 'template',
      href: 'docs/components/template/',
      label: 'Use Template',
    },
    {
      page: 'button',
      href: 'docs/components/button/',
      label: 'Use Button',
    },
    {
      page: 'form',
      href: 'docs/components/form/',
      label: 'Use Form',
    },
    {
      page: 'helpers',
      href: 'docs/helpers/',
      label: 'Use Helper classes',
    },
    {
      page: 'container',
      href: 'docs/helpers/container/',
      label: 'Use Container classes',
    },
    {
      page: 'visibility',
      href: 'docs/helpers/visibility/',
      label: 'Use Visibility classes',
    },
    {
      page: 'list',
      href: 'docs/helpers/list/',
      label: 'Use List classes',
    },
    {
      page: 'misc',
      href: 'docs/helpers/misc/',
      label: 'Use Miscellaneous classes',
    },
    {
      page: 'utilities',
      href: 'docs/utilities/',
      label: 'Make Utilities',
    },
    {
      page: 'color',
      href: 'docs/utilities/color/',
      label: 'Use Color utilities',
    },
    {
      page: 'typography',
      href: 'docs/utilities/typography/',
      label: 'Use Typography utilities',
    },
    {
      page: 'spacing',
      href: 'docs/utilities/spacing/',
      label: 'Use Spacing utilities',
    },
    {
      page: 'float',
      href: 'docs/utilities/float/',
      label: 'Use Float utilities',
    },
    {
      page: 'wrapper',
      href: 'docs/utilities/wrapper/',
      label: 'Use Wrapper utilities',
    },
  ];

  let currentIndex = pagination.findIndex(el => el.page === page);

  $: prev = currentIndex > 0 ? pagination[currentIndex - 1 ] : null;
  $: next = currentIndex + 1 < pagination.length ? pagination[currentIndex + 1 ] : null;
</script>

<hr>
<p class="text-right clearfix mb-30">
  {#if prev !== null}
    <a
      class="font-code float-left"
      href={prev.href}
      title={prev.title ? prev.title : prev.label}>{prev.label} {'<<'}</a>
  {/if}
  {#if next !== null}
    <a
      class="font-code"
      href={next.href}
      title={next.title ? next.title : next.label}>{'>>'} {next.label}</a>
  {/if}
</p>
