<template>
  <div class="decisions-cards">
    <!-- <b-container>
      <div class="row">
        <div v-for="route in decisionsRoutes" :key="route.name" class="col decision-card">
          {{ $t(route.title) }}
        </div>
      </div>
    </b-container> -->
  </div>
</template>

<script>
import i18n from '@/plugins/i18n';
import { routes } from '@/router';

export default {
  name: 'DecisionsCards',
  data() {
    return {
      routes,
      decisionsRoutes: []
    };
  },
  mounted(){
    routes.forEach(route => {
      if(route.title === "Decisions")
        this.decisionsRoutes = route.children;
    });
  },
  computed: {
    locale: () => {
      return i18n.locale;
    },
  }
};
</script>

<style lang="postcss" scoped>
.decisions-cards{
  margin-top: 30px;
}

.decision-card{
  width: 120px;
  height: 130px;
  background: transparent;
  margin: 10px;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.125);
  cursor: pointer;
  padding: 10px;
  transition: all 0.6s;
}


</style>