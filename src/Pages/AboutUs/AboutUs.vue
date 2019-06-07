<template>
  <div>
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
