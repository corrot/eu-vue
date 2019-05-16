<template>
  <div id="app">
    <header-component/>
    <!-- <b-container style="position: relative">
      <b-button variant="outline-primary" class="print-button" @click="print">
        <font-awesome-icon class="mr-1" :icon="['fas', 'print']"/>Print
      </b-button>
    </b-container> -->
    <navbar-component/>
    <div class="main">
      <router-view></router-view>
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
