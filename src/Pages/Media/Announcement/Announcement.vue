<template>
  <div>
    <loading-spinner v-if="loading" />
    <server-error v-if="errored" />
    <div v-if="!errored && !loading">
      <div class="cards">
        <b-card v-for="event in data" :key="event.id" class="mb-3">
          <router-link :to="`/media/announcement/${event.id}`">
            <b-row no-gutters>
              <b-col md="7">
                <b-card-body :title="event[`title_${locale}`]">
                  <b-card-text>
                    <vue-markdown
                      :source="event[`article_${locale}`] && event[`article_${locale}`].substring(0, 140).concat('...')"
                    ></vue-markdown>
                  </b-card-text>
                </b-card-body>
              </b-col>
              <b-col md="2">
                <div class="date-container">
                  <div class="date-wrapper">
                    <div>{{ event.date && event.date.split(' ')[0].split('-').reverse().join('.') }}</div>
                  </div>
                </div>
              </b-col>
            </b-row>
          </router-link>
        </b-card>
      </div>
      <div style="text-align: right" class="mt-3">
        <!-- <router-link to="/media/news-archive" class="btn-read-more mb-5 pull-right">
          <span>{{ $t("ViewAll") }}...</span>
        </router-link>-->
      </div>
    </div>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';
import i18n from '@/plugins/i18n';
import { ANNOUNCEMENTS_URL, API_BASE_URL } from '@/constants.js';
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
      .get(ANNOUNCEMENTS_URL+'?_sort=id:desc')
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
.card-title {
  padding-top: 10px;
}

.date-container {
  /* background: #b74f29; */
  width: 100%;
  height: 100%;
  color: #b74f29;
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