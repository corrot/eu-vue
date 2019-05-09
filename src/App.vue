<template>
  <div id="app">
    <header-component/>
    <b-container style="position: relative">
      <button class="print-button" @click="print">
        <font-awesome-icon class="mr-1" :icon="['fas', 'print']"/>Print
      </button>
    </b-container>
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
  methods: {
    print() {
      window.print();
    },
  },
};
</script>

<style>
@import url('./assets/styles/main.css');

.main {
  /* margin-bottom: 214px; */
}
.print-button {
  position: absolute;
  right: 15px;
  bottom: 15px;
  z-index: 10000;
  color: #007bff;
}
</style>
