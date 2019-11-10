import {LitElement, html, css} from 'lit-element';
import {FBP} from "@furo/fbp";
import {Theme} from "@furo/framework/theme"
import {Styling} from "../configs/styling";


import '@furo/input/furo-button';
import '@furo/route/furo-location';
import '@furo/route/furo-pages';
import '@furo/route/furo-app-flow';
import '@furo/layout/furo-app-drawer';
import '@furo/layout/furo-app-bar-top';
import '@furo/notification/furo-snackbar-display';
import "./menu/main-menu"


/**
 * Static imports of the views
 * The lazy imports a below in _FBPReady
 */

import "./views/view-dashboard"
import "./views/view-auth"
import "./views/view-404"

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


  _FBPReady() {
    super._FBPReady();
    /**
     * Register hook on wire --locationChanged to
     * Lazy load parts of the page
     *
     * DO NOT FORGET TO REGISTER THE LAZY LOADED PARTS IN ~/polymer.json => fragments[...]
     *
     */
    this._FBPAddWireHook("--locationChanged", (e) => {
      switch (e.pathSegments[0]) {
        case "tree":
          import("./views/view-tree");
          break;
        case "form":
          import ("./views/view-formsample");
          break;

      }
    });
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
              background: var(--background);
              color: var(--on-background);
          }

          furo-pages {
              height: 100vh;
              overflow: hidden;
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
          <view-formsample name="form"></view-formsample>
          <view-404 name="404"></view-404>
        </furo-pages>
      </furo-app-drawer>

      <furo-snackbar-display></furo-snackbar-display>
      <furo-location @-location-changed="--locationChanged"></furo-location>
      <furo-app-flow ƒ-emit="" event="response-error"></furo-app-flow>
    `;
  }

}

window.customElements.define('main-stage', MainStage);
