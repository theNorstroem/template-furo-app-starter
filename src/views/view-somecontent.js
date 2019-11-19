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
          height: 100vh;
          overflow: hidden;
          background-color: var(--surface);
          color: var(--on-surface);
          padding: var(--spacing-s);
        }

        :host([hidden]) {
          display: none;
        }

        :host *:first-child {
          margin-top: 0;
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
      <h1>Hej, welcome</h1>
      <p>without app-bar-top</p>
      <pre>
        /* set this to disable margins on the first thing on the view */
         :host *:first-child{
              margin-top: 0;
          }
      </pre
      >
    `;
  }
}

window.customElements.define('view-somecontent', ViewSomecontent);
