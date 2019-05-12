<template>
  <b-container>
    <h2>{{ $t('AnnualReports') }}:</h2>
    <br>
    <div class="mb-2">
      <b-button to="/uploads/a8d134311b3747ab9b3450764eb63448.pdf">2017 წლის ანგარიში</b-button>
    </div>
    <div class="mb-2">
      <b-button to="/uploads/91c46c6fa6ae41ed9d02c0c9f264d636.pdf">2016 წლის ანგარიში</b-button>
    </div>
    <div class="mb-2">
      <b-button to="/uploads/1a464f35fc96415aafb9aa87096b965a.pdf">2015 წლის ანგარიში</b-button>
    </div>
    <div class="mb-2">
      <b-button to="/uploads/f8d448cd15084472b51339120e9b3f00.pdf">2014 წლის ანგარიში</b-button>
    </div>
  </b-container>
</template>

<script>
import i18n from '@/plugins/i18n';

export default {
  name: 'WhatWeDo',
  data() {
    return {};
  },
  computed: {
    locale: () => {
      console.log(i18n.locale);
      return i18n.locale;
    },
  },
  mounted() {},
};
</script>

<style lang="postcss" scoped>
</style>