// Code generated by @furo/ui-builder. DO NOT EDIT.

import {  LitElement, html, css  } from 'lit-element';
import { Theme } from '@furo/framework/theme';
import { FBP } from '@furo/fbp';

import "@furo/data-input";
import "@furo/form";

/**
 * Test the default value
 *
 * @summary summary
 * @customElement
 * @polymer
 * @appliesMixin FBP
 */
export class ExperimentDefaultDisplay extends FBP(LitElement) {

  

  //Setze den Fokus
  focus(d) {
    this._FBPTriggerWire('--focused', d)
  }
  

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    //this._FBPTraceWires()
  }


  /**
   * Use ƒ-bind-data to bind your data object
   * und so
   */
  bindData(data) {this._FBPTriggerWire('--data', data);
    this.field = data;
  }


  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent(this.component_name) || css`
      
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

      <!-- form layouter -->
      <furo-form-layouter four>

        <!-- field: description -->
        <furo-data-display condensed ƒ-bind-data="--data(*.description)" ƒ-focus="--focused"></furo-data-display> 

        <!-- field: repstring -->
        <furo-data-repeat condensed repeated-component="furo-data-display" ƒ-bind-data="--data(*.repstring)"></furo-data-repeat> 
      </furo-form-layouter> 
    `;
  }
}

window.customElements.define('experiment-default-display', ExperimentDefaultDisplay);

