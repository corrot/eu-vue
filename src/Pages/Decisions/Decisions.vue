<template>
  <b-container>
    <router-view></router-view>
  </b-container>
</template>

<script>
export default {
  name: 'Decisions',
  data() {
    return {
      msg: 'Decisions Page',
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

