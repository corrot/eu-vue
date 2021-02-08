<template>
  <div class="projects">
      <a href="http://www.procurement.gov.ge/Davebi.aspx" target="_blank">
        <h5 class="section-title" style="margin-legt: 0; padding-left: 0; position: relative; display: flex; align-items: center; color: #fff; font-weight: normal; font-family: 'BPG Glaho WEB Caps'; border-color: #ce653e">
          <img style="width: 100%" :src="backgroundImage" />
          <!-- <font-awesome-icon class="fa" :icon="['fab', 'file']" /> -->

          <div style="margin-left: 8px; position: absolute; font-size: 18px; display: flex; align-items: center">
            <img style="width: 42px" :src="procurementLogo" />
            <div style="margin-left: 6px">{{ $t('ProcurementAgency') }}</div>
          </div>
        </h5>
      </a>
    <!-- <a :href="data && data.Link" target="_blank">
      <img
        style="width: 100%; object-fit: cover"
        :src="data && data.image && `${API_BASE_URL}/uploads/${data.image.hash}${data.image.ext}`"
      />
    </a> -->
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';
import i18n from '@/plugins/i18n';
import { PROJECTS_URL, API_BASE_URL } from '@/constants.js';
import LoadingSpinner from '@/components/LoadingSpinner';
import ServerError from '@/components/ServerError';
import backgroundImage from '@/assets/procurement.png';
import procurementLogo from '@/assets/davebisabcho_icon.png';

export default {
  name: 'Projects',
  data() {
    return {
      data: null,
      loading: true,
      errored: false,
      API_BASE_URL: API_BASE_URL,
      backgroundImage,
      procurementLogo
    };
  },
  computed: {
    locale: () => {
      return i18n.locale;
    },
  },
  // mounted() {
  //   this.$http
  //     .get(PROJECTS_URL)
  //     .then(response => {
  //       this.data = response.data.filter(o => o.forfirtpage)[0];
  //     })
  //     .catch(error => {
  //       this.errored = true;
  //     })
  //     .finally(() => (this.loading = false));
  // },
  components: { LoadingSpinner, ServerError, VueMarkdown },
};
</script>

<style lang='postcss' scoped>
</style>