<template>
  <b-container>
    <p>{{ $t('Search') }}: {{ id }}</p>
    {{data}}
  </b-container>
</template>

<script>
import VueMarkdown from 'vue-markdown';
import i18n from '@/plugins/i18n';
import LoadingSpinner from '@/components/LoadingSpinner';
import ServerError from '@/components/ServerError';
import VuePureLightbox from 'vue-pure-lightbox';
import endpoints from './searchHelper';

export default {
  name: 'Search',
  data() {
    return {
      data: null,
      items: [],
      // loading: true,
      // errored: false,
      API_BASE_URL,
      id: this.$route.params.id,
    };
  },
  computed: {
    locale: () => {
      return i18n.locale;
    },
  },
  mounted() {
    let collectedData = [];
    endpoints.forEach(e => {
      const path = `${e.path}${
        i18n.locale
      }_contains=${this.$route.params.id.toString()}`;

      this.$http.get(path).then(response => {
        collectedData[e.name] = response.data;
        console.log('a data: ', collectedData);
      });
    });

    this.data = collectedData;
    console.log('b data: ', this.data);
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