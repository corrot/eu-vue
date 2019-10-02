<template>
  <b-container>
    <h5 class="section-title">{{ $t('AnnualReports') }}:</h5>
    <b-row>
      <b-col cols="3" class="mb-4" v-for="report in data" :key="report.id">
        <div class="card">
          <h4 class="card-year">{{ report.date.split('-')[0] }}</h4>
          <div class="card-img-container">
            <a
              v-if="report[`doc_${locale}`]"
              :href="API_BASE_URL + '/uploads/' + report[`doc_${locale}`] && report[`doc_${locale}`][0] && report[`doc_${locale}`][0].hash + report[`doc_${locale}`][0].ext"
              target="_blank"
            >
              <!-- <img class="card-img-top rounded-0" :src="report.image ? `${API_BASE_URL}/uploads/${report.image.hash}${report.image.ext}` : icon" alt="document"> -->
              <div
                class="img-100"
                v-bind:style="{'background-image': report.image ? `url(${API_BASE_URL}/uploads/${report.image && report.image.hash}${report.image.ext})` : `url(${noimage})`}"
              ></div>
            </a>
            <!-- <a v-else><img class="card-img-top rounded-0" src="@/assets/doc-icon.svg" alt="document"></a> -->
          </div>
          <h4 class="card-title">{{ report[`title_${locale}`] }}</h4>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import i18n from '@/plugins/i18n';
import { ANNUALREPORTS_URL, API_BASE_URL } from '@/constants.js';
import LoadingSpinner from '@/components/LoadingSpinner';
import ServerError from '@/components/ServerError';
import noimage from '../../../assets/noimage.jpg';

export default {
  name: 'AnnualReports',
  data() {
    return {
      data: null,
      loading: true,
      errored: false,
      API_BASE_URL,
      noimage,
    };
  },
  computed: {
    locale: () => {
      return i18n.locale;
    },
  },
  mounted() {
    this.$http
      .get(ANNUALREPORTS_URL)
      .then(response => {
        this.data = response.data.reverse();
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
.img-100 {
  background-size: contain;
  background-position-x: center;
  background-position-y: center;
  width: 100%;
  height: 150px;
  background-repeat: no-repeat;
}
.cards {
  margin: 30px 0;
  display: flex;
  flex-wrap: wrap;
}

.card-year {
  padding: 8px;
  color: #db2323;
  font-size: 19px;
  text-align: center;
}
.card-title {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3; /* number of lines to show */
  line-height: 20px; /* fallback */
  height: 60px; /* fallback */
  padding: 0 8px;
  font-size: 16px;
  font-weight: normal;
  text-align: center;
}

.card-img-container {
  text-align: center;
  padding-bottom: 20px;
}

.card-img-container img {
  width: 100%;
  margin: 0 auto;
  max-height: 140px;
  height: auto;
}
</style>