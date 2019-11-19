// eslint-disable-next-line import/no-extraneous-dependencies
import { fixture, html } from '@open-wc/testing';
import '../src/app-shell.js';
import '../src/views/view-formsample.js';

describe('view-formsample', () => {
  let app;
  let mainStage;
  let appDrawer;
  let viewForm;

  beforeEach(async () => {
    app = await fixture(html`
      <app-shell style="width: 1200px"></app-shell>
    `);

    window.history.pushState(null, 'form', '/dashboard');
    mainStage = app.shadowRoot.querySelector('main-stage');
    await mainStage.updateComplete;
    appDrawer = mainStage.shadowRoot.querySelector('furo-app-drawer');
    await appDrawer.updateComplete;

    const pages = appDrawer.querySelector('furo-pages');
    viewForm = pages.querySelector('*[name=form]');
    await viewForm.updateComplete;
  });



  it('should open the form', done => {
    viewForm._FBPAddWireHook('--pageActivated', e => {
      const els = viewForm.shadowRoot.querySelectorAll('*');
      assert.equal(els.length, 16);
      assert.equal(e.path, '/form');
      done();
    });
    window.history.pushState(null, 'form', '/form');
  });

});
