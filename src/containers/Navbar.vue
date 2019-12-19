<template>
  <div>
    <div
      class="btn btn-primary mobile"
      @click="toggleSidebar()"
      style="position: absolute; top: 12px; left: 10px"
    >></div>
    <div :class="`sidebar mobile ${isSidebarOn ? 'show' : ''}`">
      <div v-for="route in routes" :key="route.name">
        <b-dropdown :text="$t(route.title)" v-if="!route.hidden">
          <b-dropdown-item
            class="dropdown-override"
            v-for="(item, index) in route.children"
            :key="index"
            :to="item.path"
            v-if="!item.hidden"
          >
            <span v-if="!item.hidden">{{ $t(item.title) }}</span>
          </b-dropdown-item>
        </b-dropdown>
      </div>
    </div>

    <b-navbar toggleable="lg" type="dark" variant="dark" :sticky="true" class="navbar">
      <b-container style="height: 3em;">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <div v-for="route in routes" :key="route.name" class="main-nav-item">
              <b-nav-item :text="$t(route.title)" v-if="!route.children.length && !route.hidden">
                <router-link :to="route.path">
                  <span
                    :class="activePath === route.path ? 'navbar-title active' : 'navbar-title'"
                  >{{ $t(route.title) }}</span>
                </router-link>
              </b-nav-item>
              <b-nav-item-dropdown v-if="route.children.length && !route.hidden">
                <template slot="button-content">
                  <span
                    :class="activePath === route.path ? 'navbar-title active' : 'navbar-title'"
                  >{{ $t(route.title) }}</span>
                </template>
                <b-dropdown-item
                  class="dropdown-override"
                  v-for="(item, index) in route.children"
                  :key="index"
                  :to="item.path"
                  v-if="!item.hidden"
                >
                  <span v-if="!item.hidden">
                    {{ $t(item.title) }}
                    <!-- <b-dropdown-item class="dropdown-override" :to="subItem.path" v-for="(subItem, index) in item.children" :key="index">{{ $t(subItem.title) }}
                    </b-dropdown-item>-->
                  </span>
                </b-dropdown-item>
              </b-nav-item-dropdown>
            </div>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
import { routes } from '@/router';
this.activePath = '';
export default {
  name: 'Navbar',
  mounted() {
    this.activePath = `/${this.$router.currentRoute.path.split('/')[1]}`;
  },
  updated() {
    this.activePath = `/${this.$router.currentRoute.path.split('/')[1]}`;
  },
  methods: {
    toggleSidebar() {
      window.isSidebarOn = !window.isSidebarOn;
      this.isSidebarOn = window.isSidebarOn;
    },
  },
  data() {
    return {
      routes,
      activePath: this.activePath,
      isSidebarOn: false,
    };
  },
};
</script>

<style scoped lang="postcss">
.navbar {
  background: #141e3a !important;
  /* height: 3em; */
}

.navbar-title {
  /* font-family: 'Roboto Condensed', 'BPG Glaho WEB Caps', sans-serif; */
  font-family: 'Open Sans', 'BPG Glaho WEB Caps', sans-serif;
  color: #eee !important;
  letter-spacing: 1px;
}

.dropdown-menu {
  overflow-x: hidden;
}

.dropdown-item {
  width: auto;
}

.main-nav-item {
  margin-right: 7px;
}

@media screen and (max-width: 992px) {
  .navbar-collapse.collapse.show {
    background-color: #081227;
    height: unset;
    width: 100%;
    padding: 0 20px;
  }
}

@media screen and (max-width: 992px) {
  .navbar-collapse.collapse.show {
    background-color: #081227;
    height: unset;
    width: 100%;
    padding: 0 20px;
  }

  .navbar {
    display: none;
  }
  .mobile {
    display: block;
  }

  .sidebar {
    width: 90%;
    background: #fff;
    position: fixed;
    top: 79px;
    left: 0;
    height: 100%;
    z-index: 1000000;
    left: -90%;
    transition: 0.3s ease all;
  }

  .sidebar.show {
    box-shadow: 0 20px 20px 0 #00000066;
    left: 0;
    display: block;
  }

  .btn-group {
    width: 100%;
    text-align: left !important;
  }

  .btn-group > .btn.dropdown-toggle {
    text-align: left !important;
  }
}
</style>