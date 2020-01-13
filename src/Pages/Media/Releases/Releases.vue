<template>
  <b-container>
    <loading-spinner v-if="loading" />
    <server-error v-if="errored" />
    <div v-if="!errored && !loading">
      <div role="tablist" class="mb-5" v-if="cagInPress.length">
        <h5 class="section-title">{{ $t('PressReleases') }}</h5>
        <b-card no-body class="mb-2" v-for="release in cagInPress" :key="release.id">
          <b-card-header header-tag="header" class="p-3" role="tab">
            <router-link :to="`/media/press-releases/${release.id}`">
              <span>{{ release[`title_${locale}`] }}</span>
            </router-link>
          </b-card-header>
        </b-card>
        <div style="text-align: right">
          <router-link to="/media/news-archive" class="btn-read-more mb-5 pull-right">
            <span>{{ $t("ViewAll") }}...</span>
          </router-link>
        </div>
      </div>
      <div role="tablist" class="mb-5" v-if="pressReleases.length">
        <h5 class="section-title">{{ $t('CAGInPress') }}</h5>
        <b-card no-body class="mb-2" v-for="article in pressReleases" :key="article.id">
          <b-card-header header-tag="header" class="p-3" role="tab">
            <a
              :href="article[`doc_${locale}`] && article[`doc_${locale}`][0] &&  `${API_BASE_URL}/uploads/${article[`doc_${locale}`][0].hash}${article[`doc_${locale}`][0].ext}`"
            >
              <span>{{ article[`title_${locale}`] }}</span>
            </a>
          </b-card-header>
        </b-card>
      </div>
    </div>
  </b-container>
</template>

<script>
import i18n from '@/plugins/i18n';
import { RELEASES_URL, PRESSRELEASES_URL, API_BASE_URL } from '@/constants.js';
import LoadingSpinner from '@/components/LoadingSpinner';
import ServerError from '@/components/ServerError';
import VueMarkdown from 'vue-markdown';

export default {
  name: 'Events',
  data() {
    return {
      data: null,
      loading: true,
      errored: false,
      API_BASE_URL,
      pressReleases: null,
      cagInPress: null,
    };
  },
  computed: {
    locale: () => {
      return i18n.locale;
    },
  },
  mounted() {
    this.$http
      .get(RELEASES_URL)
      .then(response => {
        this.pressReleases = response.data.slice(0, 4).reverse();
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));

    this.$http
      .get(PRESSRELEASES_URL + '?_sort=date:DESC')
      .then(response => {
        this.cagInPress = response.data.slice(0, 4);
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
  components: { LoadingSpinner, ServerError, VueMarkdown },
};
</script>

<style lang="postcss" scoped>
</style>