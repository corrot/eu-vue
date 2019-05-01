<template>
  <div>
    <slider-component/>
    <b-container style="display: flex">
      <div style="width: calc(100% - 286px)" class="page-row">
        <links-component/>
        <testimonials-component/>
      </div>
      <div style="width: 286px" class="page-row">
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

export default {
  name: 'Home',
  components: {
    SliderComponent,
    FbwidgetComponent,
    CalendarComponent,
    LinksComponent,
    TestimonialsComponent,
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
.page-row {
  padding: 15px;
}
</style>
