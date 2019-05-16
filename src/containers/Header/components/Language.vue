<template>
  <div style="position: relative">
    <router-link to="/links">
      <font-awesome-icon class="icon-link mr-1" :icon="['fas', 'link']"/>
      <span class="links">
        {{ $t('Links') }}
      </span>
    </router-link>
    <links-separator/>
    <router-link to="/sitemap">
      <font-awesome-icon class="icon-sitemap mr-1" :icon="['fas', 'sitemap']"/>
      <span class="links">
        {{ $t('Sitemap') }}
      </span>
    </router-link>

    <links-separator/>
    <b-button id="print-button" @click="print">
      <font-awesome-icon class="mr-1" :icon="['fas', 'print']"/>
      <span class="links">Print</span>
    </b-button>

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
    print() {
      window.print();
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

.icon-link, .icon-sitemap, #print-button{
  color: #0a0a2d;
}

#print-button{
  background: none;
  border: none;
  padding: 2px;
}

#print-button:active, #print-button:focus{
  color: #0a0a2d;
  background: none;
  border: none!important;
  box-shadow: none;
}

.links{
  color: #0a0a2d;
}

.links:hover{
  color: #253d92;
}

</style>