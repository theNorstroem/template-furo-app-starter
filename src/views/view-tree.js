import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme.js';
import { FBP } from '@furo/fbp';
import '@furo/layout/src/furo-vertical-scroller.js';
import '@furo/layout/src/furo-split-view.js';
import '@furo/data/src/furo-data-object.js';
import '@furo/util/src/furo-fetch-json.js';
import '@furo/navigation/src/furo-tree.js';
import '@furo/route/src/furo-qp-changer.js';

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
        }

        :host([hidden]) {
          display: none;
        }

        .stage {
          box-sizing: border-box;
          background-color: var(--surface);
          color: var(--on-surface);
          padding: 0 var(--spacing-s);
        }

        /* clear margin top for the first element in stage, so the contents begins always at the same position */
        .stage > *:first-child {
          margin-top: 0;
        }

        furo-tree {
          border-right: 1px solid var(--separator);
        }

        furo-split-view {
          overflow: hidden;
        }
        h1 {
          font-family: 'Roboto', 'Noto', sans-serif;
          font-size: 96px;
          letter-spacing: -1.5px;
          font-weight: 200;
        }
        h2 {
          font-family: 'Roboto', 'Noto', sans-serif;
          font-size: 60px;
          letter-spacing: -0.5px;
          font-weight: 400;
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

        <furo-split-view flex>
          <furo-tree
            slot="master"
            root-as-header
            ƒ-bind-data="--treeObj"
            qp="t"
            ƒ-location-in="--qp"
            @-node-selected="--nodeSelected"
            @-qp-change-requested="--qpchangerequest"
          ></furo-tree>

          <furo-vertical-scroller class="stage">
            <h1>H1 is huge</h1>
            <p>Body text</p>
            <h2>Type Scale H2</h2>
            <div style="height: 1300px; border: 1px dashed blue">
              <pre>1300px placeholder to show the scrolling</pre>
            </div>
            <p>End of content</p>
          </furo-vertical-scroller>
        </furo-split-view>
      </furo-vertical-flex>

      <!-- retreive data -->
      <furo-data-object
        type="navigation.Navigationnode"
        ƒ-inject-raw="--data"
        @-object-ready="--treeObj"
      ></furo-data-object>

      <!-- Use the --FBPready wire to load the tree data once, --pageActivated will not work on the first time because of lazy loading  -->
      <furo-fetch-json
        src="${window.APPROOT}/api/trees/minimalTreeSample.json"
        ƒ-fetch="--FBPready"
        @-data="--data"
      ></furo-fetch-json>

      <furo-qp-changer ƒ-set-qp="--qpchangerequest"></furo-qp-changer>
      <furo-location
        url-space-regex="^${window.APPROOT}/tree/"
        @-location-query-changed="--qp"
      ></furo-location>
    `;
  }
}

window.customElements.define('view-tree', ViewTree);
