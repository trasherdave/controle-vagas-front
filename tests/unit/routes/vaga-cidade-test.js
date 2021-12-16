import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | vaga-cidade', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:vaga-cidade');
    assert.ok(route);
  });
});
