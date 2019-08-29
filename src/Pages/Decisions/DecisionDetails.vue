<template>
  <b-container>
    <loading-spinner v-if="loading"/>
    <server-error v-if="errored"/>
    <div v-if="!errored && !loading">
      <div class="mt-2" v-if="data.decisiontype">
      <router-link :to="decisionTypes[data.decisiontype.id - 1].path">
        {{ $t(decisionTypes[data.decisiontype.id - 1].title) }}
        {{ decisionTypes[data.decisiontype.id - 1].type ? ' / ' + $t(decisionTypes[data.decisiontype.id - 1].type) : '' }}</router-link>
         </div>
      <h4 class="mt-3">{{ data[`title_${locale}`] }}</h4>
      <h5>{{ data.date && data.date.split(' ')[0].split('-').reverse().join('.') }}</h5>
      <div style="text-align: justify">{{ data[`article_${locale}`] }}</div>
    </div>
  </b-container>
</template>

<script>
import VueMarkdown from 'vue-markdown';
import i18n from '@/plugins/i18n';
import { DECISIONS_URL, API_BASE_URL, decisionTypes } from '@/constants.js';
import LoadingSpinner from '@/components/LoadingSpinner';
import ServerError from '@/components/ServerError';

export default {
  name: 'Decisions',
  data() {
    return {
      data: null,
      more: null,
      loading: true,
      errored: false,
      API_BASE_URL,
      id: this.$route.params.id,
      decisionTypes
    };
  },
  computed: {
    locale: () => {
      return i18n.locale;
    },
  },
  mounted() {
    this.$http
      .get(DECISIONS_URL + '/' + this.$route.params.id)
      .then(response => {
        this.data = response.data;
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