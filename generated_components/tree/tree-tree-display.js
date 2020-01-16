// Code generated by @furo/ui-builder. DO NOT EDIT.
import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/theme.js';
import { FBP } from '@furo/fbp';

// eslint-disable-next-line no-unused-vars
import { i18n } from '@furo/framework/i18n.js';

import '@furo/data-input';
import '@furo/form';
import './tree-navigationnode-display.js';

/**
 * Navigation tree type with recursive navigation nodes
 *
 * @summary todo: write summary
 * @customElement
 * @polymer
 * @appliesMixin FBP
 */
export class TreeTreeDisplay extends FBP(LitElement) {
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
      Theme.getThemeForComponent('DisplayBaseTheme') ||
      css`
        :host {
          display: block;
        }

        :host[hidden] {
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
      <furo-form-layouter four>
        <!-- field: id -->
        <furo-data-display
          condensed
          ƒ-bind-data="--data(*.id)"
          ƒ-focus="--focused"
        ></furo-data-display>

        <!-- field: display_name -->
        <furo-data-display condensed ƒ-bind-data="--data(*.display_name)"></furo-data-display>

        <!-- field: secondary_text -->
        <furo-data-display condensed ƒ-bind-data="--data(*.secondary_text)"></furo-data-display>

        <!-- field: description -->
        <furo-data-display condensed ƒ-bind-data="--data(*.description)"></furo-data-display>

        <!-- field: root -->
        <tree-navigationnode-display
          condensed
          ƒ-bind-data="--data(*.root)"
        ></tree-navigationnode-display>
      </furo-form-layouter>
    `;
  }
}

window.customElements.define('tree-tree-display', TreeTreeDisplay);
