<template>
  <div class="cards">
    <loading-spinner v-if="loading"/>
    <server-error v-if="errored"/>
    <div v-if="!errored && !loading">
      <router-link to="/media/news-archive">
        <h5 class="section-title">{{ $t('PhotoGallery') }}</h5>
      </router-link>
      <b-row>
        <b-col
          lg="4"
          class="mb-2"
          style=" overflow: hidden"
          v-for="(gallery, index) in images"
          :key="gallery[0]"
        >
          <vue-pure-lightbox :thumbnail="covers[index]" :images="gallery"></vue-pure-lightbox>
          <div class="card-body">{{ data[index][`title_${locale}`] }}</div>
        </b-col>
      </b-row>
      <div style="width: 100%; text-align: right">
        <!-- <a
          class="btn-read-more"
          href="https://www.youtube.com/channel/UCS6PSHW37QIJxqiCBwm-YfQ"
          target="_blank"
        >{{ $t("ViewAll") }}...</a>-->
        <router-link to="/media/news-archive" class="btn-read-more">
          <span>{{ $t("ViewAll") }}...</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';
import i18n from '@/plugins/i18n';
import { EVENTS_URL, API_BASE_URL } from '@/constants.js';
import LoadingSpinner from '@/components/LoadingSpinner';
import ServerError from '@/components/ServerError';
import VuePureLightbox from 'vue-pure-lightbox';

export default {
  name: 'PhotoGallery',
  data() {
    return {
      data: null,
      loading: true,
      errored: false,
      API_BASE_URL,
      images: null,
      covers: [],
    };
  },
  computed: {
    locale: () => {
      return i18n.locale;
    },
  },
  mounted() {
    this.$http
      .get(EVENTS_URL + '?_limit=3')
      .then(response => {
        this.data = response.data.reverse();
        this.images = this.data.map((o, i) => {
          this.covers.push(
            `${API_BASE_URL}/uploads/${this.data[i].cover_image.hash}${
              this.data[i].cover_image.ext
            }`
          );
          return o.photo_gallery.map(photo => {
            const image = `${API_BASE_URL}/uploads/${photo.hash}${photo.ext}`;
            return image;
          });
        });
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

<style lang='postcss' scoped>
.gallery-thumbnail {
  width: 100%;
  background: #141e3a;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
.card-body {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  max-height: 70px;
  padding: 8px;
  font-size: 14px;
  font-weight: bold;
}
</style>