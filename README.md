# Loop documentation

Loop v1 documentation is using [Sapper](https://sapper.svelte.dev/)

```bash
# install packages
npm install

# Run development
npm run dev
```

**Note:** The doc is facing a [deeplinks bug](https://github.com/sveltejs/sapper/pull/1139) from Sapper.
The fix had been temporary added manually. Be aware when pulling new version of Sapper that the fix might be gone.

## Production
Run `npm run export` to generate the static site.