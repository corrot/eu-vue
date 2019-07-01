<template>
  <b-container>
    <loading-spinner v-if="loading"/>
    <server-error v-if="errored"/>
    <div v-if="!errored && !loading">
      <ul class="links-container">
        <li v-for="linkType in data" :key="linkType.id" class="link">
          <h5 class="section-title" v-if="linkType.links.length">{{ linkType[`title_${locale}`] }}</h5>
          <div v-for="link in linkType.links" :key="link.id">
            <a
              :href="link.link"
              target="_blank"
            >
              {{ link[`title_${locale}`] }}
            </a>
          </div>
        </li>
      </ul>
    </div>
  </b-container>
</template>

<script>
import i18n from '@/plugins/i18n';
import { API_BASE_URL, LINKS_URL, LINKTYPES_URL } from '@/constants.js';
import LoadingSpinner from '@/components/LoadingSpinner';
import ServerError from '@/components/ServerError';

export default {
  name: 'Links',
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
  },
  mounted() {
    this.$http
      .get(LINKTYPES_URL)
      .then(response => {
        this.data = response.data;
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
  components: { LoadingSpinner, ServerError },
};
</script>

<style lang="postcss" scoped>
.links-container {
  text-align: left;
  margin-bottom: 50px;
}

a{
  list-style-type: disc;
}

h1{
  margin-bottom: 30px;
}

.link {
  margin-bottom: 30px;
  font-size: 18px;
}

/* 
a[href^="http"]:after {
    font-family: FontAwesome;
    content: "\f08e";
    font-size: 0.800em;
    display: inline-block;
    margin-left: 0.25em;
    margin-right: 2px;
    position: relative;
    top: 0;
    color: #444444;
}

a[href^="http"]:visited:after {
    color: #9eacbc;
} */
</style>