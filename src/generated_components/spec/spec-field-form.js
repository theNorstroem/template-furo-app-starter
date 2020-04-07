// Code generated by @furo/ui-builder. DO NOT EDIT.
import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme.js';
import { FBP } from '@furo/fbp';

// eslint-disable-next-line no-unused-vars
import { i18n } from '@furo/framework/src/i18n.js';

import '@furo/data-input';
import '@furo/form';
import './spec-fieldproto-form.js';
import '../furo/furo-fieldmeta-form.js';
import '../furo/furo-fieldconstraint-map.js';

/**
 * Defines a field in the furo spec
 *
 * @summary todo: write summary
 * @customElement
 * @polymer
 * @appliesMixin FBP
 */
export class SpecFieldForm extends FBP(LitElement) {
  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      // Header text to label the form
      headerText: {
        type: String,
        attribute: 'header-text',
      },
      // Secondary text for a detailed description
      secondaryText: {
        type: String,
        attribute: 'secondary-text',
      },
    };
  }

  // Fokus
  focus(d) {
    this._FBPTriggerWire('--focused', d);
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
    return (
      Theme.getThemeForComponent('FormBaseTheme') ||
      css`
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none;
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
      <!-- It is a good practice to set a description -->
      <furo-form
        header-text="${this.headerText ? this.headerText : ''}"
        secondary-text="${this.secondaryText ? this.secondaryText : ''}"
      >
        <!-- It is a good practice to set a description -->
        <furo-form-layouter four>
          <!-- field: type -->
          <furo-data-text-input
            condensed
            double
            ƒ-bind-data="--data(*.type)"
            ƒ-focus="--focused"
          ></furo-data-text-input>

          <!-- field: description -->
          <furo-data-textarea-input
            full
            ƒ-bind-data="--data(*.description)"
          ></furo-data-textarea-input>

          <!-- field: __proto -->
          <spec-fieldproto-form
            condensed
            full
            header-text="${i18n.t('form.spec.field.__proto.header.text')}"
            secondary-text="${i18n.t('form.spec.field.__proto.secondary.text')}"
            ƒ-bind-data="--data(*.__proto)"
          ></spec-fieldproto-form>

          <!-- field: meta -->
          <furo-fieldmeta-form
            condensed
            full
            header-text="${i18n.t('form.spec.field.meta.header.text')}"
            secondary-text="${i18n.t('form.spec.field.meta.secondary.text')}"
            ƒ-bind-data="--data(*.meta)"
          ></furo-fieldmeta-form>

          <!-- field: constraints -->
          <furo-fieldconstraint-map
            full
            header-text="${i18n.t('form.spec.field.constraints.header.text')}"
            secondary-text="${i18n.t('form.spec.field.constraints.secondary.text')}"
            ƒ-bind-data="--data(*.constraints)"
          ></furo-fieldconstraint-map>
        </furo-form-layouter>
      </furo-form>
    `;
  }
}

window.customElements.define('spec-field-form', SpecFieldForm);
