<template>
  <b-container class="proactive-information">
    <loading-spinner v-if="loading"/>
    <server-error v-if="errored"/>
    <div v-if="!errored && !loading">
      <!-- content -->
      <div class="mb-4">
        <!-- <h5 class="section-title" v-if="type.proactiveinformationarchives.length">{{ type[`title_${locale}`] }}</h5> -->
        <table class="table table-hover" v-if="data.proactiveinformationarchives.length">
          <thead>
            <tr>
              <th scope="col">{{ $t('FileTitle') }}</th>
              <th scope="col">{{ $t('UploadDate') }}</th>
              <th scope="col">{{ $t('FileLink') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="o in data.proactiveinformationarchives" :key="o.id">
              <td scope="row">{{ o[`title_${locale}`] }}</td>
              <td>{{ o.date.split(' ')[0] }}</td>
              <td>
                <a
                  v-if="o[`doc_${locale}`]"
                  :href="o[`doc_${locale}`] && `${API_BASE_URL}/uploads/${o[`doc_${locale}`].hash}${o[`doc_${locale}`].ext}`"
                  target="_blank"
                >
                  {{ $t('ViewDocument') }}
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </b-container>
</template>

<script>
import i18n from '@/plugins/i18n';
import { PROACTIVE_INFORMATION_ARCHIVE, API_BASE_URL } from '@/constants.js';
import LoadingSpinner from '@/components/LoadingSpinner';
import ServerError from '@/components/ServerError';

export default {
  name: 'ProactiveInformation',
  data() {
    return {
      data: null,
      loading: true,
      errored: false,
      items: null,
      fields: null,
      id: this.$route.params.id,
      API_BASE_URL
    };
  },
  computed: {
    locale: () => {
      return i18n.locale;
    },
  },
  mounted() {
    this.$http
      .get(PROACTIVE_INFORMATION_ARCHIVE + `/${this.id}`)
      .then(response => {
        this.data = response.data;
        console.log(this.data)
        // this.data.forEach((type, index) => {
        //   type.proactiveinformations.map((o, i) => {
        //     const res = {
        //       index: index + '.' + i,
        //       title: o[`title_${i18n.locale}`],
        //       comment: o[`comment_${i18n.locale}`],
        //     }
        //     return res;
        //   })
        // });
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