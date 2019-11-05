import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";

import "@furo/layout/furo-icon"
import "@furo/layout/furo-ripple"

/**
 * `furo-icon-button`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo-furo-icon-button
 * @appliesMixin FBP
 */
class FuroIconButton extends FBP(LitElement) {

  constructor() {
    super();
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * The icon
       */
      icon: {type: String}
    };
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    //this._FBPTraceWires()
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent(this.name) || css`
        :host {
            display: inline-block;
            position: relative;
        }

        :host([hidden]) {
            display: none;
        }

        button {
            cursor: pointer;
            background: none;
            outline: none;
            border: none;
            color: inherit;
            padding: 0;
            display: block;
        }
    `
  }


  /**
   * @private
   * @returns {TemplateResult}
   * @private
   */
  render() {
    // language=HTML
    return html`
      <button>
        <furo-icon icon="${this.icon}"></furo-icon>
         <furo-ripple></furo-ripple>      
      </button>
      
    `;
  }
}

window.customElements.define('furo-icon-button', FuroIconButton);
