
<template>
  <div style="position: relative">
    <router-link to="/links">
      <font-awesome-icon class="icon-link mr-1" :icon="['fas', 'link']"/>Links
    </router-link>
    <links-separator/>
    <router-link to="/sitemap">
      <font-awesome-icon class="icon-sitemap mr-1" :icon="['fas', 'sitemap']"/>Sitemap
    </router-link>
    <links-separator/>
    <div
      class="language-toggler"
      v-for="entry in languages"
      :key="entry.title"
      @click="changeLocale(entry.language)"
      v-show="entry.language !== i18n.locale"
    >
      <flag :iso="entry.flag" v-bind:squared="false"></flag>
    </div>
  </div>
</template>

<script>
import i18n from '@/plugins/i18n';
import LinksSeparator from '@/components/LinksSeparator';

export default {
  name: 'Language',
  methods: {
    handleClick: () => {},
    changeLocale(locale) {
      i18n.locale = locale;
    },
  },
  components: {
    LinksSeparator,
  },
  data() {
    return {
      languages: [
        { flag: 'gb', language: 'en', title: 'English' },
        { flag: 'ge', language: 'ge', title: 'ქართული' },
      ],
      i18n,
    };
  },
  created() {},
  destroyed() {},
};
</script>

<style lang="postcss" scoped>
.language-toggler {
  cursor: pointer;
  display: inline-block;
}
</style>