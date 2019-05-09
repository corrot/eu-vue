<template>
  <b-container>
    <loading-spinner v-if="loading"/>
    <server-error v-if="errored"/>
    <div v-if="!errored && !loading">
      <div v-for="newsletter in data" v-bind:key="newsletter.id">
        <h3>{{ newsletter["Title"] }}</h3>
        <!-- <p>{{ newsletter["Article"] }}</p> -->
        <vue-simple-markdown :source="newsletter.Article"></vue-simple-markdown>
      </div>
    </div>
  </b-container>
</template>

<script>
import { NEWSLETTERS_URL } from '@/constants.js';
import LoadingSpinner from '../../components/LoadingSpinner';
import ServerError from '../../components/ServerError';

export default {
  name: 'Newsletter',
  data() {
    return {
      data: null,
      loading: true,
      errored: false,
    };
  },
  mounted() {
    this.$http
      .get(NEWSLETTERS_URL)
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