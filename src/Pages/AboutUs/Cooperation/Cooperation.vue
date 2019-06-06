<template>
  <b-container>
    <div class="projects" style="padding: 15px 0">
      <loading-spinner v-if="loading"/>
      <server-error v-if="errored"/>

      <div v-if="!errored && !loading">
        <div role="tablist">
          <b-card no-body class="mb-2" v-for="article in data" :key="article.id">
            <b-card-header header-tag="header" class="p-3" role="tab">
              <a block href="#" v-b-toggle="'accordion-' + article.id" variant="info">
                <span>{{ article[`title_${locale}`] }}</span>
                <font-awesome-icon class="mr-1" :icon="['fas', 'fa-plus']"/>
              </a>
            </b-card-header>
            <b-collapse :id="`accordion-${article.id}`" visible accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <div style="text-align: center" class="mb-3">
                  <img style="max-width: 100%" :src="article.image && `${API_BASE_URL}/uploads/${article.image.hash}${article.image.ext}`"/>
                </div>
                <b-card-text><vue-markdown>{{ article[`text_${locale}`] }}</vue-markdown></b-card-text>
                <b-button :href="article[`doc_${locale}`] && `${API_BASE_URL}/uploads/${article[`doc_${locale}`].hash}${article[`doc_${locale}`].ext}`" target="_blank">{{ $t('ViewDocument') }}</b-button>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </div>

    </div>
  </b-container>
</template>

<script>
import VueMarkdown from 'vue-markdown';
import i18n from '@/plugins/i18n';
import { COOPERATION_URL, API_BASE_URL } from '@/constants.js';
import LoadingSpinner from '@/components/LoadingSpinner';
import ServerError from '@/components/ServerError';

export default {
 name: 'Cooperation',
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
      .get(COOPERATION_URL)
      .then(response => {
        this.data = response.data;
        console.log(this.data[0]);
      })
      .catch(error => {
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
  components: { LoadingSpinner, ServerError, VueMarkdown },
};
</script>

<style lang="postcss" scoped>
</style>