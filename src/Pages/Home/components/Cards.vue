<template>
  <div class="cards">
    <h4 style="margin-bottom: 20px;">{{ $t('NewsArchive') }}</h4>
      <!-- <b-card no-body class="overflow-hidden" v-for="newsArticle in news" :key="newsArticle.id">
          <b-row no-gutters>
            <b-col md="4">
              <b-card-img :src="base_url + newsArticle.image.url" :alt="newsArticle[`title_${locale}`]" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="8">
              <b-card-body :title="newsArticle[`title_${locale}`]">
                <b-card-text>
                  <p>
                  {{ newsArticle[`article_${locale}`] }}
                  </p>
                </b-card-text>
              <div class="btn-container">
                <b-button class="btn-read-more" @click="expandArticle(newsArticle.id)">{{ $t("ReadMore") }}...</b-button>
              </div>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card> -->
    <b-row>
      <b-col cols="4" v-for="newsArticle in news" :key="newsArticle.id">
        <div class="card">
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
            <b-button class="btn-read-more" @click="expandArticle(newsArticle.id)">{{ $t("ReadMore") }}...</b-button>
          </div>
        </div>
      </b-col>
    </b-row>
    <div style="width: 100%; text-align: right">
      <router-link class="btn-read-more" to="/media/news-archive">{{ $t("ViewAll") }}...</router-link>
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
        if(response.data.length > 3)
          this.news = response.data.slice(0, 3);
        else
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
    expandArticle(id) {
      // alert(id);
      this.$router.push({ name: 'newsDetails', params: { id } });
    }
  },
  components: { LoadingSpinner, ServerError },
};
</script>

<style lang="postcss" scoped>
.cards{
  background: #fff;
  padding: 30px;
  border: 1px solid #ddd;
}

.card{
  border-radius: 0;
  margin-bottom: 30px;
}

.card-title{
  margin: 8px;
  font-size: 18px;
  color: #1f345f;
}

.card-img-container{
  max-height: 200px;
  overflow: hidden;
}

.card-body{
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  font-family: 'Open Sans', 'BPG Glaho WEB Caps', sans-serif;
  max-height: 46px;
  padding: 8px;
}
.card-text{
  font-size: 14px;
}

@media (max-width: 1010px){
  .card{
    width: 92%;
    /* margin: 10px 0; */
    border-radius: 0;
  }
}

</style>