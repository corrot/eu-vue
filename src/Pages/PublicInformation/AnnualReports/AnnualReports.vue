<template>
  <b-container>
    <h2>{{ $t('AnnualReports') }}:</h2>
    
    <div class="cards">
        <div class="card" v-for="report in data" :key="report.id">
          <h4 class="card-title font-weight-bold">{{ report[`title_${locale}`] }}</h4>
          <div class="card-img-container">
            <a v-if="report[`doc_${locale}`]" :href="(report[`doc_${locale}`]).url" target="_blank"><img class="card-img-top rounded-0" src="@/assets/doc-icon.png" alt="document"></a>
            <a v-else><img class="card-img-top rounded-0" src="@/assets/doc-icon.png" alt="document"></a>
          </div>
        </div>
  </div>

  </b-container>
</template>

<script>
import i18n from '@/plugins/i18n';
import { ANNUALREPORTS_URL, API_BASE_URL } from '@/constants.js';
import LoadingSpinner from '@/components/LoadingSpinner';
import ServerError from '@/components/ServerError';

export default {
  name: 'AnnualReports',
  data() {
    return {
      data: null,
      loading: true,
      errored: false,
    };
  },
  computed: {
    locale: () => {
      console.log(i18n.locale);
      return i18n.locale;
    },
  },
  mounted() {
<<<<<<< HEAD
    this.$http
      .get(ANNUALREPORTS_URL)
      .then(response => {
        console.log(response.data);
        this.data = response.data;
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
=======
    // this.$http
    //   .get(ANNUALREPORTS_URL)
    //   .then(response => {
    //     this.data = response.data;
    //   })
    //   .catch(error => {
    //     console.log(error);
    //     this.errored = true;
    //   })
    //   .finally(() => (this.loading = false));
>>>>>>> f6efbe8507d9b8f30823dbdf5aac2bb5fc60015f
  },
  components: { LoadingSpinner, ServerError },
};
</script>

<style lang="postcss" scoped>
.cards{
  margin: 30px 0;
  display: flex;
  flex-wrap: wrap;
}

.card{
  margin: 1rem;
  width: 200px;
}

.card:nth-child(odd){
  margin-left: 0;
}

.card-title{
  margin: 15px 10px;
}

.card-img-container img{
  width: 150px;
  height: auto;
}

</style>