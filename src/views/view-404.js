import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/theme.js';
import { FBP } from '@furo/fbp';

/**
 * `view-404`
 * This is the 404 view. It will be shown on main-stage when the route do not match
 *
 * @summary 404 view
 * @customElement
 * @appliesMixin FBP
 */
class View404 extends FBP(LitElement) {
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
        div._404 {
          margin: 96px auto;
          font-size: 156px;
          text-align: center;
        }
        p {
          font-size: 48px;
          text-align: center;
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
      <div class="_404">404</div>
      <p>This is an app, you shouldn't see this page with internal navigation.</p>
      <p>
        There's really nothing to see here, <a href="dashboard"> please go back to the start</a>
      </p>
    `;
  }
}

window.customElements.define('view-404', View404);
