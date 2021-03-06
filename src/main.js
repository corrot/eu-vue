import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import FlagIcon from 'vue-flag-icon';
import VueMarkdown from 'vue-markdown';
import VuePureLightbox from 'vue-pure-lightbox';
import styles from 'vue-pure-lightbox/dist/VuePureLightbox.css';
import SocialSharing from 'vue-social-sharing';

import App from '@/App';
import router from '@/router';
import i18n from '@/plugins/i18n';
import axios from 'axios';
import VueYouTubeEmbed from 'vue-youtube-embed';
import VueSimpleMarkdown from 'vue-simple-markdown';
import 'vue-simple-markdown/dist/vue-simple-markdown.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faTwitter,
  faFacebook,
  faYoutube,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import {
  faLink,
  faSitemap,
  faPrint,
  faSearch,
  faBars,
  faPlusSquare,
  faArrowLeft,
  faFile,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.config = {
  autoAddCss: false,
};

library.add(
  faTwitter,
  faFacebook,
  faYoutube,
  faInstagram,
  faLinkedin,
  faLink,
  faSitemap,
  faPrint,
  faBars,
  faSearch,
  faPlusSquare,
  faArrowLeft,
  faFile
);

Vue.prototype.$http = axios;

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(FlagIcon);
Vue.use(BootstrapVue);
Vue.use(VueSimpleMarkdown);
Vue.use(VueYouTubeEmbed);
Vue.use(VueMarkdown);
Vue.use(VuePureLightbox);
Vue.use(SocialSharing);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  styles,
  render: h => h(App),
});
