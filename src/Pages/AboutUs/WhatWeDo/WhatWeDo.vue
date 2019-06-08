<template>
  <b-container class="styled">
    <loading-spinner v-if="loading"/>
    <server-error v-if="errored"/>
    <div v-if="!errored && !loading">
      <vue-markdown>{{ data[0][`text_${locale}`] }}</vue-markdown>
    </div>
  </b-container>
</template>

<script>
import VueMarkdown from 'vue-markdown';
import i18n from '@/plugins/i18n';
import { API_BASE_URL, WHATWEDO_URL } from '@/constants.js';
import LoadingSpinner from '@/components/LoadingSpinner';
import ServerError from '@/components/ServerError';

export default {
  name: 'WhatWeDo',
  data() {
    return {
      currentPage: 1,
      news: null,
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
      .get(WHATWEDO_URL)
      .then(response => {
        this.data = response.data;
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
  methods: {
    expandArticle(){
    }
  },
  components: { LoadingSpinner, ServerError, VueMarkdown }
};
</script>

<style lang="postcss" scoped>
</style>