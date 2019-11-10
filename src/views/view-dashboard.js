import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/layout/furo-vertical-flex"
import "@furo/form"
import "@furo/input"
import "@furo/form/furo-form"
import "@furo/input/furo-icon-button"

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

        .content {
            padding: var(--spacing-s);
            background-color: var(--surface);
            color: var(--on-surface);
        }

        furo-card {
            margin: 0 var(--spacing) var(--spacing) 0;
            width: 280px;
            float: left;
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
        <furo-app-bar-top drawer="main-drawer">
          <div>Dashboard</div>
          <furo-empty-spacer></furo-empty-spacer>
          <furo-icon-button icon="search" @-click="--float"></furo-icon-button>
          <furo-icon-button icon="filter-list" @-click="--op"></furo-icon-button>

        </furo-app-bar-top>
        <div flex scroll class="content">

          <furo-card>
            <img src="/assets/images/hamburg.png" slot="media" alt="">
            <h1>Info</h1>
            <p>Some text</p>
          </furo-card>
          
          <furo-card>
            <img src="/assets/images/hamburg.png" slot="media" alt="">
            <h1>App-flow</h1>
            <p>Routing example with app-flow</p>
            <furo-app-flow event="form-requested" ƒ-trigger="--form"></furo-app-flow>
            <furo-horizontal-flex slot="action">
              <furo-button primary @-click="--form">register</furo-button>
            </furo-horizontal-flex>
          </furo-card>

          <furo-card>
            <h1>Simulate unauthorized</h1>
            <p>Click on the button to emmit a unauthorized event.</p>
            <p>The unathorized event is catched in the app-shell and triggers an app-flow event which causses the router
              to navigate to the <strong>/auth</strong> page.</p>
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
