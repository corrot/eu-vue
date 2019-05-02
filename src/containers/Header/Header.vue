<template>
  <b-container>
    <div class="euca-title">
      <br>
      <h3>საქართველოს კონკურენციის სააგენტო</h3>
      <br>
      <h3>Competition Agency of Georgia</h3>
    </div>
    <div class="app-top-header">
      <logo-component/>
      <div>
        <language-component/>
        <social-component style="display: inline-block; float: right; margin-top: 20px;"/>
      </div>
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
  methods: {
    handleClick: () => {},
  },
  components: { LogoComponent, SocialComponent, LanguageComponent },
  data() {
    return {};
  },
  created() {},
  destroyed() {},
};
</script>

<style lang="postcss" scoped>
.app-top-header {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}

.euca-title {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  text-align: center;
}
</style>