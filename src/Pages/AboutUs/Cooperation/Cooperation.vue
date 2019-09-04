<template>
  <b-container>
    <div class="projects">
      <loading-spinner v-if="loading"/>
      <server-error v-if="errored"/>

      <div v-if="!errored && !loading">
        <div v-for="type in data" :key="type.id">
          <div role="tablist" class="mb-5">
            <h5 v-if="type.cooperation.length" class="section-title">{{ type[`title_${locale}`] }}</h5>
            <b-card no-body class="mb-2" v-for="article in type.cooperation" :key="article.id">
              <b-card-header :id="`anchor-${article.id}`" header-tag="header" class="p-3" role="tab">
                <a block 
                  v-b-toggle="'accordion-' + article.id" variant="info"
                >
                  <span>{{ article[`title_${locale}`] }}</span>
                  <font-awesome-icon class="mr-1" :icon="['fas', 'fa-plus']"/>
                </a>
              </b-card-header>
              <b-collapse :id="`accordion-${article.id}`" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <div style="text-align: center" class="mb-3">
                    <img style="width: 50%" :src="article.image && `${API_BASE_URL}/uploads/${article.image.hash}${article.image.ext}`"/>
                  </div>
                  <b-card-text><vue-markdown class="article">{{ article[`text_${locale}`] }}</vue-markdown></b-card-text>
                  <b-button :href="article[`doc_${locale}`] && `${API_BASE_URL}/uploads/${article[`doc_${locale}`].hash}${article[`doc_${locale}`].ext}`" target="_blank">{{ $t('ViewDocument') }}</b-button>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
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
      .get(COOPERATION_URL)
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