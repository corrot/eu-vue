<template>
  <div>
    <div id="slider-footer"></div>
    <b-container class="web" style="margin-bottom: 20px">
      <div class="decisions-cards">
        <b-row>
          <b-col v-for="route in decisionsRoutes" :key="route.name" class="col decision-card">
            <router-link :to="route.path">
              <div class="card-icon">
                <div></div>
              </div>
              <div class="card-icon-title">
                <div class="triangle"></div>
                {{ $t(route.title) }}
              </div>
            </router-link>
          </b-col>
        </b-row>
      </div>
    </b-container>
    <b-container class="mobile" style="margin-bottom: 20px">
      <div class="decisions-cards">
        <div v-for="route in decisionsRoutes" :key="route.name" class="col decision-card">
          <router-link :to="route.path">
            <div style="position: relative; dispay: flex">
              <div class="card-icon"></div>
              <div class="card-icon-title">{{ $t(route.title) }}</div>
            </div>
          </router-link>
        </div>
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
      decisionsRoutes: [],
    };
  },
  mounted() {
    routes.forEach(route => {
      if (route.title === 'Decisions') this.decisionsRoutes = route.children;
    });
  },
  computed: {
    locale: () => {
      return i18n.locale;
    },
  },
  methods: {
    goTo(routeName) {
      this.$router.push({ name: routeName });
    },
  },
};
</script>

<style lang="postcss" scoped>
#slider-footer {
  background: #141e3a !important;
  height: 6em;
}

.decisions-cards {
  margin-top: -62px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.decision-card {
  height: 180px;
  background: transparent;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  font-family: 'Open Sans', 'BPG Glaho WEB Caps', sans-serif;
  transition: all ease 0.4s;
}

.decision-card:hover {
  color: #db2323;
}

.card-icon {
  margin-bottom: 5px;
  height: 50%;
  background-repeat: no-repeat;
  margin: 0 auto;
  background-size: 60%;
  background-position: center;
  width: 70px;
  height: 70px;
  background-color: #48b0d6;
  margin-bottom: 20px;
  filter: invert(100%);
  margin-bottom: 10px;
}

.decision-card:hover > a > .card-icon-title > .triangle {
  opacity: 1;
  transition: 0.3s ease all;
}

.decision-card:hover > a > .card-icon-title {
  color: #b74f29;
  transition: 0.3s ease all;
}

.card-icon-title {
  font-size: 14px;
  color: #141e3a;
  line-height: 18px;
  position: relative;
  transition: 0.3s ease all;
}

.decision-card:nth-child(1) .card-icon {
  background-image: url('../../../assets/decisions-icons/01.png');
}

.decision-card:nth-child(2) .card-icon {
  background-image: url('../../../assets/decisions-icons/02.png');
  background-size: 90%;
  background-position-y: -20%;
}

.decision-card:nth-child(3) .card-icon {
  background-image: url('../../../assets/decisions-icons/03.png');
}

.decision-card:nth-child(4) .card-icon {
  background-image: url('../../../assets/decisions-icons/04.png');
}

.decision-card:nth-child(5) .card-icon {
  background-image: url('../../../assets/decisions-icons/05.png');
}

.decision-card:nth-child(6) .card-icon {
  background-image: url('../../../assets/decisions-icons/06.png');
}

.decision-card:nth-child(7) .card-icon {
  background-image: url('../../../assets/decisions-icons/07.png');
}

@media (max-width: 992px) {
  .decisions-cards {
    margin-top: 25px;
    pxdisplay: flex;
    align-items: unset;
    justify-content: unset;
    flex-direction: column;
  }

  .decision-card {
    margin-bottom: 20px;
    display: inline-block;
    text-align: left !important;
  }

  .card-icon {
    margin: 0;
    display: inline-block;
  }

  .card-icon-title {
    position: relative;
    top: 0;
  }

  #slider-footer {
    height: 0;
  }
}
</style>