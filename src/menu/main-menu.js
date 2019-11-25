import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/theme.js';
import { FBP } from '@furo/fbp';

/**
 * `main-menu`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo-main-menu
 * @appliesMixin FBP
 */
class MainMenu extends FBP(LitElement) {
  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Description
       */
      headerText: { type: String, attribute: 'header-text' },
      secondaryText: { type: String, attribute: 'secondary-text' },
    };
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires()
    /**
     * Register hook on wire --lc to
     * check location changed and mark the selected element
     */
    this._FBPAddWireHook('--lc', e => {
      this.shadowRoot.querySelectorAll('a').forEach(menuitem => {
        if (menuitem.getAttribute('href') === e.path) {
          // select
          menuitem.parentElement.setAttribute('selected', '');
        } else {
          menuitem.parentElement.removeAttribute('selected');
        }
      });
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
          width: var(--navigation-drawer-width, 256px);
          background-color: var(--surface);
          color: var(--on-surface);
          height: 100%;
          overflow: auto;
        }

        :host([hidden]) {
          display: none;
        }

        .title {
          font-size: 20px;
          height: 40px;
          line-height: 56px;
          padding-left: var(--spacing-s, 16px);
        }

        .secondary {
          font-size: 14px;
          height: 24px;
          letter-spacing: 0.1px;
          padding-left: var(--spacing-s, 16px);
          color: rgba(var(--on-surface-rgb), var(--medium-emphasis-surface));
          line-height: 20px;
        }

        .head {
          height: 64px;
        }

        ul {
          list-style: none;
          margin: 0;
          margin-bottom: 14px;
          padding: var(--spacing-xs) 8px;
          border-bottom: 1px solid var(--separator, rgb(228, 228, 228));
        }

        li {
          min-height: 40px;
          line-height: 40px;
          margin-bottom: var(--spacing-xxs, 4px);
          letter-spacing: 0.01785714em;
          font-size: 0.875rem;
          font-weight: 500;
          padding: 0 var(--spacing-xs);
          transition: all 0.2s;
          border-radius: 4px;
        }

        li:hover {
          border-radius: 4px;
          cursor: pointer;
        }

        li:hover {
          background-color: rgba(var(--primary-rgb), var(--state-hover));
          color: var(--primary);
        }

        li[selected] {
          background-color: rgba(var(--primary-rgb), var(--state-selected));
          color: var(--primary);
        }

        li[selected]:focus {
          background-color: rgba(var(--primary-rgb), var(--state-selected-focus));
          color: var(--primary);
        }

        li[selected]:hover {
          background-color: rgba(var(--primary-rgb), var(--state-selected-hover));
          color: var(--primary);
        }

        li:focus-within {
          background-color: rgba(var(--primary-rgb), var(--state-focus));
          color: var(--primary);
          outline: none;
        }

        li:active,
        li[selected]:active {
          background-color: rgba(var(--primary-rgb), var(--state-active));
        }

        li[disabled] {
          color: rgba(255, 255, 255, var(--state-disabled));
          background-color: rgba(var(--primary-rgb), var(--state-disabled));
        }

        a {
          color: inherit;
          height: 100%;
          width: 100%;
          text-decoration: none;
          display: block;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          outline: none;
        }

        .label {
          font-size: 14px;
          height: 24px;
          letter-spacing: 0.1px;
          padding-left: var(--spacing-s, 16px);
          color: rgba(var(--on-surface-rgb), var(--medium-emphasis-surface));
          line-height: 20px;
        }

        furo-icon {
          margin-right: var(--spacing, 24px);
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
      <div class="head">
        <div class="title">${this.headerText}</div>
        <div class="secondary">${this.secondaryText}</div>
      </div>

      <ul>
        <li>
          <a href="/dashboard">
            <furo-icon icon="dashboard"></furo-icon>
            dashboard</a
          >
        </li>
        <li>
          <a href="/tree">
            <furo-icon icon="list"></furo-icon>
            tree sample</a
          >
        </li>
      </ul>
      <div class="label">other stuff</div>
      <ul>
        <li>
          <a href="/form">
            <furo-icon icon="receipt"></furo-icon>
            form sample</a
          >
        </li>
        <li>
          <a href="/auth">
            <furo-icon icon="perm-identity"></furo-icon>
            Auth</a
          >
        </li>
        <li>
          <a href="/unknown">
            <furo-icon icon="extension"></furo-icon>
            link to nowhere</a
          >
        </li>
        <li>
          <a href="/somecontent">
            <furo-icon icon="warning"></furo-icon>
            some content</a
          >
        </li>
        <li>
          <a href="/examplelayout">
            <furo-icon icon="view-day"></furo-icon>
            layout example</a
          >
        </li>
      </ul>
      <furo-location @-location-changed="--lc"></furo-location>
    `;
  }
}

window.customElements.define('main-menu', MainMenu);
