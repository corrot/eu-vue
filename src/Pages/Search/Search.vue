<template>
  <b-container>
    <!-- <b-pagination v-model="currentPage" :total-rows="rows" per-page="3" aria-controls="my-table" />
    <b-table id="my-table" :items="items" :per-page="perPage" :current-page="currentPage" small></b-table>-->

    <h4 style="text-align: center; font-weight: bold" class="mb-4 pt-5">{{ $t('Search') }}: {{ id }}</h4>
    <b-tabs pills card vertical :sticky="true">
      <b-tab :active="i==0" v-for="(a, i) in data" :key="a.id" v-if="a.data.length">
        <template slot="title">
          <div class="mb-2" v-if="a.data.length">
            {{ $t(a.name) }}
            <b-badge variant="dark">{{a.data.length}}</b-badge>
          </div>
        </template>
        <div class="pl-3 pr-3">
          <div :id="`data-${a.name}`" class="mb-4" v-for="item in a.data" :key="item.id">
            <div class="mb-2">
              <router-link :to="a.redirectTo.substring(0, a.redirectTo.length - 3) + item.id">
                <span
                  class="date"
                >{{(item.date && item.date.split(' ')[0]) || (item.date_start && item.date_start.split(' ')[0])}}</span>
              </router-link>
            </div>
            <div>
              <router-link
                :to="a.redirectTo.substring(0, a.redirectTo.length - 3) + item.id"
              >{{item[`title_${locale}`]}}</router-link>
            </div>
            <div
              style="text-align: justify"
            >{{ item[`article_${locale}`] && item[`article_${locale}`].substring(0, 170) }}...</div>
          </div>
          <!-- <b-pagination
            v-if="a.data.length > 10"
            class="pagination mt-5"
            v-model="currentPage"
            :total-rows="a.data.length"
            per-page="10"
            :aria-controls="`#data-${a.name}`"
          />-->
        </div>
      </b-tab>
    </b-tabs>
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
      items: [
        { id: 1, first_name: 'Fred', last_name: 'Flintstone' },
        { id: 2, first_name: 'Wilma', last_name: 'Flintstone' },
        { id: 3, first_name: 'Barney', last_name: 'Rubble' },
        { id: 4, first_name: 'Betty', last_name: 'Rubble' },
        { id: 5, first_name: 'Pebbles', last_name: 'Flintstone' },
        { id: 6, first_name: 'Bamm Bamm', last_name: 'Rubble' },
        { id: 7, first_name: 'The Great', last_name: 'Gazzoo' },
        { id: 8, first_name: 'Rockhead', last_name: 'Slate' },
        { id: 9, first_name: 'Pearl', last_name: 'Slaghoople' },
      ],
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
          this.data.push({
            redirectTo: e.redirectTo.path,
            data: response.data,
            name: e.redirectTo.title,
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
  background: #0082bf;
  color: #141e3a;
  font-weight: bold;
  font-size: 14px;
  padding: 5px 20px;
}
</style>