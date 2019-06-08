<template>
  <div class="newsArchive">
    <loading-spinner v-if="loading"/>
    <server-error v-if="errored"/>
    <div id="news" class="cards" v-if="!errored && !loading">
      <b-row>
        <b-col cols="4" v-for="newsArticle in news" :key="newsArticle.id">
          <div class="card">
            <h5 class="card-title font-weight-bold">{{ newsArticle[`title_${locale}`] }}</h5>
            <div class="card-img-container">
              <img v-if="newsArticle.image"
                class="card-img-top rounded-0"
                :src="API_BASE_URL + newsArticle.image.url"
                :alt="newsArticle[`title_${locale}`]"
              >
              <img v-else src="@/assets/noimage.jpg" >
            </div>
            <div class="card-body">
              <p class="card-text"><vue-markdown>{{ newsArticle[`article_${locale}`] }}</vue-markdown></p>
            </div>
            <div class="btn-container">
              <b-button class="btn-read-more" :to="`/media/news-archive/${newsArticle.id}`">{{ $t("ReadMore") }}...</b-button>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
    <b-pagination
      class="pagination"
      v-model="currentPage"
      :total-rows="count"
      :per-page="perPage"
      aria-controls="news"
      v-on:click.native="goTo(currentPage)"
    ></b-pagination>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';
import i18n from '@/plugins/i18n';
import { API_BASE_URL, NEWSLETTERS_URL } from '@/constants.js';
import LoadingSpinner from '@/components/LoadingSpinner';
import ServerError from '@/components/ServerError';


export default {
  name: 'NewsArchive',
  data() {
    return {
      currentPage: 1,
      perPage: 3,
      news: null,
      loading: true,
      errored: false,
      API_BASE_URL,
      count: 0
    };
  },
  computed: {
    locale: () => {
      return i18n.locale;
    },
  },
  mounted() {
    this.$http
      .get(NEWSLETTERS_URL + `?_start=${this.currentPage - 1}&_limit=${this.perPage}`)
      .then(response => {
        this.news = response.data;
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));

      this.$http
      .get(NEWSLETTERS_URL + '/count')
      .then(response => {
        this.count = response.data;
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
  methods: {
    goTo(page){
    this.$http
      .get(NEWSLETTERS_URL + `?_start=${page - 1}&_limit=${this.perPage}`)
      .then(response => {
        this.news = response.data;
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
    }
  },
  components: { LoadingSpinner, ServerError, VueMarkdown }
};
</script>

<style lang="postcss" scoped>
.cards{
  margin: 30px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.card{
  border-radius: 0;
}

.card-title{
  margin: 15px 10px;
}

.card-img-container{
  max-height: 200px;
  overflow: hidden;
}

.card-body{
  max-height: 80px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;  
}

.btn-container{
  padding: 0.5rem 0 1.25rem 1.25rem;
}

.btn-read-more{
    font-weight: 500;
    -webkit-box-shadow: none;
    box-shadow: none;
    background-color: transparent;
    background: transparent;
    color: inherit;
    border: none;
    box-shadow: none;
    height: 30px;
    padding: 4px 6px;
    color: #004996;
}

.btn-read-more:active, .btn-read-more:visited{
    color:#004996!important;
    background: none!important;
    border: none!important;
    box-shadow: none!important;
}

.btn-read-more:hover{
    color:#4080ff;
}
</style>