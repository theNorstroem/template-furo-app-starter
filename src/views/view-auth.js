import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/theme.js';
import { FBP } from '@furo/fbp';

/**
 * `view-auth`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo-view-auth
 * @appliesMixin FBP
 */
class ViewAuth extends FBP(LitElement) {
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
        }

        :host([hidden]) {
          display: none;
        }
        furo-card {
          width: 360px;
        }
        furo-horizontal-flex[slot='action'] {
          padding-left: 8px;
          padding-right: 8px;
          box-sizing: border-box;
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
      <furo-vertical-flex>
        <furo-empty-spacer></furo-empty-spacer>
        <furo-horizontal-flex>
          <furo-empty-spacer></furo-empty-spacer>
          <furo-card header-text="Login" secondary-text="Enter the username and password">
            <furo-form-layouter one>
              <furo-text-input
                leading-icon="account-box"
                autofocus
                label="Username"
                value="demo"
              ></furo-text-input>
              <furo-password-input
                leading-icon="lock-outline"
                value="1234"
                hint="Look under your keyboard or on postit below monitor"
                label="super secret password"
                ƒ-make-visible="--showPasswordClicked"
                ƒ-make-invisible="--hidePasswordClicked"
              ></furo-password-input>
            </furo-form-layouter>
            <furo-horizontal-flex space="" slot="action">
              <furo-button primary unelevated>Login</furo-button>
              <furo-empty-spacer></furo-empty-spacer>
              <furo-button icon="visibility" unelevated @-click="--showPasswordClicked"
                >Show Password</furo-button
              >
            </furo-horizontal-flex>
          </furo-card>
          <furo-empty-spacer></furo-empty-spacer>
        </furo-horizontal-flex>
        <furo-empty-spacer></furo-empty-spacer>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('view-auth', ViewAuth);
