<template>
  <b-container>
    <div style="padding: 15px 0">
      <h3>{{item["title"]}}</h3>
      <h4>{{item["name"]}}</h4>
      <div>
        tel:
        <a :href="'tel:' + item['tel']">{{item['tel']}}</a>
      </div>
      <div>
        email:
        <div v-for="(mail, index) in item.email" :key="index">
          <a :href="'mailto:' + mail">{{mail}}</a>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
import i18n from '@/plugins/i18n';
import tree from './structure.js';

export default {
  name: 'WhatWeDo',
  data() {
    return {
      tree,
      item: tree.filter(i => i.id == this.$route.params.id)[0],
    };
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