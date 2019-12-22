<template>
  <div style="background-color: #f7f7f7;">
    <slider-component />
    <decisions-cards-component></decisions-cards-component>

    <b-container class="rows-container web">
      <div class="page-row left">
        <cards-component />
        <photo-gallery-component />
        <video-gallery-component />
      </div>
      <div class="page-row right">
        <home-forms-component class="mb-4" />
        <public-survey-component class="mb-4" />
        <projects-component class="mb-4" />
        <fbwidget-component class="mb-4" />
        <calendar-component class="mb-4" />
      </div>
    </b-container>

    <b-container class="rows-container mobile">
      <home-forms-component class="mb-4" />
      <public-survey-component class="mb-4" />
      <projects-component class="mb-4" />
      <calendar-component class="mb-4" />
      <cards-component />
      <photo-gallery-component />
      <video-gallery-component />
    </b-container>
  </div>
</template>

<script>
import SliderComponent from './components/Slider';
import FbwidgetComponent from './components/Fbwidget';
import ProjectsComponent from './components/Projects';
import EventsComponent from './components/Events';
import PublicSurveyComponent from './components/PublicSurvey';
import CalendarComponent from './components/Calendar';
import LinksComponent from './components/Links';
import TestimonialsComponent from './components/Testimonials';
import CardsComponent from './components/Cards';
import DecisionsCardsComponent from './components/DecisionsCards';
import PhotoGalleryComponent from './components/PhotoGallery';
import VideoGalleryComponent from './components/VideoGallery';
import HomeFormsComponent from './components/HomeForms';

export default {
  name: 'Home',
  components: {
    SliderComponent,
    FbwidgetComponent,
    CalendarComponent,
    LinksComponent,
    TestimonialsComponent,
    CardsComponent,
    DecisionsCardsComponent,
    PublicSurveyComponent,
    ProjectsComponent,
    EventsComponent,
    PhotoGalleryComponent,
    VideoGalleryComponent,
    HomeFormsComponent,
  },
  data() {
    return {
      msg: 'Home Page',
    };
  },
};
</script>

<style scoped>
.rows-container {
  display: flex;
}
.page-row.right {
  width: 286px;
}
.page-row.left {
  width: calc(100% - 286px);
  padding-right: 30px;
}
.mobile {
  display: none;
}
@media screen and (max-width: 992px) {
  .rows-container {
    display: block;
  }
  .page-row.right {
    width: 100%;
    margin-top: 30px;
  }
  .page-row.left {
    width: 100%;
    padding-right: 0;
  }
  .web {
    display: none;
  }
}
</style>
