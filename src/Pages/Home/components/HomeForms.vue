<template>
  <div v-if="data">
    <router-link to="/public/application-forms">
      <h5 class="section-title">{{ $t('ApplicationForms') }}</h5>
      <img class="img-100" :src="`${API_BASE_URL}/uploads/${data.image.hash}${data.image.ext}`">
    </router-link>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';
import i18n from '@/plugins/i18n';
import { API_BASE_URL, HOME_FORMS_URL } from '@/constants.js';

export default {
  name: 'Events',
  components: {},
  data() {
    return {
      i18n,
      API_BASE_URL,
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
    this.$http.get(HOME_FORMS_URL).then(response => {
      this.data = response.data[0];
    });
  },
  components: {
    VueMarkdown,
  },
};
</script>

<style lang='postcss' scoped>
</style>