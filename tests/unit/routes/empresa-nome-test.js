import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | empresa-nome', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:empresa-nome');
    assert.ok(route);
  });
});
