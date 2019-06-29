<template>
  <div class="cards">
    <router-link to="/media/news-archive">
      <h5 class="section-title">{{ $t('News') }}</h5>
    </router-link>
    <b-row>
      <b-col cols="4" v-for="newsArticle in data" :key="newsArticle.id">
        <router-link :to="`media/press-releases#accordion-1-${newsArticle.id}`">
          <div class="card">
            <!-- <h4
              class="card-title font-weight-bold line-limit-2"
              :title="newsArticle[`title_${locale}`]"
            >{{ newsArticle[`title_${locale}`] }}</h4>-->
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
      <!-- <b-col cols="4" v-for="newsArticle in news" :key="newsArticle.id">
        <div class="card">
          <h4
            class="card-title font-weight-bold line-limit-2"
            :title="newsArticle[`title_${locale}`]"
          >{{ newsArticle[`title_${locale}`] }}</h4>
          <div class="card-img-container">
            <div
              class="img-100"
              v-bind:style="{'background-image': newsArticle.image ? `url(${base_url}${newsArticle.image.url})` : `url(${noimage})`}"
            ></div>
          </div>
          <div class="card-body">
            <p class="card-text">
              <vue-markdown>{{ newsArticle[`article_${locale}`] }}</vue-markdown>
            </p>
          </div>
          <div class="btn-container">
            <b-button
              class="btn-read-more"
              @click="expandArticle(newsArticle.id)"
            >{{ $t("ReadMore") }}...</b-button>
          </div>
        </div>
      </b-col>-->
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
      .get(PRESSRELEASES_URL + '?_limit=3')
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
  max-height: 150px;
  overflow: hidden;
}

.card-body {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  max-height: 70px;
  padding: 8px;
  font-size: 14px;
  font-weight: bold;
  color: #141e3a;
}

@media (max-width: 1010px) {
  .card {
    width: 92%;
    /* margin: 10px 0; */
    border-radius: 0;
  }
}
</style>