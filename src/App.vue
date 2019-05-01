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

button {
  font-size: 18px;
  margin: 15px;
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
a:hover {
  text-decoration: none;
}
</style>
