<template>
  <b-container>
    <loading-spinner v-if="loading" />
    <server-error v-if="errored" />
    <div v-if="!errored && !loading">
    <h4 style="text-align: center; font-weight: bold" class="mb-4 pt-5">{{ $t('Search') }}: {{ id }}</h4>
    <h5 style="text-align: center; font-weight: bold" class="mt-5" v-if="!data.map(a => a.data.length).reduce((a, b) => a + b)">{{ $t('NoResults') }}</h5>
    <b-tabs v-if="data.map(a => a.data.length).reduce((a, b) => a + b)" pills card vertical :sticky="true">
      <b-tab class="btn-nav" v-on:click="currentPage=1" :active="i==0" v-for="(a, i) in data" :key="a.id" v-if="a.data.length">
        <template slot="title">
          <div class="mb-2" v-if="a.data.length">
            {{ $t(a.name) }}
            <b-badge variant="dark">{{a.data.length}}</b-badge>
          </div>
        </template>
        <div class="pl-3 pr-3">
          <div :id="`data-${a.name}`" v-if="index >= (currentPage - 1) * 10 && index < (currentPage - 1) * 10 + 10" class="mb-4" v-for="(item, index) in a.data" :key="item.id">
            <div class="mb-2" v-if="item.date || item.date_start">
              <router-link :to="a.redirectTo.substring(0, a.redirectTo.length - 3) + item.id">
                <span
                  class="date"
                >{{(item.date && item.date.split(' ')[0]) || (item.date_start && item.date_start.split(' ')[0])}}</span>
              </router-link>
            </div>
            <div v-if="item[`name_${locale}`]">
              <router-link
                :to="a.redirectTo.substring(0, a.redirectTo.length - 3) + item.id"
              >{{item[`name_${locale}`]}}</router-link>
            </div>
            <div v-if="item[`title_${locale}`]">
              <router-link
                :to="a.redirectTo.substring(0, a.redirectTo.length - 3) + item.id"
              >{{item[`title_${locale}`]}}</router-link>
            </div>
            <div v-if="item[`article_${locale}`]" style="text-align: justify">
              {{ item[`article_${locale}`] && item[`article_${locale}`].substring(0, 170) }}...
            </div>
            <div v-if="item[`position_${locale}`]">
              {{ item[`position_${locale}`]}}
            </div>
          </div>
          <b-pagination
            v-if="a.data.length > 10"
            class="pagination mt-5"
            v-model="currentPage"
            :total-rows="a.data.length"
            per-page="10"
            :aria-controls="`#data-${a.name}`"
          />
        </div>
      </b-tab>
    </b-tabs>
    </div>
  </b-container>
</template>

<script>
import VueMarkdown from 'vue-markdown';
import i18n from '@/plugins/i18n';
import LoadingSpinner from '@/components/LoadingSpinner';
import ServerError from '@/components/ServerError';
import VuePureLightbox from 'vue-pure-lightbox';
import endpoints, { searchEndpoints, searchEndpointsAlt } from './searchHelper';

export default {
  name: 'Search',
  data() {
    return {
      data: [],
      loading: true,
      id: this.$route.params.id,
      currentPage: 1,
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
        console.log(e);
        this.$http.get(e.link).then(response => {
          this.data.push({
            redirectTo: e.redirectTo.path,
            data: response.data,
            name: e.redirectTo.title,
          });
        });
      });
      this.loading = false
    },
    // fetch: function(from) {
    //   this.data = [];
    //   searchEndpointsAlt(i18n.locale, this.id).forEach(e => {
    //     console.log(e);
    //     this.$http.get(e.link).then(response => {
    //       this.data.push({
    //         redirectTo: e.redirectTo.path,
    //         data: response.data,
    //         name: e.redirectTo.title,
    //       });
    //     });
    //   });
    //   this.loading = false
    // },
  },
  components: { LoadingSpinner, ServerError, VuePureLightbox, VueMarkdown },
};
</script>

<style lang="postcss" scoped>
.server-error {
  text-align: center;
  font-size: 20px;
}

.nav-link .active {
    background: #b74f29!important;
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
  background: #0082bf;
  color: #141e3a;
  font-weight: bold;
  font-size: 14px;
  padding: 5px 20px;
}
</style>