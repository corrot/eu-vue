<template>
<<<<<<< HEAD
  <div class="cards">
    <div class="card" v-for="newsArticle in news" :key="newsArticle.id">
      <h4 class="card-title font-weight-bold">{{ newsArticle[`title_${locale}`] }}</h4>
      <div class="card-img-container">
        <img class="card-img-top rounded-0" 
        :src="base_url + newsArticle.image.url" :alt="newsArticle[`title_${locale}`]">
      </div>
      <div class="card-body">
        <p class="card-text">
          {{ newsArticle[`article_${locale}`] }}
        </p>
      </div>
      <div class="btn-container">
        <b-button class="btn-read-more" @click="expandArticle">Read more...</b-button>
=======
  <div class="cards container">
    <div class="row card-row">
      <!-- todo: only several of news -->
      <div class="card col-5" v-for="newsArticle in news" :key="newsArticle.id">
        <h4 class="card-title font-weight-bold">{{ newsArticle[`title_${locale}`] }}</h4>
        <div class="card-img-container">
          <img class="card-img-top rounded-0" 
          :src="base_url + newsArticle.image.url" :alt="newsArticle[`title_${locale}`]">
        </div>
        <div class="card-body">
          <p class="card-text">
            {{ newsArticle[`article_${locale}`] }}
          </p>
        </div>
        <div class="btn-container">
          <b-button class="btn-read-more" @click="expandArticle">{{ $t('ReadMore') + '...'}}</b-button>
        </div>
>>>>>>> f6efbe8507d9b8f30823dbdf5aac2bb5fc60015f
      </div>
    </div>
  </div>
</template>

<script>
import i18n from '@/plugins/i18n';
import { NEWSLETTERS_URL, API_BASE_URL } from '@/constants.js';
import LoadingSpinner from '@/components/LoadingSpinner';
import ServerError from '@/components/ServerError';

export default {
  name: 'Cards',
  data() {
    return {
      news: null,
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
    }
  },
  mounted() {
    this.$http
      .get(NEWSLETTERS_URL)
      .then(response => {
        this.news = response.data;
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
      return true;
  },
  methods: {
    expandArticle() {
      console.log("read");
      
    }
  },
  components: { LoadingSpinner, ServerError },
};
</script>

<style lang="postcss" scoped>
.cards{
  margin: 30px 0;
  display: flex;
  flex-wrap: wrap;
}

.card{
  margin: 1rem;
  width: 350px;
}

.card:nth-child(odd){
  margin-left: 0;
}

.card-title{
  margin: 15px 10px;
}

.card-img-container{
  max-height: 160px;
  overflow: hidden;
}

.card-body{
  max-height: 95px;
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
    color: inherit;
    border: none;
    box-shadow: none;
    height: 30px;
    padding: 0;
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