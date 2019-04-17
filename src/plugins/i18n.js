/* eslint-disable */
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import languages from '../languages/languages';

Vue.use(VueI18n);

const messages = {
  en: languages.en,
  ge: languages.ge,
};

const i18n = new VueI18n({
  locale: 'en', // set locale
  fallbackLocale: 'ge', // set fallback locale
  messages, // set locale messages
});

export default i18n;
