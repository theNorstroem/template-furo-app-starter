import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import '../configs/init'
import '@webcomponents/shadycss/entrypoints/apply-shim.js';

import "@furo/config/furo-config-loader"
import "@furo/route/furo-app-flow-router"

import "../src/main-stage.js"
/**
 * `main-app`
 *
 * @customElement
 * @appliesMixin FBP
 */
class AppShell extends FBP(LitElement) {

    /**
     *
     * @private
     * @return {CSSResult}
     */
    static get styles() {
        let theme = Theme.getThemeForComponent(this.name);
        if (theme) {
            return [theme]
        } else {
            // language=CSS
            return [css`
                :host {
                    display: block;
                    height: 100vh;
                    overflow: hidden;
                }
            `]
        }
    }

    /**
     * @private
     * @returns {TemplateResult}
     */
    render() {
        // language=HTML
        return html`
            <main-stage @-app-flow="--flowEvent" @-response-error-401="--unauthorized" @-unauthorized="--unauthorized" @-navigate-back-clicked="--navBack"></main-stage>

            <furo-app-flow-router ƒ-.config="--flowConfigLoaded" ƒ-trigger="--flowEvent" ƒ-back="--navBack"></furo-app-flow-router>
            <furo-app-flow event="unauthorized" ƒ-trigger="--unauthorized" @-app-flow="--flowEvent"></furo-app-flow>
            <furo-config-loader src="../configs/flowConfig.json" section="flow"  @-config-loaded="--flowConfigLoaded"></furo-config-loader>
        `;
    }

}

window.customElements.define('app-shell', AppShell);
