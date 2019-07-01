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
          <vue-markdown>{{ data[`text_${locale}`] }}</vue-markdown>
        </b-card>
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
import VueMarkdown from 'vue-markdown';

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
      return i18n.locale;
    },
  },
  mounted() {
    this.$http
      .get(CONTACT_URL)
      .then(response => {
        debugger;
        this.data = response.data[0];
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
  components: { LoadingSpinner, ServerError, VueMarkdown },
};
</script>

<style lang="postcss" scoped>
.col{
  height: 30rem;
}

p.title{
  border-bottom: #DB2323;
}

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

