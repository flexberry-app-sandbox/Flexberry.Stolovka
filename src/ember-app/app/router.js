import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-stolovka-заказ-l');
  this.route('i-i-s-stolovka-заказ-e',
  { path: 'i-i-s-stolovka-заказ-e/:id' });
  this.route('i-i-s-stolovka-заказ-e.new',
  { path: 'i-i-s-stolovka-заказ-e/new' });
  this.route('i-i-s-stolovka-заказчик-l');
  this.route('i-i-s-stolovka-заказчик-e',
  { path: 'i-i-s-stolovka-заказчик-e/:id' });
  this.route('i-i-s-stolovka-заказчик-e.new',
  { path: 'i-i-s-stolovka-заказчик-e/new' });
  this.route('i-i-s-stolovka-тип-блюда-l');
  this.route('i-i-s-stolovka-тип-блюда-e',
  { path: 'i-i-s-stolovka-тип-блюда-e/:id' });
  this.route('i-i-s-stolovka-тип-блюда-e.new',
  { path: 'i-i-s-stolovka-тип-блюда-e/new' });
});

export default Router;
