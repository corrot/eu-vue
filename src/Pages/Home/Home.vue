<template>
  <div>
    <div class="carousel-wrapper">
      <!-- <h1>{{ msg }}</h1> -->
      <carousel autoplay="true" autoplayHoverPause="true" centerMode="true" perPage="1" loop="true">
        <slide>
          <img style="width: 100%;" src="./assets/img1.jpg">
          <router-link to="releases/1">
            <h1 class="release-title">Release Title</h1>
          </router-link>
        </slide>
        <slide>
          <img style="width: 100%;" src="./assets/img2.jpg">
        </slide>
        <slide>Slide 3 Content</slide>
        <slide>Slide 4 Content</slide>
      </carousel>
    </div>
    <b-container fluid>
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
  height: 500px;
  overflow: hidden;
}
.release-title {
  color: #fff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
  margin-top: -60px;
}
.page-row {
  padding: 15px;
}
</style>
