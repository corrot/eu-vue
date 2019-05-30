<template>
  <div id="app">
    <header-component/>
    <navbar-component/>
    <div class="main">
      <b-container v-if="this.$router.currentRoute.name !== 'home'" class="mt-2">
        <b-breadcrumb class="container" :items="breadcrumbNames"></b-breadcrumb>
      </b-container>
      <router-view></router-view>
    </div>
    <footer-component/>
    <go-top :size="60" :z-index="10000" bg-color="#004996" :radius="0"></go-top>
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
    return { 
      routePaths: []
    };
  },
  computed: {
    breadcrumbNames: function(){
      this.routePaths = this.$router.currentRoute.path.split('/');
      this.routePaths.shift();
      this.routePaths.forEach((routePath, index, arr) => {
        arr[index] = routePath.split('-').join(' ');
      });
      return this.routePaths;
    }
  },
  watch:{
    $route (to, from){
      //forces to recompute property this.routePaths
      this.routePaths = []; 
    }
  } 
};
</script>

<style>
@import url('./assets/styles/main.css');

.dropdown-item.active, .dropdown-item:active {
    color: #000!important;
    text-decoration: none;
    background-color: #fff!important;
}

.breadcrumb-item{
  text-transform: capitalize;
}

</style>
