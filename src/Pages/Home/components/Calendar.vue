<template>
  <div class="calendar">
    <v-calendar :attributes="attrs">
      <!-- <div slot="day-popover" slot-scope>
        <tooltip-component/>
      </div>-->
    </v-calendar>
  </div>
</template>

<script>
import router from '@/router';
import TooltipComponent from './Tooltip';

export default {
  name: 'Calendar',
  components: {},
  data() {
    return {
      attrs: [
        {
          key: 'independence',
          highlight: {
            backgroundColor: '#ff8080',
          },
          dates: new Date(2019, 4, 26),
          popover: {
            label: 'Independence Day',
          },
        },
        {
          key: 'children',
          highlight: {
            backgroundColor: '#ff8080',
          },
          dates: new Date(2019, 5, 1),
          popover: {
            label: 'Childrens` Day',
          },
        },
      ],
    };
  },
};
</script>

<style lang='postcss' scoped>
.vc-rounded-lg{
  border-radius: none;
}

span.vc-rounded-full{
  border-radius: 0!important;
}
</style>