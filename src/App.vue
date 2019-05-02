<template>
  <div id="app">
    <header-component/>
    <navbar-component/>
    <div class="main">
      <router-view/>
    </div>
    <footer-component/>
  </div>
</template>

<script>
import HeaderComponent from './containers/Header/Header';
import NavbarComponent from './containers/Navbar';
import FooterComponent from './containers/Footer';

export default {
  name: 'App',
  components: { HeaderComponent, FooterComponent, NavbarComponent },
  data() {
    return {};
  },
  created() {},
  destroyed() {},
  methods: {},
};
</script>

<style>
@import url('./assets/styles/main.css');

.main {
  /* margin-bottom: 214px; */
}
</style>
