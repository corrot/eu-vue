<template>
  <div class="calendar">
    <vue-cal
      class="vuecal--rounded-theme"
      xsmall
      hide-view-selector
      click-to-navigate
      :time="false"
      default-view="month"
      :locale="locale == 'ge' ? 'ka' : 'en'"
      :events="events"
      style="height: 300px"
      :on-event-click="onEventClick"
      :disable-views="['week']"
    ></vue-cal>
  </div>
</template>

<script>
import router from '@/router';
import TooltipComponent from './Tooltip';
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css';
import 'vue-cal/dist/i18n/ka.js';

import i18n from '@/plugins/i18n';
import { ANNOUNCEMENTS_URL, API_BASE_URL } from '@/constants.js';

export default {
  name: 'Calendar',
  components: { VueCal },
  data() {
    return {
      selectedEvent: {},
      data: null,
      attrs: [],
      events: [],
    };
  },
  computed: {
    locale: () => {
      return i18n.locale;
    },
  },
  mounted() {
    this.$http
      .get(ANNOUNCEMENTS_URL)
      .then(response => {
        this.data = response.data;
        this.events =
          this.data &&
          this.data.map(event => {
            return {
              start: event.date.split(' ')[0],
              end: event.date.split(' ')[0],
              title: '',
              content:
                '<div style="padding: 20px">' +
                event[`title_${this.locale}`] +
                '</div>',
              class: 'leisure',
              meta: event.id,
            };
          });
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
  methods: {
    onEventClick(event, e) {
      this.selectedEvent = event;
      this.$router.push(`/media/announcement/${event.meta}`);
      e.stopPropagation();
    },
  },
};
</script>

<style lang="postcss" scoped>
.vc-rounded-lg {
  border-radius: 0;
}

.vc-rounded-full {
  border-radius: 0 !important;
}
</style>
