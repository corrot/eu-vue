<template>
    <div v-if="data">
  <!-- <div class="cards"> -->

      <router-link to="/public/application-forms">
        <h5 class="section-title">{{ $t('ApplicationForms') }}</h5>
        <!-- <img class="img-100" :src="`${API_BASE_URL}/uploads/${data.image.hash}${data.image.ext}`"> -->
      </router-link>
    </div>
    <!-- </div> -->
    <!-- <router-link to="/public/application-forms">
      <h5 class="section-title mb-4">{{ $t('ApplicationForms') }}:</h5>
    </router-link>
    <b-row>
      <b-col md="3" sm="6" class="mb-4" v-for="report in data" :key="report.id">
        <a
          v-if="report[`doc_${locale}`] && report[`doc_${locale}`].hash"
          :href="API_BASE_URL + '/uploads/' + report[`doc_${locale}`].hash + report[`doc_${locale}`].ext"
          target="_blank"
        >
          <div class="title-container">
            <span>{{ report[`title_${locale}`] }}</span>
          </div>
        </a>
        <router-link to="/public/application-forms">
          <div class="title-container">
            <span>{{ report[`title_${locale}`] }}</span>
          </div>
        </router-link>
      </b-col>
    </b-row> -->
</template>

<script>
import i18n from '@/plugins/i18n';
import { HOME_FORMS_URL, API_BASE_URL } from '@/constants.js';

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
    this.$http.get(HOME_FORMS_URL).then(response => {
      this.data = response.data[0];
    });
  },
};
</script>

<style lang="postcss" scoped>
.title-container {
  background-color: #b74f29;
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