<template>
  <div class="newsArchive" style="padding: 15px 0">
    <loading-spinner v-if="loading"/>
    <server-error v-if="errored"/>
    <div v-if="!errored && !loading">
      <div v-for="article in data" v-bind:key="article.id">
        <div>
          <b-card-group deck>
            <b-card
              :title="article[`Title_${locale}`]"
              header-tag="header"
              footer-tag="footer"
              class="mb-5"
            >
              <h6 slot="header" class="mb-0">{{ article.Date.split(" ")[0] }}</h6>
              <b-card-text>{{ article[`Annotation_${locale}`] }}</b-card-text>
              <b-button
                :href="article[`Document_${locale}`] && article[`Document_${locale}`].url"
                :disabled="!article[`Document_${locale}`]"
                variant="primary"
              >{{ $t('ViewDocument') }}</b-button>
              <em slot="footer">{{ article[`Tags_${locale}`] }}</em>
            </b-card>
          </b-card-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import i18n from '@/plugins/i18n';
import { NEWSARCHIVE_URL } from '@/constants.js';
import LoadingSpinner from '@/components/LoadingSpinner';
import ServerError from '@/components/ServerError';

export default {
  name: 'NewsArchive',
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
      .get(NEWSARCHIVE_URL)
      .then(response => {
        this.data = response.data;
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
  components: { LoadingSpinner, ServerError },
};
</script>

<style lang="postcss" scoped>
</style>