<template>
  <div class="page-row fb-widget">
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
.carousel-wrapper {
  height: calc(vh - 192px);
  width: 100%;
  overflow: hidden;
}

.slide-image {
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
  width: 100%;
  height: 500px;
}

.release-title {
  color: #fff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
  margin-top: -120px;
}
</style>