<template>
  <b-container>
    <loading-spinner v-if="loading" />
    <server-error v-if="errored" />
    <div v-if="!errored && !loading">
      <h4 style="max-width: 80%">{{ data[`title_${locale}`] }}</h4>
      <h5>{{ data.date && data.date.split(' ')[0].split('-').reverse().join('.') }}</h5>
      <div style="text-align: center" class="mb-3">
        <img
          style="max-width: 100%"
          :src="data.image && `${API_BASE_URL}/uploads/${data.image.hash}${data.image.ext}`"
        />
      </div>
      <vue-markdown class="mt-3" :source="data[`article_${locale}`]"></vue-markdown>
    </div>
  </b-container>
</template>

<script>
import VueMarkdown from 'vue-markdown';
import i18n from '@/plugins/i18n';
import { ANNOUNCEMENTS_URL, API_BASE_URL } from '@/constants.js';
import LoadingSpinner from '@/components/LoadingSpinner';
import ServerError from '@/components/ServerError';
import VuePureLightbox from 'vue-pure-lightbox';

export default {
  name: 'Events',
  data() {
    return {
      data: null,
      images: null,
      more: null,
      loading: true,
      errored: false,
      API_BASE_URL,
      id: this.$route.params.id,
    };
  },
  computed: {
    locale: () => {
      return i18n.locale;
    },
  },
  mounted() {
    this.$http
      .get(ANNOUNCEMENTS_URL + '/' + this.$route.params.id)
      .then(response => {
        this.data = response.data;
        // this.images = response.data.photo_gallery.map(photo => {
        //   const image = `${API_BASE_URL}/uploads/${photo.hash}${photo.ext}`;
        //   return image;
        // });
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
  components: { LoadingSpinner, ServerError, VuePureLightbox, VueMarkdown },
};
</script>

<style lang="postcss" scoped>
.card-body {
  padding: 0;
}
.image-count {
  text-align: right;
  margin-top: -56px;
  color: #fff;
}
.image-count > div {
  display: inline-block;
  background: #00000099;
}
.card-title,
.card-text {
  padding: 10px;
  padding-top: 0;
}
.card-title {
  padding-top: 10px;
}
.card-text {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.date-container {
  /* background: #b74f29; */
  width: 100%;
  height: 100%;
  color: #b74f29;
  font-weight: bold;
  font-size: 18px;
  position: relative;
  line-height: 16px;
}
.date-wrapper {
  width: 100%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
}
.date-wrapper > div {
  border-left: 3px solid #141e3a;
  display: flex;
  justify-items: center;
  flex-direction: column;
}
</style>