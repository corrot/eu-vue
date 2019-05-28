<template>
  <b-container>
    <div class="app-top-header">
      <logo-component/>
      <div class="euca-title">
        <span>საქართველოს კონკურენციის სააგენტო</span>
        <span>Competition Agency of Georgia</span>
      </div>
      <span class="lang-social">
        <language-component/>
      </span>
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
  }
};
</script>

<style lang="postcss" scoped>
.app-top-header {
  margin: 20px 0;
}

.euca-title {
  display: inline;
  margin-left: 10px;
}

.euca-title span{
  font-size: 16px;
}




/* 
@media (max-width: 1200px) {
  
}

@media (max-width: 992px) {
  
} */
</style>