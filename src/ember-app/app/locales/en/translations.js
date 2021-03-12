import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISStolovkaЗаказLForm from './forms/i-i-s-stolovka-заказ-l';
import IISStolovkaЗаказчикLForm from './forms/i-i-s-stolovka-заказчик-l';
import IISStolovkaТипБлюдаLForm from './forms/i-i-s-stolovka-тип-блюда-l';
import IISStolovkaЗаказEForm from './forms/i-i-s-stolovka-заказ-e';
import IISStolovkaЗаказчикEForm from './forms/i-i-s-stolovka-заказчик-e';
import IISStolovkaТипБлюдаEForm from './forms/i-i-s-stolovka-тип-блюда-e';
import IISStolovkaБлюдоModel from './models/i-i-s-stolovka-блюдо';
import IISStolovkaЗаказModel from './models/i-i-s-stolovka-заказ';
import IISStolovkaЗаказчикModel from './models/i-i-s-stolovka-заказчик';
import IISStolovkaТипБлюдаModel from './models/i-i-s-stolovka-тип-блюда';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-stolovka-блюдо': IISStolovkaБлюдоModel,
    'i-i-s-stolovka-заказ': IISStolovkaЗаказModel,
    'i-i-s-stolovka-заказчик': IISStolovkaЗаказчикModel,
    'i-i-s-stolovka-тип-блюда': IISStolovkaТипБлюдаModel
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        stolovka: {
          caption: 'stolovka',
          title: 'stolovka',
          'i-i-s-stolovka-заказчик-l': {
            caption: 'i-i-s-stolovka-заказчик-l',
            title: 'i-i-s-stolovka-заказчик-l'
          },
          'i-i-s-stolovka-тип-блюда-l': {
            caption: 'i-i-s-stolovka-тип-блюда-l',
            title: 'i-i-s-stolovka-тип-блюда-l'
          },
          'i-i-s-stolovka-заказ-l': {
            caption: 'i-i-s-stolovka-заказ-l',
            title: 'i-i-s-stolovka-заказ-l'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-stolovka-заказ-l': IISStolovkaЗаказLForm,
    'i-i-s-stolovka-заказчик-l': IISStolovkaЗаказчикLForm,
    'i-i-s-stolovka-тип-блюда-l': IISStolovkaТипБлюдаLForm,
    'i-i-s-stolovka-заказ-e': IISStolovkaЗаказEForm,
    'i-i-s-stolovka-заказчик-e': IISStolovkaЗаказчикEForm,
    'i-i-s-stolovka-тип-блюда-e': IISStolovkaТипБлюдаEForm
  },

});

export default translations;
