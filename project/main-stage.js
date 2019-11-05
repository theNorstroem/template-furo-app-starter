import {LitElement, html, css} from 'lit-element';
import {FBP} from "@furo/fbp";
import {Theme} from "@furo/framework/theme"
import {Styling} from "../custom/styling";


import '@furo/input/furo-button';
import '@furo/route/furo-location';
import '@furo/route/furo-pages';
import '@furo/route/furo-app-flow';
import "./furo-app-drawer"
import "./menu/main-menu"
import "./furo-app-bar-top"

// import the views
import "./dashboard/view-dashboard"
import "./tree/view-tree"
import "./auth/view-auth"
import "./404/view-404"

/**
 * `main-stage`
 *
 * @customElement
 * @appliesMixin FBP
 */
class MainStage extends FBP(LitElement) {

  constructor() {
    super();
  }

  /**
   *
   * @private
   * @return {CSSResult}
   */
  static get styles() {

    let theme = Theme.getThemeForComponent(this.name);
    if (theme) {
      return [theme, Styling.theme]
    } else {
      // language=CSS
      return [css`
          :host {
              height: 100%;
              display: block;
              
          }

          furo-pages {
              height: 100%;
              overflow: auto;
          }

          side-navigation {
              background-color: var(--llm-color);
          }
      `, Styling.theme]
    }
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`





      <furo-app-drawer name="main-drawer" ƒ-close="--locationChanged">
        <main-menu slot="drawer"></main-menu>

        <furo-pages ƒ-inject-location="--locationChanged" default="dashboard" @-response-error="--responseError">
          <view-dashboard name="dashboard"></view-dashboard>
          <view-tree name="tree"></view-tree>
          <view-auth name="auth"></view-auth>
          <view-404 name="404"></view-404>
        </furo-pages>
        
      </furo-app-drawer>


      <furo-location @-location-changed="--locationChanged"></furo-location>
      <furo-app-flow ƒ-emit="" event="response-error"></furo-app-flow>
    `;
  }

}

window.customElements.define('main-stage', MainStage);
