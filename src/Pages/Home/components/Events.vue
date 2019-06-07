<template>
  <div v-if="data">
    <router-link to="/media/events"><h5 class="section-title">{{ $t('Events') }}</h5></router-link>
    <b-card
      :title="data[`title_${locale}`]"
      :img-src="API_BASE_URL + data.photo_gallery[0].url" :alt="data[`title_${locale}`]"
      :img-alt="data[`title_${locale}`]"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
    <b-card-text>
      <!-- <vue-markdown>{{ data[`article_${locale}`] }}</vue-markdown> -->
      <div style="font-size: 12px; width: 100%; text-align: right">{{ data.date.split(' ')[0] }}</div>
    </b-card-text>

    <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
  </b-card>
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