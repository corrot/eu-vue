<template>
  <b-container>
    <loading-spinner v-if="loading"/>
    <server-error v-if="errored"/>
    <div v-if="!errored && !loading">
      <!-- content -->
      <div v-if="!errored && !loading">
        <div role="tablist" class="mb-4">
          <h5 class="section-title">{{ $t('Ongoing') }}</h5>
          <b-card no-body class="mb-2"
            v-for="article in data"
            :key="article.id"
            v-if="!article.IsEnded"
            >
            <b-card-header header-tag="header" class="p-3" role="tab">
              <a v-b-toggle="'accordion-1-' + article.id" variant="info">
                <span>{{ article[`title_${locale}`] }}</span>
                <font-awesome-icon class="mr-1" :icon="['fas', 'fa-plus']"/>
              </a>
            </b-card-header>
            <b-collapse :id="`accordion-1-${article.id}`" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <h5 class="mb-3">{{ article.date_start.split(' ')[0] }}</h5>
                <div style="text-align: center" class="mb-3">
                  <img style="max-width: 100%" :src="article.image && `${API_BASE_URL}/uploads/${article.image.hash}${article.image.ext}`"/>
                </div>
                <b-card-text><vue-markdown>{{ article[`text_${locale}`] }}</vue-markdown></b-card-text>
                <a :href="article.Link"
                >{{ $t('GoToLink') }}
              </a>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>

        <div role="tablist">
          <h5 class="section-title">{{ $t('Finished') }}</h5>
          <b-card no-body class="mb-2"
            v-for="article in data"
            :key="article.id"
            v-if="article.IsEnded"
            >
            <b-card-header header-tag="header" class="p-3" role="tab">
              <a block href="#" v-b-toggle="'accordion-2-' + article.id" variant="info">
                <span>{{ article[`title_${locale}`] }}</span>
                <font-awesome-icon class="mr-1" :icon="['fas', 'fa-plus']"/>
              </a>
            </b-card-header>
            <b-collapse :id="`accordion-2-${article.id}`" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <h5 class="mb-3">{{ article.date_start.split(' ')[0] }}</h5>
                <div style="text-align: center" class="mb-3">
                  <img style="max-width: 100%" :src="article.image && `${API_BASE_URL}/uploads/${article.image.hash}${article.image.ext}`"/>
                </div>
                <b-card-text><vue-markdown>{{ article[`text_${locale}`] }}</vue-markdown></b-card-text>
                <a :href="article.Link" target="_blank"
                >{{ $t('GoToLink') }}
              </a>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
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
      .get(PUBLICSURVEYS_URL)
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