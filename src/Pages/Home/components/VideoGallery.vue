<template>
  <div class="cards">
    <b-card no-body class="overflow-hidden" v-for="video in data" :key="video.id">
      <b-row no-gutters>
        <b-col md="6">
          <!-- <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img> -->
          <youtube player-width="360" player-height="220" :video-id="video.link.split('=')[1]"></youtube>
        </b-col>
        <b-col md="6">
          <b-card-body :title="video[`title_${locale}`]">
            <b-card-text>Video description</b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>

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