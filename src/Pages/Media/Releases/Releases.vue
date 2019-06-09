<template>
  <b-container>
    <loading-spinner v-if="loading"/>
    <server-error v-if="errored"/>
      <div v-if="!errored && !loading">
        <h5 class="section-title">{{ $t('CAGInPress') }}</h5>
        <div role="tablist" class="mb-5" v-if="cagInPress.length">
          <b-card no-body class="mb-2" v-for="vacancy in cagInPress" :key="vacancy.id">
            <b-card-header header-tag="header" class="p-3" role="tab">
              <a block href="#" v-b-toggle="'accordion-1-' + vacancy.id" variant="info">
                <span>{{ vacancy[`title_${locale}`] }}</span>
                <font-awesome-icon class="mr-1" :icon="['fas', 'fa-plus']"/>
              </a>
            </b-card-header>
            <b-collapse :id="`accordion-1-${vacancy.id}`" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text><vue-markdown class="article">{{ vacancy[`article_${locale}`] }}</vue-markdown></b-card-text>
                <b-button :href="vacancy.image && `${API_BASE_URL}/uploads/${vacancy.image.hash}${vacancy.image.ext}`" target="_blank">{{ $t('ViewDocument') }}</b-button>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
        
        <div role="tablist" class="mb-5" v-if="pressReleases.length">
          <h5 class="section-title">{{ $t('PressReleases') }}</h5>
          <b-card no-body class="mb-2" v-for="internship in pressReleases" :key="internship.id">
            <b-card-header header-tag="header" class="p-3" role="tab">
              <a block href="#" v-b-toggle="'accordion-2-' + internship.id" variant="info">
                <span>{{ internship[`title_${locale}`] }}</span>
                <font-awesome-icon class="mr-1" :icon="['fas', 'fa-plus']"/>
              </a>
            </b-card-header>
            <b-collapse :id="`accordion-2-${internship.id}`" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text><vue-markdown class="article">{{ internship[`article_${locale}`] }}</vue-markdown></b-card-text>
                <b-button :href="internship.image && `${API_BASE_URL}/uploads/${internship.image.hash}${internship.image.ext}`" target="_blank">{{ $t('ViewDocument') }}</b-button>
              </b-card-body>
            </b-collapse>
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

export default {
  name: 'Events',
  data() {
    return {
      data: null,
      loading: true,
      errored: false,
      API_BASE_URL,
      pressReleases: null,
      cagInPress: null
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
        this.pressReleases = response.data;
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
      
    this.$http
      .get(PRESSRELEASES_URL)
      .then(response => {
        this.cagInPress = response.data;
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
  components: { LoadingSpinner, ServerError },
};
</script>

<style lang="postcss" scoped>

</style>