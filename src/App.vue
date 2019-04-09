<template>
  <div id="app">
    <img src="./assets/logo.png">
      <div>
        <div v-for="entry in languages" :key="entry.title" @click="changeLocale(entry.language)">
          <flag :iso="entry.flag" v-bind:squared=false /> 
        </div>
      </div>
    <router-link to="/">{{ $t('Home') }}</router-link>
    <router-link to="/about-us">{{ $t('AboutUs') }}</router-link>
    <router-link to="/contact">{{ $t('Contact') }}</router-link>
    <router-view/>
  </div>
</template>

<script>
import i18n from '@/plugins/i18n';

export default {
  name: 'App',
  data() {
    return {
        languages: [
            { flag: 'us', language: 'en', title: 'English' },
            { flag: 'ge', language: 'ge', title: 'ქართული' }
        ]
    };
},
methods: {
    changeLocale(locale) {
        i18n.locale = locale;
    }
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
</style>
