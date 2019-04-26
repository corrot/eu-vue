<template>
  <div id="app">
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
    <div>
      <b-navbar toggleable="md" type="dark" variant="dark" sticky="true" class="navbar">
        <b-container>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <div v-for="route in routes" :key="route.name">
                <b-nav-item
                  class="navbar-title"
                  :text="$t(route.title)"
                  v-if="!route.children.length && !route.hidden"
                >
                  <router-link :to="route.path">{{ $t(route.title) }}</router-link>
                </b-nav-item>
                <b-nav-item-dropdown class="navbar-title" v-if="route.children.length">
                  <template slot="button-content">
                    <router-link :to="route.path">{{ $t(route.title) }}</router-link>
                  </template>
                  <b-dropdown-item v-for="item in route.children" :key="item.name">
                    <router-link :to="item.path">{{ $t(item.title) }}</router-link>
                  </b-dropdown-item>
                </b-nav-item-dropdown>
              </div>
            </b-navbar-nav>
          </b-collapse>
        </b-container>
      </b-navbar>
    </div>
    <div class="main">
      <router-view/>
    </div>
    <footer>
      <b-container>
        <div style="text-align: left">
          <div>
            <img width="100" height="64" :src="euLogo" alt="Eu_Logo">
            <br>
            <br>
            <div style="color: #fff">{{ $t('FOOTER_TEXT_1') }}</div>
          </div>
          <br>
          <div style="color: #fff;">{{ $t('FOOTER_TEXT_2') }}</div>
        </div>
      </b-container>
    </footer>
  </div>
</template>

<script>
import i18n from '@/plugins/i18n';
import { routes } from './router';
import headerLogo from '@/assets/logo.png';
import euLogo from './assets/EU.jpg';

export default {
  name: 'App',
  data() {
    return {
      languages: [
        { flag: 'gb', language: 'en', title: 'English' },
        { flag: 'ge', language: 'ge', title: 'ქართული' },
      ],
      i18n,
      routes,
      headerLogo,
      euLogo,
    };
  },
  methods: {
    changeLocale(locale) {
      i18n.locale = locale;
    },
  },
  created() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
  },
};
</script>

<style>
@import url('./assets/styles/main.css');

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
.navbar {
  background: #00005a !important;
}

.navbar-title {
  font-family: 'Roboto Condensed Caps', 'BPG Glaho WEB Caps', sans-serif;
}

button {
  font-size: 18px;
  margin: 15px;
}

.social-container {
  display: flex;
}
ul {
  padding: 0;
  margin: 0;
}
li {
  padding: 0;
  margin: 0;
  list-style-type: none;
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

a:hover {
  text-decoration: none;
}

footer {
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 15px 0;
  background: #00005a;
}
</style>
