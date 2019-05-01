<template>
  <b-container>
    <div class="app-top-header">
      <router-link :to="`/`" class="logo-wrapper">
        <img :src="headerLogo">
      </router-link>
      <div>
        <br>
        <h3>საქართველოს კონკურენციის სააგენტო</h3>
        <br>
        <h3>Competition Agency of Georgia</h3>
        <h3></h3>
      </div>
      <div style="display: block">
        <ul class="social-container">
          <li>
            <a href="https://facebook.com" title="Facebook" target="_blank">
              <font-awesome-icon class="fa-2x icon-fb" :icon="['fab', 'facebook-square']"/>
            </a>
          </li>
          <li>
            <a href="https://twitter.com" title="Twitter" target="_blank">
              <font-awesome-icon class="fa-2x icon-twitter" :icon="['fab', 'twitter-square']"/>
            </a>
          </li>
          <li>
            <a href="https://youtube.com" title="Youtube" target="_blank">
              <font-awesome-icon class="fa-2x icon-youtube" :icon="['fab', 'youtube-square']"/>
            </a>
          </li>
        </ul>
        <div style="position: relative">
          <div
            style="cursor: pointer; position: absolute; right: 0"
            v-for="entry in languages"
            :key="entry.title"
            @click="changeLocale(entry.language)"
            v-show="entry.language !== i18n.locale"
          >
            <flag :iso="entry.flag" v-bind:squared="false"></flag>
          </div>
        </div>
      </div>
    </div>
  </b-container>
</template>
<script>
import i18n from '@/plugins/i18n';
import headerLogo from '@/assets/logo.png';
this.name = 'Header';
export default {
  name: this.name,
  methods: {
    handleClick: () => {
      console.log('clicked');
    },
    changeLocale(locale) {
      i18n.locale = locale;
    },
  },
  data() {
    return {
      languages: [
        { flag: 'gb', language: 'en', title: 'English' },
        { flag: 'ge', language: 'ge', title: 'ქართული' },
      ],
      i18n,
      headerLogo,
    };
  },
  created() {
    console.log('created: ', this.name);
  },
  destroyed() {
    console.log('destroyed: ', this.name);
  },
};
</script>

<style scoped>
.app-top-header {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}

.logo-wrapper {
  width: 136px;
  height: 136px;
}
.logo-wrapper > img {
  width: 100%;
}

.social-container {
  display: flex;
}

.social-container > li {
  margin-left: 10px;
}
.icon-fb > path,
.icon-twitter > path,
.icon-youtube > path {
  transition: 0.3s all ease;
  fill: #2c3e50;
}
.icon-fb:hover > path {
  transition: 0.3s all ease;
  fill: #405d9b;
}
.icon-twitter:hover > path {
  transition: 0.3s all ease;
  fill: #1da1f2;
}
.icon-youtube:hover > path {
  transition: 0.3s all ease;
  fill: #ff0000;
}
</style>