<template>
  <div class="cards">
    <router-link to="/media/news-archive">
      <h5 class="section-title">{{ $t('News') }}</h5>
    </router-link>
    <b-row>
      <b-col lg="4" class="mb-2" v-for="newsArticle in data" :key="newsArticle.id">
        <router-link :to="`media/press-releases/${newsArticle.id}`">
          <div class="card">
            <div class="card-img-container">
              <div
                class="img-100"
                v-bind:style="{'background-image': newsArticle.image ? `url(${base_url}${newsArticle.image.url})` : `url(${noimage})`}"
              ></div>
            </div>
            <div class="card-body">{{ newsArticle[`title_${locale}`] }}</div>
            <div class="btn-container">
              <b-button
                class="btn-read-more"
                @click="expandArticle(newsArticle.id)"
              >{{ $t("ReadMore") }}...</b-button>
            </div>
          </div>
        </router-link>
      </b-col>
    </b-row>
    <div style="width: 100%; text-align: right">
      <router-link class="btn-read-more" to="/media/news-archive">{{ $t("ViewAll") }}...</router-link>
    </div>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';
import i18n from '@/plugins/i18n';
import { PRESSRELEASES_URL, API_BASE_URL } from '@/constants.js';
import LoadingSpinner from '@/components/LoadingSpinner';
import ServerError from '@/components/ServerError';

export default {
  name: 'Cards',
  data() {
    return {
      data: null,
      loading: true,
      errored: false,
    };
  },
  computed: {
    locale: () => {
      return i18n.locale;
    },
    base_url: () => {
      return API_BASE_URL;
    },
  },
  mounted() {
    this.$http
      .get(PRESSRELEASES_URL + '?_limit=3&_sort=date:DESC')
      .then(response => {
        this.data = response.data;
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
    return true;
  },
  methods: {
    expandArticle(id) {
      // alert(id);
      this.$router.push({ name: 'pressReleases', params: { id } });
    },
  },
  components: { LoadingSpinner, ServerError, VueMarkdown },
};
</script>

<style lang="postcss" scoped>
.cards {
  background: #fff;
  padding: 10px;
  border: 1px solid #ddd;
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

.card-title {
  margin: 8px;
  font-size: 18px;
  color: #1f345f;
}

.card-img-container {
  overflow: hidden;
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