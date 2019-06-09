<template>
  <div v-if="data">
    <router-link to="/media/events"><h5 class="section-title">{{ $t('Events') }}</h5></router-link>
    <router-link :to="`/media/events/${data.id}`">
      <b-card
        :title="data[`title_${locale}`]"
        :img-src="`${API_BASE_URL}/uploads/${data.cover_image.hash}${data.cover_image.ext}`"
        :alt="data[`title_${locale}`]"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>
          <div style="font-size: 12px; width: 100%; text-align: right">{{ data.date_start && data.date_start.split(' ')[0] + ' - ' + data.date_finish && data.date_finish.split(' ')[0]}}</div>
        </b-card-text>
      </b-card>
    </router-link>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';
import i18n from '@/plugins/i18n';
import { API_BASE_URL, EVENTS_URL } from '@/constants.js';

export default {
  name: 'Events',
  components: {},
  data() {
    return { 
      i18n,
      API_BASE_URL,
      data: null,
      loading: true,
      errored: false, };
  },
  computed: {
    locale: () => {
      return i18n.locale;
    },
  },
  mounted() {
    this.$http
      .get(EVENTS_URL)
      .then(response => {
        this.data = response.data[response.data.length - 1];
        console.log(this.data.cover_image)
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
  components: {
    VueMarkdown
  }
};
</script>

<style lang='postcss' scoped>
  .card-title{
    font-size: 16px;
    font-weight: bold;
  }
  .card-text{
  }
</style>