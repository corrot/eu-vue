<template>
  <b-container class="proactive-information">
    <loading-spinner v-if="loading"/>
    <server-error v-if="errored"/>
    <div v-if="!errored && !loading">
      <!-- content -->
      <div v-for="(type, index) in data" :key="type.id" class="mb-4">
        <h5 class="section-title" v-if="type.proactiveinformations.length">{{ type[`title_${locale}`] }}</h5>
        <table class="table table-hover" v-if="type.proactiveinformations.length">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">{{ $t('InformationTitle') }}</th>
              <th scope="col">{{ $t('RenewStrategy') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(o, i) in type.proactiveinformations" :key="o.id">
              <td scope="row">{{ `${index + 1}.${i + 1}` }}</td>
              <td><a :href="o.link" target="_blank">{{ o[`title_${locale}`] }}</a></td>
              <td>{{ o[`comment_${locale}`] }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </b-container>
</template>

<script>
import i18n from '@/plugins/i18n';
import { PROACTIVE_INFORMATION_TYPES_URL } from '@/constants.js';
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
      fields: null
    };
  },
  computed: {
    locale: () => {
      return i18n.locale;
    },
  },
  mounted() {
    this.$http
      .get(PROACTIVE_INFORMATION_TYPES_URL)
      .then(response => {
        this.data = response.data;
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