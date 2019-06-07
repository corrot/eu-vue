<template>
  <div>
    <b-container class="mb-3">
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