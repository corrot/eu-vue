<template>
  <b-container>
    <router-view></router-view>
  </b-container>
</template>

<script>
export default {
  name: 'Media',
  data() {
    return {
      msg: 'Media Page',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
</style>

