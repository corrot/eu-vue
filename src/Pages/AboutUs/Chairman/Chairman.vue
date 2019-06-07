<template>
  <b-container class="chairman">
    <loading-spinner v-if="loading"/>
    <server-error v-if="errored"/>
    <div v-if="!errored && !loading">
      <!-- content -->
      <b-card no-body class="overflow-hidden mb-5">
        <b-row no-gutters>
          <b-col md="4">
            <b-card-img style="max-width: 100%" :src="data.photo && `${API_BASE_URL}/uploads/${data.photo.hash}${data.photo.ext}`"/>
            <!-- <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img> -->
          </b-col>
          <b-col md="8">
            <b-card-body :title="data[`name_${locale}`]">
              <b-card-text>
                <br>
                <h5>{{ data[`position_${locale}`] }}</h5>
                <p>
                  <a :href="`tel:${data.tel_number}`">{{ data.tel_number }}</a>
                </p>
                <p>
                  <a :href="`mailto:${data.tel_number}`">{{ data.email }}</a>
                </p>
                <p>
                  <a :href="data[`cv_${locale}`] && `${API_BASE_URL}/uploads/${data[`cv_${locale}`].hash}${data[`cv_${locale}`].ext}`" target="_blank">{{ $t('CurriculumVitae') }}</a>
                </p>
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </b-container>
</template>

<script>
import i18n from '@/plugins/i18n';
import { CHAIRMAN_URL, API_BASE_URL } from '@/constants.js';
import LoadingSpinner from '@/components/LoadingSpinner';
import ServerError from '@/components/ServerError';

export default {
  name: 'Chairman',
  data() {
    return {
      data: null,
      loading: true,
      errored: false,
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
      .get(CHAIRMAN_URL)
      .then(response => {
        this.data = response.data[0];
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