import { LitElement, html, css } from 'lit-element';
import { i18n, Theme } from '@furo/framework/furo.js';
import { FBP } from '@furo/fbp';

import '@furo/layout/furo-vertical-flex.js';
import '@furo/form';
import '@furo/input';
import '@furo/app/furo-card.js';
import '@furo/form/furo-form.js';
import '@furo/input/furo-icon-button.js';
import '@furo/notification/furo-snackbar.js';

/**
 * `view-dashboard`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo-view-dashboard
 * @appliesMixin FBP
 */
class ViewDashboard extends FBP(LitElement) {
  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Description
       */
      myBool: { type: Boolean },
    };
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires()
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent(this.name) ||
      css`
        :host {
          display: block;
          height: 100%;
          overflow: hidden;
        }

        :host([hidden]) {
          display: none;
        }

        .content {
          padding: var(--spacing-s);
          background-color: var(--background);
          color: var(--on-surface);
        }

        furo-card {
          margin: 0 var(--spacing) var(--spacing) 0;
          width: 280px;
          float: left;
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
      <furo-vertical-flex>
        <furo-app-bar-top drawer="main-drawer">
          <div>Dashboard</div>
          <furo-empty-spacer></furo-empty-spacer>
          <furo-icon-button icon="search" @-click="--float"></furo-icon-button>
          <furo-icon-button icon="settings" @-click="--op"></furo-icon-button>
          <furo-snackbar
            position-right
            action-button-text="ignore"
            timeout-in-ms="8000"
            label-text="Settings page is not implemented yet. This message destroys itself in 8 seconds"
            ƒ-show="--op"
          ></furo-snackbar>
        </furo-app-bar-top>
        <div flex scroll class="content">
          <furo-card class="selected">
            <img src="/assets/images/hamburg.jpg" slot="media" alt="" />
            <h1>${i18n.t('untranslated text')}</h1>
            <p>${i18n.t('lorem')}</p>
          </furo-card>

          <furo-card disabled>
            <img src="/assets/images/hamburg.jpg" slot="media" alt="" />
            <h1>App-flow...</h1>
            <p>Routing example with app-flow</p>
            <furo-app-flow event="form-requested" ƒ-trigger="--form"></furo-app-flow>
            <furo-horizontal-flex slot="action">
              <furo-button primary ƒ-focus="--pageActivated" @-click="--form">register</furo-button>
            </furo-horizontal-flex>
          </furo-card>

          <furo-card>
            <h1>Simulate unauthorized</h1>
            <p>Click on the button to emmit a unauthorized event.</p>
            <p>
              The unathorized event is catched in the app-shell and triggers an app-flow event which
              causses the router to navigate to the <strong>/auth</strong> page.
            </p>
            <furo-horizontal-flex slot="action">
              <furo-button danger @-click="^^unauthorized">Unauth</furo-button>
            </furo-horizontal-flex>
          </furo-card>
        </div>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('view-dashboard', ViewDashboard);
