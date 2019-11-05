import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";

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

  constructor() {
    super();
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Description
       */
      myBool: {type: Boolean}
    };
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    //this._FBPTraceWires()
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent(this.name) || css`
        :host {
            display: block;
            width: 256px;
            background-color: var(--background);
            color: var(--on-background);
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
            padding-left: var(--spacing, 16px);
        }

        .secondary {
            font-size: 14px;
            height: 24px;
            letter-spacing: 0.1px;
            padding-left: var(--spacing, 16px);
            color: var(--secondary-color, var(--on-primary-light, #777777));
            line-height: 20px;
        }

        .head {
            height: 64px;
            
            background: var(--background);
        }

        ul {
            list-style: none;
            margin: 0;
            margin-bottom: 14px;
            padding: var(--spacing-s) 4px;
            border-bottom: 1px solid var(--separator, rgb(228, 228, 228));
        }

        li {
            min-height: 40px;
            line-height: 40px;
            margin-bottom: 4px;
            color: var(--on-surface);
            letter-spacing: .01785714em;
            font-size: .875rem;
            font-weight: 500;
            padding: 0 var(--spacing-xs);
            transition: all 0.2s;
        }
        li:hover{
            background-color: var(--secondary);
            border-radius: 4px;
            color: var(--on-secondary);
            cursor: pointer;
        }
        a{
            color: inherit;
            height: 100%;
            width: 100%;
            text-decoration: none;
            display: block;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .label {
            background: var(--background);
            font-size: 14px;
            height: 24px;
            letter-spacing: 0.1px;
            padding-left: var(--spacing, 16px);
            color: var(--secondary-color, var(--on-primary-light, #777777));
            line-height: 20px;
            

        }
        furo-icon{
            margin-right: 24px;
        }
    `
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
        <div class="title">Main menu</div>
        <div class="secondary">Secondary</div>
      </div>


      <ul>
        <li><a href="/dashboard">
          dashboarddashboard d ashboard</a></li>
        <li><a href="/dashboard">
          <furo-icon icon="apps"></furo-icon>
          dashboard</a></li>
        <li><a href="/dashboard">
          <furo-icon icon="apps"></furo-icon>
          dashboard</a></li>
        <li><a href="/dashboard">
          <furo-icon icon="apps"></furo-icon>
          dashboard</a></li>
        <li><a href="/dashboard">
          <furo-icon icon="apps"></furo-icon>
          dashboard</a></li>
        <li><a href="/dashboard">
          <furo-icon icon="apps"></furo-icon>
          dashboard</a></li>
      </ul>
      
      <div class="label">Main Nav</div>
      <ul>
        <li><a href="/tree">
          <furo-icon icon="apps"></furo-icon>
          tree</a></li>
        <li><a href="/tree">
          <furo-icon icon="apps"></furo-icon>
          dashboard</a></li>
      </ul>
      
        
      <div class="label">Main Nav</div>
      <ul>
        <li><a href="/tree">
          <furo-icon icon="apps"></furo-icon>
          tree</a></li>
        <li><a href="/tree">
          <furo-icon icon="apps"></furo-icon>
          dashboard</a></li>
      </ul>
      
        
      <div class="label">Main Nav</div>
      <ul>
        <li><a href="/tree">
          <furo-icon icon="apps"></furo-icon>
          tree</a></li>
        <li><a href="/tree">
          <furo-icon icon="apps"></furo-icon>
          dashboard</a></li>
      </ul>
      
        

    `;
  }
}

window.customElements.define('main-menu', MainMenu);
