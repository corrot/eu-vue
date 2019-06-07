<template>
  <div class="projects" style="padding: 15px 0">
    <loading-spinner v-if="loading"/>
    <!-- <server-error v-if="errored"/> -->

    <div v-if="!errored && !loading">
      <router-link to="/public/public-survey"><h5 class="section-title">{{ $t('PublicSurvey') }}</h5></router-link>
      <div v-for="item in data.links" :key="item.id">
        <a :href="item.link" target="_blank"><img style="width: 100%" :src="item.image && `${API_BASE_URL}/uploads/${item.image.hash}${item.image.ext}`"/></a>
      </div>
    </div>

  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';
import i18n from '@/plugins/i18n';
import { LINKTYPES_URL, API_BASE_URL } from '@/constants.js';
import LoadingSpinner from '@/components/LoadingSpinner';
import ServerError from '@/components/ServerError';

export default {
 name: 'PublicSurvey',
  data() {
    return {
      data: null,
      loading: true,
      errored: false,
      API_BASE_URL: API_BASE_URL
    };
  },
  computed: {
    locale: () => {
      return i18n.locale;
    },
  },
  mounted() {
    this.$http
      .get(LINKTYPES_URL + '/2')
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
.carousel-wrapper {
  height: calc(vh - 192px);
  width: 100%;
  overflow: hidden;
}

.slide-image {
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
  width: 100%;
  height: 500px;
}

.release-title {
  color: #fff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
  margin-top: -120px;
}
</style>