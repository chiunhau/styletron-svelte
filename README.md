This is an experimental [Svelte](https://svelte.dev/) bindings for [Styletron](https://github.com/styletron/styletron).

## Get started

```shell
$ yarn add styletron-svelte
```

```svelte
// App.svelte
<script>
  import { styled, css } from 'styletron-svelte';

  // Create a styled component by passing an element name and a style object
  const Heading = styled('h1', {
    color: 'red'
  });

  // Or pass a function that takes props and returns a style object
  const Square = styled('div', ({$size}) => ({
    width: $size,
    height: $size
  }));

  // Do you need generated CSS classes only?
  const classNames = css({color: 'green'});

</script>

<main>
  <Heading>Hello World</Heading>
  <Square $size="100px"/>
  <p class="{classNames}">I will be green</p>
</main>
```

If you encounter `process` not found error with Rollup, try doing this:

```shell
$ yarn add -D @rollup/plugin-replace
```

```js
...
import replace from '@rollup/plugin-replace';
...
plugins: [
  ...
  replace({
    'process.env.NODE_ENV': JSON.stringify(
      production ? 'production' : 'development'
    ),
  }),
  ...
]

```
