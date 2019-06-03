<template>
  <div>
    <div id="slider-footer"></div>
    <b-container style="margin-bottom: 20px">
      <div class="decisions-cards">
        <b-row>
          <b-col v-for="route in decisionsRoutes" :key="route.name" class="col decision-card">
            <router-link :to="route.path">
              <div class="card-icon"></div>
              <span>{{ $t(route.title) }}</span>
            </router-link>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
import i18n from '@/plugins/i18n';
import { routes } from '@/router';
import BASE_URL from '@/constants';

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
    this.decisionsRoutes.forEach(path => console.log(path.path))
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
#slider-footer{
  background: #141e3a !important;
  height: 6em;
}

.decisions-cards{
  margin-top: -82px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
}

.decision-card{
  height: 180px;
  background: transparent;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  font-family: 'Open Sans', 'BPG Glaho WEB Caps', sans-serif;
  transition: all ease 0.4s;
}

.decision-card:hover{
  color: #DB2323;
  filter: invert(100%);
}

.card-icon {
  margin-bottom: 15px;
  height: 50%;
  background-repeat: no-repeat;
  margin: 0 auto;
  background-size: 60%;
  background-position: center;
  width: 70px;
  height: 70px;
  background-color: #007bff;
  border-radius: 50%;
  margin-bottom: 20px;
  /* filter: invert(100%); */
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