<template>
  <div class="cards">
    <loading-spinner v-if="loading" />
    <server-error v-if="errored" />
    <div v-if="!errored && !loading">
      <router-link to="/media/events">
        <h5 class="section-title">{{ $t('Events') }}</h5>
      </router-link>
      <b-row>
      <b-col lg="4" class="mb-2" v-for="event in data" :key="event.id">
        <router-link :to="`media/events/${event.id}`">
          <div class="card">
            <div class="card-img-container">
              <div
                class="img-100"
                v-bind:style="{'background-image': event.cover_image ? `url(${API_BASE_URL}${event.cover_image.url})` : `url(${noimage})`}"
              ></div>
            </div>
            <div class="card-body">{{ event[`title_${locale}`] }}</div>
            <div class="btn-container">
              <b-button
                class="btn-read-more web"
                @click="expandArticle(event.id)"
              >{{ $t("ReadMore") }}...</b-button>
            </div>
          </div>
        </router-link>
      </b-col>
        </b-row>
      <div style="width: 100%; text-align: right">
        <router-link to="/media/events" class="btn-read-more">
          <span>{{ $t("ViewAll") }}...</span>
        </router-link>
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

export default {
  name: 'PhotoGallery',
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
      .get(EVENTS_URL + '?_limit=3&_sort=date:DESC')
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
};
</script>

<style lang='postcss' scoped>
.gallery-thumbnail {
  width: 100%;
  background: #141e3a;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

.card {
  border-radius: 0;
  box-shadow: none;
  border-color: #efefef;
}

.btn-read-more {
  background: transparent;
  padding: 4px 6px;
}

.card-body {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  max-height: 70px;
  min-height: 70px;
  padding: 8px;
  font-size: 14px;
  font-weight: bold;
  color: #141e3a;
}
</style>