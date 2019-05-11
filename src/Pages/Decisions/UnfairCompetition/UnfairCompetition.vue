<template>
  <div>
    <b-container style="padding: 15px 0">
      <b-button
        to="/decisions/abuse-of-diminant-position/by-prohibition"
        class="mr-2"
      >{{$t('ByProhibition')}}</b-button>
      <b-button
        to="/decisions/abuse-of-diminant-position/by-investigation"
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