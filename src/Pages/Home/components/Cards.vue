<template>
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
        <b-button class="btn-read-more" @click="expandArticle(newsArticle.id)">{{ $t("ReadMore") }}...</b-button>
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
        if(response.data.length > 4)
          this.news = response.data.slice(0, 4);
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
  margin: 30px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 1rem;
}

.card{
  width: 47%;
  margin: 10px 0;
  border-radius: 0;
}

.card:nth-child(odd){
  margin-left: 0;
}

.card-title{
  margin: 15px 1.25rem;
  color: #1f345f;
}

.card-img-container{
  max-height: 200px;
  height: 200px;
  overflow: hidden;
}

.card-body{
  max-height: 70px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  font-family: 'Open Sans', 'BPG Glaho WEB Caps', sans-serif;
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
  color: #DB2323;
  
}

.btn-read-more:active, .btn-read-more:visited{
  color:#ff5d43!important;
  background: none!important;
  border: none!important;
  box-shadow: none!important;
}

.btn-read-more:hover{
  color:#ff5d43;
}

@media (max-width: 1010px){
  .card{
    width: 92%;
    /* margin: 10px 0; */
    border-radius: 0;
  }
}

</style>