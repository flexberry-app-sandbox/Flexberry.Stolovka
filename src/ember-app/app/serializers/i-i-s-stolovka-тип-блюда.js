import { Serializer as ТипБлюдаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-stolovka-тип-блюда';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТипБлюдаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
