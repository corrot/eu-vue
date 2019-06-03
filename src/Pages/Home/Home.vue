<template>
  <div style="background-color: #f7f7f7;">
    <slider-component/>
    <decisions-cards-component></decisions-cards-component>

    <b-container style="display: flex; padding: 20px 0;">
      <div style="width: calc(100% - 286px); padding-right: 30px;" class="page-row">
        <!-- <links-component/> -->
        <!-- <testimonials-component/> -->
        <cards-component/>
        <video-gallery-component/>
        <photo-gallery-component/>
      </div>
      <div style="width: 286px;" class="page-row">
        <calendar-component/>
        <fbwidget-component/>
        <projects-component/>
        <events-component/>
        <public-survey-component/>
      </div>
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
  },
  data() {
    return {
      msg: 'Home Page',
    };
  },
};
</script>

<style scoped>
</style>
