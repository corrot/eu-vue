<template>
  <div class="projects">
    <router-link to="/about-us/projects"><h5 class="section-title">{{ $t('Projects') }}</h5></router-link>
    <a :href="data.Link" target="_blank"><img style="width: 100%; object-fit: cover" :src="data.image && `${API_BASE_URL}/uploads/${data.image.hash}${data.image.ext}`"/></a>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';
import i18n from '@/plugins/i18n';
import { PROJECTS_URL, API_BASE_URL } from '@/constants.js';
import LoadingSpinner from '@/components/LoadingSpinner';
import ServerError from '@/components/ServerError';

export default {
 name: 'Projects',
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
      .get(PROJECTS_URL)
      .then(response => {
        this.data = response.data.filter(o => o.forfirtpage)[0];
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