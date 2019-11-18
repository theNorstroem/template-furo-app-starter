import { css } from 'lit-element/lib/css-tag.js';

export const MyThemeset = {
  ExampleComponent: css`
    :host {
      height: 100%;
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
