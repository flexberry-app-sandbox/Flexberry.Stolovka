import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.irregular('заказчик', 'Заказчикs');
inflector.irregular('блюдо', 'Блюдоs');
inflector.irregular('заказ', 'Заказs');
inflector.irregular('блюда', 'Блюдаs');

export default {};
