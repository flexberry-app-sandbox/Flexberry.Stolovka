import { Serializer as БлюдоSerializer } from
  '../mixins/regenerated/serializers/i-i-s-stolovka-блюдо';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(БлюдоSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
