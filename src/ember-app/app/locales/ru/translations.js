import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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

  'application-name': 'Stolovka',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Stolovka',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Stolovka',
          title: 'Stolovka'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        stolovka: {
          caption: 'Stolovka',
          title: 'Stolovka',
          'i-i-s-stolovka-заказчик-l': {
            caption: 'Заказчик',
            title: ''
          },
          'i-i-s-stolovka-тип-блюда-l': {
            caption: 'Тип блюда',
            title: ''
          },
          'i-i-s-stolovka-заказ-l': {
            caption: 'Заказ',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
