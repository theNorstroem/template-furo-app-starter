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
        .content{
            padding: var(--spacing-s);
            background-color: var(--surface);
            color: var(--on-surface);
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
          
          
        </div>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('view-dashboard', ViewDashboard);
