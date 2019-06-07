<template>
  <b-container style="padding: 15px 0">
    <loading-spinner v-if="loading"/>
    <server-error v-if="errored"/>
    <div v-if="!errored && !loading">
      {{ data }}
    </div>
  </b-container>
</template>

<script>
import i18n from '@/plugins/i18n';
import { EVENTS_URL, API_BASE_URL } from '@/constants.js';
import LoadingSpinner from '@/components/LoadingSpinner';
import ServerError from '@/components/ServerError';
import VuePureLightbox from 'vue-pure-lightbox';

export default {
  name: 'Events',
  data() {
    return {
      data: null,
      loading: true,
      errored: false,
      API_BASE_URL,
      id: this.$route.params.id
    };
  },
  computed: {
    locale: () => {
      return i18n.locale;
    },
  },
  mounted() {
    this.$http
      .get(EVENTS_URL + '/' + this.$route.params.id)
      .then(response => {
        this.data = response.data;
        console.log(this.$route.params.id);
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
  components: { LoadingSpinner, ServerError, VuePureLightbox },
};
</script>

<style lang="postcss" scoped>
.card-body{
  padding: 0;
}
.card-title, .card-text{
  padding: 10px;
  padding-top: 0;
}
.card-title{
  padding-top: 10px;
}
.card-text{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.date-container{
  /* background: #ff8400; */
  width:100%;
  height: 100%;
  color: #ff8400;
  font-weight: bold;
  font-size: 18px;
  position: relative;
  line-height: 16px;
}
.date-wrapper{
  width:100%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
}
.date-wrapper > div {
  border-left: 3px solid #141e3a;
  display: flex;
  justify-items: center;
  flex-direction: column;
}

</style>