<template>
  <b-navbar toggleable="md" type="dark" variant="dark" :sticky="true" class="navbar">
    <b-container>
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
                <span :class="activePath === route.path ? 'navbar-title active' : 'navbar-title'">{{ $t(route.title) }}</span>
              </template>
              <b-dropdown-item class="dropdown-override" v-for="(item, index) in route.children" :key="index" :to="item.path">
                <span v-if="!item.hidden">{{ $t(item.title) }}
                  <b-dropdown-item class="dropdown-override" :to="subItem.path" v-for="(subItem, index) in item.children" :key="index">{{ $t(subItem.title) }}
                  </b-dropdown-item>
                </span>
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
  background: #0a0a2d !important;
  height: 3em;
}

.navbar-title {
  font-family: 'Roboto Condensed', 'BPG Glaho WEB Caps', sans-serif;
  color: #eee !important;
  letter-spacing: 1px;
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

.main-nav-item{
  margin-right: 5px;
}

</style>