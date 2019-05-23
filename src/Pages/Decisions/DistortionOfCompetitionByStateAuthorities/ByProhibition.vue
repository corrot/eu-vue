<template>
  <div>
    <loading-spinner v-if="loading"/>
    <server-error v-if="errored"/>
    <div v-if="!errored && !loading">
      <div v-for="article in data" v-bind:key="article.id">
        <div>
          <b-card-group deck>
            <b-card
              :title="article[`title_${locale}`]"
              header-tag="header"
              footer-tag="footer"
              class="mb-5"
            >
              <h6 slot="header" class="mb-0">{{ article.date.split(" ")[0] }}</h6>
              <b-card-text>{{ article[`Annotation_${locale}`] }}</b-card-text>
              <b-button
                :href="article[`document_${locale}`] && `${API_BASE_URL}/uploads/${article[`document_${locale}`].hash}${article[`document_${locale}`].ext}`"
                :disabled="!article[`document_${locale}`]"
                variant="primary"
              >{{ $t('ViewDocument') }}</b-button>
              <em slot="footer">{{ article[`tags_${locale}`] }}</em>
            </b-card>
          </b-card-group>
        </div>
        <!-- <vue-simple-markdown :source="article.Tags"></vue-simple-markdown> -->
      </div>
    </div>
  </div>
</template>

<script>
import i18n from '@/plugins/i18n';
import {
  API_BASE_URL,
  DistortionOfCompetitionByStateAuthoritiesByProhibition_URL,
} from '@/constants.js';
import LoadingSpinner from '@/components/LoadingSpinner';
import ServerError from '@/components/ServerError';

export default {
  name: 'ByProhibition',
  data() {
    return {
      data: null,
      loading: true,
      errored: false,
      API_BASE_URL,
    };
  },
  computed: {
    locale: () => {
      console.log(i18n.locale);
      return i18n.locale;
    },
  },
  mounted() {
    this.$http
      .get(DistortionOfCompetitionByStateAuthoritiesByProhibition_URL)
      .then(response => {
        this.data = response.data.decisions;
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