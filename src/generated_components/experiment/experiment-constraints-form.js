// Code generated by @furo/ui-builder. DO NOT EDIT.
import {  LitElement, html, css  } from 'lit-element';
import { Theme } from '@furo/framework/theme.js';
import { FBP } from '@furo/fbp';

// eslint-disable-next-line no-unused-vars
import { i18n } from '@furo/framework/i18n.js';

import "@furo/data-input";
import "@furo/form";

/**
 * Test the Constraints
 *
 * @summary todo: write summary
 * @customElement
 * @polymer
 * @appliesMixin FBP
 */
export class ExperimentConstraintsForm extends FBP(LitElement) {

  

  // Fokus
  focus(d) {
    this._FBPTriggerWire('--focused', d)
  }
  

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires()
  }


  /**
   *  Bind your furo-data-object event @-object-ready
   * @public
   * @param data
   */
  bindData(data) {
    this._FBPTriggerWire('--data', data);
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

      :host[hidden] {
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

      <!-- It is a good practice to set a description -->
      <furo-form-layouter four>

        <!-- field: number -->
        <furo-data-number-input condensed ƒ-bind-data="--data(*.number)" ƒ-focus="--focused"></furo-data-number-input> 

        <!-- field: text -->
        <furo-data-text-input condensed ƒ-bind-data="--data(*.text)"></furo-data-text-input> 
      </furo-form-layouter> 
    `;
  }
}

window.customElements.define('experiment-constraints-form', ExperimentConstraintsForm);
