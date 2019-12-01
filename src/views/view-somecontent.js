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
        h1{
          font-family: "Roboto", "Noto", sans-serif;
          font-size: 96px;
          letter-spacing: -1.5px;
          font-weight: 200;
        }
        h2{
          font-family: "Roboto", "Noto", sans-serif;
          font-size: 60px;
          letter-spacing: -0.5px;
          font-weight: 400;
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
      <p>This is a blank page without app-bar-top</p>
      <h2>Open the menu drawer</h2>
     <p>Send a <code>open-drawer-menu-clicked</code> event, by clicking on the button, to open the menu. There is a listener in <code>main-stage</code> which opens the menu </p>
     <furo-button raised @-click="^^open-drawer-menu-clicked" autofocus ƒ-focus="--pageActivated">open Menu</furo-button>
    `;
  }
}

window.customElements.define('view-somecontent', ViewSomecontent);
