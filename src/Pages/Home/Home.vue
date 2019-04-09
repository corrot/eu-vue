<template>
  <h1>{{ msg }}</h1>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Home Page',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
