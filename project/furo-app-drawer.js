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
    if (this.isFloating) {
      let drawer = this.shadowRoot.getElementById("drawer");
      let width = drawer.getBoundingClientRect().width;
      //drawer.style.transform = "translate3d(0, 0, 0)";
      drawer.style.left = 0;
      let backdrop = this.shadowRoot.getElementById("backdrop");

      backdrop.style.opacity = 1;
      backdrop.style.pointerEvents = "auto";
    }
  }

  /**
   * closes the drawer when it is in float mode
   */
  close() {
    this.isOpen = false;
    if (this.isFloating) {
      let drawer = this.shadowRoot.getElementById("drawer");
      let width = drawer.getBoundingClientRect().width;
      if (this.isReverse) {
        //drawer.style.transform = "translate3d("+ width +"px, 0, 0)";

      } else {
        drawer.style.left = -width + "px";
        //drawer.style.transform = "translate3d(-"+ width +"px, 0, 0)";
      }


      let backdrop = this.shadowRoot.getElementById("backdrop");
      backdrop.style.opacity = 0;
      backdrop.style.pointerEvents = "none";

    }
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
      this.close();
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


    let drawer = this.shadowRoot.getElementById("drawer");
    let backdrop = this.shadowRoot.getElementById("backdrop");


    this._FBPAddWireHook("--trackstart", (e) => {
      if (this.isFloating) {
        let start_x = this._getScreenX(e);
        let start_time = performance.now();
        let width = drawer.getBoundingClientRect().width;
        drawer.style.transitionDuration = "0ms";


        // Setup a timer
        let animationframetimeout;
        // register move
        let moveHandler = (e) => {


          // If there's a timer, cancel it
          if (requestAnimationFrame) {
            window.cancelAnimationFrame(animationframetimeout);
          }

          if (e instanceof MouseEvent) {
            // prevent dragging of links in a drawer
            e.preventDefault();
          }

          // Setup the new requestAnimationFrame()
          animationframetimeout = window.requestAnimationFrame(() => {
            let distance = this._getScreenX(e) - start_x;
            // update drawer position
            let delta = (distance) * 100 / width;
            if (this.isOpen) {
              // limit the dragging, it makes no sense to pull the drawer in to the content area
              if ((!this.isReverse && delta > 0) || (this.isReverse && delta < 0)) {
                delta = 0;
              }
              //drawer.style.transform = "translate3d(" + distance + "px, 0, 0)";
              drawer.style.left = (distance) + "px";
              backdrop.style.opacity = Math.floor((100 + delta)) / 100;
            } else {


              // limit the dragging
              if (delta > 100) {
                delta = 100;
                distance = width;
              }
              if (delta < -100) {
                delta = -100;
                distance = -width;
              }

              if (this.isReverse) {
                //drawer.style.transform = "translate3d(" + (100 + delta) + "%, 0, 0)";
                drawer.style.left = (width + distance) + "px";
              } else {
                //drawer.style.transform = "translate3d(" + (delta - 100) + "%, 0, 0)";
                drawer.style.left = (distance - width) + "px";
              }
              // backdrop darkness
              backdrop.style.opacity = Math.abs(delta / 100);
            }


          });
        };


        // register move
        window.addEventListener("mousemove", moveHandler, true);
        window.addEventListener("touchmove", moveHandler, true);

        let trackEnd = (e) => {

          drawer.style.transitionDuration = "";
          // If there's a animation timer, cancel it
          if (requestAnimationFrame) {
            window.cancelAnimationFrame(animationframetimeout);
          }

          let end_time = performance.now();
          let distance = this._getScreenX(e) - start_x;
          let duration = end_time - start_time;

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
              if (this.isOpen) {
                this.open();
              } else {
                this.close();
              }
            } else {
              if (this.isOpen) {
                this.close();
              } else {
                this.open();
              }
            }
          }


          // unregister
          window.removeEventListener("mousemove", moveHandler, true);
          window.removeEventListener("touchmove", moveHandler, true);


        };
        // unregister movement tracker
        window.addEventListener("mouseup", trackEnd, {once: true});
        window.addEventListener("touchend", trackEnd, {once: true});


      }
    });
  }


  _getScreenX(e) {
    let x;
    if (e instanceof MouseEvent) {
      x = e.screenX;
    } else {
      x = e.changedTouches[0].screenX;
    }
    return x;
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


        #drawer {
            border-right: 1px solid var(--separator, rgb(228, 228, 228));
            transition-duration: 200ms;
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

        /* put the floating drawer outside the visible area */
        :host([float]) #drawer {
            position: absolute;
            z-index: 1;
            top: 0;
            left: 0;
            bottom: 0;
        }

        /* put drawer to the right side on reverse mode */
        :host([float][reverse]) #drawer {
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
        <div id="drawer" @-touchstart="--trackstart(*)" @-mousedown="--trackstart(*)">
          <slot name="drawer"></slot>
        </div>
        <div flex>
          <slot></slot>
        </div>
      </furo-horizontal-flex>
      <div id="backdrop" @-click="--backdropClicked"></div>
      <div id="drag" @-touchstart="--trackstart(*)" @-mousedown="--trackstart(*)"></div>
    `;
  }
}

window.customElements.define('furo-app-drawer', FuroAppDrawer);
