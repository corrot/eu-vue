<template>
  <div class="carreer">
    <loading-spinner v-if="loading"/>
    <server-error v-if="errored"/>
    <b-container v-if="!errored && !loading">
      <!-- content -->
      {{ vacancies }}
      {{ internships }}
    </b-container>
  </div>
</template>

<script>
import i18n from '@/plugins/i18n';
import { VACANCIES_URL, INTERNSHIPS_URL, API_BASE_URL } from '@/constants.js';
import LoadingSpinner from '@/components/LoadingSpinner';
import ServerError from '@/components/ServerError';

export default {
  name: 'Carreer',
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
  components: { LoadingSpinner, ServerError },
};
</script>

<style lang="postcss" scoped>
</style>