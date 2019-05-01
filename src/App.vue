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
import HeaderComponent from './components/Header';
import NavbarComponent from './components/Navbar';
import FooterComponent from './components/Footer';

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
