<template>
  <b-container>
    <h5 class="section-title mb-4">{{ $t('ApplicationForms') }}:</h5>
    <b-row>
      <b-col cols="3" class="mb-4" v-for="report in data" :key="report.id">
        <a
          v-if="report[`doc_${locale}`] && report[`doc_${locale}`].hash"
          :href="API_BASE_URL + '/uploads/' + report[`doc_${locale}`].hash + report[`doc_${locale}`].ext"
          target="_blank"
        >
          <div class="title-container">
            <span>{{ report[`title_${locale}`] }}</span>
          </div>
        </a>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import i18n from '@/plugins/i18n';
import { FORMS_URL, API_BASE_URL } from '@/constants.js';
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
      .get(FORMS_URL)
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
.title-container {
  background-color: #cf4e1f;
  color: #fff !important;
  font-family: 'Open Sans', 'BPG Glaho WEB Caps', sans-serif;
  height: 150px;
  position: relative;
}
.title-container > span {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
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