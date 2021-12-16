import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | candidato-cargo', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:candidato-cargo');
    assert.ok(route);
  });
});
