<template>
  <div class="language">
    <router-link to="/links">
      <font-awesome-icon class="icon-link mr-1" :icon="['fas', 'link']"/>
      <span class="links">{{ $t('Links') }}</span>
    </router-link>
    <links-separator/>
    <router-link to="/sitemap">
      <font-awesome-icon class="icon-sitemap mr-1" :icon="['fas', 'sitemap']"/>
      <span class="links">{{ $t('Sitemap') }}</span>
    </router-link>

    <links-separator/>
    <b-button id="print-button" @click="print" style="margin-top: -5px;">
      <font-awesome-icon class="mr-1" :icon="['fas', 'print']"/>
      <span class="links">{{ $t('Print') }}</span>
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
    <div>
      <div style="position: absolute" class="w-100">
        <social-component class="ml-2"/>
        <b-input-group class="mt-3 ml-2 input-search" size="sm" style="max-width: 200px">
          <b-form-input placeholder="Search"></b-form-input>
          <b-input-group-append>
            <b-button to="/search/no-such-file" class="ml-0" variant="info">
              <font-awesome-icon class="icon-search mr-1" :icon="['fas', 'search']"/>
            </b-button>
          </b-input-group-append>
        </b-input-group>
      </div>
    </div>
    <!--     
    <div class="input-group">
      <input class="search-input form-control my-0 py-1 amber-border" type="text" placeholder="Search" aria-label="Search">
      <div class="btn-search-group">
        <input type="submit" name="search" id="btnSearch"/>
        <span>S</span>
      </div>
    </div>-->
  </div>
</template>

<script>
import i18n from '@/plugins/i18n';
import LinksSeparator from '@/components/LinksSeparator';
import SocialComponent from './Social';

export default {
  name: 'Language',
  methods: {
    handleClick: () => {},
    changeLocale(locale) {
      i18n.locale = locale;
      localStorage.setItem('activeLocale', locale);
    },
    print() {
      window.print();
    },
  },
  components: {
    LinksSeparator,
    SocialComponent,
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
.language {
  float: right;
  margin-top: 15px;
}

.language a {
  margin-left: 12px;
}

.language-toggler {
  cursor: pointer;
  display: inline-block;
}

.icon-link,
.icon-sitemap,
#print-button {
  color: #141e3a;
}

#print-button {
  background: none;
  border: none;
  padding: 2px;
}

#print-button:active,
#print-button:focus {
  color: #0a0a2d;
  background: none;
  border: none !important;
  box-shadow: none;
}

.links {
  color: #0a0a2d;
}

.links:hover {
  color: #db2323;
}
.input-search {
}
.input-search > input,
.input-search > .input-group-append > .btn {
  border-radius: 0;
}
.input-search > .input-group-append > .btn {
  background: #db2323;
  border-color: #db2323;
}
</style>