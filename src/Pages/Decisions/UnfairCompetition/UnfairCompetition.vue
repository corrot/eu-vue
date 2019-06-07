<template>
  <div>
    <b-container class="mb-3">
      <b-button
        to="/decisions/unfair-competition/by-prohibition"
        class="mr-2"
      >{{$t('ByProhibition')}}</b-button>
      <b-button
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
.btn-secondary{
  background-color: rgb(0, 0, 0, 0.03)!important;
  color: #29479a!important;
  border-radius: 0;
  border: none!important;
  padding: 10px;
}

.btn-secondary:focus{
  box-shadow: none!important;
}

.btn-secondary:hover{
  background-color: rgb(0, 0, 0, 0.07)!important;
}
</style>