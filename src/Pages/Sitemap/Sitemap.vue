<template>
  <b-container>
    <div v-for="route in routes" :key="route.name" class="route-title">
      <div :text="$t(route.title)" v-if="!route.children.length">
        <router-link :to="route.path">{{ $t(route.title) }}</router-link>
      </div>
      <div v-if="route.children.length">
        <router-link :to="route.path">{{ $t(route.title) }}</router-link>
        <div v-for="item in route.children" :key="item.name" class="child-title">
          <router-link :to="item.path">{{ $t(item.title) }}</router-link>
        </div>
      </div>
    </div>
  </b-container>
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

<style lang="postcss" scoped>
.route-title {
  text-align: left;
  font-weight: 600;
}
.child-title {
  margin-left: 30px;
  font-weight: 400;
}
</style>