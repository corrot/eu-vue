<template>
  <div id="legislation" style="padding: 15px 0">
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
