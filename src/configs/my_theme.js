import { css } from 'lit-element/lib/css-tag.js';
import { Theme } from '@furo/framework/furo.js';

export const MyThemeset = {
  ExampleComponent: css`
    :host {
      height: 50%;
      display: block;
      background: var(--background);
      color: var(--on-background);
    }
    furo-pages {
      height: 100vh;
      overflow: hidden;
    }
    side-navigation {
      background-color: var(--llm-color);
    }
  `,
};

Theme.registerThemeset(MyThemeset);
