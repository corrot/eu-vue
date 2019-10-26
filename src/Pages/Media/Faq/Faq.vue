<template>
  <div>
    <loading-spinner v-if="loading" />
    <server-error v-if="errored" />
    <div v-if="!errored && !loading">
      <!-- content -->
      <div role="tablist">
        <b-card no-body class="mb-2" v-for="q in data" :key="q.id">
          <b-card-header header-tag="header" class="p-3" role="tab">
            <a block v-b-toggle="'accordion-' + q.id" variant="info">
              <span>{{ q[`question_${locale}`] }}</span>
            </a>
          </b-card-header>
          <b-collapse :id="`accordion-${q.id}`" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>
                <vue-markdown>{{ q[`answer_${locale}`] }}</vue-markdown>
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import i18n from '@/plugins/i18n';
import { FAQ_URL } from '@/constants.js';
import LoadingSpinner from '@/components/LoadingSpinner';
import ServerError from '@/components/ServerError';
import VueMarkdown from 'vue-markdown';
// import { sortArrayByDate } from '@/utils';

export default {
  name: 'Faq',
  data() {
    return {
      data: null,
      loading: true,
      errored: false,
    };
  },
  computed: {
    locale: () => {
      return i18n.locale;
    },
  },
  mounted() {
    this.$http
      .get(FAQ_URL + `?_sort=date:ASC`)
      .then(response => {
        // this.data = sortArrayByDate(response.data);
        this.data = response.data;
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
  components: { LoadingSpinner, ServerError, VueMarkdown },
};
</script>

<style lang="postcss" scoped>
.article > p > a {
  color: #007bff !important;
}
.card-header > a {
  color: #141e3a;
  font-weight: bold;
  transition: 0.3s ease all;
}
.card-header > a:active,
.card-header > a:focus,
.card-header > a:hover {
  color: #e07400;
  transition: 0.3s ease all;
}
</style>