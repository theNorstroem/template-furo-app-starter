import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/theme.js';
import { FBP } from '@furo/fbp';
import '@furo/layout/furo-vertical-scroller.js';
import '@furo/layout/furo-split-view.js';
import '@furo/data/furo-data-object.js';
import '@furo/util/furo-fetch-json.js';
import '@furo/navigation/furo-tree.js';
import '@furo/route/furo-qp-changer.js';

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
          padding: var(--spacing-s);
        }

        /* clear margin top for the first element in stage, so the contents begins always at the same position */
        .stage > *:first-child {
          margin-top: 0;
        }

        furo-tree {
          border-right: 1px solid var(--separator);
        }

        furo-split-view{
          overflow: hidden;
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
            <h1>todo: tree example</h1>
            <div style="height: 1300px; border: 1px dashed blue">
              <pre>1300px placeholder to show the scrolling</pre>
            </div>
          </furo-vertical-scroller>
        </furo-split-view>
      </furo-vertical-flex>

      <!-- retreive data -->
      <furo-data-object
        type="tree.Tree"
        ƒ-inject-raw="--data"
        @-object-ready="--treeObj"
      ></furo-data-object>

      <!-- Use the --FBPready wire to load the tree data once, --pageActivated will not work on the first time because of lazy loading  -->
      <furo-fetch-json
        src="/configs/minimalTreeSample.json"
        ƒ-fetch="--FBPready"
        @-data="--data"
      ></furo-fetch-json>

      <furo-qp-changer ƒ-set-qp="--qpchangerequest"></furo-qp-changer>
      <furo-location url-space-regex="^/tree" @-location-query-changed="--qp"></furo-location>
    `;
  }
}

window.customElements.define('view-tree', ViewTree);
