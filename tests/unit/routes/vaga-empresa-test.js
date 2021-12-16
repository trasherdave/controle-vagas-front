import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | vaga-empresa', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:vaga-empresa');
    assert.ok(route);
  });
});
