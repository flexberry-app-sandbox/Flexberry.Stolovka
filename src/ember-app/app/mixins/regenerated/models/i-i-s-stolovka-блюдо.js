import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  название: DS.attr('string'),
  стоимость: DS.attr('decimal'),
  типБлюда: DS.belongsTo('i-i-s-stolovka-тип-блюда', { inverse: null, async: false }),
  заказ: DS.belongsTo('i-i-s-stolovka-заказ', { inverse: 'блюдо', async: false })
});

export let ValidationRules = {
  название: {
    descriptionKey: 'models.i-i-s-stolovka-блюдо.validations.название.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  стоимость: {
    descriptionKey: 'models.i-i-s-stolovka-блюдо.validations.стоимость.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  типБлюда: {
    descriptionKey: 'models.i-i-s-stolovka-блюдо.validations.типБлюда.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  заказ: {
    descriptionKey: 'models.i-i-s-stolovka-блюдо.validations.заказ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('БлюдоE', 'i-i-s-stolovka-блюдо', {
    название: attr('Название', { index: 0 }),
    стоимость: attr('Стоимость', { index: 1 }),
    типБлюда: belongsTo('i-i-s-stolovka-тип-блюда', 'Тип блюда', {
      название: attr('Название', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'название' })
  });
};
