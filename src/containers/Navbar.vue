<template>
  <b-navbar toggleable="md" type="dark" variant="dark" :sticky="true" class="navbar">
    <b-container>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <div v-for="route in routes" :key="route.name">
            <b-nav-item
              class="navbar-title"
              :text="$t(route.title)"
              v-if="!route.children.length && !route.hidden"
            >
              <router-link :to="route.path">{{ $t(route.title) }}</router-link>
            </b-nav-item>
            <b-nav-item-dropdown class="navbar-title" v-if="route.children.length">
              <template slot="button-content">
                <router-link :to="route.path">{{ $t(route.title) }}</router-link>
              </template>
              <b-dropdown-item v-for="item in route.children" :key="item.name">
                <router-link :to="item.path">{{ $t(item.title) }}</router-link>
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
import { routes } from '@/router';

export default {
  name: 'Navbar',
  data() {
    return {
      routes,
    };
  },
};
</script>

<style scoped>
.navbar {
  background: #00005a !important;
}

.navbar-title {
  font-family: 'Roboto Condensed Caps', 'BPG Glaho WEB Caps', sans-serif;
}

.dropdown-menu {
  overflow-x: hidden;
}
.dropdown-item {
  width: auto;
}
</style>