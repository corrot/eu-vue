import Vue from 'vue';
import App from '@/App';
import BootstrapVue from 'bootstrap-vue';
import router from '@/router';
import i18n from '@/plugins/i18n';
import FlagIcon from 'vue-flag-icon';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faTwitterSquare,
  faFacebookSquare,
  faYoutubeSquare,
  faAdobe,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.config = {
  autoAddCss: false,
};

library.add(faTwitterSquare);
library.add(faFacebookSquare);
library.add(faYoutubeSquare);
library.add(faAdobe);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(FlagIcon);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  render: h => h(App),
});
