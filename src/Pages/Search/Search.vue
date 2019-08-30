<template>
  <b-container>
    <h4 style="text-align: center; font-weight: bold" class="mb-4 pt-5">{{ $t('Search') }}: {{ id }}</h4>
    <div v-for="a in data" :key="a.id">
      <h5 class="mb-2 section-title" v-if="a.data.length">{{ $t(a.name) }}</h5>
      <div v-for="item in a.data" :key="item.id">
        <b-row class="mb-3">
          <b-col class="date-label" md="2">
            <router-link :to="a.redirectTo.substring(0, a.redirectTo.length - 3) + item.id">
              <span
                class="date"
              >{{(item.date && item.date.split(' ')[0]) || (item.date_start && item.date_start.split(' ')[0])}}</span>
            </router-link>
          </b-col>
          <b-col md="10">
            <router-link
              :to="a.redirectTo.substring(0, a.redirectTo.length - 3) + item.id"
            >
              {{item[`title_${locale}`]}}
            </router-link>
            <div style="text-align: justify">{{ item[`article_${locale}`].substring(0, 170) }}...</div>
          </b-col>
        </b-row>
      </div>
    </div>
    <b-pagination
      class="pagination mt-5"
      v-model="currentPage"
      :total-rows="data.map(a => a.data.length).reduce((a, b) => a + b)"
      per-page="10"
      aria-controls="data"
    ></b-pagination>
  </b-container>
</template>

<script>
import VueMarkdown from 'vue-markdown';
import i18n from '@/plugins/i18n';
import LoadingSpinner from '@/components/LoadingSpinner';
import ServerError from '@/components/ServerError';
import VuePureLightbox from 'vue-pure-lightbox';
import endpoints, { searchEndpoints } from './searchHelper';

export default {
  name: 'Search',
  data() {
    return {
      data: [],
      id: this.$route.params.id,
      currentPage: 1,
    };
  },
  computed: {
    locale: () => {
      return i18n.locale;
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
          this.data.push({
            redirectTo: e.redirectTo.path,
            data: response.data,
            name: e.redirectTo.title
          });
        });
      });
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

h1 {
  margin: 30px auto 0 auto;
  color: var(--stroke-color);
  font-family: 'Encode Sans Semi Condensed', 'DejaVu Sans Condensed', Verdana,
    sans-serif;
  font-size: 8rem;
  line-height: 10rem;
  font-weight: 200;
  text-align: center;
}
h2 {
  margin: 20px auto 30px auto;
  font-family: 'Encode Sans Semi Condensed', 'DejaVu Sans Condensed', Verdana,
    sans-serif;
  font-size: 1.5rem;
  font-weight: 200;
  text-align: center;
}
h1,
h2 {
  -webkit-transition: opacity 0.5s linear, margin-top 0.5s linear; /* Safari */
  transition: opacity 0.5s linear, margin-top 0.5s linear;
}
.date-label {
  position: relative;
}
.date {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #0082bf;
  color: #141e3a;
  font-weight: bold;
  font-size: 14px;
  padding: 5px 20px;
}
</style>