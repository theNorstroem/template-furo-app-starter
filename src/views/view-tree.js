import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/theme.js';
import { FBP } from '@furo/fbp';

/**
 * `view-tree`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo-view-tree
 * @appliesMixin FBP
 */
class ViewTree extends FBP(LitElement) {
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
          background-color: var(--surface);
          color: var(--on-surface);
        }

        :host([hidden]) {
          display: none;
        }

        .stage {
          padding: 0;
          box-sizing: border-box;
          background-color: var(--background);
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
        <furo-app-bar-top drawer="main-drawer">
          <div>Tree</div>
          <furo-empty-spacer></furo-empty-spacer>
        </furo-app-bar-top>
        <furo-vertical-flex flex class="stage">
          <div flex scroll>
            <h1>todo: tree example</h1>
          </div>
          <div>footer</div>
        </furo-vertical-flex>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('view-tree', ViewTree);
