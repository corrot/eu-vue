<template>
  <div
    class="page-row fb-widget"
    style="min-width: 180px; width: 286px; text-align: center; overflow-y: auto"
  >
    <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FGeorgianNationalCompetitionAgency&tabs=timeline&width=286&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=872826369728027" width="286" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
    <!-- <div
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
    </div>-->
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