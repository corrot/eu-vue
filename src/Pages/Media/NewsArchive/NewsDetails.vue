<template>
  <div class="newsDetails">
    <!-- todo: add an option to go back -->
    <!-- todo: breadcrumb -->
    <h1>erkjfbhr</h1>
      <div class="newsDetail">


      
      </div>
  </div>
</template>

<script>
import i18n from '@/plugins/i18n';

export default {
  name: 'NewsDetails',
  data() {
    return {
        articleId: -1
     };
  },
  computed: {
    locale: () => {
      return i18n.locale;
    }
  },
  mounted() {
      
  },
  components: { }
};
</script>

<style lang="postcss" scoped>

</style>