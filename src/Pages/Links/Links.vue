<template>
  <b-container>
    <h1>Links</h1>
    <ul class="links-container">
      <li v-for="link in data" :key="link.id" class="link">
        <a v-if="link[`title_${locale}`] && link.link" :href="link.link">{{ link[`title_${locale}`] }}</a>
        <a v-else-if="!(link[`title_${locale}`])" :href="link.link">Link {{ link.id }}</a>
        <a v-else-if="!link.link" href="#">{{ link[`title_${locale}`] }}</a>
      </li>
    </ul>
  </b-container>
</template>

<script>
import i18n from '@/plugins/i18n';
import { API_BASE_URL, LINKS_URL } from '@/constants.js';
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
      console.log(i18n.locale);
      return i18n.locale;
    },
  },
  mounted() {
    this.$http
      .get(LINKS_URL)
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