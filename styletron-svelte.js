import * as Elements from 'svelte-elements';
import { Client } from 'styletron-engine-atomic';

const styletronClient = new Client();

export const css = (style) => styletronClient.renderStyle(style);

export const styled = (tag, style) =>
  class extends Elements[capital(tag)] {
    constructor(options) {
      const { props, ...restOptions } = options;

      super({
        ...restOptions,
        props: {
          ...props,
          class: typeof style === 'function' ? css(style(props)) : css(style),
        },
      });
    }
  };

function capital(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
