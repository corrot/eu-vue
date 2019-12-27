<template>
  <b-container>
    <div class="app-top-header hidden-print">
      <div style="padding: 10px; font-size: 16px; background: red; color: #fff; font-weight: bold; text-align: center; width: 100%">{{ $t("TESTVERSION") }}</div>
      <div class="header-left">
        <logo-component />
        <div class="euca-title">
          <div
            style="margin-bottom: 10px; font-family: 'Open Sans', 'BPG Glaho WEB Caps', sans-serif; font-size: 18px;"
          >საქართველოს კონკურენციის სააგენტო</div>
          <br />
          <div
            style="font-family: 'Open Sans', 'BPG Glaho WEB Caps', sans-serif; font-size: 18px;"
          >COMPETITION AGENCY OF GEORGIA</div>
        </div>
      </div>
      <span class="lang-social">
        <language-component />
      </span>
    </div>
    <div class="header mobile">
      <logo-component />
    </div>
  </b-container>
</template>

<script>
import i18n from '@/plugins/i18n';
import LogoComponent from './components/Logo';
import SocialComponent from './components/Social';
import LanguageComponent from './components/Language';

export default {
  name: 'Header',
  components: { LogoComponent, SocialComponent, LanguageComponent },
  data() {
    return {};
  },
};
</script>

<style lang="postcss" scoped>
.app-top-header {
  margin: 20px 0;
  position: relative;
}

.euca-title {
  display: inline;
  margin-left: 110px;
}

.header-left {
  display: flex;
  position: relative;
}

.euca-title {
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
}

.euca-title div {
  font-size: 16px;
  display: inline-block;
}

.lang-social {
  position: absolute;
  right: 0;
  top: 0;
}

/* 
@media (max-width: 1200px) {
  
} */

@media (max-width: 992px) {
  .lang-social {
    display: none;
  }

  .header-left {
    display: none;
  }
}
</style>