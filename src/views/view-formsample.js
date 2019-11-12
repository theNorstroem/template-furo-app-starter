import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/layout/furo-vertical-flex"
import "@furo/input/furo-icon-button"
import "@furo/notification/furo-banner-display"
import "@furo/notification/furo-banner"
import "@furo/util/furo-keydown"

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
            height: 100vh;
            overflow: hidden;
            background-color: var(--surface);
            color: var(--on-surface);
        }

        :host([hidden]) {
            display: none;
        }

        .content {
            padding: 0;
            box-sizing: border-box;
        }
        
        .form {
            padding: var(--spacing-s);
        }
        
        .action {
            padding: var(--spacing-s) var(--spacing-s) var(--spacing-xs) var(--spacing-s);
        }
        
        /** set the banner icon color to danger color */
        furo-banner-display{
            --furo-icon-fill-color:var(--danger);
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
        <furo-app-bar-top drawer="main-drawer" extended ƒ-start-activity="--start" ƒ-stop-activity="--stop" navigation-icon="arrow-back" @-navigation-clicked="^^navigate-back-clicked">
          <div>Sample Form</div>
          <furo-empty-spacer></furo-empty-spacer>
          <furo-icon-button icon="check" @-click="--pin"></furo-icon-button>
          <div slot="extended">Sample Form:  Juheee , this is a lot of text and should break to a second line</div>
        </furo-app-bar-top>
        <furo-banner-display autofocus></furo-banner-display>
        <furo-vertical-flex flex class="content">
          <sample-form flex scroll class="form"></sample-form>
              <furo-button-bar class="action">
              <furo-button unelevated primary="" label="primary" @-click="--start"></furo-button>
              <furo-button unelevated accent="" label="accent" @-click="--stop"></furo-button>

              <furo-empty-spacer></furo-empty-spacer>
              <furo-button unelevated danger="" label="Danger" @-click="--networkError"></furo-button>
              </furo-button-bar>
          
        </furo-vertical-flex>
      </furo-vertical-flex>
      <furo-banner ƒ-show="--networkError" confirm-button-text="confirm to accent" @-confirmed="--confirmed"
                   @-dismissed="--dismissed" text="*important:*\nAccenting will cause a *lot* of trouble"
                   icon="perm-scan-wifi"></furo-banner>
      <furo-keydown ctrl key="p" @-key="--shortcutPrimary"></furo-keydown>
      
    `;
  }
}

window.customElements.define('view-formsample', ViewFormsample);
