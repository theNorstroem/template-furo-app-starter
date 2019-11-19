// eslint-disable-next-line import/no-extraneous-dependencies
import { fixture, html } from '@open-wc/testing';
import '../src/app-shell.js';
import '../src/views/view-formsample.js';
import '../src/views/view-tree.js';

describe('my-test', () => {
  let app;
  let mainStage;
  let appDrawer;
  let mainMenu;

  beforeEach(async () => {
    app = await fixture(html`
      <app-shell style="width: 1200px"></app-shell>
    `);

    mainStage = app.shadowRoot.querySelector('main-stage');
    await mainStage.updateComplete;
    appDrawer = mainStage.shadowRoot.querySelector('furo-app-drawer');
    await appDrawer.updateComplete;
    mainMenu = appDrawer.querySelector('main-menu');
  });


  it('should open the form', done => {
    window.history.pushState(null, 'form', '/form');
    mainStage._FBPAddWireHook('--locationChanged', e => {
      assert.equal(window.location.pathname, '/form');
      assert.equal(e.path, '/form');
      done();
    });
  });

  it('should open the tree', done => {
    window.history.pushState(null, 'tree', '/tree');
    mainStage._FBPAddWireHook('--locationChanged', e => {
      assert.equal(window.location.pathname, '/tree');
      assert.equal(e.path, '/tree');
      done();
    });
  });

  it('should open the tree', done => {
    mainMenu.shadowRoot.children[1].children[1].children[0].click();
    mainStage._FBPAddWireHook('--locationChanged', e => {
      assert.equal(window.location.pathname, '/tree');
      assert.equal(e.path, '/tree');
      done();
    });
  });

  it('should open the dashboard', done => {
    mainMenu.shadowRoot.children[1].children[0].children[0].click();
    mainStage._FBPAddWireHook('--locationChanged', e => {
      assert.equal(window.location.pathname, '/dashboard');
      assert.equal(e.path, '/dashboard');
      done();
    });
  });

  it('should start with a 404, because the test suite url make no sense for the app', done => {
    assert.equal(app.nodeName.toLowerCase(), 'app-shell');
    assert.equal(appDrawer.nodeName.toLowerCase(), 'furo-app-drawer');
    done();
  });
});
