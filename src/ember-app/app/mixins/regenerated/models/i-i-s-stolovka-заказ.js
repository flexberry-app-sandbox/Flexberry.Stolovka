import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  итог: DS.attr('decimal'),
  заказчик: DS.belongsTo('i-i-s-stolovka-заказчик', { inverse: null, async: false }),
  блюдо: DS.hasMany('i-i-s-stolovka-блюдо', { inverse: 'заказ', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-stolovka-заказ.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  итог: {
    descriptionKey: 'models.i-i-s-stolovka-заказ.validations.итог.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  заказчик: {
    descriptionKey: 'models.i-i-s-stolovka-заказ.validations.заказчик.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  блюдо: {
    descriptionKey: 'models.i-i-s-stolovka-заказ.validations.блюдо.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаказE', 'i-i-s-stolovka-заказ', {
    дата: attr('Дата', { index: 0 }),
    итог: attr('Итог', { index: 1 }),
    заказчик: belongsTo('i-i-s-stolovka-заказчик', 'Заказчик', {
      название: attr('Название', { index: 3 })
    }, { index: 2 }),
    блюдо: hasMany('i-i-s-stolovka-блюдо', 'Блюдо', {
      название: attr('Название', { index: 0 }),
      стоимость: attr('Стоимость', { index: 1 }),
      типБлюда: belongsTo('i-i-s-stolovka-тип-блюда', 'Тип блюда', {
        название: attr('Название', { index: 3, hidden: true })
      }, { index: 2, displayMemberPath: 'название' })
    })
  });

  modelClass.defineProjection('ЗаказL', 'i-i-s-stolovka-заказ', {
    дата: attr('Дата', { index: 0 }),
    итог: attr('Итог', { index: 1 }),
    заказчик: belongsTo('i-i-s-stolovka-заказчик', 'Название', {
      название: attr('Название', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
