/* eslint-disable */
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import languages from '../languages/languages';

Vue.use(VueI18n);

const messages = {
  en: languages.en,
  ge: languages.ge,
};

const activeLocale = localStorage.getItem('activeLocale');

const i18n = new VueI18n({
  locale: activeLocale || 'en', // set locale
  // silentTranslationWarn,
  fallbackLocale: 'ge', // set fallback locale
  messages, // set locale messages
});

export default i18n;
