<template>
  <div style="padding: 15px 0">
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'AboutUs',
  data() {
    return {
      msg: 'About Us Page',
    };
  },
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
</style>
