import { Serializer as ЗаказчикSerializer } from
  '../mixins/regenerated/serializers/i-i-s-stolovka-заказчик';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЗаказчикSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
