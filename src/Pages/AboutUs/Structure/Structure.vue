<template>
  <b-container>
    <loading-spinner v-if="loading"/>
    <server-error v-if="errored"/>
    <div v-if="!errored && !loading">
      <b-row>
        <b-col cols="6" v-for="emp in data" :key="emp.id">
          <b-card no-body class="overflow-hidden mb-3">
            <b-row no-gutters>
              <b-col md="4" style="height: 160px">
                <!-- <b-card-img style="max-width: 100%" :src="emp.photo && `${API_BASE_URL}/uploads/${emp.photo.hash}${emp.photo.ext}`"/> -->
                <div class="img-100" v-bind:style="{'background-image': emp.photo ? `url(${API_BASE_URL}/uploads/${emp.photo.hash}${emp.photo.ext})` : `url(${noimage})`}"></div>
              </b-col>
              <b-col md="8">
                <b-card-body :title="emp[`name_${locale}`]">
                  <b-card-text>
                    <h5 class="position">{{ emp[`position_${locale}`] }}</h5>
                    <div>
                      <a :href="`tel:${emp.tel_number}`">{{ emp.tel_number }}</a>
                    </div>
                    <div>
                      <a :href="`mailto:${emp.email}`">{{ emp.email }}</a>
                    </div>
                    <div v-if="emp[`cv_${locale}`]">
                      <a :href="emp[`cv_${locale}`] && `${API_BASE_URL}/uploads/${emp[`cv_${locale}`].hash}${emp[`cv_${locale}`].ext}`" target="_blank">{{ $t('CurriculumVitae') }}</a>
                    </div>
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </div>

    <!-- <div :v-if="locale">
      <div class="image-canvas">
        
        <div id="base">
          <img style="width: 100%" :src="structure" alt="Structure">
        </div>   

        <div class="overlay">
          <span v-for="(item, index) in tree" :key="index">
            <b-button :to="'/employees/' + index" :id="index">{{ item.title }}</b-button>
            <b-tooltip :target="index.toString()">{{ item.name }}</b-tooltip>
          </span>
        </div>
    
      </div>

      <div v-for="(item, index) in tree" :key="index" class="mb-2">
        <b-button :to="'/employees/' + index" :id="index">{{ item.title }}</b-button>
        <b-tooltip :target="index.toString()">{{ item.name }}</b-tooltip>
      </div>
    </div> -->
  </b-container>
</template>

<script>
import i18n from '@/plugins/i18n';
import { API_BASE_URL, EMPLOYEES_URL } from '@/constants.js';
import LoadingSpinner from '@/components/LoadingSpinner';
import ServerError from '@/components/ServerError';
import noimage from '../../../assets/noimage.jpg';

export default {
  name: 'Structure',
  data() {
    return {
      currentPage: 1,
      news: null,
      loading: true,
      errored: false,
      API_BASE_URL,
      noimage
    };
  },
  computed: {
    locale: () => {
      return i18n.locale;
    },
  },
  mounted() {
    this.$http
      .get(EMPLOYEES_URL)
      .then(response => {
        this.data = response.data;
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
// import i18n from '@/plugins/i18n';
// import structure from './structure.jpg';
// import tree from './structure-tree.js';

// export default {
//   name: 'Structure',
//   data() {
//     return {
//       structure,
//       tree,
//     };
//   },
//   computed: {
//     locale: () => {
//       console.log(i18n.locale);
//       return i18n.locale;
//     },
//   },
//   mounted() {
//   }
// };
</script>

<style lang="postcss" scoped>
.position{
  font-size: 16px;
}
.img-100{
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
}
.image-canvas{
  position: relative;
  width: 100%;
  height: 100%;
}

.overlay{
  width: 100%;
  height: 100%;
}

.overlay span{
  position: absolute;
  z-index: 10;
}

.overlay span a{
  background-color: transparent;
  border: none;
  width: 110px;
  height: 60px;
  color: transparent;
}

.overlay span a:active, .overlay span a:focus{
  background-color: transparent!important;
  box-shadow: none!important;
  color: transparent!important;
  border: none!important;
}

.overlay span:nth-child(1){
  top: 220px;
  left: 460px;
}

.overlay span:nth-child(2){
  top: 312px;
  left: 200px;
}

.overlay span:nth-child(3){
  top: 325px;
  left: 600px;
}

.overlay span:nth-child(4){
  top: 425px;
  left: 360px;
}

.overlay span:nth-child(4) a,
.overlay span:nth-child(6) a,
.overlay span:nth-child(7) a{
  font-size: 0;
}

.overlay span:nth-child(5){
  top: 425px;
  left: 205px;
}

.overlay span:nth-child(6){
  top: 425px;
  left: 695px;
}

.overlay span:nth-child(7){
  top: 425px;
  left: 535px;
}

.overlay span:nth-child(8){
  top: 425px;
  left: 835px;
}

.overlay span:nth-child(9){
  top: 520px;
  left: 105px;
}

#base {
  width: 1120px;
  height: auto;
}

</style>