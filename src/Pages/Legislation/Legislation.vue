<template>
  <div id="legislation">
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'Legislation',
  data() {
    return {
      msg: 'Legislation page',
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
