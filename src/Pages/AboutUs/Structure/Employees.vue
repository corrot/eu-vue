<template>
  <b-container>
    <div>
      <h3>{{item["title"]}}</h3><br />
      <h4>{{item["name"]}}</h4><br />
      <div>
        Tel:
        <a :href="'tel:' + item['tel']">{{item['tel']}}</a>
      </div>
      <div>
        E-mail:
        <span v-for="(mail, index) in item.email" :key="index">
          <a :href="'mailto:' + mail">{{mail}}</a><br />
        </span>
      </div>
    </div>
  </b-container>
</template>

<script>
import i18n from '@/plugins/i18n';
import tree from './structure-tree.js';

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
      return i18n.locale;
    },
  },
  mounted() {},
};
</script>

<style lang="postcss" scoped>
</style>