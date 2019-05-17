<template>
  <div id="app">
    <header-component/>
    <navbar-component/>
    <div class="main">
      <router-view></router-view>
    </div>
    <footer-component/>
    <go-top :size="60" :z-index="10000" bg-color="#004996"></go-top>
  </div>
</template>

<script>
import HeaderComponent from './containers/Header/Header';
import NavbarComponent from './containers/Navbar';
import FooterComponent from './containers/Footer';
import GoTop from '@inotom/vue-go-top';

export default {
  name: 'App',
  components: { HeaderComponent, FooterComponent, NavbarComponent, GoTop },
  data() {
    return {};
  },
  created() {},
  destroyed() {},
};
</script>

<style>
@import url('./assets/styles/main.css');

.dropdown-item.active, .dropdown-item:active {
    color: #000!important;
    text-decoration: none;
    background-color: #fff!important;
}
</style>
