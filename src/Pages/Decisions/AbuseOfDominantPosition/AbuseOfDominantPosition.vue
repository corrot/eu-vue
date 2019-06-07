<template>
  <div>
    <b-container class="mb-3">
      <b-button
        to="/decisions/abuse-of-dominant-position/by-prohibition"
        class="mr-5 decision-tab"
      >{{$t('ByProhibition')}}</b-button>
      <b-button
        class="mr-5 decision-tab"
        to="/decisions/abuse-of-dominant-position/by-investigation"
      >{{$t('ByInvestigation')}}</b-button>
    </b-container>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'ByProhibition',
  data() {
    return {};
  },
  mounted() {},
};
</script>

<style lang="postcss" scoped>
</style>