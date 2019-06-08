<template>
  <b-container class="guidelines">
    <loading-spinner v-if="loading"/>
    <server-error v-if="errored"/>
      <div v-if="!errored && !loading">
          <div role="tablist" class="mb-5">
            <h5 class="section-title">{{ data[`title_${locale}`] }}</h5>
            <b-card no-body class="mb-2" v-for="article in data.legislations" :key="article.id">
              <b-card-header header-tag="header" class="p-3" role="tab">
                <a target="_blank" :href="article[`doc_${locale}`] && `${API_BASE_URL}/uploads/${article[`doc_${locale}`].hash}${article[`doc_${locale}`].ext}`" v-b-toggle="'accordion-' + article.id" variant="info">
                  <span>{{ article[`title_${locale}`] }}</span>
                  <font-awesome-icon class="mr-1" :icon="['fas', 'fa-plus']"/>
                </a>
              </b-card-header>
            </b-card>
          </div>
      </div>
  </b-container>
</template>

<script>
import i18n from '@/plugins/i18n';
import { GUIDELINES_URL, API_BASE_URL } from '@/constants.js';
import LoadingSpinner from '@/components/LoadingSpinner';
import ServerError from '@/components/ServerError';

export default {
  name: 'Guidelines',
  data() {
    return {
      data: null,
      loading: true,
      errored: false,
      API_BASE_URL
    };
  },
  computed: {
    locale: () => {
      return i18n.locale;
    },
  },
  mounted() {
    this.$http
      .get(GUIDELINES_URL)
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
  .article > p > a {
    color: #007bff!important;
  }
  .card-header > a{
    color: #141e3a;
    font-weight: bold;
    transition: .3s ease all;
  }
  .card-header > a:active, .card-header > a:focus, .card-header > a:hover{
    color: #e07400;
    transition: .3s ease all;
  }
</style>