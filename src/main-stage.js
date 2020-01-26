import { LitElement, html, css } from 'lit-element';
import { FBP } from '@furo/fbp';
import { Theme } from '@furo/framework/theme.js';
import { Styling } from '../configs/styling.js';

import '@furo/input/furo-button.js';
import '@furo/route/furo-location.js';
import '@furo/route/furo-pages.js';
import '@furo/route/furo-app-flow.js';
import '@furo/app/furo-app-drawer.js';
import '@furo/app/furo-app-bar-top.js';
import '@furo/notification/furo-snackbar-display.js';
import './menu/main-menu.js';

/**
 * Static imports of the views
 * The lazy imports a below in _FBPReady
 */

import './views/view-somecontent.js';
import './views/view-dashboard.js';
import './views/view-auth.js';
import './views/view-404.js';

/**
 * `main-stage`
 *
 * @customElement
 * @appliesMixin FBP
 */
class MainStage extends FBP(LitElement) {
  _FBPReady() {
    super._FBPReady();
    /**
     * Register hook on wire --locationChanged to
     * Lazy load parts of the page
     *
     * DO NOT FORGET TO REGISTER THE LAZY LOADED PARTS IN ~/polymer.json => fragments[...]
     *
     */
    this._FBPAddWireHook('--locationChanged', e => {
      switch (e.pathSegments[0]) {
        case 'tree':
          import('./views/view-tree.js');
          break;
        case 'tree-inline':
          import('./views/view-tree-inline.js');
          break;
        case 'form':
          import('./views/view-formsample.js');
          break;
        case 'examplelayout':
          import('./views/view-layout-example.js');
          break;
        case 'generates':
          import('./views/view-generates-viewer.js');
          break;
        default:
      }
    });
  }

  /**
   *
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    const theme = Theme.getThemeForComponent(this.name);
    if (theme) {
      return [theme, Styling.theme];
    }
    // language=CSS
    return [
      css`
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
      `,
      Styling.theme,
    ];
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <furo-app-drawer
        name="main-drawer"
        ƒ-close="--locationChanged"
        ƒ-open="--openNavClicked"
        @-open-drawer-menu-clicked="--openNavClicked"
      >
        <main-menu
          slot="drawer"
          drawer="main-drawer"
          header-text="Title"
          secondary-text="Secondary text"
        ></main-menu>
        <furo-pages
          ƒ-inject-location="--locationChanged"
          default="dashboard"
          @-response-error="--responseError"
        >
          <view-dashboard name="dashboard"></view-dashboard>
          <view-tree name="tree"></view-tree>
          <view-tree-inline name="tree-inline"></view-tree-inline>
          <view-auth name="auth"></view-auth>
          <view-formsample name="form"></view-formsample>
          <view-somecontent name="somecontent"></view-somecontent>
          <view-layout-example name="examplelayout"></view-layout-example>
          <view-generates-viewer name="generates"></view-generates-viewer>
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
