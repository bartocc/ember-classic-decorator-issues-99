import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'foo/tests/helpers';
import { isTesting } from '@embroider/macros/runtime';

module('Acceptance | foo', function (hooks) {
  setupApplicationTest(hooks);

  test('Check isTesting from @embroider/macros/runtime', async function (assert) {
    assert.ok(isTesting());
  });
});
