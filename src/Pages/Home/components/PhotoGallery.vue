<template>
  <div class="cards">
    <router-link to="/media/events"><h5 class="section-title">{{ $t('PhotoGallery') }}</h5></router-link>
  </div>
</template>

<script>
import i18n from '@/plugins/i18n';

export default {
  name: 'PhotoGallery',
  components: {},
  data() {
    return { i18n };
  },
};
</script>

<style lang='postcss' scoped>

</style>