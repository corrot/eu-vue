import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import FlagIcon from 'vue-flag-icon';
import VCalendar from 'v-calendar';

import App from '@/App';
import router from '@/router';
import i18n from '@/plugins/i18n';

// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';

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

Vue.use(VCalendar);
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
