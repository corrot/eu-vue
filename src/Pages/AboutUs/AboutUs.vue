<template>
  <div style="padding: 15px 0">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'AboutUs',
  data() {
    return {
      msg: 'About Us Page',
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
