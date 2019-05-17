<template>
  <div class="guidelines" style="padding: 15px 0">
    <loading-spinner v-if="loading"/>
    <server-error v-if="errored"/>
    <div v-if="!errored && !loading">
      <!-- content -->
    </div>
  </div>
</template>

<script>
import i18n from '@/plugins/i18n';
import { GUIDELINES_URL } from '@/constants.js';
import LoadingSpinner from '@/components/LoadingSpinner';
import ServerError from '@/components/ServerError';

export default {
  name: 'Guidelines',
  data() {
    return {
      data: null,
      loading: true,
      errored: false,
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
</style>