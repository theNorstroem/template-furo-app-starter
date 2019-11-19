import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/theme.js';
import { FBP } from '@furo/fbp';

/**
 * `view-somecontent`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo-view-somecontent
 * @appliesMixin FBP
 */
class ViewSomecontent extends FBP(LitElement) {
  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Description
       */
      myBool: { type: Boolean },
    };
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires()
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent(this.name) ||
      css`
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none;
        }

        button {
          height: 48px;
          width: 120px;
          color: var(--primary);
          font-weight: 600;
          font-size: 20px;
          background: none;
          outline: none;
          border: none;
        }

        button:hover {
          background-color: rgba(var(--primary-rgb), var(--state-hover));
        }

        button.selected {
          background-color: rgba(var(--primary-rgb), var(--state-selected));
          color: var(--primary);
        }

        button.selected:focus {
          background-color: rgba(var(--primary-rgb), var(--state-selected-focus));
        }

        button.selected:hover {
          background-color: rgba(var(--primary-rgb), var(--state-selected-hover));
        }

        button:focus {
          background-color: rgba(var(--primary-rgb), var(--state-focus));
        }

        button:active,
        button.selected:active {
          background-color: rgba(var(--primary-rgb), var(--state-active));
        }

        button[disabled] {
          color: rgba(255, 255, 255, var(--state-disabled));
          background-color: rgba(var(--primary-rgb), var(--state-disabled));
        }
      `
    );
  }

  /**
   * @private
   * @returns {TemplateResult}
   * @private
   */
  render() {
    // language=HTML
    return html`
      <p>Hej, welcome</p>

      <button>Default</button>
      <button class="selected">Selected</button>
      <button disabled>Disabled</button>
    `;
  }
}

window.customElements.define('view-somecontent', ViewSomecontent);
