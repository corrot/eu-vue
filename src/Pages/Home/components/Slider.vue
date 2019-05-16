<template>
  <div class="carousel-wrapper">
    <carousel
      :autoplay="true"
      :autoplayHoverPause="true"
      :centerMode="true"
      :per-page="1"
      :loop="true"
      :pagination="false"
      paginationPosition="bottom-overlay"
    >
      <slide>
        <div class="slide-image" v-bind:style="{ 'background-image': 'url(' + img1 + ')' }"></div>
        <b-container>
          <router-link to="releases/1">
            <h1 class="release-title">Release Title</h1>
          </router-link>
        </b-container>
      </slide>
      <slide>
        <div class="slide-image" v-bind:style="{ 'background-image': 'url(' + img2 + ')' }"></div>
      </slide>
    </carousel>
    <div id="slider-footer">
      
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import img1 from '../assets/img_one.jpg';
import img2 from '../assets/img_two.jpg';

export default {
  name: 'Slider',
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      img1,
      img2
    };
  },
};
</script>

<style lang='postcss' scoped>
.carousel-wrapper {
  height: calc(vh - 192px);
  width: 100%;
  overflow: hidden;
}

.slide-image {
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
  width: 100%;
  height: 500px;
}

.release-title {
  color: #fff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
  margin-top: -120px;
}

#slider-footer{
  /* background: #00005a !important; */
  background: #0a0a2d !important;
  height: 4em;
}
</style>