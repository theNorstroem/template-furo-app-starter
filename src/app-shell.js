import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import '../configs/init'
import '@webcomponents/shadycss/entrypoints/apply-shim.js';
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
            <main-stage></main-stage>
        `;
    }

}

window.customElements.define('app-shell', AppShell);
