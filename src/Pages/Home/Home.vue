<template>
  <div>
    <div class="carousel-wrapper">
      <!-- <h1>{{ msg }}</h1> -->
      <carousel
        autoplay="true"
        :autoplayHoverPause="true"
        :centerMode="true"
        perPage="1"
        :loop="true"
        :pagination="false"
        paginationPosition="bottom-overlay"
      >
        <slide>
          <div class="slide-image" v-bind:style="{ 'background-image': 'url(' + img1 + ')' }"></div>
          <!-- <img style="width: 100%;" :src="img1"> -->
          <router-link to="releases/1">
            <h1 class="release-title">Release Title</h1>
          </router-link>
        </slide>
        <slide>
          <div class="slide-image" v-bind:style="{ 'background-image': 'url(' + img2 + ')' }"></div>
        </slide>
      </carousel>
    </div>
    <b-container style="display: flex">
      <div style="width: calc(100% - 286px)">
        <div class="page-row porganization-links">ორგანიზაციების ლინქები</div>
        <div class="page-row surveys">გამოკითხვები</div>
      </div>
      <div style="width: 286px">
        <div class="page-row calendar">
          <v-calendar/>
        </div>
        <div class="page-row fb-widget">
          <div
            class="fb-page"
            data-href="https://www.facebook.com/CompetitionAgencyGeo"
            data-tabs="timeline"
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true"
          >
            <blockquote
              cite="https://www.facebook.com/CompetitionAgencyGeo"
              class="fb-xfbml-parse-ignore"
            >
              <a
                href="https://www.facebook.com/CompetitionAgencyGeo"
              >{{$t('CompetitionAgencyOfGeorgia')}}</a>
            </blockquote>
          </div>
        </div>
      </div>
      <div></div>
    </b-container>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import i18n from '@/plugins/i18n';
import img1 from './assets/img_one.jpg';
import img2 from './assets/img_two.jpg';

export default {
  name: 'Home',
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      msg: 'Home Page',
      i18n,
      img1,
      img2,
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
.page-row {
  padding: 15px;
}
</style>
