<template>
  <b-container style="padding: 30px 0 60px 0; ">
    <b-row>
      <b-col>
        <iframe
          style="width:100%; height: 100%; border:0"
          frameborder="0"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCJdk1n9TmA1d7y1WEfYNfxixiYRlJ6fvI&q=154+Davit+Aghmashenebeli+Ave,+T'bilisi"
          allowfullscreen
        ></iframe>
      </b-col>
      <b-col>
        <b-card class="text-center" style="border: none; margin-top: none;">
          <p> {{ $t('CompetitionAgencyOfGeorgia') }} </p>
          <p> {{ data[`adrress_${locale}`] }} </p>
          <p>{{ $t('Phone') }}: {{ data[`Tel_number`] }} </p>
          <p>{{ $t('Email') }}: {{ data[`email_${locale}`] }}</p>
        </b-card>
        <div class="mt-3 input-container">
          <b-form-group
            label-cols-sm="3"
            :label=" $t('FullName') + ':'"
            label-align-sm="right"
            label-for="nested-street"
          >
            <b-form-input id="nested-street"></b-form-input>
          </b-form-group>

          <b-form-group
            label-cols-sm="3"
            :label=" $t('Email') + ':'"
            label-align-sm="right"
            label-for="nested-city"
          >
            <b-form-input id="nested-city"></b-form-input>
          </b-form-group>

          <b-form-group
            label-cols-sm="3"
            :label=" $t('Tel') + ':'"
            label-align-sm="right"
            label-for="nested-state"
          >
            <b-form-input id="nested-state"></b-form-input>
          </b-form-group>

          <b-form-group
            label-cols-sm="3"
            :label=" $t('Message') + ':'"
            label-align-sm="right"
            label-for="nested-country"
          >
            <b-form-textarea
              id="textarea"
              v-model="text"
              placeholder="Enter something..."
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>
        </div>
        <div class="text-center">
          <b-button type="submit" class="btn-submit-message">{{ $t('Submit') }}</b-button>
        </div>
      </b-col>
    </b-row>
    <router-view></router-view>
  </b-container>
</template>

<script>
import i18n from '@/plugins/i18n';
import { API_BASE_URL, CONTACT_URL } from '@/constants.js';
import LoadingSpinner from '@/components/LoadingSpinner';
import ServerError from '@/components/ServerError';

export default {
  name: 'Contact',
  data() {
    return {
      data: null,
      loading: true,
      errored: false,
      text: ''
    };
  },
  computed: {
    locale: () => {
      console.log(i18n.locale);
      return i18n.locale;
    },
  },
  mounted() {
    this.$http
      .get(CONTACT_URL)
      .then(response => {
        debugger;
        this.data = response.data[0];
        console.log(this.data);
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

<style scoped>
.input-container {
  padding-right: 15%;
}

.btn-submit-message {
  border: none;
  border-bottom: 4px solid #DB2323;
  background: none;
  color: #000;
  border-radius: 0;
  letter-spacing: 1px;
  width: 110px;
  height: 40px;
  font-size: 17px;
}

.btn-submit-message:hover {
  color: #DB2323;
}

.col:nth-child(2){
  background: #fff;
  padding: 20px;
}
</style>

