<template>
  <div class="page-row fb-widget" style="min-width: 180px; width: 286px; text-align: center">
    <div
      class="fb-page"
      data-href="https://www.facebook.com/CompetitionAgencyGeo"
      data-tabs="timeline"
      data-small-header="false"
      data-adapt-container-width="true"
      data-hide-cover="false"
      data-show-facepile="true"
    >
      <blockquote
        cite="https://www.facebook.com/CompetitionAgencyGeo"
        class="fb-xfbml-parse-ignore"
      >
        <a href="https://www.facebook.com/CompetitionAgencyGeo">{{$t('CompetitionAgencyOfGeorgia')}}</a>
      </blockquote>
    </div>
  </div>
</template>

<script>
import i18n from '@/plugins/i18n';

export default {
  name: 'Fbwidget',
  components: {},
  data() {
    return { i18n };
  },
};
</script>

<style lang='postcss' scoped>
.fb-widget {
  padding: 15px 0;
}
</style>