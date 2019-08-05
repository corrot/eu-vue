<template>
  <div class="projects">
    <loading-spinner v-if="loading"/>
    <!-- <server-error v-if="errored"/> -->

    <div v-if="!errored && !loading">
      <router-link to="/public/public-survey">
        <h5 class="section-title">{{ $t('PublicSurvey') }}</h5>
      </router-link>
      <div v-for="item in data" :key="item.id">
        <a :href="item.Link" target="_blank">
          <!-- <img
            style="width: 100%"
            :src="item.image && `${API_BASE_URL}/uploads/${item.image.hash}${item.image.ext}`"
          >
          <div>{{ item[`title_${locale}`] }}</div>-->
          <b-card
            :title="item[`title_${locale}`]"
            :img-src="`${API_BASE_URL}/uploads/${item.image.hash}${item.image.ext}`"
            :alt="item[`title_${locale}`]"
            img-top
            tag="article"
            class="mb-2"
          >
            <b-card-text>
              <div
                style="font-size: 12px; width: 100%; text-align: right"
              >{{ item.date_start && item.date_start.split(' ')[0]}}</div>
            </b-card-text>
          </b-card>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';
import i18n from '@/plugins/i18n';
import { PUBLICSURVEYS_URL, API_BASE_URL } from '@/constants.js';
import LoadingSpinner from '@/components/LoadingSpinner';
import ServerError from '@/components/ServerError';

export default {
  name: 'PublicSurvey',
  data() {
    return {
      data: null,
      loading: true,
      errored: false,
      API_BASE_URL: API_BASE_URL,
    };
  },
  computed: {
    locale: () => {
      return i18n.locale;
    },
  },
  mounted() {
    this.$http
      .get(PUBLICSURVEYS_URL)
      .then(response => {
        this.data = response.data;
      })
      .catch(error => {
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
  components: { LoadingSpinner, ServerError, VueMarkdown },
};
</script>

<style lang='postcss' scoped>
.card-title {
  font-size: 16px;
  font-weight: bold;
}
</style>