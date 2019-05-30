<template>
  <div class="decisions-cards">
    <div class="container-fluid" style="margin: 1% 10%; width: auto;">
      <div class="row">
        <div v-for="route in decisionsRoutes" :key="route.name" class="col decision-card" @click="goTo(route.name)">
          <div class="card-icon"></div>
          <span>{{ $t(route.title) }}</span>
        </div>
      </div>
    </div>
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
  },
  methods: {
    goTo(routeName){
      this.$router.push({ name: routeName });
    }
  }
};
</script>

<style lang="postcss" scoped>
.decisions-cards{
  margin-top: 60px;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  
}

.decision-card{
  height: 180px;
  background: transparent;
  margin: 20px;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  font-family: 'Open Sans', 'BPG Glaho WEB Caps', sans-serif;
  transition: all ease 0.4s;
}

.decision-card:hover{
  color: #DB2323;
}

.card-icon {
  width: 50%;
  margin-bottom: 15px;
  height: 50%;
  background-repeat: no-repeat;
  margin: 0 auto;
  max-width: 71px;
  background-size: 100%;
}

.decision-card:nth-child(1) .card-icon{
  background-image: url('../../../assets/decisions-icons/dominance.svg');
}

.decision-card:nth-child(2) .card-icon{
  background-image: url('../../../assets/decisions-icons/handshake.svg');
}

.decision-card:nth-child(3) .card-icon{
  background-image: url('../../../assets/decisions-icons/file.svg');
}

.decision-card:nth-child(4) .card-icon{
  background-image: url('../../../assets/decisions-icons/injustice.svg');
}

.decision-card:nth-child(5) .card-icon{
  background-image: url('../../../assets/decisions-icons/jigsaws.svg');
}

.decision-card:nth-child(6) .card-icon{
  background-image: url('../../../assets/decisions-icons/courthouse.svg');
}

.decision-card:nth-child(7) .card-icon{
  background-image: url('../../../assets/decisions-icons/bars.svg');
}

</style>