<template>
  <div class="newsArchive">
    <loading-spinner v-if="loading"/>
    <server-error v-if="errored"/>
    <div class="cards" v-if="!errored && !loading">
      <div class="card" v-for="newsArticle in news" :key="newsArticle.id">
        <h4 class="card-title font-weight-bold">{{ newsArticle[`title_${locale}`] }}</h4>
        <div class="card-img-container">
          <img v-if="newsArticle.image"
            class="card-img-top rounded-0"
            :src="base_url + newsArticle.image.url"
            :alt="newsArticle[`title_${locale}`]"
          >
          <img v-else src="@/assets/noimage.jpg" >
        </div>
        <div class="card-body">
          <p class="card-text">{{ newsArticle[`article_${locale}`] }}</p>
        </div>
        <div class="btn-container">
          <b-button class="btn-read-more" @click="expandArticle">Read more...</b-button>
        </div>
      </div>

      <!-- <div v-for="article in data" v-bind:key="article.id">
        <div>
          <b-card-group deck>
            <b-card
              :title="article[`Title_${locale}`]"
              header-tag="header"
              footer-tag="footer"
              class="mb-5"
            >
              <h6 slot="header" class="mb-0">{{ article.Date.split(" ")[0] }}</h6>
              <b-card-text>{{ article[`Annotation_${locale}`] }}</b-card-text>
              <b-button
                :href="article[`Document_${locale}`] && article[`Document_${locale}`].url"
                :disabled="!article[`Document_${locale}`]"
                variant="primary"
              >{{ $t('ViewDocument') }}</b-button>
              <em slot="footer">{{ article[`Tags_${locale}`] }}</em>
            </b-card>
          </b-card-group>
        </div>
      </div>-->


    </div>
  </div>
</template>

<script>
import i18n from '@/plugins/i18n';
import { API_BASE_URL, NEWSLETTERS_URL } from '@/constants.js';
// import { NEWSARCHIVE_URL } from '@/constants.js';
import LoadingSpinner from '@/components/LoadingSpinner';
import ServerError from '@/components/ServerError';

export default {
  name: 'NewsArchive',
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
  },
  methods: {
    expandArticle(){
      
    }
  },
  components: { LoadingSpinner, ServerError }
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
  width: 31%;
  margin: 10px;
}

.card-title{
  margin: 15px 10px;
}

.card-img-container{
  max-height: 200px;
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