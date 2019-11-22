// eslint-disable-next-line import/no-extraneous-dependencies
import { fixture, html } from '@open-wc/testing';
import '../src/views/view-dashboard.js';

describe('view-dashboard', () => {
  let dashboard;
  let contentArea;
  beforeEach(async () => {
    dashboard = await fixture(html`<view-dashboard style="height: 100vh"></view-dashboard>`);
    await dashboard.updateComplete;
    contentArea = dashboard.shadowRoot.querySelector(".content");
  });

  it('should have 3 cards', done => {

      const els = contentArea.querySelectorAll('furo-card');
      assert.equal(els.length, 3);

      done();

  });
});
