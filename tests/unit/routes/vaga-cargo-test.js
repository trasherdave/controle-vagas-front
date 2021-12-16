import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | vaga-cargo', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:vaga-cargo');
    assert.ok(route);
  });
});
