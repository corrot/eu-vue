<template>
  <b-navbar toggleable="md" type="dark" variant="dark" :sticky="true" class="navbar">
    <b-container>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <div v-for="route in routes" :key="route.name">
            <b-nav-item :text="$t(route.title)" v-if="!route.children.length && !route.hidden">
              <router-link :to="route.path">
                <span
                  :class="activePath === route.path ? 'navbar-title active' : 'navbar-title'"
                >{{ $t(route.title) }}</span>
              </router-link>
            </b-nav-item>
            <b-nav-item-dropdown v-if="route.children.length">
              <template slot="button-content">
                <!-- <router-link :to="route.path">{{ $t(route.title) }}</router-link> -->
                <span
                  :class="activePath === route.path ? 'navbar-title active' : 'navbar-title'"
                >{{ $t(route.title) }}</span>
              </template>
              <b-dropdown-item
                v-for="(item, index) in route.children"
                :key="index"
                v-if="!item.hidden"
              >
                <router-link :to="item.path">{{ $t(item.title) }}</router-link>
                <!-- <div v-if="item.children.length">{{ $t(item.title) }}</div> -->
                <b-dropdown-item v-for="(subItem, index) in item.children" :key="index">
                  <router-link :to="subItem.path">{{ $t(subItem.title) }}</router-link>
                </b-dropdown-item>
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
this.activePath = '';
export default {
  name: 'Navbar',
  mounted() {
    this.activePath = `/${this.$router.currentRoute.path.split('/')[1]}`;
  },
  updated() {
    this.activePath = `/${this.$router.currentRoute.path.split('/')[1]}`;
  },
  data() {
    return {
      routes,
      activePath: this.activePath,
    };
  },
};
</script>

<style scoped lang="postcss">
.navbar {
  background: #00005a !important;
}

.navbar-title {
  font-family: 'Roboto Condensed', 'BPG Glaho WEB Caps', sans-serif;
  color: #eee !important;
}

.navbar-title.active {
  color: #007bff;
  opacity: 1;
}

.dropdown-menu {
  overflow-x: hidden;
}
.dropdown-item {
  width: auto;
}
</style>