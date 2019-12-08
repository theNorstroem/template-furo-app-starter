// Code generated by @furo/ui-builder. DO NOT EDIT.

import {  LitElement, html, css  } from 'lit-element';
import { Theme } from '@furo/framework/theme';
import { FBP } from '@furo/fbp';

import "@furo/data-input";
import "@furo/form";
import "../person/person-person-reference-search.js";

/**
 * Options for possible filter values
 *
 * @summary summary
 * @customElement
 * @polymer
 * @appliesMixin FBP
 */
export class ProjectfilterProjectfilterForm extends FBP(LitElement) {

  

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

      <!-- form -->
      <furo-form-layouter four>

        <!-- field: description -->
        <furo-data-text-input condensed ƒ-bind-data="--data(*.description)" ƒ-focus="--focused"></furo-data-text-input> 

        <!-- field: start -->
        <furo-data-date-input condensed ƒ-bind-data="--data(*.start)"></furo-data-date-input> 

        <!-- field: end -->
        <furo-data-date-input condensed ƒ-bind-data="--data(*.end)"></furo-data-date-input> 

        <!-- field: members -->
        <person-person-reference-search condensed ƒ-bind-data="--data(*.members)"></person-person-reference-search> 

        <!-- field: cost_limit -->
        <furo-data-money-input condensed ƒ-bind-data="--data(*.cost_limit)"></furo-data-money-input> 
      </furo-form-layouter> 
    `;
  }
}

window.customElements.define('projectfilter-projectfilter-form', ProjectfilterProjectfilterForm);

