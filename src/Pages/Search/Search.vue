<template>
  <b-container>
    <loading-spinner v-if="loading" />
    <div v-if="!loading">
      <h4 style="text-align: center; font-weight: bold" class="mb-4 pt-5">
        {{ $t('Search') }}: {{ id }}
      </h4>
      <h5
        style="text-align: center; font-weight: bold"
        class="mt-5"
        v-if="!data.length"
      >
        {{ $t('NoResults') }}
      </h5>
      <div
        id="search"
        v-for="(i, index) in data"
        :key="i.id"
        v-if="
          index >= (currentPage - 1) * 10 && index < (currentPage - 1) * 10 + 10
        "
        class="mb-4"
      >
        <b-row>
          <b-col sm="2">
            <!-- <router-link :to="'/search/' + id + '/' + index" v-if="i.date || i.date_start">
              <span
                class="date"
              >{{(i.date && i.date.split(' ')[0]) || (i.date_start && i.date_start.split(' ')[0])}}</span>
            </router-link>-->
            <div @click="gotoDetail(id, i[`title_${locale}`], i)" v-if="i.date">
              <span class="date">{{
                (i.date && i.date.split(' ')[0]) ||
                  (i.date_start && i.date_start.split(' ')[0])
              }}</span>
            </div>
          </b-col>
          <b-col sm="10">
            <div
              @click="gotoDetail(id, i[`title_${locale}`], i)"
              class="search-result"
            >
              <div style="font-weight: bold" v-if="i[`title_${locale}`]">
                {{ i[`title_${locale}`] }}
              </div>
              <div style="font-weight: bold" v-if="i[`name_${locale}`]">
                {{ i[`name_${locale}`].substring(0, 100) + '...' }}...
              </div>
              <div v-if="i[`article_${locale}`]">
                <vue-markdown
                  :source="i[`article_${locale}`].substring(0, 200) + '...'"
                ></vue-markdown>
              </div>
              <div v-if="i[`text_${locale}`]">
                <vue-markdown
                  :source="i[`text_${locale}`].substring(0, 200) + '...'"
                ></vue-markdown>
              </div>
              <div style="font-weight: bold" v-if="i[`question_${locale}`]">
                {{ i[`question_${locale}`] }}...
              </div>
              <div v-if="i[`answer_${locale}`]">
                <vue-markdown
                  :source="i[`answer_${locale}`].substring(0, 200) + '...'"
                ></vue-markdown
                >...
              </div>
              <div v-if="i[`biography_${locale}`]">
                <vue-markdown
                  :source="i[`biography_${locale}`].substring(0, 200) + '...'"
                ></vue-markdown
                >...
              </div>
              <div
                v-if="
                  i[`doc_${locale}`] &&
                    (Array.isArray(i[`doc_${locale}`]) &&
                      i[`doc_${locale}`].length > 0)
                "
              >
                <a
                  target="_blank"
                  class="link"
                  :href="
                    `${API_BASE_URL}/uploads/${i[`doc_${locale}`].hash}${
                      i[`doc_${locale}`].ext
                    }`
                  "
                  >{{ $t('ViewDocument') }}</a
                >
              </div>
              <div
                class="mt-2"
                v-if="
                  i[`doc_${locale}`] &&
                    !(Array.isArray(i[`doc_${locale}`]) &&
                      i[`doc_${locale}`].length > 0)
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
              <div v-if="i[`document_${locale}`]">
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
import { sortArrayByDate } from '@/utils.js';
import router from '@/router';

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
    fetch: async function(from) {
      this.data = [];
      await searchEndpoints(i18n.locale, this.id).forEach(e => {
        this.$http.get(e.link).then(response => {
          this.data = sortArrayByDate(
            [
              ...new Set([
                ...this.data.map(a => JSON.stringify(a)),
                ...response.data.map(a => JSON.stringify(a)),
              ]),
            ].map(a => JSON.parse(a))
          );
        });
      });
      setTimeout(() => {
        this.loading = false;
      }, 3000);
    },
    gotoDetail: function(id, index, i) {
      window.searchResult = { id, index, i };
      router.push('/search/results/' + index);
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
  cursor: pointer;
}

.search-result {
  cursor: pointer;
  border-bottom: 1px dotted #333;
  padding-bottom: 15px;
}
</style>
