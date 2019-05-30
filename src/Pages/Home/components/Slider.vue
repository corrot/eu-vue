<template>
  <div class="carousel-wrapper" v-if="data">
    <carousel
      :autoplay="false"
      :autoplayHoverPause="true"
      :centerMode="true"
      :per-page="1"
      :loop="true"
      :pagination="false"
      paginationPosition="bottom-overlay"
    >
        
    <slide v-for="item in data" :key="item.id">
      <div v-if="item.image" class="slide-image" v-bind:style="{ 'background-image': 'url(' + base_url + item.image.url + ')' }"></div>
      <b-container>
        <span class="slider-text">
          <router-link :to="item.link" class="text">
            <p class="release-title">{{ item[`text_${locale}`] }}</p>
          </router-link>
        </span>
      </b-container>
    </slide>

    </carousel>
    <div id="slider-footer"></div>
  </div>
</template>

<script>
import i18n from '@/plugins/i18n';
import { Carousel, Slide } from 'vue-carousel';
import { API_BASE_URL, SLIDERDATA_URL } from '@/constants.js';
import LoadingSpinner from '@/components/LoadingSpinner';
import ServerError from '@/components/ServerError';

export default {
  name: 'Slider',
  components: {
    Carousel,
    Slide,
  },
  computed: {
    locale: () => {
      return i18n.locale;
    },
    base_url: () => {
      return API_BASE_URL;
    }
  },
  data() {
    return {
      data: null,
      loading: true,
      errored: false,
    };
  },
  mounted() {
    this.$http
      .get(SLIDERDATA_URL)
      .then(response => {
        this.data = response.data;
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  }
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
  background: #141e3a !important;
  height: 3em;
}

.slider-text{
  position: absolute;
  top: 20%;
  left: 20%;
  width: 25%;
  height: 35%;
  background-color: rgba(0, 0, 0, 0.65);
  text-align: center;
  z-index: 100;
  padding: 2%;
  font-family: 'Open Sans', 'BPG Glaho WEB Caps', sans-serif;
}

.slider-text p{
  font-weight: 100;
  letter-spacing: 1px;
  font-size: 25px;
  display: inline;
}


</style>