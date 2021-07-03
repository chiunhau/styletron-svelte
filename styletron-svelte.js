import * as Elements from 'svelte-elements';
import { Client } from 'styletron-engine-atomic';

const styletronClient = new Client();
const renderStyle = (style) => styletronClient.renderStyle(style);

function capital(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const styled = (tag, style) =>
  class extends Elements[capital(tag)] {
    constructor(options) {
      const { props, ...restOptions } = options;

      super({
        ...restOptions,
        props: {
          ...props,
          class:
            typeof style === 'function'
              ? renderStyle(style(props))
              : renderStyle(style),
        },
      });
    }
  };
