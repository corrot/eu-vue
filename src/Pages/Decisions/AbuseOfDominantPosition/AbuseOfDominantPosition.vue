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