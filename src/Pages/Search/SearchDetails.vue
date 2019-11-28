<template>
  <b-container>
    <div class="pt-4">
      <div id="search" v-for="(i, index) in data" :key="i.id" class="mb-4">
        <div class="mb-2">
          {{
            (i.date && i.date.split(' ')[0]) ||
              (i.date_start && i.date_start.split(' ')[0])
          }}
        </div>
        <div class="mb-2" style="font-weight: bold" v-if="i[`title_${locale}`]">
          {{ i[`title_${locale}`] }}
        </div>
        <div v-if="i.image" style="width: 30%; margin: auto" class="mb-3 mt-3">
          <img
            style="max-width: 100%"
            :src="i.image && `${API_BASE_URL}/uploads/${i.image.hash}${i.image.ext}`"
          />
        </div>
        <div v-if="i.cover_image" style="width: 30%; margin: auto" class="mb-3 mt-3">
          <img
            style="max-width: 100%"
            :src="i.cover_image && `${API_BASE_URL}/uploads/${i.cover_image.hash}${i.cover_image.ext}`"
          />
        </div>
        <div style="font-weight: bold" v-if="i[`name_${locale}`]">
          {{ i[`name_${locale}`] }}
        </div>
        <div style="font-weight: bold" v-if="i[`position_${locale}`]">
          {{ i[`position_${locale}`] }}
        </div>
        <div v-if="i[`article_${locale}`]">
          <vue-markdown :source="i[`article_${locale}`]"></vue-markdown>
        </div>
        <div v-if="i[`text_${locale}`]">
          <vue-markdown :source="i[`text_${locale}`]"></vue-markdown>
        </div>
        <div style="font-weight: bold" v-if="i[`question_${locale}`]">
          {{ i[`question_${locale}`] }}
        </div>
        <div v-if="i[`answer_${locale}`]">
          <vue-markdown :source="i[`answer_${locale}`]"></vue-markdown>
        </div>
        <div v-if="i[`biography_${locale}`]">
          <vue-markdown :source="i[`biography_${locale}`]"></vue-markdown>
        </div>
        <div
          class="mt-2"
          v-if="
            i[`doc_${locale}`] &&
              (Array.isArray(i[`doc_${locale}`]) &&
                i[`doc_${locale}`].length > 0)
          "
        >
          <div v-for="doc in i[`doc_${locale}`]" :key="doc.id">
            <a
              class="link"
              target="_blank"
              :href="
                `${API_BASE_URL}/uploads/${doc.hash}${
                  doc.ext
                }`
              "
              >{{ $t('ViewDocument') }}</a
            >
          </div>
        </div>
        <div
          class="mt-2"
          v-if="
            i[`doc_${locale}`] &&
              !(Array.isArray(i[`doc_${locale}`]) &&
                i[`doc_${locale}`].length <= 0)
          "
        >
          <a
            class="link"
            target="_blank"
            :href="
              `${API_BASE_URL}/uploads/${i[`doc_${locale}`].hash}${
                i[`doc_${locale}`].ext
              }`
            "
            >{{ $t('ViewDocument') }}</a
          >
        </div>
        <div class="mt-2" v-if="i[`document_${locale}`]">
          <a
            class="link"
            target="_blank"
            :href="
              `${API_BASE_URL}/uploads/${i[`document_${locale}`].hash}${
                i[`document_${locale}`].ext
              }`
            "
            >{{ $t('ViewDocument') }}</a
          >
        </div>
        <div v-if="i.link || i.Link">
          <a target="_blank" :href="i.link || i.Link">{{ $t('GoToLink') }}</a>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
import VueMarkdown from 'vue-markdown';
import i18n from '@/plugins/i18n';
import LoadingSpinner from '@/components/LoadingSpinner';
import ServerError from '@/components/ServerError';
import VuePureLightbox from 'vue-pure-lightbox';
import endpoints, { searchEndpoints } from './searchHelper';
import { API_BASE_URL } from '@/constants.js';

export default {
  name: 'Search',
  data() {
    return {
      data: [window.searchResult.i],
      loading: true,
      id: this.$route.params.id,
      resultIndex: this.$route.params.index,
      currentPage: 1,
      all: [],
      API_BASE_URL,
    };
  },
  computed: {
    locale: () => {
      return i18n.locale;
    },
  },
  components: { LoadingSpinner, ServerError, VuePureLightbox, VueMarkdown },
};
</script>

<style lang="postcss" scoped>
.server-error {
  text-align: center;
  font-size: 20px;
}

.link,
.link:active {
  color: #b74f29 !important;
}
</style>
