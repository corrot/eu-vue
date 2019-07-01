<template>
  <div>
    <loading-spinner v-if="loading"/>
    <server-error v-if="errored"/>
    <div v-if="!errored && !loading">
      <div class="cards">
        <b-card
          v-for="event in data"
          :key="event.id"
          class="mb-3"
        >
          <router-link :to="`/media/events/${event.id}`">
            <b-row no-gutters>
              <b-col md="3">
                <img
                  style="width:100%"
                  :src="event.cover_image && `${API_BASE_URL}/uploads/${event.cover_image.hash}${event.cover_image.ext}`"
                  class="rounded-0"
                >
              </b-col>
              <b-col md="7">
                <b-card-body :title="event[`title_${locale}`]">
                  <b-card-text>
                    <vue-markdown>{{ event[`article_${locale}`] }}</vue-markdown>
                  </b-card-text>
                </b-card-body>
              </b-col>
              <b-col md="2">
                <div class="date-container">
                  <div class="date-wrapper">
                    <div>
                      <div>{{ event.date_start && event.date_start.split(' ')[0].split('-').reverse().join('.') }}</div>
                      <!-- <div v-if="event.date_finish">-</div>
                      <div
                        v-if="event.date_finish"
                      >{{ event.date_finish && event.date_finish.split(' ')[0].split('-').reverse().join('.') }}</div> -->
                    </div>
                  </div>
                </div>
              </b-col>
            </b-row>
          </router-link>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';
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
    };
  },
  computed: {
    locale: () => {
      return i18n.locale;
    },
  },
  mounted() {
    this.$http
      .get(EVENTS_URL)
      .then(response => {
        this.data = response.data.slice(0, 4);
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
  components: { LoadingSpinner, ServerError, VuePureLightbox, VueMarkdown },
};
</script>

<style lang="postcss" scoped>
.card-body {
  padding: 0;
}
.card-title,
.card-text {
  padding: 10px;
  padding-top: 0;
}
.card-text>div{
  max-height: 100px!important;
  overflow: hidden;
}
.card-title {
  padding-top: 10px;
}
.card-text {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.date-container {
  /* background: #cf4e1f; */
  width: 100%;
  height: 100%;
  color: #cf4e1f;
  font-weight: bold;
  font-size: 18px;
  position: relative;
  line-height: 16px;
}
.date-wrapper {
  width: 100%;
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