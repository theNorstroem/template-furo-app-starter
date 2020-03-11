// Code generated by @furo/ui-builder. DO NOT EDIT.
import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/theme.js';
import { FBP } from '@furo/fbp';

// eslint-disable-next-line no-unused-vars
import { i18n } from '@furo/framework/i18n.js';

import '@furo/data';
import '@furo/data-input';

/**
 * service specs for the person api
 *
 * @summary todo: write summary
 * @customElement
 * @polymer
 * @appliesMixin FBP
 */
export class PersonPersonReferenceDropdown extends FBP(LitElement) {
  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      // The default style (md like) supports a condensed form. It is a little bit smaller then the default
      condensed: {
        type: Boolean,
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
  bindData(field) {
    this.field = field;
    this._FBPTriggerWire('--field-injected', field);
    this.field.addEventListener('branch-value-changed', () => {
      if (this.field.link._value && this.field.link._value.href && this.field.link._value.service) {
        this._FBPTriggerWire('--htsUpdated', this.field.link._value);
      }
    });
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('ReferenceDropdownBaseTheme') ||
      css`
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none;
        }

        furo-data-collection-dropdown {
          width: 100%;
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
      <furo-data-collection-dropdown
        ?condensed="${this.condensed}"
        display-field="display_name"
        subfield="id"
        subfield-display="display_name"
        value-field="id"
        ƒ-bind-data="--field-injected"
        ƒ-focus="--focused"
        ƒ-inject-entities="--collection(*.entities)"
      ></furo-data-collection-dropdown>

      <!-- It is a good practice to set a description -->
      <furo-collection-agent
        list-on-hts-in
        service="PersonService"
        @-response="--collection"
        ƒ-hts-in="--field-injected(*.link._value), --htsUpdated"
      ></furo-collection-agent>
    `;
  }
}

window.customElements.define('person-person-reference-dropdown', PersonPersonReferenceDropdown);
