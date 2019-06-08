<template>
  <div class="cards">
    <loading-spinner v-if="loading"/>
    <server-error v-if="errored"/>
    <div v-if="!errored && !loading">
      <router-link to="/media/events"><h5 class="section-title">{{ $t('PhotoGallery') }}</h5></router-link>
      <b-row>
        <b-col cols="4" class="pr-0" style="height: 140px; overflow: hidden"
        v-for="image in images"
        :key="image[0]">
          <vue-pure-lightbox
            style="width: 100%"
            :thumbnail="image[0]"
            :images="image"
          >
          </vue-pure-lightbox>
        </b-col>
      </b-row>
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
      images: null
    };
  },
  computed: {
    locale: () => {
      return i18n.locale;
    }
  },
  mounted() {
    this.$http
      .get(EVENTS_URL + '?_limit=3')
      .then(response => {
        this.data = response.data;
        this.images = this.data.map(o => {
          return o.photo_gallery.map(photo => {
            const image = `${API_BASE_URL}/uploads/${photo.hash}${photo.ext}`;
            return image;
          })
        })
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

</style>