import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/layout/furo-vertical-flex"
import "@furo/input/furo-icon-button"

import "../formsample/sample-form"
/**
 * `view-formsample`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo-view-formsample
 * @appliesMixin FBP
 */
class ViewFormsample extends FBP(LitElement) {

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
       * Description
       */
      myBool: {type: Boolean}
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
            display: block;
            height: 100%;
            overflow: hidden;
           
        }

        :host([hidden]) {
            display: none;
        }
        .content{
            padding: var(--spacing-s);
            background-color: var(--surface);
            color: var(--on-surface);
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
      <furo-vertical-flex>
        <furo-app-bar-top drawer="main-drawer" >
          <div>Sample Form</div>
          <furo-empty-spacer></furo-empty-spacer>
          <furo-icon-button icon="check" @-click="--pin"></furo-icon-button>
        </furo-app-bar-top>
        <div flex scroll class="content">
          <sample-form></sample-form>
        </div>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('view-formsample', ViewFormsample);
