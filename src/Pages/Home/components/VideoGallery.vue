<template>
  <div class="cards">
    <h4 style="margin-bottom: 20px;">{{ $t('VideoGallery') }}</h4>
    <div v-for="video in data" :key="video.id">
      <b-row>
        <b-col rows="6"><youtube player-width="360" player-height="220" :video-id="video.link.split('=')[1]"></youtube></b-col>
      </b-row>
    </div>

    <div style="width: 100%; text-align: right">
      <a class="btn-read-more" href="https://www.youtube.com/channel/UCS6PSHW37QIJxqiCBwm-YfQ" target="_blank">{{ $t("ViewAll") }}...</a>
    </div>
    <!-- {{ $t('VideoGallery') }} -->
    <!-- <div v-for="video in data" :key="video.id">
      {{ video[`title_${locale}`] }}
      <youtube :video-id="video.link.split('=')[1]"></youtube>
    </div>-->
  </div>
</template>

<script>
import i18n from '@/plugins/i18n';
import { API_BASE_URL, VIDEOS_URL } from '@/constants.js';

export default {
  name: 'VideoGallery',
  components: {},
  data() {
    return {
      i18n,
      API_BASE_URL: API_BASE_URL,
      data: null,
      loading: true,
      errored: false,
    };
  },
  computed: {
    locale: () => {
      return i18n.locale;
    },
    videos: () => {
      return (
        this.data.length &&
        this.data.map(video => {
          const parts = video.link.split('=');
          return parts[parts.length - 1];
        })
      );
    },
  },
  mounted() {
    this.$http
      .get(VIDEOS_URL)
      .then(response => {
        this.data = response.data;
        console.log(this.data);
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
};
</script>

<style lang='postcss' scoped>
.cards {
  margin-top: 30px;
  background: #fff;
  padding: 30px;
  border: 1px solid #ddd;
}
</style>