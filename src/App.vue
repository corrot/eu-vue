<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <div v-for="entry in languages" :key="entry.title" @click="changeLocale(entry.language)" v-show="entry.language !== i18n.locale">
        <flag :iso="entry.flag" v-bind:squared=false></flag>
      </div>
    </div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <div v-for="route in routes" :key="route.name">
              <b-nav-item :text="$t(route.title)" v-if="!route.children.length"><router-link :to="route.path">{{ $t(route.title) }}</router-link></b-nav-item>
              <b-nav-item-dropdown v-if="route.children.length">
                <template slot="button-content"><router-link :to="route.path">{{ $t(route.title) }}</router-link></template>
                <b-dropdown-item href="#" v-for="item in route.children" :key="item.name"><router-link :to="item.path">{{ $t(item.title) }}</router-link></b-dropdown-item>
              </b-nav-item-dropdown>
            </div>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <router-view/>

  </div>
</template>

<script>
import i18n from '@/plugins/i18n';
import { routes } from './router';

export default {
  name: 'App',
  data() {
    return {
        languages: [
            { flag: 'gb', language: 'en', title: 'English' },
            { flag: 'ge', language: 'ge', title: 'ქართული' }
        ],
        i18n,
        routes
    };
  },
  methods: {
    changeLocale(locale) {
      i18n.locale = locale;
    }
  },
  created(){
    console.log(routes)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
    font-size: 18px;
    margin: 15px;
}

a {
  font-weight: 600;
  color: #222;
}

a:hover{
  text-decoration: none;
  color: #333;
}
</style>
