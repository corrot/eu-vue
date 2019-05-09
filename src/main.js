import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import FlagIcon from 'vue-flag-icon';
import VCalendar from 'v-calendar';

import App from '@/App';
import router from '@/router';
import i18n from '@/plugins/i18n';
import axios from 'axios';

import VueSimpleMarkdown from 'vue-simple-markdown';
import 'vue-simple-markdown/dist/vue-simple-markdown.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faTwitterSquare,
  faFacebookSquare,
  faYoutubeSquare,
} from '@fortawesome/free-brands-svg-icons';
import { faLink, faSitemap, faPrint } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.config = {
  autoAddCss: false,
};

library.add(
  faTwitterSquare,
  faFacebookSquare,
  faYoutubeSquare,
  faLink,
  faSitemap,
  faPrint
);

Vue.prototype.$http = axios;

Vue.use(VCalendar);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(FlagIcon);
Vue.use(BootstrapVue);
Vue.use(VueSimpleMarkdown);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  render: h => h(App),
});
