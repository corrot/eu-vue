<template>
  <div class="carreer">
    <loading-spinner v-if="loading"/>
    <server-error v-if="errored"/>
    <b-container v-if="!errored && !loading">
      <!-- content -->
      <div v-if="!errored && !loading">
          <div role="tablist" class="mb-5" v-if="vacancies.length">
            <h5 class="section-title">{{ $t('Vacancies') }}</h5>
            <b-card no-body class="mb-2" v-for="vacancy in vacancies" :key="vacancy.id">
              <b-card-header header-tag="header" class="p-3" role="tab">
                <a block href="#" v-b-toggle="'accordion-1-' + vacancy.id" variant="info">
                  <span>{{ vacancy[`title_${locale}`] }}</span>
                  <font-awesome-icon class="mr-1" :icon="['fas', 'fa-plus']"/>
                </a>
              </b-card-header>
              <b-collapse :id="`accordion-1-${vacancy.id}`" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text><vue-markdown class="article">{{ vacancy[`text_${locale}`] }}</vue-markdown></b-card-text>
                  <b-button :href="vacancy.image && `${API_BASE_URL}/uploads/${vacancy.image.hash}${vacancy.image.ext}`" target="_blank">{{ $t('ViewDocument') }}</b-button>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
          
          <div role="tablist" class="mb-5" v-if="internships.length">
            <h5 class="section-title">{{ $t('Internships') }}</h5>
            <b-card no-body class="mb-2" v-for="internship in internships" :key="internship.id">
              <b-card-header header-tag="header" class="p-3" role="tab">
                <a block href="#" v-b-toggle="'accordion-2-' + internship.id" variant="info">
                  <span>{{ internship[`title_${locale}`] }}</span>
                  <font-awesome-icon class="mr-1" :icon="['fas', 'fa-plus']"/>
                </a>
              </b-card-header>
              <b-collapse :id="`accordion-2-${internship.id}`" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text><vue-markdown class="article">{{ internship[`text_${locale}`] }}</vue-markdown></b-card-text>
                  <b-button :href="internship.image && `${API_BASE_URL}/uploads/${internship.image.hash}${internship.image.ext}`" target="_blank">{{ $t('ViewDocument') }}</b-button>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
        </div>
    </b-container>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';
import i18n from '@/plugins/i18n';
import { VACANCIES_URL, INTERNSHIPS_URL, API_BASE_URL } from '@/constants.js';
import LoadingSpinner from '@/components/LoadingSpinner';
import ServerError from '@/components/ServerError';

export default {
  name: 'Carreer',
  data() {
    return {
      loading: true,
      vacancies: null,
      internships: null,
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
      .get(VACANCIES_URL)
      .then(response => {
        this.vacancies = response.data;
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));

    this.$http
      .get(INTERNSHIPS_URL)
      .then(response => {
        this.internships = response.data;
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