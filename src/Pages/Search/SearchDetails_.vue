<template>
  <b-container>
    <!-- <loading-spinner v-if="loading" />
    <server-error v-if="errored" /> -->
    <!-- <div v-if="!errored && !loading"> -->
    <div>
      {{id}},{{index}}
      <div
        id="search"
        v-for="(i, index) in data"
        :key="i.id"
        v-if="index == resultIndex"
        class="mb-4"
      >
      {{data}}
        <!-- <div
          class="mb-2"
        >{{(i.date && i.date.split(' ')[0]) || (i.date_start && i.date_start.split(' ')[0])}}</div>
        <div
          class="mb-2"
          style="font-weight: bold"
          v-if="i[`title_${locale}`]"
        >{{i[`title_${locale}`]}}</div>
        <div style="font-weight: bold" v-if="i[`name_${locale}`]">{{i[`title_${locale}`]}}</div>
        <div style="font-weight: bold" v-if="i[`position_${locale}`]">{{i[`position_${locale}`]}}</div>
        <div v-if="i[`article_${locale}`]">
          <vue-markdown :source="i[`article_${locale}`]"></vue-markdown>
        </div>
        <div style="font-weight: bold" v-if="i[`question_${locale}`]">{{i[`question_${locale}`]}}</div>
        <div v-if="i[`answer_${locale}`]">
          <vue-markdown>{{i[`answer_${locale}`]}}</vue-markdown>
        </div>
        <div v-if="i[`biography_${locale}`]">
          <vue-markdown>{{i[`biography_${locale}`]}}</vue-markdown>
        </div>
        <div class="mt-2" v-if="i[`doc_${locale}`]">
          <a
            class="link"
            :href="`${API_BASE_URL}/uploads/${i[`doc_${locale}`].hash}${i[`doc_${locale}`].ext}`"
          >{{ $t('ViewDocument') }}</a>
        </div>
        <div class="mt-2" v-if="i[`document_${locale}`]">
          <a
            class="link"
            :href="`${API_BASE_URL}/uploads/${i[`document_${locale}`].hash}${i[`document_${locale}`].ext}`"
          >{{ $t('ViewDocument') }}</a>
        </div> -->
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
import { API_BASE_URL } from '@/constants.js';

export default {
  name: 'Search',
  data() {
    return {
      data: [],
      loading: true,
      id: this.$route.params.id,
      index: this.$route.params.index,
      API_BASE_URL,
    };
  },
  computed: {
    locale: () => {
      return i18n.locale;
    },
  },
  methods: {

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