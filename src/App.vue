<template>
  <div id="app">
    <header-component />
    <navbar-component />
    <div class="main">
      <b-container
        id="breadcrumb-container"
        style="display: flex; justify-content: space-between"
      >
        <b-breadcrumb 
                v-if="this.$router.currentRoute.name !== 'home' && this.$router.currentRoute.name !== 'contact' && this.$router.currentRoute.name !== 'decisionDetails'&& this.$router.currentRoute.name !== 'search'"
        class="container" :items="breadcrumbNames"></b-breadcrumb>

        <social-sharing
          v-if="['pressReleases', 'pressReleasesDetail', 'events', 'eventDetails', 'announcement', 'announcementDetails', 'publicSurvey'].includes(this.$router.currentRoute.name)"
          class="text-right"
          :url="origin + $route.fullPath"
          inline-template
        >
          <div>
            <network network="facebook">
              <div style="width: 115px; padding: 12px 0">
                <span class="share-text">
                  <font-awesome-icon class="fa" :icon="['fab', 'facebook']" />
                  {{ $t('Share') }}
                </span>
              </div>
            </network>
          </div>
        </social-sharing>
      </b-container>
      <router-view></router-view>
    </div>
    <footer-component />
    <go-top :size="55" :z-index="10000" bg-color="#DB2323cc" :radius="0" :right="40" :bottom="40"></go-top>
  </div>
</template>

<script>
import HeaderComponent from './containers/Header/Header';
import NavbarComponent from './containers/Navbar';
import FooterComponent from './containers/Footer';
import GoTop from '@inotom/vue-go-top';
import i18n from '@/plugins/i18n';
import { routes } from '@/router';

export default {
  name: 'App',
  components: { HeaderComponent, FooterComponent, NavbarComponent, GoTop },
  data() {
    return {
      routePaths: [],
      origin: window.location.origin,
      link: {},
      crumbs: []
    };
  },
  computed: {
    breadcrumbNames: function() {
      const capitalize = s => {
        if (typeof s !== 'string') return '';
        return s.charAt(0).toUpperCase() + s.slice(1);
      };

      this.routePaths = this.$router.currentRoute.path.split('/');
      this.routePaths.shift();
      // hotfix not to show numbers
      if(this.routePaths.length >= 3){
        this.routePaths.pop();
      }
      this.routePaths.forEach((routePath, index, arr) => {
        let res = this.$t(
          routePath
            .split('-')
            .map(e => capitalize(e))
            .join('')
        );
        console.log(res);
        if(res === "Faq"){
          res = this.$t("FAQ")
        }
        arr[index] = res.length <= 3 ? res.toUpperCase() : res;
      });
      return this.routePaths;
    },
  },
  watch: {
    $route(to, from) {
      //forces to recompute property this.routePaths
      this.routePaths = [];
    },
  },
};
</script>

<style>
@import url('./assets/styles/main.css');

.main {
  background-color: #f7f7f7;
}

.dropdown-item.active,
.dropdown-item:active {
  background-color: #141e3a !important;
  text-decoration: none;
  color: #fff !important;
}

.breadcrumb-item {
  /* text-transform: capitalize; */
  font-size: 15px;
}

.breadcrumb-item:nth-child(1) a {
  color: #db2323 !important;
}

.breadcrumb-item a {
  color: #6c757d;
}

ol.breadcrumb {
  border-radius: 0 !important;
  /* background-color: rgba(0, 0, 0, 0.03); */
  background-color: rgba(0, 0, 0, 0);
}
</style>
