<template>
  <b-container>
    <loading-spinner v-if="loading" />
    <server-error v-if="errored" />
    <div v-if="!errored && !loading">
      <!-- content -->

      <div class="mb-5">
        <h5 class="section-title">{{ data[0][`title_${locale}`] }}</h5>
        <vue-markdown class="article" :source="data[0][`text_${locale}`]"></vue-markdown>
      </div>

      <!-- <div class="mb-5">
        <h5 class="section-title">{{ $t('RequestForm') }}</h5>
        <b-form @submit="onSubmit" style="max-width: 30%;">
          <b-form-group id="input-group-3" :label="`${$t('FirstName')}:`" label-for="input-3">
            <b-form-input
              id="input-3"
              v-model="form.firstName"
              required
              :placeholder="$t('FirstName')"
            ></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-4" :label="`${$t('LastName')}:`" label-for="input-4">
            <b-form-input
              id="input-4"
              v-model="form.lastName"
              required
              :placeholder="$t('LastName')"
            ></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-5" :label="`${$t('PersonalNumber')}:`" label-for="input-5">
            <b-form-input
              id="input-5"
              v-model="form.personalId"
              type="number"
              required
              :placeholder="$t('PersonalNumber')"
            ></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-5" :label="`${$t('ScannedDocument')}:`" label-for="input-6" :description="$t('UploadAgreement')">
            <b-form-file
              id="input-6"
              v-model="form.file"
              :state="Boolean(form.file)"
              :placeholder="$t('ChooseFile')"
              :drop-placeholder="$t('DropFileHere')"
              required
            ></b-form-file>
          </b-form-group>
          <b-button class="mt-3" type="submit" variant="primary">{{ $t('Send')}}</b-button>
        </b-form>
      </div>-->

      <div class="mb-5">
        <!-- <h5 class="section-title">{{ $t('RequestStandards') }}</h5> -->
        <div v-if="data[0][`doc_${locale}`]">
            <a
              target="_blank"
              :href="`${API_BASE_URL}/uploads/${data[0][`doc_${locale}`].hash}${data[0][`doc_${locale}`].ext}`"
            >{{ $t('ViewDocument') }}</a>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
import VueMarkdown from 'vue-markdown';
import i18n from '@/plugins/i18n';
import { UD_APPLICATIONFORM, API_BASE_URL } from '@/constants.js';
import LoadingSpinner from '@/components/LoadingSpinner';
import ServerError from '@/components/ServerError';

export default {
  name: 'RequestRelatedActs',
  data() {
    return {
      data: null,
      loading: true,
      errored: false,
      API_BASE_URL,
      form: {
        email: null,
        firstName: null,
        lastName: null,
        file: null,
      },
    };
  },
  computed: {
    locale: () => {
      return i18n.locale;
    },
  },
  mounted() {
    this.$http
      .get(UD_APPLICATIONFORM)
      .then(response => {
        this.data = response.data;
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
  components: { LoadingSpinner, ServerError, VueMarkdown },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
  },
};
</script>

<style lang="postcss" scoped>
</style>