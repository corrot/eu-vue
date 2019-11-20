<template>
  <b-container>
    <loading-spinner v-if="loading" />
    <server-error v-if="errored" />
    <div v-if="!errored && !loading">
      <h4
        style="text-align: center; font-weight: bold"
        class="mb-4 pt-5"
      >{{ $t('Search') }}: {{ id }}</h4>
      <h5
        style="text-align: center; font-weight: bold"
        class="mt-5"
        v-if="!data.length"
      >{{ $t('NoResults') }}</h5>
      <div
        id="search"
        v-for="(i, index) in data"
        :key="i.id"
        v-if="index >= (currentPage - 1) * 10 && index < (currentPage - 1) * 10 + 10"
        class="mb-4"
      >
        <b-row>
          <b-col sm="2">
            <router-link :to="'/search/' + id + '/' + index" v-if="i.date || i.date_start">
              <span
                class="date"
              >{{(i.date && i.date.split(' ')[0]) || (i.date_start && i.date_start.split(' ')[0])}}</span>
            </router-link>
          </b-col>
          <b-col sm="10">
            <router-link :to="'/search/' + id + '/' + index" v-if="i.date || i.date_start">
              <div style="font-weight: bold" v-if="i[`title_${locale}`]">{{i[`title_${locale}`]}}</div>
              <div
                style="font-weight: bold"
                v-if="i[`name_${locale}`]"
              >{{i[`name_${locale}`].substring(0, 100)}}...</div>
              <div v-if="i[`article_${locale}`]">
                <vue-markdown :source="i[`article_${locale}`].substring(0, 200)"></vue-markdown>
              </div>
              <div
                style="font-weight: bold"
                v-if="i[`question_${locale}`]"
              >{{i[`question_${locale}`]}}...</div>
              <div v-if="i[`answer_${locale}`]">
                <vue-markdown :source="i[`answer_${locale}`].substring(0, 200)"></vue-markdown>...
              </div>
              <div v-if="i[`biography_${locale}`]">
                <vue-markdown :source="i[`biography_${locale}`].substring(0, 200)"></vue-markdown>...
              </div>
              <div v-if="i[`doc_${locale}`]">
                <a
                  class="link"
                  :href="`${API_BASE_URL}/uploads/${i[`doc_${locale}`].hash}${i[`doc_${locale}`].ext}`"
                >{{ $t('ViewDocument') }}</a>
              </div>
              <div v-if="i[`document_${locale}`]">
                <a
                  class="link"
                  :href="`${API_BASE_URL}/uploads/${i[`document_${locale}`].hash}${i[`document_${locale}`].ext}`"
                >{{ $t('ViewDocument') }}</a>
              </div>
            </router-link>
          </b-col>
        </b-row>
      </div>

      <b-pagination
        v-if="data.length > 10"
        class="pagination mt-5"
        v-model="currentPage"
        :total-rows="data.length"
        per-page="10"
        :aria-controls="search"
      />
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
      data: [],
      loading: true,
      id: this.$route.params.id,
      currentPage: 1,
      all: [],
      API_BASE_URL,
    };
  },
  computed: {
    locale: () => {
      return i18n.locale;
    },
    rows() {
      return this.items.length;
    },
  },
  watch: {
    '$route.params.id': function(id) {
      this.id = this.$route.params.id;
      this.fetch('watch');
    },
    deep: true,
  },
  mounted() {
    this.fetch('mount');
  },
  methods: {
    fetch: function(from) {
      this.data = [];
      searchEndpoints(i18n.locale, this.id).forEach(e => {
        this.$http.get(e.link).then(response => {
          this.data = [...this.data, ...response.data];
        });
      });
      this.loading = false;
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

a,
a:hover {
  color: unset;
}

.link,
.link:active {
  color: #b74f29 !important;
}
.date-label {
  position: relative;
}
.date {
  background: #0082bf;
  color: #141e3a;
  font-weight: bold;
  font-size: 14px;
  padding: 5px 20px;
  top: 50%;
  position: absolute;
  transform: translateY(-50%);
}
</style>