<template>
  <b-container id="sitemap-container">
    <h1 id="sitemap-title">Sitemap</h1>
    <div v-for="route in routes" :key="route.name" class="route-title">
        <span class="dot"></span>
        <span :text="$t(route.title)" v-if="!route.children.length">
          <router-link :to="route.path" class="dark-blue">{{ $t(route.title) }}</router-link>
        </span>
        <span v-if="route.children.length">
          <router-link :to="route.path" class="dark-blue">{{ $t(route.title) }}</router-link><br/>
            <span v-for="item in route.children" :key="item.name" class="child-title">
              <router-link :to="item.path" class="light-blue">{{ $t(item.title) }}</router-link>
              <br/>
            </span>
        </span>
    </div>
  </b-container>
</template>

<script>
import Vue from 'vue';
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

#sitemap-container{
  padding: 2% 0 2% 4%;
}

#sitemap-title{
  margin-bottom: 30px;
  letter-spacing: 2px;
}

.route-title {
  text-align: left;
  font-weight: 600;
  line-height: 32px;
}

.child-title {
  margin: 5px;
  margin-left: 30px;
  font-weight: 400;
  padding-left: 8px;
}

.dark-blue{
  color: #2c3e50;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 18px;
}

.dark-blue:hover{
  color: #527496;
}

.light-blue{
  color: #4b6580;
  font-size: 17px;
  border-left: 1px solid grey;
  border-bottom: 1px solid grey;
  padding-left: 8px;
  padding-bottom: 4px;
}

.light-blue:hover{
  color: #6c99c7;
}

</style>