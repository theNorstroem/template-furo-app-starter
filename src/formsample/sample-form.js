import { LitElement, html, css } from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/form"
import "@furo/input"
import "@furo/form/furo-form"

/**
 * `sample-form`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo-sample-form
 * @appliesMixin FBP
 */
class SampleForm extends FBP(LitElement) {

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
  _FBPReady(){
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
        }

        :host([hidden]) {
            display: none;
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
      <furo-form header-text="Simple form design" secondary-text="Please fill in the form and click save. " ƒ-start-activity="--start">
        <h2>Simple form design</h2>
        <secondary>Please fill in the form and click save. </secondary>

        <!-- Inside a furo-form-layouter the elements are always full-width -->
        <!-- Full width, one column layout-->
        <furo-form-layouter two>
          <furo-date-input  condensed   hint="Only possible in current year" max="2019-12-31" min="2019-01-01" label="valid from"></furo-date-input>
          <furo-select-input condensed label="Mutation reason" value="New" list="New, mutation, remake"></furo-select-input>

        </furo-form-layouter>
        <h2>Additional data</h2>
        <secondary>Put your additional information here...</secondary>
        <!-- Full width, four column layout-->
        <furo-form-layouter four>
          <furo-text-input condensed label="Owner"></furo-text-input>
          <furo-text-input condensed label="Special hint"></furo-text-input>
          <furo-text-input condensed label="Owner"></furo-text-input>
        </furo-form-layouter>

        <furo-horizontal-flex space="" slot="action">
          <furo-button unelevated primary="" label="primary" @-click="--start"></furo-button>
          <furo-button unelevated accent="" label="accent"></furo-button>
          <furo-button  unelevated label="Default"></furo-button>
          <furo-empty-spacer></furo-empty-spacer>
          <furo-button unelevated danger="" label="Danger"></furo-button>
        </furo-horizontal-flex>


      </furo-form>
    `;
  }
}

window.customElements.define('sample-form', SampleForm);
