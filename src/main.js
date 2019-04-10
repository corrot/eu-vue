import Vue from 'vue';
import App from '@/App';
import BootstrapVue from 'bootstrap-vue';
import router from '@/router';
import i18n from '@/plugins/i18n';
import FlagIcon from 'vue-flag-icon';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(FlagIcon);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  render: h => h(App)
})
