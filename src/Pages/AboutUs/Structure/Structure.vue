<template>
  <div>
    <b-container>
      <div :v-if="locale">
        <img style="width: 100%" :src="structure" alt="Structure">
        <div v-for="(item, index) in tree" :key="index" class="mb-2">
          <b-button :to="'/employees/' + index" :id="index">{{ item.title }}</b-button>
          <b-tooltip :target="index.toString()">{{ item.name }}</b-tooltip>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import i18n from '@/plugins/i18n';
import structure from './structure.jpg';
import tree from './structure-tree.js';

export default {
  name: 'Structure',
  data() {
    return {
      structure,
      tree,
    };
  },
  computed: {
    locale: () => {
      console.log(i18n.locale);
      return i18n.locale;
    },
  },
  mounted() {
    
  }
};
</script>

<style lang="postcss" scoped>
</style>