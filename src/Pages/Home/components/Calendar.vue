<template>
  <div class="calendar">
    <v-calendar @dayclick="clicker" style="width: 100%;" :attributes="attrs"></v-calendar>
  </div>
</template>

<script>
import router from '@/router';
import TooltipComponent from './Tooltip';

import i18n from '@/plugins/i18n';
import { ANNOUNCEMENTS_URL, API_BASE_URL } from '@/constants.js';

export default {
  name: 'Calendar',
  components: {},
  data() {
    return {
      data: null,
      attrs: [],
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
        this.attrs =
          this.data &&
          this.data.map(event => {
            return {
              key: event.id,
              dates: event.date,
              popover: {
                label: event[`title_${this.locale}`],
              },
              customData: {
                key: event.id,
              },
              bar: {},
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
    clicker: day => {
      if (day.popovers) {
        router.push(`/media/announcement/${day.popovers[0].customData.key}`);
      }
      console.log(day.popovers[0].customData.key);
    },
  },
};
</script>

<style lang='postcss' scoped>
.vc-rounded-lg {
  border-radius: 0;
}

.vc-rounded-full {
  border-radius: 0 !important;
}
</style>