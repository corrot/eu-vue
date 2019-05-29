<template>
  <div style="background-color: #f7f7f7;">
    <slider-component/>
    <b-container style="display: flex; padding-bottom: 20px;">
      <div style="width: calc(100% - 286px)" class="page-row">
        <!-- <links-component/> -->
        <!-- <testimonials-component/> -->
        <cards-component/>
      </div>
      <div style="width: 286px; padding-top: 55px;" class="page-row">
        <calendar-component/>
        <fbwidget-component/>
      </div>
    </b-container>
  </div>
</template>

<script>
import SliderComponent from './components/Slider';
import FbwidgetComponent from './components/Fbwidget';
import CalendarComponent from './components/Calendar';
import LinksComponent from './components/Links';
import TestimonialsComponent from './components/Testimonials';
import CardsComponent from './components/Cards';

export default {
  name: 'Home',
  components: {
    SliderComponent,
    FbwidgetComponent,
    CalendarComponent,
    LinksComponent,
    TestimonialsComponent,
    CardsComponent
  },
  data() {
    return {
      msg: 'Home Page',
    };
  },
};
</script>

<style scoped>
.page-row {
  padding: 15px;
}
</style>
