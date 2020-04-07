import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme.js';
import { FBP } from '@furo/fbp';

/**
 * `view-layout-example`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @appliesMixin FBP
 */
class ViewLayoutExample extends FBP(LitElement) {
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
          height: 100vh;
          overflow: hidden;
        }

        :host([hidden]) {
          display: none;
        }

        .stage {
          padding: 0;
          box-sizing: border-box;
          background-color: var(--surface);
          color: var(--on-surface);
        }

        /* add padding to the scrolling part, so the scrollbar stays on right side and have no padding.
           Remove the padding, if the scrolling component handles the spacing itself.
         */
        .stage > *[scroll] {
          padding: var(--spacing-s);
        }

        /* clear margin top for the first element in stage, so the contents begins always at the same position */
        .stage > *[scroll] *:first-child {
          margin-top: 0;
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
        <furo-app-bar-top
          drawer="main-drawer"
          navigation-icon="dashboard"
          @-navigation-clicked="--dashboardIconClicked"
        >
          <div>Layout Example</div>
          <furo-empty-spacer></furo-empty-spacer>
        </furo-app-bar-top>

        <furo-app-flow
          event="view-dashboard-requested"
          ƒ-trigger="--dashboardIconClicked"
        ></furo-app-flow>

        <furo-vertical-flex flex class="stage">
          <div flex scroll>
            <h1>This is a layout example</h1>
            <p>This part of the view is the scrollable area.</p>
            <div style="height: 1300px; border: 1px dashed blue">
              <pre>1300px placeholder to show the scrolling</pre>
            </div>
            <p>End of the scrollable area</p>
          </div>
          <div>
            This is the footer area. You can place content like a footer, button-bar, app-bar,...
          </div>
        </furo-vertical-flex>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('view-layout-example', ViewLayoutExample);
