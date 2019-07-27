<template>
  <b-container>
    <p>{{ $t('Search') }}: {{ id }}</p>
    <div v-for="a in data" :key="a.id">
      <div v-for="item in a.data" :key="item.id">
        <router-link
          :to="a.redirectTo.substring(0, a.redirectTo.length - 3) + item.id"
        >{{item[`title_${locale}`]}}</router-link>
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

export default {
  name: 'Search',
  data() {
    return {
      data: [],
      items: [],
      id: this.$route.params.id,
      // loading: true,
      // errored: false,
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
    data: function() {
      // this.forceRerender();
    },
    deep: true,
  },
  mounted() {
    this.fetch('mount');
  },
  methods: {
    fetch: function(from) {
      searchEndpoints(i18n.locale, this.id).forEach(e => {
        this.$http.get(e.link).then(response => {
          console.log(from, response.data);
          this.data.push({
            redirectTo: e.redirectTo.path,
            data: response.data,
          });
        });
      });
    },
    // forceRerender() {
    //   // Remove my-component from the DOM
    //   this.renderComponent = false;

    //   this.$nextTick(() => {
    //     // Add the component back in
    //     this.renderComponent = true;
    //   });
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
</style>