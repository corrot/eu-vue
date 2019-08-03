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

export default {
  name: 'AnnualReports',
  data() {
    return {
      data: null,
      API_BASE_URL,
    };
  },
  computed: {
    locale: () => {
      return i18n.locale;
    },
  },
  mounted() {
    this.$http.get(FORMS_URL).then(response => {
      this.data = response.data.reverse();
    });
  },
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
</style>