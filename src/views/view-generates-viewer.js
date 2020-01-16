import {LitElement, html, css} from 'lit-element';
import { Theme } from '@furo/framework/theme.js';
import { FBP } from '@furo/fbp';
import '@furo/layout/furo-split-view.js';
import { panelRegistry } from '@furo/route/lib/panelRegistry.js';
import '@furo/navigation/furo-tree.js';
import '@furo/route/furo-panel-coordinator.js';
import '@furo/route/furo-qp-changer.js';
import '@furo/data/furo-data-object.js';

/**
 * `generate-viewer`
 *  viewer for ui builder results
 *
 * @customElement
 * @demo demo-generate-viewer
 * @appliesMixin FBP
 */
class ViewGeneratesViewer extends FBP(LitElement) {
  constructor() {
    super();

    /**
     * Register hook on wire --entityObj to
     * build up the tree from the registry
     */
    this._FBPAddWireHook('--entityObj', e => {
      // build a tree object
      const { root } = e;
      let id = 0;
      root._value = { id: (id += 1), display_name: 'generated elements', icon: 'apps' };

      const panelIcons = { edit: 'editor:mode-edit', display: 'visibility' };
      for (const typeName in panelRegistry._registry) {
        // eslint-disable-line
        const type = panelRegistry._registry[typeName];

        const n = {
          id: (id += 1),
          display_name: typeName,
          is_group_label: true,
          panel: null,
          children: [],
        };

        for (const panel in type) {
          const p = {
            id: (id += 1),
            display_name: panel,
            icon: panelIcons[panel],
            panel,
            link: {
              rel: null,
              method: null,
              href: null,
              type: typeName,
            },
          };
          n.children.push(p);
        }

        root.children.add(n);
      }
    });

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
        height: 100%;

      }

      :host([hidden]) {
        display: none;
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
      <furo-split-view>
        
          <furo-tree
                  slot="master"
                  root-as-header
                  ƒ-bind-data="--entityObj"
                  qp="t"
                  ƒ-location-in="--qp"
                  @-node-selected="--nodeSelected"
                  @-qp-change-requested="--qpchangerequest"
          ></furo-tree>
        
        <furo-pages default="default" scroll>
          <!-- static panels -->
          <panel-default name="default"></panel-default>
          <!-- dynamic panels -->
          <furo-panel-coordinator ƒ-show-page="--nodeSelected" ƒ-close-all="--pageDeActivated"
                                  @-panels-changed="--panelChanges"></furo-panel-coordinator>
        </furo-pages>
      </furo-split-view>

      <furo-data-object type="tree.Tree" @-object-ready="--entityObj"></furo-data-object>
      <furo-qp-changer ƒ-set-qp="--qpchangerequest"></furo-qp-changer>
      <furo-location url-space-regex="^/generates" @-location-query-changed="--qp"></furo-location>

    `;
  }
}

window.customElements.define('view-generates-viewer', ViewGeneratesViewer);
