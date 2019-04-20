<template>
  <b-container>
    <h1>{{ msg }}</h1>
    <h1>{{ $route.params.id }}</h1>
  </b-container>
</template>

<script>
export default {
  name: 'Releases',
  data() {
    return {
      msg: 'Releases Page',
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
