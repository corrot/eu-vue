<template>
  <b-container>
    <loading-spinner v-if="loading" />
    <server-error v-if="errored" />
    <div v-if="!errored && !loading">
      <div v-for="newsletter in data" :key="newsletter.id">
        <h3>{{ newsletter[`title_${locale}`] }}</h3>
        <p>{{ newsletter.date.split(' ')[0] }}</p>
        <img
          style="width: 100%; object-fit: cover"
          :src="newsletter.image && `${API_BASE_URL}/uploads/${newsletter.image.hash}${newsletter.image.ext}`"
        />
        <p class="mb-3">
          <vue-markdown :source="newsletter[`article_${locale}`]"></vue-markdown>
        </p>
      </div>
    </div>
  </b-container>
</template>

<script>
import VueMarkdown from 'vue-markdown';
import i18n from '@/plugins/i18n';
import { NEWSLETTERS_URL, API_BASE_URL } from '@/constants.js';
import LoadingSpinner from '@/components/LoadingSpinner';
import ServerError from '@/components/ServerError';

export default {
  name: 'Newsletter',
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
      .get(NEWSLETTERS_URL)
      .then(response => {
        this.data = response.data;
        console.log(this.data);
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