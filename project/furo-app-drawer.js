import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/layout/furo-horizontal-flex"

/**
 * `furo-app-drawer`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo-furo-app-drawer
 * @appliesMixin FBP
 */
class FuroAppDrawer extends FBP(LitElement) {

  constructor() {
    super();
    /**
     * Width for the autofloat
     * @type {number}
     */
    this.floatBreakpoint = 960;


    // return this to node which want to connect
    this.addEventListener("connect-to-drawer-requested", (e) => {
      if (e.detail.name === this.name) {
        e.detail.drawer = this;
      }
    })
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Use method open or set this attribute to open a drawer in float mode
       */
      isOpen: {type: Boolean, reflect: true, attribute: "open"},
      /**
       * Use method floatDrawer or set this attribute to enable float mode
       */
      _isFloating: {type: Boolean, reflect: true, attribute: "float"},

      /**
       * Enable this to put the drawer on the right side
       */
      isReverse: {type: Boolean, reflect: true, attribute: "reverse"},
      /**
       * disables automatic floating mode
       */
      noauto: {type: Boolean},
      /**
       * Min width of the app-drawer to switch to floating mode
       */
      floatBreakpoint: {type: Number, attribute: "float-breakpoint"},
      /**
       * name of this drawer, needed if you want to connect to this drawer
       */
      name: {type: String}
    };
  }

  set isFloating(val) {
    this._isFloating = val;
    if (val) {
      /**
       * @event is-floating
       * Fired when drawer is in floating mode. This event is fired when drawer is closed and open
       */
      let customEvent = new Event('is-floating', {composed: true, bubbles: true});
      this.dispatchEvent(customEvent)
    } else {
      /**
       * @event is-pinned
       * Fired when drawer is in pinned mode.
       */
      let customEvent = new Event('is-pinned', {composed: true, bubbles: true});
      this.dispatchEvent(customEvent)
    }
  }

  get isFloating() {
    return this._isFloating;
  }

  /**
   * open the drawer when it is in float mode
   */
  open() {
    this.isOpen = true;
  }

  /**
   * closes the drawer when it is in float mode
   */
  close() {
    this.isOpen = false;
  }

  /**
   * let the drawer float
   */
  floatDrawer() {
    this.isFloating = true;

  }

  /**
   * disable the floating
   */
  pinDrawer() {
    this.isFloating = false;
  }

  /**
   * Put the drawer on the right side
   *
   * Or use the attribute reverse for the same effect
   *
   */
  putDrawerToRight() {
    this.isReverse = true;
  }

  /**
   * Put the drawer on the left side (default)
   */
  putDrawerToLeft() {
    this.isReverse = false;
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    //this._FBPTraceWires()
    /**
     * Register hook on wire --backdropClicked to
     * close the menu
     */
    this._FBPAddWireHook("--backdropClicked", (e) => {
      this.isOpen = false;
    });

    if (!this.noauto) {
      if (window.ResizeObserver) {
        let ro = new ResizeObserver(entries => {
          for (let entry of entries) {
            const cr = entry.contentRect;
            this.isFloating = cr.width <= this.floatBreakpoint;

          }
        });
        ro.observe(this);
      } else {
        // fallback, just listen to the resize event
        let cr = this.getBoundingClientRect();
        this.isFloating = cr.width <= this.floatBreakpoint;

        window.addEventListener("resize", (e) => {
          let cr = this.getBoundingClientRect();
          this.isFloating = cr.width <= this.floatBreakpoint;
        })
      }
    }


    let drawer = this.shadowRoot.querySelector(".drawer");
    let backdrop = this.shadowRoot.getElementById("backdrop");


    this._FBPAddWireHook("--swipestart", (e) => {
      if(this.isFloating){
      let start_x = e.screenX;
      let start_time = performance.now();
      let width = drawer.getBoundingClientRect().width;
      // register move
      let moveHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.style.cursor = "grab";
        let distance = e.screenX - start_x;
        // update drawer position

        let delta = (distance) * 100 / width;
        if (this.isOpen) {
          // elastic
          if((!this.isReverse && delta > 0) || (this.isReverse && delta < 0)){
            delta = 0;
          }
          drawer.style = "transform: translate3d(" + delta + "%, 0, 0);transition-duration:0;";
          backdrop.style = "opacity:" + ((100 + delta)/100);
        } else {


          // elastic
          if(delta > 100){
            delta = 100;
          }
          if(delta < -100){
            delta = -100;
          }

          if(this.isReverse){
            drawer.style = "transform: translate3d(" + (100 + delta ) + "%, 0, 0);transition-duration:0;";
          }else{
            drawer.style = "transform: translate3d(" + (delta - 100) + "%, 0, 0);transition-duration:0;";
          }
          // backdrop darkness
          backdrop.style = "opacity:" + Math.abs(delta/100);
        }
      };
      // register move
      window.addEventListener("mousemove", moveHandler, true);

      // unregister movement tracker
      window.addEventListener("mouseup", (e) => {
        let end_time = performance.now();
        let distance = e.screenX - start_x;
        if(e.changedTouches ){
          distance = e.changedTouches[0].screenX  - start_x;
        }
        let duration = end_time - start_time;

        // clear the styles, so that the css kicks in
        drawer.style = "transition-duration: 200ms;";
        backdrop.style = "";

        // quick movement
        if (Math.abs(distance) > 30 && duration < 200) {
          if (this.isOpen) {
            if ((!this.isReverse && distance < 0) || (this.isReverse && distance > 0)) {
              this.close();
            }
          } else {
            this.open();
          }
        } else {
          // complete the movement, slow
          let delta = (distance) * 100 / width;
          if (delta > -40 && delta < 40) {
            // restore initial pos
            if(this.isOpen){
              this.open();
            }else{
              this.close();
            }
          } else {
            if(this.isOpen){
              this.close();
            }else{
              this.open();
            }
          }
        }


        this.style.cursor = "";
        // unregister
        window.removeEventListener("mousemove", moveHandler, true);

      }, {once: true});
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
    return Theme.getThemeForComponent(this.name) || css`
        :host {
            display: block;
            height: 100%;
            position: relative;
            overflow: hidden;
        }

        :host([hidden]) {
            display: none;
        }

        furo-horizontal-flex {
            height: 100%;
        }

        /* put the floating drawer outside the visible area */
        :host([float]) .drawer {
            position: absolute;
            z-index: 1;
            top: 0;
            left: 0;
            bottom: 0;
            transform: translate3d(-100%, 0, 0);

        }

        .drawer {
            border-right: 1px solid var(--separator, rgb(228, 228, 228));
        }

        /* put drawer to the right side on reverse mode */
        :host([float][reverse]) .drawer {
            left: unset;
            right: 0;
            transform: translate3d(100%, 0, 0);
        }

        /* put the floating drawer to the visible area */
        :host([float][open]) .drawer {
            transform: translate3d(0, 0, 0);
        }

        /* enable the pointer events on backdrop for @-click */
        :host([float][open]) #backdrop {
            opacity: 1;
            pointer-events: auto;
        }

        /* disable pointer events */
        #backdrop {
            pointer-events: none;
            transition-duration: 200ms;
            transition-property: opacity;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            opacity: 0;
            background: var(--furo-app-drawer-backdrop, rgba(0, 0, 0, 0.5));
        }


        #drag {
            position: absolute;
            top: 0;
            width: 16px;
            bottom: 0;
            left: 0;
            
        }

        :host([reverse]) #drag {
            left: unset;
            right: 0;
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

      <furo-horizontal-flex ?reverse="${this.isReverse}">
        <div class="drawer" @-mousedown="--swipestart(*)">
          <slot name="drawer"></slot>
        </div>
        <div flex>
          <slot></slot>
        </div>
      </furo-horizontal-flex>
      <div id="backdrop" @-click="--backdropClicked"></div>
      <div id="drag" @-mousedown="--swipestart(*)"></div>
    `;
  }
}

window.customElements.define('furo-app-drawer', FuroAppDrawer);
