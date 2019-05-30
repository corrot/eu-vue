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
    <b-button id="print-button" @click="print">
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

    <social-component/>
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
  color: #DB2323;
}


/* 
.search-input{
  background: #f7f7f7;
  padding: 0 40px 0 13px;
  outline: none;
  color: #838383;
  line-height: 28px;
  height: 30px;
  border: 1px solid #eaeaea;
}

#btnSearch{
  font-size: 0;
  height: 30px;
   border: none; 
  border: 1px solid red;

  border-left: 1px solid lightgray;
  outline: none;
  cursor: pointer;
  line-height: 30px;
   //position: absolute; 
   //top: 0; 
   //right: 0; 
  background: none;
  width: 34px;
}

.btn-search-group span{
   //position: absolute; 
  //top: 0; 
} */
</style>