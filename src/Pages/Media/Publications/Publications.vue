<template>
  <div>
    <loading-spinner v-if="loading"/>
    <server-error v-if="errored"/>
    <div v-if="!errored && !loading">
      <b-card no-body class="mb-2" v-for="p in data" :key="p.id">
        <b-card-header header-tag="header" class="p-3" role="tab">
          <a v-b-toggle="'accordion-' + p.id" variant="info">
            <span>{{ p[`title_${locale}`] }}</span>
            <font-awesome-icon class="mr-1" :icon="['fas', 'fa-plus']"/>
          </a>
        </b-card-header>
        <b-collapse :id="`accordion-${p.id}`" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <img
              class="mb-3 mt-3"
              style="max-width: 100%"
              :src="p.image && `${API_BASE_URL}/uploads/${p.image.hash}${p.image.ext}`"
            >
            <b-card-text>
              <vue-markdown class="article">{{ p[`article_${locale}`] }}</vue-markdown>
            </b-card-text>
            <b-button
              v-if="p[`doc_${locale}`]"
              :href="p[`doc_${locale}`] && `${API_BASE_URL}/uploads/${p[`doc_${locale}`].hash}${p[`doc_${locale}`].ext}`"
              target="_blank"
            >{{ $t('ViewDocument') }}</b-button>
          </b-card-body>
        </b-collapse>
      </b-card>
      <!-- <div v-for="p in data" :key="p.id">
        <a :href="p[`link_${locale}`]" target="_blank">{{ p[`title_${locale}`] }}</a>
      </div>-->
    </div>
  </div>
</template>

<script>
import i18n from '@/plugins/i18n';
import { PUBLICATIONS_URL, API_BASE_URL } from '@/constants.js';
import LoadingSpinner from '@/components/LoadingSpinner';
import ServerError from '@/components/ServerError';

export default {
  name: 'Publications',
  data() {
    return {
      data: null,
      loading: true,
      errored: false,
      API_BASE_URL,
    };
  },
  computed: {
    locale: () => {
      return i18n.locale;
    },
  },
  mounted() {
    this.$http
      .get(PUBLICATIONS_URL)
      .then(response => {
        this.data = response.data;
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