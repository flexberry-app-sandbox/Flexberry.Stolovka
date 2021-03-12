import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-stolovka-блюдо', 'Unit | Model | i-i-s-stolovka-блюдо', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-stolovka-блюдо',
    'model:i-i-s-stolovka-заказ',
    'model:i-i-s-stolovka-заказчик',
    'model:i-i-s-stolovka-тип-блюда',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
