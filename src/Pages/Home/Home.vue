<template>
  <div>
    <h1>{{ msg }}</h1>
    <carousel>
      <slide>Slide 1 Content</slide>
      <slide>Slide 2 Content</slide>
      <slide>Slide 3 Content</slide>
      <slide>Slide 4 Content</slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'Home',
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      msg: 'Home Page',
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
