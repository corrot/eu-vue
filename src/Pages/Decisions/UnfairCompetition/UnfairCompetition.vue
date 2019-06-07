<template>
  <div>
    <b-container class="mb-3">
      <b-button
        to="/decisions/unfair-competition/by-prohibition"
        class="mr-5 decision-tab"
      >{{$t('ByProhibition')}}</b-button>
      <b-button
        class="mr-5 decision-tab"
        to="/decisions/unfair-competition/by-investigation"
      >{{$t('ByInvestigation')}}</b-button>
    </b-container>
    <router-view></router-view>
  </div>
</template>

<script>
import { NEWSLETTERS_URL } from '@/constants.js';
import LoadingSpinner from '@/components/LoadingSpinner';
import ServerError from '@/components/ServerError';

export default {
  name: 'UnfairCompetition',
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